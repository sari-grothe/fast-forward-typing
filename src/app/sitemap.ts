import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/config";
import { companiesPath } from "@/i18n/routes";
import { getAllTipSlugs } from "@/lib/tips";
import { getLessons } from "@/lib/lessons";

const BASE_URL = "https://fastforwardtyping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = ["", "/speed-test", "/lessons", "/placement", "/certificate", "/tips", "/about", "/tools/keyboard-layouts", "/help"];

  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: now,
      changeFrequency: page === "/tips" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1.0 : page === "/tips" ? 0.9 : 0.7,
    }))
  );

  const companiesEntries = locales.map((locale) => ({
    url: `${BASE_URL}${companiesPath(locale)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tipEntries = getAllTipSlugs().map(({ slug, locale }) => ({
    url: `${BASE_URL}/${locale}/tips/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Only the free lessons (0-6): the paid ones show the Pro paywall to
  // anonymous visitors including crawlers, not lesson content, so they
  // stay out of the sitemap (see lessons/[id]/page.tsx generateMetadata).
  const lessonEntries = locales.flatMap((locale) =>
    getLessons(locale as Locale)
      .filter((lesson) => lesson.isFree)
      .map((lesson) => ({
        url: `${BASE_URL}/${locale}/lessons/${lesson.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
  );

  return [...staticEntries, ...companiesEntries, ...tipEntries, ...lessonEntries];
}
