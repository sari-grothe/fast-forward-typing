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

Wenn du wissen willst, welche Tasten dich bremsen, mach die [Einstufung](${placement}): Sie misst pro Taste und baut deinen Trainingsplan. Wer sein Ergebnis belegen will, bekommt es als [Tippzertifikat](${cert}) mit WPM, Genauigkeit und Datum. Wie du im nächsten Tipptest besser abschneidest und was im Schreibtest für die Bewerbung zählt, steht im [Tipptest-Ratgeber](article:tipptest). Was ein guter Wert ist, nach Alter und Beruf, zeigt die [durchschnittliche Tippgeschwindigkeit im Vergleich](article:durchschnittliche-tippgeschwindigkeit).

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

If you want to know which keys are holding you back, take the [placement test](${placement}): it measures every key and builds your training plan. If you want proof of your result, get it as a [typing certificate](${cert}) with WPM, accuracy and date. How to score higher next time, and what counts in a typing test for a job, is in the [typing test guide](article:typing-test). What counts as a good score, by age and profession, is in the [average typing speed benchmarks](article:average-typing-speed).

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

Pour savoir quelles touches te freinent, passe l'[évaluation](${placement}) : elle mesure chaque touche et construit ton plan d'entraînement. Pour prouver ton résultat, obtiens-le sous forme de [certificat de dactylographie](${cert}) avec MPM, précision et date. Pour faire mieux au prochain essai et savoir ce qui compte dans un test de frappe pour un emploi, lis le [guide du test de frappe](article:test-de-frappe). Ce qu'est un bon score, par âge et par métier : la [vitesse de frappe moyenne en repères](article:vitesse-de-frappe-moyenne).

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
