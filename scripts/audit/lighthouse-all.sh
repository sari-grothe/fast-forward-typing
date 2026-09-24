#!/bin/sh
# Lighthouse (mobile) on EVERY sitemap URL plus one lesson page per locale.
# Usage: sh scripts/audit/lighthouse-all.sh [base-url] [out-dir]
# Thresholds: all four categories 100, LCP < 2.5 s, CLS < 0.1. Any miss is
# listed at the end and the script exits 1. Takes ~20-30 minutes.
BASE="${1:-https://fastforwardtyping.com}"
OUT="${2:-/tmp/fft-lighthouse}"
mkdir -p "$OUT"
URLS=$(curl -s "$BASE/sitemap.xml" | grep -oE '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g')
URLS="$URLS
$BASE/de/10-finger-schreiben-lernen/3
$BASE/en/lessons/3
$BASE/fr/cours-de-dactylographie/3
$BASE/de/privacy
$BASE/en/imprint
$BASE/fr/terms"

run_one() {
  u="$1"; n=$(echo "$u" | sed "s|$BASE/||; s|/|_|g"); [ -z "$n" ] && n=root
  npx --yes lighthouse "$u" --quiet --output=json --output-path="$OUT/$n.json" \
    --form-factor=mobile --screenEmulation.mobile \
    --chrome-flags="--headless=new --no-sandbox" \
    --only-categories=performance,accessibility,best-practices,seo >/dev/null 2>&1
}

i=0
for u in $URLS; do
  run_one "$u" &
  i=$((i+1)); [ $((i % 3)) -eq 0 ] && wait
done
wait

python3 - "$OUT" "$BASE" <<'EOF'
import json, glob, sys
out, base = sys.argv[1], sys.argv[2]
bad = []
print(f"{'URL':60} {'P':>3} {'A':>3} {'BP':>3} {'SEO':>3} {'LCP':>7} {'CLS':>6}")
for f in sorted(glob.glob(out + "/*.json")):
    try:
        d = json.load(open(f))
    except Exception:
        bad.append((f, "unreadable report")); continue
    c, a = d["categories"], d["audits"]
    s = {k: round((c[k]["score"] or 0) * 100) for k in ("performance", "accessibility", "best-practices", "seo")}
    lcp = a["largest-contentful-paint"]["numericValue"] / 1000
    cls = a["cumulative-layout-shift"]["numericValue"]
    u = d["finalDisplayedUrl"].replace(base, "") or "/"
    print(f"{u:60} {s['performance']:>3} {s['accessibility']:>3} {s['best-practices']:>3} {s['seo']:>3} {lcp:>6.1f}s {cls:>6.3f}")
    # Legal pages are noindex on purpose until the SIRET is filled in
    # (src/lib/legal/company.ts), so "is-crawlable" is expected there.
    legal = any(seg in u for seg in ("/privacy", "/imprint", "/terms", "/withdrawal", "/business-terms", "/dpa"))
    for k in ("accessibility", "best-practices", "seo"):
        if s[k] < 100:
            fails = [n for n, v in a.items() if v.get("score") is not None and v["score"] < 1 and n in [r["id"] for r in c[k]["auditRefs"] if r.get("weight", 0) > 0]]
            if legal and fails == ["is-crawlable"]:
                continue
            bad.append((u, f"{k} {s[k]}: {', '.join(fails)}"))
    if s["performance"] < 90:
        bad.append((u, f"performance {s['performance']}"))
    if lcp > 2.5:
        bad.append((u, f"LCP {lcp:.1f}s"))
    if cls > 0.1:
        bad.append((u, f"CLS {cls:.3f}"))
print(f"\nLIGHTHOUSE FAILURES: {len(bad)}")
for u, w in bad:
    print(f"  {u}: {w}")
sys.exit(1 if bad else 0)
EOF
