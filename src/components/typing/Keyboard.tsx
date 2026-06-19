"use client";

import { fingerForKey, fingerColors, type Finger } from "@/lib/lessons";

type Props = {
  activeKey?: string;
  activeKeys?: string[];
  pressedKey?: string;
  showFingers?: boolean;
  className?: string;
};

type KeyDef = {
  key: string;
  label?: string;
  width?: number;
};

const ROW_1: KeyDef[] = [
  { key: "q" }, { key: "w" }, { key: "e" }, { key: "r" }, { key: "t" },
  { key: "y" }, { key: "u" }, { key: "i" }, { key: "o" }, { key: "p" },
];

const ROW_2: KeyDef[] = [
  { key: "a" }, { key: "s" }, { key: "d" }, { key: "f" }, { key: "g" },
  { key: "h" }, { key: "j" }, { key: "k" }, { key: "l" }, { key: ";", label: ";" },
];

const ROW_3: KeyDef[] = [
  { key: "z" }, { key: "x" }, { key: "c" }, { key: "v" }, { key: "b" },
  { key: "n" }, { key: "m" }, { key: ",", label: "," }, { key: ".", label: "." }, { key: "/", label: "/" },
];

const SPACE: KeyDef = { key: " ", label: "Space", width: 280 };

function getKeyStyle(
  key: string,
  activeKey?: string,
  activeKeys?: string[],
  pressedKey?: string,
  showFingers?: boolean,
): React.CSSProperties {
  const finger = fingerForKey[key.toLowerCase()];
  const isActive = activeKey?.toLowerCase() === key.toLowerCase();
  const isInLesson = activeKeys?.includes(key.toLowerCase()) ?? true;
  const isPressed = pressedKey?.toLowerCase() === key.toLowerCase();

  if (isPressed) {
    return {
      backgroundColor: finger ? fingerColors[finger] : "#3f0ff2",
      color: "#fff",
      transform: "scale(0.95)",
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

  if (showFingers && isInLesson && finger) {
    return {
      backgroundColor: fingerColors[finger] + "20",
      borderColor: fingerColors[finger] + "40",
      color: "inherit",
    };
  }

  if (!isInLesson) {
    return { opacity: 0.3 };
  }

  return {};
}

function KeyCap({
  keyDef,
  activeKey,
  activeKeys,
  pressedKey,
  showFingers,
}: {
  keyDef: KeyDef;
  activeKey?: string;
  activeKeys?: string[];
  pressedKey?: string;
  showFingers?: boolean;
}) {
  const width = keyDef.width ?? 40;
  const style = getKeyStyle(keyDef.key, activeKey, activeKeys, pressedKey, showFingers);
  const finger = fingerForKey[keyDef.key.toLowerCase()];
  const isActive = activeKey?.toLowerCase() === keyDef.key.toLowerCase();

  return (
    <div
      className="relative flex items-center justify-center rounded-lg border border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-surface text-sm font-mono font-medium select-none"
      style={{ width, height: 40, ...style }}
    >
      <span className={isActive ? "text-white" : ""}>
        {keyDef.label ?? keyDef.key.toUpperCase()}
      </span>
      {showFingers && finger && (
        <div
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: fingerColors[finger] }}
        />
      )}
    </div>
  );
}

function FingerGuide({ finger, label }: { finger: Finger; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
      <div
        className="w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: fingerColors[finger] }}
      />
      <span>{label}</span>
    </div>
  );
}

export function Keyboard({
  activeKey,
  activeKeys,
  pressedKey,
  showFingers = true,
  className = "",
}: Props) {
  return (
    <div className={`select-none ${className}`}>
      <div className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-zinc-200 dark:border-dark-border bg-zinc-50 dark:bg-dark/50">
        {/* Top row */}
        <div className="flex gap-1.5">
          {ROW_1.map((k) => (
            <KeyCap key={k.key} keyDef={k} activeKey={activeKey} activeKeys={activeKeys} pressedKey={pressedKey} showFingers={showFingers} />
          ))}
        </div>
        {/* Home row */}
        <div className="flex gap-1.5" style={{ paddingLeft: 12 }}>
          {ROW_2.map((k) => (
            <KeyCap key={k.key} keyDef={k} activeKey={activeKey} activeKeys={activeKeys} pressedKey={pressedKey} showFingers={showFingers} />
          ))}
        </div>
        {/* Bottom row */}
        <div className="flex gap-1.5" style={{ paddingLeft: 24 }}>
          {ROW_3.map((k) => (
            <KeyCap key={k.key} keyDef={k} activeKey={activeKey} activeKeys={activeKeys} pressedKey={pressedKey} showFingers={showFingers} />
          ))}
        </div>
        {/* Space bar */}
        <div className="flex gap-1.5 mt-0.5">
          <KeyCap keyDef={SPACE} activeKey={activeKey} activeKeys={activeKeys} pressedKey={pressedKey} showFingers={showFingers} />
        </div>
      </div>

      {/* Finger legend */}
      {showFingers && (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
          <FingerGuide finger="left-pinky" label="Pinky" />
          <FingerGuide finger="left-ring" label="Ring" />
          <FingerGuide finger="left-middle" label="Middle" />
          <FingerGuide finger="left-index" label="Index" />
          <FingerGuide finger="right-index" label="Index" />
          <FingerGuide finger="right-middle" label="Middle" />
          <FingerGuide finger="right-ring" label="Ring" />
          <FingerGuide finger="right-pinky" label="Pinky" />
          <FingerGuide finger="thumb" label="Thumb" />
        </div>
      )}
    </div>
  );
}
