"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  items: FAQItem[];
};

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
                className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
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
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
