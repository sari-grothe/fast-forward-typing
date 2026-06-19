import type { Locale } from "@/i18n/config";
import { LessonView } from "@/components/typing/LessonView";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function LessonPage({ params }: Props) {
  const { locale, id } = await params;
  const lessonId = parseInt(id, 10);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <LessonView lessonId={lessonId} locale={locale as Locale} />
    </div>
  );
}
