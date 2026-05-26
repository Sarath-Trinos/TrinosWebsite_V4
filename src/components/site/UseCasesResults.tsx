import { type as t } from "@/lib/typography";
import { Target, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

type UseCase = {
  icon: typeof Target;
  title: string;
  description: string;
};

const useCases: UseCase[] = [
  {
    icon: Target,
    title: "High-Accuracy Operations",
    description:
      "Targeted models can improve accuracy on complex domain language and repeatable workflows.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description:
      "Approved corrections and production signals can reduce repeated errors and improve system behavior over time.",
  },
  {
    icon: Sparkles,
    title: "The Result",
    description:
      "Your AI investment can become more valuable as it captures proprietary workflows, business logic, and operational patterns.",
  },
];

const UseCasesResults = () => (
  <section id="use-cases" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        titleClassName={t.sectionHeadlineLg}
        title={
          <>
            <span className="text-black">Use cases</span>{" "}
            <span className="text-brand-gradient-reverse">&amp; results</span>
          </>
        }
        subtitle="What compounding intelligence looks like in production"
        description="From targeted accuracy gains to long-term operational leverage — see how the Trinos Edge translates into measurable business outcomes."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {useCases.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group tile bg-card p-7 flex flex-col gap-5 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div>
              <h3 className={`${t.cardHeadline} text-foreground`}>{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-balance">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesResults;
