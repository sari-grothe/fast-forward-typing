"use client";

import { useEffect, useState } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import type { Locale } from "@/i18n/config";

// Shown once, after the first real lesson, so returning users on a new
// device or after clearing their browser don't lose progress silently.
// Non-blocking: dismissible, never shown again after a dismiss or a
// successful signup. v1 only - no account, no login (see
// fft-course-signup-roadmap memory). Light-weight Formspree capture,
// same pattern as the certificate waitlist.
const DISMISSED_KEY = "fft.progressPrompt.dismissed.v1";

function isDismissed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function dismiss(): void {
  try {
    window.localStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    // Storage blocked (private mode) - prompt just reappears next time,
    // not worth failing over.
  }
}

const i18n: Record<Locale, {
  title: string;
  desc: string;
  emailPlaceholder: string;
  submit: string;
  sending: string;
  error: string;
  successTitle: string;
  successText: string;
  dismiss: string;
}> = {
  de: {
    title: "Fortschritt sichern",
    desc: "Dein Fortschritt liegt aktuell nur in diesem Browser. Trag dich ein und wir schreiben dir, sobald du dich auch auf anderen Geräten anmelden kannst.",
    emailPlaceholder: "Deine E-Mail-Adresse",
    submit: "Eintragen",
    sending: "Wird eingetragen ...",
    error: "Das hat nicht geklappt. Nochmal versuchen?",
    successTitle: "Eingetragen",
    successText: "Wir schreiben dir, sobald geräteübergreifender Fortschritt verfügbar ist.",
    dismiss: "Nicht jetzt",
  },
  en: {
    title: "Save your progress",
    desc: "Your progress currently lives only in this browser. Sign up and we'll email you once you can log in on other devices too.",
    emailPlaceholder: "Your email address",
    submit: "Sign up",
    sending: "Adding you ...",
    error: "That didn't work. Try again?",
    successTitle: "You're in",
    successText: "We'll email you once cross-device progress is available.",
    dismiss: "Not now",
  },
  fr: {
    title: "Sauvegarde ta progression",
    desc: "Ta progression n'est enregistrée que dans ce navigateur. Inscris-toi et on t'écrit dès que tu peux aussi te connecter sur d'autres appareils.",
    emailPlaceholder: "Ton adresse e-mail",
    submit: "S'inscrire",
    sending: "Inscription ...",
    error: "Ça n'a pas marché. Réessayer ?",
    successTitle: "C'est fait",
    successText: "On t'écrit dès que la progression multi-appareils est disponible.",
    dismiss: "Pas maintenant",
  },
};

export function SaveProgressPrompt({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!isDismissed());
  }, []);

  if (!visible) return null;

  const l = i18n[locale] ?? i18n.en;

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 sm:p-7 space-y-4">
      <button
        type="button"
        onClick={() => {
          dismiss();
          setVisible(false);
        }}
        aria-label={l.dismiss}
        className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="pr-8">
        <p className="text-base font-bold text-dark-text dark:text-white">{l.title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{l.desc}</p>
      </div>
      <WaitlistForm
        locale={locale}
        product="course-progress"
        labels={{
          emailPlaceholder: l.emailPlaceholder,
          submit: l.submit,
          sending: l.sending,
          error: l.error,
          successTitle: l.successTitle,
          successText: l.successText,
        }}
        onSuccess={dismiss}
      />
    </div>
  );
}
