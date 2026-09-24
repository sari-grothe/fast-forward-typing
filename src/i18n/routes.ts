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

// Every other top-level page follows the same pattern: the internal route
// segment (the folder under src/app/[locale]) stays English, the public
// URL is language-native. next.config.ts generates the rewrite/redirect
// pairs from this table, so adding a page here is the whole job. English
// slugs equal the internal segment - no rewrite needed there.
export type PageKey =
  | "speedTest"
  | "lessons"
  | "placement"
  | "certificate"
  | "resources"
  | "help"
  | "contact"
  | "keyboardLayouts";

export const pageRoutes: Record<PageKey, { internal: string; slug: Record<Locale, string> }> = {
  speedTest: { internal: "speed-test", slug: { de: "tippgeschwindigkeit", en: "speed-test", fr: "test-de-dactylographie" } },
  lessons: { internal: "lessons", slug: { de: "10-finger-schreiben-lernen", en: "lessons", fr: "cours-de-dactylographie" } },
  placement: { internal: "placement", slug: { de: "einstufung", en: "placement", fr: "evaluation" } },
  certificate: { internal: "certificate", slug: { de: "tippzertifikat", en: "certificate", fr: "certificat-de-dactylographie" } },
  resources: { internal: "resources", slug: { de: "ressourcen", en: "resources", fr: "ressources" } },
  help: { internal: "help", slug: { de: "hilfe", en: "help", fr: "aide" } },
  contact: { internal: "contact", slug: { de: "kontakt", en: "contact", fr: "contact" } },
  keyboardLayouts: { internal: "tools/keyboard-layouts", slug: { de: "tools/tastaturlayouts", en: "tools/keyboard-layouts", fr: "outils/dispositions-clavier" } },
};

function asLocale(locale: string): Locale {
  return locale in companiesSlug ? (locale as Locale) : "en";
}

// Public, language-native path of a page: localizedPath("de", "speedTest")
// -> "/de/tippgeschwindigkeit". Sub-paths (lesson ids, article slugs)
// are appended by the caller.
export function localizedPath(locale: string, key: PageKey): string {
  return `/${locale}/${pageRoutes[key].slug[asLocale(locale)]}`;
}

// Native slug (without locale) for the LanguageSwitcher and the
// next.config rewrite table.
export function pageSlug(locale: string, key: PageKey): string {
  return pageRoutes[key].slug[asLocale(locale)];
}

export function companiesPath(locale: string): string {
  return `/${locale}/${companiesSlug[asLocale(locale)]}`;
}

export function companiesAnchorId(locale: string, anchor: keyof typeof companiesAnchor): string {
  return companiesAnchor[anchor][asLocale(locale)];
}
