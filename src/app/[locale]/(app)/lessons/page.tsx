import type { Metadata } from "next";
import { pageTitle, ogImages } from "@/lib/seo";
import { locales, type Locale } from "@/i18n/config";
import { LessonsList } from "./LessonsList";
import { localizedPath } from "@/i18n/routes";
import { organization } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

const meta: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "10 Finger schreiben lernen - Kurs für Erwachsene",
    description: "Lerne das 10-Finger-System mit 15 Minuten am Tag. 31 strukturierte Lektionen, kostenloser Einstieg, Zertifikat am Ende.",
  },
  en: {
    title: "Learn Touch Typing - Course for Adults",
    description: "Learn the 10-finger system in 15 minutes a day. 31 structured lessons, free to start, certificate at the end.",
  },
  fr: {
    title: "Apprendre la dactylographie - Cours pour adultes",
    description: "Apprends le système à 10 doigts à raison de 15 minutes par jour. 31 leçons structurées, gratuit pour commencer, certificat à la clé.",
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
      canonical: `https://fastforwardtyping.com${localizedPath(locale, "lessons")}`,
      languages: Object.fromEntries([...locales.map((loc) => [loc, localizedPath(loc, "lessons")]), ["x-default", `/en/lessons`]]),
    },
  };
}

export default async function LessonsPage({ params }: Props) {
  const { locale } = await params;
  const m = meta[locale as Locale] ?? meta.en;

  // Course entity on the course page itself, not only on the home page
  // (docs/seo-geo-roadmap.md 1.6); same shape as the home page schema.
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: m.title,
    description: m.description,
    url: `https://fastforwardtyping.com${localizedPath(locale, "lessons")}`,
    provider: organization,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT15M",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    inLanguage: [locale],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <LessonsList locale={locale as Locale} />
    </>
  );
}
