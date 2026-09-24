"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { KeyCharacter } from "@/components/KeyCharacter";

// Same asymmetric hero pattern as the companies page (text left, mascot
// right, animate-float) - replaces the earlier self-typing keyboard
// illustration, which read as generic stock-typing-product imagery and
// didn't match the mascot used everywhere else on the site.
const splits: Record<string, { static: string; typed: string }> = {
  de: { static: "Du denkst schnell. ", typed: "Tippst du auch so?" },
  en: { static: "You type every day. ", typed: "Why not twice as fast?" },
  fr: { static: "Tu tapes tous les jours. ", typed: "Pourquoi pas deux fois plus vite ?" },
};

type Props = {
  locale: string;
  subheadline: string;
  fact: string;
  ctaLearn: string;
  ctaTest: string;
};

export function TypingHero({ locale, subheadline, fact, ctaLearn, ctaTest }: Props) {
  const { static: prefix, typed } = splits[locale] || splits.en;

  // The full headline is in the server HTML (crawlers and the LCP metric
  // see the complete H1). The typing effect only starts after hydration,
  // on wide screens, and never for people who prefer reduced motion. Until
  // then the typed part is kept transparent on wide screens (CSS class
  // below) so nothing flashes and gets erased.
  const [idx, setIdx] = useState(typed.length);
  const [phase, setPhase] = useState<"typing" | "pause" | "wait" | "static">("static");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (wide && !reduced) {
      setIdx(0);
      setPhase("wait");
    }
  }, []);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    switch (phase) {
      case "wait":
        t = setTimeout(() => setPhase("typing"), 800);
        break;
      case "typing":
        if (idx < typed.length) {
          t = setTimeout(() => setIdx((i) => i + 1), 80 + Math.random() * 60);
        } else {
          setPhase("pause");
        }
        break;
      case "pause":
      case "static":
        break;
    }
    return () => clearTimeout(t);
  }, [idx, phase, typed]);

  const isIdle = phase === "pause" || phase === "wait";
  const pendingOnWide = !hydrated;

  return (
    <section className="pt-12 pb-20 sm:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
            <span className="block">{prefix}</span>
            <span className="block">
              <span className={`text-indigo ${pendingOnWide ? "md:text-transparent" : ""}`}>{typed.slice(0, idx)}</span>
              <span
                className={`inline-block w-[3px] h-[0.8em] bg-indigo align-baseline ml-0.5 ${
                  isIdle ? "animate-cursor-blink" : ""
                }`}
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 max-w-2xl">
            {subheadline}
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl border-l-2 border-peach pl-4">
            {fact}
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaButton href={`/${locale}/placement`}>{ctaLearn}</CtaButton>
            <CtaButton href={`/${locale}/speed-test`} variant="secondary">{ctaTest}</CtaButton>
          </div>
        </div>
        <div className="hidden md:block animate-float">
          <KeyCharacter pose="running" size={200} />
        </div>
      </div>
    </section>
  );
}
