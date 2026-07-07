"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HomeRowHands } from "./HomeRowHands";
import { KeyCharacter } from "@/components/KeyCharacter";
import { fingerColors, type Finger } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

type KeyStep = {
  key: string;
  finger: Finger;
};

// Home-row keys differ per layout: QWERTZ ends the right pinky on ö,
// AZERTY has q/m on the pinkies.
const homeSteps: Record<Locale, { right: KeyStep[]; left: KeyStep[] }> = {
  en: {
    right: [
      { key: "j", finger: "right-index" },
      { key: "k", finger: "right-middle" },
      { key: "l", finger: "right-ring" },
      { key: ";", finger: "right-pinky" },
    ],
    left: [
      { key: "f", finger: "left-index" },
      { key: "d", finger: "left-middle" },
      { key: "s", finger: "left-ring" },
      { key: "a", finger: "left-pinky" },
    ],
  },
  de: {
    right: [
      { key: "j", finger: "right-index" },
      { key: "k", finger: "right-middle" },
      { key: "l", finger: "right-ring" },
      { key: "ö", finger: "right-pinky" },
    ],
    left: [
      { key: "f", finger: "left-index" },
      { key: "d", finger: "left-middle" },
      { key: "s", finger: "left-ring" },
      { key: "a", finger: "left-pinky" },
    ],
  },
  fr: {
    right: [
      { key: "j", finger: "right-index" },
      { key: "k", finger: "right-middle" },
      { key: "l", finger: "right-ring" },
      { key: "m", finger: "right-pinky" },
    ],
    left: [
      { key: "f", finger: "left-index" },
      { key: "d", finger: "left-middle" },
      { key: "s", finger: "left-ring" },
      { key: "q", finger: "left-pinky" },
    ],
  },
};

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

const fingerLabelShort: Record<Locale, Record<Finger, string>> = {
  de: {
    "left-pinky": "Kl. Finger",
    "left-ring": "Ringfinger",
    "left-middle": "Mittelfinger",
    "left-index": "Zeigefinger",
    "right-index": "Zeigefinger",
    "right-middle": "Mittelfinger",
    "right-ring": "Ringfinger",
    "right-pinky": "Kl. Finger",
    thumb: "Daumen",
  },
  en: {
    "left-pinky": "Pinky",
    "left-ring": "Ring",
    "left-middle": "Middle",
    "left-index": "Index",
    "right-index": "Index",
    "right-middle": "Middle",
    "right-ring": "Ring",
    "right-pinky": "Pinky",
    thumb: "Thumb",
  },
  fr: {
    "left-pinky": "Auriculaire",
    "left-ring": "Annulaire",
    "left-middle": "Majeur",
    "left-index": "Index",
    "right-index": "Index",
    "right-middle": "Majeur",
    "right-ring": "Annulaire",
    "right-pinky": "Auriculaire",
    thumb: "Pouce",
  },
};

type Phase = "explain" | "typing" | "confirm" | "done";

const i18n: Record<Locale, {
  explainTitle: string;
  explainP1: string;
  explainP2: string;
  explainP3: string;
  explainColorIntro: string;
  leftHand: string;
  rightHand: string;
  explainStart: string;
  useYour: string;
  typeThe: string;
  rememberKey: string;
  rememberBecause: string;
  pressEnter: string;
  nowLeftHand: string;
  nowLeftHandDesc: string;
  allDone: string;
  allDoneDesc: string;
  startDrills: string;
}> = {
  de: {
    explainTitle: "Die Grundposition",
    explainP1: "Auf den Tasten F und J befinden sich kleine Noppen. Lege deine Zeigefinger darauf - links auf F, rechts auf J.",
    explainP2: "Von dieser Position aus deckt jeder Finger eine eigene Zone der Tastatur ab. Die Farben zeigen dir, welcher Finger welche Tasten bedient.",
    explainP3: "Wir platzieren jetzt jeden Finger einzeln. Zuerst die rechte Hand, dann die linke.",
    explainColorIntro: "Jeder Finger hat seine Zone",
    leftHand: "Linke Hand",
    rightHand: "Rechte Hand",
    explainStart: "Drücke ENTER um zu starten",
    useYour: "Benutze deinen",
    typeThe: "Tippe die Taste",
    rememberKey: "Merk dir, wo die Taste",
    rememberBecause: "liegt - gleich üben wir damit.",
    pressEnter: "Drücke ENTER",
    nowLeftHand: "Jetzt die linke Hand",
    nowLeftHandDesc: "Gleiche Übung, andere Seite. Dein linker Zeigefinger liegt auf F.",
    allDone: "Alle Finger platziert",
    allDoneDesc: "Das ist deine Grundposition. Von hier aus erreichst du jede Taste. Jetzt üben wir.",
    startDrills: "Weiter zu den Übungen",
  },
  en: {
    explainTitle: "The Home Position",
    explainP1: "The F and J keys have small bumps on them. Place your index fingers there - left on F, right on J.",
    explainP2: "From this position, each finger covers its own zone of the keyboard. The colors show you which finger handles which keys.",
    explainP3: "We'll place each finger one by one. Right hand first, then left.",
    explainColorIntro: "Each finger has its zone",
    leftHand: "Left hand",
    rightHand: "Right hand",
    explainStart: "Press ENTER to start",
    useYour: "Use your",
    typeThe: "Type the",
    rememberKey: "Remember where the",
    rememberBecause: "key is - we'll practice it now.",
    pressEnter: "Press ENTER",
    nowLeftHand: "Now the left hand",
    nowLeftHandDesc: "Same exercise, other side. Your left index finger sits on F.",
    allDone: "All fingers placed",
    allDoneDesc: "This is your home position. Every key is reachable from here. Let's practice.",
    startDrills: "Continue to drills",
  },
  fr: {
    explainTitle: "La position de base",
    explainP1: "Les touches F et J ont de petites bosses. Pose tes index dessus - gauche sur F, droit sur J.",
    explainP2: "Depuis cette position, chaque doigt couvre sa propre zone du clavier. Les couleurs montrent quel doigt gère quelles touches.",
    explainP3: "On va placer chaque doigt un par un. D'abord la main droite, puis la gauche.",
    explainColorIntro: "Chaque doigt a sa zone",
    leftHand: "Main gauche",
    rightHand: "Main droite",
    explainStart: "Appuie sur ENTRÉE pour commencer",
    useYour: "Utilise ton",
    typeThe: "Tape la touche",
    rememberKey: "Retiens ou se trouve la touche",
    rememberBecause: "- on va s'entrainer maintenant.",
    pressEnter: "Appuie sur ENTRÉE",
    nowLeftHand: "Maintenant la main gauche",
    nowLeftHandDesc: "Même exercice, autre côté. Ton index gauche se pose sur F.",
    allDone: "Tous les doigts placés",
    allDoneDesc: "C'est ta position de base. Chaque touche est accessible d'ici. Passons à la pratique.",
    startDrills: "Passer aux exercices",
  },
};

type Props = {
  locale: Locale;
  onComplete: () => void;
};

export function KeyIntro({ locale, onComplete }: Props) {
  const [phase, setPhase] = useState<Phase>("explain");
  const [stepIndex, setStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const l = i18n[locale];
  const names = fingerNames[locale];

  const steps = homeSteps[locale] ?? homeSteps.en;
  const RIGHT_HAND_STEPS = steps.right;
  const ALL_STEPS = [...steps.right, ...steps.left];

  const currentStep = stepIndex < ALL_STEPS.length ? ALL_STEPS[stepIndex] : null;
  const isRightHandDone = stepIndex === RIGHT_HAND_STEPS.length;
  const showLeftHandTransition = phase === "confirm" && isRightHandDone && stepIndex > 0;

  useEffect(() => {
    containerRef.current?.focus();
  }, [phase]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.key === "Escape") return;
      e.preventDefault();

      if (phase === "explain") {
        if (e.key === "Enter") {
          setPhase("typing");
        }
        return;
      }

      if (phase === "confirm") {
        if (e.key === "Enter") {
          if (stepIndex >= ALL_STEPS.length) {
            setPhase("done");
          } else {
            setPhase("typing");
          }
        }
        return;
      }

      if (phase === "typing" && currentStep) {
        const typed = e.key.toLowerCase();
        if (typed === currentStep.key) {
          setStepIndex((prev) => prev + 1);
          setPhase("confirm");
        }
      }
    },
    [phase, currentStep, stepIndex]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const fingerColor = currentStep ? fingerColors[currentStep.finger] : "#3f0ff2";
  const justCompletedStep = stepIndex > 0 ? ALL_STEPS[stepIndex - 1] : null;
  const justCompletedColor = justCompletedStep ? fingerColors[justCompletedStep.finger] : "#3f0ff2";

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="space-y-6 focus:outline-none"
    >
      {/* === PHASE: Explanation === */}
      {phase === "explain" && (
        <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-5 sm:p-6 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-dark-text dark:text-white text-center">
            {l.explainTitle}
          </h2>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-center max-w-lg mx-auto">
            {l.explainP1}
          </p>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed text-center max-w-lg mx-auto">
            {l.explainP2} {l.explainP3}
          </p>

          {/* Press ENTER */}
          <div className="flex items-center justify-center gap-2 pt-1 text-sm text-zinc-400 dark:text-zinc-500">
            <kbd className="px-3 py-1 rounded-lg border border-zinc-200 dark:border-dark-border bg-zinc-50 dark:bg-dark font-mono text-xs font-semibold text-dark-text dark:text-white">
              ENTER
            </kbd>
            <span>{l.explainStart.replace(/.*ENTER\s*/, "").replace(/.*ENTRÉE\s*/, "")}</span>
          </div>
        </div>
      )}

      {/* === PHASE: Typing a key === */}
      {phase === "typing" && currentStep && (
        <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8 sm:p-10 text-center space-y-5">
          {/* Left hand transition message */}
          {isRightHandDone && stepIndex === RIGHT_HAND_STEPS.length && (
            <div className="mb-4 pb-4 border-b border-zinc-100 dark:border-dark-border">
              <p className="font-semibold text-dark-text dark:text-white">{l.nowLeftHand}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{l.nowLeftHandDesc}</p>
            </div>
          )}

          {/* Finger instruction */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {l.useYour}{" "}
            <span className="font-semibold" style={{ color: fingerColor }}>
              {names[currentStep.finger]}
            </span>:
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
              {currentStep.key === ";" ? ";" : currentStep.key.toUpperCase()}
            </kbd>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {ALL_STEPS.map((step, i) => (
              <div
                key={step.key}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i < stepIndex
                    ? ""
                    : i === stepIndex
                      ? "scale-125 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-dark-surface"
                      : "bg-zinc-200 dark:bg-dark-border"
                }`}
                style={
                  i <= stepIndex
                    ? { backgroundColor: fingerColors[step.finger] }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* === PHASE: Confirm (remember + press ENTER) === */}
      {phase === "confirm" && justCompletedStep && (
        <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8 sm:p-10 text-center space-y-5">
          {/* Checkmark */}
          <div
            className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
            style={{ backgroundColor: justCompletedColor + "15" }}
          >
            <svg className="w-6 h-6" style={{ color: justCompletedColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          {/* Remember message */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {l.rememberKey}{" "}
            <kbd
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 text-sm font-mono font-bold mx-1"
              style={{
                borderColor: justCompletedColor,
                color: justCompletedColor,
                backgroundColor: justCompletedColor + "10",
              }}
            >
              {justCompletedStep.key === ";" ? ";" : justCompletedStep.key.toUpperCase()}
            </kbd>{" "}
            {l.rememberBecause}
          </p>

          <div className="border-t border-zinc-100 dark:border-dark-border pt-4">
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
              <span>{l.pressEnter}</span>
              <kbd className="px-3 py-1 rounded-lg border border-zinc-200 dark:border-dark-border bg-zinc-50 dark:bg-dark font-mono text-xs font-semibold text-dark-text dark:text-white">
                ENTER
              </kbd>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5">
            {ALL_STEPS.map((step, i) => (
              <div
                key={step.key}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i < stepIndex ? "" : "bg-zinc-200 dark:bg-dark-border"
                }`}
                style={i < stepIndex ? { backgroundColor: fingerColors[step.finger] } : undefined}
              />
            ))}
          </div>
        </div>
      )}

      {/* === PHASE: Done === */}
      {phase === "done" && (
        <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8 sm:p-10 text-center space-y-4">
          <div className="flex justify-center">
            <KeyCharacter pose="sitting-waving" size={80} />
          </div>
          <h2 className="text-xl font-bold text-dark-text dark:text-white">{l.allDone}</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">{l.allDoneDesc}</p>
          <button
            onClick={onComplete}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo px-8 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors shadow-lg shadow-indigo/20"
          >
            {l.startDrills} <span className="text-electric-yellow">&gt;&gt;</span>
          </button>
        </div>
      )}

      {/* Hands on the home row - always visible. The finger that should
          press the current key is highlighted directly on the hand, so
          there is no color legend to cross-reference. */}
      <HomeRowHands
        locale={locale}
        activeKey={
          phase === "typing"
            ? currentStep?.key
            : phase === "confirm"
              ? justCompletedStep?.key
              : undefined
        }
      />
    </div>
  );
}
