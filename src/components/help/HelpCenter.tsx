"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { HelpCategory, Strength } from "@/lib/help-data";
import { helpUi } from "@/lib/help-data";
import { KeyCharacter } from "@/components/KeyCharacter";

type Props = {
  locale: Locale;
  categories: HelpCategory[];
  strengths: Strength[];
};

export function HelpCenter({ locale, categories, strengths }: Props) {
  const l = helpUi[locale] ?? helpUi.en;
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const q = query.trim().toLowerCase();

  // Filter per category rather than flattening: a category with zero
  // matches just disappears, one with a partial match keeps its own
  // heading - so results still read as organized topics, not a bare list.
  const filtered = useMemo(() => {
    if (!q) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, q]);

  const totalResults = filtered.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 space-y-14">
      {/* Header + search */}
      <div className="text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{l.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">{l.subtitle}</p>

        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={l.searchPlaceholder}
            aria-label={l.searchPlaceholder}
            className="w-full rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface pl-12 pr-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors"
          />
        </div>

        {q && (
          <div className="flex flex-wrap justify-center gap-2 pt-1" aria-label={l.categoryNav}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setQuery("")}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-dark-surface text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors"
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}
        {!q && (
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-dark-surface text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Why us */}
      {!q && (
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">{l.strengthsTitle}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">{l.strengthsSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 p-5"
              >
                <p className="font-semibold text-dark-text dark:text-white mb-1.5">{s.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ categories */}
      {totalResults === 0 ? (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <KeyCharacter pose="sitting" size={72} />
          <p className="text-zinc-600 dark:text-zinc-400">{l.searchNoResults}</p>
        </div>
      ) : (
        <div className="space-y-12">
          {filtered.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{cat.title}</h2>
              <div className="divide-y divide-zinc-200 dark:divide-dark-border border-t border-b border-zinc-200 dark:border-dark-border">
                {cat.items.map((item, i) => {
                  const key = `${cat.id}-${i}`;
                  const open = openKey === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => setOpenKey(open ? null : key)}
                        aria-expanded={open}
                        className="flex items-center justify-between w-full py-4 text-left gap-4"
                      >
                        <span className="font-medium text-dark-text dark:text-white">{item.question}</span>
                        <svg
                          className={`w-5 h-5 shrink-0 text-zinc-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.answer}</p>
                        {item.link && (
                          <Link href={item.link.to} className="inline-block mt-2 text-sm font-semibold text-indigo hover:underline">
                            {item.link.label} &gt;&gt;
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
