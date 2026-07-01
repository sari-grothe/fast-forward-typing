"use client";

import { useState, useMemo } from "react";
import type { Locale } from "@/i18n/config";

type KeyDef = {
  key: string;
  label?: string;
  width?: number;
  isModifier?: boolean;
};

type LayoutName = "QWERTY" | "AZERTY" | "QWERTZ";

type LayoutData = {
  numberRow: KeyDef[];
  topRow: KeyDef[];
  homeRow: KeyDef[];
  bottomRow: KeyDef[];
};

const QWERTY: LayoutData = {
  numberRow: [
    { key: "`", label: "`", width: 36 },
    { key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }, { key: "5" },
    { key: "6" }, { key: "7" }, { key: "8" }, { key: "9" }, { key: "0" },
    { key: "-", label: "-" }, { key: "=", label: "=" },
    { key: "Backspace", label: "←", width: 72, isModifier: true },
  ],
  topRow: [
    { key: "Tab", label: "Tab", width: 54, isModifier: true },
    { key: "q" }, { key: "w" }, { key: "e" }, { key: "r" }, { key: "t" },
    { key: "y" }, { key: "u" }, { key: "i" }, { key: "o" }, { key: "p" },
    { key: "[", label: "[" }, { key: "]", label: "]" },
    { key: "\\", label: "\\", width: 54 },
  ],
  homeRow: [
    { key: "CapsLock", label: "Caps", width: 66, isModifier: true },
    { key: "a" }, { key: "s" }, { key: "d" }, { key: "f" }, { key: "g" },
    { key: "h" }, { key: "j" }, { key: "k" }, { key: "l" }, { key: ";", label: ";" },
    { key: "'", label: "'" },
    { key: "Enter", label: "↵", width: 78, isModifier: true },
  ],
  bottomRow: [
    { key: "ShiftL", label: "Shift", width: 84, isModifier: true },
    { key: "z" }, { key: "x" }, { key: "c" }, { key: "v" }, { key: "b" },
    { key: "n" }, { key: "m" }, { key: ",", label: "," }, { key: ".", label: "." },
    { key: "/", label: "/" },
    { key: "ShiftR", label: "Shift", width: 96, isModifier: true },
  ],
};

const AZERTY: LayoutData = {
  numberRow: [
    { key: "²", label: "²", width: 36 },
    { key: "&", label: "&" }, { key: "é", label: "é" }, { key: "\"", label: "\"" }, { key: "'", label: "'" }, { key: "(", label: "(" },
    { key: "-", label: "-" }, { key: "è", label: "è" }, { key: "_", label: "_" }, { key: "ç", label: "ç" }, { key: "à", label: "à" },
    { key: ")", label: ")" }, { key: "=", label: "=" },
    { key: "Backspace", label: "←", width: 72, isModifier: true },
  ],
  topRow: [
    { key: "Tab", label: "Tab", width: 54, isModifier: true },
    { key: "a" }, { key: "z" }, { key: "e" }, { key: "r" }, { key: "t" },
    { key: "y" }, { key: "u" }, { key: "i" }, { key: "o" }, { key: "p" },
    { key: "^", label: "^" }, { key: "$", label: "$" },
    { key: "*", label: "*", width: 54 },
  ],
  homeRow: [
    { key: "CapsLock", label: "Verr", width: 66, isModifier: true },
    { key: "q" }, { key: "s" }, { key: "d" }, { key: "f" }, { key: "g" },
    { key: "h" }, { key: "j" }, { key: "k" }, { key: "l" }, { key: "m" },
    { key: "ù", label: "ù" },
    { key: "Enter", label: "↵", width: 78, isModifier: true },
  ],
  bottomRow: [
    { key: "ShiftL", label: "Maj", width: 84, isModifier: true },
    { key: "w" }, { key: "x" }, { key: "c" }, { key: "v" }, { key: "b" },
    { key: "n" }, { key: ",", label: "," }, { key: ";", label: ";" }, { key: ":", label: ":" },
    { key: "!", label: "!" },
    { key: "ShiftR", label: "Maj", width: 96, isModifier: true },
  ],
};

const QWERTZ: LayoutData = {
  numberRow: [
    { key: "^", label: "^", width: 36 },
    { key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }, { key: "5" },
    { key: "6" }, { key: "7" }, { key: "8" }, { key: "9" }, { key: "0" },
    { key: "ß", label: "ß" }, { key: "´", label: "´" },
    { key: "Backspace", label: "←", width: 72, isModifier: true },
  ],
  topRow: [
    { key: "Tab", label: "Tab", width: 54, isModifier: true },
    { key: "q" }, { key: "w" }, { key: "e" }, { key: "r" }, { key: "t" },
    { key: "z" }, { key: "u" }, { key: "i" }, { key: "o" }, { key: "p" },
    { key: "ü", label: "ü" }, { key: "+", label: "+" },
    { key: "#", label: "#", width: 54 },
  ],
  homeRow: [
    { key: "CapsLock", label: "Caps", width: 66, isModifier: true },
    { key: "a" }, { key: "s" }, { key: "d" }, { key: "f" }, { key: "g" },
    { key: "h" }, { key: "j" }, { key: "k" }, { key: "l" }, { key: "ö", label: "ö" },
    { key: "ä", label: "ä" },
    { key: "Enter", label: "↵", width: 78, isModifier: true },
  ],
  bottomRow: [
    { key: "ShiftL", label: "Shift", width: 84, isModifier: true },
    { key: "y" }, { key: "x" }, { key: "c" }, { key: "v" }, { key: "b" },
    { key: "n" }, { key: "m" }, { key: ",", label: "," }, { key: ".", label: "." },
    { key: "-", label: "-" },
    { key: "ShiftR", label: "Shift", width: 96, isModifier: true },
  ],
};

const layouts: Record<LayoutName, LayoutData> = { QWERTY, AZERTY, QWERTZ };

function getKeyId(keyDef: KeyDef): string {
  if (keyDef.isModifier) return "";
  return keyDef.label ?? keyDef.key;
}

function findDiffs(a: LayoutData, b: LayoutData): Set<string> {
  const diffs = new Set<string>();
  const rows: (keyof LayoutData)[] = ["numberRow", "topRow", "homeRow", "bottomRow"];
  for (const row of rows) {
    const aRow = a[row];
    const bRow = b[row];
    const len = Math.max(aRow.length, bRow.length);
    for (let i = 0; i < len; i++) {
      const ak = aRow[i];
      const bk = bRow[i];
      if (!ak || !bk) continue;
      if (ak.isModifier || bk.isModifier) continue;
      const aId = getKeyId(ak);
      const bId = getKeyId(bk);
      if (aId !== bId) {
        diffs.add(`${row}-${i}`);
      }
    }
  }
  return diffs;
}

type UI = {
  title: string;
  subtitle: string;
  selectLayouts: string;
  usedIn: string;
  highlightDiffs: string;
  diffsFound: string;
  noDiffs: string;
  keyDifferences: string;
  regions: Record<LayoutName, string>;
  facts: { layout: LayoutName; text: string }[];
  tipTitle: string;
  tipText: string;
};

const ui: Record<Locale, UI> = {
  de: {
    title: "Keyboard Layout Vergleich",
    subtitle: "QWERTY, AZERTY und QWERTZ im direkten Vergleich. Finde die Unterschiede auf einen Blick.",
    selectLayouts: "Layouts vergleichen",
    usedIn: "Verwendet in",
    highlightDiffs: "Unterschiede hervorheben",
    diffsFound: "Unterschiede",
    noDiffs: "Gleiche Layouts",
    keyDifferences: "Hauptunterschiede",
    regions: {
      QWERTY: "USA, UK, Niederlande, Skandinavien",
      AZERTY: "Frankreich, Belgien",
      QWERTZ: "Deutschland, Schweiz, Österreich",
    },
    facts: [
      { layout: "QWERTY", text: "1873 erfunden, um Schreibmaschinen-Blockaden zu vermeiden. Die Mechanik gibt es seit 100 Jahren nicht mehr - das Layout schon." },
      { layout: "AZERTY", text: "A und Q sowie Z und W getauscht. Erst 2019 wurde AZERTY offiziell standardisiert." },
      { layout: "QWERTZ", text: "Z und Y getauscht, weil Z im Deutschen 20x häufiger vorkommt als Y." },
    ],
    tipTitle: "Das Wichtigste",
    tipText: "Kein Layout ist objektiv besser. Nutze das Layout deines Landes und lerne, mit allen zehn Fingern zu tippen.",
  },
  en: {
    title: "Keyboard Layout Comparison",
    subtitle: "QWERTY, AZERTY, and QWERTZ side by side. Spot the differences at a glance.",
    selectLayouts: "Compare layouts",
    usedIn: "Used in",
    highlightDiffs: "Highlight differences",
    diffsFound: "differences",
    noDiffs: "Same layouts",
    keyDifferences: "Key differences",
    regions: {
      QWERTY: "USA, UK, Netherlands, Scandinavia",
      AZERTY: "France, Belgium",
      QWERTZ: "Germany, Switzerland, Austria",
    },
    facts: [
      { layout: "QWERTY", text: "Invented in 1873 to prevent typewriter jams. The mechanical constraint is gone - but the layout stuck." },
      { layout: "AZERTY", text: "Swaps A/Q and Z/W. Wasn't officially standardized in France until 2019." },
      { layout: "QWERTZ", text: "Swaps Z and Y because Z appears 20x more often in German than Y." },
    ],
    tipTitle: "The bottom line",
    tipText: "No layout is objectively better. Use the one your country uses and learn to touch type with all ten fingers.",
  },
  fr: {
    title: "Comparaison des dispositions clavier",
    subtitle: "QWERTY, AZERTY et QWERTZ côte à côte. Repère les différences en un coup d'œil.",
    selectLayouts: "Comparer les dispositions",
    usedIn: "Utilisé en",
    highlightDiffs: "Surligner les différences",
    diffsFound: "différences",
    noDiffs: "Dispositions identiques",
    keyDifferences: "Différences principales",
    regions: {
      QWERTY: "États-Unis, Royaume-Uni, Pays-Bas, Scandinavie",
      AZERTY: "France, Belgique",
      QWERTZ: "Allemagne, Suisse, Autriche",
    },
    facts: [
      { layout: "QWERTY", text: "Inventé en 1873 pour éviter les blocages des machines à écrire. La contrainte mécanique a disparu, mais la disposition est restée." },
      { layout: "AZERTY", text: "Échange A/Q et Z/W. N'a été officiellement normalisé en France qu'en 2019." },
      { layout: "QWERTZ", text: "Échange Z et Y parce que le Z apparaît 20x plus souvent en allemand que le Y." },
    ],
    tipTitle: "L'essentiel",
    tipText: "Aucune disposition n'est objectivement meilleure. Utilise celle de ton pays et apprends à taper avec tes dix doigts.",
  },
};

function CompactKeyboard({
  layout,
  name,
  diffs,
  showDiffs,
}: {
  layout: LayoutData;
  name: LayoutName;
  diffs: Set<string>;
  showDiffs: boolean;
}) {
  const rows: { key: keyof LayoutData; keys: KeyDef[] }[] = [
    { key: "numberRow", keys: layout.numberRow },
    { key: "topRow", keys: layout.topRow },
    { key: "homeRow", keys: layout.homeRow },
    { key: "bottomRow", keys: layout.bottomRow },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-[2px] sm:gap-[3px] p-2 sm:p-3 rounded-xl border border-zinc-200 dark:border-dark-border bg-zinc-100/80 dark:bg-dark/60">
      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">{name}</div>
      {rows.map(({ key: rowKey, keys }) => (
        <div key={rowKey} className="flex w-full gap-[2px] sm:gap-[3px]">
          {keys.map((k, i) => {
            const isDiff = showDiffs && diffs.has(`${rowKey}-${i}`);
            const weight = k.width ? k.width / 40 : 1;
            return (
              <div
                key={`${rowKey}-${i}`}
                className={[
                  "flex items-center justify-center rounded border select-none transition-all duration-200 h-7 sm:h-9 min-w-0",
                  k.isModifier
                    ? "border-zinc-100 dark:border-dark-border text-[8px] sm:text-[10px] text-zinc-400 dark:text-zinc-600"
                    : "border-zinc-200 dark:border-dark-border text-[10px] sm:text-sm font-mono font-medium shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)]",
                  isDiff
                    ? "bg-indigo/15 border-indigo/40 dark:bg-indigo/20 dark:border-indigo/50 ring-1 ring-indigo/30"
                    : "bg-white dark:bg-dark-surface",
                ].join(" ")}
                style={{ flexGrow: weight, flexShrink: weight, flexBasis: 0 }}
              >
                <span className={isDiff ? "text-indigo font-semibold" : ""}>
                  {k.label ?? k.key.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function KeyboardComparison({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const allLayouts: LayoutName[] = ["QWERTY", "AZERTY", "QWERTZ"];
  const defaultA: LayoutName = locale === "fr" ? "AZERTY" : locale === "de" ? "QWERTZ" : "QWERTY";
  const defaultB: LayoutName = locale === "fr" ? "QWERTY" : locale === "de" ? "QWERTY" : "AZERTY";

  const [layoutA, setLayoutA] = useState<LayoutName>(defaultA);
  const [layoutB, setLayoutB] = useState<LayoutName>(defaultB);
  const [showDiffs, setShowDiffs] = useState(true);

  const diffs = useMemo(() => findDiffs(layouts[layoutA], layouts[layoutB]), [layoutA, layoutB]);
  const relevantFacts = t.facts.filter((f) => f.layout === layoutA || f.layout === layoutB);

  return (
    <div className="space-y-8">
      {/* Layout selectors */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{t.selectLayouts}</label>
          <select
            value={layoutA}
            onChange={(e) => setLayoutA(e.target.value as LayoutName)}
            className="rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-3 py-2 text-sm font-mono font-semibold text-dark-text dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo/30"
          >
            {allLayouts.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          <span className="text-zinc-400 font-medium">vs</span>
          <select
            value={layoutB}
            onChange={(e) => setLayoutB(e.target.value as LayoutName)}
            className="rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface px-3 py-2 text-sm font-mono font-semibold text-dark-text dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo/30"
          >
            {allLayouts.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showDiffs}
            onChange={(e) => setShowDiffs(e.target.checked)}
            className="rounded border-zinc-300 text-indigo focus:ring-indigo/30"
          />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">{t.highlightDiffs}</span>
        </label>
      </div>

      {/* Diff count badge */}
      <div className="text-center">
        {layoutA === layoutB ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-dark-surface text-sm text-zinc-500">
            {t.noDiffs}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo/10 text-sm font-medium text-indigo">
            {diffs.size} {t.diffsFound}
          </span>
        )}
      </div>

      {/* Side-by-side keyboards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-3">
          <div className="flex flex-col items-center gap-0.5 mx-auto w-fit px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-surface">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">{t.usedIn}</span>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200 text-center">{t.regions[layoutA]}</span>
          </div>
          <CompactKeyboard layout={layouts[layoutA]} name={layoutA} diffs={diffs} showDiffs={showDiffs} />
        </div>
        <div className="space-y-3">
          <div className="flex flex-col items-center gap-0.5 mx-auto w-fit px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-surface">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">{t.usedIn}</span>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200 text-center">{t.regions[layoutB]}</span>
          </div>
          <CompactKeyboard layout={layouts[layoutB]} name={layoutB} diffs={diffs} showDiffs={showDiffs} />
        </div>
      </div>

      {/* Facts */}
      {relevantFacts.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-dark-text dark:text-white">{t.keyDifferences}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relevantFacts.map((fact) => (
              <div
                key={fact.layout}
                className="rounded-xl border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface p-4"
              >
                <span className="text-xs font-mono font-semibold text-indigo">{fact.layout}</span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tip */}
      <div className="rounded-xl bg-indigo/5 dark:bg-indigo/10 border border-indigo/10 dark:border-indigo/20 p-5">
        <p className="text-sm font-semibold text-dark-text dark:text-white mb-1">{t.tipTitle}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.tipText}</p>
      </div>
    </div>
  );
}
