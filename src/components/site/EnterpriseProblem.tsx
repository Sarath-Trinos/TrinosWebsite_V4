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
          Most enterprises already have data, systems and domain expertise.
          The real challenge is converting those assets into operational
          intelligence. Legacy systems create friction, while generic AI tools
          struggle with real workflows, permissions, compliance requirements
          and business rules. Trinos builds AI-first systems that connect with
          your enterprise context, respect your governance model and drive
          measurable action inside your existing operations.
        </p>
      </div>
    </div>
  </section>
);

export default EnterpriseProblem;
