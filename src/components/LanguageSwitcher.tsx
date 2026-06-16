"use client";

import { locales, localeNames, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

type Props = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();

  function switchedPath(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale) => (
        <a
          key={locale}
          href={switchedPath(locale)}
          className={`px-2 py-1 rounded transition-colors ${
            locale === currentLocale
              ? "text-indigo bg-indigo/10"
              : "text-zinc-500 hover:text-indigo"
          }`}
        >
          {localeNames[locale]}
        </a>
      ))}
    </div>
  );
}
