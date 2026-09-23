"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ResourceMeta, ResourceCategory } from "@/lib/resources";
import { categoryLabels, resourcesUi } from "@/lib/resources";
import { KeyCharacter } from "@/components/KeyCharacter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaButton } from "@/components/CtaButton";

// Same icon per category everywhere it appears (browse cards, badges),
// so a category reads as one visual identity across the page - matters
// more once programmatic pages add many more items per category and
// the badge becomes the main way people recognize a topic at a glance.
const categoryIcons: Record<ResourceCategory, string> = {
  learning: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  shortcuts: "M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v9A2.25 2.25 0 0118 17.25h-5.25l-1.5 3H15a.75.75 0 010 1.5H9a.75.75 0 010-1.5h3.75l-1.5-3H6A2.25 2.25 0 013.75 15V6zM6 5.25a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h12a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H6z",
  productivity: "M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941",
  comparisons: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18M16.5 3L21 7.5m0 0L16.5 12M21 7.5H3",
};

function CategoryBadge({ category, locale }: { category: ResourceCategory; locale: Locale }) {
  const colors: Record<ResourceCategory, string> = {
    learning: "bg-indigo/10 text-indigo",
    shortcuts: "bg-electric-yellow/15 text-dark-text dark:text-electric-yellow",
    productivity: "bg-peach/15 text-peach",
    comparisons: "bg-lavender text-indigo dark:bg-indigo/15 dark:text-electric-yellow",
  };
  return (
    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${colors[category]}`}>
      {categoryLabels[locale][category]}
    </span>
  );
}

function FeaturedCard({ item, locale }: { item: ResourceMeta; locale: Locale }) {
  const ui = resourcesUi[locale];
  return (
    <Link
      href={`/${locale}/resources/${item.slug}`}
      className="group block rounded-2xl border border-indigo/20 bg-white dark:bg-dark-surface overflow-hidden hover:shadow-lg hover:shadow-indigo/10 transition-all duration-200"
    >
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo">{ui.featured}</span>
            <span className="text-zinc-300 dark:text-dark-border">&middot;</span>
            <CategoryBadge category={item.category} locale={locale} />
            <span className="text-[11px] text-zinc-400">{item.readingTime} {ui.readingTime}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-dark-text dark:text-white group-hover:text-indigo transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg">
            {item.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo">
            {ui.readArticle} <span className="group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center justify-center shrink-0">
          <KeyCharacter pose="sitting" size={90} />
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ item, locale }: { item: ResourceMeta; locale: Locale }) {
  const ui = resourcesUi[locale];
  const isLeadMagnet = item.type === "lead-magnet";

  return (
    <Link
      href={`/${locale}/resources/${item.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface overflow-hidden hover:border-indigo/30 hover:shadow-md transition-all duration-200"
    >
      <div className={`h-1 ${isLeadMagnet ? "bg-gradient-to-r from-electric-yellow to-peach" : "bg-indigo"}`} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={item.category} locale={locale} />
          {isLeadMagnet && item.downloadLabel && (
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-peach/15 text-peach flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {item.downloadLabel}
            </span>
          )}
          <span className="text-[11px] text-zinc-400 ml-auto">{item.readingTime} {ui.readingTime}</span>
        </div>

        <h3 className="text-base font-bold text-dark-text dark:text-white group-hover:text-indigo transition-colors mb-2 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 flex-1">
          {item.description}
        </p>

        <div className="mt-4 flex items-center text-sm font-medium text-indigo">
          {isLeadMagnet ? ui.downloadPdf : ui.readArticle}
          <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

type FinalCtaCopy = { title: string; description: string; ctaLearn: string; ctaTest: string };

// Sits right under the category browser, above the fold, so the primary
// conversion path (start the course) is visible without scrolling past
// the whole article grid - the big FinalCTA at the page bottom stays too,
// for anyone who reads all the way through instead.
function InlineCourseCta({ locale, copy }: { locale: Locale; copy: FinalCtaCopy }) {
  return (
    <div className="rounded-2xl bg-indigo/5 dark:bg-indigo/10 border border-indigo/15 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5">
      <div className="shrink-0">
        <KeyCharacter pose="pointing" size={64} />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className="font-bold text-dark-text dark:text-white">{copy.title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{copy.description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
        <CtaButton href={`/${locale}/placement`}>{copy.ctaLearn}</CtaButton>
        <CtaButton href={`/${locale}/speed-test`} variant="secondary">{copy.ctaTest}</CtaButton>
      </div>
    </div>
  );
}

function LeadMagnetBanner({ locale }: { locale: Locale }) {
  const ui = resourcesUi[locale];
  const bannerText: Record<Locale, { title: string; desc: string }> = {
    de: { title: "Tastenkombinationen als Cheat Sheet", desc: "Die wichtigsten Shortcuts fur Windows und Mac - zum Ausdrucken." },
    en: { title: "Keyboard shortcuts cheat sheet", desc: "The most important shortcuts for Windows and Mac - printable." },
    fr: { title: "Raccourcis clavier en aide-memoire", desc: "Les raccourcis indispensables pour Windows et Mac - a imprimer." },
  };

  return (
    <div className="rounded-2xl border border-electric-yellow/30 bg-white dark:bg-dark-surface p-6 flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electric-yellow/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-dark-text dark:text-electric-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className="font-bold text-dark-text dark:text-white">{bannerText[locale].title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bannerText[locale].desc}</p>
      </div>
      <Link
        href={`/${locale}/resources/${locale === "fr" ? "raccourcis-clavier-windows" : locale === "de" ? "tastenkombinationen-windows" : "keyboard-shortcuts-windows"}`}
        className="inline-flex items-center gap-2 rounded-xl bg-dark-text dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-dark-text hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        {ui.downloadPdf}
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </div>
  );
}

type Props = {
  items: ResourceMeta[];
  locale: Locale;
  finalCta: FinalCtaCopy;
};

export function ResourcesOverview({ items, locale, finalCta }: Props) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "all">("all");
  const [query, setQuery] = useState("");
  const ui = resourcesUi[locale];
  const counts = useMemo(() => {
    const c: Partial<Record<ResourceCategory, number>> = {};
    for (const item of items) c[item.category] = (c[item.category] ?? 0) + 1;
    return c;
  }, [items]);

  // Only categories with at least one article for this locale - an empty
  // category is a dead end (a card promising content that isn't there
  // yet), not a useful way to browse. Some locales lag others until a
  // translation lands, so this varies per locale on its own.
  const categories = (Object.keys(categoryLabels[locale]).filter((k) => k !== "all") as ResourceCategory[]).filter(
    (cat) => (counts[cat] ?? 0) > 0
  );

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const results = useMemo(() => {
    let list = activeCategory === "all" ? items : items.filter((i) => i.category === activeCategory);
    if (q) list = list.filter((i) => i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
    return list;
  }, [items, activeCategory, q]);

  const featured = !searching && activeCategory === "all" ? items.find((i) => i.featured) : undefined;
  const gridItems = results.filter((i) => i.slug !== featured?.slug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14 space-y-12">
      {/* Header + search */}
      <ScrollReveal>
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">
              {ui.pageTitle}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-xl mx-auto">
              {ui.pageSubtitle}
            </p>
          </div>
          <div className="relative max-w-xl mx-auto">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none"
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
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchPlaceholder}
              className="w-full rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface pl-12 pr-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Browse by category - the primary entry point, not the flat
          list below. Cards (not a pill row) so a count stays visible
          and the section keeps working the same way whether there are
          5 articles per category or 500 from future programmatic pages. */}
      {!searching && (
        <ScrollReveal delay={60}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-2xl border p-4 text-left transition-all ${
                activeCategory === "all"
                  ? "border-indigo bg-indigo/5 dark:bg-indigo/10"
                  : "border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface hover:border-indigo/30"
              }`}
            >
              <p className="font-semibold text-dark-text dark:text-white text-sm">{categoryLabels[locale].all}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{items.length}</p>
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  activeCategory === cat
                    ? "border-indigo bg-indigo/5 dark:bg-indigo/10"
                    : "border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface hover:border-indigo/30"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={categoryIcons[cat]} />
                  </svg>
                  <p className="font-semibold text-dark-text dark:text-white text-sm">{categoryLabels[locale][cat]}</p>
                </div>
                <p className="text-xs text-zinc-400 mt-1">{counts[cat] ?? 0}</p>
              </button>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Category filter chips while searching keeps the same controls
          reachable without the full browse grid competing for space. */}
      {searching && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === "all" ? "bg-indigo text-white" : "bg-zinc-100 dark:bg-dark-surface text-zinc-500 dark:text-zinc-400"
            }`}
          >
            {categoryLabels[locale].all}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat ? "bg-indigo text-white" : "bg-zinc-100 dark:bg-dark-surface text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {categoryLabels[locale][cat]}
            </button>
          ))}
        </div>
      )}

      {/* Course CTA - above the fold, before the article grid */}
      {!searching && (
        <ScrollReveal delay={80}>
          <InlineCourseCta locale={locale} copy={finalCta} />
        </ScrollReveal>
      )}

      {/* Featured article */}
      {featured && (
        <ScrollReveal delay={100}>
          <FeaturedCard item={featured} locale={locale} />
        </ScrollReveal>
      )}

      {/* Results */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <KeyCharacter pose="sitting" size={72} />
          <p className="text-zinc-500 dark:text-zinc-400">{ui.searchNoResults}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gridItems.map((item, i) => (
            <ScrollReveal key={item.slug} delay={60 + i * 40}>
              <ArticleCard item={item} locale={locale} />
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Lead magnet banner */}
      {!searching && activeCategory === "all" && (
        <ScrollReveal delay={160}>
          <LeadMagnetBanner locale={locale} />
        </ScrollReveal>
      )}
    </div>
  );
}
