import { fingerColors, type Finger } from "@/lib/lessons";
import type { Locale } from "@/i18n/config";

// Two hands resting on the home row, drawn as calm line art.
//
// Architecture: palm, four fingers and thumb are SEPARATE shapes that are
// rendered with a union-outline trick (all outlines first, then all fills
// on top, inside one translucent group) so they read as one seamless hand.
// Because each finger is its own shape with a computed tip position, a
// finger can later point at ANY key (T, Z, numbers...) while the rest of
// the hand stays anchored - the groundwork for reach poses beyond the
// home row.
//
// Fingertip x-positions come from the key grid, so hands and keys cannot
// drift apart; the right hand is an exact mirror of the left (the home
// row is symmetric around x=530), so only one hand is maintained.
//
// activeKey highlights the key AND the finger that presses it, in that
// finger's color. Without activeKey the hands rest and the F/J bumps
// glow ("find the bumps").

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

// Left-hand fingers (pinky..index on slots 0..3). Bases sit deep inside
// the palm so the union fill hides the junction; tips are computed from
// the key grid. bend bows the finger along its normal (+ = outward).
type FingerDef = {
  slot: number;
  tip: [number, number];
  base: [number, number];
  r: number;
  bend: number;
};

const FINGERS: FingerDef[] = [
  { slot: 0, tip: [242, 301], base: [238, 455], r: 14, bend: 5 },
  { slot: 1, tip: [306, 293], base: [296, 460], r: 15.5, bend: 3 },
  { slot: 2, tip: [370, 290], base: [356, 464], r: 16, bend: 0 },
  { slot: 3, tip: [434, 293], base: [418, 460], r: 16, bend: -2 },
];

// Short, thick, strongly tilted: the tip rests round and relaxed next
// to the left end of the space bar.
const THUMB: FingerDef = { slot: -1, tip: [494, 398], base: [410, 512], r: 17, bend: 10 };

// Closed capsule outline for a finger: two offset quadratic edges plus
// round caps, so each finger can be filled AND stroked as its own shape.
function capsulePath(def: FingerDef): string {
  const [bx, by] = def.base;
  const [tx, ty] = def.tip;
  const len = Math.hypot(tx - bx, ty - by) || 1;
  // Unit normal (left side of travel direction base->tip).
  const nx = (ty - by) / len;
  const ny = (bx - tx) / len;
  const r = def.r;
  const mx = (bx + tx) / 2 + nx * def.bend;
  const my = (by + ty) / 2 + ny * def.bend;

  const p = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  return [
    `M ${p(bx + nx * r, by + ny * r)}`,
    `Q ${p(mx + nx * r, my + ny * r)} ${p(tx + nx * r, ty + ny * r)}`,
    `A ${r} ${r} 0 0 1 ${p(tx - nx * r, ty - ny * r)}`,
    `Q ${p(mx - nx * r, my - ny * r)} ${p(bx - nx * r, by - ny * r)}`,
    `A ${r} ${r} 0 0 1 ${p(bx + nx * r, by + ny * r)}`,
    "Z",
  ].join(" ");
}

// Highlight bar along a finger, trimmed so it doesn't poke into the palm.
function highlightPath(def: FingerDef): string {
  const [bx, by] = def.base;
  const [tx, ty] = def.tip;
  const t0 = 0.4;
  const sx = bx + (tx - bx) * t0;
  const sy = by + (ty - by) * t0;
  const len = Math.hypot(tx - bx, ty - by) || 1;
  const nx = (ty - by) / len;
  const ny = (bx - tx) / len;
  const mx = (sx + tx) / 2 + nx * def.bend * 0.7;
  const my = (sy + ty) / 2 + ny * def.bend * 0.7;
  return `M ${sx} ${sy} Q ${mx} ${my} ${tx} ${ty}`;
}

// Palm: slightly tilted (wrist outward, knuckles inward - the natural
// resting angle), tapering toward the wrist, which runs below the
// viewBox so hands bleed off the bottom edge.
const PALM_PATH = [
  "M 250 650",
  "C 230 574 212 496 220 444", // outer (pinky-side) edge
  "Q 222 430 238 426", // rounded top corner
  "Q 330 398 416 404", // knuckle line, sloping up toward the index
  "Q 438 408 444 423", // rounded top corner (index side)
  "C 456 490 440 574 398 650", // thumb-side edge, tapering to the wrist
  "Z",
].join(" ");

const HAND_PARTS = [PALM_PATH, ...FINGERS.map(capsulePath), capsulePath(THUMB)];

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
    <g transform={mirrored ? `translate(${MIRROR_X} 0) scale(-1 1)` : undefined} opacity={0.88}>
      {/* Pass 1: outlines of all parts. Stroke width 4 because the fill
          pass covers the inner half, leaving a ~2px contour. */}
      {HAND_PARTS.map((d, i) => (
        <path key={`o-${i}`} d={d} fill="none" strokeWidth={4} strokeLinejoin="round" className="stroke-zinc-400 dark:stroke-zinc-500" />
      ))}
      {/* Pass 2: fills on top hide every interior line - the parts merge
          into one seamless silhouette. */}
      {HAND_PARTS.map((d, i) => (
        <path key={`f-${i}`} d={d} className="fill-white dark:fill-zinc-800" />
      ))}
      {highlightDefIdx >= 0 && color && (
        <path
          d={highlightPath(FINGERS[highlightDefIdx])}
          fill="none"
          stroke={color}
          strokeOpacity={0.85}
          strokeWidth={FINGERS[highlightDefIdx].r * 2 - 8}
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
