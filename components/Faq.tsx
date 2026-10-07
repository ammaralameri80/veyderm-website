"use client";

import { useState } from "react";
import { content, type Lang } from "@/lib/content";

type Item = { q: string; a: string };

export function Faq({
  lang,
  items,
  tag,
  title,
}: {
  lang?: Lang;
  items?: Item[];
  tag?: string;
  title?: string;
}) {
  const fallback = content[lang ?? "en"];
  const list = items ?? fallback.faq;
  const tagText = tag ?? fallback.faqTitle.tag;
  const titleText = title ?? fallback.faqTitle.h2;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sec faq" id="faq">
      <div className="wrap">
        <div className="sec-tag">{tagText}</div>
        <h2>{titleText}</h2>
        <div className="faq-list">
          {list.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <h3 className="faq-q">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <svg className="faq-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  className="faq-a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
