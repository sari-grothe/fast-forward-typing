"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";

type Props = { locale: Locale };

const ui: Record<Locale, {
  placeholder: string;
  words: string;
  chars: string;
  charsNoSpaces: string;
  sentences: string;
  paragraphs: string;
  readingTime: string;
  speakingTime: string;
  typingTime: string;
  typingNote: string;
  measure: string;
  limits: string;
  limitItems: { label: string; max: number }[];
  clear: string;
  privacy: string;
  minutes: (m: number) => string;
  remaining: (n: number) => string;
  over: (n: number) => string;
}> = {
  de: {
    placeholder: "Text hier einfügen oder tippen ...",
    words: "Wörter",
    chars: "Zeichen",
    charsNoSpaces: "Zeichen ohne Leerzeichen",
    sentences: "Sätze",
    paragraphs: "Absätze",
    readingTime: "Lesezeit",
    speakingTime: "Sprechzeit",
    typingTime: "Tippzeit bei 40 WPM",
    typingNote: "40 WPM ist der Durchschnitt. Wie schnell tippst du?",
    measure: "Tippgeschwindigkeit messen",
    limits: "Zeichenlimits",
    limitItems: [
      { label: "Google-Titel", max: 60 },
      { label: "Meta-Description", max: 160 },
      { label: "SMS", max: 160 },
      { label: "X / Twitter", max: 280 },
      { label: "Instagram-Bildtext", max: 2200 },
      { label: "LinkedIn-Beitrag", max: 3000 },
    ],
    clear: "Leeren",
    privacy: "Der Text bleibt in deinem Browser und wird nirgendwohin gesendet.",
    minutes: (m) => (m < 1 ? "unter 1 Min." : `${m} Min.`),
    remaining: (n) => `${n} übrig`,
    over: (n) => `${n} zu viel`,
  },
  en: {
    placeholder: "Paste or type your text here ...",
    words: "Words",
    chars: "Characters",
    charsNoSpaces: "Characters without spaces",
    sentences: "Sentences",
    paragraphs: "Paragraphs",
    readingTime: "Reading time",
    speakingTime: "Speaking time",
    typingTime: "Typing time at 40 WPM",
    typingNote: "40 WPM is the average. How fast do you type?",
    measure: "Measure your typing speed",
    limits: "Character limits",
    limitItems: [
      { label: "Google title", max: 60 },
      { label: "Meta description", max: 160 },
      { label: "SMS", max: 160 },
      { label: "X / Twitter", max: 280 },
      { label: "Instagram caption", max: 2200 },
      { label: "LinkedIn post", max: 3000 },
    ],
    clear: "Clear",
    privacy: "Your text stays in your browser and is never sent anywhere.",
    minutes: (m) => (m < 1 ? "under 1 min" : `${m} min`),
    remaining: (n) => `${n} left`,
    over: (n) => `${n} over`,
  },
  fr: {
    placeholder: "Colle ou tape ton texte ici ...",
    words: "Mots",
    chars: "Caractères",
    charsNoSpaces: "Caractères sans espaces",
    sentences: "Phrases",
    paragraphs: "Paragraphes",
    readingTime: "Temps de lecture",
    speakingTime: "Temps de parole",
    typingTime: "Temps de frappe à 40 MPM",
    typingNote: "40 MPM, c'est la moyenne. Et toi, tu tapes à quelle vitesse ?",
    measure: "Mesurer ma vitesse de frappe",
    limits: "Limites de caractères",
    limitItems: [
      { label: "Titre Google", max: 60 },
      { label: "Meta description", max: 160 },
      { label: "SMS", max: 160 },
      { label: "X / Twitter", max: 280 },
      { label: "Légende Instagram", max: 2200 },
      { label: "Post LinkedIn", max: 3000 },
    ],
    clear: "Effacer",
    privacy: "Ton texte reste dans ton navigateur et n'est envoyé nulle part.",
    minutes: (m) => (m < 1 ? "moins d'1 min" : `${m} min`),
    remaining: (n) => `${n} restants`,
    over: (n) => `${n} de trop`,
  },
};

// Counting rules (documented in the explainer under the tool): a word is
// any run of non-whitespace; characters count every Unicode code point;
// a sentence ends with . ! ? or a newline; paragraphs are separated by
// blank lines. Reading 200 WPM, speaking 130 WPM, typing 40 WPM.
export function countText(text: string) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const chars = [...text].length;
  const charsNoSpaces = [...text.replace(/\s/g, "")].length;
  const sentences = trimmed ? trimmed.split(/[.!?]+(\s|$)|\n+/).filter((s) => s && s.trim().length > 0).length : 0;
  const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length : 0;
  return { words, chars, charsNoSpaces, sentences, paragraphs };
}

export function WordCounter({ locale }: Props) {
  const l = ui[locale];
  const [text, setText] = useState("");
  const c = useMemo(() => countText(text), [text]);
  const reading = Math.round(c.words / 200);
  const speaking = Math.round(c.words / 130);
  const typing = Math.round(c.words / 40);
  const fmt = new Intl.NumberFormat(locale === "de" ? "de-DE" : locale === "fr" ? "fr-FR" : "en-US");

  const stats: [string, string][] = [
    [l.words, fmt.format(c.words)],
    [l.chars, fmt.format(c.chars)],
    [l.charsNoSpaces, fmt.format(c.charsNoSpaces)],
    [l.sentences, fmt.format(c.sentences)],
    [l.paragraphs, fmt.format(c.paragraphs)],
    [l.readingTime, c.words ? l.minutes(reading) : "0"],
    [l.speakingTime, c.words ? l.minutes(speaking) : "0"],
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-2">
        <label htmlFor="word-counter-input" className="sr-only">{l.placeholder}</label>
        <textarea
          id="word-counter-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={l.placeholder}
          rows={10}
          spellCheck={false}
          className="w-full resize-y rounded-xl bg-transparent px-4 py-3 text-base leading-relaxed text-dark-text dark:text-white placeholder:text-zinc-400 focus:outline-none"
        />
        <div className="flex items-center justify-between px-3 pb-2 text-xs text-zinc-600">
          <span>{l.privacy}</span>
          {text && (
            <button type="button" onClick={() => setText("")} className="font-medium text-indigo hover:underline">{l.clear}</button>
          )}
        </div>
      </div>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3" aria-live="polite">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-indigo/5 dark:bg-indigo/10 p-4">
            <dt className="text-xs text-zinc-600 dark:text-zinc-400">{label}</dt>
            <dd className="mt-1 text-2xl font-extrabold text-dark-text dark:text-white tabular-nums">{value}</dd>
          </div>
        ))}
        <div className="rounded-xl bg-electric-yellow/25 dark:bg-electric-yellow/10 p-4">
          <dt className="text-xs text-zinc-700 dark:text-zinc-300">{l.typingTime}</dt>
          <dd className="mt-1 text-2xl font-extrabold text-dark-text dark:text-white tabular-nums">{c.words ? l.minutes(typing) : "0"}</dd>
        </div>
      </dl>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-indigo/15 bg-indigo/5 dark:bg-indigo/10 p-4">
        <p className="text-sm text-zinc-700 dark:text-zinc-300 flex-1">{l.typingNote}</p>
        <Link href={localizedPath(locale, "speedTest")} className="inline-flex items-center gap-1.5 rounded-xl bg-indigo px-4 py-2 text-sm font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0">
          {l.measure} <span aria-hidden="true">&gt;&gt;</span>
        </Link>
      </div>

      <section aria-labelledby="limits-heading">
        <h2 id="limits-heading" className="text-sm font-semibold text-dark-text dark:text-white mb-3">{l.limits}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {l.limitItems.map((item) => {
            const pct = Math.min(100, Math.round((c.chars / item.max) * 100));
            const over = c.chars > item.max;
            return (
              <li key={item.label} className="rounded-xl border border-zinc-200 dark:border-dark-border p-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-dark-text dark:text-white">{item.label} <span className="text-zinc-600">({item.max})</span></span>
                  <span className={over ? "text-peach font-semibold" : "text-zinc-600"}>{over ? l.over(c.chars - item.max) : l.remaining(item.max - c.chars)}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-100 dark:bg-white/5">
                  <div className={`h-full rounded-full ${over ? "bg-peach" : "bg-indigo"}`} style={{ width: `${pct}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
