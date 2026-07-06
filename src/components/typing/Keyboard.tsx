"use client";

import { getFingerForKey, fingerColors, type Finger } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

type Props = {
  activeKey?: string;
  activeKeys?: string[];
  pressedKey?: string;
  showFingers?: boolean;
  homeKeys?: string[];
  locale?: Locale;
  className?: string;
};

type KeyDef = {
  key: string;
  label?: string;
  width?: number;
  isModifier?: boolean;
};

type KeyboardLayout = {
  numberRow: KeyDef[];
  topRow: KeyDef[];
  homeRow: KeyDef[];
  bottomRow: KeyDef[];
  spaceRow: KeyDef[];
  homeKeys: string[];
};

const QWERTY: KeyboardLayout = {
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
  spaceRow: [{ key: " ", label: "", width: 320 }],
  homeKeys: ["a", "s", "d", "f", "j", "k", "l", ";"],
};

const QWERTZ: KeyboardLayout = {
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
  spaceRow: [{ key: " ", label: "", width: 320 }],
  homeKeys: ["a", "s", "d", "f", "j", "k", "l", "ö"],
};

const AZERTY: KeyboardLayout = {
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
  spaceRow: [{ key: " ", label: "", width: 320 }],
  homeKeys: ["q", "s", "d", "f", "j", "k", "l", "m"],
};

const layouts: Record<string, KeyboardLayout> = {
  en: QWERTY,
  de: QWERTZ,
  fr: AZERTY,
};

const fingerLabels: Record<Locale, Record<string, string>> = {
  de: {
    "left-pinky": "Kl. Finger",
    "left-ring": "Ringfinger",
    "left-middle": "Mittelfinger",
    "left-index": "Zeigefinger",
    "right-index": "Zeigefinger",
    "right-middle": "Mittelfinger",
    "right-ring": "Ringfinger",
    "right-pinky": "Kl. Finger",
    thumb: "Daumen",
  },
  en: {
    "left-pinky": "Pinky",
    "left-ring": "Ring",
    "left-middle": "Middle",
    "left-index": "Index",
    "right-index": "Index",
    "right-middle": "Middle",
    "right-ring": "Ring",
    "right-pinky": "Pinky",
    thumb: "Thumb",
  },
  fr: {
    "left-pinky": "Auriculaire",
    "left-ring": "Annulaire",
    "left-middle": "Majeur",
    "left-index": "Index",
    "right-index": "Index",
    "right-middle": "Majeur",
    "right-ring": "Annulaire",
    "right-pinky": "Auriculaire",
    thumb: "Pouce",
  },
};

const homeKeyInstruction: Record<Locale, string> = {
  de: "Lege deine Finger auf",
  en: "Put your fingers on",
  fr: "Place tes doigts sur",
};

const andWord: Record<Locale, string> = {
  de: "und",
  en: "and",
  fr: "et",
};

function getKeyStyle(
  key: string,
  locale: Locale,
  activeKey?: string,
  activeKeys?: string[],
  pressedKey?: string,
  showFingers?: boolean,
  homeKeys?: string[],
): React.CSSProperties {
  const lk = key.toLowerCase();
  const finger = getFingerForKey(lk, locale);
  const isActive = activeKey?.toLowerCase() === lk;
  const isInLesson = activeKeys?.includes(lk) ?? true;
  const isPressed = pressedKey?.toLowerCase() === lk;
  const isHome = homeKeys?.includes(lk);

  if (isPressed) {
    return {
      backgroundColor: finger ? fingerColors[finger] : "#3f0ff2",
      color: "#fff",
      transform: "translateY(1px)",
      transition: "all 0.08s ease",
    };
  }

  if (isActive) {
    return {
      backgroundColor: "#3f0ff2",
      color: "#fff",
      boxShadow: "0 0 0 2px #3f0ff2, 0 0 12px rgba(63, 15, 242, 0.4)",
      animation: "pulse-key 1.5s ease-in-out infinite",
    };
  }

  if (isHome) {
    return {
      backgroundColor: finger ? fingerColors[finger] + "25" : undefined,
      borderColor: finger ? fingerColors[finger] + "60" : undefined,
      boxShadow: "inset 0 -2px 0 " + (finger ? fingerColors[finger] + "40" : "transparent"),
    };
  }

  if (showFingers && isInLesson && finger) {
    return {
      backgroundColor: finger ? fingerColors[finger] + "12" : undefined,
      borderColor: finger ? fingerColors[finger] + "30" : undefined,
    };
  }

  if (!isInLesson && finger) {
    return { opacity: 0.25 };
  }

  return {};
}

function KeyCap({
  keyDef,
  locale,
  activeKey,
  activeKeys,
  pressedKey,
  showFingers,
  homeKeys,
}: {
  keyDef: KeyDef;
  locale: Locale;
  activeKey?: string;
  activeKeys?: string[];
  pressedKey?: string;
  showFingers?: boolean;
  homeKeys?: string[];
}) {
  const width = keyDef.width ?? 40;
  const style = keyDef.isModifier
    ? { opacity: 0.4 }
    : getKeyStyle(keyDef.key, locale, activeKey, activeKeys, pressedKey, showFingers, homeKeys);
  const isActive = !keyDef.isModifier && activeKey?.toLowerCase() === keyDef.key.toLowerCase();
  const isHome = !keyDef.isModifier && homeKeys?.includes(keyDef.key.toLowerCase());

  return (
    <div
      className={[
        "relative flex items-center justify-center rounded-lg border bg-white dark:bg-dark-surface select-none transition-all duration-75",
        keyDef.isModifier
          ? "border-zinc-100 dark:border-dark-border text-[10px] text-zinc-400 dark:text-zinc-600 font-sans"
          : "border-zinc-200 dark:border-dark-border text-sm font-mono font-medium shadow-[0_2px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_2px_0_0_rgba(255,255,255,0.03)]",
      ].join(" ")}
      style={{ width, height: 40, ...style }}
    >
      <span className={isActive ? "text-white" : ""}>
        {keyDef.label ?? keyDef.key.toUpperCase()}
      </span>
      {isHome && !isActive && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
      )}
    </div>
  );
}

export function Keyboard({
  activeKey,
  activeKeys,
  pressedKey,
  showFingers = true,
  homeKeys,
  locale = "en",
  className = "",
}: Props) {
  const layout = layouts[locale] ?? layouts.en;
  const effectiveHomeKeys = homeKeys ?? layout.homeKeys;
  const labels = fingerLabels[locale] ?? fingerLabels.en;

  const leftKeys = effectiveHomeKeys.filter((k) => {
    const f = getFingerForKey(k, locale);
    return f?.startsWith("left");
  });
  const rightKeys = effectiveHomeKeys.filter((k) => {
    const f = getFingerForKey(k, locale);
    return f?.startsWith("right");
  });

  const keyCapProps = { locale, activeKey, activeKeys, pressedKey, showFingers, homeKeys: effectiveHomeKeys };

  return (
    <div className={`select-none ${className}`}>
      {/* Finger placement instruction */}
      <div className="flex items-center justify-center gap-1.5 mb-3 text-sm text-zinc-500 dark:text-zinc-400">
        <span>{homeKeyInstruction[locale]}</span>
        <div className="flex gap-1">
          {leftKeys.map((k) => (
            <kbd key={k} className="inline-flex items-center justify-center w-6 h-6 rounded border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface text-xs font-mono font-semibold text-dark-text dark:text-white">
              {k === ";" ? ";" : k.toUpperCase()}
            </kbd>
          ))}
        </div>
        <span>{andWord[locale]}</span>
        <div className="flex gap-1">
          {rightKeys.map((k) => (
            <kbd key={k} className="inline-flex items-center justify-center w-6 h-6 rounded border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface text-xs font-mono font-semibold text-dark-text dark:text-white">
              {k === ";" ? ";" : k.toUpperCase()}
            </kbd>
          ))}
        </div>
      </div>

      {/* Keyboard */}
      <div className="flex flex-col items-center gap-[3px] p-3 sm:p-4 rounded-2xl border border-zinc-200 dark:border-dark-border bg-zinc-100/80 dark:bg-dark/60">
        <div className="flex gap-[3px]">
          {layout.numberRow.map((k, i) => (
            <KeyCap key={`num-${i}`} keyDef={k} {...keyCapProps} />
          ))}
        </div>
        <div className="flex gap-[3px]">
          {layout.topRow.map((k, i) => (
            <KeyCap key={`top-${i}`} keyDef={k} {...keyCapProps} />
          ))}
        </div>
        <div className="flex gap-[3px]">
          {layout.homeRow.map((k, i) => (
            <KeyCap key={`home-${i}`} keyDef={k} {...keyCapProps} />
          ))}
        </div>
        <div className="flex gap-[3px]">
          {layout.bottomRow.map((k, i) => (
            <KeyCap key={`bot-${i}`} keyDef={k} {...keyCapProps} />
          ))}
        </div>
        <div className="flex gap-[3px]">
          <KeyCap keyDef={layout.spaceRow[0]} {...keyCapProps} />
        </div>
      </div>

      {/* Finger legend - compact */}
      {showFingers && (
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2.5 text-[11px] text-zinc-400 dark:text-zinc-500">
          {(["left-pinky", "left-ring", "left-middle", "left-index", "right-index", "right-middle", "right-ring", "right-pinky"] as Finger[]).map((f) => (
            <div key={f} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: fingerColors[f] }} />
              <span>{labels[f]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
