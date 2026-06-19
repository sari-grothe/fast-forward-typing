import type { Locale } from "@/i18n/config";
import { lessons, lessonMeta, phaseNames } from "@/lib/lessons";
import { KeyCharacter } from "@/components/KeyCharacter";

type Props = {
  params: Promise<{ locale: string }>;
};

const phaseIcons: Record<number, string> = {
  0: "hand-raised",
  1: "home",
  2: "arrow-up",
  3: "arrow-down",
  4: "book",
  5: "caps",
  6: "punctuation",
  7: "paragraph",
  8: "bolt",
};

const i18n: Record<Locale, {
  title: string;
  subtitle: string;
  startCourse: string;
  continueCourse: string;
  free: string;
  pro: string;
  keys: string;
  review: string;
  lessons: string;
  lesson: string;
  allLessons: string;
  freeLabel: string;
  paidLabel: string;
  freeLessons: string;
  paidLessons: string;
}> = {
  de: {
    title: "Dein Tippkurs",
    subtitle: "28 Lektionen. Von der Grundreihe bis zur vollen Geschwindigkeit.",
    startCourse: "Kurs starten",
    continueCourse: "Weitermachen",
    free: "Kostenlos",
    pro: "Pro",
    keys: "Tasten",
    review: "Wiederholung",
    lessons: "Lektionen",
    lesson: "Lektion",
    allLessons: "Alle Lektionen",
    freeLabel: "Kostenlos",
    paidLabel: "Pro",
    freeLessons: "6 Lektionen kostenlos",
    paidLessons: "22 Lektionen mit Pro",
  },
  en: {
    title: "Your Typing Course",
    subtitle: "28 lessons. From home row to full speed.",
    startCourse: "Start course",
    continueCourse: "Continue",
    free: "Free",
    pro: "Pro",
    keys: "Keys",
    review: "Review",
    lessons: "lessons",
    lesson: "lesson",
    allLessons: "All lessons",
    freeLabel: "Free",
    paidLabel: "Pro",
    freeLessons: "6 lessons free",
    paidLessons: "22 lessons with Pro",
  },
  fr: {
    title: "Ton cours de frappe",
    subtitle: "28 lecons. De la rangee de base a la pleine vitesse.",
    startCourse: "Commencer le cours",
    continueCourse: "Continuer",
    free: "Gratuit",
    pro: "Pro",
    keys: "Touches",
    review: "Revision",
    lessons: "lecons",
    lesson: "lecon",
    allLessons: "Toutes les lecons",
    freeLabel: "Gratuit",
    paidLabel: "Pro",
    freeLessons: "6 lecons gratuites",
    paidLessons: "22 lecons avec Pro",
  },
};

function PhaseIcon({ phase }: { phase: number }) {
  const icons: Record<number, React.ReactNode> = {
    0: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075-5.925a1.575 1.575 0 013.15 0v1.5m-3.15-1.5v5.925m3.15-5.925v3.75a1.575 1.575 0 003.15 0V8.25m-3.15-.75a1.575 1.575 0 013.15 0m-3.15 0v3.75M6.9 7.575a1.575 1.575 0 10-3.15 0v6.75a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712V7.575" />
      </svg>
    ),
    1: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    2: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5" />
      </svg>
    ),
    3: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75l-7.5 7.5-7.5-7.5" />
      </svg>
    ),
    4: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    5: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
    6: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    7: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    8: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  };
  return <>{icons[phase] ?? icons[0]}</>;
}

export default async function LessonsPage({ params }: Props) {
  const { locale } = await params;
  const l = i18n[locale as Locale];

  const grouped = lessons.reduce<Record<number, typeof lessons>>((acc, lesson) => {
    if (!acc[lesson.phase]) acc[lesson.phase] = [];
    acc[lesson.phase].push(lesson);
    return acc;
  }, {});

  const totalLessons = lessons.length;
  const freeLessons = lessons.filter((l) => l.isFree).length;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-10">
      {/* Hero header with mascot */}
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3 flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white">
            {l.title}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-md">
            {l.subtitle}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo/10 text-indigo font-medium">
              {l.freeLessons}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-electric-yellow/15 text-dark-text dark:text-electric-yellow font-medium">
              {l.paidLessons}
            </span>
          </div>
          <a
            href={`/${locale}/lessons/0`}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo px-7 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors shadow-lg shadow-indigo/20 mt-2"
          >
            {l.startCourse} <span className="text-electric-yellow">&gt;&gt;</span>
          </a>
        </div>
        <div className="hidden sm:block shrink-0 pt-2">
          <KeyCharacter pose="waving" size={100} />
        </div>
      </div>

      {/* Phase list */}
      {Object.entries(grouped).map(([phase, phaseLessons]) => {
        const phaseNum = parseInt(phase);
        const pName = phaseNames[locale as Locale]?.[phaseNum] ?? phaseNames.en[phaseNum];
        const hasFreeLesson = phaseLessons.some((l) => l.isFree);

        return (
          <div key={phase} className="space-y-2.5">
            {/* Phase header */}
            <div className="flex items-center gap-2.5 pb-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo/10 text-indigo">
                <PhaseIcon phase={phaseNum} />
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-dark-text dark:text-white">
                  {pName}
                </h2>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {phaseLessons.length} {phaseLessons.length === 1 ? l.lesson : l.lessons}
                </span>
              </div>
            </div>

            {/* Lesson cards */}
            <div className="space-y-1.5">
              {phaseLessons.map((lesson) => {
                const meta = lessonMeta[locale as Locale]?.[lesson.id] ?? lessonMeta.en[lesson.id];
                return (
                  <a
                    key={lesson.id}
                    href={`/${locale}/lessons/${lesson.id}`}
                    className="group flex items-center gap-3.5 rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-4 py-3.5 hover:border-indigo/30 hover:bg-indigo/5 dark:hover:bg-indigo/5 transition-all duration-150"
                  >
                    {/* Lesson number */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-zinc-50 dark:bg-dark flex items-center justify-center text-sm font-bold text-zinc-400 dark:text-zinc-500 group-hover:bg-indigo/10 group-hover:text-indigo transition-colors">
                      {lesson.id}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-dark-text dark:text-white truncate group-hover:text-indigo transition-colors">
                        {meta?.title ?? `Lesson ${lesson.id}`}
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                        {lesson.newKeys.length > 0
                          ? `${l.keys}: ${lesson.newKeys.map((k) => k.toUpperCase()).join(", ")}`
                          : l.review}
                      </p>
                    </div>

                    {/* Badge + arrow */}
                    <div className="flex items-center gap-2 shrink-0">
                      {lesson.isFree ? (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo/10 text-indigo">
                          {l.free}
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-electric-yellow/15 text-dark-text/60 dark:text-electric-yellow/70">
                          {l.pro}
                        </span>
                      )}
                      <svg className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
