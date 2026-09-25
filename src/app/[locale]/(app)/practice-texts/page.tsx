import type { Metadata } from "next";
import { pageTitle, ogImages } from "@/lib/seo";
import { locales, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";
import { organization } from "@/lib/schema";
import { Markdown } from "@/lib/markdown";
import { practiceTextsExplainer } from "@/lib/tool-explainers";
import { getPracticeTexts } from "@/lib/practice-texts";
import { PracticeTexts } from "./PracticeTexts";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string; h1: string; intro: string }> = {
  de: {
    title: "Übungstexte zum Tippen: 18 Texte fürs 10-Finger-Schreiben",
    description: "Kostenlose Übungstexte zum Abtippen: E-Mails, Meeting-Notizen, KI-Prompts, Zahlen und Sonderzeichen, nach Schwierigkeit sortiert. Kopieren oder direkt im Tipptest üben.",
    h1: "Übungstexte zum 10-Finger-Schreiben",
    intro: "18 Texte aus dem Arbeitsalltag, von der kurzen E-Mail bis zur Bestellung voller Sonderzeichen. Kopiere sie in dein Übungsprogramm oder lade sie mit einem Klick in den Tipptest.",
  },
  en: {
    title: "Typing Practice Paragraphs: 18 Real Texts to Type",
    description: "Free typing practice paragraphs: emails, meeting notes, AI prompts, numbers and symbols, sorted by difficulty. Copy them or load one straight into the speed test.",
    h1: "Typing practice paragraphs",
    intro: "18 texts from everyday office work, from a short email to an order full of symbols. Copy them into any typing program or load one into the speed test with one click.",
  },
  fr: {
    title: "Textes de dactylographie : 18 exercices à taper",
    description: "Textes d'exercice gratuits pour la dactylographie : e-mails, comptes rendus, prompts IA, chiffres et caractères spéciaux, classés par difficulté. À copier ou à charger dans le test.",
    h1: "Textes d'exercice pour la dactylographie",
    intro: "18 textes tirés du quotidien au bureau, du court e-mail à la commande pleine de caractères spéciaux. Copie-les dans ton programme d'entraînement ou charge-les dans le test de frappe en un clic.",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale as Locale] ?? meta.en;
  return {
    title: pageTitle(m.title),
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: "website", images: ogImages(locale) },
    alternates: {
      canonical: `https://fastforwardtyping.com${localizedPath(locale, "practiceTexts")}`,
      languages: Object.fromEntries([...locales.map((loc) => [loc, localizedPath(loc, "practiceTexts")]), ["x-default", localizedPath("en", "practiceTexts")]]),
    },
  };
}

export default async function PracticeTextsPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;
  const pageUrl = `https://fastforwardtyping.com${localizedPath(locale, "practiceTexts")}`;
  const count = getPracticeTexts(l).length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: m.title,
    description: m.description,
    url: pageUrl,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    author: organization,
    inLanguage: locale,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://fastforwardtyping.com/${locale}` },
      { "@type": "ListItem", position: 2, name: m.h1, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="mx-auto max-w-4xl px-6 py-10">
        <header className="text-center mb-8 space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">{m.h1}</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">{m.intro}</p>
        </header>
        <PracticeTexts locale={l} />
        <section className="mt-14 mb-4">
          <Markdown content={practiceTextsExplainer(l, count)} locale={l} />
        </section>
      </div>
    </>
  );
}
