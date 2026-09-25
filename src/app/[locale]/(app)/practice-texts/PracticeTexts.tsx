"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";
import { getPracticeTexts, practiceUi, wordCount, type PracticeCategory, type PracticeDifficulty } from "@/lib/practice-texts";

type Props = { locale: Locale };

const categoryOrder: PracticeCategory[] = ["email", "meeting", "customer", "project", "ai", "numbers"];
const difficultyOrder: PracticeDifficulty[] = ["easy", "medium", "hard"];

const difficultyStyle: Record<PracticeDifficulty, string> = {
  easy: "bg-indigo/10 text-indigo",
  medium: "bg-electric-yellow/20 text-dark-text dark:text-electric-yellow",
  hard: "bg-peach/20 text-dark-text dark:text-peach",
};

// The practice-paragraph library: filter by category and difficulty,
// copy a text for any other typing program (the search intent), or load
// it straight into our speed test (the product intent).
export function PracticeTexts({ locale }: Props) {
  const ui = practiceUi[locale];
  const all = getPracticeTexts(locale);
  const [category, setCategory] = useState<PracticeCategory | "all">("all");
  const [difficulty, setDifficulty] = useState<PracticeDifficulty | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const items = useMemo(
    () => all.filter((t) => (category === "all" || t.category === category) && (difficulty === "all" || t.difficulty === difficulty)),
    [all, category, difficulty]
  );

  async function copy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1800);
    } catch {
      // Clipboard blocked (permissions, insecure context): the text is
      // still selectable, nothing else to do.
    }
  }

  const chip = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
      active ? "bg-indigo text-white" : "bg-zinc-100 dark:bg-dark-surface text-zinc-600 dark:text-zinc-400 hover:text-indigo"
    }`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label={ui.categories.email}>
        <button type="button" className={chip(category === "all")} onClick={() => setCategory("all")}>{ui.all}</button>
        {categoryOrder.map((c) => (
          <button key={c} type="button" className={chip(category === c)} onClick={() => setCategory(c)}>{ui.categories[c]}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={ui.difficulties.easy}>
        <button type="button" className={chip(difficulty === "all")} onClick={() => setDifficulty("all")}>{ui.all}</button>
        {difficultyOrder.map((d) => (
          <button key={d} type="button" className={chip(difficulty === d)} onClick={() => setDifficulty(d)}>{ui.difficulties[d]}</button>
        ))}
      </div>

      <p className="text-xs text-zinc-600" aria-live="polite">{ui.count(items.length)}</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((t) => {
          const words = wordCount(t.text);
          const minutes = Math.max(1, Math.round(words / 40));
          return (
            <li key={t.id} className="flex flex-col rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo">{ui.categories[t.category]}</span>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${difficultyStyle[t.difficulty]}`}>{ui.difficulties[t.difficulty]}</span>
                <span className="text-[11px] text-zinc-600 ml-auto">{words} {ui.words} · {minutes} {ui.minutesAt40}</span>
              </div>
              <h3 className="font-bold text-dark-text dark:text-white mb-2">{t.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-mono select-all flex-1">{t.text}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => copy(t.id, t.text)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 dark:border-dark-border px-3.5 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-indigo/40 hover:text-indigo transition-colors"
                >
                  {copiedId === t.id ? ui.copied : ui.copy}
                </button>
                <Link
                  href={`${localizedPath(locale, "speedTest")}?text=${t.id}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo px-3.5 py-2 text-sm font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {ui.practice} <span aria-hidden="true">&gt;&gt;</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
