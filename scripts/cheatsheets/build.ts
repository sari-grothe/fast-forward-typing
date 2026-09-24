/**
 * Builds the branded cheat-sheet PDFs (one per lead-magnet article and
 * locale) into public/downloads/<slug>.pdf.
 *
 *   npx tsx scripts/cheatsheets/build.ts
 *
 * Source of truth is src/lib/resources.ts: every article with
 * type "lead-magnet" becomes one A4 worksheet - logo, site name, the
 * shortcut sections as key chips, the pro tip as a callout, a CTA line
 * to the speed test. The "next step" and "sources" sections of the web
 * article are web-only and left out. Rendering: headless Chrome
 * (print-to-pdf), Poppins from Google Fonts, so run it online. Re-run
 * whenever a lead-magnet article changes and commit the PDFs.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { locales, type Locale } from "../../src/i18n/config";
import { getResourcesByLocale, type ResourceMeta } from "../../src/lib/resources";
import { localizedPath } from "../../src/i18n/routes";

const OUT_DIR = resolve(process.cwd(), "public/downloads");
const TMP_DIR = resolve(process.cwd(), ".cheatsheets-tmp");
const CHROME =
  process.env.CHROME_PATH ??
  (process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "google-chrome");

// Sections that only make sense on the web page.
const SKIP_HEADINGS = new Set(["Nächster Schritt", "Quellen", "Next step", "Sources", "Prochaine étape"]);
const TIP_HEADINGS = new Set(["Profi-Tipp", "Pro tip", "Astuce pro", "Astuce"]);

const copy: Record<Locale, { site: string; tip: string; cta: string; footer: string }> = {
  de: {
    site: "Fast Forward >> Typing",
    tip: "Profi-Tipp",
    cta: "Nächster Schritt: Miss kostenlos deine Tippgeschwindigkeit",
    footer: "Zum Ausdrucken und neben den Monitor hängen.",
  },
  en: {
    site: "Fast Forward >> Typing",
    tip: "Pro tip",
    cta: "Next step: measure your typing speed for free",
    footer: "Print it and keep it next to your screen.",
  },
  fr: {
    site: "Fast Forward >> Typing",
    tip: "Astuce pro",
    cta: "Prochaine étape : mesure gratuitement ta vitesse de frappe",
    footer: "À imprimer et à garder à côté de l'écran.",
  },
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Inline markdown -> HTML: `keys` become key chips, **bold** stays bold,
// links keep their text only (a printed sheet has nothing to click).
function inline(md: string): string {
  let s = escapeHtml(md);
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  s = s.replace(/`([^`]+)`/g, (_m, keys: string) => {
    const parts = keys.split(/\s\+\s/).map((k) => `<kbd>${k.trim()}</kbd>`);
    return `<span class="keys">${parts.join('<span class="plus">+</span>')}</span>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return s;
}

type Section = { heading: string; items: string[]; paragraphs: string[] };

function parse(content: string): { intro: string; sections: Section[] } {
  const lines = content.split("\n");
  const sections: Section[] = [];
  const introLines: string[] = [];
  let current: Section | null = null;
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("## ")) {
      current = { heading: line.slice(3).trim(), items: [], paragraphs: [] };
      sections.push(current);
      continue;
    }
    if (!line.trim()) continue;
    if (!current) {
      introLines.push(line.trim());
      continue;
    }
    if (line.startsWith("- ")) current.items.push(line.slice(2).trim());
    else current.paragraphs.push(line.trim());
  }
  return { intro: introLines.join(" "), sections };
}

function render(resource: ResourceMeta): string {
  const l = resource.locale;
  const c = copy[l];
  const { intro, sections } = parse(resource.content);
  const tip = sections.find((s) => TIP_HEADINGS.has(s.heading));
  const body = sections.filter((s) => !SKIP_HEADINGS.has(s.heading) && !TIP_HEADINGS.has(s.heading));
  const ctaUrl = `fastforwardtyping.com${localizedPath(l, "speedTest")}`;

  const sectionHtml = body
    .map((s) => {
      const items = s.items.map((it) => {
        // "`Ctrl + C` - Kopieren": keys left, description right. Bullets
        // without keys (emoji sheet) are plain sentences.
        const m = it.match(/^(`[^`]+`(?:\s+(?:oder|or|ou)\s+`[^`]+`)?)\s+-\s+(.*)$/);
        if (m) return `<li class="row"><span class="k">${inline(m[1])}</span><span class="d">${inline(m[2])}</span></li>`;
        return `<li class="plain">${inline(it)}</li>`;
      });
      const paras = s.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("");
      return `<section><h2>${escapeHtml(s.heading)}</h2>${items.length ? `<ul>${items.join("")}</ul>` : ""}${paras}</section>`;
    })
    .join("");

  const tipHtml = tip
    ? `<aside class="tip"><span class="label">${escapeHtml(c.tip)}</span>${tip.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("")}${tip.items.map((i) => `<p>${inline(i)}</p>`).join("")}</aside>`
    : "";

  return `<!doctype html>
<html lang="${l}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(resource.title)}</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=JetBrains+Mono:wght@500;600&display=block" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    width: 210mm; height: 297mm; padding: 14mm 14mm 12mm;
    font-family: Poppins, system-ui, sans-serif; color: #050111; background: #fff;
    font-size: 9.6pt; line-height: 1.35; display: flex; flex-direction: column;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 5mm; border-bottom: 2px solid #3f0ff2; }
  .brand { display: flex; align-items: center; gap: 3mm; }
  .logo { width: 11mm; height: 11mm; border-radius: 2.6mm; background: #3f0ff2; color: #fff; font-weight: 800; font-size: 17pt; display: flex; align-items: center; justify-content: center; letter-spacing: -0.5px; }
  .brand .name { font-weight: 800; font-size: 13pt; }
  .brand .name b { color: #3f0ff2; }
  .site { font-weight: 600; font-size: 9pt; color: #3f0ff2; background: #edf656; padding: 1.2mm 3.5mm; border-radius: 99px; }
  h1 { font-size: 19pt; font-weight: 800; line-height: 1.15; margin: 6mm 0 1.5mm; letter-spacing: -0.2px; }
  .intro { color: #4b4b57; margin: 0 0 5mm; max-width: 165mm; }
  main { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; align-content: start; }
  section { background: #eeecfe; border-radius: 3.5mm; padding: 3.5mm 4mm 3mm; break-inside: avoid; }
  section.wide { grid-column: 1 / -1; }
  h2 { font-size: 8.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #3f0ff2; margin: 0 0 2mm; }
  ul { list-style: none; margin: 0; padding: 0; }
  li.row { display: flex; align-items: baseline; gap: 3mm; padding: 1.1mm 0; border-top: 1px solid rgba(63,15,242,0.10); }
  li.row:first-child { border-top: 0; }
  li.plain { position: relative; padding: 1mm 0 1mm 4mm; }
  li.plain::before { content: ""; position: absolute; left: 0; top: 2.6mm; width: 1.8mm; height: 1.8mm; border-radius: 50%; background: #3f0ff2; }
  .k { flex: 0 0 46%; }
  .d { flex: 1; }
  .keys { white-space: nowrap; }
  kbd { font-family: "JetBrains Mono", ui-monospace, monospace; font-weight: 600; font-size: 8pt; background: #fff; border: 1px solid #c9c4f5; border-bottom-width: 2px; border-radius: 1.4mm; padding: 0.4mm 1.6mm; color: #050111; }
  .plus { color: #7a7a8c; margin: 0 0.9mm; font-size: 8pt; }
  section p { margin: 0 0 1.5mm; }
  section p:last-child { margin-bottom: 0; }
  .tip { grid-column: 1 / -1; background: #fff; border: 1.5px solid #edf656; border-left: 4mm solid #edf656; border-radius: 3.5mm; padding: 3mm 4mm; }
  .tip .label { display: block; font-weight: 800; font-size: 8.5pt; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1mm; }
  .tip p { margin: 0; }
  footer { margin-top: 5mm; padding-top: 3.5mm; border-top: 1px solid #d9d5f7; display: flex; justify-content: space-between; align-items: center; gap: 6mm; font-size: 8.5pt; color: #4b4b57; }
  footer .cta { font-weight: 600; color: #050111; }
  footer .cta b { color: #3f0ff2; font-weight: 600; }
</style>
</head>
<body>
  <header>
    <div class="brand"><div class="logo">&gt;&gt;</div><div class="name">Fast Forward <b>&gt;&gt;</b> Typing</div></div>
    <div class="site">fastforwardtyping.com</div>
  </header>
  <h1>${escapeHtml(resource.title)}</h1>
  <p class="intro">${inline(intro)}</p>
  <main>
    ${sectionHtml}
    ${tipHtml}
  </main>
  <footer>
    <div class="cta">${escapeHtml(c.cta)}: <b>${escapeHtml(ctaUrl)}</b></div>
    <div>${escapeHtml(c.footer)} © ${new Date().getFullYear()} Fast Forward &gt;&gt; Typing</div>
  </footer>
</body>
</html>`;
}

function buildOne(resource: ResourceMeta): string {
  mkdirSync(TMP_DIR, { recursive: true });
  const htmlPath = resolve(TMP_DIR, `${resource.slug}.html`);
  const pdfPath = resolve(OUT_DIR, `${resource.slug}.pdf`);
  writeFileSync(htmlPath, render(resource));
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=8000",
      `--print-to-pdf=${pdfPath}`,
      `file://${htmlPath}`,
    ],
    { stdio: "pipe" }
  );
  return pdfPath;
}

function main() {
  if (!existsSync(CHROME)) {
    console.error(`Chrome not found at ${CHROME}; set CHROME_PATH.`);
    process.exit(1);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const only = process.argv[2];
  let count = 0;
  for (const locale of locales) {
    for (const r of getResourcesByLocale(locale).filter((r) => r.type === "lead-magnet")) {
      if (only && r.slug !== only) continue;
      const out = buildOne(r);
      count += 1;
      console.log(`${r.locale}  ${out.replace(process.cwd() + "/", "")}`);
    }
  }
  console.log(`${count} cheat sheet PDFs written to public/downloads/`);
}

main();
