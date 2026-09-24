import type { Locale } from "@/i18n/config";
import { companiesPath, localizedPath, pageRoutes, type PageKey } from "@/i18n/routes";
import { getResource, getResourcesByLocale, type ResourceMeta } from "@/lib/resources";

// Internal links in markdown content are written as keys, never as
// hardcoded URLs, so a slug change can never leave a dead link behind:
//
//   [anchor text](page:speedTest)      -> /de/tippgeschwindigkeit
//   [anchor text](page:home)           -> /de
//   [anchor text](page:companies)      -> /de/unternehmen
//   [anchor text](article:tipptest)    -> /de/ressourcen/tipptest
//
// The article slug must exist in the same locale. Unknown targets throw,
// which fails the build (see validateArticleLinks). Rules for how many
// links an article needs live in docs/article-template.md.

const LINK = /\]\((page|article):([a-zA-Z0-9-]+)\)/g;

function resolveTarget(kind: string, key: string, locale: Locale): string {
  if (kind === "page") {
    if (key === "home") return `/${locale}`;
    if (key === "companies") return companiesPath(locale);
    if (key in pageRoutes) return localizedPath(locale, key as PageKey);
    throw new Error(`Unknown internal page key "${key}"`);
  }
  if (!getResource(key, locale)) throw new Error(`Unknown ${locale} article "${key}"`);
  return `${localizedPath(locale, "resources")}/${key}`;
}

export function resolveInternalLinks(md: string, locale: Locale): string {
  return md.replace(LINK, (_m, kind: string, key: string) => `](${resolveTarget(kind, key, locale)})`);
}

// Minimum internal linking per article (docs/article-template.md):
// at least 3 contextual links in the body, at least one to a product
// page (page:...) and at least one to another article (article:...),
// never to itself, every target must resolve.
export const MIN_INTERNAL_LINKS = 3;

export function articleLinkProblems(r: ResourceMeta): string[] {
  const links = [...r.content.matchAll(LINK)].map((m) => ({ kind: m[1], key: m[2] }));
  const problems: string[] = [];
  if (links.length < MIN_INTERNAL_LINKS) problems.push(`only ${links.length} internal links (min ${MIN_INTERNAL_LINKS})`);
  if (!links.some((l) => l.kind === "page")) problems.push("no link to a product page (page:...)");
  if (!links.some((l) => l.kind === "article")) problems.push("no link to another article (article:...)");
  if (links.some((l) => l.kind === "article" && l.key === r.slug)) problems.push("links to itself");
  if (/\]\(\/(de|en|fr)\//.test(r.content)) problems.push("hardcoded internal URL, use page:/article: keys");
  for (const l of links) {
    try {
      resolveTarget(l.kind, l.key, r.locale);
    } catch (e) {
      problems.push((e as Error).message);
    }
  }
  return problems;
}

// Called from generateStaticParams of the article route, so `next build`
// fails as soon as one article breaks the linking rules.
export function validateArticleLinks(locales: Locale[]): void {
  const errors = locales
    .flatMap((l) => getResourcesByLocale(l))
    .map((r) => ({ r, p: articleLinkProblems(r) }))
    .filter((x) => x.p.length > 0)
    .map((x) => `  ${x.r.locale}/${x.r.slug}: ${x.p.join("; ")}`);
  if (errors.length) {
    throw new Error(`Internal linking rules broken (docs/article-template.md):\n${errors.join("\n")}`);
  }
}
