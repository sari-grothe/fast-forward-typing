"use client";

import { useState } from "react";
import { CtaButton } from "@/components/CtaButton";

export type CalculatorLabels = {
  teamSize: string;
  sliderHint: string;
  resultIntro: string;
  perDay: string;
  perYear: string;
  fte: string;
  assumption: string;
  promise: string;
};

// Same baseline as the home page productivity section: 20 emails of
// 500 words a day, 40 -> 60 WPM saves 4.2 min per email = 84 min/day.
const HOURS_SAVED_PER_PERSON_PER_DAY = 1.4;
const WORKING_DAYS_PER_YEAR = 220;
const HOURS_PER_WORKING_DAY = 8;
const HOURS_PER_FTE_YEAR = WORKING_DAYS_PER_YEAR * HOURS_PER_WORKING_DAY;

const MIN_TEAM = 10;
const MAX_TEAM = 1000;

type Props = {
  locale: string;
  labels: CalculatorLabels;
  ctaLabel: string;
  ctaHref: string;
};

// Region-qualified, not just "de"/"en"/"fr" - a bare language tag lets the
// runtime pick its own default region for grouping/decimal symbols, so this
// pins it: "." thousands + "," decimal (DE), "," thousands + "." decimal
// (US), " " thousands + "," decimal (FR).
const INTL_LOCALE: Record<string, string> = { de: "de-DE", en: "en-US", fr: "fr-FR" };

export function TeamSavingsCalculator({ locale, labels, ctaLabel, ctaHref }: Props) {
  const [teamSize, setTeamSize] = useState(25);
  // The slider is the whole point of the card, but a range input alone
  // reads as decoration - so the hint pulses until the first interaction.
  const [touched, setTouched] = useState(false);

  const perDay = teamSize * HOURS_SAVED_PER_PERSON_PER_DAY;
  const perYear = perDay * WORKING_DAYS_PER_YEAR;
  const fullTimeEquivalents = perYear / HOURS_PER_FTE_YEAR;

  const intlLocale = INTL_LOCALE[locale] ?? locale;
  const whole = new Intl.NumberFormat(intlLocale, { maximumFractionDigits: 0 });
  const oneDecimal = new Intl.NumberFormat(intlLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <div className="rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-8 sm:p-10">
      {/* Input zone: plain background, this is where you act */}
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <label htmlFor="team-size" className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
            {labels.teamSize}
          </label>
          <span className="text-2xl font-extrabold text-indigo tabular-nums">{whole.format(teamSize)}</span>
        </div>
        <input
          id="team-size"
          type="range"
          min={MIN_TEAM}
          max={MAX_TEAM}
          step={10}
          value={teamSize}
          onChange={(e) => {
            setTeamSize(Number(e.target.value));
            setTouched(true);
          }}
          onPointerDown={() => setTouched(true)}
          className="w-full accent-indigo cursor-pointer"
        />
        <div className="flex justify-between text-xs text-zinc-400 mt-1 tabular-nums">
          <span>{MIN_TEAM}</span>
          <span>{MAX_TEAM}</span>
        </div>
        <p
          className={`mt-2 flex items-center justify-center gap-2 text-sm font-medium ${
            touched ? "text-zinc-400" : "text-indigo animate-pulse"
          }`}
        >
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l-4 4 4 4M17 8l4 4-4 4M3 12h18" />
          </svg>
          {labels.sliderHint}
        </p>
      </div>

      {/* Down arrow: input -> output, cause and effect in one glance */}
      <div className="flex justify-center my-5" aria-hidden="true">
        <svg className="w-5 h-5 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Output zone: tinted panel, explicitly named to the current team
          size ("Für X Mitarbeitende") and led by ONE dominant number -
          hours saved per day for the whole team, the figure that lands
          fastest, with FTE/year as supporting context underneath. */}
      <div className="rounded-xl bg-indigo/5 dark:bg-indigo/10 p-6 sm:p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo mb-4">
          {labels.resultIntro.replace("{n}", whole.format(teamSize))}
        </p>
        <p className="text-6xl sm:text-7xl font-extrabold text-indigo leading-none tabular-nums">
          {whole.format(perDay)}
        </p>
        <p className="text-base font-semibold text-dark-text dark:text-white mt-2">{labels.perDay}</p>

        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-indigo/15">
          {[
            { value: oneDecimal.format(fullTimeEquivalents), label: labels.fte },
            { value: whole.format(perYear), label: labels.perYear },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-zinc-600 dark:text-zinc-300 tabular-nums">{stat.value}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-zinc-400 mt-4 max-w-md mx-auto">{labels.assumption}</p>

      {/* Payoff + action, still inside the same card - nothing about this
          calculator lives loose outside its own border. */}
      <div className="border-t border-zinc-200 dark:border-dark-border mt-8 pt-8 text-center">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto mb-6">{labels.promise}</p>
        <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
      </div>
    </div>
  );
}
