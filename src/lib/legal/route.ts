import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { BASE_URL } from "@/lib/schema";
import { legalDocs } from "@/lib/legal/docs";
import { missingCompanyFields } from "@/lib/legal/company";
import type { LegalKey } from "@/lib/legal/types";

// Shared generateMetadata for the six legal pages. Until every company
// field is filled in (see docs/legal-golive.md) the pages stay out of
// search results, so a placeholder like "[SIRET number to follow]" never
// gets indexed.
export function legalMetadata(key: LegalKey, locale: string): Metadata {
  const l = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const doc = legalDocs[key][l];
  const complete = missingCompanyFields().length === 0;

  return {
    title: `${doc.title} | Fast Forward >> Typing`,
    description: doc.description,
    robots: { index: complete, follow: true },
    alternates: {
      canonical: `${BASE_URL}/${l}/${key}`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/${key}`])),
    },
  };
}
