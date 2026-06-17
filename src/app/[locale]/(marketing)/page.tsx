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

  return (
    <div>
      <div className="mx-auto max-w-5xl px-6">
        <TypingHero
          locale={locale}
          subheadline={dict.home.subheadline}
          ctaLearn={dict.home.ctaLearn}
          ctaTest={dict.home.ctaTest}
        />
      </div>

      <section className="pb-20 overflow-hidden">
        <TestimonialSlider locale={locale} />
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <section className="pb-20">
          <FAQ title={homeFAQ[locale]?.title || homeFAQ.en.title} items={homeFAQ[locale]?.items || homeFAQ.en.items} />
        </section>
      </div>
    </div>
  );
}
