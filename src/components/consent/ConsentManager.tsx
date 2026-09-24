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

// Same size and style for accept and reject on purpose: refusing must be
// exactly as easy and as visible as accepting.
const choiceButton =
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl border-2 border-transparent bg-indigo px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity";

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
          className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-5 shadow-2xl"
        >
          <p className="font-semibold text-dark-text dark:text-white mb-1.5">{l.title}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
            {l.text}{" "}
            <Link href={`/${locale}/privacy`} className="text-indigo hover:underline">
              {l.privacyLink}
            </Link>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => choose(true)} className={choiceButton}>
              {l.accept}
            </button>
            <button type="button" onClick={() => choose(false)} className={choiceButton}>
              {l.reject}
            </button>
            <button
              type="button"
              onClick={() => {
                setDraft(false);
                setPanelOpen(true);
              }}
              className="text-sm font-medium text-zinc-500 hover:text-indigo underline underline-offset-2"
            >
              {l.settings}
            </button>
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
                className="text-sm text-zinc-500 hover:text-indigo"
                aria-label={l.close}
              >
                {l.close}
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-zinc-200 dark:border-dark-border p-4">
                <p className="font-semibold text-sm text-dark-text dark:text-white">{l.necessaryTitle}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{l.necessaryText}</p>
              </div>
              <label className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200 dark:border-dark-border p-4 cursor-pointer">
                <span>
                  <span className="block font-semibold text-sm text-dark-text dark:text-white">{l.analyticsTitle}</span>
                  <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">{l.analyticsText}</span>
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
              <button type="button" onClick={() => choose(draft)} className={choiceButton}>
                {l.save}
              </button>
              <button type="button" onClick={() => choose(true)} className={choiceButton}>
                {l.accept}
              </button>
              <button type="button" onClick={() => choose(false)} className={choiceButton}>
                {l.reject}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
