// HTML for the worksheets in src/lib/worksheets.ts. Keyboard drawings
// come from the same layout and finger data the app uses, so the sheets
// can never disagree with the on-screen keyboard.
import type { Locale } from "../../src/i18n/config";
import { layouts, type KeyDef, type KeyboardLayout } from "../../src/lib/keyboard-layouts";
import { getFingerForKey, fingerColors, type Finger } from "../../src/lib/lessons";
import { worksheets, type Worksheet, type WorksheetId } from "../../src/lib/worksheets";
import { localizedPath } from "../../src/i18n/routes";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const fingerNames: Record<Locale, Record<Finger, string>> = {
  de: { "left-pinky": "Kleiner Finger links", "left-ring": "Ringfinger links", "left-middle": "Mittelfinger links", "left-index": "Zeigefinger links", "right-index": "Zeigefinger rechts", "right-middle": "Mittelfinger rechts", "right-ring": "Ringfinger rechts", "right-pinky": "Kleiner Finger rechts", thumb: "Daumen" },
  en: { "left-pinky": "Left pinky", "left-ring": "Left ring finger", "left-middle": "Left middle finger", "left-index": "Left index finger", "right-index": "Right index finger", "right-middle": "Right middle finger", "right-ring": "Right ring finger", "right-pinky": "Right pinky", thumb: "Thumb" },
  fr: { "left-pinky": "Auriculaire gauche", "left-ring": "Annulaire gauche", "left-middle": "Majeur gauche", "left-index": "Index gauche", "right-index": "Index droit", "right-middle": "Majeur droit", "right-ring": "Annulaire droit", "right-pinky": "Auriculaire droit", thumb: "Pouce" },
};

const fingerOrder: Finger[] = ["left-pinky", "left-ring", "left-middle", "left-index", "thumb", "right-index", "right-middle", "right-ring", "right-pinky"];

// ---------------------------------------------------------------- keyboard

type KeyboardOptions = { blank?: boolean; scale?: number; showHomeMarks?: boolean };

// The on-screen keyboard uses 40px keys with a 3px gap; here 1 unit = 1px
// of that grid, scaled to fit the sheet width.
function keyboardHtml(locale: Locale, layout: KeyboardLayout, opts: KeyboardOptions = {}): string {
  const scale = opts.scale ?? 0.36;
  const gap = 3 * scale;
  const rows = [layout.numberRow, layout.topRow, layout.homeRow, layout.bottomRow];
  const spaceRow: KeyDef[] = [
    { key: "Ctrl", label: "Ctrl", width: 54, isModifier: true },
    { key: "Alt", label: "Alt", width: 54, isModifier: true },
    { key: " ", label: "", width: 320 },
    { key: "AltGr", label: locale === "en" ? "Alt" : "AltGr", width: 54, isModifier: true },
    { key: "Ctrl2", label: "Ctrl", width: 54, isModifier: true },
  ];
  const renderRow = (row: KeyDef[]) =>
    `<div class="krow" style="gap:${gap}mm">` +
    row
      .map((k) => {
        const w = (k.width ?? 40) * scale;
        const h = 40 * scale;
        const finger = k.isModifier || k.key === " " ? undefined : getFingerForKey(k.key, locale);
        const color = k.key === " " ? fingerColors.thumb : finger ? fingerColors[finger] : undefined;
        const bg = color ? `${color}${opts.blank ? "14" : "2e"}` : "#f4f4f5";
        const border = color ? `${color}` : "#d4d4d8";
        const isHome = !k.isModifier && layout.homeKeys.includes(k.key.toLowerCase());
        const label = k.isModifier ? (k.label ?? k.key) : opts.blank ? "" : (k.label ?? k.key.toUpperCase());
        const mark = opts.showHomeMarks !== false && isHome && !opts.blank ? `<i class="home"></i>` : "";
        const bump = (k.key === "f" || k.key === "j") && opts.showHomeMarks !== false ? `<i class="bump"></i>` : "";
        return `<div class="key${k.isModifier ? " mod" : ""}" style="width:${w}mm;height:${h}mm;background:${bg};border-color:${border}"><span>${esc(label)}</span>${mark}${bump}</div>`;
      })
      .join("") +
    `</div>`;
  return `<div class="keyboard" style="gap:${gap}mm">${rows.map(renderRow).join("")}${renderRow(spaceRow)}</div>`;
}

const keyboardCss = `
  .keyboard { display: inline-flex; flex-direction: column; align-items: center; padding: 3mm; background: #e9e8f5; border-radius: 3mm; }
  .krow { display: flex; }
  .key { position: relative; display: flex; align-items: center; justify-content: center; border: 0.35mm solid; border-bottom-width: 0.8mm; border-radius: 1.4mm; font-family: "JetBrains Mono", ui-monospace, monospace; font-weight: 600; font-size: 7.5pt; color: #050111; background: #fff; }
  .key.mod { font-family: Poppins, sans-serif; font-weight: 500; font-size: 5.5pt; color: #52525b; }
  .key .home { position: absolute; bottom: 1mm; left: 50%; transform: translateX(-50%); width: 3mm; height: 0.5mm; border-radius: 1mm; background: #050111; opacity: 0.55; }
  .key .bump { position: absolute; bottom: 2.2mm; left: 50%; transform: translateX(-50%); width: 1.4mm; height: 1.4mm; border-radius: 50%; background: #050111; opacity: 0.55; }
`;

// ------------------------------------------------------------------- hands

// Two schematic hands, palms down, fingertips colored by finger. Left
// hand drawn once, right hand mirrored.
function handsHtml(): string {
  const left: Finger[] = ["left-pinky", "left-ring", "left-middle", "left-index"];
  const right: Finger[] = ["right-index", "right-middle", "right-ring", "right-pinky"];
  const finger = (x: number, len: number, color: string) =>
    `<rect x="${x}" y="${120 - len}" width="22" height="${len + 40}" rx="11" fill="#fff" stroke="#050111" stroke-width="2.5"/>
     <circle cx="${x + 11}" cy="${120 - len + 12}" r="8" fill="${color}"/>`;
  const hand = (fingers: Finger[], mirror: boolean) => {
    const lens = mirror ? [78, 88, 80, 62] : [62, 80, 88, 78];
    const xs = [8, 38, 68, 98];
    const thumb = mirror
      ? `<rect x="-22" y="118" width="20" height="58" rx="10" transform="rotate(35 -12 118)" fill="#fff" stroke="#050111" stroke-width="2.5"/><circle cx="-33" cy="132" r="7" fill="${fingerColors.thumb}" transform="rotate(35 -12 118)"/>`
      : `<rect x="130" y="118" width="20" height="58" rx="10" transform="rotate(-35 140 118)" fill="#fff" stroke="#050111" stroke-width="2.5"/><circle cx="140" cy="132" r="7" fill="${fingerColors.thumb}" transform="rotate(-35 140 118)"/>`;
    return `<g>
      <rect x="4" y="128" width="120" height="96" rx="26" fill="#fff" stroke="#050111" stroke-width="2.5"/>
      ${fingers.map((f, i) => finger(xs[i], lens[i], fingerColors[f])).join("")}
      <rect x="6" y="130" width="116" height="60" fill="#fff"/>
      ${thumb}
    </g>`;
  };
  return `<svg viewBox="-60 20 420 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    ${hand(left, false)}
    <g transform="translate(300,0) scale(-1,1)">${hand(right, true)}</g>
  </svg>`;
}

function legendHtml(locale: Locale): string {
  return `<div class="legend">${fingerOrder
    .map((f) => `<span><i style="background:${fingerColors[f]}"></i>${esc(fingerNames[locale][f])}</span>`)
    .join("")}</div>`;
}

// ----------------------------------------------------------------- copy

const t = {
  de: {
    fingerMapIntro: "Jede Taste hat einen festen Finger. Die Grundstellung ist A S D F und J K L Ö, die Daumen liegen auf der Leertaste. Die Noppen auf F und J findest du blind.",
    homeRow: "Grundstellung",
    homeRowText: (keys: string) => `Finger auf ${keys}. Nach jedem Anschlag kehrt der Finger dorthin zurück.`,
    rules: ["Handgelenke schweben, nicht auflegen.", "Blick auf den Bildschirm, nie auf die Tasten.", "Erst Genauigkeit, dann Tempo."],
    blankIntro: "Trag alle Buchstaben, Ziffern und Zeichen aus dem Gedächtnis ein. Stoppuhr an. Was fehlt oder falsch sitzt, ist deine Übungsliste für diese Woche.",
    blankChecks: ["Zeit:", "Richtig:", "Fehlt:"],
    trackerIntro: "Ein Eintrag pro Übungstag. Startwert aus der Einstufung, Wochenziel selbst festlegen. 10 bis 15 Minuten am Tag reichen.",
    trackerStart: "Startwert (Einstufung)",
    trackerCols: ["Tag", "Lektion", "WPM", "Genauigkeit", "Minuten", "Notiz"],
    week: "Woche",
    weekGoal: "Wochenziel",
    trackerEnd: "Nach 4 Wochen: Tippgeschwindigkeit erneut messen und mit dem Startwert vergleichen.",
    numpadIntro: "Die rechte Hand ruht auf 4, 5 und 6, der Zeigefinger fühlt die Noppe auf der 5. Der Daumen bedient die 0, der kleine Finger Enter und Plus.",
    numpadRows: [["Zeigefinger", "7, 4, 1 und Num"], ["Mittelfinger", "8, 5, 2 und /"], ["Ringfinger", "9, 6, 3, * und Komma"], ["Kleiner Finger", "-, + und Enter"], ["Daumen", "0"]],
    numpadTip: "Bei Zahlenkolonnen: Blick auf die Vorlage, nicht auf den Block. Nach jeder Zahl zurück auf 4-5-6.",
    posterTitle: "Welcher Finger tippt was?",
    posterSub: "Grundstellung A S D F · J K L Ö. Daumen auf der Leertaste. Blick nach vorn.",
    selfIntro: "Kreuze ehrlich an. Die Auswertung sagt dir, wo du am besten einsteigst.",
    selfQuestions: [
      "Ich tippe, ohne auf die Tastatur zu schauen.",
      "Ich nutze alle zehn Finger, auch die kleinen.",
      "Meine Finger kehren nach jedem Anschlag in die Grundstellung zurück.",
      "Ich finde F und J blind über die Noppen.",
      "Ich tippe Zahlen und Sonderzeichen, ohne zu suchen.",
      "Ich schaffe mehr als 40 Wörter pro Minute.",
      "Ich mache weniger als 5 Prozent Fehler.",
      "Ich nutze Shortcuts wie Ctrl + C statt der Maus.",
    ],
    yes: "Ja",
    no: "Nein",
    selfResult: "Auswertung: Zähle deine Ja-Antworten.",
    selfLevels: [
      ["0 bis 2", "Neustart: Beginne mit Lektion 0. Das 10-Finger-System von Grund auf, 15 Minuten am Tag."],
      ["3 bis 5", "Ausbau: Mach die kostenlose Einstufung. Sie zeigt, welche Tasten sitzen und wo du einsteigst."],
      ["6 bis 8", "Feinschliff: Miss deine Tippgeschwindigkeit und hol dir das Zertifikat als Nachweis."],
    ],
    charsIntro: "Die Zeichen, die im Job am häufigsten fehlen: welche Taste, welche Umschalttaste, welcher Finger. Shift mit der Hand, die nicht tippt.",
    charsCols: ["Zeichen", "Tasten", "Finger"],
    myOwn: "Meine eigenen",
    cta: "Nächster Schritt",
    ctaSpeed: "Miss kostenlos deine Tippgeschwindigkeit",
    ctaPlacement: "Kostenlose Einstufung",
    ctaCourse: "10-Finger-System lernen",
    footer: "Zum Ausdrucken und neben die Tastatur legen.",
  },
  en: {
    fingerMapIntro: "Every key belongs to one finger. The home position is A S D F and J K L ;, thumbs on the space bar. The bumps on F and J let you find it without looking.",
    homeRow: "Home position",
    homeRowText: (keys: string) => `Fingers on ${keys}. After every keystroke the finger returns there.`,
    rules: ["Wrists float, don't rest them.", "Eyes on the screen, never on the keys.", "Accuracy first, speed second."],
    blankIntro: "Fill in every letter, digit and symbol from memory. Start a timer. Whatever is missing or misplaced is your practice list for this week.",
    blankChecks: ["Time:", "Correct:", "Missing:"],
    trackerIntro: "One line per practice day. Starting value from the placement test, set your own weekly goal. 10 to 15 minutes a day is enough.",
    trackerStart: "Starting value (placement)",
    trackerCols: ["Day", "Lesson", "WPM", "Accuracy", "Minutes", "Note"],
    week: "Week",
    weekGoal: "Weekly goal",
    trackerEnd: "After 4 weeks: take the speed test again and compare with your starting value.",
    numpadIntro: "The right hand rests on 4, 5 and 6, the middle finger feels the bump on the 5. The thumb takes the 0, the pinky Enter and Plus.",
    numpadRows: [["Index finger", "7, 4, 1 and Num"], ["Middle finger", "8, 5, 2 and /"], ["Ring finger", "9, 6, 3, * and ."], ["Pinky", "-, + and Enter"], ["Thumb", "0"]],
    numpadTip: "Entering columns of numbers: eyes on the source, not on the keypad. Back to 4-5-6 after every number.",
    posterTitle: "Which finger types what?",
    posterSub: "Home position A S D F · J K L ;. Thumbs on the space bar. Eyes forward.",
    selfIntro: "Answer honestly. The result tells you where to start.",
    selfQuestions: [
      "I type without looking at the keyboard.",
      "I use all ten fingers, including the pinkies.",
      "My fingers return to the home position after every keystroke.",
      "I find F and J by the bumps without looking.",
      "I type numbers and symbols without searching.",
      "I type more than 40 words per minute.",
      "I make fewer than 5 percent errors.",
      "I use shortcuts like Ctrl + C instead of the mouse.",
    ],
    yes: "Yes",
    no: "No",
    selfResult: "Result: count your Yes answers.",
    selfLevels: [
      ["0 to 2", "Fresh start: begin with lesson 0. Touch typing from scratch, 15 minutes a day."],
      ["3 to 5", "Build-up: take the free placement test. It shows which keys you know and where to start."],
      ["6 to 8", "Fine-tuning: measure your typing speed and get the certificate as proof."],
    ],
    charsIntro: "The characters people search for most at work: which key, which modifier, which finger. Hold Shift with the hand that is not typing.",
    charsCols: ["Character", "Keys", "Finger"],
    myOwn: "My own",
    cta: "Next step",
    ctaSpeed: "Measure your typing speed for free",
    ctaPlacement: "Free placement test",
    ctaCourse: "Learn touch typing",
    footer: "Print it and keep it next to your keyboard.",
  },
  fr: {
    fingerMapIntro: "Chaque touche a son doigt. La position de base est Q S D F et J K L M, les pouces sur la barre d'espace. Les repères sur F et J se trouvent sans regarder.",
    homeRow: "Position de base",
    homeRowText: (keys: string) => `Doigts sur ${keys}. Après chaque frappe, le doigt y revient.`,
    rules: ["Les poignets flottent, ne les pose pas.", "Les yeux sur l'écran, jamais sur les touches.", "La précision d'abord, la vitesse ensuite."],
    blankIntro: "Place toutes les lettres, chiffres et signes de mémoire. Lance un chrono. Ce qui manque ou se trompe de place, c'est ta liste d'exercices de la semaine.",
    blankChecks: ["Temps :", "Justes :", "Manquantes :"],
    trackerIntro: "Une ligne par séance. Valeur de départ issue de l'évaluation, objectif hebdomadaire à fixer toi-même. 10 à 15 minutes par jour suffisent.",
    trackerStart: "Valeur de départ (évaluation)",
    trackerCols: ["Jour", "Leçon", "MPM", "Précision", "Minutes", "Note"],
    week: "Semaine",
    weekGoal: "Objectif de la semaine",
    trackerEnd: "Après 4 semaines : refais le test de vitesse et compare avec ta valeur de départ.",
    numpadIntro: "La main droite repose sur 4, 5 et 6, le majeur sent le repère du 5. Le pouce frappe le 0, l'auriculaire Entrée et Plus.",
    numpadRows: [["Index", "7, 4, 1 et Verr num"], ["Majeur", "8, 5, 2 et /"], ["Annulaire", "9, 6, 3, * et ."], ["Auriculaire", "-, + et Entrée"], ["Pouce", "0"]],
    numpadTip: "Pour des colonnes de chiffres : les yeux sur le document, pas sur le pavé. Retour sur 4-5-6 après chaque nombre.",
    posterTitle: "Quel doigt tape quoi ?",
    posterSub: "Position de base Q S D F · J K L M. Pouces sur la barre d'espace. Regard devant.",
    selfIntro: "Réponds franchement. Le résultat t'indique par où commencer.",
    selfQuestions: [
      "Je tape sans regarder le clavier.",
      "J'utilise les dix doigts, auriculaires compris.",
      "Mes doigts reviennent en position de base après chaque frappe.",
      "Je trouve F et J grâce aux repères, sans regarder.",
      "Je tape chiffres et caractères spéciaux sans chercher.",
      "Je dépasse 40 mots par minute.",
      "Je fais moins de 5 % d'erreurs.",
      "J'utilise des raccourcis comme Ctrl + C au lieu de la souris.",
    ],
    yes: "Oui",
    no: "Non",
    selfResult: "Résultat : compte tes Oui.",
    selfLevels: [
      ["0 à 2", "Nouveau départ : commence par la leçon 0. La dactylographie depuis le début, 15 minutes par jour."],
      ["3 à 5", "Consolidation : fais l'évaluation gratuite. Elle montre quelles touches sont acquises et où commencer."],
      ["6 à 8", "Finition : mesure ta vitesse de frappe et obtiens le certificat comme preuve."],
    ],
    charsIntro: "Les caractères qu'on cherche le plus au travail : quelle touche, quel modificateur, quel doigt. Maj avec la main qui ne tape pas.",
    charsCols: ["Caractère", "Touches", "Doigt"],
    myOwn: "Les miens",
    cta: "Prochaine étape",
    ctaSpeed: "Mesure gratuitement ta vitesse de frappe",
    ctaPlacement: "Évaluation gratuite",
    ctaCourse: "Apprendre la dactylographie",
    footer: "À imprimer et à garder à côté du clavier.",
  },
} as const;

// Special characters per layout: [char, keys, finger].
const specialChars: Record<Locale, [string, string, Finger][]> = {
  de: [
    ["@", "AltGr + Q", "left-pinky"], ["€", "AltGr + E", "left-middle"], ["%", "Shift + 5", "left-index"], ["&", "Shift + 6", "right-index"],
    ["/", "Shift + 7", "right-index"], ["(", "Shift + 8", "right-middle"], [")", "Shift + 9", "right-ring"], ["=", "Shift + 0", "right-pinky"],
    ["?", "Shift + ß", "right-pinky"], ["\"", "Shift + 2", "left-ring"], ["§", "Shift + 3", "left-middle"], ["$", "Shift + 4", "left-index"],
    ["{", "AltGr + 7", "right-index"], ["[", "AltGr + 8", "right-middle"], ["]", "AltGr + 9", "right-ring"], ["}", "AltGr + 0", "right-pinky"],
    ["\\", "AltGr + ß", "right-pinky"], ["|", "AltGr + <", "left-pinky"], ["~", "AltGr + +", "right-pinky"], ["*", "Shift + +", "right-pinky"],
    [";", "Shift + ,", "right-middle"], [":", "Shift + .", "right-ring"], ["_", "Shift + -", "right-pinky"], ["'", "Shift + #", "right-pinky"],
  ],
  en: [
    ["@", "Shift + 2", "left-ring"], ["#", "Shift + 3", "left-middle"], ["$", "Shift + 4", "left-index"], ["%", "Shift + 5", "left-index"],
    ["^", "Shift + 6", "right-index"], ["&", "Shift + 7", "right-index"], ["*", "Shift + 8", "right-middle"], ["(", "Shift + 9", "right-ring"],
    [")", "Shift + 0", "right-pinky"], ["_", "Shift + -", "right-pinky"], ["+", "Shift + =", "right-pinky"], ["{", "Shift + [", "right-pinky"],
    ["}", "Shift + ]", "right-pinky"], ["|", "Shift + \\", "right-pinky"], [":", "Shift + ;", "right-pinky"], ["\"", "Shift + '", "right-pinky"],
    ["<", "Shift + ,", "right-middle"], [">", "Shift + .", "right-ring"], ["?", "Shift + /", "right-pinky"], ["~", "Shift + `", "left-pinky"],
    ["!", "Shift + 1", "left-pinky"], ["€", "Alt + 0128", "left-ring"],
  ],
  fr: [
    ["@", "AltGr + à", "right-pinky"], ["#", "AltGr + \"", "left-middle"], ["€", "AltGr + E", "left-middle"], ["{", "AltGr + '", "left-index"],
    ["}", "AltGr + =", "right-pinky"], ["[", "AltGr + (", "left-index"], ["]", "AltGr + )", "right-pinky"], ["|", "AltGr + -", "right-index"],
    ["\\", "AltGr + _", "right-middle"], ["~", "AltGr + é", "left-ring"], ["`", "AltGr + è", "right-index"], ["^", "AltGr + ç", "right-ring"],
    ["1 à 0", "Maj + & é \" ' ( - è _ ç à", "left-pinky"], [".", "Maj + ;", "right-middle"], ["/", "Maj + :", "right-ring"], ["§", "Maj + !", "right-pinky"],
    ["?", "Maj + ,", "right-index"], ["%", "Maj + ù", "right-pinky"], ["£", "Maj + $", "right-pinky"], ["+", "Maj + =", "right-pinky"],
    ["°", "Maj + )", "right-pinky"], ["µ", "Maj + *", "right-pinky"],
  ],
};

// ---------------------------------------------------------------- shell

export type Shell = (opts: { locale: Locale; title: string; body: string; extraCss?: string; ctaLabel: string; ctaUrl: string; footer: string; landscape?: boolean }) => string;

function keysHtml(s: string): string {
  return s
    .split(/\s\+\s/)
    .map((k) => `<kbd>${esc(k)}</kbd>`)
    .join('<span class="plus">+</span>');
}

export function renderWorksheet(id: WorksheetId, locale: Locale, shell: Shell): string {
  const sheet = worksheets.find((w) => w.id === id) as Worksheet;
  const c = t[locale];
  const layout = layouts[locale];
  const title = sheet.title[locale];
  const homeKeys = layout.homeKeys.map((k) => k.toUpperCase()).join(" ");
  const speedUrl = `fastforwardtyping.com${localizedPath(locale, "speedTest")}`;
  const placementUrl = `fastforwardtyping.com${localizedPath(locale, "placement")}`;
  const courseUrl = `fastforwardtyping.com${localizedPath(locale, "lessons")}`;
  const base = { locale, title, footer: c.footer, extraCss: keyboardCss + sheetCss };

  switch (id) {
    case "finger-map":
      return shell({
        ...base,
        ctaLabel: c.ctaCourse,
        ctaUrl: courseUrl,
        body: `
          <p class="intro">${esc(c.fingerMapIntro)}</p>
          <div class="center">${keyboardHtml(locale, layout, { scale: 0.285 })}</div>
          ${legendHtml(locale)}
          <div class="two">
            <div class="hands">${handsHtml()}</div>
            <div class="card">
              <h2>${esc(c.homeRow)}</h2>
              <p>${esc(c.homeRowText(homeKeys))}</p>
              <ul class="rules">${c.rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
            </div>
          </div>`,
      });

    case "blank-layout":
      return shell({
        ...base,
        ctaLabel: c.ctaPlacement,
        ctaUrl: placementUrl,
        body: `
          <p class="intro">${esc(c.blankIntro)}</p>
          <div class="center">${keyboardHtml(locale, layout, { blank: true, scale: 0.285, showHomeMarks: false })}</div>
          <div class="checks">${c.blankChecks.map((l) => `<span>${esc(l)} <i></i></span>`).join("")}</div>
          <div class="center faded">${keyboardHtml(locale, layout, { blank: true, scale: 0.285, showHomeMarks: false })}</div>
          <div class="checks">${c.blankChecks.map((l) => `<span>${esc(l)} <i></i></span>`).join("")}</div>`,
      });

    case "tracker": {
      const weeks = [1, 2, 3, 4]
        .map(
          (w) => `
          <table class="tracker">
            <thead><tr><th class="wk" colspan="${c.trackerCols.length}">${esc(c.week)} ${w} · ${esc(c.weekGoal)}: ______ WPM</th></tr>
            <tr>${c.trackerCols.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
            <tbody>${[1, 2, 3, 4, 5, 6, 7].map((d) => `<tr><td class="day">${(w - 1) * 7 + d}</td>${c.trackerCols.slice(1).map(() => "<td></td>").join("")}</tr>`).join("")}</tbody>
          </table>`
        )
        .join("");
      return shell({
        ...base,
        ctaLabel: c.ctaSpeed,
        ctaUrl: speedUrl,
        body: `
          <p class="intro">${esc(c.trackerIntro)}</p>
          <div class="startline"><b>${esc(c.trackerStart)}:</b> ______ WPM &nbsp; ______ % &nbsp; <span class="date">____ / ____ / 20____</span></div>
          <div class="grid2">${weeks}</div>
          <p class="note">${esc(c.trackerEnd)}</p>`,
      });
    }

    case "numpad": {
      const fingerOf: Record<string, Finger> = {
        "7": "right-index", "4": "right-index", "1": "right-index", Num: "right-index",
        "8": "right-middle", "5": "right-middle", "2": "right-middle", "/": "right-middle",
        "9": "right-ring", "6": "right-ring", "3": "right-ring", "*": "right-ring", ",": "right-ring",
        "-": "right-pinky", "+": "right-pinky", "↵": "right-pinky", "0": "thumb",
      };
      const cell = (k: string, cls = "") =>
        `<div class="nkey ${cls}" style="background:${fingerColors[fingerOf[k]]}2e;border-color:${fingerColors[fingerOf[k]]}">${esc(k)}${k === "5" ? '<i class="bump"></i>' : ""}</div>`;
      const numpad = `
        <div class="numpad">
          ${cell("Num")}${cell("/")}${cell("*")}${cell("-")}
          ${cell("7")}${cell("8")}${cell("9")}${cell("+", "tall")}
          ${cell("4")}${cell("5")}${cell("6")}
          ${cell("1")}${cell("2")}${cell("3")}${cell("↵", "tall")}
          ${cell("0", "wide")}${cell(",")}
        </div>`;
      return shell({
        ...base,
        ctaLabel: c.ctaCourse,
        ctaUrl: courseUrl,
        body: `
          <p class="intro">${esc(c.numpadIntro)}</p>
          <div class="two">
            <div class="center">${numpad}</div>
            <div class="card">
              <table class="plain">${c.numpadRows.map(([f, k]) => `<tr><th>${esc(f)}</th><td>${esc(k)}</td></tr>`).join("")}</table>
              <p class="tip">${esc(c.numpadTip)}</p>
            </div>
          </div>
          ${legendHtml(locale)}`,
      });
    }

    case "poster":
      return shell({
        ...base,
        landscape: true,
        ctaLabel: c.ctaSpeed,
        ctaUrl: speedUrl,
        body: `
          <h1 class="poster-title">${esc(c.posterTitle)}</h1>
          <div class="center">${keyboardHtml(locale, layout, { scale: 0.42 })}</div>
          <p class="poster-sub">${esc(c.posterSub)}</p>
          ${legendHtml(locale)}`,
      });

    case "self-test":
      return shell({
        ...base,
        ctaLabel: c.ctaSpeed,
        ctaUrl: speedUrl,
        body: `
          <p class="intro">${esc(c.selfIntro)}</p>
          <table class="quiz">
            <thead><tr><th></th><th></th><th>${esc(c.yes)}</th><th>${esc(c.no)}</th></tr></thead>
            <tbody>${c.selfQuestions.map((q, i) => `<tr><td class="n">${i + 1}</td><td>${esc(q)}</td><td><i class="box"></i></td><td><i class="box"></i></td></tr>`).join("")}</tbody>
          </table>
          <h2 class="result">${esc(c.selfResult)}</h2>
          <div class="levels">${c.selfLevels
            .map(([range, text], i) => `<div class="level l${i}"><span class="range">${esc(range)}</span><p>${esc(text)}</p></div>`)
            .join("")}</div>
          <div class="links"><span>${esc(c.ctaCourse)}: <b>${esc(courseUrl)}</b></span><span>${esc(c.ctaPlacement)}: <b>${esc(placementUrl)}</b></span><span>${esc(c.ctaSpeed)}: <b>${esc(speedUrl)}</b></span></div>`,
      });

    case "special-chars": {
      const rows = specialChars[locale];
      const half = Math.ceil(rows.length / 2);
      const table = (list: [string, string, Finger][]) =>
        `<table class="chars"><thead><tr>${c.charsCols.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${list
          .map(([ch, keys, f]) => `<tr><td class="ch">${esc(ch)}</td><td>${keysHtml(keys)}</td><td><i class="dot" style="background:${fingerColors[f]}"></i>${esc(fingerNames[locale][f])}</td></tr>`)
          .join("")}</tbody></table>`;
      return shell({
        ...base,
        ctaLabel: c.ctaCourse,
        ctaUrl: courseUrl,
        body: `
          <p class="intro">${esc(c.charsIntro)}</p>
          <div class="grid2">${table(rows.slice(0, half))}${table(rows.slice(half))}</div>
          <div class="card own"><h2>${esc(c.myOwn)}</h2>${[1, 2, 3].map(() => '<div class="line"></div>').join("")}</div>`,
      });
    }
  }
}

const sheetCss = `
  .intro { color: #4b4b57; margin: 0 0 4mm; }
  .center { display: flex; justify-content: center; }
  .faded { opacity: 0.9; }
  .legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5mm 4mm; margin: 4mm 0; font-size: 8pt; }
  .legend i { display: inline-block; width: 3mm; height: 3mm; border-radius: 50%; margin-right: 1.5mm; vertical-align: -0.4mm; }
  .two { display: grid; grid-template-columns: 1.1fr 1fr; gap: 5mm; align-items: center; margin-top: 2mm; }
  .hands { height: 62mm; }
  .card { background: #eeecfe; border-radius: 3.5mm; padding: 4mm 5mm; }
  .card h2 { font-size: 8.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #3f0ff2; margin: 0 0 2mm; }
  .card p { margin: 0 0 2mm; }
  ul.rules { margin: 0; padding-left: 4mm; }
  ul.rules li { margin: 0.6mm 0; }
  .checks { display: flex; gap: 8mm; justify-content: center; margin: 3mm 0 6mm; font-size: 9pt; }
  .checks i { display: inline-block; width: 22mm; border-bottom: 0.4mm solid #050111; vertical-align: -1mm; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
  table { border-collapse: collapse; width: 100%; font-size: 8pt; }
  table.tracker th, table.tracker td { border: 0.3mm solid #c9c4f5; padding: 1.3mm 1.5mm; text-align: left; }
  table.tracker th { background: #eeecfe; font-weight: 600; font-size: 7.5pt; }
  table.tracker th.wk { background: #3f0ff2; color: #fff; font-weight: 700; font-size: 8pt; }
  table.tracker td { height: 6.4mm; }
  table.tracker td.day { width: 8mm; color: #7a7a8c; text-align: center; }
  .startline { background: #eeecfe; border-radius: 2.5mm; padding: 2.5mm 4mm; margin: 0 0 4mm; font-size: 9pt; }
  .startline .date { float: right; color: #4b4b57; }
  .note { margin-top: 3mm; color: #4b4b57; }
  .numpad { display: grid; grid-template-columns: repeat(4, 16mm); grid-auto-rows: 16mm; gap: 1.5mm; }
  .nkey { position: relative; display: flex; align-items: center; justify-content: center; border: 0.4mm solid; border-bottom-width: 1mm; border-radius: 2mm; font-family: "JetBrains Mono", monospace; font-weight: 600; font-size: 12pt; }
  .nkey.tall { grid-row: span 2; }
  .nkey.wide { grid-column: span 2; }
  .nkey .bump { position: absolute; bottom: 2.5mm; left: 50%; transform: translateX(-50%); width: 1.8mm; height: 1.8mm; border-radius: 50%; background: #050111; opacity: 0.55; }
  table.plain th, table.plain td { padding: 1.5mm 2mm; text-align: left; vertical-align: top; border-bottom: 0.3mm solid rgba(63,15,242,0.15); font-size: 9pt; }
  table.plain th { font-weight: 700; white-space: nowrap; }
  .tip { margin: 3mm 0 0; font-size: 8.5pt; color: #4b4b57; }
  .poster-title { font-size: 34pt; font-weight: 800; text-align: center; margin: 2mm 0 6mm; letter-spacing: -0.5px; }
  .poster-sub { text-align: center; font-size: 12pt; margin: 6mm 0 2mm; color: #4b4b57; }
  .poster-page .legend { font-size: 10pt; gap: 2mm 6mm; }
  .poster-page .legend i { width: 4mm; height: 4mm; }
  table.quiz td, table.quiz th { padding: 2.2mm 2mm; border-bottom: 0.3mm solid rgba(63,15,242,0.15); font-size: 10pt; text-align: left; }
  table.quiz th { font-size: 8pt; text-transform: uppercase; letter-spacing: 0.08em; color: #3f0ff2; text-align: center; }
  table.quiz td.n { width: 6mm; color: #7a7a8c; }
  table.quiz td:nth-child(3), table.quiz td:nth-child(4) { width: 14mm; text-align: center; }
  i.box { display: inline-block; width: 5mm; height: 5mm; border: 0.4mm solid #050111; border-radius: 1mm; }
  h2.result { font-size: 10pt; font-weight: 800; margin: 6mm 0 3mm; }
  .levels { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3mm; }
  .level { border-radius: 3mm; padding: 3mm 3.5mm; background: #eeecfe; }
  .level.l1 { background: #fdebe2; }
  .level.l2 { background: #f8fbd0; }
  .level .range { display: block; font-weight: 800; font-size: 12pt; margin-bottom: 1mm; }
  .level p { margin: 0; font-size: 8.5pt; }
  .links { display: flex; flex-direction: column; gap: 1mm; margin-top: 6mm; font-size: 8.5pt; color: #4b4b57; }
  .links b { color: #3f0ff2; font-weight: 600; }
  table.chars th, table.chars td { white-space: nowrap; padding: 1.1mm 1.5mm; border-bottom: 0.3mm solid rgba(63,15,242,0.15); text-align: left; font-size: 8.5pt; vertical-align: middle; }
  table.chars th { font-size: 7.5pt; text-transform: uppercase; letter-spacing: 0.08em; color: #3f0ff2; }
  table.chars td.ch { font-family: "JetBrains Mono", monospace; font-weight: 700; font-size: 11pt; width: 10mm; }
  table.chars kbd { font-size: 7pt; padding: 0.3mm 1.2mm; }
  .dot { display: inline-block; width: 2.6mm; height: 2.6mm; border-radius: 50%; margin-right: 1.5mm; vertical-align: -0.3mm; }
  .card.own { margin-top: 5mm; }
  .card.own .line { border-bottom: 0.3mm solid rgba(5,1,17,0.35); height: 7mm; }
`;
