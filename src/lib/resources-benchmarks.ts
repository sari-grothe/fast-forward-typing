import type { ResourceMeta } from "./resources";

// The WPM benchmark article (docs/seo-geo-roadmap.md 1.1), one edition
// per language. Data: Aalto/Cambridge keystroke study, Wikipedia WPM
// figures and aggregated typing-test platform statistics; every number
// is sourced in the article. Product tiers match src/lib (speed test
// result tiers).

const DATE = "2026-09-25";

export const benchmarkResources: ResourceMeta[] = [
  {
    slug: "durchschnittliche-tippgeschwindigkeit",
    locale: "de",
    type: "article",
    category: "learning",
    title: "Durchschnittliche Tippgeschwindigkeit: WPM nach Alter, Job",
    description: "Wie viele Wörter pro Minute sind normal? Durchschnitt, Perzentile, Werte nach Alter und Beruf, Anschläge pro Minute umgerechnet. Mit Quellen und Einordnung.",
    readingTime: 8,
    date: DATE,
    featured: false,
    content: `Die durchschnittliche Tippgeschwindigkeit von Erwachsenen liegt bei etwa 40 bis 45 Wörtern pro Minute (WPM), gemessen über Millionen von Online-Tipptests. In der größten wissenschaftlichen Studie dazu, mit 168.000 Teilnehmern, lag der Durchschnitt bei 51,6 WPM. Ein guter Wert für den Büroalltag beginnt bei 60 WPM, über 80 WPM gilt als schnell, und wer mit zwei Fingern tippt, bleibt meist bei 27 bis 37 WPM hängen. Hier stehen die Zahlen, die Umrechnung in Anschläge pro Minute, die Werte nach Alter und Beruf, und was sie für dich bedeuten.

## Was WPM bedeutet und wie es gemessen wird

WPM steht für "words per minute", Wörter pro Minute. Weil Wörter unterschiedlich lang sind, zählt ein Tipptest nicht echte Wörter, sondern Zeichen: **fünf Anschläge gelten als ein Wort**, Leerzeichen und Satzzeichen eingeschlossen. Wer in einer Minute 250 Zeichen tippt, hat 50 WPM.

Im deutschen Sprachraum ist die zweite Einheit "Anschläge pro Minute" verbreitet, etwa in Stellenanzeigen und bei Schreibprüfungen. Die Umrechnung ist einfach: **Anschläge pro Minute geteilt durch 5 = WPM.** 200 Anschläge sind 40 WPM, 300 Anschläge sind 60 WPM.

Die zweite Zahl in jedem Test ist die Genauigkeit, der Anteil fehlerfreier Anschläge. Seriöse Tests rechnen Fehler in die Geschwindigkeit ein: Wer 60 WPM mit 90 Prozent Genauigkeit tippt, ist netto langsamer als jemand mit 50 WPM und 99 Prozent, weil jede Korrektur Zeit kostet. Wie ein Test im Detail funktioniert, erklärt der [Ratgeber zum Tipptest](article:tipptest).

## Die Perzentile: Wo stehst du im Vergleich?

Die folgende Verteilung stammt aus der Auswertung von mehr als 10 Millionen Online-Tipptests der Jahre 2023 bis 2025. Das Perzentil sagt, wie viel Prozent der Tester langsamer waren als du.

| Perzentil | WPM | Anschläge/Min | Einordnung |
|---|---|---|---|
| 10. | 20 bis 25 | 100 bis 125 | Anfänger, meist zwei bis vier Finger |
| 25. | 30 bis 35 | 150 bis 175 | Unter dem Durchschnitt |
| 50. (Median) | 40 bis 44 | 200 bis 220 | Durchschnitt |
| 75. | 60 bis 65 | 300 bis 325 | Gut, Büroniveau |
| 90. | 80 bis 90 | 400 bis 450 | Schnell |
| 95. | 100 bis 110 | 500 bis 550 | Sehr schnell |
| 99. | 130 und mehr | 650 und mehr | Spitze |

Zwei Dinge fallen auf. Erstens sind die Abstände nicht gleichmäßig: Vom Median zum 75. Perzentil sind es 20 WPM, vom 90. zum 99. mehr als 50. Die oberen Ränge sind dünn besetzt. Zweitens liegt der Durchschnitt aus Online-Tests (40 bis 44 WPM) unter dem der Aalto-Studie (51,6 WPM). Der Grund: Die Studie hat Teilnehmer über einen längeren Test gemessen und Ausreißer bereinigt, während auf Testplattformen viele Menschen ein einziges Mal, unvorbereitet und auf dem Handy testen. Beide Zahlen sind richtig, sie beschreiben verschiedene Gruppen. Für den Vergleich mit Kolleginnen und Kollegen im Büro ist der Bereich 40 bis 50 WPM die realistische Mitte.

## Zwei Finger oder zehn: der größte einzelne Unterschied

Kein Faktor trennt die Verteilung so klar wie die Technik. Wer mit zwei bis vier Fingern tippt und dabei auf die Tastatur schaut, erreicht beim Abschreiben im Schnitt 27 WPM und beim Schreiben aus dem Kopf 37 WPM. Die Obergrenze liegt bei 40 bis 50 WPM, weil jede Taste erst gesucht werden muss. Mit dem 10-Finger-System liegen Durchschnittswerte bei 40 bis 60 WPM, geübte Tipper erreichen 80 bis 120.

| | Zwei bis vier Finger | 10-Finger-System |
|---|---|---|
| Durchschnitt | 27 WPM (abschreiben), 37 WPM (aus dem Kopf) | 40 bis 60 WPM |
| Obergrenze | 40 bis 50 WPM | 80 bis 120 WPM |
| Genauigkeit | 85 bis 92 Prozent | 95 bis 98 Prozent |
| Blick | auf die Tastatur | auf den Bildschirm |

Die Aalto-Studie hat gemessen, was schnelle von langsamen Tippern unterscheidet: Schnelle nutzen im Schnitt 8,4 Finger, langsame 5,3, und die schnellsten bewegen ihre Hände am wenigsten. Wer die Technik wechseln will, findet den Weg im [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen).

## Tippgeschwindigkeit nach Alter

| Altersgruppe | Typischer Bereich | Bemerkung |
|---|---|---|
| Kinder 6 bis 11 | 5 bis 20 WPM | Lernphase, meist Suchen der Tasten |
| Jugendliche 13 bis 19 | 35 bis 60 WPM | Viel Übung am Bildschirm, aber oft ohne System |
| 18 bis 30 | 40 bis 80 WPM | Schnellste Gruppe im Median |
| 31 bis 50 | 38 bis 65 WPM | Leichter Rückgang ab 40, Technik zählt mehr als Alter |
| 65 und älter | 25 bis 50 WPM | Langsamer, aber mit System weiterhin über dem Zwei-Finger-Niveau |

Das Alter erklärt weniger, als die Tabelle vermuten lässt. Die Streuung innerhalb jeder Gruppe ist größer als der Abstand zwischen den Gruppen, und die entscheidende Variable ist wieder die Technik: Ein 55-Jähriger mit 10-Finger-System tippt schneller als ein 25-Jähriger mit vier Fingern.

## Tippgeschwindigkeit nach Beruf

Was Arbeitgeber erwarten, hängt vom Anteil des Tippens an der Arbeit ab. Die Werte sind Mindestanforderungen aus Stellenprofilen und Einstellungstests, die typischen Bereiche das, was Beschäftigte tatsächlich erreichen.

| Beruf | Mindestwert | Typischer Bereich | Bemerkung |
|---|---|---|---|
| Büro allgemein | 40 WPM | 40 bis 55 | Grundniveau für jeden Schreibtischjob |
| Verwaltung, öffentlicher Dienst | 40 bis 50 WPM | 45 bis 55 | Schwelle in Einstellungstests |
| Datenerfassung | 45 bis 60 WPM | 50 bis 65 | Genauigkeit über 95 Prozent verlangt |
| Assistenz, Sekretariat | 55 bis 65 WPM | 55 bis 70 | Erwartung in der Privatwirtschaft |
| Programmierung | 40 WPM | 40 bis 60 | Sonderzeichen wichtiger als Tempo |
| Datenerfassung, hohes Volumen | 70 bis 80 WPM | 70 bis 90 | Reine Erfassungsstellen |
| Redaktion, Journalismus | 60 WPM | 70 bis 100 | Ab 70 bremst die Tastatur das Denken nicht mehr |
| Rechtsanwaltsfachangestellte | 70 bis 80 WPM | 80 bis 100 | Für Diktate teils 90 und mehr |
| Gerichtsstenografie | 200 und mehr | 200 bis 300 | Stenomaschine, eigene Technik |

Für die meisten Menschen, die viel schreiben, ist die relevante Zahl 60 WPM. Ab dort tippst du schneller, als du in Ruhe formulierst, und die Tastatur hört auf, der Engpass zu sein. Wer heute bei 40 liegt, braucht dafür bei täglichem Üben vier bis acht Wochen; der Sprung auf 80 und mehr dauert drei bis sechs Monate.

## Was ein guter Wert für dich ist

Die ehrliche Antwort hängt davon ab, was du mit dem Tippen machst:

- **Unter 30 WPM:** Du tippst mit Blick auf die Tastatur. Jede E-Mail kostet dich doppelt so lange wie nötig. Der größte Hebel ist die Technik, nicht das Tempo.
- **30 bis 45 WPM:** Durchschnitt. Reicht für gelegentliches Schreiben, bremst bei allem, was länger als ein Absatz ist.
- **45 bis 60 WPM:** Gutes Büroniveau. Hier landen die meisten nach dem Kurs.
- **60 bis 80 WPM:** Schnell. Die Tastatur ist kein Engpass mehr. Ein [Tippzertifikat](page:certificate) belegt das, etwa für Bewerbungen.
- **Über 80 WPM:** Die oberen 10 Prozent. Weitere Steigerung ist Feinschliff, kein Muss.

Der erste Schritt ist immer die Messung: [Tippgeschwindigkeit kostenlos messen](page:speedTest), eine Minute, ohne Anmeldung. Dann weißt du, in welcher Zeile dieser Tabelle du stehst.

## Häufige Fragen

### Wie viele Anschläge pro Minute sind gut?

200 Anschläge pro Minute (40 WPM) sind Durchschnitt, 300 (60 WPM) sind gut, 400 und mehr (80 WPM) sind schnell. Stellenanzeigen für Schreib- und Verwaltungsjobs nennen meist 200 bis 250 als Minimum.

### Ist 100 WPM realistisch?

Ja, aber selten: Etwa 5 Prozent der Tester erreichen 100 WPM. Voraussetzung ist das 10-Finger-System mit hoher Genauigkeit und mehrere Monate gezieltes Training. Für den Alltag ist es nicht nötig.

### Warum schwankt mein Ergebnis zwischen Tests?

Text, Tageszeit, Tastatur und Fehlerquote wirken sich aus. Ein Test mit natürlichem Text und 60 Sekunden Dauer ist aussagekräftiger als ein 15-Sekunden-Sprint mit Zufallswörtern. Miss zwei- bis dreimal und nimm den Mittelwert.

### Wie schnell kann ich mich verbessern?

Bei 10 bis 15 Minuten am Tag: vom Zwei-Finger-Niveau auf 40 WPM in etwa vier Wochen, auf 60 WPM in zwei bis drei Monaten. Der [Fortschritts-Tracker](article:fortschritts-tracker-4-wochen) macht die Entwicklung sichtbar.

## Quellen

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, Schnellste über 120 WPM, schnelle Tipper nutzen 8,4 Finger, langsame 5,3.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - 5 Zeichen = 1 Wort, Zwei-Finger-Tipper 27 WPM beim Abschreiben und 37 aus dem Kopf, Schreibkräfte 43 bis 80 WPM, manche Stellen 80 bis 95 WPM.
- [Anschläge pro Minute](https://de.wikipedia.org/wiki/Anschl%C3%A4ge_pro_Minute) (Wikipedia) - Umrechnung durch 5 in WPM, geübte Zehnfinger-Tipper 200 bis 400 Anschläge im 10-Minuten-Test.
- [Typing Speed Percentile Chart](https://www.typingverified.com/blog/typing-speed-percentile-chart) und [Average Typing Speed Statistics](https://typingspeedhub.com/average-typing-speed-statistics-2024.html) - Auswertungen von Tipptest-Plattformen 2023 bis 2025, Grundlage der Perzentil- und Alterstabelle.
- [Typing Speed Requirements by Profession](https://www.typelit.io/blog/typing-speed-requirements) - Zusammenstellung von Mindestanforderungen aus Stellenprofilen und Einstellungstests.`,
  },
  {
    slug: "average-typing-speed",
    locale: "en",
    type: "article",
    category: "learning",
    title: "Average Typing Speed: WPM Benchmarks by Age and Job",
    description: "What is a good typing speed? The average WPM, percentiles, benchmarks by age and profession, and how hunt-and-peck compares with touch typing. Sourced.",
    readingTime: 8,
    date: DATE,
    featured: false,
    content: `The average typing speed for adults is about 40 to 45 words per minute (WPM), measured across millions of online typing tests. In the largest scientific study on the subject, with 168,000 participants, the average was 51.6 WPM. A good typing speed for office work starts at 60 WPM, anything above 80 WPM counts as fast, and people who type with two fingers usually stall at 27 to 37 WPM. Here are the numbers, the percentiles, the benchmarks by age and profession, and what they mean for you.

## What WPM means and how it is measured

WPM stands for words per minute. Because words differ in length, a typing test doesn't count real words but characters: **five keystrokes count as one word**, spaces and punctuation included. Type 250 characters in a minute and you have 50 WPM.

The second number in every test is accuracy, the share of keystrokes without error. Serious tests fold errors into the speed: someone typing 60 WPM at 90 percent accuracy is slower net than someone at 50 WPM and 99 percent, because every correction costs time. How a test works in detail is explained in the [typing test guide](article:typing-test).

## The percentiles: where do you stand?

The distribution below comes from an analysis of more than 10 million online typing tests taken between 2023 and 2025. The percentile tells you what share of test takers were slower than you.

| Percentile | WPM | Label |
|---|---|---|
| 10th | 20 to 25 | Beginner, usually two to four fingers |
| 25th | 30 to 35 | Below average |
| 50th (median) | 40 to 44 | Average |
| 75th | 60 to 65 | Good, office level |
| 90th | 80 to 90 | Fast |
| 95th | 100 to 110 | Very fast |
| 99th | 130 and above | Elite |

Two things stand out. First, the gaps are not even: from the median to the 75th percentile is 20 WPM, from the 90th to the 99th more than 50. The top ranks are thinly populated. Second, the online-test average (40 to 44 WPM) sits below the Aalto study's 51.6 WPM. The reason: the study measured participants over a longer test and cleaned outliers, while on test platforms many people test once, unprepared, sometimes on a phone. Both numbers are right, they describe different groups. For comparing yourself with colleagues at the office, 40 to 50 WPM is the realistic middle.

## Two fingers or ten: the single biggest difference

No factor splits the distribution as clearly as technique. Someone typing with two to four fingers while looking at the keyboard averages 27 WPM when copying text and 37 WPM when composing. The ceiling is 40 to 50 WPM, because every key has to be found first. With touch typing, averages sit at 40 to 60 WPM, and practiced typists reach 80 to 120.

| | Hunt-and-peck (2 to 4 fingers) | Touch typing (10 fingers) |
|---|---|---|
| Average | 27 WPM (copying), 37 WPM (composing) | 40 to 60 WPM |
| Ceiling | 40 to 50 WPM | 80 to 120 WPM |
| Accuracy | 85 to 92 percent | 95 to 98 percent |
| Eyes | on the keyboard | on the screen |

The Aalto study measured what separates fast typists from slow ones: fast typists use 8.4 fingers on average, slow ones 5.3, and the fastest move their hands the least. If you want to switch technique, the path is in the [guide to learning touch typing](article:learn-touch-typing).

## Typing speed by age

| Age group | Typical range | Note |
|---|---|---|
| Kids 6 to 11 | 5 to 20 WPM | Learning phase, mostly searching for keys |
| Teens 13 to 19 | 35 to 60 WPM | Lots of screen time, often without technique |
| 18 to 30 | 40 to 80 WPM | Fastest group by median |
| 31 to 50 | 38 to 65 WPM | Slight decline after 40, technique matters more than age |
| 65 and older | 25 to 50 WPM | Slower, but with technique still well above two-finger level |

Age explains less than the table suggests. The spread within each group is wider than the gap between groups, and the decisive variable is technique again: a 55-year-old touch typist is faster than a 25-year-old with four fingers.

## Typing speed by profession

What employers expect depends on how much of the job is typing. The minimums come from job profiles and hiring tests, the typical ranges from what people in the role actually reach.

| Profession | Minimum | Typical range | Note |
|---|---|---|---|
| General office work | 40 WPM | 40 to 55 | Baseline for any desk job |
| Government clerical | 40 to 50 WPM | 45 to 55 | Civil service test threshold |
| Data entry (basic) | 45 to 60 WPM | 50 to 65 | 95 percent accuracy required |
| Administrative assistant | 55 to 65 WPM | 55 to 70 | Private-sector expectation |
| Programmer | 40 WPM | 40 to 60 | Special characters matter more than raw speed |
| Data entry (high volume) | 70 to 80 WPM | 70 to 90 | Dedicated entry roles |
| Writer, journalist | 60 WPM | 70 to 100 | From 70 up, the keyboard stops limiting output |
| Legal secretary | 70 to 80 WPM | 80 to 100 | Some firms ask 90 and above for dictation |
| Court reporter | 200 and above | 200 to 300 | Stenotype machine, a different skill |

For most people who write a lot, the number that matters is 60 WPM. From there you type faster than you compose, and the keyboard stops being the bottleneck. Someone at 40 today gets there in four to eight weeks of daily practice; the jump to 80 and beyond takes three to six months.

## What a good typing speed is for you

The honest answer depends on what you use typing for:

- **Below 30 WPM:** You look at the keyboard. Every email takes twice as long as it needs to. The biggest lever is technique, not speed.
- **30 to 45 WPM:** Average. Fine for occasional writing, a drag for anything longer than a paragraph.
- **45 to 60 WPM:** Good office level. Where most people land after the course.
- **60 to 80 WPM:** Fast. The keyboard is no longer the bottleneck. A [typing certificate](page:certificate) proves it, for example on a job application.
- **Above 80 WPM:** The top 10 percent. Further gains are polish, not a must.

The first step is always the measurement: [take the free typing speed test](page:speedTest), one minute, no sign-up. Then you know which row of this table you are in.

## Frequently asked questions

### What is a good WPM?

60 WPM is good for office work, 80 and above is fast, 40 is average. Job ads for typing-heavy roles usually list 40 to 50 WPM as the minimum.

### Is 100 WPM realistic?

Yes, but rare: about 5 percent of test takers reach 100 WPM. It takes touch typing with high accuracy and several months of deliberate practice. For everyday work it is not necessary.

### Why does my result vary between tests?

Text, time of day, keyboard and error rate all play in. A 60-second test with natural text is more meaningful than a 15-second sprint with random words. Measure two or three times and take the mean.

### How fast can I improve?

At 10 to 15 minutes a day: from two-finger level to 40 WPM in about four weeks, to 60 WPM in two to three months. The [progress tracker](article:progress-tracker-4-weeks) makes the development visible.

## Sources

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, fastest above 120 WPM, fast typists use 8.4 fingers, slow ones 5.3.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - 5 characters = 1 word, two-finger typists 27 WPM copying and 37 composing, professional typists 43 to 80 WPM, some positions 80 to 95 WPM.
- [Typing Speed Percentile Chart](https://www.typingverified.com/blog/typing-speed-percentile-chart) and [Average Typing Speed Statistics](https://typingspeedhub.com/average-typing-speed-statistics-2024.html) - aggregated typing-test platform data 2023 to 2025, basis of the percentile and age tables.
- [Typing Speed Requirements by Profession](https://www.typelit.io/blog/typing-speed-requirements) - compilation of minimum requirements from job profiles and hiring tests.`,
  },
  {
    slug: "vitesse-de-frappe-moyenne",
    locale: "fr",
    type: "article",
    category: "learning",
    title: "Vitesse de frappe moyenne : les repères en mots par minute",
    description: "Combien de mots par minute est-ce normal ? Moyenne, percentiles, repères par âge et par métier, et l'écart entre deux doigts et dix doigts. Chiffres sourcés.",
    readingTime: 8,
    date: DATE,
    featured: false,
    content: `La vitesse de frappe moyenne d'un adulte se situe autour de 40 à 45 mots par minute (MPM), d'après des millions de tests de frappe en ligne. Dans la plus grande étude scientifique sur le sujet, avec 168 000 participants, la moyenne était de 51,6 MPM. Une bonne vitesse pour le travail de bureau commence à 60 MPM, au-dessus de 80 MPM on est rapide, et qui tape avec deux doigts plafonne le plus souvent entre 27 et 37 MPM. Voici les chiffres, les percentiles, les repères par âge et par métier, et ce qu'ils signifient pour toi.

## Ce que veut dire MPM et comment on le mesure

MPM signifie mots par minute (en anglais WPM, words per minute). Comme les mots n'ont pas tous la même longueur, un test de frappe ne compte pas de vrais mots mais des caractères : **cinq frappes valent un mot**, espaces et ponctuation compris. Tape 250 caractères en une minute et tu es à 50 MPM.

Le second chiffre de chaque test est la précision, la part de frappes sans erreur. Les tests sérieux intègrent les erreurs à la vitesse : qui tape 60 MPM avec 90 % de précision est en réalité plus lent que quelqu'un à 50 MPM et 99 %, parce que chaque correction coûte du temps. Le fonctionnement détaillé d'un test est expliqué dans le [guide du test de frappe](article:test-de-frappe).

## Les percentiles : où te situes-tu ?

La répartition ci-dessous vient de l'analyse de plus de 10 millions de tests de frappe en ligne réalisés entre 2023 et 2025. Le percentile indique la part des testeurs plus lents que toi.

| Percentile | MPM | Niveau |
|---|---|---|
| 10e | 20 à 25 | Débutant, le plus souvent deux à quatre doigts |
| 25e | 30 à 35 | Sous la moyenne |
| 50e (médiane) | 40 à 44 | Moyenne |
| 75e | 60 à 65 | Bon, niveau bureau |
| 90e | 80 à 90 | Rapide |
| 95e | 100 à 110 | Très rapide |
| 99e | 130 et plus | Élite |

Deux choses ressortent. D'abord, les écarts ne sont pas réguliers : de la médiane au 75e percentile, il y a 20 MPM ; du 90e au 99e, plus de 50. Le haut du classement est peu peuplé. Ensuite, la moyenne des tests en ligne (40 à 44 MPM) est inférieure aux 51,6 MPM de l'étude Aalto. La raison : l'étude a mesuré les participants sur un test plus long et nettoyé les valeurs aberrantes, alors que sur les plateformes, beaucoup de gens testent une seule fois, sans préparation, parfois sur téléphone. Les deux chiffres sont justes, ils décrivent des groupes différents. Pour te comparer à tes collègues de bureau, 40 à 50 MPM est le milieu réaliste.

## Deux doigts ou dix : la plus grande différence

Aucun facteur ne sépare la distribution aussi nettement que la technique. Qui tape avec deux à quatre doigts en regardant le clavier atteint en moyenne 27 MPM en recopiant et 37 MPM en rédigeant. Le plafond est de 40 à 50 MPM, parce que chaque touche doit d'abord être cherchée. Avec la dactylographie à dix doigts, les moyennes se situent entre 40 et 60 MPM, et les typistes entraînés atteignent 80 à 120.

| | Deux à quatre doigts | Dix doigts |
|---|---|---|
| Moyenne | 27 MPM (recopie), 37 MPM (rédaction) | 40 à 60 MPM |
| Plafond | 40 à 50 MPM | 80 à 120 MPM |
| Précision | 85 à 92 % | 95 à 98 % |
| Regard | sur le clavier | sur l'écran |

L'étude Aalto a mesuré ce qui distingue les typistes rapides des lents : les rapides utilisent 8,4 doigts en moyenne, les lents 5,3, et les plus rapides bougent le moins les mains. Pour changer de technique, le chemin est dans le [guide pour apprendre la dactylographie](article:apprendre-dactylographie).

## Vitesse de frappe par âge

| Tranche d'âge | Plage typique | Remarque |
|---|---|---|
| Enfants 6 à 11 ans | 5 à 20 MPM | Phase d'apprentissage, recherche des touches |
| Adolescents 13 à 19 ans | 35 à 60 MPM | Beaucoup d'écran, souvent sans méthode |
| 18 à 30 ans | 40 à 80 MPM | Groupe le plus rapide en médiane |
| 31 à 50 ans | 38 à 65 MPM | Léger recul après 40 ans, la technique compte plus que l'âge |
| 65 ans et plus | 25 à 50 MPM | Plus lent, mais avec la méthode toujours au-dessus du niveau deux doigts |

L'âge explique moins que le tableau ne le laisse penser. La dispersion à l'intérieur de chaque groupe est plus grande que l'écart entre les groupes, et la variable décisive reste la technique : une personne de 55 ans qui tape à dix doigts est plus rapide qu'une de 25 ans à quatre doigts.

## Vitesse de frappe par métier

Ce que les employeurs attendent dépend de la part de frappe dans le travail. Les minimums viennent de profils de poste et de tests d'embauche, les plages typiques de ce que les salariés atteignent réellement.

| Métier | Minimum | Plage typique | Remarque |
|---|---|---|---|
| Bureau en général | 40 MPM | 40 à 55 | Base pour tout poste de bureau |
| Administration, fonction publique | 40 à 50 MPM | 45 à 55 | Seuil des tests de recrutement |
| Saisie de données (base) | 45 à 60 MPM | 50 à 65 | Précision supérieure à 95 % exigée |
| Assistanat, secrétariat | 55 à 65 MPM | 55 à 70 | Attente du secteur privé |
| Programmation | 40 MPM | 40 à 60 | Les caractères spéciaux comptent plus que la vitesse |
| Saisie de données (volume élevé) | 70 à 80 MPM | 70 à 90 | Postes de saisie dédiés |
| Rédaction, journalisme | 60 MPM | 70 à 100 | À partir de 70, le clavier ne freine plus la pensée |
| Secrétariat juridique | 70 à 80 MPM | 80 à 100 | Pour la dictée, parfois 90 et plus |
| Sténotypie judiciaire | 200 et plus | 200 à 300 | Machine à sténotyper, technique à part |

Pour la plupart des gens qui écrivent beaucoup, le chiffre qui compte est 60 MPM. À partir de là, tu tapes plus vite que tu ne formules, et le clavier cesse d'être le goulot. Qui est à 40 aujourd'hui y arrive en quatre à huit semaines de pratique quotidienne ; le saut à 80 et plus prend trois à six mois.

## Ce qu'est une bonne vitesse pour toi

La réponse honnête dépend de ce que tu fais de la frappe :

- **Moins de 30 MPM :** tu regardes le clavier. Chaque e-mail te prend deux fois plus de temps que nécessaire. Le plus grand levier est la technique, pas la vitesse.
- **30 à 45 MPM :** la moyenne. Suffisant pour écrire de temps en temps, pénalisant dès qu'un texte dépasse un paragraphe.
- **45 à 60 MPM :** bon niveau bureau. C'est là que la plupart arrivent après le cours.
- **60 à 80 MPM :** rapide. Le clavier n'est plus le goulot. Un [certificat de dactylographie](page:certificate) en apporte la preuve, par exemple pour une candidature.
- **Plus de 80 MPM :** les 10 % du haut. Progresser encore relève de la finition, pas de la nécessité.

La première étape est toujours la mesure : [mesure gratuitement ta vitesse de frappe](page:speedTest), une minute, sans inscription. Tu sais ensuite dans quelle ligne de ce tableau tu te trouves.

## Questions fréquentes

### Combien de mots par minute, c'est bien ?

60 MPM est une bonne vitesse pour le bureau, 80 et plus c'est rapide, 40 c'est la moyenne. Les offres d'emploi pour les postes de saisie ou d'assistanat indiquent le plus souvent 40 à 50 MPM comme minimum.

### 100 MPM, c'est réaliste ?

Oui, mais rare : environ 5 % des testeurs atteignent 100 MPM. Il faut la dactylographie à dix doigts avec une précision élevée et plusieurs mois d'entraînement ciblé. Pour le quotidien, ce n'est pas nécessaire.

### Pourquoi mon résultat varie-t-il d'un test à l'autre ?

Le texte, l'heure, le clavier et le taux d'erreur jouent tous. Un test de 60 secondes sur un texte naturel est plus parlant qu'un sprint de 15 secondes sur des mots aléatoires. Mesure deux ou trois fois et prends la moyenne.

### À quelle vitesse peut-on progresser ?

À raison de 10 à 15 minutes par jour : du niveau deux doigts à 40 MPM en quatre semaines environ, à 60 MPM en deux à trois mois. Le [suivi de progression](article:suivi-progression-4-semaines) rend l'évolution visible.

## Sources

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, les plus rapides au-dessus de 120 MPM, les typistes rapides utilisent 8,4 doigts, les lents 5,3.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - 5 caractères = 1 mot, typistes à deux doigts 27 MPM en recopiant et 37 en rédigeant, professionnels 43 à 80 MPM, certains postes 80 à 95 MPM.
- [Typing Speed Percentile Chart](https://www.typingverified.com/blog/typing-speed-percentile-chart) et [Average Typing Speed Statistics](https://typingspeedhub.com/average-typing-speed-statistics-2024.html) - données agrégées de plateformes de tests 2023 à 2025, base des tableaux par percentile et par âge.
- [Typing Speed Requirements by Profession](https://www.typelit.io/blog/typing-speed-requirements) - compilation des minimums exigés dans les profils de poste et tests d'embauche.`,
  },
];
