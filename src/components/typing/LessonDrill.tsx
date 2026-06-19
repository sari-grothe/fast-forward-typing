"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  createTypingState,
  processKeystroke,
  getCharStatuses,
  calculateWPM,
  calculateAccuracy,
  type TypingState,
  type CharStatus,
} from "@/lib/typing-engine";
import { Keyboard } from "./Keyboard";
import type { Drill } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

type DrillResult = {
  wpm: number;
  accuracy: number;
  errors: number;
};

type Props = {
  drill: Drill;
  drillIndex: number;
  totalDrills: number;
  allKeys: string[];
  locale: Locale;
  completionThreshold: number;
  onComplete: (result: DrillResult) => void;
};

const charStatusColors: Record<CharStatus, string> = {
  correct: "text-indigo",
  incorrect: "text-peach bg-peach/20",
  current: "text-dark-text dark:text-white bg-indigo/20 dark:bg-indigo/30 border-b-2 border-indigo",
  upcoming: "text-zinc-400 dark:text-zinc-500",
};

const i18n: Record<Locale, {
  drill: string;
  of: string;
  clickToStart: string;
  accuracy: string;
  belowThreshold: string;
  tryAgain: string;
  continue: string;
  errors: string;
}> = {
  de: {
    drill: "Uebung",
    of: "von",
    clickToStart: "Hier klicken und lostippen...",
    accuracy: "Genauigkeit",
    belowThreshold: "Mindestens {threshold}% Genauigkeit noetig. Nochmal.",
    tryAgain: "Nochmal",
    continue: "Weiter",
    errors: "Fehler",
  },
  en: {
    drill: "Drill",
    of: "of",
    clickToStart: "Click here and start typing...",
    accuracy: "Accuracy",
    belowThreshold: "Need at least {threshold}% accuracy. Try again.",
    tryAgain: "Try again",
    continue: "Continue",
    errors: "Errors",
  },
  fr: {
    drill: "Exercice",
    of: "sur",
    clickToStart: "Clique ici et commence a taper...",
    accuracy: "Precision",
    belowThreshold: "Il faut au moins {threshold}% de precision. Encore.",
    tryAgain: "Encore",
    continue: "Continuer",
    errors: "Erreurs",
  },
};

export function LessonDrill({
  drill,
  drillIndex,
  totalDrills,
  allKeys,
  locale,
  completionThreshold,
  onComplete,
}: Props) {
  const [state, setState] = useState(() => createTypingState(drill.content));
  const [now, setNow] = useState(Date.now());
  const [shake, setShake] = useState(false);
  const [pressedKey, setPressedKey] = useState<string | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);
  const currentCharRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const l = i18n[locale];

  useEffect(() => {
    setState(createTypingState(drill.content));
  }, [drill.content]);

  useEffect(() => {
    if (currentCharRef.current && containerRef.current) {
      const container = containerRef.current;
      const char = currentCharRef.current;
      const charTop = char.offsetTop;
      const containerScroll = container.scrollTop;
      const containerHeight = container.clientHeight;
      if (charTop < containerScroll + 40 || charTop > containerScroll + containerHeight - 60) {
        container.scrollTo({ top: Math.max(0, charTop - 60), behavior: "smooth" });
      }
    }
  }, [state.position]);

  useEffect(() => {
    if (state.startTime && !state.isComplete) {
      intervalRef.current = setInterval(() => setNow(Date.now()), 200);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.startTime, state.isComplete]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (state.isComplete) return;
      if (e.key === "Tab" || e.key === "Escape") return;
      e.preventDefault();

      if (e.key.length === 1) {
        setPressedKey(e.key);
        setTimeout(() => setPressedKey(undefined), 150);

        setState((prev) => {
          const next = processKeystroke(prev, e.key);
          if (next.position === prev.position) {
            setShake(true);
            setTimeout(() => setShake(false), 300);
          }
          return next;
        });
      }
    },
    [state.isComplete]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.focus();
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const charStatuses = getCharStatuses(state);
  const wpm = calculateWPM(state, state.isComplete ? undefined : now);
  const accuracy = calculateAccuracy(state);
  const passed = accuracy >= completionThreshold;

  const nextExpected = state.text[state.position];

  function handleReset() {
    setState(createTypingState(drill.content));
    setNow(Date.now());
    containerRef.current?.focus();
  }

  function handleContinue() {
    onComplete({ wpm, accuracy, errors: state.errors.length });
  }

  return (
    <div className="space-y-4">
      {/* Drill counter */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-500 dark:text-zinc-400">
          {l.drill} {drillIndex + 1} {l.of} {totalDrills}
        </span>
        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          {state.startTime && (
            <>
              <span>{wpm} WPM</span>
              <span>{accuracy}% {l.accuracy}</span>
            </>
          )}
        </div>
      </div>

      {/* Drill progress dots */}
      <div className="flex gap-1.5">
        {Array.from({ length: totalDrills }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < drillIndex
                ? "bg-indigo"
                : i === drillIndex
                  ? "bg-indigo/40"
                  : "bg-zinc-200 dark:bg-dark-border"
            }`}
          />
        ))}
      </div>

      {/* Typing area */}
      <div
        ref={containerRef}
        tabIndex={0}
        className={[
          "rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-8 text-lg sm:text-xl leading-relaxed font-mono focus:outline-none focus:ring-2 focus:ring-indigo/50 cursor-text select-none max-h-[200px] overflow-hidden",
          state.isComplete ? "opacity-60" : "",
        ].join(" ")}
      >
        {!state.startTime && !state.isComplete && (
          <p className="text-zinc-500 text-sm mb-4 font-sans">
            {l.clickToStart}
          </p>
        )}
        <p className="break-words">
          {state.text.split("").map((char, i) => (
            <span
              key={i}
              ref={charStatuses[i] === "current" ? currentCharRef : undefined}
              className={`${charStatusColors[charStatuses[i]]} ${
                char === " " && charStatuses[i] === "incorrect" ? "bg-peach/30" : ""
              } ${charStatuses[i] === "current" && shake ? "animate-shake text-peach border-peach" : ""}`}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      {/* Virtual keyboard */}
      <Keyboard
        activeKey={state.isComplete ? undefined : nextExpected}
        activeKeys={allKeys}
        pressedKey={pressedKey}
        showFingers={true}
      />

      {/* Completion panel */}
      {state.isComplete && (
        <div className={`rounded-xl border p-6 text-center space-y-3 ${
          passed
            ? "border-indigo/30 bg-indigo/5"
            : "border-peach/30 bg-peach/5"
        }`}>
          <div className="flex items-center justify-center gap-6 text-sm">
            <span className="font-semibold">{wpm} WPM</span>
            <span className="font-semibold">{accuracy}% {l.accuracy}</span>
            <span className="text-zinc-500">{state.errors.length} {l.errors}</span>
          </div>
          {!passed && (
            <p className="text-sm text-peach">
              {l.belowThreshold.replace("{threshold}", String(completionThreshold))}
            </p>
          )}
          <div className="flex items-center justify-center gap-3">
            {!passed && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-lg bg-peach px-5 py-2.5 text-sm font-semibold text-white hover:bg-peach/90 transition-colors"
              >
                {l.tryAgain} <span className="text-white/70">&gt;&gt;</span>
              </button>
            )}
            {passed && (
              <button
                onClick={handleContinue}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
              >
                {l.continue} <span className="text-electric-yellow">&gt;&gt;</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
