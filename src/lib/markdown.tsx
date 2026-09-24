import type { Locale } from "@/i18n/config";
import { resolveInternalLinks } from "@/lib/internal-links";

// Strips the inline markdown/HTML markup a heading might carry (bold,
// links, code) down to plain text, then to a URL-safe slug - shared by
// the renderer (for the <h2 id>) and extractHeadings (for the TOC), so
// the two can never drift into producing different ids for the same text.
function slugify(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .toLowerCase()
    .replace(/[^a-z0-9äöüßàâçéèêëîïôùûœ\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export type Heading = { id: string; text: string; level: 2 | 3 };

// Same block-splitting logic as markdownToHtml below, but only pulls out
// ## / ### lines - used to build the sidebar table of contents without
// re-parsing the full HTML output.
export function extractHeadings(md: string): Heading[] {
  return md
    .trim()
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter((t) => t.startsWith("## ") || t.startsWith("### "))
    .map((t) => {
      const level = t.startsWith("### ") ? 3 : 2;
      const text = t.slice(level === 3 ? 4 : 3);
      return { id: slugify(text), text, level: level as 2 | 3 };
    });
}

function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code class="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-dark-surface text-sm font-mono">$1</code>'
    )
    // External links open in a new tab so the reader never leaves the
    // site; internal links (relative or same-domain) stay in the tab.
    .replace(/\[(.+?)\]\((.+?)\)/g, (_m, label: string, href: string) => {
      const external = /^https?:\/\//.test(href) && !href.startsWith("https://fastforwardtyping.com");
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${href}"${attrs} class="text-indigo hover:underline font-medium">${label}</a>`;
    });
}

function markdownToHtml(md: string): string {
  const blocks = md.trim().split(/\n\n+/);
  return blocks
    .map((block) => {
      const t = block.trim();
      if (t.startsWith("### ")) {
        const raw = t.slice(4);
        return `<h3 id="${slugify(raw)}" class="text-lg font-bold text-dark-text dark:text-white mt-8 mb-3 scroll-mt-24">${processInline(raw)}</h3>`;
      }
      if (t.startsWith("## ")) {
        const raw = t.slice(3);
        return `<h2 id="${slugify(raw)}" class="text-xl font-bold text-dark-text dark:text-white mt-10 mb-4 scroll-mt-24">${processInline(raw)}</h2>`;
      }
      if (/^[-*] /m.test(t)) {
        const items = t
          .split("\n")
          .filter((l) => l.trim())
          .map((l) => `<li>${processInline(l.replace(/^[-*] /, ""))}</li>`)
          .join("");
        return `<ul class="list-disc pl-6 space-y-2 my-4">${items}</ul>`;
      }
      if (/^\d+\. /m.test(t)) {
        const items = t
          .split("\n")
          .filter((l) => l.trim())
          .map((l) => `<li>${processInline(l.replace(/^\d+\. /, ""))}</li>`)
          .join("");
        return `<ol class="list-decimal pl-6 space-y-2 my-4">${items}</ol>`;
      }
      if (t.startsWith("> "))
        return `<blockquote class="border-l-4 border-indigo/30 pl-4 italic text-zinc-600 dark:text-zinc-400 my-6">${processInline(t.replace(/^> /gm, ""))}</blockquote>`;
      if (t.startsWith("|")) {
        const rows = t
          .split("\n")
          .filter((l) => l.trim())
          .map((l) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim()));
        // Row 1 is the header, row 2 is the "---|---" separator (discarded), the rest is the body.
        const [header, , ...body] = rows;
        const thead = `<tr>${header
          .map(
            (c) =>
              `<th class="text-left font-semibold text-dark-text dark:text-white px-3 py-2 border-b-2 border-zinc-200 dark:border-dark-border">${processInline(c)}</th>`
          )
          .join("")}</tr>`;
        const tbody = body
          .map(
            (row) =>
              `<tr>${row
                .map(
                  (c, i) =>
                    `<td class="px-3 py-2 border-b border-zinc-100 dark:border-dark-border/60 ${i === 0 ? "font-medium text-dark-text dark:text-white" : ""}">${processInline(c)}</td>`
                )
                .join("")}</tr>`
          )
          .join("");
        return `<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse"><thead>${thead}</thead><tbody>${tbody}</tbody></table></div>`;
      }
      return `<p class="leading-relaxed">${processInline(t)}</p>`;
    })
    .join("\n");
}

export function Markdown({ content, className = "", locale }: { content: string; className?: string; locale?: Locale }) {
  // With a locale, internal links written as page:/article: keys are
  // resolved to language-native URLs (src/lib/internal-links.ts).
  const md = locale ? resolveInternalLinks(content, locale) : content;
  return (
    <div
      className={`space-y-4 text-zinc-700 dark:text-zinc-300 text-base ${className}`}
      dangerouslySetInnerHTML={{ __html: markdownToHtml(md) }}
    />
  );
}
