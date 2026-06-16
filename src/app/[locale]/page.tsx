import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-surface px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <span className="h-2 w-2 rounded-full bg-electric-yellow animate-pulse" />
          {dict.home.comingSoon}
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-tight">
          {dict.home.headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl">
          {dict.home.subheadline}
        </p>
        <form className="mt-10 flex w-full max-w-md gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-dark-border bg-dark-surface px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo px-6 py-3 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
          >
            {dict.home.notifyMe}
          </button>
        </form>
      </section>
    </div>
  );
}
