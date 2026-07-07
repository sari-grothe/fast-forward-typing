"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  createTypingState,
  processKeystroke,
  getCharStatuses,
  type CharStatus,
} from "@/lib/typing-engine";
import {
  createEmptyProfile,
  recordKeystroke,
  evaluatePlacement,
  groupKeysByLevel,
  placementTexts,
  type SkillProfile,
  type PlacementResult,
} from "@/lib/skill-profile";
import { progressStore } from "@/lib/progress-store";
import { getLessons, lessonMeta, displayKey } from "@/lib/lessons";
import { Keyboard } from "./Keyboard";
import type { Locale } from "@/i18n/config";

const charStatusColors: Record<CharStatus, string> = {
  correct: "text-indigo",
  incorrect: "text-peach bg-peach/20",
  current: "text-dark-text dark:text-white bg-indigo/20 dark:bg-indigo/30 border-b-2 border-indigo",
  upcoming: "text-zinc-400 dark:text-zinc-500",
};

const i18n: Record<Locale, {
  roundLabel: string;
  of: string;
  roundNames: string[];
  startTyping: string;
  startHint: string;
  analyzing: string;
  resultTitle: string;
  wpmLabel: string;
  accuracyLabel: string;
  strongTitle: string;
  strongDesc: string;
  mediumTitle: string;
  mediumDesc: string;
  weakTitle: string;
  weakDesc: string;
  planTitle: string;
  planSkipped: (n: number) => string;
  planStart: (title: string) => string;
  huntAndPeckTitle: string;
  huntAndPeckText: string;
  startCta: string;
  viewPlanCta: string;
  redoCta: string;
}> = {
  de: {
    roundLabel: "Runde",
    of: "von",
    roundNames: ["Häufige Wörter", "Alle Buchstaben", "Umlaute + Zeichen"],
    startTyping: "Einfach lostippen",
    startHint: "Die erste Taste startet die Einstufung",
    analyzing: "Auswertung",
    resultTitle: "Deine Einstufung",
    wpmLabel: "WPM",
    accuracyLabel: "Genauigkeit",
    strongTitle: "Sitzt",
    strongDesc: "Diese Tasten triffst du sicher und schnell",
    mediumTitle: "Wackelt noch",
    mediumDesc: "Grundsätzlich da, aber langsamer oder mit Fehlern",
    weakTitle: "Braucht Training",
    weakDesc: "Hier verlierst du Zeit - genau das trainiert dein Plan",
    planTitle: "Dein Trainingsplan",
    planSkipped: (n) => `${n} Lektionen geprüft und übersprungen`,
    planStart: (title) => `Dein Kurs beginnt bei: ${title}`,
    huntAndPeckTitle: "Ehrliche Diagnose: Neustart lohnt sich",
    huntAndPeckText: "Du suchst die Tasten noch mit den Augen - dein Tempo kommt aus dem Kurzzeitgedächtnis, nicht aus den Fingern. Das ist keine Basis zum Ausbauen, sondern Muskelgedächtnis, das ersetzt wird. Die gute Nachricht: Mit System-Neustart erreichst du in 4 Wochen mehr, als Jahre Selbstsuche gebracht haben.",
    startCta: "Kurs starten",
    viewPlanCta: "Zum Trainingsplan",
    redoCta: "Einstufung wiederholen",
  },
  en: {
    roundLabel: "Round",
    of: "of",
    roundNames: ["Common words", "Full alphabet", "Caps + punctuation"],
    startTyping: "Just start typing",
    startHint: "Your first keystroke starts the assessment",
    analyzing: "Analyzing",
    resultTitle: "Your placement",
    wpmLabel: "WPM",
    accuracyLabel: "Accuracy",
    strongTitle: "Solid",
    strongDesc: "You hit these keys fast and reliably",
    mediumTitle: "Wobbly",
    mediumDesc: "Basically there, but slower or with errors",
    weakTitle: "Needs training",
    weakDesc: "This is where you lose time - exactly what your plan targets",
    planTitle: "Your training plan",
    planSkipped: (n) => `${n} lessons verified and skipped`,
    planStart: (title) => `Your course starts at: ${title}`,
    huntAndPeckTitle: "Honest diagnosis: a restart pays off",
    huntAndPeckText: "You still find keys with your eyes - your speed comes from short-term memory, not your fingers. That's not a base to build on; it's muscle memory that gets replaced. The good news: with a systematic restart, 4 weeks gets you further than years of hunting ever did.",
    startCta: "Start course",
    viewPlanCta: "View training plan",
    redoCta: "Redo placement",
  },
  fr: {
    roundLabel: "Manche",
    of: "sur",
    roundNames: ["Mots courants", "Alphabet complet", "Accents + signes"],
    startTyping: "Commence à taper",
    startHint: "La première touche lance l'évaluation",
    analyzing: "Analyse",
    resultTitle: "Ton évaluation",
    wpmLabel: "MPM",
    accuracyLabel: "Précision",
    strongTitle: "En place",
    strongDesc: "Ces touches, tu les trouves vite et sans faute",
    mediumTitle: "Fragile",
    mediumDesc: "Présent, mais plus lent ou avec des erreurs",
    weakTitle: "À travailler",
    weakDesc: "C'est ici que tu perds du temps - exactement ce que ton plan cible",
    planTitle: "Ton plan d'entraînement",
    planSkipped: (n) => `${n} leçons vérifiées et sautées`,
    planStart: (title) => `Ton cours commence à : ${title}`,
    huntAndPeckTitle: "Diagnostic honnête : repartir de zéro paie",
    huntAndPeckText: "Tu cherches encore les touches des yeux - ta vitesse vient de la mémoire à court terme, pas des doigts. Ce n'est pas une base à développer, c'est une habitude à remplacer. La bonne nouvelle : avec un redémarrage méthodique, 4 semaines t'amènent plus loin que des années de recherche à l'aveugle.",
    startCta: "Commencer le cours",
    viewPlanCta: "Voir le plan",
    redoCta: "Refaire l'évaluation",
  },
};

type RoundStats = { chars: number; ms: number; errors: number };

export function PlacementTest({ locale }: { locale: Locale }) {
  const texts = placementTexts[locale] ?? placementTexts.en;
  const l = i18n[locale] ?? i18n.en;

  const [round, setRound] = useState(0);
  const [state, setState] = useState(() => createTypingState(texts[0]));
  const [pressedKey, setPressedKey] = useState<string | undefined>();
  const [shake, setShake] = useState(false);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [profile, setProfile] = useState<SkillProfile | null>(null);

  const profileRef = useRef<SkillProfile>(createEmptyProfile(locale));
  const lastStrokeAt = useRef<number | null>(null);
  const roundStats = useRef<RoundStats[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, [round]);

  const finishTest = useCallback(() => {
    const stats = roundStats.current;
    const totalChars = stats.reduce((s, r) => s + r.chars, 0);
    const totalMs = stats.reduce((s, r) => s + r.ms, 0);
    const totalErrors = stats.reduce((s, r) => s + r.errors, 0);
    const minutes = totalMs / 60000;
    const wpm = minutes > 0 ? Math.round(totalChars / 5 / minutes) : 0;
    const strokes = totalChars + totalErrors;
    const accuracy = strokes > 0 ? Math.round((totalChars / strokes) * 100) : 100;

    const lessons = getLessons(locale);
    const placement = evaluatePlacement(profileRef.current, lessons, wpm, accuracy);
    profileRef.current.placement = placement;
    progressStore.saveProfile(profileRef.current);
    setProfile({ ...profileRef.current });
    setResult(placement);
  }, [locale]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (state.isComplete || result) return;
      if (e.key === "Tab" || e.key === "Escape") return;
      e.preventDefault();
      if (e.key.length !== 1) return;

      setPressedKey(e.key);
      setTimeout(() => setPressedKey(undefined), 150);

      const now = Date.now();
      const expected = state.text[state.position];
      const correct = e.key === expected;
      const latency = lastStrokeAt.current !== null ? now - lastStrokeAt.current : null;
      recordKeystroke(profileRef.current, expected, correct, latency);
      if (correct) lastStrokeAt.current = now;

      setState((prev) => {
        const next = processKeystroke(prev, e.key);
        if (next.position === prev.position) {
          setShake(true);
          setTimeout(() => setShake(false), 300);
        }
        if (next.isComplete) {
          roundStats.current.push({
            chars: next.text.length,
            ms: (next.endTime ?? now) - (next.startTime ?? now),
            errors: next.errors.length,
          });
          if (round + 1 < texts.length) {
            // Brief pause, then next round.
            setTimeout(() => {
              lastStrokeAt.current = null;
              setRound(round + 1);
              setState(createTypingState(texts[round + 1]));
            }, 600);
          } else {
            setTimeout(finishTest, 400);
          }
        }
        return next;
      });
    },
    [state, result, round, texts, finishTest]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // --- Results view ---------------------------------------------------------
  if (result && profile) {
    const groups = groupKeysByLevel(profile);
    const lessons = getLessons(locale);
    const startMeta = lessonMeta[locale]?.[result.recommendedLessonId] ?? lessonMeta.en[result.recommendedLessonId];
    const skipped = result.masteredLessonIds.length;

    return (
      <div className="space-y-6 animate-fade-up">
        {/* Score */}
        <div className="rounded-2xl border-2 border-indigo/20 bg-gradient-to-b from-white to-lavender/30 dark:from-dark-surface dark:to-dark p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-dark-text dark:text-white">{l.resultTitle}</h2>
          <div className="flex items-center justify-center gap-10">
            <div>
              <p className="text-4xl font-extrabold text-indigo">{result.wpm}</p>
              <p className="text-xs text-zinc-400 mt-1">{l.wpmLabel}</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-peach">{result.accuracy}%</p>
              <p className="text-xs text-zinc-400 mt-1">{l.accuracyLabel}</p>
            </div>
          </div>
        </div>

        {/* Hunt-and-peck diagnosis */}
        {result.huntAndPeck && (
          <div className="rounded-xl border border-peach/40 bg-peach/10 dark:bg-peach/5 p-5">
            <p className="font-semibold text-dark-text dark:text-white mb-1.5">{l.huntAndPeckTitle}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{l.huntAndPeckText}</p>
          </div>
        )}

        {/* Key groups */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {([
            { keys: groups.strong, title: l.strongTitle, desc: l.strongDesc, chip: "bg-indigo/10 text-indigo border-indigo/20" },
            { keys: groups.medium, title: l.mediumTitle, desc: l.mediumDesc, chip: "bg-electric-yellow/20 text-dark-text dark:text-electric-yellow border-electric-yellow/40" },
            { keys: groups.weak, title: l.weakTitle, desc: l.weakDesc, chip: "bg-peach/15 text-peach border-peach/30" },
          ] as const).map((group) => (
            <div key={group.title} className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-4">
              <p className="font-semibold text-sm text-dark-text dark:text-white">{group.title}</p>
              <p className="text-xs text-zinc-400 mt-0.5 mb-3">{group.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.keys.length === 0 ? (
                  <span className="text-xs text-zinc-400">-</span>
                ) : (
                  group.keys.map((k) => (
                    <kbd key={k} className={`inline-flex items-center justify-center min-w-7 h-7 px-1.5 rounded-md border text-sm font-mono font-semibold ${group.chip}`}>
                      {displayKey(k)}
                    </kbd>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Plan */}
        <div className="rounded-xl border border-indigo/20 bg-indigo/5 p-5 space-y-2">
          <p className="font-semibold text-dark-text dark:text-white">{l.planTitle}</p>
          {skipped > 0 && (
            <p className="text-sm text-zinc-600 dark:text-zinc-300">✓ {l.planSkipped(skipped)}</p>
          )}
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {l.planStart(`${startMeta?.title ?? `Lektion ${result.recommendedLessonId}`}`)}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/${locale}/lessons/${result.recommendedLessonId}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {l.startCta} <span className="text-electric-yellow group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
            </Link>
            <Link
              href={`/${locale}/lessons`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-dark-border px-6 py-3 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-dark-surface transition-colors"
            >
              {l.viewPlanCta}
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-zinc-400 hover:text-indigo transition-colors"
            >
              {l.redoCta}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Test view -------------------------------------------------------------
  const charStatuses = getCharStatuses(state);
  const hasStarted = state.startTime !== null;
  const nextExpected = state.text[state.position];

  return (
    <div className="space-y-4">
      {/* Round header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {l.roundLabel} {round + 1} {l.of} {texts.length}: {l.roundNames[round]}
          </span>
          <div className="flex gap-1">
            {texts.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < round ? "bg-indigo" : i === round ? "bg-indigo/40" : "bg-zinc-200 dark:bg-dark-border"
                }`}
              />
            ))}
          </div>
        </div>
        {!hasStarted && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500">{l.startHint}</span>
        )}
      </div>

      {/* Typing area */}
      <div
        ref={containerRef}
        tabIndex={0}
        className="relative rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-8 text-lg sm:text-xl leading-relaxed font-mono focus:outline-none focus:border-indigo/40 focus:ring-2 focus:ring-indigo/20 cursor-text select-none"
      >
        <p className="break-words">
          {state.text.split("").map((char, i) => (
            <span key={i}>
              {charStatuses[i] === "current" && !hasStarted && (
                <span className="inline-block w-0.5 h-[1.1em] bg-indigo animate-cursor-blink align-middle -mt-1 mr-px" />
              )}
              <span
                className={`${charStatusColors[charStatuses[i]]} ${
                  charStatuses[i] === "current" && shake ? "animate-shake text-peach border-peach" : ""
                }`}
              >
                {char}
              </span>
            </span>
          ))}
        </p>
      </div>

      {/* Keyboard */}
      <Keyboard
        activeKey={state.isComplete ? undefined : nextExpected}
        pressedKey={pressedKey}
        showFingers={true}
        locale={locale}
      />
    </div>
  );
}
