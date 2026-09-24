"use client";

import { GA_ID, OPEN_SETTINGS_EVENT } from "@/lib/consent";

// Footer link that reopens the consent settings. Renders nothing while no
// optional service is configured, so there is never an empty settings panel.
export function CookieSettingsButton({ label }: { label: string }) {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="hover:text-indigo transition-colors"
    >
      {label}
    </button>
  );
}
