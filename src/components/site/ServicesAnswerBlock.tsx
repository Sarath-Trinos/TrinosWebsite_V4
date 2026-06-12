import { type as t } from "@/lib/typography";

const ServicesAnswerBlock = () => (
  <section id="services-answer" className="py-10 bg-background">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="tile bg-surface-soft p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[25rem] h-[25rem] rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="relative">
          <span className="chip mb-5">At a glance</span>
          <h2 className={`${t.sectionHeadlineMd} text-foreground`}>
            What does Trinos provide?
          </h2>
          <p className={`mt-5 ${t.bodyLg} text-muted-foreground`}>
            Trinos provides AI first enterprise services that take organizations from early AI ideas
            to production ready systems. Our work spans ten services across three areas:{" "}
            <span className="font-semibold text-foreground">Agentic Automation</span>,{" "}
            <span className="font-semibold text-foreground">AI Intelligence Systems</span> and{" "}
            <span className="font-semibold text-foreground">Enterprise Platforms</span>. Every
            engagement connects AI to real workflows, trusted data and clear operational control,
            with human oversight built in rather than bolted on.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="chip">Agentic Automation</span>
            <span className="chip">AI Intelligence Systems</span>
            <span className="chip">Enterprise Platforms</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesAnswerBlock;
