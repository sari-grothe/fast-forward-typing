import { CtaButton } from "@/components/CtaButton";
import { KeyCharacter } from "@/components/KeyCharacter";

type Props = {
  locale: string;
  title: string;
  description: string;
  courseLabel: string;
  testLabel: string;
  team?: {
    title: string;
    description: string;
    linkLabel: string;
    href: string;
  };
};

// Compact companion to FinalCTA (the big bottom banner) - this one rides
// along in the sidebar so there's a conversion path visible the whole
// time someone is reading, not just after they finish a long article.
// Both buttons are full-width and stacked (not side by side) - a narrow
// sidebar column has no room for two inline buttons without wrapping.
export function ArticleCtaCard({ locale, title, description, courseLabel, testLabel, team }: Props) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-5 text-center">
        <div className="flex justify-center mb-3">
          <KeyCharacter pose="waving" size={48} />
        </div>
        <p className="font-bold text-dark-text dark:text-white mb-1.5">{title}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-col gap-2">
          <CtaButton href={`/${locale}/placement`} className="w-full">{courseLabel}</CtaButton>
          <CtaButton href={`/${locale}/speed-test`} variant="secondary" className="w-full">{testLabel}</CtaButton>
        </div>
      </div>

      {team && (
        <div className="rounded-2xl border border-peach/30 bg-peach/5 dark:bg-peach/10 p-5 text-center">
          <p className="font-bold text-dark-text dark:text-white mb-1.5">{team.title}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{team.description}</p>
          <CtaButton href={team.href} variant="secondary" className="w-full">{team.linkLabel}</CtaButton>
        </div>
      )}
    </div>
  );
}
