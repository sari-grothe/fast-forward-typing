"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/markdown";

type Props = {
  headings: Heading[];
  label: string;
};

export function ArticleToc({ headings, label }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Among headings currently intersecting the top band of the
        // viewport, the one closest to the top is "current" - avoids
        // jumping to whichever section merely finished loading last.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav aria-label={label} className="text-sm">
      <p className="font-semibold text-dark-text dark:text-white mb-3 text-xs uppercase tracking-wider">{label}</p>
      <ul className="space-y-1 border-l border-zinc-200 dark:border-dark-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block py-1 border-l-2 -ml-px transition-colors leading-snug ${
                h.level === 3 ? "pl-8" : "pl-4"
              } ${
                activeId === h.id
                  ? "border-indigo text-indigo font-medium"
                  : "border-transparent text-zinc-500 dark:text-zinc-400 hover:text-dark-text dark:hover:text-white"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
