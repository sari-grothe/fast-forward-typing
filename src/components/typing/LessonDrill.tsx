"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  createTypingState,
  processKeystroke,
  getCharStatuses,
  calculateWPM,
  calculateAccuracy,
  getElapsedSeconds,
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
  startTyping: string;
  startHint: string;
  accuracy: string;
  minAccuracy: string;
  belowThreshold: string;
  passed: string;
  tryAgain: string;
  continue: string;
  errors: string;
  time: string;
}> = {
  de: {
    drill: "Übung",
    of: "von",
    startTyping: "Einfach lostippen",
    startHint: "Die erste Taste startet die Übung",
    accuracy: "Genauigkeit",
    minAccuracy: "Mindestens {threshold}% Genauigkeit",
    belowThreshold: "Unter {threshold}% - nochmal versuchen",
    passed: "Geschafft",
    tryAgain: "Nochmal",
    continue: "Weiter",
    errors: "Fehler",
    time: "Zeit",
  },
  en: {
    drill: "Drill",
    of: "of",
    startTyping: "Just start typing",
    startHint: "Your first keystroke starts the drill",
    accuracy: "Accuracy",
    minAccuracy: "Minimum {threshold}% accuracy",
    belowThreshold: "Below {threshold}% - try again",
    passed: "Passed",
    tryAgain: "Try again",
    continue: "Continue",
    errors: "Errors",
    time: "Time",
  },
  fr: {
    drill: "Exercice",
    of: "sur",
    startTyping: "Commence à taper",
    startHint: "La première touche lance l'exercice",
    accuracy: "Précision",
    minAccuracy: "Minimum {threshold}% de précision",
    belowThreshold: "Sous {threshold}% - encore une fois",
    passed: "Réussi",
    tryAgain: "Encore",
    continue: "Continuer",
    errors: "Erreurs",
    time: "Temps",
  },
};

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

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

  // Auto-focus on mount
  useEffect(() => {
    containerRef.current?.focus();
  }, []);

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
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const charStatuses = getCharStatuses(state);
  const wpm = calculateWPM(state, state.isComplete ? undefined : now);
  const accuracy = calculateAccuracy(state);
  const elapsed = getElapsedSeconds(state, state.isComplete ? undefined : now);
  const passed = accuracy >= completionThreshold;

  const nextExpected = state.text[state.position];
  const hasStarted = state.startTime !== null;
  const progress = state.text.length > 0 ? (state.position / state.text.length) * 100 : 0;

  function handleReset() {
    setState(createTypingState(drill.content));
    setNow(Date.now());
    setTimeout(() => containerRef.current?.focus(), 50);
  }

  function handleContinue() {
    onComplete({ wpm, accuracy, errors: state.errors.length });
  }

  return (
    <div className="space-y-4">
      {/* Header: drill counter + threshold notice */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {l.drill} {drillIndex + 1} {l.of} {totalDrills}
          </span>
          {/* Drill progress dots */}
          <div className="flex gap-1">
            {Array.from({ length: totalDrills }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < drillIndex
                    ? "bg-indigo"
                    : i === drillIndex
                      ? "bg-indigo/40"
                      : "bg-zinc-200 dark:bg-dark-border"
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-dark-surface px-2.5 py-1 rounded-full">
          {l.minAccuracy.replace("{threshold}", String(completionThreshold))}
        </span>
      </div>

      {/* Live stats bar - visible during typing */}
      {hasStarted && !state.isComplete && (
        <div className="flex items-center gap-4 px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-dark-surface border border-zinc-100 dark:border-dark-border">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-zinc-400 dark:text-zinc-500">{l.time}</span>
            <span className="font-mono font-semibold text-dark-text dark:text-white tabular-nums">{formatTime(elapsed)}</span>
          </div>
          <div className="w-px h-4 bg-zinc-200 dark:bg-dark-border" />
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-zinc-400 dark:text-zinc-500">WPM</span>
            <span className="font-mono font-semibold text-dark-text dark:text-white tabular-nums">{wpm}</span>
          </div>
          <div className="w-px h-4 bg-zinc-200 dark:bg-dark-border" />
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-zinc-400 dark:text-zinc-500">{l.accuracy}</span>
            <span className={`font-mono font-semibold tabular-nums ${accuracy >= completionThreshold ? "text-indigo" : "text-peach"}`}>{accuracy}%</span>
          </div>
          {/* Progress bar */}
          <div className="flex-1 h-1.5 rounded-full bg-zinc-200 dark:bg-dark-border overflow-hidden ml-2">
            <div
              className="h-full rounded-full bg-indigo transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Typing area */}
      <div
        ref={containerRef}
        tabIndex={0}
        className={[
          "relative rounded-xl border bg-white dark:bg-dark-surface p-6 sm:p-8 text-lg sm:text-xl leading-relaxed font-mono focus:outline-none cursor-text select-none max-h-[200px] overflow-hidden transition-all duration-200",
          state.isComplete
            ? "opacity-50 border-zinc-200 dark:border-dark-border"
            : "border-zinc-200 dark:border-dark-border focus:border-indigo/40 focus:ring-2 focus:ring-indigo/20",
        ].join(" ")}
      >
        <p className="break-words">
          {state.text.split("").map((char, i) => (
            <span key={i}>
              {charStatuses[i] === "current" && !hasStarted && !state.isComplete && (
                <span className="inline-block w-0.5 h-[1.1em] bg-indigo animate-cursor-blink align-middle -mt-1 mr-px" />
              )}
              <span
                ref={charStatuses[i] === "current" ? currentCharRef : undefined}
                className={`${charStatusColors[charStatuses[i]]} ${
                  char === " " && charStatuses[i] === "incorrect" ? "bg-peach/30" : ""
                } ${charStatuses[i] === "current" && shake ? "animate-shake text-peach border-peach" : ""}`}
              >
                {char}
              </span>
            </span>
          ))}
        </p>
      </div>

      {/* Start hint - shown until the first keystroke */}
      {!hasStarted && !state.isComplete && (
        <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">{l.startHint}</p>
      )}

      {/* Virtual keyboard */}
      <Keyboard
        activeKey={state.isComplete ? undefined : nextExpected}
        activeKeys={allKeys}
        pressedKey={pressedKey}
        showFingers={true}
        locale={locale}
      />

      {/* Completion panel */}
      {state.isComplete && (
        <div className={`rounded-2xl border-2 p-6 sm:p-8 ${
          passed
            ? "border-indigo/30 bg-indigo/5 dark:bg-indigo/5"
            : "border-peach/30 bg-peach/5 dark:bg-peach/5"
        }`}>
          {/* Result badge */}
          <div className="flex items-center justify-center mb-5">
            {passed ? (
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo/10 text-indigo text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {l.passed}
              </div>
            ) : (
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/10 text-peach text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                {l.belowThreshold.replace("{threshold}", String(completionThreshold))}
              </div>
            )}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 rounded-xl bg-white dark:bg-dark-surface border border-zinc-100 dark:border-dark-border">
              <div className="text-2xl font-bold text-dark-text dark:text-white">{wpm}</div>
              <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">WPM</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white dark:bg-dark-surface border border-zinc-100 dark:border-dark-border">
              <div className={`text-2xl font-bold ${passed ? "text-indigo" : "text-peach"}`}>{accuracy}%</div>
              <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{l.accuracy}</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white dark:bg-dark-surface border border-zinc-100 dark:border-dark-border">
              <div className="text-2xl font-bold text-dark-text dark:text-white">{formatTime(elapsed)}</div>
              <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{l.time}</div>
            </div>
          </div>

          {/* Action */}
          <div className="flex justify-center">
            {passed ? (
              <button
                onClick={handleContinue}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo px-8 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors shadow-lg shadow-indigo/20"
              >
                {l.continue} <span className="text-electric-yellow">&gt;&gt;</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl bg-peach px-8 py-3 text-sm font-semibold text-white hover:bg-peach/90 transition-colors shadow-lg shadow-peach/20"
              >
                {l.tryAgain} <span className="text-white/70">&gt;&gt;</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
