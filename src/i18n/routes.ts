import type { Locale } from "./config";

// NOTE: next.config.ts imports this file, where the "@/" alias is not
// available. Keep imports here relative and free of runtime dependencies.

// Language-native URL slugs. The page itself lives under the internal
// route /[locale]/companies; next.config.ts rewrites the native slug to
// it and redirects the internal path back to the native slug.
export const companiesSlug: Record<Locale, string> = {
  de: "unternehmen",
  en: "for-teams",
  fr: "entreprises",
};

// In-page anchors on the companies page, language-native as well.
export const companiesAnchor: Record<"pricing" | "contact", Record<Locale, string>> = {
  pricing: { de: "preise", en: "pricing", fr: "tarifs" },
  contact: { de: "kontakt", en: "contact", fr: "contact" },
};

function asLocale(locale: string): Locale {
  return locale in companiesSlug ? (locale as Locale) : "en";
}

export function companiesPath(locale: string): string {
  return `/${locale}/${companiesSlug[asLocale(locale)]}`;
}

export function companiesAnchorId(locale: string, anchor: keyof typeof companiesAnchor): string {
  return companiesAnchor[anchor][asLocale(locale)];
}
