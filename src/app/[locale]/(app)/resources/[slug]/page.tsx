import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getResource, getRelatedResources, getAllResourceSlugs, getTranslations, categoryLabels, resourcesUi } from "@/lib/resources";
import { pageTitle, ogImages } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { Markdown, extractHeadings } from "@/lib/markdown";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FinalCTA } from "@/components/FinalCTA";
import { CheatSheetGate } from "@/components/resources/CheatSheetGate";
import { ArticleToc } from "@/components/resources/ArticleToc";
import { ArticleCtaCard } from "@/components/resources/ArticleCtaCard";
import { organization } from "@/lib/schema";
import { companiesPath, localizedPath } from "@/i18n/routes";
import { locales } from "@/i18n/config";
import { validateArticleLinks } from "@/lib/internal-links";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  // Fails the build if any article breaks the internal linking rules.
  validateArticleLinks([...locales]);
  return getAllResourceSlugs().map(({ slug, locale }) => ({ locale, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const resource = getResource(slug, locale as Locale);
  if (!resource) return {};

  const title = pageTitle(resource.title);
  const translations = getTranslations(slug, locale as Locale);
  const languages = Object.fromEntries(
    Object.entries(translations).map(([l, s]) => [l, `${localizedPath(l, "resources")}/${s}`])
  );
  if (translations.en) languages["x-default"] = `/en/resources/${translations.en}`;
  return {
    title,
    description: resource.description,
    openGraph: { title, description: resource.description, type: "article", images: ogImages(locale) },
    alternates: {
      canonical: `https://fastforwardtyping.com${localizedPath(locale, "resources")}/${slug}`,
      // Only editions that exist; a single-language article gets none.
      ...(Object.keys(languages).length > 1 ? { languages } : {}),
    },
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const resource = getResource(slug, locale as Locale);
  const ui = resourcesUi[locale as Locale];
  const dict = await getDictionary(locale as Locale);
  const h = dict.home as Record<string, unknown>;
  const final_ = h.finalCta as Record<string, string>;

  if (!resource) notFound();

  const related = getRelatedResources(slug, locale as Locale);
  const isLeadMagnet = resource.type === "lead-magnet";
  const headings = extractHeadings(resource.content);
  // Productivity articles are the ones that also make sense for a
  // company buyer (time saved, professional output) - the other
  // categories (shortcuts, learning basics) are individual-only.
  const showTeamCta = resource.category === "productivity";

  const categoryColors: Record<string, string> = {
    learning: "bg-indigo/10 text-indigo",
    shortcuts: "bg-electric-yellow/15 text-dark-text dark:text-electric-yellow",
    productivity: "bg-peach/20 text-dark-text dark:text-peach",
    comparisons: "bg-lavender text-indigo dark:bg-indigo/15 dark:text-electric-yellow",
  };

  const articleUrl = `https://fastforwardtyping.com${localizedPath(locale, "resources")}/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    datePublished: resource.date,
    dateModified: resource.date,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: organization,
    publisher: organization,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", name: "Fast Forward >> Typing", url: "https://fastforwardtyping.com" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://fastforwardtyping.com/${locale}` },
      { "@type": "ListItem", position: 2, name: ui.pageTitle, item: `https://fastforwardtyping.com${localizedPath(locale, "resources")}` },
      { "@type": "ListItem", position: 3, name: resource.title, item: articleUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)_300px] lg:gap-8 lg:items-start">
          {/* The article comes first in the DOM so crawlers and AI
              extractors read the lead paragraph before any sidebar; the
              grid column placement keeps the visual order TOC | article | CTA. */}
          <article className="min-w-0 lg:col-start-2 lg:row-start-1">
            {/* Back link + meta */}
            <ScrollReveal>
              <div className="flex items-center justify-between mb-6">
                <Link
                  href={localizedPath(locale, "resources")}
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-indigo transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  {ui.backToResources}
                </Link>
                <div className="flex items-center gap-2 text-sm">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${categoryColors[resource.category]}`}>
                    {categoryLabels[locale as Locale][resource.category]}
                  </span>
                  <span className="text-zinc-600">{resource.readingTime} {ui.readingTime}</span>
                  <span className="text-zinc-300 dark:text-zinc-600">·</span>
                  <time dateTime={resource.date} className="text-zinc-600">
                    {ui.updatedLabel} {new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(new Date(resource.date))}
                  </time>
                </div>
              </div>
            </ScrollReveal>

            {/* Title */}
            <ScrollReveal delay={60}>
              <header className="mb-8 space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white leading-tight">
                  {resource.title}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
                  {resource.description}
                </p>
                {isLeadMagnet && (
                  <CheatSheetGate
                    locale={locale}
                    title={resource.title}
                    pdfUrl={`/downloads/${resource.slug}.pdf`}
                    labels={{
                      gateTitle: ui.gateTitle,
                      gateDesc: ui.gateDesc,
                      namePlaceholder: ui.namePlaceholder,
                      emailPlaceholder: ui.emailPlaceholder,
                      gateCta: ui.gateCta,
                      gateSending: ui.gateSending,
                      gateError: ui.gateError,
                      consentText: ui.consentText,
                      consentLinkText: ui.consentLinkText,
                      downloadPdf: ui.downloadPdf,
                      downloadHint: ui.downloadHint,
                    }}
                  />
                )}
              </header>
            </ScrollReveal>

            {/* Mobile-only TOC: same headings, collapsed by default so it
                doesn't push the article body below the fold. */}
            {headings.length >= 3 && (
              <details className="lg:hidden mb-8 rounded-xl border border-zinc-200 dark:border-dark-border p-4">
                <summary className="text-sm font-semibold text-dark-text dark:text-white cursor-pointer">
                  {ui.tocLabel}
                </summary>
                <ul className="mt-3 space-y-2 text-sm">
                  {headings.map((hd) => (
                    <li key={hd.id} className={hd.level === 3 ? "pl-4" : ""}>
                      <a href={`#${hd.id}`} className="text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors">
                        {hd.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {/* Mobile-only B2B teaser: the sidebar version is desktop-only,
                so productivity articles still need this link somewhere
                mobile readers will see it. */}
            {showTeamCta && (
              <div className="lg:hidden mb-8 rounded-xl border border-peach/30 bg-peach/5 dark:bg-peach/10 p-4">
                <p className="text-sm font-semibold text-dark-text dark:text-white mb-1">{ui.teamCtaTitle}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">{ui.teamCtaDesc}</p>
                <Link href={companiesPath(locale)} className="text-sm font-semibold text-indigo hover:underline">
                  {ui.teamCtaLink} &gt;&gt;
                </Link>
              </div>
            )}

            <hr className="border-zinc-200 dark:border-dark-border mb-8" />

            {/* Content */}
            <ScrollReveal delay={120}>
              <div className="mb-12">
                <Markdown content={resource.content} locale={locale as Locale} />
              </div>
            </ScrollReveal>

            {/* CTA */}
            <div className="mb-12">
              <FinalCTA
                locale={locale}
                title={final_.title}
                description={final_.desc}
                ctaLearn={h.ctaLearn as string}
                ctaTest={h.ctaTest as string}
              />
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <ScrollReveal delay={200}>
                <section className="space-y-4">
                  <h2 className="text-lg font-bold text-dark-text dark:text-white">{ui.relatedArticles}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`${localizedPath(locale, "resources")}/${r.slug}`}
                        className="group rounded-xl border border-zinc-200 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 p-4 hover:border-indigo/30 hover:shadow-md transition-all"
                      >
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[r.category]}`}>
                          {categoryLabels[locale as Locale][r.category]}
                        </span>
                        <p className="text-sm font-semibold text-dark-text dark:text-white mt-2 group-hover:text-indigo transition-colors line-clamp-2">
                          {r.title}
                        </p>
                        <p className="text-xs text-zinc-600 mt-1">{r.readingTime} {ui.readingTime}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}
          </article>

          {/* Left: table of contents, sticky, desktop only - hidden entirely
              on short articles (see ArticleToc's own 3-heading minimum). */}
          <aside className="hidden lg:block sticky top-24 self-start lg:col-start-1 lg:row-start-1">
            <ArticleToc headings={headings} label={ui.tocLabel} />
          </aside>

          {/* Right: sticky CTA card, desktop only - a mobile version would
              either float awkwardly mid-content or duplicate the bottom
              FinalCTA banner one scroll later, so mobile relies on that
              banner instead. */}
          <aside className="hidden lg:block sticky top-24 self-start lg:col-start-3 lg:row-start-1">
            <ArticleCtaCard
              locale={locale}
              title={ui.tryCta}
              description={ui.tryCtaDesc}
              courseLabel={ui.startCourse}
              testLabel={h.ctaTest as string}
              team={
                showTeamCta
                  ? {
                      title: ui.teamCtaTitle,
                      description: ui.teamCtaDesc,
                      linkLabel: ui.teamCtaLink,
                      href: companiesPath(locale),
                    }
                  : undefined
              }
            />
          </aside>
        </div>
      </div>
    </>
  );
}

