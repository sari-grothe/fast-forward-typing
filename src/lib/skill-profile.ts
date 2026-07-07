import type { Locale } from "@/i18n/config";
import type { Lesson } from "./curriculum/types";

// --- Per-key skill model ---------------------------------------------------
// Built from placement-test keystrokes: every expected character gets
// attempts, errors and latency (time from previous correct stroke to this
// one). Latency relative to the person's own average separates "sitzt"
// from "wackelt" - absolute thresholds would punish careful beginners.

export type KeyStat = {
  attempts: number;
  errors: number;
  latencySum: number;
  latencyCount: number;
};

export type KeyLevel = "strong" | "medium" | "weak" | "untested";

export type PlacementResult = {
  wpm: number;
  accuracy: number;
  recommendedLessonId: number;
  /** Lessons the placement SUGGESTS you can skip (keys already strong).
   *  A suggestion, not a verdict: the placement measures output, not
   *  technique, so the user always keeps the choice to warm up anyway. */
  suggestedSkipLessonIds: number[];
  huntAndPeck: boolean;
  completedAt: string;
};

export type SkillProfile = {
  version: 1;
  locale: Locale;
  keys: Record<string, KeyStat>;
  placement?: PlacementResult;
  updatedAt: string;
};

export function createEmptyProfile(locale: Locale): SkillProfile {
  return { version: 1, locale, keys: {}, updatedAt: new Date().toISOString() };
}

/** Record one expected character: was it hit correctly, and how fast. */
export function recordKeystroke(
  profile: SkillProfile,
  expected: string,
  correct: boolean,
  latencyMs: number | null
): void {
  const key = expected.toLowerCase();
  const stat = (profile.keys[key] ??= { attempts: 0, errors: 0, latencySum: 0, latencyCount: 0 });
  stat.attempts += 1;
  if (!correct) stat.errors += 1;
  // Ignore pauses (thinking, looking away): latencies above 2s carry no
  // signal about the key itself.
  if (correct && latencyMs !== null && latencyMs > 0 && latencyMs <= 2000) {
    stat.latencySum += latencyMs;
    stat.latencyCount += 1;
  }
  profile.updatedAt = new Date().toISOString();
}

function meanLatency(profile: SkillProfile): number {
  let sum = 0;
  let count = 0;
  for (const stat of Object.values(profile.keys)) {
    sum += stat.latencySum;
    count += stat.latencyCount;
  }
  return count > 0 ? sum / count : 0;
}

export function classifyKey(profile: SkillProfile, key: string): KeyLevel {
  const stat = profile.keys[key.toLowerCase()];
  if (!stat || stat.attempts < 2) return "untested";
  const accuracy = 1 - stat.errors / stat.attempts;
  const avg = stat.latencyCount > 0 ? stat.latencySum / stat.latencyCount : Infinity;
  const overall = meanLatency(profile);
  const relative = overall > 0 ? avg / overall : Infinity;

  if (accuracy >= 0.9 && relative <= 1.35) return "strong";
  if (accuracy < 0.75 || relative > 1.9) return "weak";
  return "medium";
}

/** Letters (not space/modifiers) a lesson requires. */
function lessonLetterKeys(lesson: Lesson): string[] {
  return lesson.allKeys.filter((k) => k.length === 1 && k !== " ");
}

// Hunt-and-peck signature: uniformly slow strokes across ALL keys.
// ~450ms average per keystroke is roughly 26 WPM raw - below that,
// the person is searching for keys, and there is no touch-typing base
// to build on. The honest recommendation then is: start at lesson 0.
const HUNT_AND_PECK_MEAN_LATENCY_MS = 450;

export function evaluatePlacement(
  profile: SkillProfile,
  lessons: Lesson[],
  wpm: number,
  accuracy: number
): PlacementResult {
  const huntAndPeck = meanLatency(profile) > HUNT_AND_PECK_MEAN_LATENCY_MS;

  const suggestedSkipLessonIds: number[] = [];
  let recommendedLessonId = 0;

  if (!huntAndPeck) {
    for (const lesson of lessons) {
      const keys = lessonLetterKeys(lesson);
      const alreadyStrong = keys.length > 0 && keys.every((k) => classifyKey(profile, k) === "strong");
      if (alreadyStrong) {
        suggestedSkipLessonIds.push(lesson.id);
      } else {
        recommendedLessonId = lesson.id;
        break;
      }
    }
    // Edge case: every lesson looks strong - recommend the first speed lesson.
    if (suggestedSkipLessonIds.length === lessons.length) {
      recommendedLessonId = lessons.find((l) => l.phase === 8)?.id ?? lessons[lessons.length - 1].id;
    }
  }

  return {
    wpm,
    accuracy,
    recommendedLessonId,
    suggestedSkipLessonIds,
    huntAndPeck,
    completedAt: new Date().toISOString(),
  };
}

/** Group tested keys by level for the results overview. */
export function groupKeysByLevel(profile: SkillProfile): Record<Exclude<KeyLevel, "untested">, string[]> {
  const groups: Record<Exclude<KeyLevel, "untested">, string[]> = {
    strong: [],
    medium: [],
    weak: [],
  };
  for (const key of Object.keys(profile.keys).sort()) {
    if (key === " ") continue;
    const level = classifyKey(profile, key);
    if (level !== "untested") groups[level].push(key);
  }
  return groups;
}

// --- Placement test texts ---------------------------------------------------
// Real, adult-appropriate prose - not contrived pangrams. Natural text
// measures the frequent, decision-relevant keys (home/top/bottom rows)
// far more reliably than a pangram touching each rare letter once, and
// it respects the reader. Rounds go from everyday flow -> varied
// sentences -> language specials (umlauts/accents, caps, punctuation).
// Genuinely rare keys (q, x, y) that natural prose barely uses stay
// "untested", which just means their lesson isn't suggested for skipping -
// the safe default.

export const placementTexts: Record<Locale, string[]> = {
  de: [
    "Die meisten Menschen tippen jeden Tag, ohne es je richtig gelernt zu haben. Sauberes Tippen ist eine Fähigkeit wie jede andere: messbar und trainierbar.",
    "Ob kurze Notiz, lange E-Mail oder komplexer Bericht - flüssiges Schreiben gehört zu den Fähigkeiten, die im Job den größten Unterschied machen.",
    "Mal ehrlich: Was würdest du mit einer zusätzlichen Stunde pro Tag anfangen? Mit System und typischen Übungen gewöhnst du dir die großen Zeitfresser ab - exakt, Zeichen für Zeichen.",
  ],
  en: [
    "Most people type every day without ever learning it properly. Clean typing is a skill like any other: you can measure it and train it on the job.",
    "Whether it is a quick note, a long email, or a complex report, fluent typing keeps your thoughts from slipping while your hands catch up.",
    "Honestly, what would you do with an extra hour each day? With a clear system and the right practice, you win that time back - key by key, no puzzle.",
  ],
  fr: [
    "La plupart des gens tapent chaque jour sans l'avoir vraiment appris. Bien taper est une compétence comme une autre : mesurable et précieuse à ton travail.",
    "Note rapide, long e-mail ou rapport complexe - une frappe très fluide t'évite de perdre le fil, là où chaque seconde compte.",
    "Franchement, que ferais-tu d'une heure de plus par jour ? Avec un système clair et les bons exercices, tu gagnes ce temps - et ça change le quotidien.",
  ],
};
