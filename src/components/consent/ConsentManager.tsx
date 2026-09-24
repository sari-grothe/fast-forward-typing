"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import {
  CONSENT_EVENT,
  GA_ID,
  OPEN_SETTINGS_EVENT,
  purgeAnalytics,
  readConsent,
  writeConsent,
} from "@/lib/consent";

// Component-local i18n table (see docs/copywriting-de.md, "known trap"):
// change all three languages together.
const i18n: Record<Locale, {
  title: string;
  text: string;
  shortText: string;
  accept: string;
  reject: string;
  settings: string;
  privacyLink: string;
  panelTitle: string;
  necessaryTitle: string;
  necessaryText: string;
  analyticsTitle: string;
  analyticsText: string;
  save: string;
  close: string;
}> = {
  de: {
    title: "Cookies und Reichweitenmessung",
    text: "Mit Ihrer Einwilligung messen wir mit Google Analytics, wie unsere Seiten genutzt werden, um das Angebot zu verbessern. Ohne Einwilligung werden keine Analyse-Cookies gesetzt und keine Daten an Google übermittelt.",
    shortText: "Mit Ihrer Einwilligung messen wir mit Google Analytics, wie die Seite genutzt wird. Ohne Einwilligung gehen keine Daten an Google.",
    accept: "Alle akzeptieren",
    reject: "Alle ablehnen",
    settings: "Einstellungen",
    privacyLink: "Datenschutzerklärung",
    panelTitle: "Cookie-Einstellungen",
    necessaryTitle: "Technisch erforderlich",
    necessaryText: "Design-Modus, Lernfortschritt und Ihre Cookie-Entscheidung. Immer aktiv, keine Einwilligung nötig.",
    analyticsTitle: "Reichweitenmessung (Google Analytics 4)",
    analyticsText: "Pseudonyme Nutzungsdaten, Cookies bis 13 Monate. Anbieter: Google Ireland Limited.",
    save: "Auswahl speichern",
    close: "Schließen",
  },
  en: {
    title: "Cookies and audience measurement",
    text: "With your consent we use Google Analytics to measure how our pages are used, so we can improve the offer. Without consent no analytics cookies are set and no data is sent to Google.",
    shortText: "With your consent we use Google Analytics to measure how the site is used. Without consent no data goes to Google.",
    accept: "Accept all",
    reject: "Reject all",
    settings: "Settings",
    privacyLink: "Privacy policy",
    panelTitle: "Cookie settings",
    necessaryTitle: "Strictly necessary",
    necessaryText: "Display mode, learning progress and your cookie choice. Always active, no consent needed.",
    analyticsTitle: "Audience measurement (Google Analytics 4)",
    analyticsText: "Pseudonymous usage data, cookies up to 13 months. Provider: Google Ireland Limited.",
    save: "Save choice",
    close: "Close",
  },
  fr: {
    title: "Cookies et mesure d'audience",
    text: "Avec votre consentement, nous mesurons avec Google Analytics l'utilisation de nos pages afin d'améliorer l'offre. Sans consentement, aucun cookie d'analyse n'est déposé et aucune donnée n'est transmise à Google.",
    shortText: "Avec votre consentement, nous mesurons avec Google Analytics l'utilisation du site. Sans consentement, aucune donnée n'est transmise à Google.",
    accept: "Tout accepter",
    reject: "Tout refuser",
    settings: "Paramètres",
    privacyLink: "Politique de confidentialité",
    panelTitle: "Paramètres des cookies",
    necessaryTitle: "Strictement nécessaires",
    necessaryText: "Mode d'affichage, progression et votre choix de cookies. Toujours actifs, sans consentement.",
    analyticsTitle: "Mesure d'audience (Google Analytics 4)",
    analyticsText: "Données d'usage pseudonymisées, cookies jusqu'à 13 mois. Fournisseur : Google Ireland Limited.",
    save: "Enregistrer mon choix",
    close: "Fermer",
  },
};

// Accept is the primary button, reject the secondary one. Both are real
// buttons of the same size in the same row - a softer colour is fine, a
// hidden or text-only reject is not (CNIL: refusing must be as easy).
const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-all";
const acceptButton = `${base} border-transparent bg-indigo text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:scale-[1.02]`;
const rejectButton = `${base} border-zinc-300 dark:border-zinc-600 bg-transparent text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 hover:text-dark-text dark:hover:text-white`;
const saveButton = `${base} border-indigo text-indigo hover:bg-indigo/5 dark:text-white dark:border-white/30 dark:hover:bg-white/5`;

export function ConsentManager({ locale }: { locale: Locale }) {
  const l = i18n[locale] ?? i18n.en;
  const [ready, setReady] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [decided, setDecided] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [draft, setDraft] = useState(false);

  const sync = useCallback(() => {
    const c = readConsent();
    setDecided(c !== null);
    setAnalytics(c?.analytics === true);
    if (c && !c.analytics) purgeAnalytics();
  }, []);

  useEffect(() => {
    sync();
    setReady(true);
    const onOpen = () => {
      setDraft(readConsent()?.analytics === true);
      setPanelOpen(true);
    };
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
    };
  }, [sync]);

  // No optional service configured: no banner, no scripts, nothing to ask.
  if (!GA_ID || !ready) return null;

  const choose = (value: boolean) => {
    writeConsent(value);
    if (!value) purgeAnalytics();
    setPanelOpen(false);
  };

  return (
    <>
      {analytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:33696000});`}
          </Script>
        </>
      )}

      {!decided && !panelOpen && (
        <div
          role="dialog"
          aria-label={l.title}
          className="fixed inset-x-0 bottom-0 z-[90] border-t border-zinc-200 dark:border-dark-border bg-white/95 dark:bg-dark-surface/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3 pb-4 md:py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug md:flex-1">
              <span className="font-semibold text-dark-text dark:text-white">{l.title}. </span>
              <span className="md:hidden">{l.shortText}</span>
              <span className="hidden md:inline">{l.text}</span>{" "}
              <Link href={`/${locale}/privacy`} className="text-indigo hover:underline whitespace-nowrap">
                {l.privacyLink}
              </Link>
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
              <button type="button" onClick={() => choose(true)} className={acceptButton}>
                {l.accept}
              </button>
              <button type="button" onClick={() => choose(false)} className={rejectButton}>
                {l.reject}
              </button>
              <button
                type="button"
                onClick={() => {
                  setDraft(false);
                  setPanelOpen(true);
                }}
                className="text-sm font-medium text-zinc-600 hover:text-indigo underline underline-offset-2 px-1"
              >
                {l.settings}
              </button>
            </div>
          </div>
        </div>
      )}

      {panelOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 p-3" role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-label={l.panelTitle}
            className="w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <p className="text-lg font-bold text-dark-text dark:text-white">{l.panelTitle}</p>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="text-sm text-zinc-600 hover:text-indigo"
                aria-label={l.close}
              >
                {l.close}
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-zinc-200 dark:border-dark-border p-4">
                <p className="font-semibold text-sm text-dark-text dark:text-white">{l.necessaryTitle}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{l.necessaryText}</p>
              </div>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 dark:border-dark-border p-4 cursor-pointer">
                <span>
                  <span className="block font-semibold text-sm text-dark-text dark:text-white">{l.analyticsTitle}</span>
                  <span className="block text-xs text-zinc-600 dark:text-zinc-400 mt-1">{l.analyticsText}</span>
                </span>
                <input
                  type="checkbox"
                  checked={draft}
                  onChange={(e) => setDraft(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 accent-indigo"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => choose(draft)} className={saveButton}>
                {l.save}
              </button>
              <button type="button" onClick={() => choose(true)} className={acceptButton}>
                {l.accept}
              </button>
              <button type="button" onClick={() => choose(false)} className={rejectButton}>
                {l.reject}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
