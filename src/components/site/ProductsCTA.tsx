import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const steps = [
  {
    num: "1",
    title: "Discovery Workshop",
    body: "Map operational pain points and identify the 2–3 highest-impact AI use cases in your workflows.",
  },
  {
    num: "2",
    title: "AI Readiness Assessment",
    body: "Evaluate data infrastructure, integration points and readiness, producing a clear roadmap.",
  },
  {
    num: "3",
    title: "Proof of Concept",
    body: "A working MVP in 1–2 weeks targeting the highest-impact use case, proving value before scaling.",
  },
];

const ProductsCTA = () => (
  <section id="build-with-us" className="py-10">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="tile bg-gradient-cta px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`${t.sectionHeadline} text-white`}>Let's build together.</h2>
            <p className={`mt-5 ${t.subheadline} text-white/85 text-balance`}>
              We propose a phased engagement that starts by understanding your challenges and moves
              quickly to a working proof of concept.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 p-7"
              >
                <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-white text-primary font-bold mb-4">
                  {step.num}
                </span>
                <h3 className={`${t.cardHeadlineSemibold} text-white`}>{step.title}</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
            >
              Book a Discovery Workshop <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
              <a href="https://www.trinos.ai" className="hover:text-white transition-colors">
                www.trinos.ai
              </a>
              <a href="mailto:info@trinos.ai" className="hover:text-white transition-colors">
                info@trinos.ai
              </a>
              <a href="tel:+919840150765" className="hover:text-white transition-colors">
                +91 98401 50765
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsCTA;
