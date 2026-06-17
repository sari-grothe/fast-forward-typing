import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { TypingHero } from "@/components/TypingHero";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQ } from "@/components/FAQ";
import { homeFAQ } from "@/lib/faq-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const h = dict.home as Record<string, unknown>;
  const how = h.howItWorks as Record<string, string>;
  const feat = h.features as Record<string, string>;
  const speed = h.speedTest as Record<string, string>;
  const cert = h.certificate as Record<string, string>;
  const teams = h.teams as Record<string, string>;
  const final_ = h.finalCta as Record<string, string>;

  return (
    <div>
      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6">
        <TypingHero
          locale={locale}
          subheadline={h.subheadline as string}
          ctaLearn={h.ctaLearn as string}
          ctaTest={h.ctaTest as string}
        />
      </div>

      {/* How it works */}
      <section className="py-20 bg-white dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">{how.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: "1", title: how.step1Title, desc: how.step1Desc, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { num: "2", title: how.step2Title, desc: how.step2Desc, icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { num: "3", title: how.step3Title, desc: how.step3Desc, icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10">
                  <svg className="h-7 w-7 text-indigo" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-indigo mb-2">0{step.num}</p>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">{feat.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: feat.structured, desc: feat.structuredDesc, icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" },
              { title: feat.guidance, desc: feat.guidanceDesc, icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" },
              { title: feat.progress, desc: feat.progressDesc, icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
              { title: feat.outcomes, desc: feat.outcomesDesc, icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo/10">
                  <svg className="h-5 w-5 text-indigo" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-indigo">{feat.guarantee}</p>
        </div>
      </section>

      {/* Speed test teaser */}
      <section className="py-20 bg-white dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-indigo p-10 sm:p-16 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{speed.title}</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-lg mx-auto opacity-80">{speed.desc}</p>

            <div className="flex items-end justify-center gap-8 sm:gap-12 mb-10">
              <div className="text-center">
                <p className="text-sm opacity-60 mb-1">{speed.avgLabel}</p>
                <p className="text-4xl sm:text-5xl font-extrabold">{speed.avgValue}</p>
                <p className="text-xs opacity-50 mt-1">{speed.wpm}</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-60 mb-1">?</p>
                <p className="text-5xl sm:text-6xl font-extrabold text-electric-yellow">_</p>
                <p className="text-xs opacity-50 mt-1">{speed.wpm}</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-60 mb-1">{speed.proLabel}</p>
                <p className="text-4xl sm:text-5xl font-extrabold">{speed.proValue}</p>
                <p className="text-xs opacity-50 mt-1">{speed.wpm}</p>
              </div>
            </div>

            <a
              href={`/${locale}/speed-test`}
              className="inline-flex items-center gap-2 rounded-lg bg-electric-yellow px-8 py-4 text-base font-semibold text-dark-text hover:bg-electric-yellow/90 transition-colors"
            >
              {speed.cta} <span>&gt;&gt;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{cert.title}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">{cert.desc}</p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border-2 border-indigo/20 bg-white dark:bg-dark-surface p-8 text-center shadow-lg shadow-indigo/5">
                <div className="mb-4">
                  <span className="text-indigo font-semibold text-sm">&gt;&gt;</span>
                  <span className="text-sm font-semibold ml-1">Fast Forward Typing</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">{cert.certTitle}</p>
                <p className="text-xl font-bold mb-2">{cert.certName}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">{cert.certText}</p>
                <div className="flex justify-center gap-6 mb-6">
                  <div className="rounded-xl bg-indigo/5 dark:bg-indigo/10 px-4 py-2">
                    <p className="text-lg font-bold text-indigo">{cert.certWpm}</p>
                  </div>
                  <div className="rounded-xl bg-indigo/5 dark:bg-indigo/10 px-4 py-2">
                    <p className="text-lg font-bold text-indigo">{cert.certAccuracy}</p>
                  </div>
                </div>
                <div className="border-t border-zinc-200 dark:border-dark-border pt-4">
                  <p className="text-xs text-zinc-400">fastforwardtyping.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 overflow-hidden bg-white dark:bg-dark-surface">
        <TestimonialSlider locale={locale} />
      </section>

      {/* For teams / For teachers */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-peach/10">
                <svg className="h-6 w-6 text-peach" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{teams.forTeachers}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">{teams.teachersDesc}</p>
              <a
                href={`/${locale}/teachers`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo hover:text-indigo/80 transition-colors"
              >
                {teams.teachersCta} <span>&rarr;</span>
              </a>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-8 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo/10">
                <svg className="h-6 w-6 text-indigo" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{teams.forCompanies}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">{teams.companiesDesc}</p>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo hover:text-indigo/80 transition-colors"
              >
                {teams.companiesCta} <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-5xl px-6">
        <section className="pb-20">
          <FAQ title={homeFAQ[locale]?.title || homeFAQ.en.title} items={homeFAQ[locale]?.items || homeFAQ.en.items} />
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-white dark:bg-dark-surface">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{final_.title}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-10 max-w-lg mx-auto">{final_.desc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`/${locale}/lessons/1`}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo px-8 py-4 text-base font-semibold text-white hover:bg-indigo/90 transition-colors"
            >
              {h.ctaLearn as string} <span className="text-electric-yellow">&gt;&gt;</span>
            </a>
            <a
              href={`/${locale}/speed-test`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo px-8 py-4 text-base font-semibold text-indigo hover:bg-indigo/5 transition-colors dark:text-white dark:border-white/30 dark:hover:bg-white/5"
            >
              {h.ctaTest as string}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
