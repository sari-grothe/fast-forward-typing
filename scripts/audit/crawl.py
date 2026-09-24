#!/usr/bin/env python3
"""Full-site technical audit against production (or any base URL).

Usage: python3 scripts/audit/crawl.py [https://fastforwardtyping.com]

Checks EVERY URL in the sitemap plus every internal link discovered on
those pages (lessons, legal, tools). Exit code 1 if any check fails, so
"final geprueft" can only be claimed after a green run. Output: a
summary table plus one line per failure.
"""
import html as htmllib
import json
import re
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

BASE = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "https://fastforwardtyping.com"
LOCALES = ("de", "en", "fr")
UA = {"User-Agent": "fft-audit/1.0"}


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


def fetch(url, follow=False):
    opener = urllib.request.build_opener() if follow else urllib.request.build_opener(NoRedirect)
    try:
        r = opener.open(urllib.request.Request(url, headers=UA), timeout=40)
        return r.status, r.headers.get("Location", ""), r.read().decode("utf-8", "ignore")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location", ""), ""
    except Exception as e:  # noqa: BLE001
        return 0, str(e), ""


def absolute(href):
    if href.startswith("http"):
        return href
    return BASE + href


def text_of(fragment):
    fragment = re.sub(r"<script.*?</script>|<style.*?</style>", "", fragment, flags=re.S)
    return htmllib.unescape(re.sub(r"<[^>]+>", " ", fragment))


failures = []


def fail(url, what):
    failures.append((url, what))


def audit_page(url):
    st, loc, body = fetch(url)
    row = {"url": url, "status": st}
    if st != 200:
        fail(url, f"status {st} {loc}")
        return row, set()

    head = body.split("</head>")[0]
    locale = url.replace(BASE, "").split("/")[1]
    if locale not in LOCALES:
        locale = None

    # Language + canonical + hreflang
    lang = re.search(r'<html[^>]*\slang="([^"]+)"', body)
    if locale and (not lang or lang.group(1) != locale):
        fail(url, f"html lang {lang.group(1) if lang else None} != {locale}")
    canon = re.findall(r'<link rel="canonical" href="([^"]+)"', head)
    if len(canon) != 1:
        fail(url, f"{len(canon)} canonical tags")
    elif canon[0] != url:
        fail(url, f"canonical {canon[0]}")
    alts = dict(re.findall(r'<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"', head))
    row["hreflang"] = len(alts)
    noindex = "noindex" in (re.search(r'<meta name="robots" content="([^"]*)"', head) or [""])[0] if re.search(r'<meta name="robots"', head) else False
    row["noindex"] = noindex
    if alts:
        if locale and alts.get(locale) != url:
            fail(url, f"hreflang self-reference missing/wrong ({alts.get(locale)})")
        if "x-default" not in alts:
            fail(url, "hreflang without x-default")

    # Title / description / H1 / OG
    title = re.search(r"<title>(.*?)</title>", head, re.S)
    t = htmllib.unescape(title.group(1)).strip() if title else ""
    row["title"] = len(t)
    if not t:
        fail(url, "no title")
    elif len(t) > 60:
        fail(url, f"title {len(t)} chars")
    desc = re.search(r'<meta name="description" content="([^"]*)"', head)
    d = htmllib.unescape(desc.group(1)) if desc else ""
    row["desc"] = len(d)
    if not d:
        fail(url, "no meta description")
    elif not 70 <= len(d) <= 160:
        fail(url, f"description {len(d)} chars")
    h1s = re.findall(r"<h1[\s>]", body)
    row["h1"] = len(h1s)
    if len(h1s) != 1:
        fail(url, f"{len(h1s)} h1")
    if not re.search(r'property="og:image"', head):
        fail(url, "no og:image")

    # JSON-LD must parse
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', body, re.S):
        try:
            json.loads(htmllib.unescape(block))
        except json.JSONDecodeError as e:
            fail(url, f"invalid JSON-LD: {e}")

    # Images need alt
    for img in re.findall(r"<img\b[^>]*>", body):
        if "alt=" not in img:
            fail(url, f"img without alt: {img[:80]}")

    # Word count of main content
    main = re.search(r"<main.*?</main>", body, re.S)
    words = len(text_of(main.group(0) if main else body).split())
    row["words"] = words

    # Internal links (for the second pass) and legacy-segment leaks
    links = set()
    for href in re.findall(r'href="([^"]+)"', body):
        if href.startswith("#") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        if href.startswith("/") or href.startswith(BASE):
            clean = absolute(href).split("#")[0].split("?")[0]
            if "/_next/" in clean or clean.endswith((".svg", ".png", ".ico", ".xml", ".txt")):
                continue
            links.add(clean)
    if re.search(r'href="/(de|fr)/(speed-test|lessons|placement|certificate|resources|help|about|tools/keyboard-layouts|companies)\b', body):
        fail(url, "internal link uses English segment instead of native slug")
    return row, links


def main():
    st, _, sm = fetch(BASE + "/sitemap.xml")
    if st != 200:
        print("sitemap unreachable", st)
        sys.exit(1)
    sitemap_urls = re.findall(r"<loc>(.*?)</loc>", sm)
    print(f"Sitemap: {len(sitemap_urls)} URLs")

    with ThreadPoolExecutor(8) as ex:
        results = list(ex.map(audit_page, sitemap_urls))
    rows = [r for r, _ in results]
    all_links = set().union(*(l for _, l in results))

    # hreflang targets must be in the sitemap (canonical, indexable)
    for u in sitemap_urls:
        if any(r["noindex"] for r in rows if r["url"] == u):
            fail(u, "noindex URL listed in sitemap")

    # Second pass: every internal link must resolve with 200 directly, or
    # with exactly one permanent redirect to a 200 (no chains, no 404s).
    extra = sorted(all_links - set(sitemap_urls))
    print(f"Internal links outside the sitemap: {len(extra)}")

    def check_link(u):
        st, loc, _ = fetch(u)
        if st == 200:
            return
        if st in (301, 308):
            st2, loc2, _ = fetch(absolute(loc))
            if st2 != 200:
                fail(u, f"redirect chain {st} -> {loc} -> {st2} {loc2}")
            else:
                fail(u, f"internal link is a redirect ({st} -> {loc}); link the final URL")
        else:
            fail(u, f"internal link status {st}")

    with ThreadPoolExecutor(8) as ex:
        list(ex.map(check_link, extra))

    # Legacy URLs: one permanent hop to a 200
    legacy = ["/de/speed-test", "/de/lessons/3", "/de/placement", "/de/certificate", "/de/resources", "/de/help", "/de/contact", "/de/about", "/de/tools/keyboard-layouts", "/de/companies", "/de/tips", "/fr/speed-test", "/fr/lessons", "/fr/placement", "/fr/certificate", "/fr/resources", "/fr/help", "/fr/about", "/fr/tools/keyboard-layouts", "/fr/companies", "/fr/tips", "/en/companies", "/tippgeschwindigkeit", "/ressources", "/unternehmen", "/entreprises"]
    for p in legacy:
        st, loc, _ = fetch(BASE + p)
        if st not in (301, 308):
            fail(BASE + p, f"legacy URL not permanently redirected ({st})")
        else:
            st2 = fetch(absolute(loc))[0]
            if st2 != 200:
                fail(BASE + p, f"legacy redirect target {loc} -> {st2}")

    # Root files
    for p, must in (("/robots.txt", "Sitemap:"), ("/llms.txt", "# Fast Forward"), ("/llms-full.txt", "# Fast Forward")):
        st, _, body = fetch(BASE + p)
        if st != 200 or must not in body:
            fail(BASE + p, f"missing or wrong ({st})")
    st, _, _ = fetch(BASE + "/de/diese-seite-gibt-es-nicht")
    if st != 404:
        fail(BASE + "/de/diese-seite-gibt-es-nicht", f"unknown page returns {st}, not 404")

    # Security headers
    try:
        r = urllib.request.urlopen(urllib.request.Request(BASE + "/en", headers=UA), timeout=40)
        for h in ("strict-transport-security", "x-content-type-options", "referrer-policy", "x-frame-options"):
            if not r.headers.get(h):
                fail(BASE + "/en", f"missing header {h}")
    except Exception as e:  # noqa: BLE001
        fail(BASE + "/en", f"header check failed: {e}")

    # Report
    print(f"\n{'URL':70} {'st':>3} {'hl':>2} {'ttl':>3} {'dsc':>3} {'h1':>2} {'words':>5}")
    for r in sorted(rows, key=lambda r: r["url"]):
        print(f"{r['url'].replace(BASE, ''):70} {r['status']:>3} {r.get('hreflang', 0):>2} {r.get('title', 0):>3} {r.get('desc', 0):>3} {r.get('h1', 0):>2} {r.get('words', 0):>5}")
    thin = [r for r in rows if r.get("words", 0) < 300]
    print(f"\nPages under 300 words (content warning, not a failure): {len(thin)}")
    for r in thin:
        print("  ", r["url"].replace(BASE, ""), r["words"])
    print(f"\nFAILURES: {len(failures)}")
    for u, w in failures:
        print(f"  {u.replace(BASE, '')}: {w}")
    sys.exit(1 if failures else 0)


if __name__ == "__main__":
    main()
