"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { TipMeta, TipCategory } from "@/lib/tips";
import { categoryLabels, tipsUi } from "@/lib/tips";
import { KeyCharacter } from "@/components/KeyCharacter";
import { ScrollReveal } from "@/components/ScrollReveal";

function CategoryBadge({ category, locale }: { category: TipCategory; locale: Locale }) {
  const colors: Record<TipCategory, string> = {
    learning: "bg-indigo/10 text-indigo",
    shortcuts: "bg-electric-yellow/15 text-dark-text dark:text-electric-yellow",
    productivity: "bg-peach/15 text-peach",
    mobile: "bg-zinc-200/60 text-zinc-600 dark:bg-zinc-700/40 dark:text-zinc-300",
  };
  return (
    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${colors[category]}`}>
      {categoryLabels[locale][category]}
    </span>
  );
}

function FeaturedCard({ tip, locale }: { tip: TipMeta; locale: Locale }) {
  const ui = tipsUi[locale];
  return (
    <Link
      href={`/${locale}/tips/${tip.slug}`}
      className="group block rounded-2xl border border-indigo/20 bg-white dark:bg-dark-surface overflow-hidden hover:shadow-lg hover:shadow-indigo/10 transition-all duration-200"
    >
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <CategoryBadge category={tip.category} locale={locale} />
            <span className="text-[11px] text-zinc-400">{tip.readingTime} {ui.readingTime}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-dark-text dark:text-white group-hover:text-indigo transition-colors">
            {tip.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg">
            {tip.description}
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

function ArticleCard({ tip, locale }: { tip: TipMeta; locale: Locale }) {
  const ui = tipsUi[locale];
  const isLeadMagnet = tip.type === "lead-magnet";

  return (
    <Link
      href={`/${locale}/tips/${tip.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface overflow-hidden hover:border-indigo/30 hover:shadow-md transition-all duration-200"
    >
      <div className={`h-1 ${isLeadMagnet ? "bg-gradient-to-r from-electric-yellow to-peach" : "bg-indigo"}`} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={tip.category} locale={locale} />
          {isLeadMagnet && tip.downloadLabel && (
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-peach/15 text-peach flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {tip.downloadLabel}
            </span>
          )}
          <span className="text-[11px] text-zinc-400 ml-auto">{tip.readingTime} {ui.readingTime}</span>
        </div>

        <h3 className="text-base font-bold text-dark-text dark:text-white group-hover:text-indigo transition-colors mb-2 line-clamp-2">
          {tip.title}
        </h3>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 flex-1">
          {tip.description}
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

function LeadMagnetBanner({ locale }: { locale: Locale }) {
  const ui = tipsUi[locale];
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
        href={`/${locale}/tips/${locale === "fr" ? "raccourcis-clavier-windows" : locale === "de" ? "tastenkombinationen-windows" : "keyboard-shortcuts-windows"}`}
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
  tips: TipMeta[];
  locale: Locale;
};

export function TipsOverview({ tips, locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<TipCategory | "all">("all");
  const ui = tipsUi[locale];
  const categories: (TipCategory | "all")[] = ["all", ...Object.keys(categoryLabels[locale]).filter(k => k !== "all") as TipCategory[]];

  const featured = tips.find((t) => t.featured);
  const filtered = activeCategory === "all" ? tips : tips.filter((t) => t.category === activeCategory);
  const nonFeatured = filtered.filter((t) => t.slug !== featured?.slug);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Header */}
      <ScrollReveal>
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">
            {ui.pageTitle}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-lg">
            {ui.pageSubtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Category filter */}
      <ScrollReveal delay={60}>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-indigo text-white shadow-sm"
                  : "bg-white dark:bg-dark-surface text-zinc-600 dark:text-zinc-400 hover:bg-indigo/10 hover:text-indigo border border-zinc-200 dark:border-dark-border"
              }`}
            >
              {categoryLabels[locale][cat]}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured article - only when showing all */}
      {featured && activeCategory === "all" && (
        <ScrollReveal delay={100}>
          <div className="mb-8">
            <FeaturedCard tip={featured} locale={locale} />
          </div>
        </ScrollReveal>
      )}

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {nonFeatured.map((tip, i) => (
          <ScrollReveal key={tip.slug} delay={60 + i * 40}>
            <ArticleCard tip={tip} locale={locale} />
          </ScrollReveal>
        ))}
      </div>

      {/* Lead magnet banner */}
      {activeCategory === "all" && (
        <ScrollReveal delay={160}>
          <div className="mb-8">
            <LeadMagnetBanner locale={locale} />
          </div>
        </ScrollReveal>
      )}

      {/* Bottom CTA */}
      <ScrollReveal delay={200}>
        <div className="rounded-2xl bg-gradient-to-br from-indigo to-indigo/80 p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-2">{ui.tryCta}</h2>
          <p className="text-white/80 text-sm max-w-md mx-auto mb-5">{ui.tryCtaDesc}</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href={`/${locale}/speed-test`}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Speed Test <span className="text-electric-yellow group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
            </Link>
            <Link
              href={`/${locale}/lessons`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              {ui.startCourse}
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
