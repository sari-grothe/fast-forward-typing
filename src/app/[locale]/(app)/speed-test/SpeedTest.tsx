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
    return "Fun Fact: Die erste Schreibmaschine hatte die Buchstaben alphabetisch sortiert. Du tippst bereits auf dem besseren Layout.";
  },
  en: (wpm) => {
    if (wpm >= 80) return "That's journalist speed at a live press conference.";
    if (wpm >= 60) return "Faster than a professional telegraph operator in 1920.";
    if (wpm >= 40) return "That's the global average. Solid foundation.";
    return "Fun fact: the first typewriter had keys in alphabetical order. You're already using the better layout.";
  },
  fr: (wpm) => {
    if (wpm >= 80) return "C'est la vitesse d'un journaliste en conférence de presse.";
    if (wpm >= 60) return "Plus rapide qu'un télégraphiste professionnel en 1920.";
    if (wpm >= 40) return "C'est la moyenne mondiale. Une base solide.";
    return "Fun fact : la première machine à écrire avait les touches dans l'ordre alphabétique. Tu utilises déjà le meilleur clavier.";
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
  trainingTitle: string;
  trainingDesc: string;
  trainingCta: string;
  certTitle: string;
  certDesc: string;
  certCta: string;
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
    trainingTitle: "Tipptraining starten",
    trainingDesc: "Eine Übung am Tag reicht, um schneller und sicherer zu tippen.",
    trainingCta: "Starten",
    certTitle: "Zertifikat holen",
    certDesc: "Mach deine Tippfähigkeiten offiziell. Für CV, LinkedIn oder Arbeitgeber.",
    certCta: "Zertifikat - 5 €",
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
    trainingTitle: "Start typing training",
    trainingDesc: "One exercise a day and you're on your way to faster, more accurate typing.",
    trainingCta: "Start",
    certTitle: "Get your certificate",
    certDesc: "Make your typing skills official. For your CV, LinkedIn, or employers.",
    certCta: "Certificate - 5 €",
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
    trainingTitle: "Commencer l'entraînement",
    trainingDesc: "Un exercice par jour suffit pour taper plus vite et plus précisément.",
    trainingCta: "Commencer",
    certTitle: "Obtenir ton certificat",
    certDesc: "Rends tes compétences de frappe officielles. Pour ton CV, LinkedIn ou employeurs.",
    certCta: "Certificat - 5 €",
    tryAgain: "Réessayer",
  },
};

export function SpeedTest({ locale }: Props) {
  const [seconds, setSeconds] = useState<(typeof durations)[number]>(60);
  const [text, setText] = useState(() => getRandomText(locale, 60));
  const [result, setResult] = useState<TypingState | null>(null);

  const handleComplete = useCallback((state: TypingState) => {
    setResult(state);
  }, []);

  function handleNewText() {
    setText(getRandomText(locale, seconds));
    setResult(null);
  }

  function handleDuration(s: (typeof durations)[number]) {
    setSeconds(s);
    setText(getRandomText(locale, s));
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href={`/${locale}/lessons/1`}
            className="rounded-xl bg-indigo p-6 text-center text-white hover:bg-indigo/90 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
            </div>
            <p className="font-bold text-lg">{l.trainingTitle}</p>
            <p className="text-sm opacity-80 mt-1.5">{l.trainingDesc}</p>
            <span className="inline-block mt-4 rounded-lg bg-white/20 px-5 py-2 text-sm font-semibold group-hover:bg-white/30 transition-colors">
              {l.trainingCta}
            </span>
          </a>
          <a
            href={`/${locale}/certificate`}
            className="rounded-xl bg-electric-yellow p-6 text-center text-dark-text hover:bg-electric-yellow/80 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-dark-text/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <p className="font-bold text-lg">{l.certTitle}</p>
            <p className="text-sm opacity-70 mt-1.5">{l.certDesc}</p>
            <span className="inline-block mt-4 rounded-lg bg-dark-text/10 px-5 py-2 text-sm font-semibold group-hover:bg-dark-text/20 transition-colors">
              {l.certCta}
            </span>
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
        hideStats
        locale={locale}
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
