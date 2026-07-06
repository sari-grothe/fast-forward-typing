import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { PlacementTest } from "@/components/typing/PlacementTest";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string; h1: string; intro: string }> = {
  de: {
    title: "Einstufung - Wo stehst du beim 10-Finger-System?",
    description: "3 kurze Runden zeigen, welche Tasten sitzen und welche Training brauchen. Danach bekommst du deinen individuellen Trainingsplan - beherrschte Lektionen werden übersprungen.",
    h1: "Deine Einstufung",
    intro: "3 kurze Runden, etwa 3 Minuten. Wir messen pro Taste, was sitzt und was Training braucht - danach startet dein Kurs genau da, wo du stehst.",
  },
  en: {
    title: "Placement - Where do you stand with touch typing?",
    description: "3 short rounds show which keys are solid and which need training. You get a personal training plan - mastered lessons are skipped.",
    h1: "Your placement",
    intro: "3 short rounds, about 3 minutes. We measure per key what's solid and what needs work - then your course starts exactly where you stand.",
  },
  fr: {
    title: "Évaluation - Où en es-tu avec la frappe à dix doigts ?",
    description: "3 manches courtes montrent quelles touches sont en place et lesquelles demandent de l'entraînement. Tu reçois un plan personnel - les leçons maîtrisées sont sautées.",
    h1: "Ton évaluation",
    intro: "3 manches courtes, environ 3 minutes. Nous mesurons touche par touche ce qui est en place et ce qui demande du travail - ensuite ton cours démarre exactement là où tu en es.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale as Locale] ?? meta.en;
  return {
    title: `${m.title} - Fast Forward >> Typing`,
    description: m.description,
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/placement`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/placement`])),
    },
  };
}

export default async function PlacementPage({ params }: Props) {
  const { locale } = await params;
  const m = meta[locale as Locale] ?? meta.en;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">{m.h1}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">{m.intro}</p>
      </div>
      <PlacementTest locale={locale as Locale} />
    </div>
  );
}
