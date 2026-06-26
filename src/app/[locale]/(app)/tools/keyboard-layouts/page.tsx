import type { Metadata } from "next";
import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FinalCTA } from "@/components/FinalCTA";
import { KeyboardComparison } from "@/components/tools/KeyboardComparison";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "QWERTY vs AZERTY vs QWERTZ - Keyboard Layout Vergleich",
    description: "Vergleiche QWERTY, AZERTY und QWERTZ Tastaturlayouts interaktiv. Sieh die Unterschiede auf einen Blick und finde heraus, welches Layout in deinem Land verwendet wird.",
  },
  en: {
    title: "QWERTY vs AZERTY vs QWERTZ - Keyboard Layout Comparison",
    description: "Compare QWERTY, AZERTY, and QWERTZ keyboard layouts interactively. See the differences at a glance and find out which layout is used in your country.",
  },
  fr: {
    title: "QWERTY vs AZERTY vs QWERTZ - Comparaison des claviers",
    description: "Compare les dispositions clavier QWERTY, AZERTY et QWERTZ de manière interactive. Repère les différences en un coup d'œil et découvre quelle disposition est utilisée dans ton pays.",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;

  return {
    title: `${m.title} - Fast Forward >> Typing`,
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: "website" },
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/tools/keyboard-layouts`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/tools/keyboard-layouts`])),
    },
  };
}

export default async function KeyboardLayoutsPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;
  const dict = await getDictionary(l);
  const h = dict.home as Record<string, unknown>;
  const final_ = h.finalCta as Record<string, string>;

  const pageUrl = `https://fastforwardtyping.com/${locale}/tools/keyboard-layouts`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: m.title,
    description: m.description,
    url: pageUrl,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    author: { "@type": "Organization", name: "Fast Forward >> Typing", url: "https://fastforwardtyping.com" },
    inLanguage: locale,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://fastforwardtyping.com/${locale}` },
      { "@type": "ListItem", position: 2, name: m.title, item: pageUrl },
    ],
  };

  const tipSlug = locale === "fr" ? "qwerty-azerty-qwertz" : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mx-auto max-w-4xl px-6 py-10">
        <ScrollReveal>
          <header className="text-center mb-10 space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">
              {m.title.split(" - ")[0]}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
              {m.description}
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <KeyboardComparison locale={l} />
        </ScrollReveal>

        {tipSlug && (
          <ScrollReveal delay={120}>
            <div className="mt-8 text-center">
              <Link
                href={`/${locale}/tips/${tipSlug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                QWERTY, AZERTY, QWERTZ : pourquoi ton clavier est différent
              </Link>
            </div>
          </ScrollReveal>
        )}

        <div className="mt-12">
          <FinalCTA
            locale={locale}
            title={final_.title}
            description={final_.desc}
            ctaLearn={h.ctaLearn as string}
            ctaTest={h.ctaTest as string}
          />
        </div>
      </div>
    </>
  );
}
