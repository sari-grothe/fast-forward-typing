# SEO-Wissenslandkarte: wo alles liegt und wie wir für AI ranken (Stand 24.09.2026, abends)

Zweck: eine Seite, die jede Session zuerst liest, bevor sie an SEO, Inhalten
oder AI-Sichtbarkeit arbeitet. Sie verweist auf alles, was zu SEO existiert,
im Repo und außerhalb. Der operative Plan bleibt in
[seo-geo-roadmap.md](seo-geo-roadmap.md), das Vokabular in
[copywriting-de.md](copywriting-de.md). Diese Datei ersetzt beides nicht.

## 1. Was in diesem Repo liegt

| Datei | Was drin ist |
|---|---|
| [docs/seo-geo-roadmap.md](seo-geo-roadmap.md) | die Roadmap (neu am 24.09.2026): Prinzipien, Phasen 0-4, offene Entscheidungen, Messkadenz mit den 10 AI-Prüffragen, Erledigt-Log |
| [docs/seo-audit-2026-09-24.md](seo-audit-2026-09-24.md) | Audit: Crawl aller 61 URLs, Indexierung, Inhalt, Keyword-Abdeckung gegen die Research, AI-Zitierbarkeit, Spannungen G1-G5 |
| [docs/copywriting-de.md](copywriting-de.md) | keyword-basiertes DE-Glossar (Tippgeschwindigkeit statt Tipptest, 10-Finger-System statt Tippkurs, Ressourcen als Hub); Prozess zur Wortwahl |
| [docs/golive-checklist.md](golive-checklist.md) | SEO-Status als Checkliste (GSC offen, GA4-Datenschutz offen, Inhaltsausbau offen) |
| [docs/article-template.md](article-template.md) | Layout-Standard für Artikel: Anker-IDs, TOC, CTA-Karte |
| [docs/legal-golive.md](legal-golive.md) | Rechtsseiten bleiben noindex, bis die SIRET eingetragen ist |
| [gtm/ai-traffic-strategy.md](../gtm/ai-traffic-strategy.md) | Sechs-Kanal-Framework (Kim Doyal), Prioritäten-Tabelle: AI Search Visibility = High |
| [CLAUDE.md](../CLAUDE.md) | feste Regeln: sprachnative Slugs über `localizedPath`, hreflang im Locale-Layout, llms.txt-Pflegepflicht, "komplette Prüfung" = `scripts/audit/crawl.py` + `lighthouse-all.sh` grün |

Code, der SEO trägt:

| Datei | Rolle |
|---|---|
| `src/lib/seo.ts` | Titel mit Brand-Suffix nur bis 60 Zeichen; OG-Bild pro Seite explizit zurückgeben |
| `src/lib/schema.ts` | gemeinsame Organization-Entität für alle JSON-LD-Blöcke, ohne Personennamen |
| `src/lib/llms.ts` | generiert `/llms.txt` und `/llms-full.txt`; FACTS-Block ist handgepflegt |
| `src/app/sitemap.ts` | 61 URLs aus den sprachnativen Routen, Artikel mit echtem Datum |
| `src/app/robots.ts` | sperrt nur `/api/` und Dashboard; keine AI-Bots blockiert (gut so, siehe Abschnitt 4) |
| `src/app/[locale]/layout.tsx` | hreflang inkl. x-default, sitewide JSON-LD (Organization, WebSite) |
| `src/middleware.ts` | Locale-Redirect; Lowercase-Redirect fehlt noch (Roadmap A3) |
| `src/app/[locale]/opengraph-image.tsx` | OG-Bild pro Sprache |
| `lessons/[id]/page.tsx`, `dashboard/page.tsx`, `src/lib/legal/route.ts` | die drei Stellen mit `noindex` |
| `scripts/audit/crawl.py`, `scripts/audit/lighthouse-all.sh` | der vollständige technische Check: alle Sitemap-URLs plus interne Links (Status, Canonical, hreflang, Titel, H1, OG, JSON-LD, Redirects, Header) und Lighthouse mobil auf jeder URL. CLAUDE.md-Regel seit 24.09.: "komplette Prüfung" heißt beide Skripte mit Exit 0, nie eine Stichprobe |

Im Repo liegen keine eigenen SEO-Skills. `.claude/skills/` enthält nur
tdd, grill-me, to-prd, to-issues und improve-codebase-architecture.

## 2. Was außerhalb liegt: die Recherche

Die gesamte Keyword-, Wettbewerbs- und AI-Recherche liegt im privaten Repo
`sari-grothe/business-ideas` (GitHub, lokal unter
`~/Claude/Sarah Privat/Business Ideen/business-ideas/`), Pfad
`fast-forward-typing/type/`. Stand 24.09.2026 ist das Repo vollständig
gepusht (main = origin/main, 99 Research-Dateien getrackt). Nichts davon
wird hierher kopiert: eine Quelle, kein Drift.

Wichtigste Dateien unter `type/research/` (alle Juni 2026, Ahrefs Lite):

| Datei | Nutzen |
|---|---|
| `ahrefs-keyword-analysis.md` | Haupt-Keyword-Set DE/EN/FR mit Volumen und KD; Basis für copywriting-de.md |
| `long-tail-keywords.md`, `keyword-expansion-analysis.md` | Long-Tails, verwandte Begriffe; Futter für das Themencluster (Roadmap B5) |
| `content-gap-analysis.md` | Keywords, für die Tipp10, typing.com, Ratatype ranken und wir nicht |
| `serp-overview-analysis.md` | wer auf den Ziel-Keywords steht, welche SERP-Features |
| `ai-search-and-architecture.md` | welche Keywords AI Overviews haben (alle "lernen"-Queries) und welche nicht (alle Tool-Queries); Ratatype-Linkarchitektur als Blaupause |
| `llm-citation-strategy.md` | Fragenkarte: was Leute LLMs in dieser Nische fragen, sortiert nach Zitier-Potenzial; Daten-Flywheel; monatlicher Check |
| `seo-and-visibility-strategy.md` | Gesamtstrategie in 8 Teilen: Keywords, Wettbewerber-Traffic, Content-Playbook, Backlink-Tiers, AI-Sichtbarkeit, Technik-Checkliste, Timeline, Verbote |
| `competitor-*.md` (8 Dateien) | Deep Dives Tipp10, Calli Clever, Typesy, EduTyping; Referring Domains; Top Pages |
| `wpm-benchmarks.md` | öffentliche WPM-Daten (Perzentile, Alter, Beruf); Seed für Benchmark-Seiten |
| `volume-history-trends.md` | Saisonalität der Keywords |
| `reddit-gtm-research.md` | Subreddits, Fragen, Tonalität für Community-Präsenz |
| `newsletter-review-ai-traffic-intelligence.md` | Research-Kadenz: AI-Check monatlich, Wettbewerber-Sweep quartalsweise, "stiller Wettbewerber"-Flag |
| `ahrefs-exports/` | Roh-CSVs (Organic Keywords, Backlinks, Content Gaps) |

Daneben: `type/backlinks/master-list.md` (priorisierte Backlink-Ziele mit
Status-Feld), `type/content/pseo-data-moat-strategy.md` (programmatische
Seiten mit eigenen Tippdaten als Burggraben), `type/persona.md` (Pflichtlektüre
vor jedem Text).

## 3. Verfügbare Skills (global, `~/.claude/skills/`)

| Skill | Wann |
|---|---|
| `ai-seo` | alles zu AI-Zitaten, AI Overviews, ChatGPT/Perplexity; enthält `references/platform-ranking-factors.md` (je Plattform) und `references/content-patterns.md` (Block-Vorlagen für Definition, Vergleich, FAQ, Statistik, Zitat) |
| `seo-audit` | technisches und On-Page-Audit; wurde für den Pass am 24.09. genutzt |
| `schema` | JSON-LD ergänzen oder prüfen (`schema-markup` ist die ältere Version, `schema` bevorzugen) |
| `programmatic-seo` | Vorlagen-Seiten aus Daten; passt zur pSEO-Data-Moat-Strategie |
| `content-strategy` | Themencluster und Redaktionsplan (Roadmap B5) |
| `competitor-alternatives` | "X vs Y"- und "Alternative zu Z"-Seiten, die von LLMs am häufigsten zitiert werden |
| `ingest-ai-citations` | Sonde für Zitate in Perplexity, ChatGPT, Claude, Gemini, AI Overviews; braucht eine Slug-Liste, für uns noch nicht eingerichtet |

Ahrefs ist als MCP angebunden (Keywords Explorer, Site Explorer, SERP
Overview, GSC-Tools). Brand Radar ist im Lite-Plan nicht enthalten.

## 4. Wie man für AI rankt, auf uns angewendet

Google rankt Seiten, AI-Systeme zitieren Aussagen. Ein Absatz wird zitiert,
wenn er allein stehend eine Frage beantwortet, eine Zahl mit Quelle enthält
und auf einer Seite steht, die der Crawler lesen darf. Die Princeton-GEO-Studie
(KDD 2024) misst: Quellen zitieren +40 %, Statistiken +37 %, Expertenzitate
+30 %, Keyword-Stuffing -10 %.

Was daraus für uns folgt, mit Status:

| Hebel | Status | Wo |
|---|---|---|
| AI-Bots dürfen crawlen (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot) | erledigt, robots.ts sperrt nichts davon | `src/app/robots.ts` |
| llms.txt und llms-full.txt | erledigt | `src/lib/llms.ts` |
| Schema: Organization, WebSite, Course, Service, FAQPage, Article, WebApplication | erledigt | Roadmap Ist-Stand |
| Alles im HTML, nichts JS-only; saubere H1-H3 | erledigt | Roadmap Ist-Stand |
| Bing Webmaster Tools + IndexNow (ChatGPT und Copilot lesen Bings Index) | offen | Roadmap C5, D2 |
| Zahlen mit verlinkter Quelle im Text (40-60 %, Cambridge, Aalto) | offen | Roadmap C1 |
| Direktantwort in den ersten zwei Sätzen jeder Kernseite | offen | Roadmap C2 |
| Vergleichsseiten "Tipp10 Alternative", "TypingClub vs ...", "beste Tipptrainer 2026" mit Datum | offen, in der Roadmap nur als Ausbau der Vergleichsposts (B2) | `llm-citation-strategy.md` Kategorie 1, Skill `competitor-alternatives` |
| Benchmark-Seiten mit eigenen Daten ("durchschnittliche Tippgeschwindigkeit Deutschland 2026") | offen, erst mit Testdaten; Seed aus `wpm-benchmarks.md` | `llm-citation-strategy.md` Kategorie 2, `pseo-data-moat-strategy.md` |
| "Aktualisiert [Monat] 2026" sichtbar auf Vergleichs- und Datenseiten | offen | ai-seo Skill, Freshness |
| Drittquellen: Reddit (r/typing, r/FragReddit), alternativeto, Product Hunt, Gastbeiträge | offen, Backlinks = 0 | Roadmap C4, `backlinks/master-list.md`, `reddit-gtm-research.md` |
| `sameAs` im Organization-Schema, sobald Profile existieren | offen | Roadmap C3 |
| Monatlicher Check: die 10 Fragen aus der Fragenkarte in ChatGPT, Perplexity, Gemini stellen, Ergebnis protokollieren | offen, Kadenz beschlossen | Roadmap C6, `newsletter-review-ai-traffic-intelligence.md` |
| Referral-Traffic von chatgpt.com, perplexity.ai, bing.com in GA4 als Proxy-Metrik | offen, GA4 läuft seit 24.09. | `llm-citation-strategy.md` Messung |

Zwei Punkte, an denen Skill und Hausregeln auseinanderlaufen, bewusst so
entschieden:

- **Autorennennung.** Der ai-seo-Skill empfiehlt benannte Autoren mit
  Referenzen. Unsere Vorgabe ist die Organisation ohne Person. Ersatz:
  E-E-A-T über die Über-uns-Seite als Organisationsentität mit Methodik,
  Quellen, Standort (Roadmap B4).
- **Pricing-Datei.** Der Skill empfiehlt `/pricing.md` für AI-Agenten. Die
  Preise stehen bereits im FACTS-Block von llms.txt. Eine separate Datei
  lohnt erst, wenn Stripe live ist (ab 05/2027).

## 5. Aufgelöste Spannung

Die Research vom Juni (Tools zuerst, weil jede "lernen"-Query ein AI Overview
hat) und die alte Roadmap (Kursseite zuerst) widersprachen sich. Die neue
Roadmap folgt der Research: Benchmark-, Tool- und Vergleichsseiten vor dem
Ausbau der Kursseite. Details im Audit, Abschnitt G.

## 6. Pflege dieser Datei

Bei jeder Änderung an Roadmap, Glossar, robots, Schema oder llms.txt die
betroffene Zeile hier nachziehen. Wenn ein neues Research-Dokument in
business-ideas entsteht, hier in Abschnitt 2 eintragen.
