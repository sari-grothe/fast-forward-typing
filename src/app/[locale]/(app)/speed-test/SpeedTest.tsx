"use client";

import { useState, useCallback } from "react";
import { TypingArea } from "@/components/typing/TypingArea";
import { getRandomText } from "@/lib/sample-texts";
import type { TypingState } from "@/lib/typing-engine";
import { calculateWPM, calculateAccuracy } from "@/lib/typing-engine";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
};

const funFacts: Record<Locale, (wpm: number) => string> = {
  de: (wpm) => {
    if (wpm >= 80) return `${wpm} WPM. Das ist Journalisten-Tempo auf einer Pressekonferenz.`;
    if (wpm >= 60) return `${wpm} WPM. Schneller als ein professioneller Telegrafist im Jahr 1920.`;
    if (wpm >= 40) return `${wpm} WPM. Das ist der weltweite Durchschnitt. Solide Basis.`;
    return `${wpm} WPM. Jeder fängt irgendwo an. Mit Übung wird das schnell mehr.`;
  },
  en: (wpm) => {
    if (wpm >= 80) return `${wpm} WPM. That's journalist speed at a live press conference.`;
    if (wpm >= 60) return `${wpm} WPM. Faster than a professional telegraph operator in 1920.`;
    if (wpm >= 40) return `${wpm} WPM. That's the global average. Solid foundation.`;
    return `${wpm} WPM. Everyone starts somewhere. With practice, this goes up fast.`;
  },
  fr: (wpm) => {
    if (wpm >= 80) return `${wpm} WPM. C'est la vitesse d'un journaliste en conférence de presse.`;
    if (wpm >= 60) return `${wpm} WPM. Plus rapide qu'un télégraphiste professionnel en 1920.`;
    if (wpm >= 40) return `${wpm} WPM. C'est la moyenne mondiale. Une base solide.`;
    return `${wpm} WPM. Tout le monde commence quelque part. Avec de la pratique, ça monte vite.`;
  },
};

const durations = [60, 120, 300] as const;

const labels: Record<Locale, { title: string; subtitle: (mins: number) => string; newTest: string; minLabel: string }> = {
  de: {
    title: "Tipptest",
    subtitle: (mins) => `${mins} ${mins === 1 ? "Minute" : "Minuten"}. Tipp so schnell und genau wie möglich.`,
    newTest: "Neuer Text",
    minLabel: "Min",
  },
  en: {
    title: "Typing Test",
    subtitle: (mins) => `${mins} ${mins === 1 ? "minute" : "minutes"}. Type as fast and accurately as you can.`,
    newTest: "New text",
    minLabel: "min",
  },
  fr: {
    title: "Test de frappe",
    subtitle: (mins) => `${mins} ${mins === 1 ? "minute" : "minutes"}. Tape aussi vite et précisément que possible.`,
    newTest: "Nouveau texte",
    minLabel: "min",
  },
};

export function SpeedTest({ locale }: Props) {
  const [text, setText] = useState(() => getRandomText(locale));
  const [result, setResult] = useState<TypingState | null>(null);
  const [seconds, setSeconds] = useState<(typeof durations)[number]>(60);

  const handleComplete = useCallback((state: TypingState) => {
    setResult(state);
  }, []);

  function handleNewText() {
    setText(getRandomText(locale));
    setResult(null);
  }

  function handleDuration(s: (typeof durations)[number]) {
    setSeconds(s);
    setText(getRandomText(locale));
    setResult(null);
  }

  const l = labels[locale];
  const mins = seconds / 60;
  const wpm = result ? calculateWPM(result) : 0;
  const accuracy = result ? calculateAccuracy(result) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold">{l.title}</h1>
          <p className="mt-2 text-zinc-400">{l.subtitle(mins)}</p>
        </div>
        <div className="flex items-center rounded-lg border border-zinc-200 dark:border-dark-border bg-white/5 dark:bg-dark-surface p-0.5 text-sm">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => handleDuration(d)}
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                d === seconds
                  ? "bg-indigo text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              {d / 60} {l.minLabel}
            </button>
          ))}
        </div>
      </div>

      <TypingArea
        text={text}
        mode="countdown"
        countdownSeconds={seconds}
        onComplete={handleComplete}
        onReset={() => setResult(null)}
      />

      {result && (
        <div className="rounded-xl border border-indigo/20 bg-indigo/5 p-6 space-y-3">
          <p className="text-lg font-semibold text-dark-text dark:text-white">
            {funFacts[locale](wpm)}
          </p>
          <p className="text-sm text-zinc-400">
            {accuracy}% accuracy · {result.errors.length} errors
          </p>
          {Object.keys(result.errorsByKey).length > 0 && (
            <p className="text-sm text-peach">
              Weak keys: {Object.entries(result.errorsByKey)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([key, count]) => `${key === " " ? "Space" : key} (${count}x)`)
                .join(", ")}
            </p>
          )}
        </div>
      )}

      <button
        onClick={handleNewText}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-4 py-2 text-sm text-zinc-500 hover:text-indigo hover:border-indigo/30 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
        {l.newTest}
      </button>
    </div>
  );
}
