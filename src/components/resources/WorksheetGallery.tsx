"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { worksheets, worksheetUrl } from "@/lib/worksheets";
import { resourcesUi } from "@/lib/resources";
import { CheatSheetGate } from "@/components/resources/CheatSheetGate";

type Props = {
  locale: Locale;
};

// The printable worksheets on the resources hub. A gated sheet opens the
// same name+email form the shortcut articles use, right inside its card;
// an ungated one (blank layout) downloads directly.
export function WorksheetGallery({ locale }: Props) {
  const ui = resourcesUi[locale];
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section aria-labelledby="worksheets-heading">
      <div className="mb-4">
        <h2 id="worksheets-heading" className="text-lg font-bold text-dark-text dark:text-white">{ui.worksheetsTitle}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{ui.worksheetsSubtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {worksheets.map((sheet) => {
          const url = worksheetUrl(sheet, locale);
          const open = openId === sheet.id;
          return (
            <div
              key={sheet.id}
              className="flex flex-col rounded-2xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-electric-yellow to-peach" />
              <div className="p-5 flex flex-col flex-1 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-peach/20 text-dark-text dark:text-peach">PDF · A4</span>
                  {!sheet.gated && <span className="text-[11px] text-zinc-600">{ui.worksheetFree}</span>}
                </div>
                <h3 className="text-base font-bold text-dark-text dark:text-white">{sheet.title[locale]}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-1">{sheet.description[locale]}</p>
                {sheet.gated ? (
                  open ? (
                    <CheatSheetGate
                      locale={locale}
                      title={sheet.title[locale]}
                      pdfUrl={url}
                      labels={{
                        gateTitle: ui.gateTitle,
                        gateDesc: ui.gateDesc,
                        namePlaceholder: ui.namePlaceholder,
                        emailPlaceholder: ui.emailPlaceholder,
                        gateCta: ui.gateCta,
                        gateSending: ui.gateSending,
                        gateError: ui.gateError,
                        consentText: ui.consentText,
                        consentLinkText: ui.consentLinkText,
                        downloadPdf: ui.downloadPdf,
                        downloadHint: ui.downloadHint,
                      }}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenId(sheet.id)}
                      className="mt-2 inline-flex items-center gap-1 self-start text-sm font-medium text-indigo hover:underline"
                    >
                      {ui.downloadPdf}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  )
                ) : (
                  <a href={url} download className="mt-2 inline-flex items-center gap-1 self-start text-sm font-medium text-indigo hover:underline">
                    {ui.downloadPdf}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
