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

type Props = {
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://fastforwardtyping.com";

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
  const hero = c.hero as Record<string, string>;
  const savings = c.savings as Record<string, string>;
  const included = c.included as { title: string; items: { title: string; desc: string }[] };
  const pricing = c.pricing as Record<string, string>;
  const form = c.form as ContactFormLabels & { title: string; subtitle: string };

  const calculatorLabels: CalculatorLabels = {
    teamSize: savings.teamSize,
    perPerson: savings.perPerson,
    perDay: savings.perDay,
    perYear: savings.perYear,
    fte: savings.fte,
    assumption: savings.assumption,
  };

  const pricingId = companiesAnchorId(locale, "pricing");
  const contactId = companiesAnchorId(locale, "contact");

  return (
    <div className="marketing-ambient">
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
                <CtaButton href={`/${locale}/speed-test`} variant="secondary">{hero.ctaSecondary}</CtaButton>
              </div>
            </div>
            <div className="hidden md:block animate-float">
              <KeyCharacter pose="pointing" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Savings calculator */}
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

      {/* What's included + pricing */}
      <section id={pricingId} className="py-20 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{included.title}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {included.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100} animation="scale-in">
                <div className="group h-full rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-6 hover:shadow-xl hover:shadow-indigo/5 hover:-translate-y-1 transition-all duration-300">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${i % 2 === 0 ? "bg-indigo/10" : "bg-peach/10"} group-hover:scale-110 transition-transform duration-300`}>
                    <svg className={`h-5 w-5 ${i % 2 === 0 ? "text-indigo" : "text-peach"}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={INCLUDED_ICONS[i % INCLUDED_ICONS.length]} />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
        <TestimonialSlider locale={locale} />
      </section>

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
