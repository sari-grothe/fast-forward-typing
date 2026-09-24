"use client";

import { useSearchParams } from "next/navigation";
import { WaitlistForm, type WaitlistFormLabels } from "@/components/WaitlistForm";

type Props = {
  locale: string;
  resultLabel: string;
  labels: WaitlistFormLabels;
};

// Reads ?wpm=&accuracy= from the speed test on the client so the
// certificate page itself stays static: a page that awaits searchParams
// is rendered dynamically and Next then streams <title>, canonical and
// description into the body instead of <head>.
export function CertificateSignup({ locale, resultLabel, labels }: Props) {
  const params = useSearchParams();
  const wpm = params.get("wpm");
  const accuracy = params.get("accuracy");
  const hasResult = Boolean(wpm && accuracy);

  return (
    <>
      {hasResult && (
        <div className="rounded-lg bg-indigo/5 dark:bg-indigo/10 px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{resultLabel}</span>
          <span className="text-sm font-bold text-dark-text dark:text-white">{wpm} WPM · {accuracy}%</span>
        </div>
      )}
      <WaitlistForm
        locale={locale}
        product="certificate"
        extra={hasResult ? { wpm: wpm as string, accuracy: accuracy as string } : undefined}
        labels={labels}
      />
    </>
  );
}
