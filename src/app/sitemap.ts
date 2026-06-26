import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getAllTipSlugs } from "@/lib/tips";

const BASE_URL = "https://fastforwardtyping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = ["", "/speed-test", "/lessons", "/tips", "/about", "/tools/keyboard-layouts"];

  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: now,
      changeFrequency: page === "/tips" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1.0 : page === "/tips" ? 0.9 : 0.7,
    }))
  );

  const tipEntries = getAllTipSlugs().map(({ slug, locale }) => ({
    url: `${BASE_URL}/${locale}/tips/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...tipEntries];
}
