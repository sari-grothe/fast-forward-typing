"use client";

import { useEffect, useRef, useState } from "react";
import { CtaButton } from "@/components/CtaButton";

export type ContactFormLabels = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  teamSizePlaceholder: string;
  teamSizeOptions: string[];
  message: string;
  messagePlaceholder: string;
  submit: string;
  privacy: string;
  successTitle: string;
  successText: string;
  successCta: string;
};

type Props = {
  locale: string;
  labels: ContactFormLabels;
};

const fieldClass =
  "w-full rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark px-4 py-3 text-base text-dark-text dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors";

const labelClass = "block text-sm font-semibold text-zinc-600 dark:text-zinc-300 mb-1.5";

// Fake door: the form validates and shows a confirmation, but does not
// send anywhere yet. Wire up a backend (Resend or a form service) before
// driving traffic to this page.
export function ContactForm({ locale, labels }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation so keyboard and screen reader users
  // land on it instead of falling back to <body> when the form unmounts.
  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div role="status" aria-live="polite">
      {submitted ? (
        <div className="rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-8 sm:p-10 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10">
            <svg className="h-7 w-7 text-indigo" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 ref={successHeadingRef} tabIndex={-1} className="text-2xl font-bold mb-3 focus:outline-none">
            {labels.successTitle}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md mx-auto">{labels.successText}</p>
          <CtaButton href={`/${locale}/speed-test`}>{labels.successCta}</CtaButton>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/60 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm p-8 sm:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className={labelClass}>{labels.name}</label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>{labels.email}</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-company" className={labelClass}>{labels.company}</label>
              <input id="contact-company" name="company" type="text" required autoComplete="organization" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-team-size" className={labelClass}>{labels.teamSize}</label>
              <select id="contact-team-size" name="teamSize" required defaultValue="" className={fieldClass}>
                <option value="" disabled>{labels.teamSizePlaceholder}</option>
                {labels.teamSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>{labels.message}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder={labels.messagePlaceholder}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <CtaButton type="submit">{labels.submit}</CtaButton>
            <p className="text-xs text-zinc-400 text-center max-w-sm">{labels.privacy}</p>
          </div>
        </form>
      )}
    </div>
  );
}
