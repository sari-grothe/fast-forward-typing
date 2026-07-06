import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { LessonsList } from "./LessonsList";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "10 Finger schreiben lernen - Kurs für Erwachsene",
    description: "Lerne das 10-Finger-System in 4 Wochen, 15 Minuten am Tag. 28 strukturierte Lektionen, kostenloser Einstieg, Zertifikat am Ende.",
  },
  en: {
    title: "Learn Touch Typing - Course for Adults",
    description: "Learn the 10-finger system in 4 weeks, 15 minutes a day. 28 structured lessons, free to start, certificate at the end.",
  },
  fr: {
    title: "Apprendre la dactylographie - Cours pour adultes",
    description: "Apprends le système à 10 doigts en 4 semaines, 15 minutes par jour. 28 leçons structurées, gratuit pour commencer, certificat à la clé.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;

  return {
    title: `${m.title} - Fast Forward >> Typing`,
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: "website" },
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/lessons`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/lessons`])),
    },
  };
}

export default async function LessonsPage({ params }: Props) {
  const { locale } = await params;
  return <LessonsList locale={locale as Locale} />;
}
