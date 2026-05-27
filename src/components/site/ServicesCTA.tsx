import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const ServicesCTA = () => (
  <section id="services-cta" className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="tile bg-[#E0F2FF] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/40 blur-3xl" />
        <div className="relative">
          <h2 className={`${t.sectionHeadline} text-[#0C4A6E]`}>
            Ready to Build Your AI-First Enterprise System?
          </h2>
          <p className={`mt-5 ${t.subheadline} text-[#0C4A6E]/80 max-w-2xl mx-auto`}>
            Start with a Discovery Workshop. Trinos will map your workflows, data, systems, and
            bottlenecks before recommending the right AI-first solution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0369A1] text-white hover:bg-[#0C4A6E] font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
            >
              Book a Discovery Workshop <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesCTA;
