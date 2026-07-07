import { fingerColors, type Finger } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

// Two hands resting on the home row, drawn as one continuous silhouette
// per hand (wrist -> pinky outer edge -> fingertips -> finger valleys ->
// thumb -> wrist) in calm line-art style: no knuckles, no nails, nothing
// uncanny. Fingertip x-positions are COMPUTED from the key grid, so hands
// and keys can never drift apart; the right hand is an exact mirror of the
// left (the home row is symmetric around x=530), so only one hand shape is
// maintained.
//
// activeKey highlights the key AND the finger that presses it, in that
// finger's color - the user sees the finger on the key instead of
// cross-referencing a color legend. Without activeKey the hands rest and
// the F/J bumps glow ("find the bumps").

type Props = {
  locale: Locale;
  activeKey?: string;
  className?: string;
};

const homeLabels: Record<Locale, string[]> = {
  de: ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
  en: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  fr: ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù"],
};

const KEY = 56;
const PITCH = 64;
const HOME_Y = 248;
const homeX = (slot: number) => 214 + slot * PITCH;
const homeCX = (slot: number) => homeX(slot) + KEY / 2;
const MIRROR_X = 1060; // right hand = left hand mirrored: x' = 1060 - x

// Only the eight resting fingers can be highlighted (g/h are index
// stretches and never appear in the lesson-0 walkthrough).
const FINGER_BY_SLOT: Record<number, Finger> = {
  0: "left-pinky",
  1: "left-ring",
  2: "left-middle",
  3: "left-index",
  6: "right-index",
  7: "right-middle",
  8: "right-ring",
  9: "right-pinky",
};

// Left-hand finger centerlines (pinky..index on slots 0..3).
// tip x comes from the key grid; knuckles/widths are hand-tuned.
const FINGERS = [
  { slot: 0, tipY: 314, knuckle: [254, 436] as const, width: 25, bendX: -8 },
  { slot: 1, tipY: 310, knuckle: [316, 456] as const, width: 28, bendX: -4 },
  { slot: 2, tipY: 308, knuckle: [376, 462] as const, width: 29, bendX: 0 },
  { slot: 3, tipY: 310, knuckle: [434, 454] as const, width: 29, bendX: 3 },
];

function fingerCenterline(defIdx: number): string {
  const def = FINGERS[defIdx];
  const tx = homeCX(def.slot);
  const ty = def.tipY;
  const [kx, ky] = def.knuckle;
  const cx = (kx + tx) / 2 + def.bendX;
  const cy = (ky + ty) / 2;
  return `M ${kx} ${ky} Q ${cx} ${cy} ${tx} ${ty}`;
}

// One continuous left-hand silhouette. The right hand reuses it via
// transform="translate(1060 0) scale(-1 1)".
// Wrists extend below the viewBox (y > 620) so the hands bleed off the
// bottom edge without a visible cut-off line.
const HAND_PATH = [
  "M 254 650", // wrist, below the canvas
  "C 240 570 228 500 241 436", // palm outer edge up to pinky base
  "Q 230 374 229.5 316", // pinky outer edge
  "A 12.5 12.5 0 0 1 254.5 316", // pinky tip
  "Q 258 378 285 429", // pinky inner edge down to first valley
  "Q 289 372 292 311", // ring outer edge
  "A 14 14 0 0 1 320 311", // ring tip
  "Q 323 380 346 444", // ring inner edge to second valley
  "Q 352 375 355.5 309", // middle outer edge
  "A 14.5 14.5 0 0 1 384.5 309", // middle tip
  "Q 388 382 405 443", // middle inner edge to third valley
  "Q 417 376 419.5 311", // index outer edge
  "A 14.5 14.5 0 0 1 448.5 311", // index tip
  "Q 452 390 453 480", // index inner edge down to thumb webbing
  "Q 460 428 471 400", // thumb outer edge toward space bar
  "A 13 13 0 0 1 492 414", // thumb tip
  "Q 480 470 462 524", // thumb inner edge back down
  "C 450 570 432 605 414 650", // palm edge down past the canvas
  "Z",
].join(" ");

// Blank key rows around the home row (decorative context).
const BLANK_ROWS: { y: number; keys: { x: number; w: number }[] }[] = [
  {
    y: 120,
    keys: [
      ...Array.from({ length: 13 }, (_, i) => ({ x: 116 + i * PITCH, w: KEY })),
      { x: 948, w: 36 },
    ],
  },
  {
    y: 184,
    keys: [
      { x: 116, w: 70 },
      ...Array.from({ length: 11 }, (_, i) => ({ x: 194 + i * PITCH, w: KEY })),
      { x: 898, w: 86 },
    ],
  },
  {
    y: 312,
    keys: [
      { x: 116, w: 110 },
      ...Array.from({ length: 10 }, (_, i) => ({ x: 234 + i * PITCH, w: KEY })),
      { x: 874, w: 110 },
    ],
  },
];

function Hand({ mirrored, highlightDefIdx, color }: { mirrored: boolean; highlightDefIdx: number; color?: string }) {
  return (
    <g transform={mirrored ? `translate(${MIRROR_X} 0) scale(-1 1)` : undefined}>
      <path
        d={HAND_PATH}
        strokeWidth={2.5}
        strokeLinejoin="round"
        className="fill-white/80 stroke-zinc-400 dark:fill-zinc-800/80 dark:stroke-zinc-500"
      />
      {highlightDefIdx >= 0 && color && (
        <path
          d={fingerCenterline(highlightDefIdx)}
          fill="none"
          stroke={color}
          strokeOpacity={0.85}
          strokeWidth={FINGERS[highlightDefIdx].width - 7}
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

export function HomeRowHands({ locale, activeKey, className }: Props) {
  const labels = homeLabels[locale] ?? homeLabels.en;
  const activeSlot = activeKey ? labels.indexOf(activeKey.toLowerCase()) : -1;
  const activeFinger = FINGER_BY_SLOT[activeSlot];
  const activeColor = activeFinger ? fingerColors[activeFinger] : undefined;
  const resting = activeSlot < 0;

  // Which hand carries the highlight, and which finger definition:
  // left hand slots 0..3 map 1:1; right hand slots 6..9 mirror to 3..0.
  const leftHighlight = activeColor && activeSlot >= 0 && activeSlot <= 3 ? activeSlot : -1;
  const rightHighlight = activeColor && activeSlot >= 6 && activeSlot <= 9 ? 9 - activeSlot : -1;

  // F and J sit at slots 3 and 6 in every supported layout.
  const bumpSlots = [3, 6];

  return (
    <svg
      viewBox="0 0 1100 620"
      className={`w-full h-auto ${className ?? ""}`}
      role="img"
      aria-hidden="true"
    >
      {/* Keyboard body */}
      <rect
        x={100}
        y={104}
        width={900}
        height={346}
        rx={20}
        strokeWidth={2}
        className="fill-zinc-100 stroke-zinc-200 dark:fill-zinc-900 dark:stroke-zinc-700"
      />

      {/* Blank rows */}
      {BLANK_ROWS.map((row) =>
        row.keys.map((k, i) => (
          <rect
            key={`${row.y}-${i}`}
            x={k.x}
            y={row.y}
            width={k.w}
            height={KEY}
            rx={9}
            strokeWidth={1.5}
            className="fill-white stroke-zinc-200 dark:fill-zinc-800 dark:stroke-zinc-600"
          />
        ))
      )}

      {/* Space bar */}
      <rect x={400} y={376} width={300} height={KEY} rx={9} strokeWidth={1.5} className="fill-white stroke-zinc-200 dark:fill-zinc-800 dark:stroke-zinc-600" />

      {/* Home row: leading + trailing modifier keys */}
      <rect x={116} y={HOME_Y} width={90} height={KEY} rx={9} strokeWidth={1.5} className="fill-white stroke-zinc-200 dark:fill-zinc-800 dark:stroke-zinc-600" />
      <rect x={918} y={HOME_Y} width={66} height={KEY} rx={9} strokeWidth={1.5} className="fill-white stroke-zinc-200 dark:fill-zinc-800 dark:stroke-zinc-600" />

      {/* Glow behind the active key (or a soft hint on F/J when resting) */}
      {activeSlot >= 0 && activeColor && (
        <>
          <circle cx={homeCX(activeSlot)} cy={HOME_Y + 28} r={62} fill={activeColor} opacity={0.12} />
          <circle cx={homeCX(activeSlot)} cy={HOME_Y + 28} r={44} fill={activeColor} opacity={0.16} />
        </>
      )}
      {resting &&
        bumpSlots.map((slot) => (
          <circle key={slot} cx={homeCX(slot)} cy={HOME_Y + 28} r={42} fill="#3f0ff2" opacity={0.1} />
        ))}

      {/* Home row letter keys */}
      {labels.map((label, slot) => {
        const isActive = slot === activeSlot && activeColor;
        const isRestingHint = resting && bumpSlots.includes(slot);
        return (
          <g key={slot}>
            <rect
              x={homeX(slot)}
              y={HOME_Y}
              width={KEY}
              height={KEY}
              rx={9}
              strokeWidth={1.5}
              style={
                isActive
                  ? { fill: activeColor, stroke: activeColor }
                  : isRestingHint
                    ? { fill: "rgba(63, 15, 242, 0.08)", stroke: "rgba(63, 15, 242, 0.45)" }
                    : undefined
              }
              className={isActive || isRestingHint ? undefined : "fill-white stroke-zinc-200 dark:fill-zinc-800 dark:stroke-zinc-600"}
            />
            <text
              x={homeCX(slot)}
              y={HOME_Y + 26}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={21}
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontWeight={600}
              style={isActive ? { fill: "#ffffff" } : isRestingHint ? { fill: "#3f0ff2" } : undefined}
              className={isActive || isRestingHint ? undefined : "fill-zinc-500 dark:fill-zinc-400"}
            >
              {label.toUpperCase()}
            </text>
            {/* Tactile bumps on F and J */}
            {bumpSlots.includes(slot) && (
              <rect
                x={homeCX(slot) - 7}
                y={HOME_Y + 40}
                width={14}
                height={3.5}
                rx={1.75}
                style={isActive ? { fill: "rgba(255,255,255,0.9)" } : isRestingHint ? { fill: "#3f0ff2" } : undefined}
                className={isActive || isRestingHint ? undefined : "fill-zinc-300 dark:fill-zinc-500"}
              />
            )}
          </g>
        );
      })}

      {/* Hands on top, translucent so keys stay visible */}
      <Hand mirrored={false} highlightDefIdx={leftHighlight} color={activeColor} />
      <Hand mirrored={true} highlightDefIdx={rightHighlight} color={activeColor} />
    </svg>
  );
}
