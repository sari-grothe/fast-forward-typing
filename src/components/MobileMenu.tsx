"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  locale: string;
  dict: {
    nav: {
      typingTest: string;
      typingCourse: string;
      typingTips: string;
      pricing: string;
    };
  };
};

export function MobileMenu({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-dark-surface transition-colors"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 border-b border-zinc-200 dark:border-dark-border bg-white/95 dark:bg-dark/95 backdrop-blur-sm">
          <nav className="mx-auto max-w-5xl px-4 py-4 flex flex-col gap-1">
            <Link
              href={`/${locale}/speed-test`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-indigo/5 hover:text-indigo transition-colors"
            >
              {dict.nav.typingTest}
            </Link>
            <Link
              href={`/${locale}/lessons`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-indigo/5 hover:text-indigo transition-colors"
            >
              {dict.nav.typingCourse}
            </Link>
            <Link
              href={`/${locale}/tips`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-indigo/5 hover:text-indigo transition-colors"
            >
              {dict.nav.typingTips}
            </Link>
            <Link
              href={`/${locale}/pricing`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-indigo/5 hover:text-indigo transition-colors"
            >
              {dict.nav.pricing}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
