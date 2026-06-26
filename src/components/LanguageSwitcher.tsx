"use client";

import { useState, useRef, useEffect } from "react";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

const keyboardLayouts: Record<Locale, string> = {
  de: "QWERTZ",
  en: "QWERTY",
  fr: "AZERTY",
};

type Props = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchedPath(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-dark-border px-2.5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-indigo/30 hover:text-indigo transition-all"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.794 1.708-5.282" />
        </svg>
        <span className="hidden sm:inline">{currentLocale.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface shadow-lg shadow-zinc-200/50 dark:shadow-black/20 py-1 z-50" role="listbox">
          {locales.map((locale) => (
            <a
              key={locale}
              href={switchedPath(locale)}
              role="option"
              aria-selected={locale === currentLocale}
              className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                locale === currentLocale
                  ? "bg-indigo/5 text-indigo font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-dark-border/50"
              }`}
              onClick={() => setOpen(false)}
            >
              <span>{localeNames[locale]}</span>
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                {keyboardLayouts[locale]}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
