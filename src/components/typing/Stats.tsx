"use client";

type Props = {
  wpm: number;
  accuracy: number;
  timeDisplay: string;
  errors: number;
};

export function Stats({ wpm, accuracy, timeDisplay, errors }: Props) {
  return (
    <div className="flex gap-4">
      <div className="rounded-lg bg-indigo/10 border border-indigo/20 px-4 py-3 text-center min-w-[80px]">
        <p className="text-2xl font-bold text-indigo">{wpm}</p>
        <p className="text-xs text-zinc-500">WPM</p>
      </div>
      <div className="rounded-lg bg-peach/10 border border-peach/20 px-4 py-3 text-center min-w-[80px]">
        <p className="text-2xl font-bold text-peach">{accuracy}%</p>
        <p className="text-xs text-zinc-500">Accuracy</p>
      </div>
      <div className="rounded-lg bg-electric-yellow/10 border border-electric-yellow/20 px-4 py-3 text-center min-w-[80px]">
        <p className="text-2xl font-bold text-electric-yellow">{timeDisplay}</p>
        <p className="text-xs text-zinc-500">Time</p>
      </div>
      <div className="rounded-lg bg-dark-surface border border-dark-border px-4 py-3 text-center min-w-[80px]">
        <p className="text-2xl font-bold text-zinc-300">{errors}</p>
        <p className="text-xs text-zinc-500">Errors</p>
      </div>
    </div>
  );
}
