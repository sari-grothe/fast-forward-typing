# SEO / GEO Roadmap (neu geschrieben am 24.09.2026)

Ersetzt die Roadmap vom selben Tag. Grundlage ist das
[Audit vom 24.09.2026](seo-audit-2026-09-24.md), die Research im
business-ideas-Repo (`fast-forward-typing/type/research/`) und die Skills
ai-seo, seo-audit, schema, competitor-alternatives, programmatic-seo,
directory-submissions. Wo alles liegt: [seo-knowledge-map.md](seo-knowledge-map.md).

## Ausgangslage

Technik fertig (Lighthouse 99-100 auf allen Seiten, 61 URLs, hreflang,
Schema, llms.txt, alle AI-Bots erlaubt). Nicht indexiert, 0 Backlinks, keine
Quelle auf der Site, Kernseiten 190-450 Wörter, die günstigsten Cluster der
Research unbesetzt. Kein Stripe vor 05/2027, keine Ads, keine gekauften Links,
keine Personennennung, jede Seite in DE/EN/FR.

## Fünf Prinzipien

1. **Tools und Daten vor "lernen"-Guides.** Jede "lernen"-Query hat ein AI
   Overview, keine Tool-Query hat eins. Traffic kommt über Test, Tester,
   Benchmark, Vergleich. Die Kursseite ist Conversion-Ziel, nicht Traffic-Quelle.
2. **Zitierbar heißt: Zahl + Quelle + Datum in einem Absatz, der allein steht.**
   Google rankt Seiten, AI zitiert Aussagen. Quellen zitieren +40 %,
   Statistiken +37 %, Keyword-Stuffing -10 % (Princeton GEO, KDD 2024).
3. **Drittquellen vor eigener Domain.** Bing-Index, Verzeichnisse, Listicles,
   Reddit. Ohne die erwähnt kein LLM die Marke.
4. **Eine Seite pro Suchintention, in allen drei Sprachen, mit sichtbarem
   Aktualisierungsdatum.** Keine Seite unter 500 Wörtern Hauptinhalt außer
   Kontakt und Rechtstexten.
5. **Monatlich messen, quartalsweise nachziehen.** Kadenz steht unten.

## Phase 0: Sichtbar werden (diese Woche, ~3 Stunden)

| # | Maßnahme | Warum |
|---|---|---|
| 0.1 | Google Search Console: Domain-Property, Sitemap einreichen | ohne Index kein SEO |
| 0.2 | Bing Webmaster Tools: Import aus GSC, IndexNow-Key in Vercel hinterlegen | ChatGPT-Suche und Copilot lesen Bings Index |
| 0.3 | Vercel Speed Insights an | Google rankt nach Felddaten, nicht nach Lighthouse |
| 0.4 | GA4: Aufbewahrung 14 Monate, Signals aus, Werbe-Personalisierung aus; Conversions: Test beendet, Lektion 1 gestartet, Warteliste, B2B-Formular | Messung der Roadmap |
| 0.5 | Verzeichnisse Tier 1 (Skill directory-submissions): alternativeto.net (als Alternative zu Tipp10, TypingClub, typing.com, Monkeytype), saashub.com, capterra.com, g2.com, crunchbase.com, softonic.com, webwiki.de | erste Backlinks und AI-sichtbare Drittquellen; Product Hunt erst, wenn poliert |
| 0.6 | AI-Baseline: die 10 Prüffragen (unten) in ChatGPT, Perplexity, Gemini stellen, Ergebnis in `docs/ai-visibility-log.md` protokollieren | Nullpunkt vor jeder Änderung |
| 0.7 | Middleware: Großbuchstaben im Locale-Segment lowercase-redirecten | 404 auf `/DE/hilfe` |
| 0.8 | Entscheidung G1 (Tipptest-Vokabel) und G3 (Zeichenzähler) treffen | blockieren Phase 1 und 2 |

## Phase 1: Zitierbar werden (Oktober 2026)

Saisonfenster: DE-Tipp-Keywords peaken September bis Januar ("September is
the money month"). Jede Woche zählt.

| # | Maßnahme | Ziel-Keywords (Vol/Monat, KD) | Umfang |
|---|---|---|---|
| 1.1 | **Benchmark-Seite je Sprache** "Durchschnittliche Tippgeschwindigkeit: WPM nach Alter und Beruf" (DE), "Average Typing Speed and WPM Benchmarks" (EN), "Vitesse de frappe moyenne" (FR). Seed: `research/wpm-benchmarks.md` (Perzentile, Alter, Beruf, Hunt-and-Peck vs 10 Finger) mit Quellenliste. Tabellen, Direktantwort im ersten Absatz, FAQPage + Article-Schema, "Aktualisiert" sichtbar | DE tippgeschwindigkeit 2.000/1, durchschnittliche tippgeschwindigkeit 100/0, wörter pro minute 350/3, wie viele anschläge pro minute sind gut 250/0; EN average wpm 8.900/10, what is a good wpm 4.800/4, what is the average typing speed 4.400/13, what does wpm mean 1.100/1; FR mot par minute 900/31, vitesse de frappe moyenne 100/22 | 1.200-1.500 Wörter x3 |
| 1.2 | **Tipptest-Seite: 400-600 Wörter unter dem Tool.** Was der Test misst, was ein guter Wert ist, Tabelle WPM nach Beruf (Link zu 1.1), Methode, FAQ als H2-Fragen. DE gemäß Entscheidung G1 | DE wie schnell kann ich tippen 500/5, anschläge pro minute test 450/4, schnell tippen test 600/1, 10 finger schreiben test 1.100/15, schreibtest 800/5; EN typing speed test; FR test de dactylographie 4.300/47, test de vitesse de frappe 1.200/45 | x3 |
| 1.3 | **Einstufung und Tastaturlayout-Tool: je 300-500 Wörter** Direktantwort + Erklärung + FAQ. FR-Tool führt mit "qwerty" | FR qwerty 11.000/1, clavier qwerty; DE layout deutsch 700/0 | x3 |
| 1.4 | **Alle 27 Artikel: Direktantwort-Absatz vor dem TOC, Abschnitt "Quellen" mit Links, Zahlen mit Quelle.** Vergleichsartikel bekommen "Stand [Monat] 2026" in der Tabelle | AI-Zitierbarkeit | Template-Änderung + 27 Edits |
| 1.5 | **TypingClub-Artikel DE auf "typingclub deutsch" ausrichten** (Title, H1, Abschnitt "TypingClub auf Deutsch: was fehlt"), auf 1.000+ Wörter; FR AgileFingers-Artikel auf "agile finger" | typingclub deutsch 7.900/1; agile finger FR 4.200/0, agile fingers DE 600/25 | 2 Artikel |
| 1.6 | **Kursseite auf 800-1.200 Wörter** mit Course-Schema (heute nur auf Home), H1 mit Keyword, Abschnitte: was lernst du, Methode, Phasen, Zeitaufwand, für wen, FAQ. FR mit "dix doigts" im Title | DE 10 finger schreiben lernen 15.000/21-39 (AI Overview, trotzdem Pflicht); FR dix doigts 1.900/0 | x3 |
| 1.7 | **Über uns als E-E-A-T-Seite**: Organisation, Standort Paris, Methodik, Quellen, warum vertrauen, SIRET sobald da | Vertrauen für Google und AI ohne Personennennung | x3 |
| 1.8 | Startseite: Abschnitt "Quellen" für die Zahlen (zwei Stunden pro Tag, 40-60 %, Cambridge, Aalto) | die meistverlinkte Seite muss belegen | x3 |

## Phase 2: Autorität aufbauen (November bis Dezember 2026)

| # | Maßnahme | Ziel-Keywords | Umfang |
|---|---|---|---|
| 2.1 | **Vergleichs-Cluster je Sprache** (Skill competitor-alternatives): "Die besten Tipptrainer 2026 im Vergleich", "Tipp10 Alternative", "TypingClub vs Tipp10 vs Fast Forward". Faire Tabellen, Preise, Stand-Datum, monatliches Update | DE 10-finger schreiben lernen testsieger 90/26 (CPC 30 EUR), tipp10 alternative; EN best typing software; FR meilleur logiciel dactylographie | 3 Seiten x3 |
| 2.2 | **Tastatur-Tester** als Tool-Seite (DE `/tastatur-test`, FR `/test-clavier` mit AZERTY als Default, EN `/keyboard-tester`), 300 Wörter Text, WebApplication-Schema | DE tastatur test 1.400/1, tastatur tester 500/0, Cluster 3.040/2; FR test clavier 2.300/5, test clavier azerty 900/2, Cluster 4.750/7; EN keyboard tester 69.000/63 (nur mitnehmen) | Tool + Seite x3 |
| 2.3 | **Übungstexte-Seite** je Sprache mit thematischen Texten (Büro, E-Mail, KI-Prompts), Link in die Lektionen | DE 10-finger schreiben übungstexte 200/0 + Cluster 580/9; EN typing practice paragraphs 2.600/31, paragraph typing practice 700/19; FR exercices dactylographie 750/33 | x3 |
| 2.4 | **Drei Kernartikel je Sprache auf 1.500-2.000 Wörter** (10-Finger-System lernen, schneller tippen, was ist das 10-Finger-System): Bilder, Übungen, Quellen | Pillar-Cluster "10 finger schreiben" TP 23.000 | 9 Artikel |
| 2.5 | **Listicle-Outreach**: DE t3n.de (Artikel "10-Finger-Schreiben lernen"), chip.de, effektiveslernen.de, karrierebibel.de; EN skillscouter.com, contentmavericks.com, whenyouwrite.com, courselounge.com, typinglounge.com, officeskills.org; FR outilstice.com, clubic.com. Pitch: moderner Trainer für Erwachsene, DE/FR-Layouts, Einstufung | 10 Listicles = Zitatquellen für LLMs | Outreach |
| 2.6 | **Reddit**: 4 Wochen ohne Link Karma in r/typing, r/learntyping, r/de_EDV, r/FragReddit, r/homeoffice_de; danach Antworten mit Daten aus 1.1, nie "check out my tool", Wettbewerber mitnennen | Perplexity zieht 46,7 % der Zitate aus Reddit | laufend |
| 2.7 | Ressourcen-Hub: Kategorietexte (je 100-150 Wörter), CollectionPage bleibt | interne Verlinkung | x3 |
| 2.8 | Technik-Rest: Startseite unter 150 KB (SVGs als `<img>`), Mono-Font auf Tipp-Seiten preloaden, 7 Descriptions kürzen, Kontakt-Priorität 0,3, CSP-Header | Felddaten, Snippets | klein |

## Phase 3: Cluster und eigene Daten (Januar bis März 2027)

| # | Maßnahme | Ziel-Keywords |
|---|---|---|
| 3.1 | **Themencluster, 10 Artikel je Sprache auf Suchintention**: WPM nach Beruf, Tipptest für die Bewerbung, Shortcuts Excel/Outlook/Slack, Ergonomie am Schreibtisch, Tippen mit Handgelenkschmerzen, AZERTY vs QWERTY für Vielschreiber, 10-Finger-System im Lebenslauf (40/0), Tastatur lernen (300/35), FR Sonderzeichen-Serie (comment taper # sur clavier azerty 450/2, euro 100/0, arobase), EN what is touch typing (1.800/3), how long does it take to learn touch typing (70/5) | Persona bleibt Erwachsene im Büro |
| 3.2 | **Erste Benchmark-Seite mit eigenen Daten**, sobald 1.000 Tests vorliegen: "Tippgeschwindigkeit in Deutschland 2027" mit Stichprobe, Methode, Layout-Vergleich QWERTZ/QWERTY/AZERTY. Danach programmatische Segment-Seiten (Beruf, Alter, Layout) nach `content/pseo-data-moat-strategy.md` | einzige Daten, die kein LLM selbst kennt |
| 3.3 | **Zeichen-/Wortzähler** DE+FR, falls Entscheidung G3 = ja: reiner Link-Magnet mit CTA zum Tipptest, saisonal stark Oktober bis März | DE zeichenzähler 20.000, FR compteur de mots 25.000/22, compteur de caractères 13.000/20 |
| 3.4 | Product-Hunt-Launch, wenn Kurs komplett und Zertifikat live; Show HN; alternativeto-Bewertungen einsammeln | Drittquellen |
| 3.5 | `sameAs` im Organization-Schema (LinkedIn-Unternehmensseite, Product Hunt, Crunchbase), später Wikidata | Entität festigen |
| 3.6 | Quartals-Sweep: Wettbewerber, die 90+ Tage nichts veröffentlicht haben, flaggen; deren Keywords angreifen (Tipp10, TippenAkademie, typista sind Kandidaten) | Content-Gap-Refresh |

## Phase 4: Ab Stripe (Mai 2027)

- `/pricing.md` als maschinenlesbare Preisdatei, Offer-Schema auf Kurs und
  Zertifikat, Rechtsseiten aus noindex (SIRET).
- Zertifikat-Keywords: EN typing certificate 1.800/33 (CPC 60 USD), FR test de
  certification de dactylographie 50/57, DE Tippzertifikat.
- Bewertungsprofile (Trustpilot, G2) aktiv bespielen.

## Offene Entscheidungen

| # | Frage | Empfehlung |
|---|---|---|
| G1 | "Tipptest" als sichtbares Wort auf der Tipptest-Seite erlauben? | Ja, nur dort: H2 und FAQ-Fragen. Rest der Site bleibt Tippgeschwindigkeit. Sonst ~7.500/Monat bei KD 0-15 abschreiben |
| G3 | Zeichen-/Wortzähler bauen? | Ja in Phase 3, als Link-Magnet. Ratatype.de holt damit die meistbesuchte Seite; ~60.000/Monat |
| G5 | Kinder-Cluster (~880/Monat)? | Nein. Persona |

## Messung und Kadenz

**Wöchentlich (5 Minuten):** GSC Abdeckung und hreflang-Fehler, Bing Index-Zahl.

**Monatlich (30 Minuten), Protokoll in `docs/ai-visibility-log.md`:**
Die 10 Prüffragen in ChatGPT (mit Suche), Perplexity, Gemini stellen und
notieren: erwähnt ja/nein, wer stattdessen, welche Seite zitiert.

1. Was ist der beste Tipptrainer für Erwachsene?
2. Welche Alternative gibt es zu Tipp10?
3. Wo kann ich meine Tippgeschwindigkeit kostenlos testen?
4. Wie viele Wörter pro Minute sind gut?
5. Wie lange dauert es, das 10-Finger-System zu lernen?
6. What is the best typing course for adults, not kids?
7. What is a good typing speed for office work?
8. TypingClub alternative for adults?
9. Quel est le meilleur logiciel de dactylographie pour adultes ?
10. Où tester ma vitesse de frappe en AZERTY ?

Dazu: GA4 Referral von chatgpt.com, perplexity.ai, copilot.microsoft.com,
gemini.google.com; Backlinks und Referring Domains (Ahrefs Free oder GSC-Links).

**Quartalsweise:** Wettbewerber-Sweep und Content-Gap-Refresh (3.6),
Aktualisierungsdatum aller Vergleichs- und Benchmark-Seiten hochsetzen.

**Ziele:** bis 31.12.2026 alle 61+ URLs in Google und Bing indexiert, 10
Referring Domains, 3 Benchmark- und 3 Vergleichsseiten je Sprache live, erste
GSC-Impressionen auf Tool-Keywords. Bis 31.03.2027 erste AI-Erwähnung auf
einer der 10 Fragen, 1.000 Tests für 3.2, 25 Referring Domains.

## Erledigt-Log

- 24.09.2026: Technischer SEO-Pass abgeschlossen (Commits 83a3986 bis 790e6ac):
  hreflang inkl. x-default, Titel, OG-Bilder, Lektionen noindex, Sitemap-Daten,
  Sicherheits-Header, CLS 0,18 auf der Kursseite behoben, Kontrast der
  Modifier-Tasten behoben. Lighthouse mobil: Home 100/100/100/100, Tipptest
  100, Unternehmen 100, Hilfe 100, Artikel 99, Einstufung 93-98 (LCP 2,3-2,9 s).
- 24.09.2026: Sprachnative Slugs (ce448c9), llms.txt + llms-full.txt, GA4 nach
  Consent, Rechtstexte DE/EN/FR (noindex bis SIRET).
- 24.09.2026: Audit und diese Roadmap.
