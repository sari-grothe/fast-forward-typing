import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { LessonView } from "@/components/typing/LessonView";
import { getLesson, getLessons, lessonMeta } from "@/lib/lessons";
import { localizedPath } from "@/i18n/routes";
import { locales } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

// Prerender every lesson: a dynamically rendered page gets its metadata
// streamed into the body instead of <head>, which audits (and some
// crawlers) read as "no description".
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLessons(locale).map((lesson) => ({ locale, id: String(lesson.id) }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const l = locale as Locale;
  const lessonId = parseInt(id, 10);
  const lesson = getLesson(lessonId, l);
  const info = lessonMeta[l]?.[lessonId] ?? lessonMeta.en[lessonId];
  if (!lesson || !info) return {};

  // Lesson pages are interactive practice screens with little text
  // (about 150 words) and the paid ones show a paywall to crawlers.
  // They add no search value and would read as thin content, so all of
  // them stay out of the index; the course is found via /lessons.
  const title = `${info.title} | Fast Forward >> Typing`;
  return {
    title,
    description: info.subtitle,
    robots: { index: false, follow: true },
    openGraph: { title, description: info.subtitle, type: "website" },
    alternates: {
      canonical: `https://fastforwardtyping.com${localizedPath(locale, "lessons")}/${lessonId}`,
    },
  };
}

export default async function LessonPage({ params }: Props) {
  const { locale, id } = await params;
  const lessonId = parseInt(id, 10);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <LessonView lessonId={lessonId} locale={locale as Locale} />
    </div>
  );
}
