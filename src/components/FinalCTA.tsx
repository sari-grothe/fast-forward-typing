import { CtaButton } from "@/components/CtaButton";
import { KeyCharacter } from "@/components/KeyCharacter";
import { ScrollReveal } from "@/components/ScrollReveal";

type Props = {
  locale: string;
  title: string;
  description: string;
  ctaLearn: string;
  ctaTest: string;
};

export function FinalCTA({ locale, title, description, ctaLearn, ctaTest }: Props) {
  return (
    <ScrollReveal>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo via-indigo/90 to-indigo/80 dark:from-indigo-action dark:via-indigo-action/90 dark:to-indigo-action/80 p-10 sm:p-16 text-center text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="relative">
          <div className="flex justify-center mb-6 animate-float">
            <KeyCharacter pose="waving" size={80} limbColor="white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={`/${locale}/placement`} variant="inverted">{ctaLearn}</CtaButton>
            <CtaButton href={`/${locale}/speed-test`} variant="inverted-secondary">{ctaTest}</CtaButton>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
