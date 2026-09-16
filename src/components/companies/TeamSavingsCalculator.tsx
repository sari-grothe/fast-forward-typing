"use client";

import { useState } from "react";

export type CalculatorLabels = {
  teamSize: string;
  perPerson: string;
  perDay: string;
  perYear: string;
  fte: string;
  assumption: string;
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
};

export function TeamSavingsCalculator({ locale, labels }: Props) {
  const [teamSize, setTeamSize] = useState(25);

  const perDay = teamSize * HOURS_SAVED_PER_PERSON_PER_DAY;
  const perYear = perDay * WORKING_DAYS_PER_YEAR;
  const fullTimeEquivalents = perYear / HOURS_PER_FTE_YEAR;

  const whole = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
  const oneDecimal = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <div className="rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-8 sm:p-10">
      {/* Team size slider */}
      <div className="mb-8">
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
          onChange={(e) => setTeamSize(Number(e.target.value))}
          className="w-full accent-indigo cursor-pointer"
        />
        <div className="flex justify-between text-xs text-zinc-400 mt-1 tabular-nums">
          <span>{MIN_TEAM}</span>
          <span>{MAX_TEAM}</span>
        </div>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-200 dark:border-dark-border pt-8">
        {[
          { value: whole.format(perDay), label: labels.perDay },
          { value: whole.format(perYear), label: labels.perYear },
          { value: oneDecimal.format(fullTimeEquivalents), label: labels.fte },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold text-indigo leading-none tabular-nums">{stat.value}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-8">
        {labels.perPerson.replace("{hours}", oneDecimal.format(HOURS_SAVED_PER_PERSON_PER_DAY))}
      </p>
      <p className="text-center text-xs text-zinc-400 mt-2 max-w-md mx-auto">{labels.assumption}</p>
    </div>
  );
}
