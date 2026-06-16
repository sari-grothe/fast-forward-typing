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

const labels: Record<Locale, { title: string; subtitle: string; newTest: string }> = {
  de: {
    title: "Tipptest",
    subtitle: "60 Sekunden. Tipp so schnell und genau wie möglich.",
    newTest: "Neuer Text",
  },
  en: {
    title: "Speed Test",
    subtitle: "60 seconds. Type as fast and accurately as you can.",
    newTest: "New text",
  },
  fr: {
    title: "Test de frappe",
    subtitle: "60 secondes. Tape aussi vite et précisément que possible.",
    newTest: "Nouveau texte",
  },
};

export function SpeedTest({ locale }: Props) {
  const [text, setText] = useState(() => getRandomText(locale));
  const [result, setResult] = useState<TypingState | null>(null);

  const handleComplete = useCallback((state: TypingState) => {
    setResult(state);
  }, []);

  function handleNewText() {
    setText(getRandomText(locale));
    setResult(null);
  }

  const l = labels[locale];
  const wpm = result ? calculateWPM(result) : 0;
  const accuracy = result ? calculateAccuracy(result) : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{l.title}</h1>
        <p className="mt-2 text-zinc-400">{l.subtitle}</p>
      </div>

      <TypingArea
        text={text}
        mode="countdown"
        countdownSeconds={60}
        onComplete={handleComplete}
        onReset={() => setResult(null)}
      />

      {result && (
        <div className="rounded-xl border border-indigo/20 bg-indigo/5 p-6 space-y-3">
          <p className="text-lg font-semibold text-white">
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
        className="rounded-lg border border-dark-border bg-dark-surface px-4 py-2 text-sm text-zinc-400 hover:text-white hover:border-indigo/30 transition-colors"
      >
        {l.newTest}
      </button>
    </div>
  );
}
