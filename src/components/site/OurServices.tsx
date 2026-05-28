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
          "Autonomous AI agents that plan, decide, and act across your enterprise systems — designed to operate inside real business workflows, not isolated demos.",
        href: "/services/agentic-ai",
      },
      {
        icon: Workflow,
        title: "AI Workflow Automation",
        description:
          "End-to-end orchestration of business processes with AI triggers, human approvals, and integrations across CRMs, ERPs, data warehouses, and SaaS tools.",
        href: "/services/ai-workflow-automation",
      },
      {
        icon: Mic,
        title: "AI Voice Assistants",
        description:
          "Multilingual voice agents for support, sales, and operations — grounded in your knowledge base with auditable, secure conversation flows.",
        href: "/services/ai-voice-assistants",
      },
      {
        icon: Share2,
        title: "Social Media Automation",
        description:
          "AI-driven content operations across channels — planning, generation, scheduling, and reporting tuned to your brand voice and compliance requirements.",
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
          "Domain-tuned language models built on your data. We manage datasets, training runs, and evaluations to deliver reliable, on-brand AI outputs.",
        href: "/services/llm-fine-tuning",
      },
      {
        icon: BarChart3,
        title: "Generative AI & Analytics",
        description:
          "Conversational dashboards, intelligent reporting, and generative analytics that turn enterprise data into decisions and narratives.",
        href: "/services/generative-ai-analytics",
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description:
          "Real-time image and video understanding for detection, OCR, and quality control — deployed in the cloud or at the edge for low-latency environments.",
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
          "End-to-end ERP implementation and AI integration across SAP, Oracle, Microsoft Dynamics, Infor, QAD, and EPICOR — aligned to your operating model.",
        href: "/services/enterprise-resource-planning",
      },
      {
        icon: Globe,
        title: "Web Development",
        description:
          "Modern, accessible, performance-optimized websites and web applications with thoughtful UX and AI-powered features built in from day one.",
        href: "/services/web-development",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Cross-platform mobile apps with native-quality experiences, secure data flows, and embedded AI capabilities for field, customer, and internal users.",
        href: "/services/mobile-app-development",
      },
    ],
  },
];

const OurServices = () => {
  return (
    <section id="our-services" className="py-10 bg-background">
      <div className="container-px max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className={t.sectionHeadlineLg}>
            <span className="text-black">Our</span>{" "}
            <span className="text-brand-gradient-reverse">services</span>
          </h2>
          <p className={`mt-3 max-w-2xl ${t.subheadlineSemibold} text-foreground`}>
            AI-first services across automation, intelligence, and enterprise platforms
          </p>
          <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
            Ten focused services built to move enterprises from isolated AI experiments to
            intelligent systems that operate inside real workflows.
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
                      <p className="mt-4 text-xs font-medium text-primary-glow">{category}</p>
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
