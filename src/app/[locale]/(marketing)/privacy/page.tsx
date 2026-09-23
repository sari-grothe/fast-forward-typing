import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import { BASE_URL } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string }> = {
  de: { title: "Datenschutz", description: "Datenschutzerklärung von Fast Forward >> Typing." },
  en: { title: "Privacy Policy", description: "Privacy policy for Fast Forward >> Typing." },
  fr: { title: "Politique de confidentialité", description: "Politique de confidentialité de Fast Forward >> Typing." },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;

  return {
    title: `${m.title} | Fast Forward >> Typing`,
    description: m.description,
    // Placeholder content, not the real policy yet - keep it out of
    // search until it has real text (see golive-checklist.md).
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${BASE_URL}/${locale}/privacy`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/privacy`])),
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const p = dict.privacy as { title: string; placeholder: string; contactCta: string };

  return (
    <div className="marketing-ambient">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">{p.title}</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto mb-8">{p.placeholder}</p>
        <a href={`/${l}/contact`} className="text-indigo font-medium hover:underline">
          {p.contactCta}
        </a>
      </div>
    </div>
  );
}
