import type { ResourceMeta } from "./resources";

// The seven printable worksheets as lead-magnet articles, one per
// language. Slug = PDF file name in public/downloads (built by
// scripts/cheatsheets/build.ts from src/lib/worksheets.ts), so the
// article's email gate downloads the matching sheet. Same rules as every
// article: lead paragraph answers the query, >= 3 internal links via
// page:/article: keys, every number sourced (docs/article-template.md).

const DATE = "2026-09-25";

export const worksheetResources: ResourceMeta[] = [
  // ------------------------------------------------------------ DE
  {
    slug: "finger-tastatur-karte-qwertz",
    locale: "de",
    type: "lead-magnet",
    category: "learning",
    title: "Fingersatz Tastatur: Welcher Finger tippt welche Taste?",
    description: "Die Finger-Tastatur-Karte für QWERTZ zeigt den Fingersatz im 10-Finger-System auf einen Blick: Farbzonen, Grundstellung, beide Hände. Als PDF zum Ausdrucken.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Arbeitsblatt",
    content: `Im 10-Finger-System hat jede Taste einen festen Finger: Der linke kleine Finger tippt Q, A, Y und die 1, der rechte Zeigefinger H, J, N, M, 6 und 7, die Daumen die Leertaste. Die Finger-Tastatur-Karte zeigt diesen Fingersatz für die deutsche QWERTZ-Tastatur als Farbzonen, mit beiden Händen in der Grundstellung. Ausdrucken, neben die Tastatur legen, und der Blick wandert bei jeder unsicheren Taste aufs Blatt statt auf die Tasten.

## Was auf dem Blatt steht

- Die komplette QWERTZ-Tastatur mit einer Farbe pro Finger: acht Finger, acht Farben, plus Grau für die Daumen
- Die Grundstellung A S D F und J K L Ö mit Markierung, die Noppen auf F und J hervorgehoben
- Zwei Hände mit farbigen Fingerkuppen, damit die Zuordnung ohne Nachdenken sitzt
- Drei Regeln, die den Unterschied machen: Handgelenke schweben, Blick auf den Bildschirm, erst Genauigkeit, dann Tempo

## Warum der Fingersatz so wichtig ist

Schnelle Tipper unterscheiden sich von langsamen nicht durch Talent, sondern durch feste Finger-Tasten-Zuordnung, wenig Handbewegung und den Blick auf den Bildschirm. Das zeigt die Aalto-Studie "How We Type" mit Bewegungsdaten von Tippern aller Stufen. Wer mit sechs Fingern tippt, bewegt die Hand ständig über die Tastatur und muss hinsehen. Wer zehn Finger fest zuordnet, findet jede Taste aus der Grundstellung heraus, ohne die Hand zu verschieben. Die 136-Millionen-Anschläge-Studie derselben Gruppe zeigt: Schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.

## So nutzt du die Karte

1. Ausdrucken, am besten in Farbe, und rechts neben die Tastatur legen.
2. Finger auf die Grundstellung: linke Hand auf A S D F, rechte auf J K L Ö. Die Zeigefinger fühlen die Noppen.
3. Bei jeder Taste, die du suchen musst, auf die Karte schauen, nie auf die Tastatur. Nach dem Anschlag kehrt der Finger in die Grundstellung zurück.
4. Nach ein bis zwei Wochen brauchst du die Karte nur noch für Zahlen und Sonderzeichen. Dann kommt sie in die Schublade.

Die Karte ersetzt keinen Kurs, sie ist die Landkarte dazu. Die Lektionen im [10-Finger-System-Kurs](page:lessons) führen Reihe für Reihe durch dieselbe Belegung, mit echten Wörtern statt Buchstabensalat.

## Profi-Tipp

Häng die Karte nicht flach hin, sondern stell sie schräg an den Monitor. Der Blick geht dann nach oben zum Bildschirm, nicht nach unten zur Tastatur. Genau diese Blickrichtung trainierst du damit gleich mit. Wer nicht weiß, welche Tasten schon sitzen, macht zuerst die kostenlose [Einstufung](page:placement): Sie prüft jede Taste einzeln und schlägt vor, wo du startest.

## Nächster Schritt

Die Karte zeigt die Belegung, üben musst du sie. Der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen) erklärt die Methode Schritt für Schritt, und das [leere Tastaturlayout zum Ausfüllen](article:leeres-layout-qwertz) verrät nach einer Woche, welche Tasten wirklich sitzen. Andere Tastatur? Das [Tastaturlayout-Tool](page:keyboardLayouts) zeigt die Unterschiede zwischen QWERTZ, QWERTY und AZERTY.

## Quellen

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: feste Finger-Tasten-Zuordnung, Vorbereitung des nächsten Anschlags und wenig Handbewegung sagen die Geschwindigkeit voraus.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.
- [Zehnfingersystem](https://de.wikipedia.org/wiki/Zehnfingersystem) (Wikipedia) - Grundstellung und Fingerzuordnung auf der deutschen Tastatur nach DIN 2137.`,
  },
  {
    slug: "leeres-layout-qwertz",
    locale: "de",
    type: "lead-magnet",
    category: "learning",
    title: "Leere Tastatur zum Ausfüllen: Der 2-Minuten-Test",
    description: "Leeres QWERTZ-Layout zum Ausdrucken: Tasten aus dem Gedächtnis eintragen und in zwei Minuten sehen, welche noch nicht sitzen. Kostenloses PDF ohne Anmeldung.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Arbeitsblatt",
    content: `Eine leere Tastatur zum Ausfüllen ist der ehrlichste Test, ob das 10-Finger-System sitzt: Du trägst alle Buchstaben, Ziffern und Zeichen aus dem Gedächtnis ein, ohne auf die echte Tastatur zu schauen. Was fehlt oder an der falschen Stelle landet, hast du noch nicht im Muskelgedächtnis. Das PDF zeigt zwei leere QWERTZ-Layouts auf einer Seite, mit Farbzonen pro Finger und Feldern für Zeit, richtige und fehlende Tasten. Kein Formular, direkt herunterladen.

## Was auf dem Blatt steht

- Zwei leere QWERTZ-Tastaturen, nur die Steuertasten beschriftet, alle Zeichentasten frei
- Farbzonen pro Finger als Hilfe: Du siehst, welcher Finger zuständig ist, nicht welche Taste dort liegt
- Unter jeder Tastatur drei Felder: Zeit, Richtig, Fehlt, damit du zwei Durchgänge vergleichen kannst

## Warum Trockentraining funktioniert

Lernforschung nennt es Abruf-Übung: Wer Wissen aus dem Gedächtnis holen muss, behält es deutlich länger als wer es nur noch einmal ansieht. Roediger und Karpicke haben das in der Studie "Test-Enhanced Learning" gezeigt, in der Testen das reine Wiederlesen beim Behalten nach einer Woche klar schlug. Beim Tippen ist es dasselbe: Die Tastatur ansehen ist Wiederlesen, das leere Blatt ausfüllen ist Abrufen. Und der Nebeneffekt ist die Diagnose. Nach zwei Minuten liegt deine persönliche Übungsliste auf dem Tisch.

## So nutzt du das Blatt

1. Tastatur abdecken oder Laptop zuklappen. Stoppuhr an.
2. Alle Buchstaben, Ziffern und Zeichen eintragen, Reihe für Reihe, ohne nachzusehen.
3. Mit der [Finger-Tastatur-Karte](article:finger-tastatur-karte-qwertz) vergleichen. Fehlende und vertauschte Tasten markieren, Zahl in "Fehlt" eintragen.
4. Genau diese Tasten eine Woche lang gezielt üben, dann das zweite Layout ausfüllen und die Zeiten vergleichen.

Das ist die Papierversion dessen, was die [Einstufung](page:placement) automatisch macht: Sie misst jede Taste einzeln und baut daraus deinen Trainingsplan. Das Blatt ist für zwischendurch, im Zug, in der Mittagspause, ohne Bildschirm.

## Profi-Tipp

Füll das Layout nicht mit dem Stift in der Schreibhand, sondern tipp die Tasten mit dem zuständigen Finger in die Luft, bevor du sie einträgst. Die Bewegung ist das, was du behalten willst, nicht das Bild der Tastatur. Und wenn die Buchstaben sitzen, kommt die zweite Runde nur mit Ziffern und Sonderzeichen. Die vergisst fast jeder zuerst.

## Nächster Schritt

Fehlen viele Tasten, ist der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen) der richtige Einstieg. Sitzen die meisten, miss deine [Tippgeschwindigkeit](page:speedTest) und trag den Wert in den [Fortschritts-Tracker](article:fortschritts-tracker-4-wochen) ein. Vier Wochen später vergleichst du.

## Quellen

- [Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention](https://doi.org/10.1111/j.1467-9280.2006.01693.x) - Roediger und Karpicke, Psychological Science 2006: Abruf-Übung schlägt Wiederlesen beim Behalten nach einer Woche.
- [Zehnfingersystem](https://de.wikipedia.org/wiki/Zehnfingersystem) (Wikipedia) - Grundstellung und Fingerzuordnung auf der deutschen Tastatur.`,
  },
  {
    slug: "fortschritts-tracker-4-wochen",
    locale: "de",
    type: "lead-magnet",
    category: "learning",
    title: "10-Finger-Schreiben üben: Der 4-Wochen-Tracker (PDF)",
    description: "Fortschritts-Tracker für 28 Übungstage: Lektion, WPM, Genauigkeit und Minuten pro Tag, mit Startwert und Wochenziel. So bleibt das Üben dran. PDF.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Arbeitsblatt",
    content: `10-Finger-Schreiben üben funktioniert mit 10 bis 15 Minuten am Tag über vier Wochen besser als mit zwei Stunden am Wochenende. Der Fortschritts-Tracker macht daraus eine Tabelle: 28 Zeilen, eine pro Übungstag, mit Lektion, Tippgeschwindigkeit in WPM, Genauigkeit und Minuten. Oben trägst du den Startwert aus der Einstufung ein, unten nach vier Wochen den neuen Wert. Der Abstand dazwischen ist dein Ergebnis.

## Was auf dem Blatt steht

- Startwert: WPM und Genauigkeit aus der Einstufung oder dem ersten Test, mit Datum
- Vier Wochenblöcke mit je sieben Zeilen: Tag, Lektion, WPM, Genauigkeit, Minuten, Notiz
- Ein Wochenziel pro Block, das du selbst einträgst
- Die Abschlusszeile: nach 28 Tagen erneut messen und mit dem Startwert vergleichen

## Warum kurz und täglich schlägt lang und selten

Cepeda und Kollegen haben in einer Übersicht über 254 Studien gezeigt, dass verteiltes Üben mit Pausen dazwischen dem geballten Üben beim Behalten überlegen ist. Beim Tippen kommt dazu, dass die Bewegungen im Schlaf gefestigt werden. Zehn Minuten heute und zehn morgen bringen mehr als zwanzig am Stück. Der Tracker sorgt für genau diesen Rhythmus, weil eine leere Zeile im Wochenblock sichtbar bleibt.

Der zweite Grund ist Motivation. Wer Fortschritt sieht, macht weiter. Die Aalto-Studie mit 168.000 Teilnehmern liefert die Einordnung: Der Durchschnitt liegt bei 51,6 WPM, Zwei-Finger-Tipper bei etwa 27. Zwischen diesen beiden Zahlen liegt der Weg, den der Tracker dokumentiert.

## So nutzt du den Tracker

1. Starte mit der kostenlosen [Einstufung](page:placement) und trag WPM und Genauigkeit als Startwert ein. Ohne Startwert kein Vergleich.
2. Lege ein realistisches Wochenziel fest: plus 3 bis 5 WPM pro Woche ist bei täglichem Üben normal, mehr nicht nötig.
3. Nach jeder Lektion im [Kurs](page:lessons) eine Zeile ausfüllen. Die Werte stehen am Ende jeder Lektion.
4. Nach 28 Tagen die [Tippgeschwindigkeit](page:speedTest) messen und mit dem Startwert vergleichen.

## Profi-Tipp

Die Spalte "Notiz" ist die wichtigste. Schreib rein, welche Taste heute gehakt hat: "ö", "Shift links", "Zahlen". Nach einer Woche siehst du das Muster, und genau diese Tasten übst du dann gezielt. Genauigkeit vor Tempo: Wenn die Fehlerquote über 5 Prozent liegt, ist das Tempo zu hoch, egal was die WPM-Zahl sagt.

## Nächster Schritt

Wie die Lektionen aufgebaut sind, steht im [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen). Was ein guter WPM-Wert ist, erklärt der Artikel zur [Tippgeschwindigkeit und ihren Vergleichswerten](article:tipptest). Und wenn du vorher wissen willst, wo du stehst: der [Selbsttest mit acht Fragen](article:selbsttest-wo-stehst-du).

## Quellen

- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: verteiltes Üben schlägt geballtes Üben (Spacing-Effekt), Übersicht über 254 Studien.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Zwei-Finger-Tipper etwa 27 WPM beim Abschreiben.`,
  },
  {
    slug: "nummernblock-karte",
    locale: "de",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Nummernblock blind schreiben: Fingersatz Ziffernblock",
    description: "Nummernblock blind bedienen: Grundstellung 4-5-6, welcher Finger welche Ziffer tippt, Enter und Plus mit dem kleinen Finger. Die Karte als PDF zum Ausdrucken.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Arbeitsblatt",
    content: `Auf dem Nummernblock ruht die rechte Hand auf 4, 5 und 6: Zeigefinger auf der 4, Mittelfinger auf der 5 mit der Noppe, Ringfinger auf der 6. Von dort erreicht jeder Finger seine Spalte nach oben und unten, der Daumen tippt die 0, der kleine Finger Enter, Plus und Minus. Wer das einmal verinnerlicht, gibt Zahlenkolonnen ein, ohne hinzusehen. Die Nummernblock-Karte zeigt die Zuordnung als farbigen Ziffernblock mit Tabelle, zum Ausdrucken.

## Was auf dem Blatt steht

- Der komplette Ziffernblock mit einer Farbe pro Finger, Noppe auf der 5 markiert
- Die Zuordnungstabelle: Zeigefinger 7, 4, 1 und Num; Mittelfinger 8, 5, 2 und Schrägstrich; Ringfinger 9, 6, 3, Stern und Komma; kleiner Finger Minus, Plus und Enter; Daumen 0
- Der Hinweis, der den Unterschied macht: Blick auf die Vorlage, nicht auf den Block

## Für wen sich das lohnt

Buchhaltung, Controlling, Verwaltung, Kassensysteme, Datenerfassung: Überall, wo Zahlen aus einer Vorlage in eine Tabelle wandern, ist der Nummernblock schneller als die Zahlenreihe der Haupttastatur. Die Tasten liegen eng beieinander, jede Ziffer ist einen Finger weit entfernt, und die rechte Hand bleibt an einem Platz. Die Zahlenreihe oben dagegen verlangt Sprünge aus der Grundstellung und ist beim reinen Zahlentippen langsamer.

In den USA heißt die Disziplin "10-key" und wird bei Bewerbungen für Buchhaltungsjobs separat getestet, gemessen in Anschlägen pro Stunde. Wer den Block blind bedient, hat dort einen messbaren Vorteil.

## So nutzt du die Karte

1. Rechte Hand auf 4-5-6, Mittelfinger fühlt die Noppe. Daumen locker über der 0.
2. Zwei Minuten nur die Grundreihe: 4 5 6, 6 5 4, 5 4 6. Dann die Reihe darüber, dann die darunter.
3. Zahlenkolonnen aus einer Vorlage abtippen, Blick auf die Vorlage. Nach jeder Zahl zurück auf 4-5-6.
4. Enter mit dem kleinen Finger, nie mit dem Zeigefinger. Das ist der häufigste Fehler und kostet jedes Mal die Grundstellung.

Der Kurs behandelt Zahlen in den späten Lektionen auf der Zahlenreihe. Die Nummernblock-Karte ergänzt das für alle, die einen Block haben und viel mit Tabellen arbeiten. Wie die Zuordnung auf der Haupttastatur aussieht, zeigt die [Finger-Tastatur-Karte](article:finger-tastatur-karte-qwertz).

## Profi-Tipp

Laptop ohne Nummernblock? Dann lohnt sich ein externer Block für 15 bis 25 Euro, falls du täglich Zahlen erfasst. Für alle anderen gilt: Die Zahlenreihe blind zu beherrschen reicht, und genau das üben die [Lektionen im 10-Finger-System-Kurs](page:lessons).

## Nächster Schritt

Zahlen sind das eine, Sonderzeichen das andere: Die [Sonderzeichen-Karte](article:sonderzeichen-karte-qwertz) zeigt, wo @, €, Prozent und Klammern liegen. Und wer wissen will, wie schnell die Buchstaben schon sitzen, misst kostenlos die [Tippgeschwindigkeit](page:speedTest).

## Quellen

- [Numeric keypad](https://en.wikipedia.org/wiki/Numeric_keypad) (Wikipedia, englisch) - Aufbau des Ziffernblocks, Noppe auf der 5, Herkunft aus Rechenmaschinen.
- [Zehnfingersystem](https://de.wikipedia.org/wiki/Zehnfingersystem) (Wikipedia) - Grundstellung und Fingerzuordnung, inklusive Ziffernblock.`,
  },
  {
    slug: "poster-welcher-finger-tippt-was-qwertz",
    locale: "de",
    type: "lead-magnet",
    category: "productivity",
    title: "Tastatur-Poster fürs Büro: Welcher Finger tippt was?",
    description: "Das Poster zeigt den Fingersatz des 10-Finger-Systems als große QWERTZ-Tastatur mit Farbzonen, kaum Text. Für Büro, Homeoffice und Schulungsraum. PDF, A4 quer.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Poster",
    content: `Ein Tastatur-Poster an der Wand erinnert das ganze Team jeden Tag daran, welcher Finger welche Taste tippt, ohne dass jemand ein Blatt auf dem Schreibtisch suchen muss. Dieses Poster zeigt die QWERTZ-Tastatur groß im Querformat, eine Farbe pro Finger, die Grundstellung markiert, und eine einzige Zeile Text. Für die Wand hinter den Monitoren, den Schulungsraum oder die Küche, in der über Tastenkürzel diskutiert wird.

## Was auf dem Poster steht

- Die QWERTZ-Tastatur in Vollbreite, jede Taste in der Farbe des zuständigen Fingers
- Grundstellung A S D F und J K L Ö markiert, Noppen auf F und J
- Die Legende mit allen acht Fingern und den Daumen
- Eine Zeile: Grundstellung, Daumen auf der Leertaste, Blick nach vorn

Kein Erklärtext, keine Regeln. Ein Poster wird aus zwei Metern Entfernung gelesen, in zwei Sekunden.

## Warum ein Poster im Büro funktioniert

Die meisten Berufstätigen tippen mit vier bis sechs Fingern und wissen, dass es besser ginge. Sie sprechen nur nicht darüber. Ein Poster nimmt das Thema aus der Peinlichkeitsecke und macht es zu etwas, das alle sehen und über das man reden darf. Der zweite Effekt ist die Wiederholung: Wer täglich an der Farbzuordnung vorbeigeht, hat sie nach zwei Wochen im Kopf, ohne je geübt zu haben. Das Üben selbst dauert dann kürzer.

Bei zwei Stunden Tippen am Tag pro Person summiert sich jede Verbesserung: Wer von 30 auf 50 WPM kommt, spart bei gleichem Textvolumen mehr als ein Drittel der Tippzeit. Die Rechnung dazu steht auf der [Seite für Unternehmen](page:companies).

## So setzt du es ein

1. In Farbe auf A4 quer drucken, besser A3, wenn der Drucker es kann. Das Layout skaliert ohne Qualitätsverlust.
2. Auf Augenhöhe neben den Monitoren aufhängen, nicht hinter dem Rücken.
3. Wer es genauer wissen will, bekommt die [Finger-Tastatur-Karte](article:finger-tastatur-karte-qwertz) mit Händen und Regeln für den eigenen Schreibtisch.
4. Als Einstieg ins Team-Training: Jeder misst einmal die [Tippgeschwindigkeit](page:speedTest), das Ergebnis kommt als Zettel neben das Poster. Vier Wochen später noch einmal.

## Profi-Tipp

Häng das Poster nicht ohne Anlass auf. Kombiniere es mit einer Zahl: dem Durchschnitt des Teams aus dem ersten Test. Eine sichtbare Zahl, die sich verbessern kann, macht aus Deko ein Ziel.

## Nächster Schritt

Für Teams gibt es das Training mit Vorher-Nachher-Messung und Zertifikat pro Teilnehmer, Details auf der [Seite für Unternehmen](page:companies). Für den Einzelnen ist der [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen) der Anfang.

## Quellen

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, schnelle Tipper nutzen im Schnitt 8,4 Finger, langsame 5,3.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Zwei-Finger-Tipper etwa 27 WPM beim Abschreiben, Profis 43 bis 80 WPM.`,
  },
  {
    slug: "selbsttest-wo-stehst-du",
    locale: "de",
    type: "lead-magnet",
    category: "learning",
    title: "Wie gut tippe ich? Selbsttest mit 8 Fragen (PDF)",
    description: "Acht Ja-Nein-Fragen zeigen, ob du das 10-Finger-System beherrschst, ausbauen solltest oder von vorn beginnst. Drei Stufen, je mit passendem Einstieg. PDF.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Arbeitsblatt",
    content: `Wie gut du tippst, verraten acht Fragen schneller als jeder Test: Schaust du auf die Tastatur? Nutzt du alle zehn Finger? Findest du F und J blind? Der Selbsttest zum Ausdrucken zählt deine Ja-Antworten und ordnet dich in eine von drei Stufen ein. Jede Stufe hat einen anderen Einstieg, von Lektion 0 bis zum Zertifikat. Zwei Minuten, ein Stift, ehrliche Antworten.

## Die acht Fragen

1. Ich tippe, ohne auf die Tastatur zu schauen.
2. Ich nutze alle zehn Finger, auch die kleinen.
3. Meine Finger kehren nach jedem Anschlag in die Grundstellung zurück.
4. Ich finde F und J blind über die Noppen.
5. Ich tippe Zahlen und Sonderzeichen, ohne zu suchen.
6. Ich schaffe mehr als 40 Wörter pro Minute.
7. Ich mache weniger als 5 Prozent Fehler.
8. Ich nutze Shortcuts wie Ctrl + C statt der Maus.

## Die Auswertung

- **0 bis 2 Ja:** Neustart. Beginne mit Lektion 0 im [10-Finger-System-Kurs](page:lessons), 15 Minuten am Tag. Das ist kein Rückschritt, sondern der schnellste Weg: Wer Gewohnheiten mit vier Fingern hat, lernt die zehn am besten von Grund auf.
- **3 bis 5 Ja:** Ausbau. Mach die kostenlose [Einstufung](page:placement). Sie prüft jede Taste einzeln und zeigt, welche Lektionen du überspringen kannst.
- **6 bis 8 Ja:** Feinschliff. Miss deine [Tippgeschwindigkeit](page:speedTest), arbeite an Zahlen und Sonderzeichen und hol dir das Zertifikat als Nachweis.

## Warum die Fragen so gewählt sind

Die Fragen 1 bis 4 fragen nach der Technik, 5 bis 8 nach dem Ergebnis. Die Aalto-Studie mit 168.000 Teilnehmern zeigt, dass beides zusammenhängt: Wer den Blick auf dem Bildschirm hält und feste Finger-Tasten-Zuordnungen hat, tippt schneller, unabhängig davon, ob er die Methode je formal gelernt hat. Die Schwelle von 40 WPM in Frage 6 liegt bewusst unter dem Studiendurchschnitt von 51,6, aber deutlich über den 27 WPM eines Zwei-Finger-Tippers. Wer sie erreicht, hat die Grundlagen. Die 5 Prozent in Frage 7 sind die Grenze, ab der Korrekturen mehr Zeit kosten als das Tempo bringt.

## Profi-Tipp

Beantworte Frage 1 mit einem Trick: Leg ein Handtuch über die Tastatur und schreib einen Satz. Wenn das Ergebnis lesbar ist, ist die Antwort Ja. Die meisten Menschen überschätzen, wie selten sie hinsehen.

## Nächster Schritt

Wer bei Stufe 1 oder 2 landet, druckt sich die [Finger-Tastatur-Karte](article:finger-tastatur-karte-qwertz) dazu und startet den [Fortschritts-Tracker](article:fortschritts-tracker-4-wochen). Was hinter den Zahlen steckt, erklärt der Artikel zur [Tippgeschwindigkeit](article:tipptest).

## Quellen

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University und University of Cambridge, CHI 2018: 168.000 Teilnehmer, Durchschnitt 51,6 WPM, unkorrigierte Fehlerrate 1,167 Prozent.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: Blick auf den Bildschirm und feste Finger-Tasten-Zuordnung sagen die Geschwindigkeit voraus, auch ohne formales Training.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, englisch) - Zwei-Finger-Tipper etwa 27 WPM.`,
  },
  {
    slug: "sonderzeichen-karte-qwertz",
    locale: "de",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Sonderzeichen Tastatur: @, €, Klammern blind tippen",
    description: "Wo liegen @, €, %, Klammern, Backslash und Tilde auf der deutschen Tastatur? Die Sonderzeichen-Karte zeigt Taste, Umschalttaste und Finger für 24 Zeichen. PDF.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Arbeitsblatt",
    content: `Das @-Zeichen liegt auf der deutschen Tastatur auf AltGr + Q, das Euro-Zeichen auf AltGr + E, die geschweiften Klammern auf AltGr + 7 und AltGr + 0. Wer das nicht weiß, sucht bei jeder E-Mail-Adresse und jedem Preis. Die Sonderzeichen-Karte listet 24 Zeichen, die im Büro am häufigsten gebraucht werden, mit Tastenkombination und zuständigem Finger. Dazu drei leere Zeilen für die Zeichen, die nur du brauchst.

## Was auf dem Blatt steht

- 24 Sonderzeichen in zwei Spalten: @, €, %, &, Schrägstrich, Klammern rund, eckig und geschweift, Fragezeichen, Anführungszeichen, Paragraf, Dollar, Backslash, senkrechter Strich, Tilde, Stern, Semikolon, Doppelpunkt, Unterstrich, Apostroph
- Zu jedem Zeichen die Tasten als Chips: Shift oder AltGr plus Taste
- Der zuständige Finger mit Farbpunkt, passend zur Finger-Tastatur-Karte
- Drei Zeilen "Meine eigenen" für Zeichen aus deinem Fachgebiet

## Die drei Regeln für Sonderzeichen

**Shift mit der anderen Hand.** Das Prozentzeichen liegt auf Shift + 5, die 5 tippt der linke Zeigefinger, also hält der rechte kleine Finger die Shift-Taste. Wer Shift und Zeichen mit derselben Hand drückt, verlässt die Grundstellung und muss danach neu ansetzen.

**AltGr immer mit dem rechten Daumen.** AltGr liegt rechts neben der Leertaste. Der Daumen ist ohnehin dort. @, €, Klammern und Backslash werden dadurch zu Zwei-Finger-Griffen statt zu Verrenkungen.

**Zeichen, nicht Position lernen.** Die Belegung der deutschen Tastatur ist in DIN 2137 festgelegt und auf jeder QWERTZ-Tastatur gleich. Einmal gelernt, gilt sie am Laptop, am externen Keyboard und am Rechner der Kollegin.

## So nutzt du die Karte

1. Markiere die fünf Zeichen, die du täglich brauchst. Für die meisten sind das @, €, Schrägstrich, Klammern und Prozent.
2. Übe genau diese fünf eine Woche lang bewusst mit dem richtigen Finger, auch wenn es anfangs langsamer ist.
3. Trag in "Meine eigenen" ein, was dein Job verlangt: Programmierer geschweifte Klammern und Pipe, Buchhalter Prozent und Paragraf, Übersetzer Anführungszeichen und Gedankenstrich.
4. Wenn die Tasten der Hauptreihen noch nicht sitzen, zuerst dorthin: die [Finger-Tastatur-Karte](article:finger-tastatur-karte-qwertz) zeigt die Grundbelegung.

## Profi-Tipp

Für Zeichen ohne eigene Taste, etwa Gedankenstrich oder Anführungszeichen unten, lohnt sich auf Windows die Emoji- und Symboltastatur über Win + Punkt. Wie das geht, steht im Artikel zu [Emojis und Symbolen per Tastatur](article:emoji-tastenkombinationen).

## Nächster Schritt

Sonderzeichen sind die letzte Stufe, nicht die erste. Wer noch nach Buchstaben sucht, startet mit dem [Guide zum 10-Finger-Schreiben](article:zehn-finger-schreiben-lernen) oder direkt im [Kurs](page:lessons). Wer die Buchstaben blind trifft, prüft mit dem kostenlosen Test der [Tippgeschwindigkeit](page:speedTest), wie viel die Zeichen bremsen. Und wer viele Zahlen tippt, nimmt die [Nummernblock-Karte](article:nummernblock-karte) dazu.

## Quellen

- [Tastaturbelegung](https://de.wikipedia.org/wiki/Tastaturbelegung) (Wikipedia) - deutsche Tastaturbelegung T1 nach DIN 2137, Belegung der Ebenen Shift und AltGr.
- [Tastenkombinationen in Windows](https://support.microsoft.com/de-de/windows/tastenkombinationen-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Microsoft Support, inklusive Windows-Logo-Taste + Punkt für die Symboltastatur.`,
  },

  // ------------------------------------------------------------ EN
  {
    slug: "finger-keyboard-map-qwerty",
    locale: "en",
    type: "lead-magnet",
    category: "learning",
    title: "Touch Typing Finger Chart: Which Finger Types Which Key?",
    description: "The finger keyboard map for QWERTY shows touch typing finger placement at a glance: color zones, home row, both hands. Free printable PDF for your desk.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Worksheet",
    content: `In touch typing every key belongs to one finger: the left pinky types Q, A, Z and 1, the right index finger H, J, N, M, 6 and 7, the thumbs the space bar. The finger keyboard map shows this placement for the QWERTY keyboard as color zones, with both hands resting on the home row. Print it, keep it next to the keyboard, and every time you are unsure about a key your eyes go to the sheet instead of the keys.

## What is on the sheet

- The full QWERTY keyboard with one color per finger: eight fingers, eight colors, grey for the thumbs
- The home position A S D F and J K L ; marked, with the bumps on F and J highlighted
- Two hands with colored fingertips so the assignment sinks in without thinking
- Three rules that make the difference: wrists float, eyes on the screen, accuracy before speed

## Why finger placement matters this much

Fast typists differ from slow ones not by talent but by fixed finger-to-key assignment, little hand movement and eyes on the screen. That is the finding of the Aalto University study "How We Type", which tracked hand movements of typists at every level. Someone typing with six fingers moves the whole hand across the keyboard and has to look. Someone with all ten fingers assigned reaches every key from the home row without shifting the hand. The same group's study of 136 million keystrokes adds the number: fast typists use 8.4 fingers on average, slow ones 5.3.

## How to use the map

1. Print it, in color if you can, and put it to the right of your keyboard.
2. Fingers on the home row: left hand on A S D F, right hand on J K L ;. The index fingers feel the bumps.
3. For every key you would search for, look at the map, never at the keyboard. After the keystroke the finger returns to the home row.
4. After one or two weeks you only need the map for numbers and symbols. Then it goes in the drawer.

The map is not a course, it is the map for one. The lessons in the [touch typing course](page:lessons) walk through the same layout row by row, with real words instead of letter salad.

## Pro tip

Don't lay the map flat, lean it against the monitor. Your eyes then move up to the screen, not down to the keys, and that is exactly the habit you want to build. If you don't know which keys you already have, take the free [placement test](page:placement) first: it checks every key and suggests where to start.

## Next step

The map shows the layout, practice makes it stick. The [guide to learning touch typing](article:learn-touch-typing) explains the method step by step, and the [blank keyboard layout to fill in](article:blank-layout-qwerty) tells you after a week which keys really sit. Different keyboard? The [keyboard layout tool](page:keyboardLayouts) shows the differences between QWERTY, QWERTZ and AZERTY.

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: fixed finger-to-key assignment, preparing the next keystroke and little hand movement predict typing speed.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: fast typists use 8.4 fingers on average, slow ones 5.3.
- [Touch typing](https://en.wikipedia.org/wiki/Touch_typing) (Wikipedia) - home row and standard finger assignment on the QWERTY keyboard.`,
  },
  {
    slug: "blank-layout-qwerty",
    locale: "en",
    type: "lead-magnet",
    category: "learning",
    title: "Blank Keyboard Layout to Fill In: The 2-Minute Test",
    description: "Printable blank QWERTY keyboard: write in every key from memory and see in two minutes which ones you still have to look for. Free PDF, no sign-up.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Worksheet",
    content: `A blank keyboard to fill in is the most honest test of whether touch typing has stuck: you write every letter, digit and symbol from memory without looking at the real keyboard. Whatever is missing or lands in the wrong place is not in your muscle memory yet. The PDF has two blank QWERTY layouts on one page, with color zones per finger and fields for time, correct and missing keys. No form, direct download.

## What is on the sheet

- Two blank QWERTY keyboards, only the control keys labeled, every character key empty
- Color zones per finger as a hint: you see which finger is responsible, not which key sits there
- Under each keyboard three fields: time, correct, missing, so you can compare two rounds

## Why a dry run works

Learning research calls it retrieval practice: what you have to pull from memory stays far longer than what you merely look at again. Roediger and Karpicke showed this in "Test-Enhanced Learning", where testing clearly beat rereading for retention after one week. Typing is the same: looking at the keyboard is rereading, filling in the blank sheet is retrieval. And the side effect is a diagnosis. After two minutes your personal practice list is on the table.

## How to use the sheet

1. Cover the keyboard or close the laptop. Start a timer.
2. Fill in every letter, digit and symbol row by row without checking.
3. Compare with the [finger keyboard map](article:finger-keyboard-map-qwerty). Mark missing and swapped keys, write the number under "missing".
4. Practice exactly those keys for a week, then fill in the second layout and compare the times.

This is the paper version of what the [placement test](page:placement) does automatically: it measures every key and builds your training plan from it. The sheet is for in between, on the train, at lunch, without a screen.

## Pro tip

Don't fill in the layout with the pen in your writing hand alone: tap each key in the air with the responsible finger before you write it down. The movement is what you want to keep, not the picture of the keyboard. Once the letters sit, do a second round with digits and symbols only. Those are the ones almost everyone forgets first.

## Next step

Many keys missing? Then the [guide to learning touch typing](article:learn-touch-typing) is the right start. Most of them there? Measure your [typing speed](page:speedTest) and write the value into the [progress tracker](article:progress-tracker-4-weeks). Four weeks later you compare.

## Sources

- [Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention](https://doi.org/10.1111/j.1467-9280.2006.01693.x) - Roediger and Karpicke, Psychological Science 2006: retrieval practice beats rereading for retention after one week.
- [Touch typing](https://en.wikipedia.org/wiki/Touch_typing) (Wikipedia) - home row and standard finger assignment.`,
  },
  {
    slug: "progress-tracker-4-weeks",
    locale: "en",
    type: "lead-magnet",
    category: "learning",
    title: "Typing Practice Log: The Printable 4-Week Progress Tracker",
    description: "A progress tracker for 28 practice days: lesson, WPM, accuracy and minutes per day, with starting value and weekly goal. Keeps daily practice on track. PDF.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Worksheet",
    content: `Typing practice works better with 10 to 15 minutes a day over four weeks than with two hours on a weekend. The progress tracker turns that into a table: 28 lines, one per practice day, with lesson, typing speed in WPM, accuracy and minutes. At the top you write the starting value from the placement test, at the bottom after four weeks the new one. The gap between them is your result.

## What is on the sheet

- Starting value: WPM and accuracy from the placement test or your first speed test, with date
- Four weekly blocks of seven lines each: day, lesson, WPM, accuracy, minutes, note
- One weekly goal per block that you set yourself
- The closing line: measure again after 28 days and compare with the starting value

## Why short and daily beats long and rare

Cepeda and colleagues showed in a review of 254 studies that spaced practice with breaks in between beats massed practice for retention. With typing there is a second effect: the movements are consolidated during sleep. Ten minutes today and ten tomorrow do more than twenty in one go. The tracker keeps exactly this rhythm, because an empty line in the weekly block stays visible.

The second reason is motivation. Whoever sees progress keeps going. The Aalto study with 168,000 participants provides the scale: the average is 51.6 WPM, two-finger typists sit at about 27. Between those two numbers lies the road the tracker documents.

## How to use the tracker

1. Start with the free [placement test](page:placement) and write WPM and accuracy in as your starting value. No starting value, no comparison.
2. Set a realistic weekly goal: plus 3 to 5 WPM per week is normal with daily practice, more is not needed.
3. After every lesson in the [course](page:lessons), fill in one line. The values are shown at the end of each lesson.
4. After 28 days, take the [typing speed test](page:speedTest) and compare with the starting value.

## Pro tip

The "note" column is the most important one. Write down which key tripped you up today: "semicolon", "left shift", "numbers". After a week the pattern shows, and those are the keys you practice on purpose. Accuracy before speed: if the error rate is above 5 percent, the pace is too high, whatever the WPM number says.

## Next step

How the lessons are built is in the [guide to learning touch typing](article:learn-touch-typing). What counts as a good WPM value is explained in the article on [typing speed and its benchmarks](article:typing-test). And if you want to know where you stand first: the [self-test with eight questions](article:self-test-where-do-you-stand).

## Sources

- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006: spaced practice beats massed practice (spacing effect), review of 254 studies.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - two-finger typists at about 27 WPM when copying.`,
  },
  {
    slug: "numpad-map",
    locale: "en",
    type: "lead-magnet",
    category: "shortcuts",
    title: "10-Key Typing: Finger Placement on the Numeric Keypad",
    description: "Type numbers without looking: home position 4-5-6, which finger hits which digit, Enter and Plus with the pinky. The numpad map as a printable PDF.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Worksheet",
    content: `On the numeric keypad the right hand rests on 4, 5 and 6: index finger on the 4, middle finger on the 5 with the bump, ring finger on the 6. From there each finger reaches its column up and down, the thumb types the 0, the pinky Enter, Plus and Minus. Once that is second nature you enter columns of numbers without looking. The numpad map shows the assignment as a color-coded keypad with a table, ready to print.

## What is on the sheet

- The full numeric keypad with one color per finger, bump on the 5 marked
- The assignment table: index finger 7, 4, 1 and Num Lock; middle finger 8, 5, 2 and slash; ring finger 9, 6, 3, star and period; pinky minus, plus and Enter; thumb 0
- The one hint that makes the difference: eyes on the source document, not on the keypad

## Who this is for

Accounting, controlling, admin work, point-of-sale systems, data entry: wherever numbers travel from a document into a table, the keypad beats the number row of the main keyboard. The keys sit close together, every digit is one finger away, and the right hand stays in one place. The number row on top, by contrast, demands jumps out of the home position and is slower for pure number entry.

In the US the skill is called 10-key and is tested separately for bookkeeping jobs, measured in keystrokes per hour. Anyone who runs the keypad blind has a measurable edge there.

## How to use the map

1. Right hand on 4-5-6, middle finger feels the bump. Thumb loose above the 0.
2. Two minutes on the home row only: 4 5 6, 6 5 4, 5 4 6. Then the row above, then the row below.
3. Copy columns of numbers from a document, eyes on the document. Back to 4-5-6 after every number.
4. Enter with the pinky, never with the index finger. That is the most common mistake and it costs you the home position every time.

The course covers numbers in the later lessons on the number row. The numpad map adds the keypad for everyone who has one and works with spreadsheets all day. How the assignment looks on the main keyboard is on the [finger keyboard map](article:finger-keyboard-map-qwerty).

## Pro tip

Laptop without a keypad? An external keypad costs 15 to 25 euros and pays off if you enter numbers daily. For everyone else: mastering the number row blind is enough, and that is exactly what the [lessons in the touch typing course](page:lessons) practice.

## Next step

Numbers are one thing, symbols the other: the [special characters sheet](article:special-characters-qwerty) shows where @, #, percent and brackets live. And to see how fast the letters already are, take the free [typing speed test](page:speedTest).

## Sources

- [Numeric keypad](https://en.wikipedia.org/wiki/Numeric_keypad) (Wikipedia) - layout of the keypad, bump on the 5, origins in adding machines.
- [Touch typing](https://en.wikipedia.org/wiki/Touch_typing) (Wikipedia) - home position and finger assignment, including the keypad.`,
  },
  {
    slug: "poster-which-finger-types-what-qwerty",
    locale: "en",
    type: "lead-magnet",
    category: "productivity",
    title: "Keyboard Poster for the Office: Which Finger Types What?",
    description: "Touch typing finger placement as one big QWERTY keyboard with color zones and hardly any text. For the office, home office and training room. A4 landscape PDF.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Poster",
    content: `A keyboard poster on the wall reminds the whole team every day which finger types which key, without anyone hunting for a sheet on their desk. This poster shows the QWERTY keyboard large in landscape, one color per finger, home row marked, and a single line of text. For the wall behind the monitors, the training room or the kitchen where people argue about shortcuts.

## What is on the poster

- The QWERTY keyboard at full width, every key in the color of its finger
- Home position A S D F and J K L ; marked, bumps on F and J
- The legend with all eight fingers and the thumbs
- One line: home position, thumbs on the space bar, eyes forward

No explanation, no rules. A poster is read from two meters away, in two seconds.

## Why a poster works in an office

Most office workers type with four to six fingers and know it could be better. They just don't talk about it. A poster takes the topic out of the embarrassment corner and makes it something everyone sees and is allowed to discuss. The second effect is repetition: whoever walks past the color assignment daily has it in their head after two weeks without ever practicing. The practice itself then takes less time.

At two hours of typing a day per person, every improvement adds up: going from 30 to 50 WPM saves more than a third of the typing time for the same amount of text. The math is on the [page for companies](page:companies).

## How to use it

1. Print in color on A4 landscape, better A3 if the printer can. The layout scales without losing quality.
2. Hang it at eye level next to the monitors, not behind people's backs.
3. Anyone who wants the details gets the [finger keyboard map](article:finger-keyboard-map-qwerty) with hands and rules for their own desk.
4. As the start of a team training: everyone takes the [typing speed test](page:speedTest) once, the result goes on a note next to the poster. Four weeks later, again.

## Pro tip

Don't hang the poster without a reason. Combine it with a number: the team average from the first test. A visible number that can improve turns decoration into a goal.

## Next step

For teams there is the training with before-and-after measurement and a certificate per participant, details on the [page for companies](page:companies). For the individual, the [guide to learning touch typing](article:learn-touch-typing) is the start.

## Sources

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, fast typists use 8.4 fingers on average, slow ones 5.3.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - two-finger typists at about 27 WPM when copying, professionals 43 to 80 WPM.`,
  },
  {
    slug: "self-test-where-do-you-stand",
    locale: "en",
    type: "lead-magnet",
    category: "learning",
    title: "How Good Is My Typing? The Printable 8-Question Self-Test",
    description: "Eight yes/no questions show whether you have touch typing down, should build on it or start from scratch. Three levels, each with its starting point. PDF.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Worksheet",
    content: `How good your typing is, eight questions reveal faster than any test: do you look at the keyboard? Do you use all ten fingers? Can you find F and J without looking? The printable self-test counts your yes answers and places you in one of three levels. Each level has a different starting point, from lesson 0 to the certificate. Two minutes, a pen, honest answers.

## The eight questions

1. I type without looking at the keyboard.
2. I use all ten fingers, including the pinkies.
3. My fingers return to the home position after every keystroke.
4. I find F and J by the bumps without looking.
5. I type numbers and symbols without searching.
6. I type more than 40 words per minute.
7. I make fewer than 5 percent errors.
8. I use shortcuts like Ctrl + C instead of the mouse.

## The result

- **0 to 2 yes:** Fresh start. Begin with lesson 0 in the [touch typing course](page:lessons), 15 minutes a day. That is not a step back but the fastest route: anyone with four-finger habits learns the ten best from scratch.
- **3 to 5 yes:** Build-up. Take the free [placement test](page:placement). It checks every key and shows which lessons you can skip.
- **6 to 8 yes:** Fine-tuning. Measure your [typing speed](page:speedTest), work on numbers and symbols and get the certificate as proof.

## Why these questions

Questions 1 to 4 ask about technique, 5 to 8 about results. The Aalto study with 168,000 participants shows the two are linked: whoever keeps their eyes on the screen and has fixed finger-to-key assignments types faster, whether or not they ever formally learned the method. The 40 WPM threshold in question 6 sits deliberately below the study average of 51.6 but well above the 27 WPM of a two-finger typist. Reaching it means the basics are there. The 5 percent in question 7 is the line above which corrections cost more time than the speed gains.

## Pro tip

Answer question 1 with a trick: put a towel over the keyboard and write one sentence. If the result is readable, the answer is yes. Most people overestimate how rarely they look.

## Next step

Anyone landing on level 1 or 2 prints the [finger keyboard map](article:finger-keyboard-map-qwerty) as well and starts the [progress tracker](article:progress-tracker-4-weeks). What is behind the numbers is explained in the article on [typing speed](article:typing-test).

## Sources

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University and University of Cambridge, CHI 2018: 168,000 participants, average 51.6 WPM, uncorrected error rate 1.167 percent.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016: eyes on the screen and fixed finger-to-key assignment predict speed, even without formal training.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia) - two-finger typists at about 27 WPM.`,
  },
  {
    slug: "special-characters-qwerty",
    locale: "en",
    type: "lead-magnet",
    category: "shortcuts",
    title: "How to Type Special Characters: @, #, Brackets and More",
    description: "Where are @, #, %, brackets, backslash and tilde on the US keyboard? The sheet shows key, modifier and finger for 22 characters. Printable PDF.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Worksheet",
    content: `On the US QWERTY keyboard the @ sign is Shift + 2, the hash Shift + 3, curly brackets Shift + [ and Shift + ]. Whoever doesn't know that searches at every email address and every code block. The special characters sheet lists 22 characters that come up most at work, with the key combination and the responsible finger. Plus three empty lines for the characters only you need.

## What is on the sheet

- 22 special characters in two columns: @, #, $, %, ^, &, *, round, square and curly brackets, underscore, plus, pipe, colon, double quote, angle brackets, question mark, tilde, exclamation mark, euro sign
- For each character the keys as chips: Shift plus key, or the Alt code for the euro sign
- The responsible finger with a color dot, matching the finger keyboard map
- Three lines "my own" for characters from your field

## Three rules for special characters

**Shift with the other hand.** The percent sign is Shift + 5, the 5 is typed by the left index finger, so the right pinky holds Shift. Pressing Shift and the character with the same hand leaves the home position and you have to reset afterwards.

**Punctuation belongs to the right pinky.** Semicolon, quote, brackets, backslash and slash all sit at the right edge, and the pinky types them from the home row without the hand moving. Once you trust the pinky with them, the whole right hand stays put.

**Learn the character, not the position.** The US layout is the same on every QWERTY keyboard in the office. Learned once, it works on the laptop, the external keyboard and your colleague's machine. If you switch between layouts, the [keyboard layout tool](page:keyboardLayouts) shows what moves.

## How to use the sheet

1. Mark the five characters you need daily. For most people that is @, slash, brackets, percent and the hash.
2. Practice exactly those five for a week with the right finger on purpose, even if it is slower at first.
3. Write in "my own" what your job demands: programmers curly brackets and pipe, accountants percent and plus, writers quotes and the em dash.
4. If the letter rows don't sit yet, go there first: the [finger keyboard map](article:finger-keyboard-map-qwerty) shows the base layout.

## Pro tip

For characters without their own key, such as the euro sign or an em dash, Windows has the emoji and symbol panel on Win + period, and the Mac has Option combinations. How that works is in the article on [typing emojis and symbols from the keyboard](article:emoji-keyboard-shortcuts).

## Next step

Special characters are the last stage, not the first. Anyone still searching for letters starts with the [guide to learning touch typing](article:learn-touch-typing) or directly in the [course](page:lessons). Anyone hitting the letters blind checks with the free [typing speed test](page:speedTest) how much the symbols slow them down. And anyone typing a lot of numbers adds the [numpad map](article:numpad-map).

## Sources

- [QWERTY](https://en.wikipedia.org/wiki/QWERTY) (Wikipedia) - the US layout and its shifted characters.
- [Keyboard shortcuts in Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Microsoft Support, including Windows logo key + period for the symbol panel.`,
  },

  // ------------------------------------------------------------ FR
  {
    slug: "carte-doigts-clavier-azerty",
    locale: "fr",
    type: "lead-magnet",
    category: "learning",
    title: "Position des doigts sur le clavier AZERTY : quel doigt où ?",
    description: "La carte doigts-clavier AZERTY montre la position des doigts en dactylographie : zones de couleur, rangée de base, les deux mains. PDF à imprimer.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Fiche à imprimer",
    content: `En dactylographie, chaque touche a son doigt : l'auriculaire gauche tape A, Q, W et le &, l'index droit H, J, N et les touches - et è, les pouces la barre d'espace. La carte doigts-clavier montre cette position des doigts pour le clavier AZERTY sous forme de zones de couleur, avec les deux mains en position de base. Tu l'imprimes, tu la poses à côté du clavier, et à chaque touche incertaine, le regard va sur la fiche au lieu d'aller sur les touches.

## Ce que contient la fiche

- Le clavier AZERTY complet avec une couleur par doigt : huit doigts, huit couleurs, gris pour les pouces
- La position de base Q S D F et J K L M marquée, avec les repères sur F et J mis en évidence
- Deux mains aux bouts de doigts colorés, pour que l'attribution devienne automatique
- Trois règles qui font la différence : poignets qui flottent, yeux sur l'écran, précision avant vitesse

## Pourquoi la position des doigts compte autant

Les typistes rapides ne se distinguent pas des lents par le talent, mais par une attribution fixe doigt-touche, peu de mouvement des mains et le regard sur l'écran. C'est le résultat de l'étude « How We Type » de l'université Aalto, qui a suivi les mouvements des mains de typistes de tous niveaux. Qui tape avec six doigts déplace toute la main sur le clavier et doit regarder. Qui a dix doigts attribués atteint chaque touche depuis la rangée de base sans bouger la main. L'étude du même groupe sur 136 millions de frappes donne le chiffre : les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.

## Comment utiliser la carte

1. Imprime-la, en couleur si possible, et pose-la à droite du clavier.
2. Doigts sur la rangée de base : main gauche sur Q S D F, main droite sur J K L M. Les index sentent les repères.
3. Pour chaque touche que tu chercherais, regarde la carte, jamais le clavier. Après la frappe, le doigt revient sur la rangée de base.
4. Après une ou deux semaines, la carte ne sert plus que pour les chiffres et les caractères spéciaux. Ensuite, direction le tiroir.

La carte ne remplace pas un cours, c'est la carte routière du cours. Les leçons du [cours de dactylographie](page:lessons) parcourent la même disposition rangée par rangée, avec de vrais mots au lieu de lettres en vrac.

## Astuce pro

Ne pose pas la carte à plat, cale-la contre l'écran. Le regard monte alors vers l'écran au lieu de descendre vers les touches, et c'est exactement l'habitude à prendre. Si tu ne sais pas quelles touches sont déjà acquises, fais d'abord l'[évaluation gratuite](page:placement) : elle vérifie chaque touche et propose par où commencer.

## Prochaine étape

La carte montre la disposition, c'est la pratique qui la fixe. Le [guide pour apprendre la dactylographie](article:apprendre-dactylographie) explique la méthode pas à pas, et le [clavier vierge à compléter](article:clavier-vierge-azerty) te dit après une semaine quelles touches sont vraiment acquises. Un autre clavier ? L'[outil de comparaison des claviers](page:keyboardLayouts) montre les différences entre AZERTY, QWERTY et QWERTZ.

## Sources

- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : une attribution fixe doigt-touche, la préparation de la frappe suivante et peu de mouvement des mains prédisent la vitesse.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.
- [AZERTY](https://fr.wikipedia.org/wiki/AZERTY) (Wikipédia) - disposition du clavier français et ses particularités.`,
  },
  {
    slug: "clavier-vierge-azerty",
    locale: "fr",
    type: "lead-magnet",
    category: "learning",
    title: "Clavier vierge à imprimer : le test de 2 minutes",
    description: "Clavier AZERTY vierge à imprimer : place chaque touche de mémoire et vois en deux minutes lesquelles tu cherches encore. PDF gratuit, sans inscription.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Fiche à imprimer",
    content: `Un clavier vierge à compléter est le test le plus honnête pour savoir si la dactylographie est acquise : tu écris toutes les lettres, chiffres et signes de mémoire, sans regarder le vrai clavier. Ce qui manque ou atterrit au mauvais endroit n'est pas encore dans ta mémoire musculaire. Le PDF présente deux claviers AZERTY vierges sur une page, avec les zones de couleur par doigt et des cases pour le temps, les touches justes et les manquantes. Pas de formulaire, téléchargement direct.

## Ce que contient la fiche

- Deux claviers AZERTY vierges, seules les touches de commande sont étiquetées, toutes les touches de caractères sont libres
- Les zones de couleur par doigt comme aide : tu vois quel doigt est responsable, pas quelle touche s'y trouve
- Sous chaque clavier, trois cases : temps, justes, manquantes, pour comparer deux passages

## Pourquoi l'entraînement à sec fonctionne

La recherche sur l'apprentissage appelle ça la pratique de récupération : ce qu'on doit aller chercher en mémoire reste bien plus longtemps que ce qu'on se contente de relire. Roediger et Karpicke l'ont montré dans « Test-Enhanced Learning », où se tester battait nettement la relecture pour la rétention après une semaine. Pour la frappe, c'est pareil : regarder le clavier, c'est relire ; remplir la fiche vierge, c'est récupérer. Et l'effet secondaire, c'est le diagnostic. Après deux minutes, ta liste d'exercices personnelle est sur la table.

## Comment utiliser la fiche

1. Couvre le clavier ou ferme l'ordinateur portable. Lance le chrono.
2. Place toutes les lettres, chiffres et signes rangée par rangée, sans vérifier.
3. Compare avec la [carte doigts-clavier](article:carte-doigts-clavier-azerty). Marque les touches manquantes ou inversées, note le nombre dans « manquantes ».
4. Travaille exactement ces touches pendant une semaine, puis remplis le second clavier et compare les temps.

C'est la version papier de ce que l'[évaluation](page:placement) fait automatiquement : elle mesure chaque touche et en déduit ton plan d'entraînement. La fiche, c'est pour les moments sans écran : dans le train, à la pause déjeuner.

## Astuce pro

Ne remplis pas le clavier uniquement avec le stylo : tape chaque touche dans le vide avec le doigt responsable avant de l'écrire. C'est le mouvement que tu veux retenir, pas l'image du clavier. Et quand les lettres sont acquises, fais un second tour avec les chiffres et les caractères spéciaux seulement. Ce sont ceux que presque tout le monde oublie en premier.

## Prochaine étape

Beaucoup de touches manquantes ? Le [guide pour apprendre la dactylographie](article:apprendre-dactylographie) est le bon point de départ. La plupart sont là ? Mesure ta [vitesse de frappe](page:speedTest) et note la valeur dans le [suivi de progression](article:suivi-progression-4-semaines). Quatre semaines plus tard, tu compares.

## Sources

- [Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention](https://doi.org/10.1111/j.1467-9280.2006.01693.x) - Roediger et Karpicke, Psychological Science 2006 : la pratique de récupération bat la relecture pour la rétention après une semaine.
- [AZERTY](https://fr.wikipedia.org/wiki/AZERTY) (Wikipédia) - disposition du clavier français.`,
  },
  {
    slug: "suivi-progression-4-semaines",
    locale: "fr",
    type: "lead-magnet",
    category: "learning",
    title: "S'entraîner à taper : le suivi de progression 4 semaines",
    description: "Suivi de progression pour 28 séances : leçon, MPM, précision et minutes par jour, avec valeur de départ et objectif hebdomadaire. PDF à imprimer.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Fiche à imprimer",
    content: `S'entraîner à taper au clavier fonctionne mieux avec 10 à 15 minutes par jour pendant quatre semaines qu'avec deux heures le week-end. Le suivi de progression en fait un tableau : 28 lignes, une par séance, avec la leçon, la vitesse de frappe en mots par minute, la précision et les minutes. En haut, tu notes la valeur de départ issue de l'évaluation ; en bas, après quatre semaines, la nouvelle valeur. L'écart entre les deux, c'est ton résultat.

## Ce que contient la fiche

- Valeur de départ : MPM et précision issus de l'évaluation ou du premier test, avec la date
- Quatre blocs hebdomadaires de sept lignes : jour, leçon, MPM, précision, minutes, note
- Un objectif par semaine, que tu fixes toi-même
- La ligne de clôture : mesurer à nouveau après 28 jours et comparer avec la valeur de départ

## Pourquoi court et quotidien bat long et rare

Cepeda et ses collègues ont montré dans une synthèse de 254 études que la pratique espacée, avec des pauses, l'emporte sur la pratique massée pour la rétention. Pour la frappe s'ajoute un second effet : les mouvements se consolident pendant le sommeil. Dix minutes aujourd'hui et dix demain valent plus que vingt d'un coup. Le suivi impose exactement ce rythme, parce qu'une ligne vide dans le bloc de la semaine reste visible.

La seconde raison, c'est la motivation. Qui voit ses progrès continue. L'étude Aalto avec 168 000 participants donne l'échelle : la moyenne est de 51,6 MPM, les typistes à deux doigts sont autour de 27. Entre ces deux chiffres se trouve le chemin que le suivi documente.

## Comment utiliser le suivi

1. Commence par l'[évaluation gratuite](page:placement) et note MPM et précision comme valeur de départ. Sans valeur de départ, pas de comparaison.
2. Fixe un objectif hebdomadaire réaliste : plus 3 à 5 MPM par semaine est normal avec une pratique quotidienne, pas besoin de plus.
3. Après chaque leçon du [cours](page:lessons), remplis une ligne. Les valeurs s'affichent à la fin de chaque leçon.
4. Après 28 jours, refais le [test de vitesse de frappe](page:speedTest) et compare avec la valeur de départ.

## Astuce pro

La colonne « note » est la plus importante. Écris quelle touche a coincé aujourd'hui : « m », « Maj gauche », « chiffres ». Après une semaine, le schéma apparaît, et ce sont ces touches que tu travailles exprès. Précision avant vitesse : si le taux d'erreur dépasse 5 %, le rythme est trop élevé, quoi que dise le chiffre des MPM.

## Prochaine étape

La construction des leçons est expliquée dans le [guide pour apprendre la dactylographie](article:apprendre-dactylographie). Ce qu'est une bonne valeur en MPM, c'est dans l'article sur le [test de frappe et ses repères](article:test-de-frappe). Et pour savoir d'abord où tu en es : l'[auto-évaluation en huit questions](article:auto-evaluation-ou-en-es-tu).

## Sources

- [Distributed practice in verbal recall tasks: A review and quantitative synthesis](https://doi.org/10.1037/0033-2909.132.3.354) - Cepeda et al., Psychological Bulletin 2006 : la pratique espacée bat la pratique massée (effet d'espacement), synthèse de 254 études.
- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - typistes à deux doigts environ 27 MPM en recopiant.`,
  },
  {
    slug: "carte-pave-numerique",
    locale: "fr",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Pavé numérique sans regarder : la position des doigts",
    description: "Taper les chiffres sans regarder : position de base 4-5-6, quel doigt frappe quel chiffre, Entrée et Plus avec l'auriculaire. La carte du pavé numérique en PDF.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Fiche à imprimer",
    content: `Sur le pavé numérique, la main droite repose sur 4, 5 et 6 : index sur le 4, majeur sur le 5 avec son repère, annulaire sur le 6. De là, chaque doigt atteint sa colonne vers le haut et vers le bas, le pouce frappe le 0, l'auriculaire Entrée, Plus et Moins. Une fois que c'est acquis, tu saisis des colonnes de chiffres sans regarder. La carte du pavé numérique montre l'attribution sous forme de pavé coloré avec un tableau, à imprimer.

## Ce que contient la fiche

- Le pavé numérique complet avec une couleur par doigt, repère sur le 5 marqué
- Le tableau d'attribution : index 7, 4, 1 et Verr num ; majeur 8, 5, 2 et barre oblique ; annulaire 9, 6, 3, étoile et point ; auriculaire moins, plus et Entrée ; pouce 0
- Le conseil qui change tout : les yeux sur le document source, pas sur le pavé

## Pour qui c'est utile

Comptabilité, contrôle de gestion, administration, caisses, saisie de données : partout où des chiffres passent d'un document à un tableau, le pavé bat la rangée de chiffres du clavier principal. Les touches sont serrées, chaque chiffre est à un doigt de distance, et la main droite reste au même endroit. Sur le clavier AZERTY, c'est encore plus vrai : les chiffres de la rangée du haut demandent la touche Maj, le pavé non.

Aux États-Unis, la discipline s'appelle « 10-key » et fait l'objet d'un test séparé pour les postes en comptabilité, mesuré en frappes par heure. Qui maîtrise le pavé à l'aveugle a là un avantage mesurable.

## Comment utiliser la carte

1. Main droite sur 4-5-6, le majeur sent le repère. Pouce détendu au-dessus du 0.
2. Deux minutes sur la rangée de base seulement : 4 5 6, 6 5 4, 5 4 6. Puis la rangée du dessus, puis celle du dessous.
3. Recopie des colonnes de chiffres depuis un document, les yeux sur le document. Retour sur 4-5-6 après chaque nombre.
4. Entrée avec l'auriculaire, jamais avec l'index. C'est l'erreur la plus fréquente, et elle coûte la position de base à chaque fois.

Le cours traite les chiffres dans les dernières leçons, sur la rangée du haut. La carte du pavé complète cela pour tous ceux qui en ont un et travaillent dans des tableurs toute la journée. L'attribution sur le clavier principal est sur la [carte doigts-clavier](article:carte-doigts-clavier-azerty).

## Astuce pro

Ordinateur portable sans pavé ? Un pavé externe coûte 15 à 25 euros et se rentabilise si tu saisis des chiffres tous les jours. Pour les autres, maîtriser la rangée de chiffres à l'aveugle suffit, et c'est exactement ce que travaillent les [leçons du cours de dactylographie](page:lessons).

## Prochaine étape

Les chiffres d'un côté, les caractères spéciaux de l'autre : la [fiche des caractères spéciaux](article:caracteres-speciaux-azerty) montre où se trouvent @, €, # et les crochets. Et pour savoir à quelle vitesse les lettres sont déjà acquises, fais le [test de vitesse de frappe](page:speedTest) gratuit.

## Sources

- [Pavé numérique](https://fr.wikipedia.org/wiki/Pav%C3%A9_num%C3%A9rique) (Wikipédia) - disposition du pavé, repère sur le 5, origine dans les machines à calculer.
- [AZERTY](https://fr.wikipedia.org/wiki/AZERTY) (Wikipédia) - les chiffres de la rangée du haut demandent la touche Maj.`,
  },
  {
    slug: "affiche-quel-doigt-tape-quoi-azerty",
    locale: "fr",
    type: "lead-magnet",
    category: "productivity",
    title: "Affiche clavier pour le bureau : quel doigt tape quoi ?",
    description: "La position des doigts sur un grand clavier AZERTY à zones de couleur, presque sans texte. Pour le bureau, le télétravail et la formation. PDF A4 paysage.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Affiche",
    content: `Une affiche clavier au mur rappelle chaque jour à toute l'équipe quel doigt tape quelle touche, sans que personne ne cherche une fiche sur son bureau. Cette affiche montre le clavier AZERTY en grand, au format paysage, une couleur par doigt, la rangée de base marquée, et une seule ligne de texte. Pour le mur derrière les écrans, la salle de formation ou la cuisine où l'on débat des raccourcis clavier.

## Ce que contient l'affiche

- Le clavier AZERTY en pleine largeur, chaque touche dans la couleur de son doigt
- La position de base Q S D F et J K L M marquée, repères sur F et J
- La légende avec les huit doigts et les pouces
- Une ligne : position de base, pouces sur la barre d'espace, regard devant

Pas d'explication, pas de règles. Une affiche se lit à deux mètres, en deux secondes.

## Pourquoi une affiche fonctionne au bureau

La plupart des salariés tapent avec quatre à six doigts et savent que ça pourrait être mieux. Ils n'en parlent simplement pas. Une affiche sort le sujet du registre de la gêne et en fait quelque chose que tout le monde voit et dont on a le droit de parler. Le second effet, c'est la répétition : qui passe chaque jour devant les zones de couleur les a en tête après deux semaines, sans jamais s'être entraîné. L'entraînement lui-même prend ensuite moins de temps.

À deux heures de frappe par jour et par personne, chaque progrès s'additionne : passer de 30 à 50 MPM économise plus d'un tiers du temps de frappe pour le même volume de texte. Le calcul est sur la [page pour les entreprises](page:companies).

## Comment l'utiliser

1. Imprime en couleur sur A4 paysage, mieux en A3 si l'imprimante le permet. La mise en page s'agrandit sans perte de qualité.
2. Accroche-la à hauteur des yeux à côté des écrans, pas dans le dos des gens.
3. Qui veut le détail reçoit la [carte doigts-clavier](article:carte-doigts-clavier-azerty) avec les mains et les règles pour son propre bureau.
4. Comme point de départ d'une formation d'équipe : chacun fait une fois le [test de vitesse de frappe](page:speedTest), le résultat va sur un post-it à côté de l'affiche. Quatre semaines plus tard, on recommence.

## Astuce pro

N'accroche pas l'affiche sans raison. Associe-la à un chiffre : la moyenne de l'équipe au premier test. Un chiffre visible qui peut progresser transforme la décoration en objectif.

## Prochaine étape

Pour les équipes, il y a la formation avec mesure avant-après et certificat par participant, détails sur la [page pour les entreprises](page:companies). Pour une personne seule, le [guide pour apprendre la dactylographie](article:apprendre-dactylographie) est le point de départ.

## Sources

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, les typistes rapides utilisent 8,4 doigts en moyenne, les lents 5,3.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - typistes à deux doigts environ 27 MPM en recopiant, professionnels de 43 à 80 MPM.`,
  },
  {
    slug: "auto-evaluation-ou-en-es-tu",
    locale: "fr",
    type: "lead-magnet",
    category: "learning",
    title: "Est-ce que je tape bien ? Auto-évaluation en 8 questions",
    description: "Huit questions oui/non montrent si tu maîtrises la dactylographie, si tu dois consolider ou repartir de zéro. Trois niveaux, chacun avec son départ. PDF.",
    readingTime: 3,
    date: DATE,
    downloadLabel: "Fiche à imprimer",
    content: `Pour savoir si tu tapes bien, huit questions vont plus vite que n'importe quel test : tu regardes le clavier ? Tu utilises les dix doigts ? Tu trouves F et J sans regarder ? L'auto-évaluation à imprimer compte tes oui et te place dans l'un de trois niveaux. Chaque niveau a son propre point de départ, de la leçon 0 au certificat. Deux minutes, un stylo, des réponses franches.

## Les huit questions

1. Je tape sans regarder le clavier.
2. J'utilise les dix doigts, auriculaires compris.
3. Mes doigts reviennent en position de base après chaque frappe.
4. Je trouve F et J grâce aux repères, sans regarder.
5. Je tape chiffres et caractères spéciaux sans chercher.
6. Je dépasse 40 mots par minute.
7. Je fais moins de 5 % d'erreurs.
8. J'utilise des raccourcis comme Ctrl + C au lieu de la souris.

## Le résultat

- **0 à 2 oui :** nouveau départ. Commence par la leçon 0 du [cours de dactylographie](page:lessons), 15 minutes par jour. Ce n'est pas un retour en arrière, c'est le chemin le plus court : qui a des habitudes à quatre doigts apprend le mieux les dix depuis le début.
- **3 à 5 oui :** consolidation. Fais l'[évaluation gratuite](page:placement). Elle vérifie chaque touche et montre quelles leçons tu peux sauter.
- **6 à 8 oui :** finition. Mesure ta [vitesse de frappe](page:speedTest), travaille les chiffres et les caractères spéciaux, et obtiens le certificat comme preuve.

## Pourquoi ces questions

Les questions 1 à 4 portent sur la technique, 5 à 8 sur le résultat. L'étude Aalto avec 168 000 participants montre que les deux sont liés : qui garde les yeux sur l'écran et a une attribution fixe doigt-touche tape plus vite, qu'il ait ou non appris la méthode formellement. Le seuil de 40 MPM de la question 6 est volontairement sous la moyenne de l'étude, 51,6, mais nettement au-dessus des 27 MPM d'un typiste à deux doigts. L'atteindre, c'est avoir les bases. Les 5 % de la question 7 marquent la limite au-delà de laquelle les corrections coûtent plus de temps que la vitesse n'en fait gagner.

## Astuce pro

Réponds à la question 1 avec une astuce : pose une serviette sur le clavier et écris une phrase. Si le résultat est lisible, la réponse est oui. La plupart des gens surestiment la rareté de leurs coups d'œil.

## Prochaine étape

Qui se retrouve au niveau 1 ou 2 imprime aussi la [carte doigts-clavier](article:carte-doigts-clavier-azerty) et lance le [suivi de progression](article:suivi-progression-4-semaines). Ce qui se cache derrière les chiffres est expliqué dans l'article sur le [test de frappe](article:test-de-frappe).

## Sources

- [Observations on Typing from 136 Million Keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) - Aalto University et University of Cambridge, CHI 2018 : 168 000 participants, moyenne 51,6 MPM, taux d'erreur non corrigé 1,167 %.
- [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/) - Aalto University, CHI 2016 : les yeux sur l'écran et une attribution fixe doigt-touche prédisent la vitesse, même sans formation formelle.
- [Words per minute](https://en.wikipedia.org/wiki/Words_per_minute) (Wikipedia, en anglais) - typistes à deux doigts environ 27 MPM.`,
  },
  {
    slug: "caracteres-speciaux-azerty",
    locale: "fr",
    type: "lead-magnet",
    category: "shortcuts",
    title: "Comment taper @, €, # et les crochets sur un clavier AZERTY",
    description: "Où sont l'arobase, le symbole euro, le dièse et les crochets sur le clavier AZERTY ? La fiche montre touche, modificateur et doigt pour 22 caractères. PDF.",
    readingTime: 4,
    date: DATE,
    downloadLabel: "Fiche à imprimer",
    content: `Sur un clavier AZERTY, l'arobase se tape avec AltGr + à (la touche 0), le symbole euro avec AltGr + E, le dièse avec AltGr + " (la touche 3), les accolades avec AltGr + ' et AltGr + =. Qui ne le sait pas cherche à chaque adresse e-mail et à chaque prix. La fiche des caractères spéciaux liste 22 caractères parmi les plus utilisés au travail, avec la combinaison de touches et le doigt responsable. Plus trois lignes vides pour les caractères que toi seul utilises.

## Ce que contient la fiche

- 22 caractères spéciaux en deux colonnes : @, #, €, accolades, crochets, barre verticale, antislash, tilde, accent grave, accent circonflexe, les chiffres avec Maj, point, barre oblique, paragraphe, point d'interrogation, pourcentage, livre, plus, degré, micro
- Pour chaque caractère, les touches sous forme de chips : Maj ou AltGr plus la touche
- Le doigt responsable avec un point de couleur, assorti à la carte doigts-clavier
- Trois lignes « les miens » pour les caractères de ton métier

## Les trois règles des caractères spéciaux

**Maj avec l'autre main.** Le point d'interrogation est sur Maj + virgule, la virgule se tape avec l'index droit, donc c'est l'auriculaire gauche qui tient Maj. Presser Maj et le caractère avec la même main fait quitter la position de base, et il faut se replacer ensuite.

**AltGr toujours avec le pouce droit.** AltGr est juste à droite de la barre d'espace, là où le pouce se trouve déjà. @, €, #, crochets et accolades deviennent des gestes à deux doigts au lieu de contorsions.

**Apprendre le caractère, pas la position.** La disposition AZERTY est la même sur tous les claviers français du bureau. Apprise une fois, elle vaut sur le portable, sur le clavier externe et sur la machine du collègue. Si tu jongles entre plusieurs dispositions, l'[outil de comparaison des claviers](page:keyboardLayouts) montre ce qui bouge.

## Comment utiliser la fiche

1. Marque les cinq caractères dont tu as besoin chaque jour. Pour la plupart, c'est @, barre oblique, crochets, pourcentage et #.
2. Travaille exactement ces cinq pendant une semaine avec le bon doigt, même si c'est plus lent au début.
3. Note dans « les miens » ce que ton métier exige : les développeurs accolades et barre verticale, les comptables pourcentage et paragraphe, les rédacteurs guillemets et tiret long.
4. Si les rangées de lettres ne sont pas encore acquises, commence par là : la [carte doigts-clavier](article:carte-doigts-clavier-azerty) montre la disposition de base.

## Astuce pro

Pour les caractères sans touche propre, comme le tiret long ou les guillemets français, Windows a le panneau emoji et symboles sur Win + point, et le Mac des combinaisons avec Option. Le fonctionnement est expliqué dans l'article sur les [emojis et symboles au clavier](article:raccourcis-clavier-emoji).

## Prochaine étape

Les caractères spéciaux sont la dernière étape, pas la première. Qui cherche encore les lettres commence par le [guide pour apprendre la dactylographie](article:apprendre-dactylographie) ou directement dans le [cours](page:lessons). Qui frappe les lettres à l'aveugle vérifie avec le [test de vitesse de frappe](page:speedTest) gratuit à quel point les symboles le freinent. Et qui tape beaucoup de chiffres ajoute la [carte du pavé numérique](article:carte-pave-numerique).

## Sources

- [AZERTY](https://fr.wikipedia.org/wiki/AZERTY) (Wikipédia) - disposition du clavier français, niveaux Maj et AltGr.
- [Raccourcis clavier dans Windows](https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) - Support Microsoft, dont touche Windows + point pour le panneau des symboles.`,
  },
];
