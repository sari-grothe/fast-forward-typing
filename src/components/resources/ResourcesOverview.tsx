"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ResourceMeta, ResourceCategory } from "@/lib/resources";
import { categoryLabels, resourcesUi } from "@/lib/resources";
import { KeyCharacter } from "@/components/KeyCharacter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaButton } from "@/components/CtaButton";
import { localizedPath } from "@/i18n/routes";

// Same icon per category everywhere it appears (section headers, badges),
// so a category reads as one visual identity across the page - matters
// more once programmatic pages add many more items per category.
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
    productivity: "bg-peach/20 text-dark-text dark:text-peach",
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
      href={`${localizedPath(locale, "resources")}/${item.slug}`}
      className="group block rounded-2xl border border-indigo/20 bg-white dark:bg-dark-surface overflow-hidden hover:shadow-lg hover:shadow-indigo/10 transition-all duration-200"
    >
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo">{ui.featured}</span>
            <span className="text-zinc-300 dark:text-dark-border">&middot;</span>
            <CategoryBadge category={item.category} locale={locale} />
            <span className="text-[11px] text-zinc-600">{item.readingTime} {ui.readingTime}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-dark-text dark:text-white group-hover:text-indigo transition-colors">
            {item.title}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-lg">
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
      href={`${localizedPath(locale, "resources")}/${item.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface overflow-hidden hover:border-indigo/30 hover:shadow-md transition-all duration-200"
    >
      <div className={`h-1 ${isLeadMagnet ? "bg-gradient-to-r from-electric-yellow to-peach" : "bg-indigo"}`} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          {isLeadMagnet && item.downloadLabel && (
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-peach/20 text-dark-text dark:text-peach flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {item.downloadLabel}
            </span>
          )}
          <span className="text-[11px] text-zinc-600 ml-auto">{item.readingTime} {ui.readingTime}</span>
        </div>

        <h3 className="text-base font-bold text-dark-text dark:text-white group-hover:text-indigo transition-colors mb-2 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 flex-1">
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

// Above the fold, right after the header - the primary conversion path
// (start the course) is visible without scrolling past any content.
// The big FinalCTA at the page bottom stays too, for anyone who reads
// all the way through instead.
function InlineCourseCta({ locale, copy }: { locale: Locale; copy: FinalCtaCopy }) {
  return (
    <div className="rounded-2xl bg-indigo/5 dark:bg-indigo/10 border border-indigo/15 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5">
      <div className="shrink-0">
        <KeyCharacter pose="pointing" size={64} />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className="font-bold text-dark-text dark:text-white">{copy.title}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{copy.description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
        <CtaButton href={localizedPath(locale, "placement")}>{copy.ctaLearn}</CtaButton>
        <CtaButton href={localizedPath(locale, "speedTest")} variant="secondary">{copy.ctaTest}</CtaButton>
      </div>
    </div>
  );
}

// A category section header - icon, label, count. Plain text, not a
// button: this page shows everything at once, nothing to filter into.
function SectionHeader({ category, locale, count }: { category: ResourceCategory; locale: Locale; count: number }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <svg className="w-5 h-5 text-indigo shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d={categoryIcons[category]} />
      </svg>
      <h2 className="text-lg font-bold text-dark-text dark:text-white">{categoryLabels[locale][category]}</h2>
      <span className="text-xs text-zinc-600">{count}</span>
    </div>
  );
}

type Props = {
  items: ResourceMeta[];
  locale: Locale;
  finalCta: FinalCtaCopy;
};

// No search, no click-to-filter: at this scale (a handful of articles
// per category) the point is to see everything on one page, grouped so
// it still reads clearly. If a single category grows into the dozens
// once programmatic pages land, that's the point to cap it and add a
// "view all in category" link - not before, since an unused pagination
// path is just dead code today.
export function ResourcesOverview({ items, locale, finalCta }: Props) {
  const ui = resourcesUi[locale];

  const featured = items.find((i) => i.featured);

  const sections = useMemo(() => {
    const order = Object.keys(categoryLabels[locale]).filter((k) => k !== "all") as ResourceCategory[];
    const byCategory = new Map<ResourceCategory, ResourceMeta[]>();
    for (const item of items) {
      if (item.slug === featured?.slug) continue;
      const list = byCategory.get(item.category) ?? [];
      list.push(item);
      byCategory.set(item.category, list);
    }
    return order
      .map((category) => ({ category, items: byCategory.get(category) ?? [] }))
      .filter((section) => section.items.length > 0);
  }, [items, featured, locale]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">
            {ui.pageTitle}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-xl mx-auto">
            {ui.pageSubtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Course CTA - above the fold, right after the header */}
      <ScrollReveal delay={60}>
        <InlineCourseCta locale={locale} copy={finalCta} />
      </ScrollReveal>

      {/* Featured article */}
      {featured && (
        <ScrollReveal delay={100}>
          <FeaturedCard item={featured} locale={locale} />
        </ScrollReveal>
      )}

      {/* Every article, grouped by category, all visible at once */}
      <div className="space-y-10">
        {sections.map(({ category, items: sectionItems }, i) => (
          <ScrollReveal key={category} delay={120 + i * 40}>
            <section>
              <SectionHeader category={category} locale={locale} count={sectionItems.length} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sectionItems.map((item) => (
                  <ArticleCard key={item.slug} item={item} locale={locale} />
                ))}
              </div>
            </section>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
