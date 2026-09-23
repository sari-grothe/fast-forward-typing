export type TypingTimeBreakdownLabels = {
  unit: string;
  row40Time: string;
  row40Badge: string;
  tier60Time: string;
  tier60Saved: string;
  tier80Time: string;
  tier80Saved: string;
  tier100Time: string;
  tier100Saved: string;
  chartLabel: string;
  chartNote: string;
  source: string;
};

type Props = {
  labels: TypingTimeBreakdownLabels;
};

// The 40/60/80/100 WPM time-per-day bars, shared between the home page's
// productivity section and the B2B savings section - same underlying
// assumption (20 emails x 500 words/day), same source citation, so this
// stays a single component instead of two copies drifting apart.
export function TypingTimeBreakdown({ labels }: Props) {
  const rows = [
    { wpm: 40, time: labels.row40Time, badge: labels.row40Badge, width: 100, bar: "bg-zinc-300 dark:bg-zinc-600", timeCls: "text-zinc-700 dark:text-zinc-100", chip: "bg-zinc-100 text-zinc-500 dark:bg-white/5 dark:text-zinc-400" },
    { wpm: 60, time: labels.tier60Time, badge: labels.tier60Saved, width: 67, bar: "bg-indigo/60", timeCls: "text-white", chip: "bg-electric-yellow/20 text-dark-text dark:text-electric-yellow" },
    { wpm: 80, time: labels.tier80Time, badge: labels.tier80Saved, width: 50, bar: "bg-indigo/80", timeCls: "text-white", chip: "bg-electric-yellow/20 text-dark-text dark:text-electric-yellow" },
    { wpm: 100, time: labels.tier100Time, badge: labels.tier100Saved, width: 40, bar: "bg-indigo", timeCls: "text-white", chip: "bg-electric-yellow text-dark-text" },
  ];

  return (
    <div>
      <p className="text-sm font-semibold text-dark-text dark:text-white text-center mb-5">{labels.chartLabel}</p>
      <div className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.wpm} className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="w-16 shrink-0 text-right whitespace-nowrap">
              <span className="font-bold text-dark-text dark:text-white">{row.wpm}</span>{" "}
              <span className="text-[10px] font-semibold text-zinc-400">{labels.unit}</span>
            </span>
            <div className="flex-1 min-w-40 h-7 rounded-lg bg-zinc-100 dark:bg-white/5">
              <div
                className={`h-full rounded-lg flex items-center justify-end pr-2.5 ${row.bar}`}
                style={{ width: `${row.width}%` }}
              >
                <span className={`text-xs font-bold whitespace-nowrap ${row.timeCls}`}>{row.time}</span>
              </div>
            </div>
            <span className="shrink-0 basis-full sm:basis-40 ml-[4.75rem] sm:ml-0">
              <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${row.chip}`}>
                {row.badge}
              </span>
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-zinc-400 max-w-md mx-auto mt-5">{labels.chartNote}</p>
      <p className="text-center text-[11px] text-zinc-400/70 max-w-md mx-auto mt-2">{labels.source}</p>
    </div>
  );
}
