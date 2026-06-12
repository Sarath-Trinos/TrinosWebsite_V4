import { type as t } from "@/lib/typography";

const proofPoints = [
  {
    source: "From TraceFlow",
    title: "Industrial-Grade Traceability",
    body: "LOT-level tracking, automated compliance enforcement and real-time inventory visibility, adaptable to any supply-chain or asset-management context.",
  },
  {
    source: "From Moltter Studio",
    title: "Multi-Stage Decision Intelligence",
    body: "A full multi-perspective deliberation system, built and running end to end, not a concept.",
  },
  {
    source: "From Trip11",
    title: "Vertical SaaS Consolidation",
    body: "One operating system replacing a seven-tool stack (itineraries, CRM, payments, proposals and analytics) under role-based access, adaptable to any vertical workflow.",
  },
];

const ProductsProof = () => (
  <section className="py-10 bg-background">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="max-w-3xl mb-12">
        <span className="chip mb-5">Across all products</span>
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">What we've</span>{" "}
          <span className="text-brand-gradient-reverse">proven.</span>
        </h2>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          Every Trinos product demonstrates battle-tested AI capability that transfers to your
          industry, from regulated compliance to large-scale data operations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {proofPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-white/10 bg-surface-dark text-on-surface-dark p-8 shadow-card hover:shadow-glow transition-shadow flex flex-col"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-glow mb-3">
              {point.source}
            </div>
            <h3 className={`${t.cardHeadlineMedium} text-on-surface-dark`}>{point.title}</h3>
            <p className={`mt-3 ${t.body} text-white/70`}>{point.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsProof;
