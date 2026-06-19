"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Keyboard } from "./Keyboard";
import { fingerForKey, fingerColors, type Finger } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

type KeyStep = {
  key: string;
  finger: Finger;
};

const HOME_KEY_STEPS: KeyStep[] = [
  { key: "j", finger: "right-index" },
  { key: "f", finger: "left-index" },
  { key: "k", finger: "right-middle" },
  { key: "d", finger: "left-middle" },
  { key: "l", finger: "right-ring" },
  { key: "s", finger: "left-ring" },
  { key: ";", finger: "right-pinky" },
  { key: "a", finger: "left-pinky" },
];

const fingerNames: Record<Locale, Record<Finger, string>> = {
  de: {
    "left-pinky": "linken kleinen Finger",
    "left-ring": "linken Ringfinger",
    "left-middle": "linken Mittelfinger",
    "left-index": "linken Zeigefinger",
    "right-index": "rechten Zeigefinger",
    "right-middle": "rechten Mittelfinger",
    "right-ring": "rechten Ringfinger",
    "right-pinky": "rechten kleinen Finger",
    thumb: "Daumen",
  },
  en: {
    "left-pinky": "left pinky",
    "left-ring": "left ring finger",
    "left-middle": "left middle finger",
    "left-index": "left index finger",
    "right-index": "right index finger",
    "right-middle": "right middle finger",
    "right-ring": "right ring finger",
    "right-pinky": "right pinky",
    thumb: "thumb",
  },
  fr: {
    "left-pinky": "auriculaire gauche",
    "left-ring": "annulaire gauche",
    "left-middle": "majeur gauche",
    "left-index": "index gauche",
    "right-index": "index droit",
    "right-middle": "majeur droit",
    "right-ring": "annulaire droit",
    "right-pinky": "auriculaire droit",
    thumb: "pouce",
  },
};

const i18n: Record<Locale, {
  useYour: string;
  toType: string;
  typeThe: string;
  key: string;
  correct: string;
  allDone: string;
  allDoneDesc: string;
  startDrills: string;
}> = {
  de: {
    useYour: "Benutze deinen",
    toType: "",
    typeThe: "Tippe die Taste",
    key: "",
    correct: "Richtig",
    allDone: "Alle Finger platziert",
    allDoneDesc: "Deine Finger kennen jetzt ihre Position. Weiter mit den Uebungen.",
    startDrills: "Weiter",
  },
  en: {
    useYour: "Use your",
    toType: "to type",
    typeThe: "Type the",
    key: "key",
    correct: "Correct",
    allDone: "All fingers placed",
    allDoneDesc: "Your fingers know their home position now. Let's practice.",
    startDrills: "Continue",
  },
  fr: {
    useYour: "Utilise ton",
    toType: "pour taper",
    typeThe: "Tape la touche",
    key: "",
    correct: "Correct",
    allDone: "Tous les doigts places",
    allDoneDesc: "Tes doigts connaissent leur position. Passons aux exercices.",
    startDrills: "Continuer",
  },
};

type Props = {
  locale: Locale;
  onComplete: () => void;
};

export function KeyIntro({ locale, onComplete }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [pressedKey, setPressedKey] = useState<string | undefined>();
  const [completedKeys, setCompletedKeys] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const l = i18n[locale];
  const names = fingerNames[locale];

  const isDone = stepIndex >= HOME_KEY_STEPS.length;
  const currentStep = isDone ? null : HOME_KEY_STEPS[stepIndex];

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isDone || !currentStep) return;
      if (e.key === "Tab" || e.key === "Escape") return;
      e.preventDefault();

      const typed = e.key.toLowerCase();
      setPressedKey(typed);
      setTimeout(() => setPressedKey(undefined), 150);

      if (typed === currentStep.key) {
        setShowCorrect(true);
        setCompletedKeys((prev) => [...prev, currentStep.key]);
        setTimeout(() => {
          setShowCorrect(false);
          setStepIndex((prev) => prev + 1);
        }, 600);
      }
    },
    [isDone, currentStep]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const fingerColor = currentStep ? fingerColors[currentStep.finger] : "#3f0ff2";

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="space-y-6 focus:outline-none"
    >
      {/* Instruction card */}
      <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8 sm:p-10 text-center">
        {isDone ? (
          <div className="space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-indigo/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-dark-text dark:text-white">{l.allDone}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{l.allDoneDesc}</p>
            <button
              onClick={onComplete}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo px-8 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors shadow-lg shadow-indigo/20"
            >
              {l.startDrills} <span className="text-electric-yellow">&gt;&gt;</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Finger instruction */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {l.useYour}{" "}
              <span className="font-semibold" style={{ color: fingerColor }}>
                {names[currentStep!.finger]}
              </span>
              {l.toType ? ` ${l.toType}` : ""}:
            </p>

            {/* Big key prompt */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl sm:text-3xl font-bold text-dark-text dark:text-white">
                {l.typeThe}
              </span>
              <kbd
                className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 text-2xl sm:text-3xl font-mono font-bold shadow-lg transition-all duration-200"
                style={{
                  borderColor: fingerColor,
                  color: fingerColor,
                  backgroundColor: fingerColor + "10",
                  boxShadow: `0 0 20px ${fingerColor}30`,
                }}
              >
                {currentStep!.key === ";" ? ";" : currentStep!.key.toUpperCase()}
              </kbd>
              {l.key && (
                <span className="text-2xl sm:text-3xl font-bold text-dark-text dark:text-white">
                  {l.key}
                </span>
              )}
            </div>

            {/* Correct feedback */}
            {showCorrect && (
              <div className="flex items-center justify-center gap-1.5 text-indigo font-semibold animate-fade-in">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {l.correct}
              </div>
            )}

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-1.5 pt-2">
              {HOME_KEY_STEPS.map((step, i) => (
                <div
                  key={step.key}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i < stepIndex
                      ? "scale-100"
                      : i === stepIndex
                        ? "scale-125 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-dark-surface"
                        : "bg-zinc-200 dark:bg-dark-border"
                  }`}
                  style={
                    i <= stepIndex
                      ? { backgroundColor: fingerColors[step.finger], ringColor: i === stepIndex ? fingerColors[step.finger] : undefined }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Keyboard */}
      <Keyboard
        activeKey={currentStep?.key}
        activeKeys={isDone ? ["a", "s", "d", "f", "j", "k", "l", ";"] : [currentStep?.key ?? "", ...completedKeys]}
        pressedKey={pressedKey}
        showFingers={true}
        locale={locale}
      />
    </div>
  );
}
