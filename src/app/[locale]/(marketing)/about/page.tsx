import type { Metadata } from "next";
import { pageTitle, ogImages } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import { CtaButton } from "@/components/CtaButton";

type Props = {
  params: Promise<{ locale: string }>;
};

// Reuses the page's own approved copy (about.title/intro) rather than
// writing new marketing lines - the intro is trimmed to its first two
// sentences to fit a meta description, not paraphrased.
const introExcerpt: Record<Locale, string> = {
  de: "Millionen von Menschen tippen jeden Tag - E-Mails, Nachrichten, Dokumente, Code. Aber die wenigsten haben es je richtig gelernt.",
  en: "Millions of people type every single day - emails, messages, documents, code. But most never learned to do it properly.",
  fr: "Des millions de personnes tapent chaque jour - e-mails, messages, documents, code. Mais la plupart n'ont jamais appris a le faire correctement.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const a = dict.about as { title: string };
  const description = introExcerpt[l] ?? introExcerpt.en;

  return {
    title: pageTitle(a.title),
    description,
    openGraph: { title: a.title, description, type: "website", images: ogImages(locale) },
    alternates: {
      canonical: `https://fastforwardtyping.com/${locale}/about`,
      languages: Object.fromEntries([...locales.map((loc) => [loc, `/${loc}/about`]), ["x-default", `/en/about`]]),
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const a = dict.about as Record<string, string>;

  return (
    <div className="marketing-ambient">
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
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">{a.ctaText}</p>
          <CtaButton href={`/${locale}/speed-test`}>{a.ctaButton}</CtaButton>
        </section>
      </div>
    </div>
  );
}
