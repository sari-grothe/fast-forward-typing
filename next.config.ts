import type { NextConfig } from "next";
import { locales } from "./src/i18n/config";
import { companiesSlug, pageRoutes } from "./src/i18n/routes";

// Pages whose public slug differs from the internal route segment (EN
// slugs equal the segment, /fr/contact too - those need nothing).
const localizedPages = Object.values(pageRoutes).flatMap((route) =>
  locales
    .filter((locale) => route.slug[locale] !== route.internal)
    .map((locale) => ({ locale, internal: route.internal, slug: route.slug[locale] }))
);

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(self)" },
        ],
      },
    ];
  },
  // Language-native slugs (see src/i18n/routes.ts): the public URL is
  // /de/unternehmen etc., the page lives at /[locale]/companies.
  async rewrites() {
    return [
      ...locales.map((locale) => ({
        source: `/${locale}/${companiesSlug[locale]}`,
        destination: `/${locale}/companies`,
      })),
      // Same for every other page: /de/tippgeschwindigkeit -> /de/speed-test,
      // including sub-paths (/de/ressourcen/:slug, /fr/cours-de-dactylographie/3).
      ...localizedPages.flatMap(({ locale, internal, slug }) => [
        { source: `/${locale}/${slug}`, destination: `/${locale}/${internal}` },
        { source: `/${locale}/${slug}/:path*`, destination: `/${locale}/${internal}/:path*` },
      ]),
    ];
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
      // Old English-segment URLs under /de and /fr (indexed before the
      // 2026-09-24 slug localization) -> native slug, sub-paths kept.
      ...localizedPages.flatMap(({ locale, internal, slug }) => [
        { source: `/${locale}/${internal}`, destination: `/${locale}/${slug}`, permanent: true },
        { source: `/${locale}/${internal}/:path*`, destination: `/${locale}/${slug}/:path*`, permanent: true },
      ]),
      // Bare native slug -> its locale, same reasoning as for companies.
      ...localizedPages.flatMap(({ locale, slug }) => [
        { source: `/${slug}`, destination: `/${locale}/${slug}`, permanent: true },
        { source: `/${slug}/:path*`, destination: `/${locale}/${slug}/:path*`, permanent: true },
      ]),
      // /tips -> resources rename (2026-09-23): preserve link equity and
      // indexing for existing articles under the old path. Straight to
      // the native slug so it stays a single hop.
      ...locales.map((locale) => ({
        source: `/${locale}/tips`,
        destination: `/${locale}/${pageRoutes.resources.slug[locale]}`,
        permanent: true,
      })),
      ...locales.map((locale) => ({
        source: `/${locale}/tips/:slug`,
        destination: `/${locale}/${pageRoutes.resources.slug[locale]}/:slug`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
