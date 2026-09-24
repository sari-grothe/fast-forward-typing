import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/config";
import { companiesPath } from "@/i18n/routes";
import { getAllResourceSlugs } from "@/lib/resources";

const BASE_URL = "https://fastforwardtyping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified on static pages: a build timestamp on every URL is
  // noise that search engines learn to ignore. Articles carry their real
  // date instead.

  const staticPages = ["", "/speed-test", "/lessons", "/placement", "/certificate", "/resources", "/about", "/tools/keyboard-layouts", "/help", "/contact"];

  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      changeFrequency: page === "/resources" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1.0 : page === "/resources" ? 0.9 : 0.7,
    }))
  );

  const companiesEntries = locales.map((locale) => ({
    url: `${BASE_URL}${companiesPath(locale)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourceEntries = getAllResourceSlugs().map(({ slug, locale, date }) => ({
    lastModified: date,
    url: `${BASE_URL}/${locale}/resources/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...companiesEntries, ...resourceEntries];
}
