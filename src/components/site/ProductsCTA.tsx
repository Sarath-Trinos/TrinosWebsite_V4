import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const ProductsCTA = () => (
  <section id="build-with-us" className="py-16 md:py-20">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="tile bg-gradient-cta px-8 py-12 md:px-12 md:py-14 lg:px-20 lg:py-16 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-white/40 blur-3xl" />
        <div className="relative">
          <h2 className={`${t.sectionHeadline} text-white`}>
            Building a product like these?
          </h2>
          <p className={`mt-5 ${t.subheadline} text-white/85 max-w-5xl mx-auto text-balance`}>
            Let's talk. We partner with teams to design and ship AI products from MVP to scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsCTA;
