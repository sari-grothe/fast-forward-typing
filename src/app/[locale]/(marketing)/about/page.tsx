import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const a = dict.about as Record<string, string>;

  return (
    <div style={{ background: "linear-gradient(180deg, #eeecfe 0%, #f3f0ff 30%, #fde8d8 60%, #f3f0ff 85%, #eeecfe 100%)" }}>
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">{a.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-16">
          {a.intro}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{a.missionTitle}</h2>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{a.missionText}</p>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{a.missionText2}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{a.howTitle}</h2>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{a.howText}</p>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{a.howText2}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{a.languagesTitle}</h2>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{a.languagesText}</p>
        </section>

        <section className="text-center py-12 rounded-2xl bg-white/60 dark:bg-dark-surface/60 border border-zinc-200 dark:border-dark-border">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{a.ctaTitle}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">{a.ctaText}</p>
          <a
            href={`/${locale}/speed-test`}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo px-8 py-4 text-base font-semibold text-white hover:bg-indigo/90 transition-colors"
          >
            {a.ctaButton} <span className="text-electric-yellow">&gt;&gt;</span>
          </a>
        </section>
      </div>
    </div>
  );
}
