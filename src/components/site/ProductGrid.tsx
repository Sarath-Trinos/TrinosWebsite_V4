import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";
import { productsContent, productOrder } from "@/lib/products-content";

const ProductGrid = () => (
  <section id="products" className="scroll-mt-24 py-10 bg-surface-soft">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="max-w-3xl mb-12">
        <span className="chip mb-5">Why we build our own products</span>
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">Proof, not</span>{" "}
          <span className="text-brand-gradient-reverse">promises.</span>
        </h2>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          We don't only build for clients; we build, launch and scale our own AI platforms.
          Each solves a hard problem under production conditions: regulated compliance, large-scale
          data, multi-tenant isolation and high-stakes decisions. The result is battle-tested AI
          capability we can adapt to your industry, not a slide-deck concept.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
        {productOrder.map((slug) => {
          const p = productsContent[slug];
          const Icon = p.icon;
          return (
            <a
              key={slug}
              href={`/products/${p.slug}`}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-surface-dark text-on-surface-dark p-7 lg:p-8 shadow-card hover:shadow-glow transition-all hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${p.accent.text}`}>
                  {p.category}
                </span>
                <span className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                  <Icon className="w-5 h-5 text-white/70" strokeWidth={1.75} />
                </span>
              </div>

              <h3 className={`mt-4 ${t.cardHeadlineMedium} text-on-surface-dark`}>{p.name}</h3>
              <p className={`mt-2 ${t.body} text-white/70`}>{p.cardSummary}</p>

              {/* Headline stats: large number, small label */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {p.cardStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className={`${t.stat} text-on-surface-dark leading-none`}>{stat.value}</div>
                    <div className="mt-1.5 text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.cardTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-glow">
                View case study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductGrid;
