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
                ? "border-primary/30 bg-card shadow-glow"
                : "border-transparent bg-transparent hover:border-primary/30 hover:bg-card hover:shadow-glow"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 cursor-pointer list-none p-6 text-left"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-surface-soft text-primary font-bold grid place-items-center text-sm">
                Q
              </span>
              <h3 className={`${t.cardHeadlineSm} text-foreground flex-1`}>
                {faq.question}
              </h3>
              <span
                className={`shrink-0 text-primary text-2xl leading-none transition-transform ${
                  isOpen ? "rotate-45" : ""
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
                  <p className={`${t.body} text-muted-foreground`}>{faq.answer}</p>
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
