import type { Metadata } from "next";
import { pageTitle, ogImages } from "@/lib/seo";
import { locales, type Locale } from "@/i18n/config";
import { SpeedTest } from "./SpeedTest";
import { localizedPath } from "@/i18n/routes";
import { Markdown } from "@/lib/markdown";
import { speedTestExplainer } from "@/lib/tool-explainers";

type Props = {
  params: Promise<{ locale: string }>;
};

// Kept separate from SpeedTest.tsx's own inline i18n table (see the
// "component-local translation tables" trap in docs/copywriting-de.md) -
// this is meta-only copy, not on-page text.
const meta: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "Tippgeschwindigkeit messen - kostenloser Test",
    description: "Miss in wenigen Minuten deine Tippgeschwindigkeit - kostenlos, ohne Anmeldung. Vergleiche dich mit dem Durchschnitt und starte danach den 10-Finger-System-Kurs.",
  },
  en: {
    title: "Typing Speed Test - Free, No Signup",
    description: "Measure your typing speed in a few minutes - free, no signup required. Compare yourself to the average, then start the touch-typing course.",
  },
  fr: {
    title: "Test de vitesse de frappe gratuit",
    description: "Mesure ta vitesse de frappe en quelques minutes - gratuit, sans inscription. Compare-toi à la moyenne, puis commence le cours de dactylographie.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = meta[l] ?? meta.en;

  return {
    title: pageTitle(m.title),
    description: m.description,
    openGraph: { title: m.title, description: m.description, type: "website", images: ogImages(locale) },
    alternates: {
      canonical: `https://fastforwardtyping.com${localizedPath(locale, "speedTest")}`,
      languages: Object.fromEntries([...locales.map((loc) => [loc, localizedPath(loc, "speedTest")]), ["x-default", `/en/speed-test`]]),
    },
  };
}

export default async function SpeedTestPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <SpeedTest
        locale={locale as Locale}
        explainer={
          <section className="mt-12 mb-4">
            <Markdown content={speedTestExplainer(locale as Locale)} />
          </section>
        }
      />
    </div>
  );
}
