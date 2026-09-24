import type { Locale } from "@/i18n/config";

// Physical key rows of the three supported layouts. Shared by the
// on-screen keyboard (src/components/typing/Keyboard.tsx) and the
// printable worksheets (scripts/cheatsheets), so both always draw the
// same keyboard.

export type KeyDef = {
  key: string;
  label?: string;
  width?: number;
  isModifier?: boolean;
};

export type KeyboardLayout = {
  name: "QWERTY" | "QWERTZ" | "AZERTY";
  numberRow: KeyDef[];
  topRow: KeyDef[];
  homeRow: KeyDef[];
  bottomRow: KeyDef[];
  spaceRow: KeyDef[];
  homeKeys: string[];
};

export const QWERTY: KeyboardLayout = {
  name: "QWERTY",
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

export const QWERTZ: KeyboardLayout = {
  name: "QWERTZ",
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

export const AZERTY: KeyboardLayout = {
  name: "AZERTY",
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

export const layouts: Record<Locale, KeyboardLayout> = {
  en: QWERTY,
  de: QWERTZ,
  fr: AZERTY,
};
