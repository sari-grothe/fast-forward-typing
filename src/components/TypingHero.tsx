"use client";

import { useEffect, useState } from "react";

const splits: Record<string, { static: string; typed: string }> = {
  de: { static: "Was, wenn du so schnell tippen könntest ", typed: "wie du denkst?" },
  en: { static: "What if you could type as fast as ", typed: "you think?" },
  fr: { static: "Et si tu tapais aussi vite que ", typed: "tu penses ?" },
};

const keyRows = [
  { keys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], offsetClass: "" },
  { keys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"], offsetClass: "ml-[16px] sm:ml-[20px]" },
  { keys: ["Z", "X", "C", "V", "B", "N", "M"], offsetClass: "ml-[40px] sm:ml-[49px]" },
];

const homeFingers = new Set(["A", "S", "D", "F", "J", "K", "L"]);
const bumpKeys = new Set(["F", "J"]);

function charToKey(ch: string): string | null {
  if (ch === " ") return "SPACE";
  const u = ch.toUpperCase();
  const map: Record<string, string> = {
    "Ä": "A", "Ö": "O", "Ü": "U", "É": "E", "È": "E",
    "Ê": "E", "À": "A", "Â": "A", "?": "P", ",": "M", ".": "L",
  };
  return map[u] || (/[A-Z]/.test(u) ? u : null);
}

const keyToHome: Record<string, string> = {
  Q: "A", A: "A", Z: "A",
  W: "S", S: "S", X: "S",
  E: "D", D: "D", C: "D",
  R: "F", T: "F", F: "F", G: "F", V: "F", B: "F",
  Y: "J", U: "J", H: "J", J: "J", N: "J", M: "J",
  I: "K", K: "K",
  O: "L", L: "L", P: "L",
  SPACE: "J",
};

type Props = {
  locale: string;
  subheadline: string;
  ctaText: string;
};

export function TypingHero({ locale, subheadline, ctaText }: Props) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting" | "wait">("wait");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const { static: prefix, typed } = splits[locale] || splits.en;
  const activeFinger = activeKey ? keyToHome[activeKey] || null : null;

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "wait":
        t = setTimeout(() => setPhase("typing"), 800);
        break;
      case "typing":
        if (idx < typed.length) {
          const key = charToKey(typed[idx]);
          setActiveKey(key);
          t = setTimeout(() => {
            setIdx((i) => i + 1);
            setActiveKey(null);
          }, 80 + Math.random() * 60);
        } else {
          setActiveKey(null);
          setPhase("pause");
        }
        break;
      case "pause":
        t = setTimeout(() => setPhase("deleting"), 2500);
        break;
      case "deleting":
        if (idx > 0) {
          t = setTimeout(() => setIdx((i) => i - 1), 35);
        } else {
          setPhase("wait");
        }
        break;
    }

    return () => clearTimeout(t);
  }, [idx, phase, typed]);

  const isIdle = phase === "pause" || phase === "wait";

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl">
        {prefix}
        <span className="text-indigo">{typed.slice(0, idx)}</span>
        <span
          className={`inline-block w-[3px] h-[0.7em] bg-indigo align-baseline ml-0.5 ${
            isIdle ? "animate-cursor-blink" : ""
          }`}
        />
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl">
        {subheadline}
      </p>
      <a
        href={`/${locale}/speed-test`}
        className="mt-10 inline-flex items-center gap-2 rounded-lg bg-indigo px-8 py-4 text-base font-semibold text-white hover:bg-indigo/90 transition-colors"
      >
        {ctaText} <span className="text-electric-yellow">&gt;&gt;</span>
      </a>

      {/* Keyboard */}
      <div
        className="mt-14 p-3 sm:p-4 rounded-2xl bg-zinc-100/80 dark:bg-dark-surface/50 scale-[0.85] sm:scale-100 origin-top"
        aria-hidden="true"
      >
        <div className="inline-flex flex-col gap-[3px]">
          {keyRows.map((row, ri) => (
            <div key={ri} className={`flex gap-[3px] ${row.offsetClass}`}>
              {row.keys.map((k) => {
                const pressed = activeKey === k;
                const fingerGlow = activeFinger === k;
                const isHome = homeFingers.has(k);
                const hasBump = bumpKeys.has(k);
                return (
                  <div
                    key={k}
                    className={`
                      relative w-8 h-8 sm:w-9 sm:h-9 rounded-md text-[10px] sm:text-[11px] font-medium
                      flex items-center justify-center transition-all duration-75
                      ${
                        pressed
                          ? "bg-indigo text-white scale-95 shadow-lg shadow-indigo/40"
                          : "bg-white dark:bg-dark-surface border border-zinc-200/80 dark:border-dark-border text-zinc-400 dark:text-zinc-500"
                      }
                    `}
                  >
                    {k}
                    {hasBump && !pressed && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-[1.5px] rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    )}
                    {isHome && (
                      <span
                        className={`
                          absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2.5 rounded-full
                          transition-all duration-100
                          ${
                            fingerGlow
                              ? "bg-peach shadow-md shadow-peach/60 scale-110"
                              : "bg-peach/30"
                          }
                        `}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
          {/* Space bar */}
          <div className="flex justify-center mt-[1px]">
            <div
              className={`
                relative w-40 sm:w-48 h-8 sm:h-9 rounded-md
                flex items-center justify-center transition-all duration-75
                ${
                  activeKey === "SPACE"
                    ? "bg-indigo shadow-lg shadow-indigo/40 scale-[0.98]"
                    : "bg-white dark:bg-dark-surface border border-zinc-200/80 dark:border-dark-border"
                }
              `}
            >
              {/* Thumb indicators */}
              <span
                className={`absolute -top-2 left-[35%] w-4 h-2.5 rounded-full transition-all duration-100 ${
                  activeKey === "SPACE"
                    ? "bg-peach shadow-md shadow-peach/60 scale-110"
                    : "bg-peach/30"
                }`}
              />
              <span
                className={`absolute -top-2 left-[60%] w-4 h-2.5 rounded-full transition-all duration-100 ${
                  activeKey === "SPACE"
                    ? "bg-peach shadow-md shadow-peach/60 scale-110"
                    : "bg-peach/30"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
