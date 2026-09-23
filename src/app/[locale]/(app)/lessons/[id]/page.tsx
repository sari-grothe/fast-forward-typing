import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { LessonView } from "@/components/typing/LessonView";
import { getLesson, lessonMeta } from "@/lib/lessons";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const l = locale as Locale;
  const lessonId = parseInt(id, 10);
  const lesson = getLesson(lessonId, l);
  const info = lessonMeta[l]?.[lessonId] ?? lessonMeta.en[lessonId];
  if (!lesson || !info) return {};

  // Anonymous visitors (including crawlers) hit the Pro paywall on
  // gated lessons, not the lesson content itself - indexing a lesson
  // title whose page actually shows a paywall would be misleading, so
  // those stay out of search entirely.
  if (!lesson.isFree) {
    return { robots: { index: false, follow: true } };
  }

  const title = `${info.title} - Fast Forward >> Typing`;
  return {
    title,
    description: info.subtitle,
    openGraph: { title, description: info.subtitle, type: "website" },
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/lessons/${lessonId}`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/lessons/${lessonId}`])),
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
