"use client";

type Props = {
  wpm: number;
  accuracy: number;
  timeDisplay: string;
  errors: number;
};

export function Stats({ wpm, accuracy, timeDisplay, errors }: Props) {
  return (
    <div className="flex gap-3">
      <div className="rounded-xl bg-indigo/10 border border-indigo/20 px-4 py-3 text-center min-w-[80px] backdrop-blur-sm">
        <p className="text-2xl font-bold text-indigo tabular-nums">{wpm}</p>
        <p className="text-xs text-zinc-500">WPM</p>
      </div>
      <div className="rounded-xl bg-peach/10 border border-peach/20 px-4 py-3 text-center min-w-[80px] backdrop-blur-sm">
        <p className="text-2xl font-bold text-peach tabular-nums">{accuracy}%</p>
        <p className="text-xs text-zinc-500">Accuracy</p>
      </div>
      <div className="rounded-xl bg-electric-yellow/10 border border-electric-yellow/20 px-4 py-3 text-center min-w-[80px] backdrop-blur-sm">
        <p className="text-2xl font-bold text-electric-yellow tabular-nums font-mono">{timeDisplay}</p>
        <p className="text-xs text-zinc-500">Time</p>
      </div>
      <div className="rounded-xl bg-zinc-100 dark:bg-dark-surface border border-zinc-200 dark:border-dark-border px-4 py-3 text-center min-w-[80px]">
        <p className="text-2xl font-bold text-zinc-700 dark:text-zinc-300 tabular-nums">{errors}</p>
        <p className="text-xs text-zinc-500">Errors</p>
      </div>
    </div>
  );
}
