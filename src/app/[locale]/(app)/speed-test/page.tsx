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
      <h1 className="text-3xl font-bold">Speed Test</h1>
      <p className="mt-4 text-zinc-400">Sprint 1: Typing engine goes here.</p>
    </div>
  );
}
