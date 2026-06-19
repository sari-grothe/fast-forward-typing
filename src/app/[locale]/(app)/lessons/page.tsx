import type { Locale } from "@/i18n/config";
import { lessons, lessonMeta, phaseNames } from "@/lib/lessons";

type Props = {
  params: Promise<{ locale: string }>;
};

const i18n: Record<Locale, {
  title: string;
  subtitle: string;
  free: string;
  locked: string;
  start: string;
  keys: string;
  review: string;
}> = {
  de: {
    title: "Dein Tippkurs",
    subtitle: "15 Lektionen. Von der Grundreihe bis zur vollen Tastatur.",
    free: "Kostenlos",
    locked: "Pro",
    start: "Starten",
    keys: "Tasten",
    review: "Wiederholung",
  },
  en: {
    title: "Your Typing Course",
    subtitle: "15 lessons. From home row to full keyboard.",
    free: "Free",
    locked: "Pro",
    start: "Start",
    keys: "Keys",
    review: "Review",
  },
  fr: {
    title: "Ton cours de frappe",
    subtitle: "15 lecons. De la rangee de base au clavier complet.",
    free: "Gratuit",
    locked: "Pro",
    start: "Commencer",
    keys: "Touches",
    review: "Revision",
  },
};

export default async function LessonsPage({ params }: Props) {
  const { locale } = await params;
  const l = i18n[locale as Locale];

  const grouped = lessons.reduce<Record<number, typeof lessons>>((acc, lesson) => {
    if (!acc[lesson.phase]) acc[lesson.phase] = [];
    acc[lesson.phase].push(lesson);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {l.title}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">{l.subtitle}</p>
      </div>

      {Object.entries(grouped).map(([phase, phaseLessons]) => {
        const phaseNum = parseInt(phase);
        const pName = phaseNames[locale as Locale]?.[phaseNum] ?? phaseNames.en[phaseNum];

        return (
          <div key={phase} className="space-y-3">
            <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Phase {phaseNum}: {pName}
            </h2>
            <div className="space-y-2">
              {phaseLessons.map((lesson) => {
                const meta = lessonMeta[locale as Locale]?.[lesson.id] ?? lessonMeta.en[lesson.id];
                return (
                  <a
                    key={lesson.id}
                    href={`/${locale}/lessons/${lesson.id}`}
                    className="group flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-4 hover:border-indigo/30 hover:bg-indigo/5 dark:hover:bg-indigo/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center text-indigo font-bold text-sm">
                      {lesson.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-dark-text dark:text-white truncate">
                        {meta?.title ?? `Lesson ${lesson.id}`}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                        {lesson.newKeys.length > 0
                          ? `${l.keys}: ${lesson.newKeys.map((k) => k.toUpperCase()).join(", ")}`
                          : l.review}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {lesson.isFree ? (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo/10 text-indigo">
                          {l.free}
                        </span>
                      ) : (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-electric-yellow/20 text-dark-text dark:text-electric-yellow">
                          {l.locked}
                        </span>
                      )}
                      <svg className="w-4 h-4 text-zinc-400 group-hover:text-indigo transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
