import type { Locale } from "@/i18n/config";

export type Finger =
  | "left-pinky"
  | "left-ring"
  | "left-middle"
  | "left-index"
  | "right-index"
  | "right-middle"
  | "right-ring"
  | "right-pinky"
  | "thumb";

export type Drill = {
  type: "keys" | "words" | "sentences";
  content: string;
};

export type Lesson = {
  id: number;
  phase: number;
  newKeys: string[];
  allKeys: string[];
  drills: Drill[];
  completionThreshold: number;
  isFree: boolean;
};

export type LessonMeta = {
  title: string;
  subtitle: string;
  newKeysLabel: string;
  completionMessage: string;
};

export const fingerForKey: Record<string, Finger> = {
  // Left pinky
  q: "left-pinky", a: "left-pinky", z: "left-pinky",
  "1": "left-pinky", "!": "left-pinky",
  // Left ring
  w: "left-ring", s: "left-ring", x: "left-ring",
  "2": "left-ring", "@": "left-ring",
  // Left middle
  e: "left-middle", d: "left-middle", c: "left-middle",
  "3": "left-middle", "#": "left-middle",
  // Left index
  r: "left-index", f: "left-index", v: "left-index",
  t: "left-index", g: "left-index", b: "left-index",
  "4": "left-index", "5": "left-index",
  // Right index
  y: "right-index", u: "right-index", j: "right-index", m: "right-index",
  h: "right-index", n: "right-index",
  "6": "right-index", "7": "right-index",
  // Right middle
  i: "right-middle", k: "right-middle", ",": "right-middle",
  "8": "right-middle",
  // Right ring
  o: "right-ring", l: "right-ring", ".": "right-ring",
  "9": "right-ring",
  // Right pinky
  p: "right-pinky", ";": "right-pinky", "/": "right-pinky",
  "ö": "right-pinky", "ü": "right-pinky", "-": "right-pinky",
  "0": "right-pinky",
  // Thumb
  " ": "thumb",
};

export const fingerColors: Record<Finger, string> = {
  "left-pinky": "#ef4444",
  "left-ring": "#f97316",
  "left-middle": "#eab308",
  "left-index": "#22c55e",
  "right-index": "#06b6d4",
  "right-middle": "#3b82f6",
  "right-ring": "#8b5cf6",
  "right-pinky": "#ec4899",
  thumb: "#6b7280",
};

const HOME_ROW = ["a", "s", "d", "f", "j", "k", "l", ";", " "];
const TOP_ROW = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const BOTTOM_ROW = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

export const lessons: Lesson[] = [
  // Phase 0: Introduction
  {
    id: 0,
    phase: 0,
    newKeys: ["f", "j"],
    allKeys: ["f", "j", " "],
    drills: [
      { type: "keys", content: "f j f j f j j f j f f j" },
      { type: "keys", content: "ff jj fj jf ff jj fj jf" },
      { type: "keys", content: "fjf jfj fjf jfj fjf jfj" },
    ],
    completionThreshold: 90,
    isFree: true,
  },
  // Phase 1: Home Row
  {
    id: 1,
    phase: 1,
    newKeys: ["f", "j"],
    allKeys: ["f", "j", " "],
    drills: [
      { type: "keys", content: "f j f j j f f j j f j f f j" },
      { type: "keys", content: "ff jj ff jj fj fj jf jf fjf jfj" },
      { type: "words", content: "f j ff jj fj jf fjf jfj" },
    ],
    completionThreshold: 90,
    isFree: true,
  },
  {
    id: 2,
    phase: 1,
    newKeys: ["d", "k"],
    allKeys: ["f", "j", "d", "k", " "],
    drills: [
      { type: "keys", content: "d k d k k d d k k d d k" },
      { type: "keys", content: "fd jk df kj fdk jkf dkf" },
      { type: "words", content: "dd kk dk kd fdk kjf dkf" },
    ],
    completionThreshold: 90,
    isFree: true,
  },
  {
    id: 3,
    phase: 1,
    newKeys: ["s", "l"],
    allKeys: ["f", "j", "d", "k", "s", "l", " "],
    drills: [
      { type: "keys", content: "s l s l l s s l l s s l" },
      { type: "keys", content: "sd lk fs jl ds kl fds jkl" },
      { type: "words", content: "lass fall dsl sdk flask" },
    ],
    completionThreshold: 90,
    isFree: true,
  },
  {
    id: 4,
    phase: 1,
    newKeys: ["a", ";"],
    allKeys: ["a", "s", "d", "f", "j", "k", "l", ";", " "],
    drills: [
      { type: "keys", content: "a ; a ; ; a a ; a ; ; a" },
      { type: "keys", content: "as ;l df jk sa l; fd kj" },
      { type: "words", content: "a sad lad asks a lass; a fall" },
    ],
    completionThreshold: 90,
    isFree: true,
  },
  {
    id: 5,
    phase: 1,
    newKeys: [],
    allKeys: [...HOME_ROW],
    drills: [
      { type: "words", content: "all fall salad flask dad sad ask" },
      { type: "sentences", content: "a sad lad falls; a lass asks dad" },
      { type: "sentences", content: "dad asks a lad; a flask falls; all salads" },
    ],
    completionThreshold: 90,
    isFree: true,
  },
  // Phase 2: Top Row
  {
    id: 6,
    phase: 2,
    newKeys: ["e", "i"],
    allKeys: [...HOME_ROW, "e", "i"],
    drills: [
      { type: "keys", content: "e i e i i e e i i e e i" },
      { type: "keys", content: "de ki ed ik fed kid dei" },
      { type: "words", content: "die side like file idea slide" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 7,
    phase: 2,
    newKeys: ["r", "u"],
    allKeys: [...HOME_ROW, "e", "i", "r", "u"],
    drills: [
      { type: "keys", content: "r u r u u r r u u r r u" },
      { type: "keys", content: "fr ju rf uj fur rue ruf" },
      { type: "words", content: "rulefire sure ride user друг" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 8,
    phase: 2,
    newKeys: ["w", "o"],
    allKeys: [...HOME_ROW, "e", "i", "r", "u", "w", "o"],
    drills: [
      { type: "keys", content: "w o w o o w w o o w w o" },
      { type: "keys", content: "sw ol ws lo ow wo wok owl" },
      { type: "words", content: "slow work world flower would" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 9,
    phase: 2,
    newKeys: ["q", "p", "t", "y"],
    allKeys: [...HOME_ROW, ...TOP_ROW],
    drills: [
      { type: "keys", content: "q p t y q p t y p q y t" },
      { type: "words", content: "type quite past your pretty" },
      { type: "sentences", content: "you type quite fast; pretty solid work" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 10,
    phase: 2,
    newKeys: [],
    allKeys: [...HOME_ROW, ...TOP_ROW],
    drills: [
      { type: "words", content: "require deploy quite opposite forward" },
      { type: "sentences", content: "your words flow like water; type with purpose" },
      { type: "sentences", content: "keep your eyes off the keys; trust your fingers" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  // Phase 3: Bottom Row
  {
    id: 11,
    phase: 3,
    newKeys: ["n", "m", "v", "b"],
    allKeys: [...HOME_ROW, ...TOP_ROW, "n", "m", "v", "b"],
    drills: [
      { type: "keys", content: "n m v b n m v b m n b v" },
      { type: "words", content: "number move every been name" },
      { type: "sentences", content: "every number moves forward; never stop" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 12,
    phase: 3,
    newKeys: ["c", ",", "x", "."],
    allKeys: [...HOME_ROW, ...TOP_ROW, "n", "m", "v", "b", "c", ",", "x", "."],
    drills: [
      { type: "keys", content: "c , x . c , x . , c . x" },
      { type: "words", content: "next, expect. complex, mix." },
      { type: "sentences", content: "excellent work, next comes more. expect quick results." },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 13,
    phase: 3,
    newKeys: ["z", "/"],
    allKeys: [...HOME_ROW, ...TOP_ROW, ...BOTTOM_ROW],
    drills: [
      { type: "keys", content: "z / z / / z z / z / / z" },
      { type: "words", content: "zone zero fizz buzz quiz jazz" },
      { type: "sentences", content: "the quick brown fox jumps over the lazy dog." },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  // Phase 4: Speed + Fluency
  {
    id: 14,
    phase: 4,
    newKeys: [],
    allKeys: [...HOME_ROW, ...TOP_ROW, ...BOTTOM_ROW],
    drills: [
      { type: "sentences", content: "typing is a skill that improves with daily practice. every session builds on the last." },
      { type: "sentences", content: "the best way to type faster is to type correctly first. speed follows accuracy." },
      { type: "sentences", content: "your fingers know the keys now. trust them and keep your eyes on the screen." },
    ],
    completionThreshold: 92,
    isFree: false,
  },
  {
    id: 15,
    phase: 4,
    newKeys: [],
    allKeys: [...HOME_ROW, ...TOP_ROW, ...BOTTOM_ROW],
    drills: [
      { type: "sentences", content: "a well written email saves time for everyone. clear writing starts with confident typing." },
      { type: "sentences", content: "the difference between a fast typist and a slow one is not talent. it is practice." },
      { type: "sentences", content: "you have completed every lesson. your fingers move with purpose now. this is your new normal." },
    ],
    completionThreshold: 92,
    isFree: false,
  },
];

export function getLesson(id: number): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getNextLesson(id: number): Lesson | undefined {
  const idx = lessons.findIndex((l) => l.id === id);
  if (idx === -1 || idx === lessons.length - 1) return undefined;
  return lessons[idx + 1];
}

export const phaseNames: Record<Locale, Record<number, string>> = {
  de: {
    0: "Einfuehrung",
    1: "Grundreihe",
    2: "Obere Reihe",
    3: "Untere Reihe",
    4: "Geschwindigkeit",
  },
  en: {
    0: "Introduction",
    1: "Home Row",
    2: "Top Row",
    3: "Bottom Row",
    4: "Speed + Fluency",
  },
  fr: {
    0: "Introduction",
    1: "Rangee de base",
    2: "Rangee superieure",
    3: "Rangee inferieure",
    4: "Vitesse + Fluidite",
  },
};

export const lessonMeta: Record<Locale, Record<number, LessonMeta>> = {
  de: {
    0: {
      title: "Finde die Markierungen",
      subtitle: "Schau auf deine Tastatur: Auf den Tasten F und J sind kleine Noppen. Lege deine Zeigefinger darauf - links auf F, rechts auf J. Von dieser Position aus erreichst du alle anderen Tasten.",
      newKeysLabel: "F und J",
      completionMessage: "Gut. Deine Finger wissen jetzt, wo sie hingehoeren.",
    },
    1: {
      title: "F und J - Deine Anker",
      subtitle: "Die beiden wichtigsten Tasten. Von hier aus erreichst du alles.",
      newKeysLabel: "F und J",
      completionMessage: "Solide Basis. Weiter geht's.",
    },
    2: {
      title: "D und K dazu",
      subtitle: "Mittelfinger links auf D, Mittelfinger rechts auf K.",
      newKeysLabel: "D und K",
      completionMessage: "Vier Finger arbeiten schon. Laeuft.",
    },
    3: {
      title: "S und L dazu",
      subtitle: "Ringfinger links auf S, Ringfinger rechts auf L.",
      newKeysLabel: "S und L",
      completionMessage: "Sechs Finger im Einsatz. Du bist auf dem richtigen Weg.",
    },
    4: {
      title: "A und ; dazu",
      subtitle: "Kleiner Finger links auf A, kleiner Finger rechts auf ;",
      newKeysLabel: "A und ;",
      completionMessage: "Die komplette Grundreihe. Alle acht Finger sind aktiv.",
    },
    5: {
      title: "Grundreihe komplett",
      subtitle: "Alle Tasten der Grundreihe zusammen. Echte Woerter, echte Saetze.",
      newKeysLabel: "Wiederholung",
      completionMessage: "Grundreihe gemeistert. Das ist die Basis fuer alles Weitere.",
    },
    6: {
      title: "E und I - Nach oben",
      subtitle: "Mittelfinger hoch zur oberen Reihe. E links, I rechts.",
      newKeysLabel: "E und I",
      completionMessage: "Zwei der haeufigsten Buchstaben. Stark.",
    },
    7: {
      title: "R und U dazu",
      subtitle: "Zeigefinger hoch. R links, U rechts.",
      newKeysLabel: "R und U",
      completionMessage: "Dein Wortschatz waechst mit jeder Lektion.",
    },
    8: {
      title: "W und O dazu",
      subtitle: "Ringfinger hoch. W links, O rechts.",
      newKeysLabel: "W und O",
      completionMessage: "Die obere Reihe nimmt Form an.",
    },
    9: {
      title: "Q, P, T und Y",
      subtitle: "Die restlichen Tasten der oberen Reihe.",
      newKeysLabel: "Q, P, T, Y",
      completionMessage: "Obere Reihe komplett. Zwei Reihen gemeistert.",
    },
    10: {
      title: "Obere Reihe komplett",
      subtitle: "Grundreihe plus obere Reihe. Fliessende Saetze.",
      newKeysLabel: "Wiederholung",
      completionMessage: "Zwei Reihen sitzen. Eine fehlt noch.",
    },
    11: {
      title: "N, M, V und B",
      subtitle: "Die haeufigsten Tasten der unteren Reihe zuerst.",
      newKeysLabel: "N, M, V, B",
      completionMessage: "Die untere Reihe beginnt. Fast alle Buchstaben.",
    },
    12: {
      title: "C, Komma, X und Punkt",
      subtitle: "Satzzeichen und seltene Buchstaben.",
      newKeysLabel: "C, X und Satzzeichen",
      completionMessage: "Jetzt kannst du komplette Saetze mit Satzzeichen tippen.",
    },
    13: {
      title: "Z und /",
      subtitle: "Die letzten Tasten. Danach hast du das volle Alphabet.",
      newKeysLabel: "Z und /",
      completionMessage: "Alle Tasten gelernt. Jedes Wort ist jetzt moeglich.",
    },
    14: {
      title: "Geschwindigkeit aufbauen",
      subtitle: "Alle Tasten sitzen. Jetzt geht es um Tempo und Fluessigkeit.",
      newKeysLabel: "Alle Tasten",
      completionMessage: "Deine Geschwindigkeit steigt. Weiter so.",
    },
    15: {
      title: "Der letzte Test",
      subtitle: "Zeig, was du gelernt hast. Tippe fliessend und sicher.",
      newKeysLabel: "Alle Tasten",
      completionMessage: "Geschafft. Du tippst jetzt mit allen zehn Fingern.",
    },
  },
  en: {
    0: {
      title: "Find the Bumps",
      subtitle: "Look at your keyboard: the F and J keys have small bumps on them. Place your index fingers there - left on F, right on J. This is your home position for reaching every other key.",
      newKeysLabel: "F and J",
      completionMessage: "Good. Your fingers know where they belong now.",
    },
    1: {
      title: "F and J - Your Anchors",
      subtitle: "The two most important keys. Everything starts here.",
      newKeysLabel: "F and J",
      completionMessage: "Solid foundation. Let's keep going.",
    },
    2: {
      title: "Adding D and K",
      subtitle: "Middle finger left on D, middle finger right on K.",
      newKeysLabel: "D and K",
      completionMessage: "Four fingers working already. Nice.",
    },
    3: {
      title: "Adding S and L",
      subtitle: "Ring finger left on S, ring finger right on L.",
      newKeysLabel: "S and L",
      completionMessage: "Six fingers active. You're building real muscle memory.",
    },
    4: {
      title: "Adding A and ;",
      subtitle: "Pinky finger left on A, pinky finger right on ;",
      newKeysLabel: "A and ;",
      completionMessage: "The full home row. All eight fingers are active.",
    },
    5: {
      title: "Home Row Complete",
      subtitle: "All home row keys together. Real words, real sentences.",
      newKeysLabel: "Review",
      completionMessage: "Home row mastered. This is the foundation for everything else.",
    },
    6: {
      title: "E and I - Reaching Up",
      subtitle: "Middle fingers up to the top row. E left, I right.",
      newKeysLabel: "E and I",
      completionMessage: "Two of the most common letters. Strong progress.",
    },
    7: {
      title: "Adding R and U",
      subtitle: "Index fingers up. R left, U right.",
      newKeysLabel: "R and U",
      completionMessage: "Your vocabulary grows with every lesson.",
    },
    8: {
      title: "Adding W and O",
      subtitle: "Ring fingers up. W left, O right.",
      newKeysLabel: "W and O",
      completionMessage: "The top row is taking shape.",
    },
    9: {
      title: "Q, P, T and Y",
      subtitle: "The remaining top row keys.",
      newKeysLabel: "Q, P, T, Y",
      completionMessage: "Top row complete. Two rows mastered.",
    },
    10: {
      title: "Top Row Complete",
      subtitle: "Home row plus top row. Flowing sentences.",
      newKeysLabel: "Review",
      completionMessage: "Two rows down. One more to go.",
    },
    11: {
      title: "N, M, V and B",
      subtitle: "The most common bottom row keys first.",
      newKeysLabel: "N, M, V, B",
      completionMessage: "The bottom row begins. Almost the full alphabet.",
    },
    12: {
      title: "C, Comma, X and Period",
      subtitle: "Punctuation and less common letters.",
      newKeysLabel: "C, X and punctuation",
      completionMessage: "Now you can type complete sentences with punctuation.",
    },
    13: {
      title: "Z and /",
      subtitle: "The last keys. After this, you have the full alphabet.",
      newKeysLabel: "Z and /",
      completionMessage: "Every key learned. Every word is now possible.",
    },
    14: {
      title: "Building Speed",
      subtitle: "You know all the keys. Now it's about tempo and flow.",
      newKeysLabel: "All keys",
      completionMessage: "Your speed is rising. Keep it up.",
    },
    15: {
      title: "The Final Test",
      subtitle: "Show what you've learned. Type with confidence.",
      newKeysLabel: "All keys",
      completionMessage: "Done. You now type with all ten fingers.",
    },
  },
  fr: {
    0: {
      title: "Trouve les reperes",
      subtitle: "Regarde ton clavier : les touches F et J ont de petites bosses. Pose tes index dessus - gauche sur F, droit sur J. C'est ta position de depart pour atteindre toutes les autres touches.",
      newKeysLabel: "F et J",
      completionMessage: "Bien. Tes doigts savent ou se placer.",
    },
    1: {
      title: "F et J - Tes ancres",
      subtitle: "Les deux touches les plus importantes. Tout part d'ici.",
      newKeysLabel: "F et J",
      completionMessage: "Base solide. On continue.",
    },
    2: {
      title: "D et K en plus",
      subtitle: "Majeur gauche sur D, majeur droit sur K.",
      newKeysLabel: "D et K",
      completionMessage: "Quatre doigts deja au travail. Pas mal.",
    },
    3: {
      title: "S et L en plus",
      subtitle: "Annulaire gauche sur S, annulaire droit sur L.",
      newKeysLabel: "S et L",
      completionMessage: "Six doigts actifs. La memoire musculaire se construit.",
    },
    4: {
      title: "A et ; en plus",
      subtitle: "Auriculaire gauche sur A, auriculaire droit sur ;",
      newKeysLabel: "A et ;",
      completionMessage: "La rangee de base complete. Huit doigts actifs.",
    },
    5: {
      title: "Rangee de base complete",
      subtitle: "Toutes les touches de base ensemble. Vrais mots, vraies phrases.",
      newKeysLabel: "Revision",
      completionMessage: "Rangee de base maitrisee. C'est la fondation de tout le reste.",
    },
    6: {
      title: "E et I - Vers le haut",
      subtitle: "Majeurs vers la rangee superieure. E a gauche, I a droite.",
      newKeysLabel: "E et I",
      completionMessage: "Deux des lettres les plus courantes. Bonne progression.",
    },
    7: {
      title: "R et U en plus",
      subtitle: "Index vers le haut. R a gauche, U a droite.",
      newKeysLabel: "R et U",
      completionMessage: "Ton vocabulaire grandit a chaque lecon.",
    },
    8: {
      title: "W et O en plus",
      subtitle: "Annulaires vers le haut. W a gauche, O a droite.",
      newKeysLabel: "W et O",
      completionMessage: "La rangee superieure prend forme.",
    },
    9: {
      title: "Q, P, T et Y",
      subtitle: "Les dernieres touches de la rangee superieure.",
      newKeysLabel: "Q, P, T, Y",
      completionMessage: "Rangee superieure complete. Deux rangees maitrisees.",
    },
    10: {
      title: "Rangee superieure complete",
      subtitle: "Rangee de base plus rangee superieure. Phrases fluides.",
      newKeysLabel: "Revision",
      completionMessage: "Deux rangees acquises. Plus qu'une.",
    },
    11: {
      title: "N, M, V et B",
      subtitle: "Les touches les plus courantes de la rangee inferieure.",
      newKeysLabel: "N, M, V, B",
      completionMessage: "La rangee inferieure commence. Presque tout l'alphabet.",
    },
    12: {
      title: "C, virgule, X et point",
      subtitle: "Ponctuation et lettres moins courantes.",
      newKeysLabel: "C, X et ponctuation",
      completionMessage: "Tu peux maintenant ecrire des phrases completes avec ponctuation.",
    },
    13: {
      title: "Z et /",
      subtitle: "Les dernieres touches. Apres ca, tu as tout l'alphabet.",
      newKeysLabel: "Z et /",
      completionMessage: "Toutes les touches apprises. Chaque mot est possible.",
    },
    14: {
      title: "Construire la vitesse",
      subtitle: "Tu connais toutes les touches. Place au tempo et a la fluidite.",
      newKeysLabel: "Toutes les touches",
      completionMessage: "Ta vitesse augmente. Continue comme ca.",
    },
    15: {
      title: "Le test final",
      subtitle: "Montre ce que tu as appris. Tape avec confiance.",
      newKeysLabel: "Toutes les touches",
      completionMessage: "Termine. Tu tapes maintenant avec tes dix doigts.",
    },
  },
};
