"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Labels = {
  gateTitle: string;
  gateDesc: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  gateCta: string;
  gateSending: string;
  gateError: string;
  consentText: string;
  consentLinkText: string;
  downloadPdf: string;
  downloadHint: string;
};

type Props = {
  locale: string;
  title: string;
  // Branded worksheet built by scripts/cheatsheets/build.ts, served
  // from public/downloads/<slug>.pdf.
  pdfUrl: string;
  labels: Labels;
};

// Same Formspree account as the other lead-capture forms (see
// docs/contact-form-formspree.md), distinct _subject per submission type.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljdrkvn";
const MIN_FILL_TIME_MS = 2000;

type Status = "idle" | "sending" | "error";

// Gates the download behind a name+email capture - the whole point of
// a lead magnet. No PDF is emailed (no send infra for that yet):
// unlocking starts the download of the branded worksheet right here,
// in-session, and leaves a button in case the browser blocked it.
export function CheatSheetGate({ locale, title, pdfUrl, labels }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const mountedAt = useRef(Date.now());
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (unlocked) downloadRef.current?.click();
  }, [unlocked]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha") || Date.now() - mountedAt.current < MIN_FILL_TIME_MS) {
      setUnlocked(true);
      return;
    }
    data.set("_subject", `Cheat Sheet Download: ${title}`);
    data.set("resource", title);
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
      setUnlocked(true);
    } catch {
      setStatus("error");
    }
  }

  if (unlocked) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2" role="status" aria-live="polite">
        <a
          ref={downloadRef}
          href={pdfUrl}
          download
          className="inline-flex items-center gap-2 rounded-xl bg-dark-text dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-dark-text hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          {labels.downloadPdf}
        </a>
        <span className="text-xs text-zinc-600">{labels.downloadHint}</span>
      </div>
    );
  }

  return (
    <div className="mt-2 rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-5 max-w-md">
      <p className="font-bold text-dark-text dark:text-white mb-1">{labels.gateTitle}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{labels.gateDesc}</p>
      <form onSubmit={handleSubmit} className="space-y-3" role="status" aria-live="polite">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="sr-only" htmlFor="cheatsheet-name">{labels.namePlaceholder}</label>
          <input
            id="cheatsheet-name"
            name="name"
            type="text"
            required
            autoComplete="given-name"
            placeholder={labels.namePlaceholder}
            className="flex-1 rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark px-4 py-2.5 text-sm text-dark-text dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors"
          />
          <label className="sr-only" htmlFor="cheatsheet-email">{labels.emailPlaceholder}</label>
          <input
            id="cheatsheet-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={labels.emailPlaceholder}
            className="flex-1 rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark px-4 py-2.5 text-sm text-dark-text dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors"
          />
        </div>
        <label className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer">
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
          className="inline-flex items-center gap-2 rounded-xl bg-dark-text dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-dark-text hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-wait"
        >
          {status === "sending" ? labels.gateSending : labels.gateCta}
        </button>
        {status === "error" && (
          <p className="text-xs text-peach font-medium" role="alert">{labels.gateError}</p>
        )}
      </form>
    </div>
  );
}
