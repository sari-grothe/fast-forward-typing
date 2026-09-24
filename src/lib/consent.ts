// Cookie consent state. One optional category today (analytics = Google
// Analytics 4). The consent cookie itself is strictly necessary and lasts
// 6 months, so the choice is asked again at least twice a year (CNIL
// recommendation). Nothing optional loads before an explicit "yes".
export const CONSENT_COOKIE = "fft_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
export const CONSENT_EVENT = "fft:consent-change";
export const OPEN_SETTINGS_EVENT = "fft:open-cookie-settings";

// Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in Vercel to switch analytics
// and the banner on. Without it the site loads no optional service at all.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export type Consent = { v: 1; analytics: boolean; t: number };

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match.slice(CONSENT_COOKIE.length + 1)));
    if (parsed && parsed.v === 1 && typeof parsed.analytics === "boolean") return parsed as Consent;
  } catch {
    // corrupt cookie: treat as no decision
  }
  return null;
}

export function writeConsent(analytics: boolean): Consent {
  const consent: Consent = { v: 1, analytics, t: Date.now() };
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(consent))}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
  return consent;
}

// Removes Google Analytics cookies (_ga, _ga_<id>) on the current host and
// its parent domain, and switches the tracker off for the rest of the visit.
export function purgeAnalytics(): void {
  if (typeof document === "undefined") return;
  if (GA_ID) (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  const host = location.hostname;
  const parts = host.split(".");
  const domains = [host, `.${host}`];
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);
  for (const cookie of document.cookie.split("; ")) {
    const name = cookie.split("=")[0];
    if (name === "_ga" || name.startsWith("_ga_")) {
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}`;
      }
      document.cookie = `${name}=; Max-Age=0; Path=/`;
    }
  }
}
