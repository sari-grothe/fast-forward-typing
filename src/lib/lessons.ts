import type { Locale } from "@/i18n/config";
import type { Finger, Drill, Lesson, LessonMeta } from "./curriculum/types";
import { lessons as deLessons, meta as deMeta } from "./curriculum/de";
import { lessons as enLessons, meta as enMeta } from "./curriculum/en";
import { lessons as frLessons, meta as frMeta } from "./curriculum/fr";

export type { Finger, Drill, Lesson, LessonMeta };

// --- Finger mapping, layout-aware ---------------------------------------
// Base map is QWERTY. DE (QWERTZ) and FR (AZERTY) override the keys that
// sit in different physical positions on those layouts.

const qwertyFingerMap: Record<string, Finger> = {
  // Left pinky
  q: "left-pinky", a: "left-pinky", z: "left-pinky",
  "1": "left-pinky", "!": "left-pinky",
  // Left ring
  w: "left-ring", s: "left-ring", x: "left-ring",
  "2": "left-ring", "@": "left-ring",
  // Left middle
  e: "left-middle", d: "left-middle", c: "left-middle",
  "3": "left-middle", "#": "left-middle",
  // Left index
  r: "left-index", f: "left-index", v: "left-index",
  t: "left-index", g: "left-index", b: "left-index",
  "4": "left-index", "5": "left-index",
  // Right index
  y: "right-index", u: "right-index", j: "right-index", m: "right-index",
  h: "right-index", n: "right-index",
  "6": "right-index", "7": "right-index",
  // Right middle
  i: "right-middle", k: "right-middle", ",": "right-middle",
  "8": "right-middle",
  // Right ring
  o: "right-ring", l: "right-ring", ".": "right-ring",
  "9": "right-ring",
  // Right pinky
  p: "right-pinky", ";": "right-pinky", "/": "right-pinky",
  "ö": "right-pinky", "ü": "right-pinky", "-": "right-pinky",
  "0": "right-pinky", "'": "right-pinky", "\"": "right-pinky",
  ":": "right-pinky", "?": "right-pinky",
  // Thumb
  " ": "thumb",
};

// QWERTZ: z sits in the top row (QWERTY y position), y in the bottom row
// (QWERTY z position). Umlauts and ß live on the right pinky.
const qwertzOverrides: Record<string, Finger> = {
  z: "right-index",
  y: "left-pinky",
  "ö": "right-pinky",
  "ä": "right-pinky",
  "ü": "right-pinky",
  "ß": "right-pinky",
};

// AZERTY: a/q swapped, z/w swapped, m on the home row right pinky,
// accents as direct keys on the number row, shifted punctuation row.
const azertyOverrides: Record<string, Finger> = {
  a: "left-pinky",
  q: "left-pinky",
  z: "left-ring",
  w: "left-pinky",
  m: "right-pinky",
  "é": "left-ring",
  "è": "right-index",
  "ç": "right-ring",
  "à": "right-pinky",
  ",": "right-index",
  ";": "right-middle",
  ":": "right-ring",
  "!": "right-pinky",
  "'": "left-index",
  "-": "right-index",
};

const fingerMaps: Record<Locale, Record<string, Finger>> = {
  en: qwertyFingerMap,
  de: { ...qwertyFingerMap, ...qwertzOverrides },
  fr: { ...qwertyFingerMap, ...azertyOverrides },
};

export function getFingerForKey(key: string, locale: Locale): Finger | undefined {
  return fingerMaps[locale]?.[key.toLowerCase()] ?? fingerMaps.en[key.toLowerCase()];
}

/** Uppercase a key for display. ß stays ß - toUpperCase would turn it into "SS". */
export function displayKey(key: string): string {
  return key === "ß" ? "ß" : key.toUpperCase();
}

/** @deprecated QWERTY-only. Use getFingerForKey(key, locale) instead. */
export const fingerForKey = qwertyFingerMap;

export const fingerColors: Record<Finger, string> = {
  "left-pinky": "#ef4444",
  "left-ring": "#f97316",
  "left-middle": "#eab308",
  "left-index": "#22c55e",
  "right-index": "#06b6d4",
  "right-middle": "#3b82f6",
  "right-ring": "#8b5cf6",
  "right-pinky": "#ec4899",
  thumb: "#6b7280",
};

// --- Curricula, one per locale -------------------------------------------

const curricula: Record<Locale, Lesson[]> = {
  de: deLessons,
  en: enLessons,
  fr: frLessons,
};

export const lessonMeta: Record<Locale, Record<number, LessonMeta>> = {
  de: deMeta,
  en: enMeta,
  fr: frMeta,
};

export function getLessons(locale: Locale): Lesson[] {
  return curricula[locale] ?? curricula.en;
}

export function getLesson(id: number, locale: Locale): Lesson | undefined {
  return getLessons(locale).find((l) => l.id === id);
}

export function getNextLesson(id: number, locale: Locale): Lesson | undefined {
  const list = getLessons(locale);
  const idx = list.findIndex((l) => l.id === id);
  if (idx === -1 || idx === list.length - 1) return undefined;
  return list[idx + 1];
}

export const phaseNames: Record<Locale, Record<number, string>> = {
  de: {
    0: "Einführung",
    1: "Grundreihe",
    2: "Obere Reihe",
    3: "Untere Reihe",
    4: "Häufige Wörter",
    5: "Großschreibung",
    6: "Satzzeichen",
    7: "Sätze + Absätze",
    8: "Geschwindigkeit",
  },
  en: {
    0: "Introduction",
    1: "Home Row",
    2: "Top Row",
    3: "Bottom Row",
    4: "Common Words",
    5: "Capitalization",
    6: "Punctuation",
    7: "Sentences + Paragraphs",
    8: "Speed + Fluency",
  },
  fr: {
    0: "Introduction",
    1: "Rangée de base",
    2: "Rangée supérieure",
    3: "Rangée inférieure",
    4: "Mots courants",
    5: "Majuscules",
    6: "Ponctuation",
    7: "Phrases + Paragraphes",
    8: "Vitesse + Fluidité",
  },
};
