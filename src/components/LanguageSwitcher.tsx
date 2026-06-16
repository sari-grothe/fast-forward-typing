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
    <div className="flex items-center rounded-lg border border-dark-border dark:border-dark-border bg-white/5 dark:bg-dark-surface p-0.5 text-sm">
      {locales.map((locale) => (
        <a
          key={locale}
          href={switchedPath(locale)}
          className={`px-3 py-1.5 rounded-md transition-all ${
            locale === currentLocale
              ? "bg-indigo text-white font-medium shadow-sm"
              : "text-zinc-500 hover:text-white"
          }`}
        >
          {localeNames[locale]}
        </a>
      ))}
    </div>
  );
}
