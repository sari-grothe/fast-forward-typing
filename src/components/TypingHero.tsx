"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const splits: Record<string, { static: string; typed: string }> = {
  de: { static: "Was, wenn du so schnell tippen könntest ", typed: "wie du denkst?" },
  en: { static: "What if you could type as fast as ", typed: "you think?" },
  fr: { static: "Et si tu tapais aussi vite que ", typed: "tu penses ?" },
};

type K = { l: string; w: number };

const keyboards: Record<string, K[][]> = {
  de: [
    [{ l: "^", w: 1 }, { l: "1", w: 1 }, { l: "2", w: 1 }, { l: "3", w: 1 }, { l: "4", w: 1 }, { l: "5", w: 1 }, { l: "6", w: 1 }, { l: "7", w: 1 }, { l: "8", w: 1 }, { l: "9", w: 1 }, { l: "0", w: 1 }, { l: "ß", w: 1 }, { l: "´", w: 1 }, { l: "←", w: 2 }],
    [{ l: "TAB", w: 1.5 }, { l: "Q", w: 1 }, { l: "W", w: 1 }, { l: "E", w: 1 }, { l: "R", w: 1 }, { l: "T", w: 1 }, { l: "Z", w: 1 }, { l: "U", w: 1 }, { l: "I", w: 1 }, { l: "O", w: 1 }, { l: "P", w: 1 }, { l: "Ü", w: 1 }, { l: "+", w: 1 }, { l: "#", w: 1.5 }],
    [{ l: "⇪", w: 1.75 }, { l: "A", w: 1 }, { l: "S", w: 1 }, { l: "D", w: 1 }, { l: "F", w: 1 }, { l: "G", w: 1 }, { l: "H", w: 1 }, { l: "J", w: 1 }, { l: "K", w: 1 }, { l: "L", w: 1 }, { l: "Ö", w: 1 }, { l: "Ä", w: 1 }, { l: "↵", w: 2.25 }],
    [{ l: "⇧", w: 1.25 }, { l: "<", w: 1 }, { l: "Y", w: 1 }, { l: "X", w: 1 }, { l: "C", w: 1 }, { l: "V", w: 1 }, { l: "B", w: 1 }, { l: "N", w: 1 }, { l: "M", w: 1 }, { l: ",", w: 1 }, { l: ".", w: 1 }, { l: "-", w: 1 }, { l: "⇧", w: 2.75 }],
  ],
  en: [
    [{ l: "`", w: 1 }, { l: "1", w: 1 }, { l: "2", w: 1 }, { l: "3", w: 1 }, { l: "4", w: 1 }, { l: "5", w: 1 }, { l: "6", w: 1 }, { l: "7", w: 1 }, { l: "8", w: 1 }, { l: "9", w: 1 }, { l: "0", w: 1 }, { l: "-", w: 1 }, { l: "=", w: 1 }, { l: "←", w: 2 }],
    [{ l: "TAB", w: 1.5 }, { l: "Q", w: 1 }, { l: "W", w: 1 }, { l: "E", w: 1 }, { l: "R", w: 1 }, { l: "T", w: 1 }, { l: "Y", w: 1 }, { l: "U", w: 1 }, { l: "I", w: 1 }, { l: "O", w: 1 }, { l: "P", w: 1 }, { l: "[", w: 1 }, { l: "]", w: 1 }, { l: "\\", w: 1.5 }],
    [{ l: "⇪", w: 1.75 }, { l: "A", w: 1 }, { l: "S", w: 1 }, { l: "D", w: 1 }, { l: "F", w: 1 }, { l: "G", w: 1 }, { l: "H", w: 1 }, { l: "J", w: 1 }, { l: "K", w: 1 }, { l: "L", w: 1 }, { l: ";", w: 1 }, { l: "'", w: 1 }, { l: "↵", w: 2.25 }],
    [{ l: "⇧", w: 2.25 }, { l: "Z", w: 1 }, { l: "X", w: 1 }, { l: "C", w: 1 }, { l: "V", w: 1 }, { l: "B", w: 1 }, { l: "N", w: 1 }, { l: "M", w: 1 }, { l: ",", w: 1 }, { l: ".", w: 1 }, { l: "/", w: 1 }, { l: "⇧", w: 2.75 }],
  ],
  fr: [
    [{ l: "²", w: 1 }, { l: "1", w: 1 }, { l: "2", w: 1 }, { l: "3", w: 1 }, { l: "4", w: 1 }, { l: "5", w: 1 }, { l: "6", w: 1 }, { l: "7", w: 1 }, { l: "8", w: 1 }, { l: "9", w: 1 }, { l: "0", w: 1 }, { l: "°", w: 1 }, { l: "+", w: 1 }, { l: "←", w: 2 }],
    [{ l: "TAB", w: 1.5 }, { l: "A", w: 1 }, { l: "Z", w: 1 }, { l: "E", w: 1 }, { l: "R", w: 1 }, { l: "T", w: 1 }, { l: "Y", w: 1 }, { l: "U", w: 1 }, { l: "I", w: 1 }, { l: "O", w: 1 }, { l: "P", w: 1 }, { l: "^", w: 1 }, { l: "$", w: 1 }, { l: "µ", w: 1.5 }],
    [{ l: "VERR", w: 1.75 }, { l: "Q", w: 1 }, { l: "S", w: 1 }, { l: "D", w: 1 }, { l: "F", w: 1 }, { l: "G", w: 1 }, { l: "H", w: 1 }, { l: "J", w: 1 }, { l: "K", w: 1 }, { l: "L", w: 1 }, { l: "M", w: 1 }, { l: "Ù", w: 1 }, { l: "↵", w: 2.25 }],
    [{ l: "MAJ", w: 1.25 }, { l: "<", w: 1 }, { l: "W", w: 1 }, { l: "X", w: 1 }, { l: "C", w: 1 }, { l: "V", w: 1 }, { l: "B", w: 1 }, { l: "N", w: 1 }, { l: ",", w: 1 }, { l: ";", w: 1 }, { l: ":", w: 1 }, { l: "!", w: 1 }, { l: "MAJ", w: 2.75 }],
  ],
};

const modifiers = new Set(["TAB", "⇪", "⇧", "↵", "←", "VERR", "MAJ", "#", "µ", "\\"]);

function charToKey(ch: string, locale: string): string | null {
  if (ch === " ") return "SPACE";
  const u = ch.toUpperCase();
  const special: Record<string, Record<string, string>> = {
    de: { "?": "ß" },
    en: { "?": "/" },
    fr: { "?": ",", "É": "E", "È": "E", "Ù": "Ù" },
  };
  const m = special[locale]?.[u];
  if (m) return m;
  if (/[A-ZÄÖÜß]/.test(u)) return u;
  return null;
}

const bumpCols = new Set([3, 6]);

const S = 38;
const G = 2;
const KS = S - G;
const PAD = 14;

type Props = {
  locale: string;
  subheadline: string;
  ctaLearn: string;
  ctaTest: string;
};

export function TypingHero({ locale, subheadline, ctaLearn, ctaTest }: Props) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting" | "wait">("wait");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const { static: prefix, typed } = splits[locale] || splits.en;

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    switch (phase) {
      case "wait":
        t = setTimeout(() => setPhase("typing"), 800);
        break;
      case "typing":
        if (idx < typed.length) {
          const key = charToKey(typed[idx], locale);
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
  }, [idx, phase, typed, locale]);

  const isIdle = phase === "pause" || phase === "wait";
  const kb = keyboards[locale] || keyboards.en;

  const rows = kb.map((row, ri) => {
    let x = PAD;
    return row.map((key) => {
      const w = key.w * S - G;
      const pos = { l: key.l, x, y: PAD + ri * S, w };
      x += key.w * S;
      return pos;
    });
  });

  const homeLetters = rows[2].slice(1, -1);
  const kbW = 15 * S;
  const spaceW = 6.25 * S - G;
  const spaceX = PAD + (kbW - spaceW) / 2;
  const spaceY = PAD + 4 * S;
  const svgW = PAD * 2 + kbW;
  const svgH = PAD + 5 * S + PAD;

  const isMod = (label: string) => modifiers.has(label);

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
      <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl">{subheadline}</p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
        <Link
          href={`/${locale}/lessons/1`}
          className="group inline-flex items-center gap-2 rounded-xl bg-indigo px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:shadow-indigo/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          {ctaLearn} <span className="text-electric-yellow group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
        </Link>
        <Link
          href={`/${locale}/speed-test`}
          className="inline-flex items-center gap-2 rounded-xl border-2 border-indigo px-8 py-4 text-base font-semibold text-indigo hover:bg-indigo/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 dark:text-white dark:border-white/30 dark:hover:bg-white/5"
        >
          {ctaTest}
        </Link>
      </div>

      <div className="mt-12 w-full max-w-xl px-4" aria-hidden="true">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.06))" }}
        >
          <rect
            x={PAD - 8}
            y={PAD - 8}
            width={kbW + 16}
            height={5 * S + 16}
            rx={14}
            className="fill-zinc-100 dark:fill-zinc-800/60"
          />

          {rows.map((row, ri) =>
            row.map((key, ki) => {
              const mod = isMod(key.l);
              const active = activeKey === key.l;
              const isHome = ri === 2 && ki > 0 && ki < rows[2].length - 1;
              const letterIdx = isHome ? ki - 1 : -1;
              const showBump = isHome && bumpCols.has(letterIdx);

              return (
                <g key={`${ri}-${ki}`}>
                  <rect
                    x={key.x}
                    y={key.y}
                    width={key.w}
                    height={KS}
                    rx={6}
                    className={
                      active
                        ? "fill-indigo"
                        : mod
                          ? "fill-zinc-200 dark:fill-zinc-700/60"
                          : "fill-white dark:fill-zinc-800"
                    }
                    stroke={active ? "none" : undefined}
                  />
                  {!active && (
                    <rect
                      x={key.x}
                      y={key.y}
                      width={key.w}
                      height={KS}
                      rx={6}
                      fill="none"
                      className="stroke-zinc-300 dark:stroke-zinc-600"
                      strokeWidth={0.5}
                    />
                  )}
                  <text
                    x={key.x + key.w / 2}
                    y={key.y + KS / 2 + 4}
                    textAnchor="middle"
                    className={
                      active
                        ? "fill-white"
                        : mod
                          ? "fill-zinc-400 dark:fill-zinc-500"
                          : "fill-zinc-500 dark:fill-zinc-400"
                    }
                    fontSize={mod ? 7.5 : 11}
                    fontFamily="Poppins, sans-serif"
                    fontWeight={500}
                  >
                    {key.l}
                  </text>
                  {showBump && !active && (
                    <rect
                      x={key.x + key.w / 2 - 5}
                      y={key.y + KS - 6}
                      width={10}
                      height={1.5}
                      rx={0.75}
                      className="fill-zinc-300 dark:fill-zinc-600"
                    />
                  )}
                </g>
              );
            })
          )}

          {/* Space bar */}
          <rect
            x={spaceX}
            y={spaceY}
            width={spaceW}
            height={KS}
            rx={6}
            className={activeKey === "SPACE" ? "fill-indigo" : "fill-white dark:fill-zinc-800"}
          />
          {activeKey !== "SPACE" && (
            <rect
              x={spaceX}
              y={spaceY}
              width={spaceW}
              height={KS}
              rx={6}
              fill="none"
              className="stroke-zinc-300 dark:stroke-zinc-600"
              strokeWidth={0.5}
            />
          )}
        </svg>
      </div>
    </section>
  );
}
