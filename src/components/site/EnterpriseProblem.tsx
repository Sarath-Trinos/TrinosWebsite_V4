import { type as t } from "@/lib/typography";

const EnterpriseProblem = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="max-w-4xl">
        <h2
          className={`${t.sectionHeadlineLg} font-normal text-foreground`}
        >
          Your Data Is Not the Problem.{" "}
          <span className="text-brand-gradient-reverse">
            Your Execution Layer Is.
          </span>
        </h2>
        <p className={`mt-6 ${t.bodyLg} text-muted-foreground`}>
          Most enterprises already have data, systems, and domain expertise.
          The challenge is turning those assets into operational intelligence.
          Legacy systems create friction. Generic AI tools fail when they meet
          real workflows, permissions, compliance needs, and business rules.
          Trinos builds AI-first systems that connect to your enterprise
          context, respect your governance model, and take measurable action
          inside your existing operations.
        </p>
      </div>
    </div>
  </section>
);

export default EnterpriseProblem;
