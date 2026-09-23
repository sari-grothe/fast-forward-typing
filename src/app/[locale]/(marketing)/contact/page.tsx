import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ContactForm, type ContactFormLabels } from "@/components/ContactForm";
import { BASE_URL } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "Kontakt",
    description: "Frage, Feedback oder Problem? Schreib uns direkt - wir antworten innerhalb eines Werktags.",
  },
  en: {
    title: "Contact",
    description: "Question, feedback, or a problem? Write to us directly - we reply within one business day.",
  },
  fr: {
    title: "Contact",
    description: "Une question, un retour, un problème ? Écris-nous directement - on répond sous un jour ouvré.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;

  return {
    title: `${m.title} | Fast Forward >> Typing`,
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: "website" },
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/contact`])),
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const c = dict.contact as {
    title: string;
    subtitle: string;
    form: ContactFormLabels & { successCta: string };
  };

  return (
    <div className="marketing-ambient">
      <div className="mx-auto max-w-xl px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{c.title}</h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">{c.subtitle}</p>
        </div>
        <ContactForm locale={l} labels={c.form} />
      </div>
    </div>
  );
}
