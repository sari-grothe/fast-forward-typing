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
const ALL_LETTERS = [...HOME_ROW, ...TOP_ROW, ...BOTTOM_ROW];

export const lessons: Lesson[] = [
  // === Phase 0: Introduction ===
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
  // === Phase 1: Home Row ===
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
  // === Phase 2: Top Row ===
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
      { type: "words", content: "rule fire sure ride user" },
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
  // === Phase 3: Bottom Row ===
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
  // === Phase 4: Common Words ===
  {
    id: 14,
    phase: 4,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "words", content: "the and for are but not you all can her was one our" },
      { type: "words", content: "have from this will your been each make like long" },
      { type: "words", content: "time very when come could people than first water been" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 15,
    phase: 4,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "words", content: "about their which would there other into more some" },
      { type: "words", content: "after also back because before between both came" },
      { type: "words", content: "should still through under where while work three" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 16,
    phase: 4,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "words", content: "open close begin start focus clear build solve plan" },
      { type: "words", content: "window problem button review number project example" },
      { type: "words", content: "computer software keyboard monitor display settings" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  // === Phase 5: Capitalization ===
  {
    id: 17,
    phase: 5,
    newKeys: ["Shift"],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "words", content: "The And For Are But Not You All Can Her Was One" },
      { type: "words", content: "Monday Tuesday Wednesday Thursday Friday Saturday Sunday" },
      { type: "sentences", content: "The quick fox jumps. A red car drives fast. My dog runs." },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 18,
    phase: 5,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "Berlin is the capital of Germany. Paris is in France." },
      { type: "sentences", content: "Sarah likes to code in Python. Tom prefers JavaScript." },
      { type: "sentences", content: "On Monday we start the project. By Friday it ships." },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  // === Phase 6: Punctuation ===
  {
    id: 19,
    phase: 6,
    newKeys: [".", ",", "?", "!"],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "Is this correct? Yes, it works. That is great!" },
      { type: "sentences", content: "Wait, what? Are you sure? Yes! Let me check." },
      { type: "sentences", content: "Hello, world. How are you? I am fine, thanks!" },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 20,
    phase: 6,
    newKeys: ["'", "\"", "-", ":"],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "It's a good day. Don't stop now. I can't wait." },
      { type: "sentences", content: "She said: \"Hello.\" He replied: \"Hi there.\"" },
      { type: "sentences", content: "The well-known fact: practice makes perfect." },
    ],
    completionThreshold: 90,
    isFree: false,
  },
  {
    id: 21,
    phase: 6,
    newKeys: ["(", ")", "@", "&"],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "Send it to name@email.com for review." },
      { type: "sentences", content: "The result (see below) is clear & correct." },
      { type: "sentences", content: "Call us at (555) 123-4567 or email info@company.com." },
    ],
    completionThreshold: 92,
    isFree: false,
  },
  // === Phase 7: Sentences + Paragraphs ===
  {
    id: 22,
    phase: 7,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "The best way to learn is to practice every day." },
      { type: "sentences", content: "A clear mind and steady fingers make fast typing." },
      { type: "sentences", content: "Focus on accuracy first. Speed follows naturally." },
    ],
    completionThreshold: 92,
    isFree: false,
  },
  {
    id: 23,
    phase: 7,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "Good writing starts with confident typing. When your fingers move without thinking, your mind stays on the message." },
      { type: "sentences", content: "The difference between a fast typist and a slow one is not talent. It is thousands of small, correct repetitions." },
      { type: "sentences", content: "Every email you write, every message you send, every document you draft builds your speed. Typing is a daily skill." },
    ],
    completionThreshold: 92,
    isFree: false,
  },
  {
    id: 24,
    phase: 7,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "Meeting notes from today: We discussed the new project timeline. The deadline is set for March. Everyone agreed on the approach. Action items were assigned to each team member." },
      { type: "sentences", content: "Dear team, please review the attached document before our meeting on Thursday. Let me know if you have any questions or concerns. Looking forward to your feedback." },
      { type: "sentences", content: "The quarterly report shows strong growth in all areas. Revenue increased by twelve percent compared to last year. Customer satisfaction scores remain high across all regions." },
    ],
    completionThreshold: 92,
    isFree: false,
  },
  // === Phase 8: Speed + Fluency ===
  {
    id: 25,
    phase: 8,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "words", content: "the of and to in is it you that he was for on are with" },
      { type: "words", content: "as his they be at one have this from or had by not but" },
      { type: "words", content: "some what there we can out other were all your when up" },
    ],
    completionThreshold: 92,
    isFree: false,
  },
  {
    id: 26,
    phase: 8,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "Speed comes from muscle memory, not from trying harder. Relax your hands and let your fingers do the work." },
      { type: "sentences", content: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs." },
      { type: "sentences", content: "Typing is like riding a bike. Once you learn it properly, you never forget. The skill stays with you for life." },
    ],
    completionThreshold: 94,
    isFree: false,
  },
  {
    id: 27,
    phase: 8,
    newKeys: [],
    allKeys: [...ALL_LETTERS],
    drills: [
      { type: "sentences", content: "A well-written email saves time for everyone. Clear writing starts with confident typing. When you type fast, you think fast." },
      { type: "sentences", content: "The final test: type this paragraph as fast and as accurately as you can. Do not look at the keyboard. Trust your fingers." },
      { type: "sentences", content: "You have completed every lesson in this course. Your fingers move with purpose now. This is your new normal. Go type something great." },
    ],
    completionThreshold: 94,
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
    0: "Einführung",
    1: "Grundreihe",
    2: "Obere Reihe",
    3: "Untere Reihe",
    4: "Häufige Wörter",
    5: "Großschreibung",
    6: "Satzzeichen",
    7: "Sätze + Absätze",
    8: "Geschwindigkeit",
  },
  en: {
    0: "Introduction",
    1: "Home Row",
    2: "Top Row",
    3: "Bottom Row",
    4: "Common Words",
    5: "Capitalization",
    6: "Punctuation",
    7: "Sentences + Paragraphs",
    8: "Speed + Fluency",
  },
  fr: {
    0: "Introduction",
    1: "Rangée de base",
    2: "Rangée supérieure",
    3: "Rangée inférieure",
    4: "Mots courants",
    5: "Majuscules",
    6: "Ponctuation",
    7: "Phrases + Paragraphes",
    8: "Vitesse + Fluidité",
  },
};

export const lessonMeta: Record<Locale, Record<number, LessonMeta>> = {
  de: {
    0: {
      title: "Finde die Markierungen",
      subtitle: "Schau auf deine Tastatur: Auf den Tasten F und J sind kleine Noppen. Lege deine Zeigefinger darauf - links auf F, rechts auf J. Von dieser Position aus erreichst du alle anderen Tasten.",
      newKeysLabel: "F und J",
      completionMessage: "Gut. Deine Finger wissen jetzt, wo sie hingehören.",
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
      completionMessage: "Vier Finger arbeiten schon. Läuft.",
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
      subtitle: "Alle Tasten der Grundreihe zusammen. Echte Wörter, echte Sätze.",
      newKeysLabel: "Wiederholung",
      completionMessage: "Grundreihe gemeistert. Das ist die Basis für alles Weitere.",
    },
    6: {
      title: "E und I - Nach oben",
      subtitle: "Mittelfinger hoch zur oberen Reihe. E links, I rechts.",
      newKeysLabel: "E und I",
      completionMessage: "Zwei der häufigsten Buchstaben. Stark.",
    },
    7: {
      title: "R und U dazu",
      subtitle: "Zeigefinger hoch. R links, U rechts.",
      newKeysLabel: "R und U",
      completionMessage: "Dein Wortschatz wächst mit jeder Lektion.",
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
      subtitle: "Grundreihe plus obere Reihe. Fließende Sätze.",
      newKeysLabel: "Wiederholung",
      completionMessage: "Zwei Reihen sitzen. Eine fehlt noch.",
    },
    11: {
      title: "N, M, V und B",
      subtitle: "Die häufigsten Tasten der unteren Reihe zuerst.",
      newKeysLabel: "N, M, V, B",
      completionMessage: "Die untere Reihe beginnt. Fast alle Buchstaben.",
    },
    12: {
      title: "C, Komma, X und Punkt",
      subtitle: "Satzzeichen und seltene Buchstaben.",
      newKeysLabel: "C, X und Satzzeichen",
      completionMessage: "Jetzt kannst du komplette Sätze mit Satzzeichen tippen.",
    },
    13: {
      title: "Z und /",
      subtitle: "Die letzten Tasten. Danach hast du das volle Alphabet.",
      newKeysLabel: "Z und /",
      completionMessage: "Alle Tasten gelernt. Jedes Wort ist jetzt möglich.",
    },
    14: {
      title: "Die 100 häufigsten Wörter",
      subtitle: "Die Wörter, die du am meisten tippst. Schnell und sicher.",
      newKeysLabel: "Häufige Wörter",
      completionMessage: "Diese Wörter sitzen. Deine Alltagstexte werden schneller.",
    },
    15: {
      title: "Wörter mit zwei Silben",
      subtitle: "Längere Wörter, die fließend getippt werden müssen.",
      newKeysLabel: "Zwei-Silben-Wörter",
      completionMessage: "Längere Wörter sind kein Problem mehr.",
    },
    16: {
      title: "Alltags-Vokabular",
      subtitle: "Wörter aus dem Arbeitsalltag: Computer, Software, Projekt.",
      newKeysLabel: "Arbeit + Technik",
      completionMessage: "Dein Arbeitsvokabular sitzt. Weiter mit Großbuchstaben.",
    },
    17: {
      title: "Shift-Taste und Großbuchstaben",
      subtitle: "Halte Shift mit dem kleinen Finger und tippe den Buchstaben.",
      newKeysLabel: "Shift",
      completionMessage: "Großbuchstaben gemeistert. Wochentage, Namen, Satzanfänge.",
    },
    18: {
      title: "Sätze mit Großbuchstaben",
      subtitle: "Echte Sätze mit korrekter Groß- und Kleinschreibung.",
      newKeysLabel: "Wiederholung",
      completionMessage: "Großschreibung ist jetzt automatisch. Gut.",
    },
    19: {
      title: "Punkt, Komma, Frage, Ausruf",
      subtitle: "Die vier wichtigsten Satzzeichen im Alltag.",
      newKeysLabel: ". , ? !",
      completionMessage: "Grundlegende Satzzeichen sitzen.",
    },
    20: {
      title: "Apostroph, Anführung, Bindestrich",
      subtitle: "Satzzeichen für Zitate und zusammengesetzte Wörter.",
      newKeysLabel: "' \" - :",
      completionMessage: "Du kannst jetzt auch komplexere Texte korrekt tippen.",
    },
    21: {
      title: "Klammern, @, &",
      subtitle: "Sonderzeichen für E-Mails und technische Texte.",
      newKeysLabel: "( ) @ &",
      completionMessage: "E-Mail-Adressen und technische Zeichen sind kein Problem.",
    },
    22: {
      title: "Kurze Sätze",
      subtitle: "Fließend tippen, Satz für Satz.",
      newKeysLabel: "Sätze",
      completionMessage: "Kurze Sätze fließen. Weiter mit längeren Texten.",
    },
    23: {
      title: "Längere Sätze",
      subtitle: "Zwei bis drei Sätze am Stück. Konzentration halten.",
      newKeysLabel: "Längere Sätze",
      completionMessage: "Du hältst die Konzentration über längere Texte.",
    },
    24: {
      title: "Absätze",
      subtitle: "Ganze Absätze tippen: E-Mails, Berichte, Notizen.",
      newKeysLabel: "Absätze",
      completionMessage: "Du tippst jetzt ganze Absätze fließend und korrekt.",
    },
    25: {
      title: "Geschwindigkeit: Häufige Wörter",
      subtitle: "Die häufigsten Wörter so schnell wie möglich tippen.",
      newKeysLabel: "Speed Drill",
      completionMessage: "Deine Geschwindigkeit steigt. Weiter so.",
    },
    26: {
      title: "Geschwindigkeit: Sätze",
      subtitle: "Sätze auf Tempo tippen. Genauigkeit bleibt wichtig.",
      newKeysLabel: "Speed Drill",
      completionMessage: "Tempo und Genauigkeit im Gleichgewicht. Stark.",
    },
    27: {
      title: "Der letzte Test",
      subtitle: "Zeig, was du gelernt hast. Tippe fließend und sicher.",
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
      title: "100 Most Common Words",
      subtitle: "The words you type most. Fast and confident.",
      newKeysLabel: "Common words",
      completionMessage: "These words are second nature now.",
    },
    15: {
      title: "Two-Syllable Words",
      subtitle: "Longer words that need to flow smoothly.",
      newKeysLabel: "Two-syllable words",
      completionMessage: "Longer words are no longer a challenge.",
    },
    16: {
      title: "Everyday Vocabulary",
      subtitle: "Words from work and tech: computer, software, project.",
      newKeysLabel: "Work + tech",
      completionMessage: "Your work vocabulary is solid. On to capitalization.",
    },
    17: {
      title: "Shift Key and Capital Letters",
      subtitle: "Hold Shift with your pinky, type the letter.",
      newKeysLabel: "Shift",
      completionMessage: "Capitals mastered. Weekdays, names, sentence starts.",
    },
    18: {
      title: "Sentences with Capitals",
      subtitle: "Real sentences with proper capitalization.",
      newKeysLabel: "Review",
      completionMessage: "Capitalization is now automatic. Good.",
    },
    19: {
      title: "Period, Comma, Question, Exclamation",
      subtitle: "The four most important punctuation marks.",
      newKeysLabel: ". , ? !",
      completionMessage: "Basic punctuation is solid.",
    },
    20: {
      title: "Apostrophe, Quotes, Hyphen",
      subtitle: "Punctuation for quotes and compound words.",
      newKeysLabel: "' \" - :",
      completionMessage: "You can now type more complex texts correctly.",
    },
    21: {
      title: "Brackets, @, &",
      subtitle: "Special characters for emails and technical text.",
      newKeysLabel: "( ) @ &",
      completionMessage: "Email addresses and special characters are no problem.",
    },
    22: {
      title: "Quick Sentences",
      subtitle: "Type fluently, sentence by sentence.",
      newKeysLabel: "Sentences",
      completionMessage: "Short sentences flow. On to longer texts.",
    },
    23: {
      title: "Longer Sentences",
      subtitle: "Two to three sentences at a time. Stay focused.",
      newKeysLabel: "Longer sentences",
      completionMessage: "You hold focus over longer texts.",
    },
    24: {
      title: "Short Paragraphs",
      subtitle: "Type full paragraphs: emails, reports, notes.",
      newKeysLabel: "Paragraphs",
      completionMessage: "You type full paragraphs fluently and correctly.",
    },
    25: {
      title: "Speed: Common Words",
      subtitle: "The most common words as fast as possible.",
      newKeysLabel: "Speed drill",
      completionMessage: "Your speed is climbing. Keep going.",
    },
    26: {
      title: "Speed: Sentences",
      subtitle: "Type sentences at speed. Accuracy still matters.",
      newKeysLabel: "Speed drill",
      completionMessage: "Speed and accuracy in balance. Strong.",
    },
    27: {
      title: "The Final Test",
      subtitle: "Show what you've learned. Type with confidence.",
      newKeysLabel: "All keys",
      completionMessage: "Done. You now type with all ten fingers.",
    },
  },
  fr: {
    0: {
      title: "Trouve les repères",
      subtitle: "Regarde ton clavier : les touches F et J ont de petites bosses. Pose tes index dessus - gauche sur F, droit sur J. C'est ta position de départ pour atteindre toutes les autres touches.",
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
      completionMessage: "Quatre doigts déjà au travail. Pas mal.",
    },
    3: {
      title: "S et L en plus",
      subtitle: "Annulaire gauche sur S, annulaire droit sur L.",
      newKeysLabel: "S et L",
      completionMessage: "Six doigts actifs. La mémoire musculaire se construit.",
    },
    4: {
      title: "A et ; en plus",
      subtitle: "Auriculaire gauche sur A, auriculaire droit sur ;",
      newKeysLabel: "A et ;",
      completionMessage: "La rangée de base complète. Huit doigts actifs.",
    },
    5: {
      title: "Rangée de base complète",
      subtitle: "Toutes les touches de base ensemble. Vrais mots, vraies phrases.",
      newKeysLabel: "Révision",
      completionMessage: "Rangée de base maîtrisée. C'est la fondation de tout le reste.",
    },
    6: {
      title: "E et I - Vers le haut",
      subtitle: "Majeurs vers la rangée supérieure. E à gauche, I à droite.",
      newKeysLabel: "E et I",
      completionMessage: "Deux des lettres les plus courantes. Bonne progression.",
    },
    7: {
      title: "R et U en plus",
      subtitle: "Index vers le haut. R à gauche, U à droite.",
      newKeysLabel: "R et U",
      completionMessage: "Ton vocabulaire grandit à chaque leçon.",
    },
    8: {
      title: "W et O en plus",
      subtitle: "Annulaires vers le haut. W à gauche, O à droite.",
      newKeysLabel: "W et O",
      completionMessage: "La rangée supérieure prend forme.",
    },
    9: {
      title: "Q, P, T et Y",
      subtitle: "Les dernières touches de la rangée supérieure.",
      newKeysLabel: "Q, P, T, Y",
      completionMessage: "Rangée supérieure complète. Deux rangées maîtrisées.",
    },
    10: {
      title: "Rangée supérieure complète",
      subtitle: "Rangée de base plus rangée supérieure. Phrases fluides.",
      newKeysLabel: "Révision",
      completionMessage: "Deux rangées acquises. Plus qu'une.",
    },
    11: {
      title: "N, M, V et B",
      subtitle: "Les touches les plus courantes de la rangée inférieure.",
      newKeysLabel: "N, M, V, B",
      completionMessage: "La rangée inférieure commence. Presque tout l'alphabet.",
    },
    12: {
      title: "C, virgule, X et point",
      subtitle: "Ponctuation et lettres moins courantes.",
      newKeysLabel: "C, X et ponctuation",
      completionMessage: "Tu peux maintenant écrire des phrases complètes avec ponctuation.",
    },
    13: {
      title: "Z et /",
      subtitle: "Les dernières touches. Après ça, tu as tout l'alphabet.",
      newKeysLabel: "Z et /",
      completionMessage: "Toutes les touches apprises. Chaque mot est possible.",
    },
    14: {
      title: "Les 100 mots les plus courants",
      subtitle: "Les mots que tu tapes le plus. Rapide et sûr.",
      newKeysLabel: "Mots courants",
      completionMessage: "Ces mots sont automatiques maintenant.",
    },
    15: {
      title: "Mots de deux syllabes",
      subtitle: "Des mots plus longs qui doivent couler naturellement.",
      newKeysLabel: "Mots bi-syllabiques",
      completionMessage: "Les mots plus longs ne posent plus de problème.",
    },
    16: {
      title: "Vocabulaire du quotidien",
      subtitle: "Mots du travail et de la tech : ordinateur, logiciel, projet.",
      newKeysLabel: "Travail + tech",
      completionMessage: "Ton vocabulaire professionnel est solide.",
    },
    17: {
      title: "Touche Shift et majuscules",
      subtitle: "Maintiens Shift avec l'auriculaire, tape la lettre.",
      newKeysLabel: "Shift",
      completionMessage: "Majuscules maîtrisées. Jours, noms, débuts de phrase.",
    },
    18: {
      title: "Phrases avec majuscules",
      subtitle: "De vraies phrases avec les majuscules correctes.",
      newKeysLabel: "Révision",
      completionMessage: "Les majuscules sont maintenant automatiques.",
    },
    19: {
      title: "Point, virgule, question, exclamation",
      subtitle: "Les quatre signes de ponctuation les plus importants.",
      newKeysLabel: ". , ? !",
      completionMessage: "La ponctuation de base est solide.",
    },
    20: {
      title: "Apostrophe, guillemets, tiret",
      subtitle: "Ponctuation pour les citations et mots composés.",
      newKeysLabel: "' \" - :",
      completionMessage: "Tu peux maintenant taper des textes plus complexes.",
    },
    21: {
      title: "Parentheses, @, &",
      subtitle: "Caractères spéciaux pour emails et textes techniques.",
      newKeysLabel: "( ) @ &",
      completionMessage: "Adresses email et caractères spéciaux, pas de problème.",
    },
    22: {
      title: "Phrases courtes",
      subtitle: "Taper avec fluidité, phrase par phrase.",
      newKeysLabel: "Phrases",
      completionMessage: "Les phrases courtes coulent. Passons aux textes plus longs.",
    },
    23: {
      title: "Phrases plus longues",
      subtitle: "Deux à trois phrases d'affilée. Garde ta concentration.",
      newKeysLabel: "Phrases longues",
      completionMessage: "Tu gardes la concentration sur des textes plus longs.",
    },
    24: {
      title: "Paragraphes courts",
      subtitle: "Tape des paragraphes entiers : emails, rapports, notes.",
      newKeysLabel: "Paragraphes",
      completionMessage: "Tu tapes des paragraphes entiers avec fluidité et précision.",
    },
    25: {
      title: "Vitesse : mots courants",
      subtitle: "Les mots les plus courants aussi vite que possible.",
      newKeysLabel: "Speed drill",
      completionMessage: "Ta vitesse augmente. Continue.",
    },
    26: {
      title: "Vitesse : phrases",
      subtitle: "Des phrases a pleine vitesse. La précision reste importante.",
      newKeysLabel: "Speed drill",
      completionMessage: "Vitesse et précision en équilibre. Solide.",
    },
    27: {
      title: "Le test final",
      subtitle: "Montre ce que tu as appris. Tape avec confiance.",
      newKeysLabel: "Toutes les touches",
      completionMessage: "Terminé. Tu tapes maintenant avec tes dix doigts.",
    },
  },
};
