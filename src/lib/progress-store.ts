import type { Locale } from "@/i18n/config";
import type { SkillProfile } from "./skill-profile";

// Progress persistence behind a small interface so the storage backend can
// be swapped without touching components. Today: localStorage (no account
// needed, works instantly). Next: a Supabase adapter implementing the same
// interface once the Supabase project + env vars exist (see
// docs/golive-checklist.md) - then localStorage becomes the offline cache.

export type LessonRecord = {
  lessonId: number;
  wpm: number;
  accuracy: number;
  completedAt: string;
};

export type ProgressStore = {
  getProfile(locale: Locale): SkillProfile | null;
  saveProfile(profile: SkillProfile): void;
  getLessonRecords(locale: Locale): Record<number, LessonRecord>;
  saveLessonRecord(locale: Locale, record: LessonRecord): void;
};

const PROFILE_KEY = (locale: Locale) => `fft.profile.${locale}.v1`;
const LESSONS_KEY = (locale: Locale) => `fft.lessons.${locale}.v1`;

function safeRead<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked (private mode) - progress simply isn't
    // persisted; the app keeps working.
  }
}

export const localProgressStore: ProgressStore = {
  getProfile(locale) {
    return safeRead<SkillProfile>(PROFILE_KEY(locale));
  },
  saveProfile(profile) {
    safeWrite(PROFILE_KEY(profile.locale), profile);
  },
  getLessonRecords(locale) {
    return safeRead<Record<number, LessonRecord>>(LESSONS_KEY(locale)) ?? {};
  },
  saveLessonRecord(locale, record) {
    const all = this.getLessonRecords(locale);
    const existing = all[record.lessonId];
    // Keep the best run per lesson (completion always wins over nothing;
    // among completions, higher WPM wins).
    if (!existing || record.wpm >= existing.wpm) {
      all[record.lessonId] = record;
      safeWrite(LESSONS_KEY(locale), all);
    }
  },
};

export const progressStore: ProgressStore = localProgressStore;
