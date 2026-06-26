function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code class="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-dark-surface text-sm font-mono">$1</code>'
    )
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-indigo hover:underline font-medium">$1</a>'
    );
}

function markdownToHtml(md: string): string {
  const blocks = md.trim().split(/\n\n+/);
  return blocks
    .map((block) => {
      const t = block.trim();
      if (t.startsWith("### "))
        return `<h3 class="text-lg font-bold text-dark-text dark:text-white mt-8 mb-3">${processInline(t.slice(4))}</h3>`;
      if (t.startsWith("## "))
        return `<h2 class="text-xl font-bold text-dark-text dark:text-white mt-10 mb-4">${processInline(t.slice(3))}</h2>`;
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
        return `<blockquote class="border-l-4 border-indigo/30 pl-4 italic text-zinc-500 dark:text-zinc-400 my-6">${processInline(t.replace(/^> /gm, ""))}</blockquote>`;
      return `<p class="leading-relaxed">${processInline(t)}</p>`;
    })
    .join("\n");
}

export function Markdown({ content }: { content: string }) {
  return (
    <div
      className="space-y-4 text-zinc-700 dark:text-zinc-300 text-base"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
    />
  );
}
