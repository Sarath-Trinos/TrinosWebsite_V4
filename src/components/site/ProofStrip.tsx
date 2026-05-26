import { type as t } from "@/lib/typography";

const statements = [
  "Production AI platforms in market",
  "Multi-agent systems at scale",
  "25 years of enterprise ERP delivery",
  "Web and mobile shipping in production",
];

const ProofStrip = () => (
  <section className="bg-white border-y border-border/60">
    <div className="container-px max-w-[1400px] mx-auto py-5 sm:py-6">
      <ul className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
        {statements.map((s) => (
          <li
            key={s}
            className={`flex-1 text-center px-4 py-2 sm:py-0 ${t.bodySm} font-semibold tracking-wide text-foreground/80 uppercase`}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ProofStrip;
