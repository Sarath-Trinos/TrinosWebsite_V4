"use client";

import { useState } from "react";
import { type as t } from "@/lib/typography";
import type { ServiceFAQ as FAQ } from "@/lib/services-content";

type Props = { faqs: FAQ[] };

const ServiceFAQ = ({ faqs }: Props) => {
  // null = all collapsed; otherwise the index of the open FAQ
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // Fixed min-height reserves room for one open answer so the list never
    // changes height - the section below it (the CTA) stays perfectly still.
    <div className="max-w-4xl mx-auto space-y-4 min-h-[26rem]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`group rounded-2xl border transition-all ${
              isOpen
                ? "border-white/10 bg-surface-dark text-on-surface-dark shadow-glow"
                : "border-transparent bg-transparent hover:border-white/10 hover:bg-surface-dark hover:text-on-surface-dark hover:shadow-glow"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 cursor-pointer list-none p-6 text-left"
            >
              <span
                className={`shrink-0 w-8 h-8 rounded-full font-bold grid place-items-center text-sm transition-colors ${
                  isOpen
                    ? "bg-white/10 text-primary-glow"
                    : "bg-surface-soft text-primary group-hover:bg-white/10 group-hover:text-primary-glow"
                }`}
              >
                Q
              </span>
              <h3
                className={`${t.cardHeadlineSm} flex-1 transition-colors ${
                  isOpen
                    ? "text-on-surface-dark"
                    : "text-foreground group-hover:text-on-surface-dark"
                }`}
              >
                {faq.question}
              </h3>
              <span
                className={`shrink-0 text-2xl leading-none transition-transform ${
                  isOpen ? "rotate-45 text-primary-glow" : "text-primary group-hover:text-primary-glow"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <p className={`${t.body} text-white/70`}>{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceFAQ;
