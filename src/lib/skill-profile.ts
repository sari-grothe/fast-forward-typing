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
// Three rounds per locale: common words, a full-alphabet pangram, and
// language specials (umlauts/accents, caps, punctuation). Together they
// touch every letter so the per-key profile has data everywhere.

export const placementTexts: Record<Locale, string[]> = {
  de: [
    "die zeit und der tag sind gut wir machen das jetzt einfach weiter",
    "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.",
    "Zwölf Boxkämpfer jagen Viktor über den großen Deich. Schöne Grüße!",
  ],
  en: [
    "the time and the day are good we make this work and move on now",
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs. Well done, keep going!",
  ],
  fr: [
    "le temps et le jour sont bons nous faisons cela ensemble et encore",
    "Portez ce vieux whisky au juge blond qui fume.",
    "Voyez le brick géant que j'examine près du wharf. Voilà, ça marche très bien!",
  ],
};
