"use client";

import { useState } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { KeyCharacter } from "@/components/KeyCharacter";
import type { Locale } from "@/i18n/config";

// Fake-door paywall at a fixed lesson (see LessonView). No real payment
// exists yet, so "unlock" leads into the same Formspree waitlist as the
// certificate page - but framed as a purchase, not a passive ask, per
// the "hard paywall: ask for payment before asking for personal data"
// rule in the business-ideas CLAUDE.md. Soft gate: a visible "practice
// for free" link always lets people through, since organic traffic and
// list-building still matter while there is nothing to actually sell
// (no Stripe until 05/2027). Decision + price (29 EUR) confirmed by
// Sarah on 2026-09-23.
const i18n: Record<Locale, {
  title: string;
  subtitle: string;
  benefits: string[];
  price: string;
  priceNote: string;
  unlockCta: string;
  skipCta: string;
  emailPlaceholder: string;
  submit: string;
  sending: string;
  error: string;
  successTitle: string;
  successText: string;
  consentText: string;
  consentLinkText: string;
}> = {
  de: {
    title: "Ab hier wird's Pro",
    subtitle: "Die ersten 6 Lektionen sind komplett kostenlos. Der Rest des Kurses gehört zu Pro.",
    benefits: [
      "Alle restlichen Lektionen bis zum Kursabschluss",
      "Geräteübergreifender Fortschritt, sobald Konten verfügbar sind",
      "Einmalzahlung, kein Abo",
    ],
    price: "29 €",
    priceNote: "einmalig, kein Abo",
    unlockCta: "Pro freischalten",
    skipCta: "Trotzdem kostenlos weiterüben",
    emailPlaceholder: "Deine E-Mail-Adresse",
    submit: "Eintragen",
    sending: "Wird eingetragen ...",
    error: "Das hat nicht geklappt. Nochmal versuchen?",
    successTitle: "Du bist auf der Liste",
    successText: "Wir schreiben dir, sobald du Pro freischalten kannst.",
    consentText: "Ich bin mit der Speicherung meiner E-Mail-Adresse gemäß",
    consentLinkText: "Datenschutzerklärung einverstanden.",
  },
  en: {
    title: "This is where Pro starts",
    subtitle: "The first 6 lessons are completely free. The rest of the course is Pro.",
    benefits: [
      "All remaining lessons through course completion",
      "Cross-device progress, once accounts are available",
      "One-time payment, no subscription",
    ],
    price: "29 EUR",
    priceNote: "one-time, no subscription",
    unlockCta: "Unlock Pro",
    skipCta: "Keep practising for free",
    emailPlaceholder: "Your email address",
    submit: "Sign up",
    sending: "Adding you ...",
    error: "That didn't work. Try again?",
    successTitle: "You're on the list",
    successText: "We'll email you as soon as you can unlock Pro.",
    consentText: "I agree to my email address being stored per the",
    consentLinkText: "privacy policy.",
  },
  fr: {
    title: "À partir d'ici, c'est Pro",
    subtitle: "Les 6 premières leçons sont entièrement gratuites. Le reste du cours fait partie de Pro.",
    benefits: [
      "Toutes les leçons restantes jusqu'à la fin du cours",
      "Progression multi-appareils, dès que les comptes sont disponibles",
      "Paiement unique, pas d'abonnement",
    ],
    price: "29 €",
    priceNote: "une fois, pas d'abonnement",
    unlockCta: "Débloquer Pro",
    skipCta: "Continuer gratuitement",
    emailPlaceholder: "Ton adresse e-mail",
    submit: "S'inscrire",
    sending: "Inscription ...",
    error: "Ça n'a pas marché. Réessayer ?",
    successTitle: "Tu es sur la liste",
    successText: "On t'écrit dès que tu peux débloquer Pro.",
    consentText: "J'accepte que mon adresse e-mail soit conservée conformément à la",
    consentLinkText: "politique de confidentialité.",
  },
};

const SIGNED_UP_KEY = "fft.proWall.signedUp.v1";
const SKIP_KEY = "fft.proWall.skippedThisSession.v1";

export function markProWallSignedUp(): void {
  try {
    window.localStorage.setItem(SIGNED_UP_KEY, "1");
  } catch {
    // Storage blocked - the wall may just reappear next visit, not fatal.
  }
}

export function markProWallSkipped(): void {
  try {
    window.sessionStorage.setItem(SKIP_KEY, "1");
  } catch {
    // Same as above.
  }
}

export function isProWallCleared(): boolean {
  try {
    if (window.localStorage.getItem(SIGNED_UP_KEY) === "1") return true;
    if (window.sessionStorage.getItem(SKIP_KEY) === "1") return true;
  } catch {
    return true;
  }
  return false;
}

export function ProWall({ locale, onCleared }: { locale: Locale; onCleared: () => void }) {
  const l = i18n[locale] ?? i18n.en;
  const [showForm, setShowForm] = useState(false);

  function handleSkip() {
    markProWallSkipped();
    onCleared();
  }

  function handleSignupSuccess() {
    markProWallSignedUp();
    onCleared();
  }

  return (
    <div className="rounded-2xl border-2 border-indigo/20 bg-gradient-to-b from-white to-lavender/30 dark:from-dark-surface dark:to-dark p-8 sm:p-10 text-center space-y-6 shadow-xl shadow-indigo/5 animate-fade-up">
      <div className="flex justify-center">
        <KeyCharacter pose="sitting-waving" size={90} />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark-text dark:text-white">{l.title}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">{l.subtitle}</p>
      </div>

      <div className="max-w-sm mx-auto rounded-xl border border-zinc-200 dark:border-dark-border bg-white/70 dark:bg-dark-surface/70 p-6 space-y-4 text-left">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-medium text-indigo">Pro</span>
          <span className="text-3xl font-extrabold text-dark-text dark:text-white">{l.price}</span>
        </div>
        <p className="text-xs text-zinc-600 -mt-2">{l.priceNote}</p>
        <ul className="space-y-2">
          {l.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-dark-text dark:text-zinc-300">
              <svg className="w-4 h-4 mt-0.5 text-indigo flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        {showForm ? (
          <WaitlistForm
            locale={locale}
            product="pro-course"
            labels={{
              emailPlaceholder: l.emailPlaceholder,
              submit: l.submit,
              sending: l.sending,
              error: l.error,
              successTitle: l.successTitle,
              successText: l.successText,
              consentText: l.consentText,
              consentLinkText: l.consentLinkText,
            }}
            onSuccess={handleSignupSuccess}
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo px-6 py-3.5 text-base font-semibold text-white hover:bg-indigo/90 transition-colors"
          >
            {l.unlockCta} <span className="text-electric-yellow">&gt;&gt;</span>
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={handleSkip}
        className="text-sm text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-200 underline underline-offset-2 transition-colors"
      >
        {l.skipCta}
      </button>
    </div>
  );
}
