import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./i18n/config";

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().substring(0, 2).toLowerCase())
    .find((lang) => locales.includes(lang as Locale));

  return (preferred as Locale) || defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Every route is lowercase (locales, slugs, lesson ids). A typed
  // /DE/hilfe or /de/Hilfe would otherwise fall through to the locale
  // prefixing below and end on /en/DE/hilfe (404).
  const lower = pathname.toLowerCase();
  if (lower !== pathname) {
    request.nextUrl.pathname = lower;
    return NextResponse.redirect(request.nextUrl, 308);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // apple-icon is the root-level generated icon route (src/app/apple-icon.tsx);
  // without the exclusion it was redirected to /en/apple-icon (404).
  // downloads/ holds the gated cheat-sheet PDFs (public/downloads), not
  // locale pages.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|icon.svg|apple-icon|downloads/).*)"],
};
