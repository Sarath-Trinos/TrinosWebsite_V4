import { type as t } from "@/lib/typography";
import {
  Bot,
  Workflow,
  BrainCircuit,
  BarChart3,
  Mic,
  Eye,
  Briefcase,
  Share2,
  Globe,
  Smartphone,
} from "lucide-react";

type Service = {
  icon: typeof BarChart3;
  title: string;
  description: string;
  href: string;
};

type ServiceGroup = {
  category: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "Agentic Automation",
    services: [
      {
        icon: Bot,
        title: "Agentic AI",
        description:
          "AI agents that plan tasks, connect with approved systems and coordinate work across enterprise workflows. Built with human oversight, scoped permissions and audit controls.",
        href: "/services/agentic-ai",
      },
      {
        icon: Workflow,
        title: "AI Workflow Automation",
        description:
          "AI driven workflow systems that connect tasks, approvals, business rules and enterprise applications into one coordinated process layer.",
        href: "/services/ai-workflow-automation",
      },
      {
        icon: Mic,
        title: "AI Voice Assistants",
        description:
          "Voice based AI assistants for support, sales and internal operations. Designed to answer questions, collect information and trigger approved workflows.",
        href: "/services/ai-voice-assistants",
      },
      {
        icon: Share2,
        title: "Social Media Automation",
        description:
          "AI supported content operations for research, drafting, approvals, scheduling and reporting while keeping brand tone and review control in place.",
        href: "/services/social-media-automation",
      },
    ],
  },
  {
    category: "AI Intelligence Systems",
    services: [
      {
        icon: BrainCircuit,
        title: "LLM Fine Tuning",
        description:
          "Domain tuned language models trained around your data, terminology and task patterns to improve reliability for defined enterprise use cases.",
        href: "/services/llm-fine-tuning",
      },
      {
        icon: BarChart3,
        title: "Generative AI and Analytics",
        description:
          "Conversational dashboards and intelligent reporting systems that turn approved enterprise data into clear, sourced and decision ready insights.",
        href: "/services/generative-ai-analytics",
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description:
          "Image, video and document intelligence for defect detection, OCR, quality control, asset tracking and physical workflow automation.",
        href: "/services/computer-vision",
      },
    ],
  },
  {
    category: "Enterprise Platforms",
    services: [
      {
        icon: Briefcase,
        title: "Enterprise Resource Planning",
        description:
          "ERP architecture, implementation and integration across leading platforms with clean data, connected workflows and an AI ready operating foundation.",
        href: "/services/enterprise-resource-planning",
      },
      {
        icon: Globe,
        title: "Web Development",
        description:
          "Enterprise websites, portals and web applications built with secure architecture, intuitive UX, system integration and AI ready features.",
        href: "/services/web-development",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Cross platform mobile apps with secure data connections, workflow access and embedded AI capabilities for field teams, customers and employees.",
        href: "/services/mobile-app-development",
      },
    ],
  },
];

const OurServices = () => {
  return (
    <section id="our-services" className="py-10 bg-background">
      <div className="container-px max-w-[1400px] mx-auto">
        <div className="max-w-6xl mb-12">
          <span className="chip mb-5">Our Services</span>
          <h2 className={t.sectionHeadlineLg}>
            <span className="text-black">Our</span>{" "}
            <span className="text-brand-gradient-reverse">services</span>
          </h2>
          <p className={`mt-3 ${t.subheadlineSemibold} text-foreground`}>
            AI first services across automation, intelligence and enterprise platforms.
          </p>
          <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
            Ten focused services that help enterprises plan, build and scale practical AI systems
            inside business environments where security, usability and operational control matter.
          </p>
        </div>

        <div className="space-y-14">
          {serviceGroups.map(({ category, services }) => (
            <div key={category}>
              <h3 className={`${t.subheadlineSemibold} text-foreground mb-6`}>
                {category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(({ icon: Icon, title, description, href }, idx) => (
                  <a
                    key={title}
                    href={href}
                    className="group rounded-2xl overflow-hidden bg-surface-dark text-on-surface-dark shadow-card hover:shadow-glow transition-shadow duration-300 hover:-translate-y-1 animate-zoom-in-br origin-bottom-right block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/40 via-primary/15 to-[#0f1115]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 grid place-items-center shadow-soft transition-transform duration-300 group-hover:scale-110">
                          <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className={t.cardHeadlineSemibold}>
                        {title}
                      </h4>
                      <p className="mt-3 text-sm text-white/70 leading-relaxed line-clamp-3">
                        {description}
                      </p>
                      <p className="mt-4 text-xs font-medium text-primary-glow">Learn More</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
