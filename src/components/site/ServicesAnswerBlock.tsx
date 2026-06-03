import { type as t } from "@/lib/typography";

const ServicesAnswerBlock = () => (
  <section id="services-answer" className="py-20 bg-background">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="tile bg-surface-soft p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="relative">
          <h2 className={`${t.sectionHeadlineMd} text-foreground`}>
            What services does Trinos provide?
          </h2>
          <p className={`mt-5 ${t.bodyLg} text-muted-foreground`}>
            Trinos provides AI-first enterprise services including{" "}
            <span className="font-semibold text-foreground">Agentic AI</span>,{" "}
            <span className="font-semibold text-foreground">AI Workflow Automation</span>,{" "}
            <span className="font-semibold text-foreground">LLM Fine Tuning</span>,{" "}
            <span className="font-semibold text-foreground">Generative AI and Analytics</span>,{" "}
            <span className="font-semibold text-foreground">AI Voice Assistants</span>,{" "}
            <span className="font-semibold text-foreground">Computer Vision</span>,{" "}
            <span className="font-semibold text-foreground">Enterprise Resource Planning</span>,{" "}
            <span className="font-semibold text-foreground">Social Media Automation</span>,{" "}
            <span className="font-semibold text-foreground">Web Development</span>, and{" "}
            <span className="font-semibold text-foreground">Mobile App Development</span>. Each
            service is designed to help organizations connect AI with real workflows, data systems
            and operational goals.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesAnswerBlock;
