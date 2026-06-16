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
    if (wpm >= 80) return "Journalisten-Tempo auf einer Pressekonferenz.";
    if (wpm >= 60) return "Schneller als ein professioneller Telegrafist im Jahr 1920.";
    if (wpm >= 40) return "Das ist der weltweite Durchschnitt. Solide Basis.";
    return "Jeder fängt irgendwo an. Mit Übung wird das schnell mehr.";
  },
  en: (wpm) => {
    if (wpm >= 80) return "That's journalist speed at a live press conference.";
    if (wpm >= 60) return "Faster than a professional telegraph operator in 1920.";
    if (wpm >= 40) return "That's the global average. Solid foundation.";
    return "Everyone starts somewhere. With practice, this goes up fast.";
  },
  fr: (wpm) => {
    if (wpm >= 80) return "C'est la vitesse d'un journaliste en conférence de presse.";
    if (wpm >= 60) return "Plus rapide qu'un télégraphiste professionnel en 1920.";
    if (wpm >= 40) return "C'est la moyenne mondiale. Une base solide.";
    return "Tout le monde commence quelque part. Avec de la pratique, ça monte vite.";
  },
};

const durations = [60, 120, 300] as const;

const i18n: Record<Locale, {
  title: string;
  subtitle: (mins: number) => string;
  newTest: string;
  minLabel: string;
  resultsTitle: string;
  speed: string;
  accuracy: string;
  wpmUnit: string;
  weakKeys: string;
  errors: string;
  certificate: string;
  improveCta: string;
  tryAgain: string;
}> = {
  de: {
    title: "Tipptest",
    subtitle: (mins) => `${mins} ${mins === 1 ? "Minute" : "Minuten"}. Tipp so schnell und genau wie möglich.`,
    newTest: "Neuer Text",
    minLabel: "Min",
    resultsTitle: "Ergebnis",
    speed: "Tempo",
    accuracy: "Genauigkeit",
    wpmUnit: "WPM",
    weakKeys: "Schwache Tasten",
    errors: "Fehler",
    certificate: "Zertifikat holen - 5 €",
    improveCta: "Zum Tippkurs",
    tryAgain: "Nochmal tippen",
  },
  en: {
    title: "Typing Test",
    subtitle: (mins) => `${mins} ${mins === 1 ? "minute" : "minutes"}. Type as fast and accurately as you can.`,
    newTest: "New text",
    minLabel: "min",
    resultsTitle: "Your result",
    speed: "Speed",
    accuracy: "Accuracy",
    wpmUnit: "WPM",
    weakKeys: "Weak keys",
    errors: "Errors",
    certificate: "Get a certificate - 5 €",
    improveCta: "Start typing course",
    tryAgain: "Try again",
  },
  fr: {
    title: "Test de frappe",
    subtitle: (mins) => `${mins} ${mins === 1 ? "minute" : "minutes"}. Tape aussi vite et précisément que possible.`,
    newTest: "Nouveau texte",
    minLabel: "min",
    resultsTitle: "Ton résultat",
    speed: "Vitesse",
    accuracy: "Précision",
    wpmUnit: "MPM",
    weakKeys: "Touches faibles",
    errors: "Erreurs",
    certificate: "Obtenir un certificat - 5 €",
    improveCta: "Commencer le cours",
    tryAgain: "Réessayer",
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

  const l = i18n[locale];
  const mins = seconds / 60;
  const wpm = result ? calculateWPM(result) : 0;
  const accuracy = result ? calculateAccuracy(result) : 0;

  if (result) {
    const weakKeys = Object.entries(result.errorsByKey)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    return (
      <div className="space-y-8">
        <div className="text-center space-y-3 pt-4">
          <div className="text-5xl">&#9889;</div>
          <h2 className="text-3xl font-bold">{l.resultsTitle}</h2>
          <p className="text-zinc-400 max-w-md mx-auto">{funFacts[locale](wpm)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="rounded-xl bg-indigo p-6 text-center text-white">
            <p className="text-xs font-medium uppercase tracking-wider opacity-80">{l.speed}</p>
            <p className="text-4xl font-bold mt-1">{wpm}</p>
            <p className="text-sm opacity-70 mt-0.5">{l.wpmUnit}</p>
          </div>
          <div className="rounded-xl bg-peach p-6 text-center text-white">
            <p className="text-xs font-medium uppercase tracking-wider opacity-80">{l.accuracy}</p>
            <p className="text-4xl font-bold mt-1">{accuracy}%</p>
            <p className="text-sm opacity-70 mt-0.5">{result.errors.length} {l.errors.toLowerCase()}</p>
          </div>
        </div>

        {weakKeys.length > 0 && (
          <div className="max-w-md mx-auto">
            <p className="text-sm font-medium text-zinc-500 mb-2">{l.weakKeys}</p>
            <div className="flex gap-2 flex-wrap">
              {weakKeys.map(([key, count]) => (
                <span
                  key={key}
                  className="rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-3 py-1.5 text-sm font-mono"
                >
                  {key === " " ? "Space" : key} <span className="text-peach ml-1">{count}x</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
          <a
            href={`/${locale}/lessons/1`}
            className="w-full sm:w-auto text-center rounded-lg bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
          >
            {l.improveCta}
          </a>
          <a
            href={`/${locale}/certificate`}
            className="w-full sm:w-auto text-center rounded-lg bg-electric-yellow px-6 py-3 text-sm font-semibold text-dark-text hover:bg-electric-yellow/80 transition-colors"
          >
            {l.certificate}
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
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
            {l.tryAgain}
          </button>
        </div>
      </div>
    );
  }

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
