import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTip, getRelatedTips, getAllTipSlugs, categoryLabels, tipsUi } from "@/lib/tips";
import { Markdown } from "@/lib/markdown";
import { ScrollReveal } from "@/components/ScrollReveal";
import { KeyCharacter } from "@/components/KeyCharacter";
import { PrintButton } from "@/components/tips/PrintButton";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return getAllTipSlugs().map(({ slug, locale }) => ({ locale, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tip = getTip(slug, locale as Locale);
  if (!tip) return {};

  const title = `${tip.title} - Fast Forward >> Typing`;
  return {
    title,
    description: tip.description,
    openGraph: { title, description: tip.description, type: "article" },
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/tips/${slug}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/tips/${slug}`])),
    },
  };
}

export default async function TipArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const tip = getTip(slug, locale as Locale);
  const ui = tipsUi[locale as Locale];

  if (!tip) notFound();

  const related = getRelatedTips(slug, locale as Locale);
  const isLeadMagnet = tip.type === "lead-magnet";

  const categoryColors: Record<string, string> = {
    learning: "bg-indigo/10 text-indigo",
    shortcuts: "bg-electric-yellow/15 text-dark-text dark:text-electric-yellow",
    productivity: "bg-peach/15 text-peach",
    mobile: "bg-zinc-200/60 text-zinc-600 dark:bg-zinc-700/40 dark:text-zinc-300",
  };

  const articleUrl = `https://fastforwardtyping.com/${locale}/tips/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tip.title,
    description: tip.description,
    datePublished: tip.date,
    dateModified: tip.date,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@type": "Organization", name: "Fast Forward >> Typing", url: "https://fastforwardtyping.com" },
    publisher: { "@type": "Organization", name: "Fast Forward >> Typing", url: "https://fastforwardtyping.com" },
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", name: "Fast Forward >> Typing", url: "https://fastforwardtyping.com" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://fastforwardtyping.com/${locale}` },
      { "@type": "ListItem", position: 2, name: ui.pageTitle, item: `https://fastforwardtyping.com/${locale}/tips` },
      { "@type": "ListItem", position: 3, name: tip.title, item: articleUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-3xl px-6 py-10">
        {/* Back link + meta */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <Link
              href={`/${locale}/tips`}
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              {ui.backToTips}
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${categoryColors[tip.category]}`}>
                {categoryLabels[locale as Locale][tip.category]}
              </span>
              <span className="text-zinc-400">{tip.readingTime} {ui.readingTime}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal delay={60}>
          <header className="mb-8 space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white leading-tight">
              {tip.title}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
              {tip.description}
            </p>
            {isLeadMagnet && (
              <div className="flex items-center gap-3 pt-2">
                <PrintButton label={ui.downloadPdf} />
                <span className="text-xs text-zinc-400">{ui.downloadHint}</span>
              </div>
            )}
          </header>
        </ScrollReveal>

        <hr className="border-zinc-200 dark:border-dark-border mb-8" />

        {/* Content */}
        <ScrollReveal delay={120}>
          <div className="mb-12">
            <Markdown content={tip.content} />
          </div>
        </ScrollReveal>

        {/* Inline CTA */}
        <ScrollReveal delay={160}>
          <div className="rounded-2xl border-2 border-indigo/20 bg-gradient-to-br from-white to-lavender/30 dark:from-dark-surface dark:to-indigo/5 p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="hidden sm:block shrink-0 animate-float">
              <KeyCharacter pose="waving" size={80} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-dark-text dark:text-white text-lg">{ui.tryCta}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{ui.tryCtaDesc}</p>
            </div>
            <Link
              href={`/${locale}/speed-test`}
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
            >
              Speed Test <span className="text-electric-yellow group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Related articles */}
        {related.length > 0 && (
          <ScrollReveal delay={200}>
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-dark-text dark:text-white">{ui.relatedArticles}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${locale}/tips/${r.slug}`}
                    className="group rounded-xl border border-zinc-200 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 p-4 hover:border-indigo/30 hover:shadow-md transition-all"
                  >
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[r.category]}`}>
                      {categoryLabels[locale as Locale][r.category]}
                    </span>
                    <p className="text-sm font-semibold text-dark-text dark:text-white mt-2 group-hover:text-indigo transition-colors line-clamp-2">
                      {r.title}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">{r.readingTime} {ui.readingTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}
      </article>
    </>
  );
}

