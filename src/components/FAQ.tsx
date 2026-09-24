"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  // Optional: turns one substring of `answer` into a link (e.g. "the
  // form below" -> #contact). The JSON-LD schema always uses the plain
  // `answer` text, so this never affects the FAQPage markup - only the
  // on-page rendering.
  answerLink?: { text: string; href: string };
};

type Props = {
  title: string;
  items: FAQItem[];
};

function renderAnswer(item: FAQItem) {
  if (!item.answerLink || !item.answer.includes(item.answerLink.text)) {
    return item.answer;
  }
  const [before, after] = item.answer.split(item.answerLink.text);
  return (
    <>
      {before}
      <a href={item.answerLink.href} className="text-indigo underline hover:no-underline">
        {item.answerLink.text}
      </a>
      {after}
    </>
  );
}

export function FAQ({ title, items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">{title}</h2>
      <div className="max-w-2xl mx-auto divide-y divide-zinc-200 dark:divide-dark-border">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-center justify-between w-full py-5 text-left gap-4"
            >
              <span className="font-medium text-dark-text dark:text-white">{item.question}</span>
              <svg
                className={`w-5 h-5 shrink-0 text-zinc-600 transition-transform duration-200 ${
                  open === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                open === i ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{renderAnswer(item)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
