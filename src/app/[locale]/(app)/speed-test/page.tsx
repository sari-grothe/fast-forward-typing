import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SpeedTestPage({ params }: Props) {
  const { locale } = await params;
  const _dict = await getDictionary(locale as Locale);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">{_dict.nav.speedTest}</h1>
      <div className="mt-8 rounded-xl border border-dark-border bg-dark-surface p-8">
        <p className="text-zinc-400">Sprint 1: Typing engine wird hier gebaut.</p>
        <div className="mt-6 flex gap-4">
          <div className="rounded-lg bg-indigo/10 border border-indigo/20 px-4 py-3 text-center">
            <p className="text-2xl font-bold text-indigo">0</p>
            <p className="text-xs text-zinc-500">WPM</p>
          </div>
          <div className="rounded-lg bg-peach/10 border border-peach/20 px-4 py-3 text-center">
            <p className="text-2xl font-bold text-peach">0%</p>
            <p className="text-xs text-zinc-500">Accuracy</p>
          </div>
          <div className="rounded-lg bg-electric-yellow/10 border border-electric-yellow/20 px-4 py-3 text-center">
            <p className="text-2xl font-bold text-electric-yellow">60s</p>
            <p className="text-xs text-zinc-500">Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
