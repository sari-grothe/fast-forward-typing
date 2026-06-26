"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TypingArea } from "@/components/typing/TypingArea";
import { getRandomText } from "@/lib/sample-texts";
import type { TypingState } from "@/lib/typing-engine";
import { calculateWPM, calculateAccuracy } from "@/lib/typing-engine";
import type { Locale } from "@/i18n/config";
import { FAQ } from "@/components/FAQ";
import { speedTestFAQ } from "@/lib/faq-data";

type Props = {
  locale: Locale;
};

const funFacts: Record<Locale, (wpm: number) => string> = {
  de: (wpm) => {
    if (wpm >= 80) return "Journalisten-Tempo auf einer Pressekonferenz.";
    if (wpm >= 60) return "Schneller als ein professioneller Telegrafist im Jahr 1920.";
    if (wpm >= 40) return "Das ist der weltweite Durchschnitt. Solide Basis.";
    return "Fun Fact: Die erste Schreibmaschine hatte die Buchstaben alphabetisch sortiert. Du tippst bereits auf dem besseren Layout.";
  },
  en: (wpm) => {
    if (wpm >= 80) return "That's journalist speed at a live press conference.";
    if (wpm >= 60) return "Faster than a professional telegraph operator in 1920.";
    if (wpm >= 40) return "That's the global average. Solid foundation.";
    return "Fun fact: the first typewriter had keys in alphabetical order. You're already using the better layout.";
  },
  fr: (wpm) => {
    if (wpm >= 80) return "C'est la vitesse d'un journaliste en conférence de presse.";
    if (wpm >= 60) return "Plus rapide qu'un télégraphiste professionnel en 1920.";
    if (wpm >= 40) return "C'est la moyenne mondiale. Une base solide.";
    return "Fun fact : la première machine à écrire avait les touches dans l'ordre alphabétique. Tu utilises déjà le meilleur clavier.";
  },
};

const durations = [60, 120, 300] as const;

type BenchmarkTier = {
  label: string;
  percentile: string;
  comparison: string;
};

function getBenchmarkTier(wpm: number, locale: Locale): BenchmarkTier {
  const tiers: Record<Locale, { min: number; label: string; percentile: string; comparison: string }[]> = {
    de: [
      { min: 100, label: "Elite", percentile: "Top 5%", comparison: "Schneller als 95% aller Menschen" },
      { min: 81, label: "Sehr schnell", percentile: "Top 10%", comparison: "Schneller als 90% aller Menschen" },
      { min: 61, label: "Schnell", percentile: "Top 25%", comparison: "Schneller als 75% aller Menschen" },
      { min: 41, label: "Gut", percentile: "Top 50%", comparison: "Schneller als die Hälfte aller Menschen" },
      { min: 26, label: "Durchschnitt", percentile: "Durchschnitt", comparison: "Auf dem Level der meisten Büroangestellten" },
      { min: 0, label: "Anfänger", percentile: "Untere 25%", comparison: "Hier starten die meisten - der Tippkurs bringt dich weiter" },
    ],
    en: [
      { min: 100, label: "Elite", percentile: "Top 5%", comparison: "Faster than 95% of all people" },
      { min: 81, label: "Very fast", percentile: "Top 10%", comparison: "Faster than 90% of all people" },
      { min: 61, label: "Fast", percentile: "Top 25%", comparison: "Faster than 75% of all people" },
      { min: 41, label: "Good", percentile: "Top 50%", comparison: "Faster than half of all people" },
      { min: 26, label: "Average", percentile: "Average", comparison: "On par with most office workers" },
      { min: 0, label: "Beginner", percentile: "Bottom 25%", comparison: "This is where most people start - the course will get you further" },
    ],
    fr: [
      { min: 100, label: "Elite", percentile: "Top 5%", comparison: "Plus rapide que 95% des gens" },
      { min: 81, label: "Tres rapide", percentile: "Top 10%", comparison: "Plus rapide que 90% des gens" },
      { min: 61, label: "Rapide", percentile: "Top 25%", comparison: "Plus rapide que 75% des gens" },
      { min: 41, label: "Bon", percentile: "Top 50%", comparison: "Plus rapide que la moitie des gens" },
      { min: 26, label: "Moyen", percentile: "Moyenne", comparison: "Au niveau de la plupart des employes de bureau" },
      { min: 0, label: "Debutant", percentile: "Quart inferieur", comparison: "C'est la que la plupart commencent - le cours t'amenera plus loin" },
    ],
  };
  const tier = tiers[locale].find((t) => wpm >= t.min)!;
  return tier;
}

type ProfessionMatch = { profession: string; wpmRange: string };

function getProfessionMatch(wpm: number, locale: Locale): ProfessionMatch {
  const professions: Record<Locale, { min: number; max: number; profession: string; wpmRange: string }[]> = {
    de: [
      { min: 90, max: 999, profession: "Gerichtsstenograf", wpmRange: "90-100+" },
      { min: 70, max: 89, profession: "Journalist / Anwaltssekretariat", wpmRange: "70-100" },
      { min: 55, max: 69, profession: "Assistenz der Geschäftsführung", wpmRange: "55-70" },
      { min: 45, max: 54, profession: "Sachbearbeitung / Dateneingabe", wpmRange: "45-60" },
      { min: 40, max: 44, profession: "Allgemeine Büroarbeit", wpmRange: "40-55" },
      { min: 0, max: 39, profession: "Unter dem Büro-Minimum", wpmRange: "40+" },
    ],
    en: [
      { min: 90, max: 999, profession: "Court reporter territory", wpmRange: "90-100+" },
      { min: 70, max: 89, profession: "Journalist / legal secretary", wpmRange: "70-100" },
      { min: 55, max: 69, profession: "Executive assistant", wpmRange: "55-70" },
      { min: 45, max: 54, profession: "Data entry / office admin", wpmRange: "45-60" },
      { min: 40, max: 44, profession: "General office work", wpmRange: "40-55" },
      { min: 0, max: 39, profession: "Below office minimum", wpmRange: "40+" },
    ],
    fr: [
      { min: 90, max: 999, profession: "Stenographe judiciaire", wpmRange: "90-100+" },
      { min: 70, max: 89, profession: "Journaliste / secretaire juridique", wpmRange: "70-100" },
      { min: 55, max: 69, profession: "Assistant de direction", wpmRange: "55-70" },
      { min: 45, max: 54, profession: "Saisie de donnees / admin", wpmRange: "45-60" },
      { min: 40, max: 44, profession: "Travail de bureau general", wpmRange: "40-55" },
      { min: 0, max: 39, profession: "Sous le minimum bureau", wpmRange: "40+" },
    ],
  };
  const match = professions[locale].find((p) => wpm >= p.min && wpm <= p.max)!;
  return match;
}


const i18n: Record<Locale, {
  title: string;
  subtitle: (mins: number) => string;
  newTest: string;
  minLabel: string;
  resultsTitle: string;
  speed: string;
  accuracy: string;
  wpmUnit: string;
  errors: string;
  benchmarkSection: string;
  benchmarkYou: string;
  benchmarkAvg: string;
  benchmarkPro: string;
  benchmarkMatches: string;
  focusSection: string;
  focusTitle: string;
  focusNudge: (count: number) => string;
  focusPerfect: string;
  nextStepSection: string;
  trainingTitle: string;
  trainingDesc: string;
  trainingCta: string;
  certTitle: string;
  certDesc: string;
  certCta: string;
  tryAgain: string;
  shareResult: string;
  shareCopied: string;
}> = {
  de: {
    title: "Tipptest",
    subtitle: (mins) => `${mins} ${mins === 1 ? "Minute" : "Minuten"}. Tipp so schnell und genau wie möglich.`,
    newTest: "Neuer Text",
    minLabel: "Min",
    resultsTitle: "Ergebnis",
    speed: "Wörter pro Minute",
    accuracy: "Genauigkeit",
    wpmUnit: "WPM",
    errors: "Fehler",
    benchmarkSection: "Dein Vergleich",
    benchmarkYou: "Du",
    benchmarkAvg: "Durchschnitt",
    benchmarkPro: "Profi",
    benchmarkMatches: "Entspricht dem Level",
    focusSection: "Was wir beim Test gesehen haben",
    focusTitle: "Dein Fokus fürs Training",
    focusNudge: (n) => `${n} ${n === 1 ? "Taste braucht" : "Tasten brauchen"} Übung - der Tippkurs trainiert genau diese.`,
    focusPerfect: "Keine Fehler - perfekt getippt. Bereit für die nächste Stufe?",
    nextStepSection: "Dein nächster Schritt",
    trainingTitle: "Tipptraining starten",
    trainingDesc: "15 Min. am Tag, 4 Wochen. Danach tippst du mit 10 Fingern, ohne auf die Tastatur zu schauen.",
    trainingCta: "Kurs starten",
    certTitle: "Zertifikat holen",
    certDesc: "Mach dein Tempo offiziell. Für CV, LinkedIn oder Arbeitgeber.",
    certCta: "Zertifikat - 5 €",
    tryAgain: "Nochmal tippen",
    shareResult: "Ergebnis teilen",
    shareCopied: "Kopiert!",
  },
  en: {
    title: "Typing Test",
    subtitle: (mins) => `${mins} ${mins === 1 ? "minute" : "minutes"}. Type as fast and accurately as you can.`,
    newTest: "New text",
    minLabel: "min",
    resultsTitle: "Your result",
    speed: "Words per minute",
    accuracy: "Accuracy",
    wpmUnit: "WPM",
    errors: "Errors",
    benchmarkSection: "How you compare",
    benchmarkYou: "You",
    benchmarkAvg: "Average",
    benchmarkPro: "Pro",
    benchmarkMatches: "Matches the level of",
    focusSection: "What we spotted during your test",
    focusTitle: "Your training focus",
    focusNudge: (n) => `${n} ${n === 1 ? "key needs" : "keys need"} practice - the typing course targets exactly these.`,
    focusPerfect: "Zero errors - perfectly typed. Ready for the next level?",
    nextStepSection: "Your next step",
    trainingTitle: "Start the typing course",
    trainingDesc: "15 min a day, 4 weeks. After that, you'll touch type without looking at the keyboard.",
    trainingCta: "Start course",
    certTitle: "Get your certificate",
    certDesc: "Make your speed official. For your CV, LinkedIn, or employers.",
    certCta: "Certificate - 5 €",
    tryAgain: "Try again",
    shareResult: "Share result",
    shareCopied: "Copied!",
  },
  fr: {
    title: "Test de frappe",
    subtitle: (mins) => `${mins} ${mins === 1 ? "minute" : "minutes"}. Tape aussi vite et précisément que possible.`,
    newTest: "Nouveau texte",
    minLabel: "min",
    resultsTitle: "Ton résultat",
    speed: "Mots par minute",
    accuracy: "Précision",
    wpmUnit: "MPM",
    errors: "Erreurs",
    benchmarkSection: "Ton classement",
    benchmarkYou: "Toi",
    benchmarkAvg: "Moyenne",
    benchmarkPro: "Pro",
    benchmarkMatches: "Correspond au niveau de",
    focusSection: "Ce qu'on a repéré pendant ton test",
    focusTitle: "Ton focus pour l'entraînement",
    focusNudge: (n) => `${n} ${n === 1 ? "touche a besoin" : "touches ont besoin"} de pratique - le cours cible exactement celles-ci.`,
    focusPerfect: "Zéro erreur - parfaitement tapé. Prêt pour le niveau suivant ?",
    nextStepSection: "Ta prochaine étape",
    trainingTitle: "Commencer le cours",
    trainingDesc: "15 min par jour, 4 semaines. Après, tu taperas sans regarder le clavier.",
    trainingCta: "Commencer le cours",
    certTitle: "Obtenir ton certificat",
    certDesc: "Rends ta vitesse officielle. Pour ton CV, LinkedIn ou employeurs.",
    certCta: "Certificat - 5 €",
    tryAgain: "Réessayer",
    shareResult: "Partager le résultat",
    shareCopied: "Copié !",
  },
};

export function SpeedTest({ locale }: Props) {
  const [seconds, setSeconds] = useState<(typeof durations)[number]>(60);
  const [text, setText] = useState(() => getRandomText(locale, 60));
  const [result, setResult] = useState<TypingState | null>(null);
  const [copied, setCopied] = useState(false);

  const handleComplete = useCallback((state: TypingState) => {
    setResult(state);
  }, []);

  function handleNewText() {
    setText(getRandomText(locale, seconds));
    setResult(null);
  }

  function handleDuration(s: (typeof durations)[number]) {
    setSeconds(s);
    setText(getRandomText(locale, s));
    setResult(null);
  }

  const l = i18n[locale];
  const mins = seconds / 60;
  const wpm = result ? calculateWPM(result) : 0;
  const accuracy = result ? calculateAccuracy(result) : 0;

  if (result) {
    const weakKeys = Object.entries(result.errorsByKey)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
    const tier = getBenchmarkTier(wpm, locale);
    const profession = getProfessionMatch(wpm, locale);
    const barPercent = Math.min(Math.max((wpm / 130) * 100, 5), 100);
    const avgPercent = (42 / 130) * 100;
    const proPercent = (80 / 130) * 100;

    return (
      <div className="space-y-12 pb-8">
        {/* --- Section 1: Result headline --- */}
        <div className="text-center space-y-4 pt-6">
          <div className="text-5xl">&#9889;</div>
          <h2 className="text-3xl sm:text-4xl font-bold">{l.resultsTitle}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-lg mx-auto">{funFacts[locale](wpm)}</p>
        </div>

        {/* --- Section 2: WPM + Accuracy big cards --- */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-gradient-to-br from-indigo to-indigo/80 p-6 sm:p-8 text-center text-white shadow-xl shadow-indigo/20 animate-scale-in">
            <p className="text-6xl sm:text-7xl font-extrabold tracking-tight">
              <AnimatedCounter value={wpm} duration={1200} />
            </p>
            <p className="text-base sm:text-lg font-medium mt-2 text-white/80">{l.speed}</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-peach to-peach/80 p-6 sm:p-8 text-center text-white shadow-xl shadow-peach/20 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <p className="text-6xl sm:text-7xl font-extrabold tracking-tight">
              <AnimatedCounter value={accuracy} duration={1200} suffix="%" />
            </p>
            <p className="text-base sm:text-lg font-medium mt-2 text-white/80">
              {l.accuracy} · {result.errors.length} {l.errors.toLowerCase()}
            </p>
          </div>
        </div>

        {/* --- Section 3: Benchmark --- */}
        <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-dark-text dark:text-white">{l.benchmarkSection}</h3>
            <span className="text-sm font-bold text-indigo bg-indigo/10 px-4 py-1.5 rounded-full">
              {tier.percentile}
            </span>
          </div>

          <div className="relative mb-3">
            <div className="h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${barPercent}%`,
                  background: wpm >= 80
                    ? "linear-gradient(90deg, #3f0ff2, #8b5cf6)"
                    : wpm >= 60
                    ? "linear-gradient(90deg, #3f0ff2, #6366f1)"
                    : wpm >= 40
                    ? "#3f0ff2"
                    : "#f8a37c",
                }}
              />
            </div>
            <div
              className="absolute top-0 h-4 w-0.5 bg-zinc-400 dark:bg-zinc-500"
              style={{ left: `${avgPercent}%` }}
            />
            <div
              className="absolute top-0 h-4 w-0.5 bg-indigo/40"
              style={{ left: `${proPercent}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-zinc-400 mt-2 mb-6">
            <span>0</span>
            <span>{l.benchmarkAvg} (42)</span>
            <span>{l.benchmarkPro} (80)</span>
            <span>130+</span>
          </div>

          <p className="text-base text-dark-text dark:text-white font-medium mb-2">{tier.comparison}</p>
          <div className="flex flex-wrap items-center gap-x-2 text-sm text-zinc-500">
            <span>{l.benchmarkMatches}:</span>
            <span className="font-semibold text-dark-text dark:text-white">{profession.profession}</span>
            <span>({profession.wpmRange} {l.wpmUnit})</span>
          </div>
        </div>

        {/* --- Section 4: Training focus --- */}
        <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-8">
          <h3 className="text-xl font-bold text-dark-text dark:text-white mb-2">{l.focusSection}</h3>
          {weakKeys.length > 0 ? (
            <>
              <p className="text-sm text-zinc-500 mb-5">{l.focusNudge(weakKeys.length)}</p>
              <div className="flex gap-3 flex-wrap">
                {weakKeys.map(([key, count]) => (
                  <div
                    key={key}
                    className="rounded-xl bg-peach/10 border border-peach/20 px-5 py-3 text-center min-w-[64px]"
                  >
                    <span className="block text-xl font-mono font-bold text-dark-text dark:text-white">
                      {key === " " ? "Space" : key}
                    </span>
                    <span className="block text-sm text-peach font-semibold mt-0.5">{count}x</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-base text-zinc-500 leading-relaxed">{l.focusPerfect}</p>
          )}
        </div>

        {/* --- Section 5: CTAs --- */}
        <div>
          <h3 className="text-xl font-bold text-dark-text dark:text-white text-center mb-6">{l.nextStepSection}</h3>

          <Link
            href={`/${locale}/lessons/1`}
            className="block rounded-2xl bg-gradient-to-r from-indigo to-indigo/90 p-6 sm:p-8 text-white shadow-lg shadow-indigo/20 hover:shadow-xl hover:shadow-indigo/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold">{l.trainingTitle}</p>
                <p className="text-base text-white/80 mt-1">{l.trainingDesc}</p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 shrink-0 rounded-xl bg-white/20 px-6 py-3 text-base font-bold group-hover:bg-white/30 transition-colors">
                {l.trainingCta} <span className="text-electric-yellow">&gt;&gt;</span>
              </span>
            </div>
          </Link>

          <Link
            href={`/${locale}/certificate`}
            className="block mt-4 rounded-2xl border-2 border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-8 hover:border-indigo/30 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-dark-text dark:text-white">{l.certTitle}</p>
                <p className="text-base text-zinc-500 mt-1">{l.certDesc}</p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 shrink-0 rounded-xl bg-electric-yellow px-6 py-3 text-base font-bold text-dark-text group-hover:bg-electric-yellow/80 transition-colors">
                {l.certCta} <span className="text-indigo">&gt;&gt;</span>
              </span>
            </div>
          </Link>
        </div>

        {/* --- Try again + Share --- */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={handleNewText}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-5 py-2.5 text-sm font-medium text-zinc-500 hover:text-indigo hover:border-indigo/30 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 2v6h-6" />
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
              <path d="M3 22v-6h6" />
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
            </svg>
            {l.tryAgain}
          </button>
          <button
            onClick={() => {
              const shareText = `${wpm} WPM, ${accuracy}% ${locale === "de" ? "Genauigkeit" : locale === "fr" ? "précision" : "accuracy"} - ${tier.label} (${tier.percentile}) ${window.location.origin}/${locale}/speed-test`;
              navigator.clipboard.writeText(shareText).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-5 py-2.5 text-sm font-medium text-zinc-500 hover:text-indigo hover:border-indigo/30 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            {copied ? l.shareCopied : l.shareResult}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold">{l.title}</h1>
          <p className="mt-2 text-zinc-400">{l.subtitle(mins)}</p>
        </div>
        <div className="flex items-center rounded-lg border border-zinc-200 dark:border-dark-border bg-white/5 dark:bg-dark-surface p-0.5 text-sm">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => handleDuration(d)}
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                d === seconds
                  ? "bg-indigo text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              {d / 60} {l.minLabel}
            </button>
          ))}
        </div>
      </div>

      <TypingArea
        text={text}
        mode="countdown"
        countdownSeconds={seconds}
        hideStats
        locale={locale}
        onComplete={handleComplete}
        onReset={() => setResult(null)}
      />

      <button
        onClick={handleNewText}
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-4 py-2 text-sm text-zinc-500 hover:text-indigo hover:border-indigo/30 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
        {l.newTest}
      </button>

      <div className="pt-12">
        <FAQ title={speedTestFAQ[locale]?.title || speedTestFAQ.en.title} items={speedTestFAQ[locale]?.items || speedTestFAQ.en.items} />
      </div>
    </div>
  );
}
