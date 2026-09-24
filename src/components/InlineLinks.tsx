import { Fragment } from "react";

// Renders a plain dictionary string that may contain markdown-style
// external links, "[Wellnomics](https://...)", as text plus <a> tags.
// External sources open in a new tab so the reader never leaves the site.
// Used for the fine-print source lines under the time-savings figures.
const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

export function InlineLinks({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    parts.push(
      <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-indigo">
        {m[1]}
      </a>
    );
    last = i + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}
