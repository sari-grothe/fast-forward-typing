# SEO / GEO Roadmap (Stand 24.09.2026)

Ergebnis der finalen Prüfung nach der URL-Lokalisierung. Gemessen auf Produktion
(fastforwardtyping.com), Lighthouse mobil, plus eigener Crawl der Sitemap.

## Ist-Stand

| Seite | Perf | A11y | BP | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| /de (Home) | 100 | 100 | 100 | 100 | 1,8 s | 0 |
| /de/tippgeschwindigkeit | 100 | 100 | 100 | 100 | 1,5 s | 0,06 |
| /de/unternehmen | 100 | 100 | 100 | 100 | 1,9 s | 0 |
| /de/hilfe | 100 | 100 | 100 | 100 | 1,8 s | 0 |
| /de/ressourcen/tastenkombinationen-mac | 99 | 100 | 100 | 100 | 2,0 s | 0 |
| /de/10-finger-schreiben-lernen | 99 | 100 | 100 | 100 | 2,0 s | 0 |
| /en/lessons | 99 | 100 | 100 | 100 | 2,0 s | 0 |
| /fr (Home) | 99 | 100 | 100 | 100 | 2,0 s | 0 |
| /de/einstufung | 93-98 | 100 | 100 | 100 | 2,3-2,9 s | 0 |

Technisch sauber: 61 Sitemap-URLs mit 200, Canonical = eigene URL, hreflang
vollständig inkl. x-default, sprachnative Slugs, alte Pfade mit einem einzigen
308, robots.txt, llms.txt + llms-full.txt, HSTS + Security-Header, OG-Bilder,
JSON-LD (Organization, WebSite, Course, Service, FAQPage, Article,
BreadcrumbList, CollectionPage, WebApplication), GA4 nur nach Consent, 404
liefert 404.

Am 24.09. behoben: CLS 0,18 auf der Kursseite (Einstufungs-Karte erschien erst
nach dem Laden des lokalen Fortschritts), Kontrast 1,8:1 der Modifier-Tasten
auf allen Tastatur-Seiten.

## A. Technik (Rest, klein)

1. **Einstufung LCP 2,3-2,9 s.** LCP-Element ist der Beispieltext in JetBrains
   Mono; die Schrift ist bewusst nicht vorgeladen (`preload: false`, damit die
   Marketing-Seiten schneller sind), der Font-Swap verzögert den Paint.
   Optionen: Mono nur auf Tipp-Seiten per `<link rel="preload">` laden oder
   `font-display: optional` mit `adjustFontFallback`. Ziel: stabil unter 2,5 s.
2. **Startseite 460 KB HTML.** 267 Inline-SVGs (135 KB), die im RSC-Payload
   ein zweites Mal stecken (256 KB). Verursacher: Tastatur-/Zertifikat-
   Illustrationen als React-SVG. Fix: als statische SVG-Dateien über `<img>`
   oder als reine Client-Komponente ohne Server-Render. Ziel unter 150 KB.
   Im Labor schon 100, aber echte 3G-Nutzer und der Crawler-Budget spüren es.
3. **Groß-/Kleinschreibung:** `/DE/hilfe` wird zu `/en/DE/hilfe` (404). In der
   Middleware Pfad lowercase-redirecten. Niedrige Priorität.
4. Web-App-Manifest fehlt (Installierbarkeit, nicht SEO-relevant). Niedrig.
5. Content-Security-Policy-Header (Best Practice, nicht gescort). Niedrig.

## B. Inhalt (der eigentliche Hebel, misst kein Lighthouse)

Wortzahlen live (Hauptinhalt): Kurs 449, Tipptest 446, Zertifikat 414,
Einstufung 250, Tastatur-Tool 235, Über uns 189. Artikel 315-703 Wörter.

1. **Kursseite auf 800-1.200 Wörter.** Sie zielt auf das größte Keyword
   ("10 finger schreiben lernen") und hat 449 Wörter. Braucht: Was lernst du,
   Methode, Phasen, Zeitaufwand, für wen, FAQ (mit FAQPage-Schema) und
   Course-Schema (liegt heute nur auf der Startseite).
2. **Drei Kernartikel je Sprache auf 1.500-2.000 Wörter** (10-Finger-System
   lernen, schneller tippen, was ist das 10-Finger-System): Bilder, Übungen,
   Quellen mit Link. Danach die Vergleichsposts (TypingClub, AgileFingers)
   auf 1.000+.
3. **Tipptest, Einstufung, Tastatur-Tool:** je 300-500 Wörter erklärender
   Text unter dem Tool (Was misst der Test, was ist ein guter Wert, Tabelle
   WPM nach Beruf/Alter, Methode). Das sind die "typing test"-Keywords.
4. **Über uns als E-E-A-T-Seite:** Firmendaten (sobald SIRET), Methodik,
   Quellen, warum uns vertrauen, Kontakt. Keine Personennennung (Vorgabe),
   aber "Wer wir sind" als Organisation mit Standort Paris.
5. **Themencluster ausbauen:** 10-15 weitere Artikel je Sprache auf
   Suchintention (durchschnittliche WPM, Tipptest für Bewerbung, Shortcuts
   Excel/Outlook, Ergonomie, AZERTY vs QWERTY, Tippen mit Handgelenkschmerzen).
   Persona bleibt: Erwachsene im Büro, nicht Kinder.
6. **Interne Verlinkung:** jeder Artikel verlinkt 2-3 Nachbarartikel + Kurs;
   Hub-Seite mit Kategorietexten.

## C. GEO / AI-Sichtbarkeit

Erledigt: llms.txt, llms-full.txt, FAQPage, Organization-Entität ohne
Personennennung, alle Inhalte im HTML (kein JS-only), native URLs, saubere
Überschriftenhierarchie.

1. **Zitierbare Fakten mit Quelle im Text.** Zahlen (40-60 % schneller,
   Cambridge/Aalto) stehen ohne verlinkte Quelle. AI-Suchmaschinen zitieren
   Seiten, die selbst zitieren. Je Artikel und auf Home einen Abschnitt
   "Quellen" mit Links.
2. **Direktantwort-Absätze:** die ersten zwei Sätze jeder Kernseite beantworten
   die Suchfrage wörtlich (Definition, Zahl, Empfehlung). Kann als Snippet und
   als AI-Zitat übernommen werden.
3. **Entität festigen:** `sameAs` im Organization-Schema, sobald Profile
   existieren (LinkedIn-Unternehmensseite, YouTube, Product Hunt). Später
   Wikidata-Eintrag.
4. **Erwähnungen von Dritten:** Product-Hunt-Launch, alternativeto.net,
   Antworten auf Reddit/Quora/gutefrage, Gastbeiträge. Backlinks aktuell 0
   (neue Domain). Ohne Drittquellen erwähnen ChatGPT/Perplexity die Marke
   nicht.
5. **Bing Webmaster Tools + IndexNow.** Bing speist ChatGPT-Suche und Copilot.
   Sitemap aus der Search Console importieren, IndexNow-Key hinterlegen.
6. **Monitoring:** monatlich feste Prompts in ChatGPT/Perplexity/Gemini
   ("bester Tipptrainer für Erwachsene", "typing test for adults") prüfen;
   Ahrefs Brand Radar, sobald budgetiert.

## D. Betrieb / Messung

1. Google Search Console: Domain-Property, Sitemap einreichen, nach 2 Wochen
   Abdeckung + hreflang-Fehler prüfen.
2. Bing Webmaster Tools (Import aus GSC), IndexNow.
3. GA4: Aufbewahrung 14 Monate, Signals aus, Werbe-Personalisierung aus,
   Datenfreigabe aus; Conversions definieren (Test beendet, Lektion gestartet,
   Warteliste, B2B-Formular).
4. Vercel Speed Insights aktivieren: Google rankt nach Felddaten (CrUX), nicht
   nach Lighthouse-Labor.
5. Rechtliches: SIRET eintragen, damit die Rechtsseiten aus noindex kommen
   (siehe legal-golive.md).

## Reihenfolge

1. GSC + Bing anlegen, Sitemap einreichen (heute, 20 Minuten).
2. Kursseite + Tipptest-Text (B1, B3), Quellen-Abschnitte (C1), Direktantworten (C2).
3. Drei Kernartikel je Sprache (B2).
4. Einstufung-Font und Startseiten-Gewicht (A1, A2).
5. Themencluster (B5), Erwähnungen (C4), Monitoring (C6).
