"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LessonDrill } from "./LessonDrill";
import { KeyIntro } from "./KeyIntro";
import { KeyCharacter } from "@/components/KeyCharacter";
import { ProWall, isProWallCleared } from "./ProWall";
import { getLesson, getLessons, getNextLesson, lessonMeta, phaseNames, displayKey, homeRestingKeys } from "@/lib/lessons";
import { progressStore } from "@/lib/progress-store";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";

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
  homePosition: string;
  nextLesson: string;
  backToLessons: string;
  drillResults: string;
  avgWpm: string;
  avgAccuracy: string;
  courseComplete: string;
  courseCompleteDesc: string;
  lessonNotFound: string;
  insightLabel: string;
  progressDone: (done: number, total: number) => string;
  progressLeft: (n: number) => string;
}> = {
  de: {
    lessonLabel: "Lektion",
    phase: "Phase",
    newKeys: "Neue Tasten",
    homePosition: "Grundposition",
    nextLesson: "Nächste Lektion",
    backToLessons: "Alle Lektionen",
    drillResults: "Ergebnis",
    avgWpm: "Durchschnitt",
    avgAccuracy: "Genauigkeit",
    courseComplete: "Kurs abgeschlossen",
    courseCompleteDesc: "Du tippst jetzt mit allen zehn Fingern.",
    lessonNotFound: "Lektion nicht gefunden.",
    insightLabel: "Gut zu wissen",
    progressDone: (done, total) => `${done} von ${total} Lektionen geschafft`,
    progressLeft: (n) => `noch ${n} vor dir`,
  },
  en: {
    lessonLabel: "Lesson",
    phase: "Phase",
    newKeys: "New keys",
    homePosition: "Home position",
    nextLesson: "Next lesson",
    backToLessons: "All lessons",
    drillResults: "Result",
    avgWpm: "Average",
    avgAccuracy: "Accuracy",
    courseComplete: "Course complete",
    courseCompleteDesc: "You now type with all ten fingers.",
    lessonNotFound: "Lesson not found.",
    insightLabel: "Good to know",
    progressDone: (done, total) => `${done} of ${total} lessons done`,
    progressLeft: (n) => `${n} to go`,
  },
  fr: {
    lessonLabel: "Leçon",
    phase: "Phase",
    newKeys: "Nouvelles touches",
    homePosition: "Position de base",
    nextLesson: "Leçon suivante",
    backToLessons: "Toutes les leçons",
    drillResults: "Résultat",
    avgWpm: "Moyenne",
    avgAccuracy: "Précision",
    courseComplete: "Cours terminé",
    courseCompleteDesc: "Tu tapes maintenant avec tes dix doigts.",
    lessonNotFound: "Leçon introuvable.",
    insightLabel: "Bon à savoir",
    progressDone: (done, total) => `${done} leçons sur ${total} terminées`,
    progressLeft: (n) => `encore ${n}`,
  },
};

export function LessonView({ lessonId, locale }: Props) {
  // Computed before the hooks below (pure lookup, no side effects) so the
  // Pro-wall gate can read lesson.isFree - the same flag that already
  // drives the Free/Pro badges on the lessons list - instead of
  // duplicating the free/paid split as a separate hardcoded lesson id.
  const lesson = getLesson(lessonId, locale);
  const isPaidLesson = lesson ? !lesson.isFree : false;

  const [introComplete, setIntroComplete] = useState(lessonId !== 0);
  const [currentDrill, setCurrentDrill] = useState(0);
  const [results, setResults] = useState<DrillResult[]>([]);
  const [isLessonComplete, setIsLessonComplete] = useState(false);
  const [doneIds, setDoneIds] = useState<Set<number>>(new Set());
  // Undecided until the effect below checks storage, so the wall never
  // flashes-then-hides (or vice versa) on a gated lesson.
  const [gateChecked, setGateChecked] = useState(!isPaidLesson);
  const [gateCleared, setGateCleared] = useState(!isPaidLesson);

  useEffect(() => {
    const records = progressStore.getLessonRecords(locale);
    const skips = progressStore.getProfile(locale)?.placement?.suggestedSkipLessonIds ?? [];
    setDoneIds(new Set([...Object.keys(records).map(Number), ...skips]));
  }, [locale, lessonId, isLessonComplete]);

  useEffect(() => {
    if (!isPaidLesson) return;
    setGateCleared(isProWallCleared());
    setGateChecked(true);
  }, [lessonId, isPaidLesson]);

  const l = i18n[locale];

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-600">{l.lessonNotFound}</p>
        <Link href={localizedPath(locale, "lessons")} className="text-indigo hover:underline mt-2 inline-block">
          {l.backToLessons}
        </Link>
      </div>
    );
  }

  const meta = lessonMeta[locale]?.[lessonId] ?? lessonMeta.en[lessonId];
  const phaseName = phaseNames[locale]?.[lesson.phase] ?? phaseNames.en[lesson.phase];
  const nextLesson = getNextLesson(lessonId, locale);

  if (isPaidLesson && !gateCleared) {
    if (!gateChecked) return null;
    return <ProWall locale={locale} onCleared={() => setGateCleared(true)} />;
  }

  function handleDrillComplete(result: DrillResult) {
    const newResults = [...results, result];
    setResults(newResults);

    if (currentDrill + 1 < lesson!.drills.length) {
      setCurrentDrill(currentDrill + 1);
    } else {
      setIsLessonComplete(true);
      const wpm = Math.round(newResults.reduce((s, r) => s + r.wpm, 0) / newResults.length);
      const accuracy = Math.round(newResults.reduce((s, r) => s + r.accuracy, 0) / newResults.length);
      progressStore.saveLessonRecord(locale, {
        lessonId,
        wpm,
        accuracy,
        completedAt: new Date().toISOString(),
      });
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
      <div className="space-y-8 animate-fade-up">
        {/* Lesson complete */}
        <div className="rounded-2xl border-2 border-indigo/20 bg-gradient-to-b from-white to-lavender/30 dark:from-dark-surface dark:to-dark p-8 sm:p-10 text-center space-y-4 shadow-xl shadow-indigo/5">
          <div className="flex justify-center animate-float">
            <KeyCharacter pose={nextLesson ? "sitting-waving" : "waving"} size={100} />
          </div>
          <h2 className="text-2xl font-bold text-dark-text dark:text-white">
            {meta?.completionMessage ?? "Complete!"}
          </h2>
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-600">
            <span>{l.avgWpm}: <strong className="text-dark-text dark:text-white">{avgWpm} WPM</strong></span>
            <span>{l.avgAccuracy}: <strong className="text-dark-text dark:text-white">{avgAccuracy}%</strong></span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            {nextLesson ? (
              <Link
                href={`${localizedPath(locale, "lessons")}/${nextLesson.id}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:shadow-indigo/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {l.nextLesson} <span className="text-electric-yellow group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
              </Link>
            ) : (
              <div className="space-y-2">
                <p className="text-lg font-bold text-indigo">{l.courseComplete}</p>
                <p className="text-sm text-zinc-600">{l.courseCompleteDesc}</p>
              </div>
            )}
            <Link
              href={localizedPath(locale, "lessons")}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-dark-border px-6 py-3 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-dark-surface transition-colors"
            >
              {l.backToLessons}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Lesson header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href={localizedPath(locale, "lessons")}
            className="inline-flex items-center gap-1.5 hover:text-indigo transition-colors"
          >
            <span aria-hidden>&lsaquo;</span> {l.backToLessons}
          </Link>
          <span>
            {l.phase} {lesson.phase}: {phaseName}
            <span className="text-zinc-300 dark:text-dark-border"> - </span>
            {l.lessonLabel} {lessonId}
          </span>
        </div>
        {(() => {
          const all = getLessons(locale);
          const done = all.filter((item) => doneIds.has(item.id)).length;
          const left = all.length - done;
          return (
            <div className="pt-1" aria-label={l.progressDone(done, all.length)}>
              <div className="flex gap-[3px]">
                {all.map((item) => (
                  <span
                    key={item.id}
                    title={`${l.lessonLabel} ${item.id}`}
                    className={`h-1.5 flex-1 rounded-full ${
                      doneIds.has(item.id)
                        ? "bg-indigo"
                        : item.id === lessonId
                          ? "bg-indigo/40 ring-1 ring-indigo/60"
                          : "bg-zinc-200 dark:bg-dark-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between pt-1.5 text-xs text-zinc-600 dark:text-zinc-500">
                <span>{l.progressDone(done, all.length)}</span>
                {left > 0 && <span>{l.progressLeft(left)}</span>}
              </div>
            </div>
          );
        })()}
        <h1 className="text-2xl sm:text-3xl font-bold text-dark-text dark:text-white">
          {meta?.title ?? `Lesson ${lessonId}`}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {meta?.subtitle}
        </p>
        {meta?.newKeysLabel && lesson.newKeys.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-zinc-600">{lessonId === 0 ? l.homePosition : l.newKeys}:</span>
            <div className="flex flex-wrap gap-1">
              {(lessonId === 0 ? homeRestingKeys[locale] : lesson.newKeys).map((key) => (
                <kbd
                  key={key}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface text-sm font-mono font-semibold"
                >
                  {displayKey(key)}
                </kbd>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* "Gut zu wissen": why this practice works.
          Hidden during the lesson-0 home-position walkthrough so it doesn't
          stack a second box above the keyboard and duplicate the F/J intro. */}
      {meta?.insight && (introComplete || lessonId !== 0) && (
        <div className="flex gap-3 rounded-xl border border-electric-yellow/40 bg-electric-yellow/10 dark:bg-electric-yellow/5 p-4">
          <div className="shrink-0 -mt-1">
            <KeyCharacter pose="pointing" size={44} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1">{l.insightLabel}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{meta.insight}</p>
          </div>
        </div>
      )}

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
