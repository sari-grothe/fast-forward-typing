import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routes";

// Explanatory copy rendered under the interactive tools (speed test,
// placement, keyboard layout comparison). Markdown, rendered with
// src/lib/markdown.tsx. Every number has a source in the closing list;
// external links open in a new tab (see markdown.tsx). Keep the three
// languages in sync: same facts, same sources, rewritten not translated.

const DH = "https://userinterfaces.aalto.fi/136Mkeystrokes/";
const FE = "https://userinterfaces.aalto.fi/how-we-type/";
const SD = "https://www.sciencedaily.com/releases/2016/02/160209112451.htm";
const WPM_EN = "https://en.wikipedia.org/wiki/Words_per_minute";
const WPM_DE = "https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute";
const TYP_EN = "https://en.wikipedia.org/wiki/Typing";
const WQ = "https://en.wikipedia.org/wiki/QWERTY";
const WA = "https://fr.wikipedia.org/wiki/AZERTY";
const WZ = "https://de.wikipedia.org/wiki/QWERTZ-Tastaturbelegung";

export function speedTestExplainer(locale: Locale): string {
  const course = localizedPath(locale, "lessons");
  const placement = localizedPath(locale, "placement");
  const cert = localizedPath(locale, "certificate");
  const de = `## Tipptest: Wie schnell kannst du tippen?

Dieser Tipptest, auch Schreibtest genannt, misst zwei Werte: deine Tippgeschwindigkeit in Wörtern pro Minute (WPM) und deine Genauigkeit in Prozent. Ein Wort zählt als 5 Zeichen inklusive Leerzeichen und Satzzeichen, so rechnen alle gängigen Messungen weltweit. In Anschlägen pro Minute heißt das: WPM mal 5, 40 WPM sind also 200 Anschläge. Du tippst echte Sätze, keine Zufallswörter, wahlweise 1, 2 oder 5 Minuten lang. Falsche Eingaben werden blockiert, bis die richtige Taste kommt. Das Ergebnis zeigt also, wie schnell du fehlerfrei tippst.

## Was ist eine gute Tippgeschwindigkeit?

Kurz gesagt: 40 WPM ist Durchschnitt, ab 60 bist du schnell, ab 80 auf Profi-Niveau. Die größte Tippstudie der Welt (Aalto University und University of Cambridge, 168.000 Teilnehmer) misst im Schnitt 52 WPM, die Schnellsten kommen über 120. Zwei-Finger-Tipper liegen beim Abschreiben bei etwa 27 WPM.

| Wer | Wörter pro Minute |
|---|---|
| Zwei-Finger-Tipper, Text abschreiben | ca. 27 |
| Zwei-Finger-Tipper, aus dem Kopf | ca. 37 |
| Durchschnitt der Aalto-Studie (168.000 Teilnehmer) | 52 |
| 10-Finger-System, geübt | 40 bis 60 |
| Schreibkräfte im Beruf | 43 bis 80, manche Stellen verlangen 80 bis 95 |
| Schnellste Teilnehmer der Aalto-Studie | über 120 |
| Weltrekord 1946 (Stella Pajunas-Garnand, elektrische IBM-Schreibmaschine) | 216 |

## So liest du dein Ergebnis

- **Bis 25 WPM:** Anfänger. Hier starten die meisten, die nie eine Technik gelernt haben. Der [Kurs](${course}) beginnt genau da.
- **26 bis 40 WPM:** Durchschnitt. Das Tempo der meisten Büroangestellten.
- **41 bis 60 WPM:** Gut. Schneller als die Hälfte aller Menschen.
- **61 bis 80 WPM:** Schnell. Top 25 Prozent, das Tempo geübter 10-Finger-Tipper.
- **81 bis 100 WPM:** Sehr schnell. Top 10 Prozent.
- **Über 100 WPM:** Elite. Top 5 Prozent, das Niveau professioneller Schreibkräfte.

Achte auf die Genauigkeit: Unter 95 Prozent lohnt es sich, langsamer und sauberer zu tippen. In der Aalto-Studie machen schnelle Tipper weniger Fehler als langsame, nicht mehr. Tempo kommt aus sicheren Bewegungen, nicht aus Hektik.

## Und dann?

Wenn du wissen willst, welche Tasten dich bremsen, mach die [Einstufung](${placement}): Sie misst pro Taste und baut deinen Trainingsplan. Wer sein Ergebnis belegen will, bekommt es als [Tippzertifikat](${cert}) mit WPM, Genauigkeit und Datum. Wie du im nächsten Tipptest besser abschneidest und was im Schreibtest für die Bewerbung zählt, steht im [Tipptest-Ratgeber](article:tipptest). Was ein guter Wert ist, nach Alter und Beruf, zeigt die [durchschnittliche Tippgeschwindigkeit im Vergleich](article:durchschnittliche-tippgeschwindigkeit). Lieber mit echten Arbeitstexten statt Zufallswörtern testen? Die [Übungstexte](page:practiceTexts) lassen sich mit einem Klick hier laden.

## Quellen

- [Observations on Typing from 136 Million Keystrokes](${DH}) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, Schnellste über 120 WPM, schnelle Tipper machen weniger Fehler.
- [Words per minute](${WPM_EN}) (Wikipedia, englisch) - Definition 5 Zeichen = 1 Wort, Zwei-Finger-Tipper 27 bzw. 37 WPM, Schreibkräfte 43 bis 80 WPM; die deutsche Einheit erklärt [Anschläge pro Minute](${WPM_DE}).
- [Typing](${TYP_EN}) (Wikipedia, englisch) - Rekord von 216 WPM, Stella Pajunas-Garnand, 1946.`;

  const en = `## What the test measures

The test measures two things: your typing speed in words per minute (WPM) and your accuracy in percent. A word counts as 5 characters including spaces and punctuation, the convention every standard typing measurement uses. You type real sentences, not random words, for 1, 2 or 5 minutes. Wrong keystrokes are blocked until you hit the right key, so the result shows how fast you type without errors.

## What is a good typing speed?

Short answer: 40 WPM is average, 60 and up is fast, 80 and up is professional level. The largest typing study ever run (Aalto University and University of Cambridge, 168,000 participants) measured an average of 52 WPM, with the fastest participants above 120. Two-finger typists copy text at about 27 WPM.

| Who | Words per minute |
|---|---|
| Two-finger typist, copying text | about 27 |
| Two-finger typist, from memory | about 37 |
| Average in the Aalto study (168,000 participants) | 52 |
| Trained touch typist | 40 to 60 |
| Professional typists | 43 to 80, some positions require 80 to 95 |
| Fastest participants in the Aalto study | over 120 |
| World record 1946 (Stella Pajunas-Garnand, IBM electric typewriter) | 216 |

## How to read your result

- **Up to 25 WPM:** Beginner. Where most people start who never learned a technique. The [course](${course}) starts exactly there.
- **26 to 40 WPM:** Average. The pace of most office workers.
- **41 to 60 WPM:** Good. Faster than half of all people.
- **61 to 80 WPM:** Fast. Top 25 percent, the pace of a trained touch typist.
- **81 to 100 WPM:** Very fast. Top 10 percent.
- **Over 100 WPM:** Elite. Top 5 percent, professional typist territory.

Watch your accuracy: below 95 percent, slowing down and typing cleanly pays off. In the Aalto study, fast typists make fewer errors than slow ones, not more. Speed comes from confident movements, not from rushing.

## What next?

If you want to know which keys are holding you back, take the [placement test](${placement}): it measures every key and builds your training plan. If you want proof of your result, get it as a [typing certificate](${cert}) with WPM, accuracy and date. How to score higher next time, and what counts in a typing test for a job, is in the [typing test guide](article:typing-test). What counts as a good score, by age and profession, is in the [average typing speed benchmarks](article:average-typing-speed). Prefer real work texts over random words? The [practice paragraphs](page:practiceTexts) load into this test with one click.

## Sources

- [Observations on Typing from 136 Million Keystrokes](${DH}) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, fastest above 120 WPM, fast typists make fewer errors.
- [Words per minute](${WPM_EN}) (Wikipedia) - the 5 characters = 1 word convention, two-finger typists at 27 and 37 WPM, professional typists 43 to 80 WPM.
- [Typing](${TYP_EN}) (Wikipedia) - the 216 WPM record, Stella Pajunas-Garnand, 1946.`;

  const fr = `## Ce que mesure le test

Le test de dactylographie mesure deux choses : ta vitesse de frappe en mots par minute (MPM) et ta précision en pourcentage. Un mot compte pour 5 caractères, espaces et ponctuation compris, la convention utilisée par toutes les mesures standard. Tu tapes de vraies phrases, pas des mots au hasard, pendant 1, 2 ou 5 minutes. Les erreurs bloquent la saisie jusqu'à la bonne touche : le résultat montre donc à quelle vitesse tu tapes sans faute.

## Quelle est une bonne vitesse de frappe ?

En bref : 40 MPM, c'est la moyenne ; à partir de 60, tu es rapide ; à partir de 80, tu es au niveau des pros. La plus grande étude jamais menée sur la frappe (Aalto University et University of Cambridge, 168 000 participants) mesure une moyenne de 52 MPM, les plus rapides dépassent 120. Qui tape à deux doigts recopie un texte à environ 27 MPM.

| Qui | Mots par minute |
|---|---|
| Frappe à deux doigts, texte recopié | env. 27 |
| Frappe à deux doigts, de mémoire | env. 37 |
| Moyenne de l'étude d'Aalto (168 000 participants) | 52 |
| Dactylo à dix doigts entraîné | 40 à 60 |
| Dactylos professionnels | 43 à 80, certains postes exigent 80 à 95 |
| Participants les plus rapides de l'étude d'Aalto | plus de 120 |
| Record du monde 1946 (Stella Pajunas-Garnand, machine à écrire électrique IBM) | 216 |

## Comment lire ton résultat

- **Jusqu'à 25 MPM :** débutant. C'est là que commencent la plupart des gens qui n'ont jamais appris de technique. Le [cours](${course}) démarre exactement là.
- **26 à 40 MPM :** moyen. Le rythme de la plupart des employés de bureau.
- **41 à 60 MPM :** bon. Plus rapide que la moitié des gens.
- **61 à 80 MPM :** rapide. Top 25 %, le rythme d'un dactylo à dix doigts entraîné.
- **81 à 100 MPM :** très rapide. Top 10 %.
- **Plus de 100 MPM :** élite. Top 5 %, le niveau des dactylos professionnels.

Surveille ta précision : en dessous de 95 %, ralentir et taper proprement rapporte plus. Dans l'étude d'Aalto, les typistes rapides font moins d'erreurs que les lents, pas plus. La vitesse vient de gestes sûrs, pas de la précipitation.

## Et ensuite ?

Pour savoir quelles touches te freinent, passe l'[évaluation](${placement}) : elle mesure chaque touche et construit ton plan d'entraînement. Pour prouver ton résultat, obtiens-le sous forme de [certificat de dactylographie](${cert}) avec MPM, précision et date. Pour faire mieux au prochain essai et savoir ce qui compte dans un test de frappe pour un emploi, lis le [guide du test de frappe](article:test-de-frappe). Ce qu'est un bon score, par âge et par métier : la [vitesse de frappe moyenne en repères](article:vitesse-de-frappe-moyenne). Tu préfères de vrais textes de travail aux mots aléatoires ? Les [textes d'exercice](page:practiceTexts) se chargent ici en un clic.

## Sources

- [Observations on Typing from 136 Million Keystrokes](${DH}) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, les plus rapides au-delà de 120 MPM, les typistes rapides font moins d'erreurs.
- [Words per minute](${WPM_EN}) (Wikipedia, en anglais) - la convention 5 caractères = 1 mot, frappe à deux doigts à 27 et 37 MPM, dactylos professionnels de 43 à 80 MPM.
- [Typing](${TYP_EN}) (Wikipedia, en anglais) - le record de 216 MPM, Stella Pajunas-Garnand, 1946.`;

  return { de, en, fr }[locale];
}

export function placementExplainer(locale: Locale): string {
  const course = localizedPath(locale, "lessons");
  const speed = localizedPath(locale, "speedTest");
  const de = `## Wie die Einstufung funktioniert

Die Einstufung besteht aus drei kurzen Runden, zusammen 2 bis 6 Minuten. Du tippst Sätze, die alle Buchstaben deines Tastaturlayouts abdecken. Für jede Taste messen wir Genauigkeit und Tempo. Daraus entsteht dein persönlicher Trainingsplan: Lektionen zu Tasten, die schon sitzen, bekommen einen Vorschlag zum Überspringen. Jede Lektion bleibt trotzdem offen, du entscheidest.

## Warum wir pro Taste messen, nicht nur WPM

Ein einzelner WPM-Wert sagt dir, wie schnell du bist. Er sagt dir nicht, woran es liegt. Die Aalto-Studie "How We Type" hat gemessen, was schnelle Tipper von langsamen unterscheidet: Jede Taste wird immer vom selben Finger getroffen, der nächste Anschlag wird vorbereitet, die Hände bewegen sich wenig. Genau das lässt sich nur pro Taste prüfen. Die Auswertung von 136 Millionen Tastenanschlägen zeigt außerdem: Langsame Tipper ersetzen vor allem einzelne Buchstaben durch falsche. Solche Tasten findet die Einstufung, und der Kurs trainiert sie gezielt.

## Was nach der Einstufung passiert

- Du siehst pro Taste, was sitzt und was Training braucht.
- Dein Plan startet bei der ersten Lektion, die dir wirklich etwas bringt.
- Dein Fortschritt wird im Browser gespeichert, ohne Konto und ohne Anmeldung.
- Nach dem [Kurs](${course}) misst du deine [Tippgeschwindigkeit](${speed}) erneut und siehst den Unterschied in Zahlen.

Wie der ganze Weg aussieht, von der Grundreihe bis zum vollen Tempo, beschreibt der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen).

## Quellen

- [How We Type: Movement Strategies and Performance in Everyday Typing](${FE}) - Aalto University, CHI 2016: feste Finger-Tasten-Zuordnung, Vorbereitung des nächsten Anschlags und wenig Handbewegung sagen die Geschwindigkeit voraus; Zusammenfassung auf [ScienceDaily](${SD}).
- [Observations on Typing from 136 Million Keystrokes](${DH}) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Fehlerarten und Zusammenhang zwischen Fingerzahl und Tempo.`;

  const en = `## How the placement test works

The placement test is three short rounds, 2 to 6 minutes in total. You type sentences that cover every letter of your keyboard layout. For each key we measure accuracy and speed. That becomes your personal training plan: lessons for keys you already master get a suggestion to skip. Every lesson stays open, the decision is yours.

## Why we measure per key, not just WPM

A single WPM number tells you how fast you are. It doesn't tell you why. The Aalto study "How We Type" measured what separates fast typists from slow ones: every key is hit by the same finger every time, the next keystroke is prepared in advance, the hands barely move. That can only be checked key by key. The analysis of 136 million keystrokes adds one more finding: slow typists mostly replace single letters with the wrong ones. The placement test finds exactly those keys, and the course trains them.

## What happens after the placement test

- You see, key by key, what is solid and what needs work.
- Your plan starts at the first lesson that actually moves you forward.
- Your progress is saved in your browser, no account and no signup.
- After the [course](${course}), take the [typing speed test](${speed}) again and see the difference in numbers.

The whole path, from home row to full speed, is laid out in the [complete touch typing guide](article:learn-touch-typing).

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](${FE}) - Aalto University, CHI 2016: consistent finger-to-key mapping, preparing the next keystroke and little hand movement predict speed; summary on [ScienceDaily](${SD}).
- [Observations on Typing from 136 Million Keystrokes](${DH}) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, error types and the link between finger count and speed.`;

  const fr = `## Comment fonctionne l'évaluation

L'évaluation, ce sont trois manches courtes, 2 à 6 minutes en tout. Tu tapes des phrases qui couvrent toutes les lettres de ton clavier. Pour chaque touche, on mesure la précision et la vitesse. Il en sort ton plan d'entraînement personnel : les leçons sur les touches déjà acquises reçoivent une proposition de saut. Chaque leçon reste ouverte, c'est toi qui décides.

## Pourquoi mesurer touche par touche, et pas seulement les MPM

Un chiffre de MPM te dit à quelle vitesse tu tapes. Il ne te dit pas pourquoi. L'étude d'Aalto "How We Type" a mesuré ce qui sépare les typistes rapides des lents : chaque touche est toujours frappée par le même doigt, la frappe suivante est préparée à l'avance, les mains bougent peu. Ça ne se vérifie que touche par touche. L'analyse de 136 millions de frappes ajoute un point : les typistes lents remplacent surtout des lettres par les mauvaises. L'évaluation trouve précisément ces touches, et le cours les travaille.

## Ce qui se passe après l'évaluation

- Tu vois, touche par touche, ce qui est en place et ce qui reste à travailler.
- Ton plan démarre à la première leçon qui t'apporte vraiment quelque chose.
- Ta progression est enregistrée dans ton navigateur, sans compte ni inscription.
- Après le [cours](${course}), refais le [test de dactylographie](${speed}) et mesure la différence en chiffres.

Tout le parcours, de la rangée de base à la pleine vitesse, est détaillé dans le [guide complet de la dactylographie](article:apprendre-dactylographie).

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](${FE}) - Aalto University, CHI 2016 : une attribution fixe doigt-touche, la préparation de la frappe suivante et peu de mouvement des mains prédisent la vitesse ; résumé sur [ScienceDaily](${SD}).
- [Observations on Typing from 136 Million Keystrokes](${DH}) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, types d'erreurs et lien entre nombre de doigts et vitesse.`;

  return { de, en, fr }[locale];
}

export function keyboardLayoutsExplainer(locale: Locale): string {
  const course = localizedPath(locale, "lessons");
  const de = `## Die drei Layouts in 30 Sekunden

| Layout | Wo | Was anders ist |
|---|---|---|
| QWERTY | USA, Großbritannien, die meiste Welt | Ausgangslayout, Standard beim Programmieren |
| AZERTY | Frankreich, Belgien | A und Q sowie Z und W vertauscht, M neben L, eigene Tasten für Akzente |
| QWERTZ | Deutschland, Österreich, Schweiz | Y und Z vertauscht, eigene Tasten für Ä, Ö, Ü und ß |

Der Name ist jeweils die Folge der ersten sechs Tasten oben links.

## Woher die Unterschiede kommen

QWERTY entwarf Christopher Latham Sholes 1873 für die Schreibmaschinen von Remington. Häufige Buchstabenpaare lagen weit auseinander, damit sich die Typenhebel nicht verhakten. Die Mechanik ist seit über 100 Jahren Geschichte, das Layout blieb.

AZERTY entstand Anfang des 20. Jahrhunderts als französische Anpassung. Offiziell normiert wurde es erst 2019 mit der Norm NF Z71-300, unter anderem, damit sich Großbuchstaben mit Akzent endlich sauber tippen lassen.

QWERTZ tauscht Y und Z, weil das Z im Deutschen deutlich häufiger vorkommt als das Y. Umlaute und ß bekamen eigene Tasten.

## Welches Layout solltest du lernen?

Das deines Landes. Es ist das Layout auf jeder Tastatur, die dir im Büro, im Hotel oder beim Kollegen begegnet. Auf das Tempo hat das Layout kaum Einfluss: Die Aalto-Studie "How We Type" fand als stärkste Prädiktoren die feste Zuordnung von Finger zu Taste, die Vorbereitung des nächsten Anschlags und wenig Handbewegung. Alles drei lernst du im [Kurs](${course}) auf QWERTZ, QWERTY oder AZERTY. Alternativen wie Dvorak oder Colemak ordnen die häufigsten Buchstaben auf die Grundreihe, werden aber nur von wenigen genutzt. Was das Layout-unabhängige System ausmacht, erklärt [Was ist das 10-Finger-System?](article:was-ist-das-10-finger-system)

## Quellen

- [QWERTY](${WQ}) (Wikipedia, englisch) - Entstehung 1873, Christopher Latham Sholes, Remington.
- [AZERTY](${WA}) (Wikipedia, französisch) - Einführung in Frankreich und Norm NF Z71-300 von 2019.
- [QWERTZ-Tastaturbelegung](${WZ}) (Wikipedia) - Y/Z-Tausch und Umlaut-Tasten.
- [How We Type](${FE}) - Aalto University, CHI 2016: was die Tippgeschwindigkeit wirklich vorhersagt.`;

  const en = `## The three layouts in 30 seconds

| Layout | Where | What's different |
|---|---|---|
| QWERTY | USA, UK, most of the world | The original, the default for programming |
| AZERTY | France, Belgium | A and Q swapped with Z and W, M next to L, dedicated accent keys |
| QWERTZ | Germany, Austria, Switzerland | Y and Z swapped, dedicated keys for Ä, Ö, Ü and ß |

Each name is simply the first six keys in the top left.

## Where the differences come from

Christopher Latham Sholes designed QWERTY in 1873 for Remington's typewriters. Frequent letter pairs were placed far apart so the type bars wouldn't jam. The mechanics have been gone for over 100 years, the layout stayed.

AZERTY emerged in the early 20th century as the French adaptation. It only became an official standard in 2019, with norm NF Z71-300, partly so that accented capitals could finally be typed properly.

QWERTZ swaps Y and Z because Z is far more common in German than Y. Umlauts and ß got their own keys.

## Which layout should you learn?

The one used in your country. It's the layout on every keyboard you'll meet at the office, in a hotel or at a colleague's desk. The layout barely affects your speed: the Aalto study "How We Type" found the strongest predictors to be a consistent finger-to-key mapping, preparing the next keystroke and little hand movement. You learn all three in the [course](${course}) on QWERTY, QWERTZ or AZERTY. Alternatives like Dvorak or Colemak put the most frequent letters on the home row, but very few people use them. What the layout-independent technique is all about: [What Is Touch Typing?](article:what-is-touch-typing)

## Sources

- [QWERTY](${WQ}) (Wikipedia) - origin in 1873, Christopher Latham Sholes, Remington.
- [AZERTY](${WA}) (Wikipedia, French) - adoption in France and the 2019 norm NF Z71-300.
- [QWERTZ-Tastaturbelegung](${WZ}) (Wikipedia, German) - the Y/Z swap and umlaut keys.
- [How We Type](${FE}) - Aalto University, CHI 2016: what actually predicts typing speed.`;

  const fr = `## Le QWERTY, l'AZERTY et le QWERTZ en 30 secondes

Le QWERTY est la disposition d'origine, utilisée aux États-Unis, au Royaume-Uni et dans la majeure partie du monde. L'AZERTY est son adaptation française, le QWERTZ son adaptation allemande. Le nom, c'est simplement la suite des six premières touches en haut à gauche.

| Disposition | Où | Ce qui change |
|---|---|---|
| QWERTY | États-Unis, Royaume-Uni, la plupart des pays | La disposition d'origine, la référence en programmation |
| AZERTY | France, Belgique | A et Q, Z et W échangés, M à côté du L, touches dédiées aux accents |
| QWERTZ | Allemagne, Autriche, Suisse | Y et Z échangés, touches dédiées à Ä, Ö, Ü et ß |

## D'où viennent les différences

Christopher Latham Sholes a conçu le QWERTY en 1873 pour les machines à écrire Remington. Les paires de lettres fréquentes étaient éloignées pour que les tiges ne se coincent pas. La mécanique a disparu depuis plus de 100 ans, la disposition est restée.

L'AZERTY est apparu au début du XXe siècle comme adaptation française. Il n'a été normalisé qu'en 2019, avec la norme NF Z71-300, notamment pour que les majuscules accentuées se tapent enfin correctement.

Le QWERTZ échange le Y et le Z parce que le Z est bien plus fréquent en allemand que le Y. Les umlauts et le ß ont reçu leurs propres touches.

## Quelle disposition apprendre ?

Celle de ton pays. C'est celle que tu trouveras sur chaque clavier au bureau, à l'hôtel ou chez un collègue. La disposition n'a presque aucun effet sur la vitesse : l'étude d'Aalto "How We Type" a identifié comme meilleurs prédicteurs une attribution fixe doigt-touche, la préparation de la frappe suivante et peu de mouvement des mains. Tu apprends les trois dans le [cours](${course}), en AZERTY, QWERTY ou QWERTZ. Des alternatives comme Dvorak ou Colemak placent les lettres les plus fréquentes sur la rangée de base, mais très peu de gens les utilisent. L'histoire complète des trois dispositions est dans [QWERTY, AZERTY, QWERTZ : pourquoi ton clavier est différent](article:qwerty-azerty-qwertz).

## Sources

- [QWERTY](${WQ}) (Wikipedia, en anglais) - origine en 1873, Christopher Latham Sholes, Remington.
- [AZERTY](${WA}) (Wikipédia) - adoption en France et norme NF Z71-300 de 2019.
- [QWERTZ-Tastaturbelegung](${WZ}) (Wikipedia, en allemand) - l'échange Y/Z et les touches umlaut.
- [How We Type](${FE}) - Aalto University, CHI 2016 : ce qui prédit vraiment la vitesse de frappe.`;

  return { de, en, fr }[locale];
}

// Practice-texts page (typing practice paragraphs). Explains why real
// prose beats drills, how to practice with the texts, and links into the
// product and the guides.
export function practiceTextsExplainer(locale: Locale, count: number): string {
  if (locale === "de") {
    return `## Warum echte Texte statt Buchstabensalat

Tipptrainer fangen mit "asdf jklö" an, und für die ersten Tage ist das richtig: Die Finger lernen ihre Plätze. Danach bringt es wenig, weil beim echten Schreiben nicht einzelne Tasten zählen, sondern der Fluss von Wort zu Wort. Die Aalto-Studie "How We Type" hat gemessen, was schnelle Tipper auszeichnet: Sie bereiten den nächsten Anschlag vor, während der aktuelle noch läuft. Das lernt man nur an Wörtern und Sätzen, in denen die nächste Taste vorhersehbar ist. Die ${count} Übungstexte hier sind deshalb echte Arbeitstexte: E-Mails, Protokolle, Kundenantworten, Projekt-Updates, KI-Prompts. Was du im Job tippst, übst du hier.

## So übst du mit den Texten

1. **Schwierigkeit wählen.** Leicht heißt nur Buchstaben und Punkt, Mittel bringt Zahlen und Doppelpunkte, Schwer Klammern, Sonderzeichen und Groß-Klein-Wechsel. Fang eine Stufe unter dem an, was du dir zutraust.
2. **Genauigkeit vor Tempo.** Tippe einen Text so, dass du unter 3 Fehlern bleibst, auch wenn es langsam ist. Erst dann den nächsten. Tempo kommt von allein, Fehler werden zur Gewohnheit.
3. **Kurz und täglich.** Ein Text pro Tag, 10 bis 15 Minuten. Das ist mehr wert als eine Stunde am Sonntag, weil die Bewegungen zwischen den Einheiten gefestigt werden.
4. **Messen.** Mit "Jetzt üben" lädst du den Text in den [Test der Tippgeschwindigkeit](page:speedTest) und bekommst WPM und Genauigkeit. Trag den Wert in den [Fortschritts-Tracker](article:fortschritts-tracker-4-wochen) ein. Eigenen Text mitgebracht? Der [Zeichenzähler](page:wordCounter) sagt dir vorher, wie lange das Tippen dauert.

## Was ein guter Wert bei diesen Texten ist

Die Texte enthalten Zahlen, Satzzeichen und Sonderzeichen, deshalb liegen die Werte hier unter denen eines reinen Wörtertests. 30 WPM bei einem schweren Text mit weniger als 3 Fehlern ist ein gutes Zwischenziel; 50 WPM heißt, dass Zahlenreihe und Shift-Griffe sitzen. Welche Werte im Beruf erwartet werden, steht bei der [durchschnittlichen Tippgeschwindigkeit nach Alter und Beruf](article:durchschnittliche-tippgeschwindigkeit).

## Wenn die Texte noch zu schwer sind

Dann fehlt die Grundlage, nicht die Übung. Die [Einstufung](page:placement) zeigt, welche Tasten sitzen und wo du im [10-Finger-System-Kurs](page:lessons) einsteigst. Die Sonderzeichen, die in den schweren Texten vorkommen, stehen mit Taste und Finger auf der [Sonderzeichen-Karte](article:sonderzeichen-karte-qwertz).

## Häufige Fragen

### Darf ich die Texte in ein anderes Programm kopieren?

Ja, dafür ist der Button "Text kopieren" da. Die Texte sind für Übungszwecke frei verwendbar.

### Warum haben die Texte Umlaute und Sonderzeichen?

Weil deutsche Texte sie haben. Wer ö, ä, ü, ß und das €-Zeichen nie übt, sucht sie im Job jedes Mal. Die schweren Texte sind genau dafür da.

### Kommen neue Texte dazu?

Ja, die Sammlung wächst. Wenn dir ein Texttyp fehlt, schreib uns über die [Kontaktseite](page:contact).

## Quellen

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: die Vorbereitung des nächsten Anschlags und wenig Handbewegung sagen die Geschwindigkeit voraus.
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: verteiltes Üben schlägt geballtes Üben.`;
  }
  if (locale === "fr") {
    return `## Pourquoi de vrais textes plutôt que des suites de lettres

Les logiciels de dactylographie commencent par « qsdf jklm », et pour les premiers jours c'est juste : les doigts apprennent leur place. Ensuite, ça n'apporte plus grand-chose, parce qu'en écrivant vraiment, ce ne sont pas les touches isolées qui comptent mais le flux d'un mot à l'autre. L'étude « How We Type » de l'université Aalto a mesuré ce qui distingue les typistes rapides : ils préparent la frappe suivante pendant que la frappe en cours se termine. On n'apprend ça qu'avec des mots et des phrases où la touche suivante est prévisible. Les ${count} textes ici sont donc de vrais textes de travail : e-mails, comptes rendus, réponses client, points projet, prompts IA. Ce que tu tapes au travail, tu l'entraînes ici.

## Comment t'entraîner avec ces textes

1. **Choisis la difficulté.** Facile : lettres et points seulement ; moyen : chiffres et deux-points ; difficile : parenthèses, caractères spéciaux, majuscules. Commence un niveau en dessous de ce que tu penses maîtriser.
2. **La précision avant la vitesse.** Tape un texte en restant sous 3 erreurs, même lentement. Seulement ensuite, passe au suivant. La vitesse vient seule, les erreurs deviennent des habitudes.
3. **Court et quotidien.** Un texte par jour, 10 à 15 minutes. Ça vaut plus qu'une heure le dimanche, parce que les mouvements se consolident entre les séances.
4. **Mesure.** Avec « S'entraîner », tu charges le texte dans le [test de vitesse de frappe](page:speedTest) et tu obtiens MPM et précision. Note la valeur dans le [suivi de progression](article:suivi-progression-4-semaines). Tu as ton propre texte ? Le [compteur de mots](page:wordCounter) te dit d'avance combien de temps il faut pour le taper.

## Ce qu'est un bon score sur ces textes

Les textes contiennent des chiffres, de la ponctuation et des caractères spéciaux, donc les scores ici sont inférieurs à ceux d'un test de mots simples. 30 MPM sur un texte difficile avec moins de 3 erreurs est un bon objectif intermédiaire ; 50 MPM signifie que la rangée des chiffres et les combinaisons avec Maj sont acquises. Les valeurs attendues au travail sont dans l'article sur la [vitesse de frappe moyenne par âge et par métier](article:vitesse-de-frappe-moyenne).

## Si les textes sont encore trop difficiles

Alors c'est la base qui manque, pas l'entraînement. L'[évaluation](page:placement) montre quelles touches sont acquises et où commencer dans le [cours de dactylographie](page:lessons). Les caractères spéciaux des textes difficiles sont sur la [fiche des caractères spéciaux](article:caracteres-speciaux-azerty), avec la touche et le doigt.

## Questions fréquentes

### Puis-je copier les textes dans un autre programme ?

Oui, c'est à ça que sert le bouton « Copier le texte ». Les textes sont libres d'utilisation pour l'entraînement.

### Pourquoi les textes contiennent-ils des accents et des caractères spéciaux ?

Parce que les textes français en contiennent. Qui n'entraîne jamais é, è, ç, le « et le symbole € les cherche au travail à chaque fois. Les textes difficiles sont faits pour ça.

### Y aura-t-il de nouveaux textes ?

Oui, la collection s'agrandit. S'il te manque un type de texte, écris-nous via la [page de contact](page:contact).

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : la préparation de la frappe suivante et peu de mouvement des mains prédisent la vitesse.
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006 : la pratique espacée bat la pratique massée.`;
  }
  return `## Why real texts instead of letter drills

Typing programs start with "asdf jkl;", and for the first few days that is right: the fingers learn their places. After that it adds little, because in real writing single keys don't matter, the flow from word to word does. The Aalto University study "How We Type" measured what sets fast typists apart: they prepare the next keystroke while the current one is still landing. You only learn that on words and sentences where the next key is predictable. The ${count} practice paragraphs here are therefore real work texts: emails, meeting notes, customer replies, project updates, AI prompts. What you type at work is what you practice here.

## How to practice with the texts

1. **Pick the difficulty.** Easy means letters and full stops only, medium adds numbers and colons, hard adds brackets, symbols and case changes. Start one level below what you think you can do.
2. **Accuracy before speed.** Type a text staying under 3 errors, even if it is slow. Only then move to the next one. Speed comes on its own, errors become habits.
3. **Short and daily.** One text a day, 10 to 15 minutes. That beats an hour on Sunday, because the movements consolidate between sessions.
4. **Measure.** "Practice now" loads the text into the [typing speed test](page:speedTest) and gives you WPM and accuracy. Write the value into the [progress tracker](article:progress-tracker-4-weeks). Brought your own text? The [word counter](page:wordCounter) tells you beforehand how long typing it takes.

## What a good score is on these texts

The texts contain numbers, punctuation and symbols, so scores here sit below those of a plain-words test. 30 WPM on a hard text with fewer than 3 errors is a good intermediate goal; 50 WPM means the number row and the Shift combinations have sunk in. What employers expect is in the article on [average typing speed by age and profession](article:average-typing-speed).

## If the texts are still too hard

Then the foundation is missing, not the practice. The [placement test](page:placement) shows which keys you already have and where to start in the [touch typing course](page:lessons). The symbols that appear in the hard texts are on the [special characters sheet](article:special-characters-qwerty), with key and finger.

## Frequently asked questions

### Can I copy the texts into another program?

Yes, that is what the "Copy text" button is for. The texts are free to use for practice.

### Why do the texts contain symbols and numbers?

Because real work texts do. Anyone who never practices @, %, brackets and the dollar sign hunts for them at work every time. The hard texts exist for exactly that.

### Will there be new texts?

Yes, the collection grows. If a type of text is missing for you, tell us through the [contact page](page:contact).

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: preparing the next keystroke and little hand movement predict typing speed.
- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: spaced practice beats massed practice.`;
}

// Word/character counter page. Explains the counting rules (so numbers
// that differ from Word or Google Docs are explainable), the common
// limits, and bridges to the typing product via typing time.
export function wordCounterExplainer(locale: Locale): string {
  if (locale === "de") {
    return `## So zählt der Zeichenzähler

**Wörter:** Jede Folge von Zeichen zwischen zwei Leerzeichen oder Zeilenumbrüchen zählt als ein Wort. "E-Mail" ist ein Wort, "10 Uhr" sind zwei, eine Zahl wie "2026" ebenfalls eins. Das entspricht der Zählweise von Word und Google Docs.

**Zeichen:** Gezählt wird jedes Zeichen inklusive Satzzeichen und Umlaute. "Zeichen ohne Leerzeichen" lässt Leerzeichen, Tabulatoren und Zeilenumbrüche weg. Für Zeichenlimits in sozialen Netzwerken und bei Google gilt immer die Zahl mit Leerzeichen.

**Sätze:** Ein Satz endet mit Punkt, Fragezeichen, Ausrufezeichen oder einem Zeilenumbruch. Abkürzungen wie "z. B." werden als Satzende gezählt, deshalb kann der Wert bei Texten mit vielen Abkürzungen etwas zu hoch liegen.

**Absätze:** Durch eine Leerzeile getrennte Blöcke.

**Lesezeit** rechnet mit 200 Wörtern pro Minute, dem üblichen Wert für stilles Lesen von Sachtexten. **Sprechzeit** mit 130 Wörtern pro Minute, dem Tempo einer Präsentation. **Tippzeit** mit 40 Wörtern pro Minute, der [durchschnittlichen Tippgeschwindigkeit](article:durchschnittliche-tippgeschwindigkeit) von Erwachsenen.

## Die wichtigsten Zeichenlimits

| Wo | Limit | Bemerkung |
|---|---|---|
| Google-Titel (Title-Tag) | etwa 60 Zeichen | Länger wird in den Suchergebnissen abgeschnitten |
| Meta-Description | etwa 160 Zeichen | Google zeigt oft 120 bis 160 |
| SMS | 160 Zeichen | mit Umlauten nur 70, danach wird geteilt |
| X (Twitter) | 280 Zeichen | Links zählen als 23 Zeichen |
| Instagram-Bildtext | 2.200 Zeichen | in der Vorschau nur die ersten 125 |
| LinkedIn-Beitrag | 3.000 Zeichen | "Mehr anzeigen" nach etwa 210 |
| Bewerbung, Motivationsschreiben | eine Seite, etwa 2.500 bis 3.500 Zeichen | je nach Vorgabe |

## Warum die Tippzeit dabeisteht

Wer 500 Wörter zählt, tippt sie auch irgendwann. Bei 40 Wörtern pro Minute sind das 12 bis 13 Minuten, bei 60 WPM acht, mit zwei Fingern bei 27 WPM fast zwanzig. Für jede E-Mail, jedes Protokoll und jeden Bericht. Der Zähler zeigt die Zeit beim Durchschnitt; wie es bei dir aussieht, sagt der [Test der Tippgeschwindigkeit](page:speedTest) in einer Minute. Und wer den eigenen Text gleich als Übung nutzen will: Die [Übungstexte](page:practiceTexts) zeigen, wie echte Arbeitstexte als Training funktionieren, der Weg zu 60 WPM steht im [10-Finger-System-Kurs](page:lessons).

## Häufige Fragen

### Wird mein Text gespeichert?

Nein. Die Zählung läuft komplett in deinem Browser. Der Text wird weder gesendet noch gespeichert; nach dem Schließen der Seite ist er weg.

### Warum weicht die Wortzahl von Word ab?

Meist wegen Bindestrichen, Schrägstrichen und Zahlen: Word zählt "und/oder" als ein Wort, manche Tools als zwei. Unterschiede von ein bis zwei Prozent sind normal. Für Limits zählt das Werkzeug, das die Vorgabe macht.

### Zählen Leerzeichen bei Zeichenlimits mit?

Ja. Google, X, LinkedIn und SMS zählen Leerzeichen mit. "Zeichen ohne Leerzeichen" ist nur für Übersetzungs- und Textpreise üblich, die pro Normseite oder pro 1.000 Zeichen ohne Leerzeichen abrechnen.

### Wie viele Zeichen sind 1.000 Wörter?

Im Deutschen etwa 6.500 bis 7.500 Zeichen mit Leerzeichen, weil deutsche Wörter im Schnitt länger sind als englische (dort etwa 5.500 bis 6.000).

## Quellen

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Lesegeschwindigkeit etwa 200 bis 250 Wörter pro Minute, Sprechtempo etwa 130 bis 150, Zwei-Finger-Tipper 27 WPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: Durchschnitt 51,6 WPM bei 168.000 Teilnehmern.`;
  }
  if (locale === "fr") {
    return `## Comment compte le compteur

**Mots :** toute suite de caractères entre deux espaces ou sauts de ligne compte pour un mot. « e-mail » est un mot, « 10 heures » en fait deux, un nombre comme « 2026 » un aussi. C'est la méthode de Word et de Google Docs.

**Caractères :** chaque caractère est compté, ponctuation et accents compris. « Caractères sans espaces » retire les espaces, tabulations et sauts de ligne. Pour les limites des réseaux sociaux et de Google, c'est toujours le nombre avec espaces qui compte.

**Phrases :** une phrase se termine par un point, un point d'interrogation, un point d'exclamation ou un saut de ligne. Les abréviations comme « p. ex. » sont comptées comme fin de phrase, le chiffre peut donc être un peu élevé pour des textes riches en abréviations.

**Paragraphes :** blocs séparés par une ligne vide.

**Temps de lecture** : 200 mots par minute, la valeur habituelle pour la lecture silencieuse. **Temps de parole** : 130 mots par minute, le rythme d'une présentation. **Temps de frappe** : 40 mots par minute, la [vitesse de frappe moyenne](article:vitesse-de-frappe-moyenne) des adultes.

## Les limites de caractères à connaître

| Où | Limite | Remarque |
|---|---|---|
| Titre Google (balise title) | environ 60 caractères | au-delà, coupé dans les résultats |
| Meta description | environ 160 caractères | Google affiche souvent 120 à 160 |
| SMS | 160 caractères | 70 seulement avec des accents, puis le message est découpé |
| X (Twitter) | 280 caractères | un lien compte 23 caractères |
| Légende Instagram | 2 200 caractères | seuls les 125 premiers en aperçu |
| Post LinkedIn | 3 000 caractères | « voir plus » après environ 210 |
| Lettre de motivation | une page, environ 2 500 à 3 500 caractères | selon la consigne |

## Pourquoi le temps de frappe est affiché

Qui compte 500 mots finira par les taper. À 40 mots par minute, ça fait 12 à 13 minutes ; à 60 MPM, huit ; à deux doigts, à 27 MPM, près de vingt. Pour chaque e-mail, compte rendu et rapport. Le compteur affiche le temps à la moyenne ; pour connaître le tien, le [test de vitesse de frappe](page:speedTest) prend une minute. Et pour utiliser ton propre texte comme exercice : les [textes d'exercice](page:practiceTexts) montrent comment de vrais textes de travail servent d'entraînement, et le chemin vers 60 MPM est dans le [cours de dactylographie](page:lessons).

## Questions fréquentes

### Mon texte est-il enregistré ?

Non. Le comptage se fait entièrement dans ton navigateur. Le texte n'est ni envoyé ni stocké ; il disparaît à la fermeture de la page.

### Pourquoi le nombre de mots diffère de Word ?

Le plus souvent à cause des traits d'union, des barres obliques et des nombres : Word compte « et/ou » comme un mot, d'autres outils comme deux. Un écart de un à deux pour cent est normal. Pour une limite, c'est l'outil qui fixe la consigne qui compte.

### Les espaces comptent-ils dans les limites ?

Oui. Google, X, LinkedIn et les SMS comptent les espaces. « Sans espaces » ne sert que pour les tarifs de traduction et de rédaction facturés aux 1 000 caractères.

### Combien de caractères font 1 000 mots ?

En français, environ 6 000 à 6 800 caractères espaces comprises ; en anglais, environ 5 500 à 6 000, les mots y étant plus courts.

## Sources

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - lecture environ 200 à 250 mots par minute, parole environ 130 à 150, typistes à deux doigts 27 MPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : moyenne 51,6 MPM sur 168 000 participants.`;
  }
  return `## How the counter counts

**Words:** every run of characters between two spaces or line breaks is one word. "E-mail" is one word, "10 am" is two, a number like "2026" is one. That matches how Word and Google Docs count.

**Characters:** every character is counted, punctuation included. "Characters without spaces" leaves out spaces, tabs and line breaks. For limits on social networks and Google, the number with spaces is always the one that counts.

**Sentences:** a sentence ends with a full stop, question mark, exclamation mark or a line break. Abbreviations like "e.g." count as a sentence end, so the number can run slightly high for texts with many abbreviations.

**Paragraphs:** blocks separated by an empty line.

**Reading time** uses 200 words per minute, the usual figure for silent reading of non-fiction. **Speaking time** uses 130 words per minute, the pace of a presentation. **Typing time** uses 40 words per minute, the [average typing speed](article:average-typing-speed) of adults.

## The character limits that matter

| Where | Limit | Note |
|---|---|---|
| Google title (title tag) | about 60 characters | longer gets cut off in the results |
| Meta description | about 160 characters | Google often shows 120 to 160 |
| SMS | 160 characters | only 70 with special characters, then it splits |
| X (Twitter) | 280 characters | a link counts as 23 characters |
| Instagram caption | 2,200 characters | only the first 125 show in the preview |
| LinkedIn post | 3,000 characters | "see more" after about 210 |
| Cover letter | one page, about 2,500 to 3,500 characters | depending on the brief |

## Why typing time is shown

Whoever counts 500 words will type them at some point. At 40 words per minute that is 12 to 13 minutes, at 60 WPM eight, with two fingers at 27 WPM almost twenty. For every email, every set of notes, every report. The counter shows the time at the average; to see yours, the [typing speed test](page:speedTest) takes one minute. And if you want to use your own text as practice: the [practice paragraphs](page:practiceTexts) show how real work texts work as training, and the way to 60 WPM is in the [touch typing course](page:lessons).

## Frequently asked questions

### Is my text stored?

No. Counting runs entirely in your browser. The text is neither sent nor saved; it is gone when you close the page.

### Why does the word count differ from Word?

Usually because of hyphens, slashes and numbers: Word counts "and/or" as one word, some tools as two. Differences of one or two percent are normal. For a limit, the tool that sets the rule is the one that counts.

### Do spaces count toward character limits?

Yes. Google, X, LinkedIn and SMS all count spaces. "Without spaces" is only common for translation and copywriting rates billed per 1,000 characters.

### How many characters are 1,000 words?

In English about 5,500 to 6,000 characters including spaces; in German about 6,500 to 7,500, because German words are longer on average.

## Sources

- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - reading about 200 to 250 words per minute, speaking about 130 to 150, two-finger typists 27 WPM.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: average 51.6 WPM across 168,000 participants.`;
}
