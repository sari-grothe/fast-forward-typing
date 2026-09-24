"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { localizedPath } from "@/i18n/routes";

export type ContactFormLabels = {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  teamSizePlaceholder: string;
  teamSizeOptions: string[];
  message: string;
  messagePlaceholder: string;
  submit: string;
  privacy: string;
  // DSGVO: explicit, required opt-in, split so the /privacy link (a
  // locale path, not translatable text) stays out of the dictionaries.
  consentText: string;
  consentLinkText: string;
  successTitle: string;
  successText: string;
  successCta: string;
  sending: string;
  error: string;
};

type Props = {
  locale: string;
  labels: ContactFormLabels;
};

const fieldClass =
  "w-full rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark px-4 py-3 text-base text-dark-text dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors";

const labelClass = "block text-sm font-semibold text-zinc-600 dark:text-zinc-300 mb-1.5";

// Submissions go to Formspree (form "FFT Unternehmen"), which emails
// them to Sarah and keeps them in the Formspree inbox. The form ID is
// public by design; abuse is limited by Formspree's domain restriction.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljdrkvn";

type Status = "idle" | "sending" | "error";

export function ContactForm({ locale, labels }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  // A form filled and submitted faster than a human plausibly could
  // (this one has 5 fields) is almost always a script or an agent -
  // catches bots that do inspect the DOM and skip the honeypot, which
  // a hidden-field check alone can't.
  const mountedAt = useRef(Date.now());

  // Move focus to the confirmation so keyboard and screen reader users
  // land on it instead of falling back to <body> when the form unmounts.
  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot + fill-time check, treated the same: fail silently with
    // a fake success, never reveal which check tripped.
    if (data.get("_gotcha") || Date.now() - mountedAt.current < 3000) {
      setSubmitted(true);
      return;
    }
    data.set("_subject", `Team-Training Anfrage: ${data.get("company") ?? ""}`);
    data.set("locale", locale);
    data.set("page", window.location.href);

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setSubmitted(true);
    } catch {
      setStatus("error");
    }
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
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">{labels.successText}</p>
          <CtaButton href={localizedPath(locale, "speedTest")}>{labels.successCta}</CtaButton>
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
              <label htmlFor="contact-phone" className={labelClass}>{labels.phone}</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
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

          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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

          <label className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-300 dark:border-dark-border text-indigo focus:ring-indigo"
            />
            <span>
              {labels.consentText}{" "}
              <Link href={`/${locale}/privacy`} className="text-indigo underline hover:no-underline">
                {labels.consentLinkText}
              </Link>
            </span>
          </label>

          <div className="flex flex-col items-center gap-3 pt-2">
            <CtaButton type="submit" disabled={status === "sending"}>
              {status === "sending" ? labels.sending : labels.submit}
            </CtaButton>
            {status === "error" && (
              <p className="text-sm text-peach font-medium text-center" role="alert">{labels.error}</p>
            )}
            <p className="text-xs text-zinc-600 text-center max-w-sm">{labels.privacy}</p>
          </div>
        </form>
      )}
    </div>
  );
}
