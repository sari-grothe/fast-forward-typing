import type { Metadata } from "next";
import { pageTitle, ogImages } from "@/lib/seo";
import { locales, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";
import { organization } from "@/lib/schema";
import { Markdown } from "@/lib/markdown";
import { wordCounterExplainer } from "@/lib/tool-explainers";
import { WordCounter } from "./WordCounter";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string; h1: string; intro: string }> = {
  de: {
    title: "Zeichenzähler: Zeichen und Wörter zählen online, kostenlos",
    description: "Zeichen zählen, Wörter zählen, Sätze und Absätze, dazu Lese- und Tippzeit und die Limits für Google, SMS, X und LinkedIn. Kostenlos, ohne Anmeldung, im Browser.",
    h1: "Zeichenzähler und Wörterzähler",
    intro: "Text einfügen, sofort sehen: Wörter, Zeichen mit und ohne Leerzeichen, Sätze, Absätze, Lesezeit und wie lange das Tippen dauert. Alles im Browser, nichts wird gesendet.",
  },
  en: {
    title: "Word Counter: Count Words and Characters Online, Free",
    description: "Count words, characters with and without spaces, sentences and paragraphs, plus reading and typing time and the limits for Google, SMS and X. Free, no sign-up.",
    h1: "Word and character counter",
    intro: "Paste a text and see it at once: words, characters with and without spaces, sentences, paragraphs, reading time and how long it takes to type. All in your browser, nothing is sent.",
  },
  fr: {
    title: "Compteur de mots et de caractères en ligne, gratuit",
    description: "Compte mots, caractères avec et sans espaces, phrases et paragraphes, plus temps de lecture et de frappe et les limites Google, SMS, X, LinkedIn. Gratuit.",
    h1: "Compteur de mots et de caractères",
    intro: "Colle un texte et vois tout de suite : mots, caractères avec et sans espaces, phrases, paragraphes, temps de lecture et temps de frappe. Tout reste dans ton navigateur.",
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
      canonical: `https://fastforwardtyping.com${localizedPath(locale, "wordCounter")}`,
      languages: Object.fromEntries([...locales.map((loc) => [loc, localizedPath(loc, "wordCounter")]), ["x-default", localizedPath("en", "wordCounter")]]),
    },
  };
}

export default async function WordCounterPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;
  const pageUrl = `https://fastforwardtyping.com${localizedPath(locale, "wordCounter")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: m.title,
    description: m.description,
    url: pageUrl,
    applicationCategory: "UtilitiesApplication",
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
        <WordCounter locale={l} />
        <section className="mt-14 mb-4">
          <Markdown content={wordCounterExplainer(l)} locale={l} />
        </section>
      </div>
    </>
  );
}
