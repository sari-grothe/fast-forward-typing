import { CtaButton } from "@/components/CtaButton";
import { KeyCharacter } from "@/components/KeyCharacter";

type Props = {
  locale: string;
  title: string;
  description: string;
  ctaLabel: string;
};

// Compact companion to FinalCTA (the big bottom banner) - this one rides
// along in the sidebar so there's a conversion path visible the whole
// time someone is reading, not just after they finish a long article.
export function ArticleCtaCard({ locale, title, description, ctaLabel }: Props) {
  return (
    <div className="rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-5 text-center">
      <div className="flex justify-center mb-3">
        <KeyCharacter pose="waving" size={48} />
      </div>
      <p className="font-bold text-dark-text dark:text-white mb-1.5">{title}</p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{description}</p>
      <CtaButton href={`/${locale}/speed-test`}>{ctaLabel}</CtaButton>
    </div>
  );
}
