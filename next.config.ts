import type { NextConfig } from "next";
import { locales } from "./src/i18n/config";
import { companiesSlug } from "./src/i18n/routes";

const nextConfig: NextConfig = {
  // Language-native slugs (see src/i18n/routes.ts): the public URL is
  // /de/unternehmen etc., the page lives at /[locale]/companies.
  async rewrites() {
    return locales.map((locale) => ({
      source: `/${locale}/${companiesSlug[locale]}`,
      destination: `/${locale}/companies`,
    }));
  },
  async redirects() {
    return [
      // Internal path -> native slug
      ...locales.map((locale) => ({
        source: `/${locale}/companies`,
        destination: `/${locale}/${companiesSlug[locale]}`,
        permanent: true,
      })),
      // Bare native slug (no locale prefix) -> its own locale. Without
      // this the middleware would prefix the visitor's browser locale
      // and /unternehmen could end up at /en/unternehmen (404).
      ...locales.map((locale) => ({
        source: `/${companiesSlug[locale]}`,
        destination: `/${locale}/${companiesSlug[locale]}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
