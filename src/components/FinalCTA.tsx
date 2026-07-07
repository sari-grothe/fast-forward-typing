import Link from "next/link";
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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo via-indigo/90 to-indigo/80 p-10 sm:p-16 text-center text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="relative">
          <div className="flex justify-center mb-6 animate-float">
            <KeyCharacter pose="waving" size={80} limbColor="white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/${locale}/placement`}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {ctaLearn} <span className="text-indigo group-hover:translate-x-0.5 transition-transform">&gt;&gt;</span>
            </Link>
            <Link
              href={`/${locale}/speed-test`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {ctaTest}
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
