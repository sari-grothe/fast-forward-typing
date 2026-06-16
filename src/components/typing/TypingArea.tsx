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
import { Stats } from "./Stats";

type Props = {
  text: string;
  mode: "countdown" | "freeform";
  countdownSeconds?: number;
  hideStats?: boolean;
  onComplete?: (state: TypingState) => void;
  onReset?: () => void;
};

const charStatusColors: Record<CharStatus, string> = {
  correct: "text-indigo",
  incorrect: "text-peach bg-peach/20",
  current: "text-dark-text dark:text-white bg-indigo/20 dark:bg-indigo/30 border-b-2 border-indigo",
  upcoming: "text-zinc-400 dark:text-zinc-500",
};

export function TypingArea({
  text,
  mode,
  countdownSeconds = 60,
  hideStats = false,
  onComplete,
  onReset,
}: Props) {
  const [state, setState] = useState(() => createTypingState(text));
  const [now, setNow] = useState(Date.now());
  const [timeUp, setTimeUp] = useState(false);
  const [shake, setShake] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentCharRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    setState(createTypingState(text));
    setTimeUp(false);
  }, [text]);

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
    if (state.startTime && !state.isComplete && !timeUp) {
      intervalRef.current = setInterval(() => {
        const current = Date.now();
        setNow(current);

        if (mode === "countdown" && state.startTime) {
          const elapsed = (current - state.startTime) / 1000;
          if (elapsed >= countdownSeconds) {
            setTimeUp(true);
            clearInterval(intervalRef.current!);
            onComplete?.(stateRef.current);
          }
        }
      }, 100);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.startTime, state.isComplete, timeUp, mode, countdownSeconds, onComplete, state]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (state.isComplete || timeUp) return;

      if (e.key === "Tab" || e.key === "Escape") return;
      e.preventDefault();

      if (e.key.length === 1) {
        setState((prev) => {
          const next = processKeystroke(prev, e.key);
          if (next.position === prev.position) {
            setShake(true);
            setTimeout(() => setShake(false), 300);
          }
          if (next.isComplete) {
            onComplete?.(next);
          }
          return next;
        });
      }
    },
    [state.isComplete, timeUp, onComplete]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.focus();
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const charStatuses = getCharStatuses(state);
  const wpm = calculateWPM(state, now);
  const accuracy = calculateAccuracy(state);
  const elapsed = getElapsedSeconds(state, now);

  let timeDisplay: string;
  if (mode === "countdown") {
    const remaining = Math.max(0, countdownSeconds - elapsed);
    timeDisplay = `${remaining}s`;
  } else {
    timeDisplay = `${elapsed}s`;
  }

  const isFinished = state.isComplete || timeUp;

  function handleReset() {
    setState(createTypingState(text));
    setTimeUp(false);
    setNow(Date.now());
    onReset?.();
    containerRef.current?.focus();
  }

  return (
    <div className="space-y-6">
      {!hideStats && (
        <Stats
          wpm={wpm}
          accuracy={accuracy}
          timeDisplay={timeDisplay}
          errors={state.errors.length}
        />
      )}

      <div
        ref={containerRef}
        tabIndex={0}
        className={`rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-8 text-lg sm:text-xl leading-relaxed font-mono focus:outline-none focus:ring-2 focus:ring-indigo/50 cursor-text select-none max-h-[280px] overflow-hidden ${
          isFinished ? "opacity-60" : ""
        }`}
      >
        {!state.startTime && !isFinished && (
          <p className="text-zinc-500 text-sm mb-4 font-sans">
            Click here and start typing...
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

      {isFinished && (
        <div className="flex items-center gap-4">
          <button
            onClick={handleReset}
            className="rounded-lg bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo/90 transition-colors"
          >
            Try again
          </button>
          <p className="text-sm text-zinc-500">
            {wpm} WPM · {accuracy}% accuracy · {state.errors.length} errors
          </p>
        </div>
      )}
    </div>
  );
}
