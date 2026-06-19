"use client";

import { useState } from "react";
import { LessonDrill } from "./LessonDrill";
import { KeyIntro } from "./KeyIntro";
import { KeyCharacter } from "@/components/KeyCharacter";
import { getLesson, getNextLesson, lessonMeta, phaseNames } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

type Props = {
  lessonId: number;
  locale: Locale;
};

type DrillResult = {
  wpm: number;
  accuracy: number;
  errors: number;
};

const i18n: Record<Locale, {
  lessonLabel: string;
  phase: string;
  newKeys: string;
  nextLesson: string;
  backToLessons: string;
  drillResults: string;
  avgWpm: string;
  avgAccuracy: string;
  courseComplete: string;
  courseCompleteDesc: string;
  lessonNotFound: string;
}> = {
  de: {
    lessonLabel: "Lektion",
    phase: "Phase",
    newKeys: "Neue Tasten",
    nextLesson: "Nächste Lektion",
    backToLessons: "Alle Lektionen",
    drillResults: "Ergebnis",
    avgWpm: "Durchschnitt",
    avgAccuracy: "Genauigkeit",
    courseComplete: "Kurs abgeschlossen",
    courseCompleteDesc: "Du tippst jetzt mit allen zehn Fingern.",
    lessonNotFound: "Lektion nicht gefunden.",
  },
  en: {
    lessonLabel: "Lesson",
    phase: "Phase",
    newKeys: "New keys",
    nextLesson: "Next lesson",
    backToLessons: "All lessons",
    drillResults: "Result",
    avgWpm: "Average",
    avgAccuracy: "Accuracy",
    courseComplete: "Course complete",
    courseCompleteDesc: "You now type with all ten fingers.",
    lessonNotFound: "Lesson not found.",
  },
  fr: {
    lessonLabel: "Leçon",
    phase: "Phase",
    newKeys: "Nouvelles touches",
    nextLesson: "Leçon suivante",
    backToLessons: "Toutes les leçons",
    drillResults: "Résultat",
    avgWpm: "Moyenne",
    avgAccuracy: "Précision",
    courseComplete: "Cours terminé",
    courseCompleteDesc: "Tu tapes maintenant avec tes dix doigts.",
    lessonNotFound: "Leçon introuvable.",
  },
};

export function LessonView({ lessonId, locale }: Props) {
  const [introComplete, setIntroComplete] = useState(lessonId !== 0);
  const [currentDrill, setCurrentDrill] = useState(0);
  const [results, setResults] = useState<DrillResult[]>([]);
  const [isLessonComplete, setIsLessonComplete] = useState(false);

  const lesson = getLesson(lessonId);
  const l = i18n[locale];

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-500">{l.lessonNotFound}</p>
        <a href={`/${locale}/lessons`} className="text-indigo hover:underline mt-2 inline-block">
          {l.backToLessons}
        </a>
      </div>
    );
  }

  const meta = lessonMeta[locale]?.[lessonId] ?? lessonMeta.en[lessonId];
  const phaseName = phaseNames[locale]?.[lesson.phase] ?? phaseNames.en[lesson.phase];
  const nextLesson = getNextLesson(lessonId);

  function handleDrillComplete(result: DrillResult) {
    const newResults = [...results, result];
    setResults(newResults);

    if (currentDrill + 1 < lesson!.drills.length) {
      setCurrentDrill(currentDrill + 1);
    } else {
      setIsLessonComplete(true);
    }
  }

  const avgWpm = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.wpm, 0) / results.length)
    : 0;
  const avgAccuracy = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.accuracy, 0) / results.length)
    : 0;

  if (isLessonComplete) {
    return (
      <div className="space-y-8">
        {/* Lesson complete */}
        <div className="rounded-2xl border-2 border-indigo/20 bg-white dark:bg-dark-surface p-8 sm:p-10 text-center space-y-4">
          <div className="flex justify-center">
            <KeyCharacter pose={nextLesson ? "sitting-waving" : "waving"} size={80} />
          </div>
          <h2 className="text-2xl font-bold text-dark-text dark:text-white">
            {meta?.completionMessage ?? "Complete!"}
          </h2>
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span>{l.avgWpm}: <strong className="text-dark-text dark:text-white">{avgWpm} WPM</strong></span>
            <span>{l.avgAccuracy}: <strong className="text-dark-text dark:text-white">{avgAccuracy}%</strong></span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            {nextLesson ? (
              <a
                href={`/${locale}/lessons/${nextLesson.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
              >
                {l.nextLesson} <span className="text-electric-yellow">&gt;&gt;</span>
              </a>
            ) : (
              <div className="space-y-2">
                <p className="text-lg font-bold text-indigo">{l.courseComplete}</p>
                <p className="text-sm text-zinc-500">{l.courseCompleteDesc}</p>
              </div>
            )}
            <a
              href={`/${locale}/lessons`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-dark-border px-6 py-3 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-dark-surface transition-colors"
            >
              {l.backToLessons}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Lesson header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{l.phase} {lesson.phase}: {phaseName}</span>
          <span className="text-zinc-300 dark:text-dark-border">-</span>
          <span>{l.lessonLabel} {lessonId}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-dark-text dark:text-white">
          {meta?.title ?? `Lesson ${lessonId}`}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          {meta?.subtitle}
        </p>
        {meta?.newKeysLabel && lesson.newKeys.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-500">{l.newKeys}:</span>
            <div className="flex gap-1">
              {lesson.newKeys.map((key) => (
                <kbd
                  key={key}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface text-sm font-mono font-semibold"
                >
                  {key.toUpperCase()}
                </kbd>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Key intro for lesson 0 */}
      {!introComplete && lessonId === 0 && (
        <KeyIntro locale={locale} onComplete={() => setIntroComplete(true)} />
      )}

      {/* Current drill */}
      {introComplete && (
        <LessonDrill
          key={`${lessonId}-${currentDrill}`}
          drill={lesson.drills[currentDrill]}
          drillIndex={currentDrill}
          totalDrills={lesson.drills.length}
          allKeys={lesson.allKeys}
          locale={locale}
          completionThreshold={lesson.completionThreshold}
          onComplete={handleDrillComplete}
        />
      )}
    </div>
  );
}
