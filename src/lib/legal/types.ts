import type { Locale } from "@/i18n/config";

export type LegalKey = "imprint" | "privacy" | "terms" | "withdrawal" | "business-terms" | "dpa";

export type LegalDoc = {
  title: string;
  // Meta description for search results.
  description: string;
  // Human-readable date the text was last reviewed, shown on the page.
  updated: string;
  content: string;
};

export type LegalDocs = Record<Locale, LegalDoc>;
