import { BASE_URL } from "@/lib/schema";

// Brand suffix only while the whole title still fits into a search result
// (about 60 characters); longer titles stand on their own - Google shows
// the site name next to results anyway (WebSite schema in the layout).
export function pageTitle(title: string): string {
  const full = `${title} | Fast Forward >> Typing`;
  return full.length <= 60 ? full : title;
}

// The file-based Open Graph image (src/app/[locale]/opengraph-image.tsx)
// is dropped as soon as a page defines its own `openGraph` object, so
// every page passes it back in explicitly.
export function ogImages(locale: string) {
  return [{ url: `${BASE_URL}/${locale}/opengraph-image`, width: 1200, height: 630 }];
}
