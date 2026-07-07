"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLessons, displayKey } from "@/lib/lessons";
import { progressStore, type LessonRecord } from "@/lib/progress-store";
import { groupKeysByLevel, type SkillProfile } from "@/lib/skill-profile";
import type { Locale } from "@/i18n/config";

const i18n: Record<Locale, {
  title: string;
  bestWpm: string;
  avgAccuracy: string;
  lessonsDone: string;
  noData: string;
  weakKeysTitle: string;
  weakKeysEmpty: string;
  placementMissing: string;
  placementCta: string;
  continueCta: string;
}> = {
  de: {
    title: "Dein Fortschritt",
    bestWpm: "Beste WPM",
    avgAccuracy: "Ø Genauigkeit",
    lessonsDone: "Lektionen",
    noData: "-",
    weakKeysTitle: "Deine Trainingstasten",
    weakKeysEmpty: "Keine Schwachstellen erkannt - stark.",
    placementMissing: "Mach die Einstufung, um deinen individuellen Trainingsplan und dein Tastenprofil zu sehen.",
    placementCta: "Einstufung machen",
    continueCta: "Weiter trainieren",
  },
  en: {
    title: "Your progress",
    bestWpm: "Best WPM",
    avgAccuracy: "Avg accuracy",
    lessonsDone: "Lessons",
    noData: "-",
    weakKeysTitle: "Your training keys",
    weakKeysEmpty: "No weak spots detected - strong.",
    placementMissing: "Take the placement to see your personal training plan and key profile.",
    placementCta: "Take the placement",
    continueCta: "Keep training",
  },
  fr: {
    title: "Ta progression",
    bestWpm: "Meilleur MPM",
    avgAccuracy: "Précision moy.",
    lessonsDone: "Leçons",
    noData: "-",
    weakKeysTitle: "Tes touches à travailler",
    weakKeysEmpty: "Aucun point faible détecté - solide.",
    placementMissing: "Fais l'évaluation pour voir ton plan d'entraînement personnel et ton profil de touches.",
    placementCta: "Faire l'évaluation",
    continueCta: "Continuer l'entraînement",
  },
};

export function Dashboard({ locale }: { locale: Locale }) {
  const l = i18n[locale] ?? i18n.en;
  const totalLessons = getLessons(locale).length;

  const [profile, setProfile] = useState<SkillProfile | null>(null);
  const [records, setRecords] = useState<Record<number, LessonRecord>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProfile(progressStore.getProfile(locale));
    setRecords(progressStore.getLessonRecords(locale));
    setLoaded(true);
  }, [locale]);

  const recordList = Object.values(records);
  const bestWpm = recordList.length > 0 ? Math.max(...recordList.map((r) => r.wpm)) : null;
  const avgAccuracy =
    recordList.length > 0
      ? Math.round(recordList.reduce((s, r) => s + r.accuracy, 0) / recordList.length)
      : null;
  // Progress = lessons actually completed plus those the placement cleared
  // you past. Union so a warmed-up suggested-skip lesson isn't double-counted.
  const done = new Set([
    ...Object.keys(records).map(Number),
    ...(profile?.placement?.suggestedSkipLessonIds ?? []),
  ]).size;
  const weak = profile ? groupKeysByLevel(profile).weak : [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-dark-text dark:text-white">{l.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
          <p className="text-sm text-zinc-500">{l.bestWpm}</p>
          <p className="mt-2 text-3xl font-bold text-indigo">{bestWpm ?? l.noData}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
          <p className="text-sm text-zinc-500">{l.avgAccuracy}</p>
          <p className="mt-2 text-3xl font-bold text-peach">{avgAccuracy !== null ? `${avgAccuracy}%` : l.noData}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
          <p className="text-sm text-zinc-500">{l.lessonsDone}</p>
          <p className="mt-2 text-3xl font-bold text-dark-text dark:text-electric-yellow">
            {done}/{totalLessons}
          </p>
        </div>
      </div>

      {loaded && !profile?.placement && (
        <div className="rounded-xl border border-indigo/20 bg-indigo/5 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-300 flex-1">{l.placementMissing}</p>
          <Link
            href={`/${locale}/placement`}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0"
          >
            {l.placementCta} <span className="text-electric-yellow group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
          </Link>
        </div>
      )}

      {loaded && profile?.placement && (
        <div className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 space-y-3">
          <p className="font-semibold text-dark-text dark:text-white">{l.weakKeysTitle}</p>
          {weak.length === 0 ? (
            <p className="text-sm text-zinc-500">{l.weakKeysEmpty}</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {weak.map((k) => (
                <kbd
                  key={k}
                  className="inline-flex items-center justify-center min-w-7 h-7 px-1.5 rounded-md border border-peach/30 bg-peach/10 text-peach text-sm font-mono font-semibold"
                >
                  {displayKey(k)}
                </kbd>
              ))}
            </div>
          )}
          <Link
            href={`/${locale}/lessons`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo hover:text-indigo/80 transition-colors"
          >
            {l.continueCta} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
