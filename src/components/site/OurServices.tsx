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
  /** Optional cover image shown in the card media area instead of the icon. */
  image?: string;
  /** Optional object-position for the cover image crop (Tailwind class). Defaults to centered. */
  imagePosition?: string;
};

type ServiceGroup = {
  category: string;
  intro: string;
  /** Tailwind classes for the per-category color accent (carried to detail pages). */
  accent: {
    /** Left border + dot on the category heading. */
    bar: string;
    /** Icon tile background tint inside each card. */
    tile: string;
  };
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "Agentic Automation",
    intro:
      "AI that takes action. Agents and workflows that plan, route and execute work across your systems, with approvals and audit trails.",
    accent: {
      bar: "bg-primary",
      tile: "from-primary/40 via-primary/15 to-[#0f1115]",
    },
    services: [
      {
        icon: Bot,
        title: "Agentic AI",
        description:
          "AI agents that plan tasks, connect to approved systems and coordinate work across enterprise workflows, with human oversight, scoped permissions and audit controls.",
        href: "/services/agentic-ai",
      },
      {
        icon: Workflow,
        title: "AI Workflow Automation",
        description:
          "Workflow systems that connect tasks, approvals, business rules and applications into one coordinated process layer.",
        href: "/services/ai-workflow-automation",
        image: "/service/AI Workflow automation.png",
        imagePosition: "object-top",
      },
      {
        icon: Mic,
        title: "AI Voice Assistants",
        description:
          "Voice AI for support, sales and internal operations that answers questions, captures information and triggers approved workflows.",
        href: "/services/ai-voice-assistants",
        image: "/service/AI Voice assistant.png",
      },
      {
        icon: Share2,
        title: "Social Media Automation",
        description:
          "AI-supported content operations for research, drafting, approval, scheduling and reporting, with brand tone and review control kept in place.",
        href: "/services/social-media-automation",
        image: "/service/Social media automation.png",
      },
    ],
  },
  {
    category: "AI Intelligence Systems",
    intro:
      "AI that understands. Models and analytics that turn your data, documents and images into reliable, traceable insight.",
    accent: {
      bar: "bg-cyan-400",
      tile: "from-cyan-400/40 via-cyan-400/15 to-[#0f1115]",
    },
    services: [
      {
        icon: BrainCircuit,
        title: "LLM Fine Tuning",
        description:
          "Domain-tuned language models trained on your data, terminology and task patterns to improve reliability for defined enterprise use cases.",
        href: "/services/llm-fine-tuning",
        image: "/service/LLM-fine-tuning.png",
      },
      {
        icon: BarChart3,
        title: "Generative AI and Analytics",
        description:
          "Conversational dashboards and intelligent reporting that turn approved enterprise data into sourced, decision-ready insight.",
        href: "/services/generative-ai-analytics",
        image: "/service/Gen AI.png",
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description:
          "Image, video and document intelligence for defect detection, OCR, quality control, asset tracking and physical workflow automation.",
        href: "/services/computer-vision",
        image: "/service/computer vision.png",
      },
    ],
  },
  {
    category: "Enterprise Platforms",
    intro:
      "The foundation. ERP, web and mobile systems engineered to be secure, integrated and AI-ready from day one.",
    accent: {
      bar: "bg-violet-400",
      tile: "from-violet-400/40 via-violet-400/15 to-[#0f1115]",
    },
    services: [
      {
        icon: Briefcase,
        title: "Enterprise Resource Planning",
        description:
          "ERP architecture, implementation and integration across leading platforms, with clean data and an AI-ready operating foundation.",
        href: "/services/enterprise-resource-planning",
      },
      {
        icon: Globe,
        title: "Web Development",
        description:
          "Enterprise websites, portals and web applications with secure architecture, strong UX, system integration and AI-ready features.",
        href: "/services/web-development",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Cross-platform mobile apps with secure data connections, workflow access and embedded AI for field teams, customers and employees.",
        href: "/services/mobile-app-development",
      },
    ],
  },
];

const OurServices = () => {
  return (
    <section id="our-services" className="scroll-mt-24 py-10 bg-background">
      <div className="container-px max-w-[1200px] mx-auto">
        <div className="max-w-6xl mb-6">
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

        <div className="space-y-8">
          {serviceGroups.map(({ category, intro, accent, services }) => (
            <div key={category}>
              <div className="mb-6 flex gap-4">
                <span
                  className={`mt-1.5 w-1 self-stretch rounded-full ${accent.bar}`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className={`${t.subheadlineSemibold} text-foreground`}>
                    {category}
                  </h3>
                  <p className={`mt-1 ${t.body} text-muted-foreground max-w-2xl`}>
                    {intro}
                  </p>
                </div>
              </div>

              <div
                className={`grid sm:grid-cols-2 ${
                  services.length === 4
                    ? "gap-4 lg:grid-cols-4"
                    : "gap-8 lg:grid-cols-3"
                }`}
              >
                {services.map(({ icon: Icon, title, description, href, image, imagePosition }, idx) => (
                  <a
                    key={title}
                    href={href}
                    className="group rounded-2xl overflow-hidden bg-surface-dark text-on-surface-dark shadow-card hover:shadow-glow transition-shadow duration-300 hover:-translate-y-1 animate-zoom-in-br origin-bottom-right block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="relative h-44 overflow-hidden bg-surface-dark">
                      {image ? (
                        <>
                          <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className={`absolute inset-0 h-full w-full object-cover ${imagePosition ?? ""} transition-transform duration-300 group-hover:scale-105`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
                          <div className="absolute inset-0 grid place-items-center">
                            <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 grid place-items-center shadow-soft transition-transform duration-300 group-hover:scale-110">
                              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6">
                      <h4 className={t.cardHeadlineSemibold}>
                        {title}
                      </h4>
                      <p className="mt-3 text-sm text-white/85 leading-relaxed line-clamp-3">
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
