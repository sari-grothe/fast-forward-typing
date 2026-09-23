"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type WaitlistFormLabels = {
  emailPlaceholder: string;
  submit: string;
  sending: string;
  error: string;
  successTitle: string;
  successText: string;
  // DSGVO: explicit, required opt-in before the email address is
  // stored anywhere - two parts so the privacy-policy link (locale
  // path, not translatable text) stays out of the labels dictionaries.
  consentText: string;
  consentLinkText: string;
};

type Props = {
  locale: string;
  // Identifies which waitlist this is (e.g. "certificate", "pro-course").
  // Goes into the Formspree subject so submissions across products stay
  // distinguishable in one inbox, no separate Formspree form needed.
  product: string;
  labels: WaitlistFormLabels;
  // Extra hidden fields sent along (e.g. wpm/accuracy from a typing test).
  extra?: Record<string, string>;
  // Called once the submission succeeds (e.g. to persist a "don't show
  // this again" flag alongside the actual signup).
  onSuccess?: () => void;
};

// Same Formspree account/form as the companies contact form (see
// docs/contact-form-formspree.md). Reused here with a distinct _subject
// so waitlist signups and B2B leads stay separable in the one inbox,
// without creating a second Formspree form via the dashboard.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljdrkvn";

type Status = "idle" | "sending" | "error";

// Second, cheap layer alongside the honeypot: a form filled and
// submitted faster than a human plausibly could (reads the label,
// types an email) is almost always a script or an agent that fills
// every field in one pass, including hidden ones a naive honeypot
// would catch. This one doesn't rely on the field being invisible to
// the submitter, so it also catches bots that do inspect the DOM.
const MIN_FILL_TIME_MS = 2000;

export function WaitlistForm({ locale, product, labels, extra, onSuccess }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot + fill-time check. Either one is treated the same way a
    // real anti-bot measure should be: fail silently with a fake
    // success, never reveal to the caller which check tripped.
    if (data.get("_gotcha") || Date.now() - mountedAt.current < MIN_FILL_TIME_MS) {
      setSubmitted(true);
      return;
    }
    data.set("_subject", `Warteliste (${product}): ${data.get("email") ?? ""}`);
    data.set("product", product);
    data.set("locale", locale);
    data.set("page", window.location.href);
    if (extra) {
      for (const [key, value] of Object.entries(extra)) data.set(key, value);
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="text-center space-y-2 py-2">
        <h3 ref={successHeadingRef} tabIndex={-1} className="text-base font-bold text-dark-text dark:text-white focus:outline-none">
          {labels.successTitle}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{labels.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" role="status" aria-live="polite">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label htmlFor={`waitlist-email-${product}`} className="sr-only">{labels.emailPlaceholder}</label>
      <input
        id={`waitlist-email-${product}`}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={labels.emailPlaceholder}
        className="w-full rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark px-4 py-3 text-base text-dark-text dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors"
      />
      <label className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer">
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
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo px-6 py-3.5 text-base font-semibold text-white hover:bg-indigo/90 transition-colors disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "sending" ? labels.sending : labels.submit}
        {status !== "sending" && <span className="text-electric-yellow">&gt;&gt;</span>}
      </button>
      {status === "error" && (
        <p className="text-sm text-peach font-medium text-center" role="alert">{labels.error}</p>
      )}
    </form>
  );
}
