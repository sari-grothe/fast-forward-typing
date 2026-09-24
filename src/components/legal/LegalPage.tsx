import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Markdown, extractHeadings } from "@/lib/markdown";
import { ArticleToc } from "@/components/resources/ArticleToc";
import { fillCompanyTokens } from "@/lib/legal/company";
import { legalDocs } from "@/lib/legal/docs";
import type { LegalKey } from "@/lib/legal/types";

const labels: Record<Locale, { updated: string; toc: string; more: string }> = {
  de: { updated: "Stand", toc: "Inhalt", more: "Weitere Rechtstexte" },
  en: { updated: "Last updated", toc: "Contents", more: "Other legal documents" },
  fr: { updated: "Dernière mise à jour", toc: "Sommaire", more: "Autres documents juridiques" },
};

const navOrder: LegalKey[] = ["imprint", "privacy", "terms", "withdrawal", "business-terms", "dpa"];

export function LegalPage({ docKey, locale }: { docKey: LegalKey; locale: Locale }) {
  const doc = legalDocs[docKey][locale];
  const content = fillCompanyTokens(doc.content, locale);
  const headings = extractHeadings(content);
  const l = labels[locale];

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:items-start">
        <aside className="hidden lg:block sticky top-24 self-start">
          <ArticleToc headings={headings} label={l.toc} />
        </aside>

        <article className="min-w-0">
          <header className="mb-8 space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-dark-text dark:text-white leading-tight">
              {doc.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {l.updated}: {doc.updated}
            </p>
          </header>

          {headings.length >= 3 && (
            <details className="lg:hidden mb-8 rounded-xl border border-zinc-200 dark:border-dark-border p-4">
              <summary className="text-sm font-semibold text-dark-text dark:text-white cursor-pointer">{l.toc}</summary>
              <ul className="mt-3 space-y-2 text-sm">
                {headings.map((hd) => (
                  <li key={hd.id} className={hd.level === 3 ? "pl-4" : ""}>
                    <a href={`#${hd.id}`} className="text-zinc-500 dark:text-zinc-400 hover:text-indigo transition-colors">
                      {hd.text}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <Markdown content={content} className="[&_p]:whitespace-pre-line [&_blockquote]:whitespace-pre-line [&_p]:max-w-3xl [&_ul]:max-w-3xl [&_ol]:max-w-3xl [&_blockquote]:max-w-3xl" />

          <nav aria-label={l.more} className="mt-14 pt-6 border-t border-zinc-200 dark:border-dark-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">{l.more}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {navOrder
                .filter((k) => k !== docKey)
                .map((k) => (
                  <li key={k}>
                    <Link href={`/${locale}/${k}`} className="text-indigo hover:underline">
                      {legalDocs[k][locale].title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </div>
    </div>
  );
}
