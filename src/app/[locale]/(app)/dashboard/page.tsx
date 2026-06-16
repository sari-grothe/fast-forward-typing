import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  const _dict = await getDictionary(locale as Locale);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-dark-border bg-dark-surface p-6">
          <p className="text-sm text-zinc-500">Best WPM</p>
          <p className="mt-2 text-3xl font-bold text-indigo">-</p>
        </div>
        <div className="rounded-xl border border-dark-border bg-dark-surface p-6">
          <p className="text-sm text-zinc-500">Accuracy</p>
          <p className="mt-2 text-3xl font-bold text-peach">-</p>
        </div>
        <div className="rounded-xl border border-dark-border bg-dark-surface p-6">
          <p className="text-sm text-zinc-500">Lessons</p>
          <p className="mt-2 text-3xl font-bold text-electric-yellow">0/12</p>
        </div>
      </div>
      <p className="mt-8 text-zinc-400">Sprint 4: Progress tracking wird hier gebaut.</p>
    </div>
  );
}
