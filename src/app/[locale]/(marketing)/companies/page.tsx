import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import { companiesPath, companiesAnchorId } from "@/i18n/routes";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { KeyCharacter } from "@/components/KeyCharacter";
import { TeamSavingsCalculator, type CalculatorLabels } from "@/components/companies/TeamSavingsCalculator";
import { ContactForm, type ContactFormLabels } from "@/components/companies/ContactForm";
import { CtaButton } from "@/components/CtaButton";
import { FAQ } from "@/components/FAQ";
import { companiesFAQ } from "@/lib/companies-faq-data";

type Props = {
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://fastforwardtyping.com";

// Dashboard, trending chart, bell, document-check (Heroicons outline)
const COMPANY_ICONS = [
  "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
  "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12",
];

const INCLUDED_ICONS = [
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const meta = (dict.companies as { meta: { title: string; description: string } }).meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}${companiesPath(locale)}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}${companiesPath(l)}`])),
        "x-default": `${BASE_URL}${companiesPath("en")}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}

export default async function CompaniesPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const c = dict.companies as Record<string, unknown>;
  const meta = c.meta as { title: string; description: string };
  const hero = c.hero as Record<string, string>;
  const savings = c.savings as Record<string, string>;
  const why = c.why as { eyebrow: string; title: string; intro: string; items: { title: string; desc: string }[]; closing: string };
  const included = c.included as { title: string; items: { title: string; desc: string }[] };
  const forCompany = c.forCompany as { title: string; items: { title: string; desc: string }[] };
  const whatYouGetTitle = c.whatYouGetTitle as string;
  const pricing = c.pricing as Record<string, string>;
  const form = c.form as ContactFormLabels & { title: string; subtitle: string };

  const calculatorLabels: CalculatorLabels = {
    teamSize: savings.teamSize,
    sliderHint: savings.sliderHint,
    perPerson: savings.perPerson,
    perDay: savings.perDay,
    perYear: savings.perYear,
    fte: savings.fte,
    assumption: savings.assumption,
  };

  const pricingId = companiesAnchorId(locale, "pricing");
  const contactId = companiesAnchorId(locale, "contact");
  const faq = companiesFAQ[locale] || companiesFAQ.en;

  // Service entity for search engines and AI assistants: what this is,
  // who it's for, how it's priced. Same provider block as the Course
  // schema on the homepage, kept in sync manually (see llms.txt maintenance
  // in CLAUDE.md - positioning changes need updating in both places).
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.title,
    description: meta.description,
    serviceType: "Corporate touch-typing training",
    provider: {
      "@type": "Organization",
      name: "Fast Forward >> Typing",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Companies, HR and L&D teams",
    },
    areaServed: ["DE", "AT", "CH", "FR", "BE"],
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "EUR",
        unitText: "seat/year",
      },
      availability: "https://schema.org/InStock",
    },
    inLanguage: locales,
  };

  return (
    <div className="marketing-ambient">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="pt-12 pb-20 sm:pt-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-indigo uppercase tracking-wider mb-4">{hero.eyebrow}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">{hero.title}</h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 max-w-2xl">{hero.subtitle}</p>
              <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl border-l-2 border-peach pl-4">{hero.fact}</p>
              <div className="flex flex-wrap gap-3">
                <CtaButton href={`#${contactId}`}>{hero.ctaPrimary}</CtaButton>
                <CtaButton href={`/${locale}/speed-test`} variant="secondary" newTab>{hero.ctaSecondary}</CtaButton>
              </div>
            </div>
            <div className="hidden md:block animate-float">
              <KeyCharacter pose="pointing" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Savings calculator - the hook: quantify the cost first, right
          after the hero, before explaining why nobody notices it */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{savings.title}</h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-12">{savings.baseline}</p>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal delay={80}>
              <TeamSavingsCalculator locale={locale} labels={calculatorLabels} />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="text-center text-xs text-zinc-400 max-w-md mx-auto mt-6">{savings.source}</p>
              <p className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto mt-6">{savings.promise}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The blind spot: why nobody checks typing anymore - the reason
          the number above goes unnoticed */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold text-peach uppercase tracking-wider text-center mb-3">{why.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{why.title}</h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">{why.intro}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
            {why.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex gap-5">
                  <span className="shrink-0 w-11 h-11 rounded-full bg-indigo/10 text-indigo font-extrabold text-lg flex items-center justify-center tabular-nums">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1.5">{item.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <p className="mt-12 text-center text-lg sm:text-xl font-semibold max-w-3xl mx-auto border-l-4 border-indigo pl-5 text-left md:text-center md:border-l-0 md:pl-0">
              {why.closing}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What's included + pricing. Two compact icon-list columns under
          one heading, not two stacked 2x2 card grids - eight near-identical
          boxes in a row read as the same module repeated and are slow to
          scan. Columns split by audience (team vs. company/HR), separated
          by a vertical rule on desktop, stacked on mobile. */}
      <section id={pricingId} className="py-20 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">{whatYouGetTitle}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 mb-14">
            <div className="lg:pr-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo mb-6">{included.title}</p>
              <ul className="space-y-6">
                {included.items.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 80}>
                    <li className="flex gap-4">
                      <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo/10">
                        <svg className="h-5 w-5 text-indigo" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={INCLUDED_ICONS[i % INCLUDED_ICONS.length]} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold mb-0.5">{item.title}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
            <div className="lg:pl-8 lg:border-l lg:border-zinc-200 dark:lg:border-dark-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-peach mb-6">{forCompany.title}</p>
              <ul className="space-y-6">
                {forCompany.items.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 80}>
                    <li className="flex gap-4">
                      <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-peach/10">
                        <svg className="h-5 w-5 text-peach" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={COMPANY_ICONS[i % COMPANY_ICONS.length]} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold mb-0.5">{item.title}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
          {/* Pricing: anchored directly under the value it bundles, not a
              floating box - the bridging first sentence in pricing.text
              ties it explicitly back to the two lists above. */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border-2 border-indigo/20 bg-indigo/5 dark:bg-indigo/10 p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{pricing.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">{pricing.text}</p>
              <CtaButton href={`#${contactId}`}>{pricing.cta}</CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 overflow-hidden">
        <TestimonialSlider locale={locale} segments={["professional"]} rows={1} showCta={false} />
      </section>

      {/* FAQ - also targets B2B long-tail search terms (price, duration,
          onboarding fit, multilingual teams, tracking, min. team size)
          that no other section on this page covers */}
      <div className="mx-auto max-w-5xl px-6">
        <section className="pb-20">
          <FAQ title={faq.title} items={faq.items} />
        </section>
      </div>

      {/* Contact form */}
      <section id={contactId} className="py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{form.title}</h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-12">{form.subtitle}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <ContactForm locale={locale} labels={form} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
