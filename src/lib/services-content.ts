import type { LucideIcon } from "lucide-react";
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

export type ServiceDeliverable = {
  title: string;
  description: string;
};

export type ServiceUseCase = {
  title: string;
  description: string;
  image?: string;
  badge?: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceRelatedLink = {
  label: string;
  href: string;
};

export type ServiceContent = {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  pageTitle: string;
  metaDescription: string;
  h1Lead: string;
  h1Highlight: string;
  subHeadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  credibility: string;
  answerHeading: string;
  answerBody: string;
  deliverables: ServiceDeliverable[];
  useCases: ServiceUseCase[];
  result: string;
  techStack: string[];
  industries: string[];
  faqs: ServiceFAQ[];
  finalHeadline: string;
  finalSubText: string;
  finalCTA: { label: string; href: string };
  related: ServiceRelatedLink[];
};

export const servicesContent: Record<string, ServiceContent> = {
  "agentic-ai": {
    slug: "agentic-ai",
    icon: Bot,
    eyebrow: "Agentic AI",
    pageTitle: "Agentic AI Services for Enterprise Workflows | Trinos",
    metaDescription:
      "Deploy AI agents that plan work, connect with enterprise systems and operate with human approvals, permissions and audit trails.",
    h1Lead: "AI Agents That Get",
    h1Highlight: "Enterprise Work Done",
    subHeadline:
      "Trinos builds agentic AI that plans tasks, works across your systems and data, and acts within clear approvals, so AI moves beyond answers to completed work.",
    primaryCTA: { label: "Talk to an AI Architect", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos multi agent architecture supports AI products where autonomous agents analyze, generate and escalate outputs through structured workflows.",
    answerHeading: "What is Agentic AI?",
    answerBody:
      "Agentic AI uses autonomous software agents that understand business context, plan tasks, retrieve data, connect to approved systems and escalate exceptions. Unlike a chatbot that stops at a text reply, an agentic system is built to carry a task through to completion. In an enterprise, that means clear permissions, monitoring and human approval points are not optional, they're the design.",
    deliverables: [
      {
        title: "Multi-Agent System Design",
        description:
          "Specialized agents for research, analysis, validation, reporting and escalation, each with a defined role so complex work breaks into controlled steps.",
      },
      {
        title: "Enterprise System Integration",
        description:
          "Secure connections to approved APIs, CRMs, ERPs, databases and internal platforms, so agents work with real context inside strict access boundaries.",
      },
      {
        title: "Human-in-the-Loop Controls",
        description:
          "Approval checkpoints so high-risk actions require human review before execution, protecting critical decisions while agents prepare and route the work.",
      },
      {
        title: "Monitoring & Audit Trails",
        description:
          "Logs, traceability and exception reporting so operations teams can see what an agent did, why it acted and where a human signed off.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Operations",
        description:
          "Agents monitor incoming tasks, gather data, prepare recommendations and route decisions to the right team, cutting coordination effort on repeatable but context-heavy work.",
        badge: "Operations",
        image: "/service/each%20service%20page/Enterprise%20Operations.webp",
      },
      {
        title: "Decision Intelligence",
        description:
          "Multiple agents analyze a problem from different angles and return a structured brief with risks, assumptions and confidence levels, instead of scattered inputs.",
        badge: "Strategy",
        image: "/service/each%20service%20page/DecisionIntelligence.webp",
      },
    ],
    result:
      "Teams cut repetitive analysis and coordination while keeping human oversight exactly where it matters.",
    techStack: [
      "Python",
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "LlamaIndex",
      "Vector databases",
      "Workflow engines",
      "Secure internal APIs",
    ],
    industries: [
      "Financial services",
      "Insurance",
      "Government",
      "Manufacturing",
      "Enterprise technology",
      "Consulting",
    ],
    faqs: [
      {
        question: "How is Agentic AI different from a chatbot?",
        answer:
          "A chatbot responds to questions. Agentic AI can plan work, retrieve live data, coordinate with approved systems, support permitted actions and escalate cases that need human review. The value is in supporting a full task flow, not only answering a prompt.",
      },
      {
        question: "Can AI agents work with our systems?",
        answer:
          "Yes. Trinos connects agents to approved systems through authenticated APIs with scoped permissions and action logs. The agent only accesses the systems and data that are defined for its role.",
      },
      {
        question: "How do you keep AI agent actions under control?",
        answer:
          "We use permission limits, approval gates, monitoring and audit trails. High value or ambiguous actions require human approval before execution so the system remains controlled and accountable.",
      },
    ],
    finalHeadline: "Put AI Agents to Work on Operational Tasks",
    finalSubText:
      "Start with a focused discovery session to find where agentic AI can reduce repetitive work and speed up decisions.",
    finalCTA: { label: "Book an Agentic AI Workshop", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "LLM Fine Tuning", href: "/services/llm-fine-tuning" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
    ],
  },

  "ai-workflow-automation": {
    slug: "ai-workflow-automation",
    icon: Workflow,
    eyebrow: "AI Workflow Automation",
    pageTitle: "AI Workflow Automation Services | Trinos",
    metaDescription:
      "Automate enterprise processes with AI workflow orchestration, approvals, audit trails, system integrations and exception handling.",
    h1Lead: "Automate the Workflows That",
    h1Highlight: "Span Your Whole Business",
    subHeadline:
      "Trinos connects your systems, approvals and teams into one intelligent process layer, so complex work moves with fewer handoffs and full visibility.",
    primaryCTA: { label: "Map Your Workflow", href: "/contact" },
    secondaryCTA: { label: "Explore Agentic AI", href: "/services/agentic-ai" },
    credibility:
      "Trinos workflow automation architecture supports document review, quality checks, anomaly detection and human approval loops across enterprise operations.",
    answerHeading: "What is AI Workflow Automation?",
    answerBody:
      "AI Workflow Automation uses AI triggers, business rules, system integrations and human approvals to move work across enterprise systems. It reduces manual handoffs, improves process visibility and makes complex operations easier to track. For teams running ERP, CRM, documents, data warehouses and SaaS tools side by side, it becomes the single connected layer for everyday execution.",
    deliverables: [
      {
        title: "Cross-System Orchestration",
        description:
          "One coordinated layer across ERP, CRM, databases, documents, email and internal apps, so teams see exactly where each process stands.",
      },
      {
        title: "AI-Triggered Initiation",
        description:
          "Workflows that start from incoming data, predictive alerts, emails, uploaded documents, tickets or thresholds, without waiting on manual follow-up.",
      },
      {
        title: "Approval & Audit Infrastructure",
        description:
          "Approval screens, escalation paths, decision logs and audit trails for regulated work, keeping human control visible where risk demands it.",
      },
      {
        title: "Exception Handling",
        description:
          "Low-confidence, incomplete or high-risk cases routed to reviewers with full context, while routine work flows automatically.",
      },
    ],
    useCases: [
      {
        title: "Insurance & Document Operations",
        description:
          "Route policy documents, claims and supporting records through extraction, validation, quality checks, anomaly detection, review and approval, cutting repeated manual checking while keeping the full document lifecycle visible.",
        badge: "Documents",
        image: "/service/each%20service%20page/Insurance%20&%20document%20operation.webp",
      },
      {
        title: "HR & Finance Operations",
        description:
          "Coordinate onboarding, procurement, invoice review and approvals across HR, finance and management, with every task and exception traceable instead of buried in email.",
        badge: "Operations",
        image: "/service/each%20service%20page/HR%20&%20finance%20operation.webp",
      },
    ],
    result:
      "Fewer process delays, clearer visibility and human approval kept where the business needs it.",
    techStack: [
      "Python",
      "REST APIs",
      "Webhooks",
      "AWS Step Functions",
      "SAP & Oracle integrations",
      "Workflow engines",
      "Secure databases",
    ],
    industries: [
      "Insurance",
      "Financial services",
      "Healthcare",
      "HR",
      "Manufacturing",
      "Enterprise technology",
    ],
    faqs: [
      {
        question: "How is workflow automation different from Agentic AI?",
        answer:
          "Workflow automation follows defined process steps, triggers and routing logic. Agentic AI adds adaptive agents that can reason, connect with approved systems and support dynamic tasks within controlled boundaries. Many enterprise solutions use both, with workflow automation providing the structure and agents adding flexibility where needed.",
      },
      {
        question: "Will this replace our existing software?",
        answer:
          "No. Trinos connects and improves your current ERP, CRM, SaaS and internal tools through APIs and workflow layers. The goal is to make existing systems work together more smoothly rather than force a disruptive platform replacement.",
      },
      {
        question: "Can workflows include human approvals?",
        answer:
          "Yes. We design human review points, escalation rules and decision logs wherever business risk or compliance requires oversight. This keeps automation useful without removing accountability from important decisions.",
      },
    ],
    finalHeadline: "Cut the Manual Handoffs Across Your Business",
    finalSubText:
      "We'll map one complex workflow and pinpoint where AI automation can reduce cycle time, errors and operational friction.",
    finalCTA: { label: "Schedule a Process Mapping Workshop", href: "/contact" },
    related: [
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "AI Voice Assistants", href: "/services/ai-voice-assistants" },
    ],
  },

  "llm-fine-tuning": {
    slug: "llm-fine-tuning",
    icon: BrainCircuit,
    eyebrow: "LLM Fine Tuning",
    pageTitle: "LLM Fine Tuning Services | Trinos",
    metaDescription:
      "Build domain specific language models with dataset curation, instruction fine tuning, small model strategy and enterprise evaluation.",
    h1Lead: "Language Models That",
    h1Highlight: "Speak Your Business",
    subHeadline:
      "Trinos fine-tunes models around your domain, documents and terminology, and tells you honestly when fine-tuning isn't the right answer.",
    primaryCTA: { label: "Assess Your Model Opportunity", href: "/contact" },
    secondaryCTA: {
      label: "Explore Generative AI and Analytics",
      href: "/services/generative-ai-analytics",
    },
    credibility:
      "Custom domain specific modeling supports Trinos AI platforms that need high accuracy across regulated, technical and operations heavy language.",
    answerHeading: "What is LLM Fine Tuning?",
    answerBody:
      "LLM Fine Tuning adapts a base language model using carefully prepared examples from your domain, so it learns your terminology, answer style, document formats and task patterns. It's most valuable when a general model isn't consistent enough for repeatable, specialist enterprise work.",
    deliverables: [
      {
        title: "Dataset Curation & Cleaning",
        description:
          "Proprietary examples, prompts and outputs prepared for safe, useful training, noise removed, formats aligned, data matched to the real task.",
      },
      {
        title: "Instruction Fine Tuning",
        description:
          "Models trained to follow your instructions, output formats and industry language consistently.",
      },
      {
        title: "Small Language Model Strategy",
        description:
          "Compact, domain-specific models where they improve cost, speed and control for focused tasks.",
      },
      {
        title: "Evaluation & Benchmarking",
        description:
          "Testing for accuracy, hallucination risk, latency and cost, so you can choose between fine-tuning, RAG or a hybrid with evidence.",
      },
    ],
    useCases: [
      {
        title: "Insurance & Legal Review",
        description:
          "Better classification, summarization and document analysis from models trained on domain terminology, supporting review of policies, contracts and claims.",
        badge: "Legal",
        image: "/service/each%20service%20page/Insurance%20&%20Regal%20review.webp",
      },
      {
        title: "Internal Knowledge & Support",
        description:
          "Models that follow company style and approved formats, giving HR, IT and operations teams consistent answers from internal information.",
        badge: "Knowledge",
        image: "/service/each%20service%20page/Internal%20knowledge%20&%20support.webp",
      },
    ],
    result:
      "More reliable, cost-efficient AI for repeatable tasks where a general model isn't precise enough.",
    techStack: [
      "Hugging Face",
      "PyTorch",
      "LoRA",
      "PEFT",
      "AWS SageMaker",
      "Azure Machine Learning",
      "Evaluation frameworks",
    ],
    industries: [
      "Insurance",
      "Legal",
      "Healthcare",
      "Manufacturing",
      "Financial services",
      "Enterprise technology",
    ],
    faqs: [
      {
        question: "Do we always need fine tuning?",
        answer:
          "No. Many use cases work well with retrieval, strong prompting or a general model. Trinos recommends fine tuning only when it improves accuracy, consistency or cost for a clearly defined task.",
      },
      {
        question: "How much data is required?",
        answer:
          "It depends on the task and the quality of the examples. Narrow use cases may begin with hundreds of high quality examples while complex tasks need larger, cleaner and more representative datasets.",
      },
      {
        question: "Where does the model live?",
        answer:
          "The model can run in your cloud, a private instance or a managed inference endpoint based on your security and governance needs. The deployment choice depends on data sensitivity, performance requirements and operational control.",
      },
    ],
    finalHeadline: "Build an AI Model That Speaks Your Domain",
    finalSubText:
      "We'll assess your data, task complexity and options before recommending fine-tuning, RAG or a hybrid approach.",
    finalCTA: { label: "Book a Model Strategy Call", href: "/contact" },
    related: [
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Computer Vision", href: "/services/computer-vision" },
    ],
  },

  "generative-ai-analytics": {
    slug: "generative-ai-analytics",
    icon: BarChart3,
    eyebrow: "Generative AI and Analytics",
    pageTitle: "Generative AI and Analytics Services | Trinos",
    metaDescription:
      "Turn enterprise data into sourced insights with conversational dashboards, intelligent reporting and AI decision workflows.",
    h1Lead: "Generative AI for",
    h1Highlight: "Decision-Ready Intelligence",
    subHeadline:
      "Trinos turns approved enterprise data into natural-language answers, reports and recommendations you can trace back to the source.",
    primaryCTA: { label: "Book an Analytics Discovery Call", href: "/contact" },
    secondaryCTA: {
      label: "Explore LLM Fine Tuning",
      href: "/services/llm-fine-tuning",
    },
    credibility:
      "Trinos AI products use structured multi agent analysis and grounded generation to transform data and trends into consultant grade insights.",
    answerHeading: "What is Generative AI and Analytics?",
    answerBody:
      "Generative AI and Analytics combines enterprise data pipelines, language models, retrieval systems, dashboards and reporting workflows. It lets users ask questions, generate summaries, interpret trends and produce decision-ready narratives from approved data, reducing manual report prep while keeping every output tied to its source.",
    deliverables: [
      {
        title: "Conversational Dashboards",
        description:
          "Executives and business users query operational data in plain language and ask follow-ups, with no SQL or deep BI experience needed.",
      },
      {
        title: "Intelligent Reporting",
        description:
          "Multi-source data synthesized into readable reports that combine numbers, trends and written explanation.",
      },
      {
        title: "Grounded Generation",
        description:
          "Outputs grounded against approved documents, datasets and business rules to reduce unsupported answers.",
      },
      {
        title: "Decision Intelligence Workflows",
        description:
          "Recommendations presented with risks, assumptions, confidence signals and source references, context, not just a conclusion.",
      },
    ],
    useCases: [
      {
        title: "Consulting & Strategy",
        description:
          "Raw data, research and trends turned into structured reports and presentations, so teams spend less time on first drafts and more on the thinking.",
        badge: "Strategy",
        image: "/service/each%20service%20page/consulting%20%20&%20strategy.webp",
      },
      {
        title: "Government & Enterprise Reporting",
        description:
          "Concise leadership briefings drawn from large policy, operations or performance datasets, with the source kept traceable.",
        badge: "Government",
        image: "/service/each%20service%20page/Government%20&%20enterprise%20planning.webp",
      },
    ],
    result:
      "Less time preparing reports, more time acting on clear, traceable insight.",
    techStack: [
      "Python",
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "BI integrations",
      "Vector databases",
      "SQL",
      "Data pipelines",
    ],
    industries: [
      "Government",
      "Insurance",
      "Consulting",
      "Manufacturing",
      "Financial services",
      "Enterprise technology",
    ],
    faqs: [
      {
        question: "How do you reduce inaccurate AI outputs?",
        answer:
          "We ground outputs in approved data sources, add source context and configure confidence checks for unsupported responses. The system can also flag cases where available data is not enough to produce a reliable answer.",
      },
      {
        question: "Can this work with our BI tools?",
        answer:
          "Yes. Trinos can add natural language interaction and AI generated narratives on top of existing BI platforms and data infrastructure. The goal is to improve access to insight without replacing trusted reporting systems.",
      },
      {
        question: "Are outputs auditable?",
        answer:
          "Yes. Outputs can include source trails, data references and logs that support review and compliance workflows. This is important for regulated teams that need to understand how a report or recommendation was produced.",
      },
    ],
    finalHeadline: "Move From Reporting to Decision Intelligence",
    finalSubText:
      "Let us show how generative analytics can shorten reporting cycles and speed up executive decisions.",
    finalCTA: { label: "Book an Analytics Discovery Call", href: "/contact" },
    related: [
      { label: "LLM Fine Tuning", href: "/services/llm-fine-tuning" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
    ],
  },

  "ai-voice-assistants": {
    slug: "ai-voice-assistants",
    icon: Mic,
    eyebrow: "AI Voice Assistants",
    pageTitle: "AI Voice Assistant Development Services | Trinos",
    metaDescription:
      "Build enterprise voice AI assistants for customer support, internal teams, workflow triggers, system integrations and human handoff.",
    h1Lead: "Voice AI That Connects to",
    h1Highlight: "Your Business Systems",
    subHeadline:
      "Trinos builds voice assistants that understand natural speech, pull the right context and turn conversations into real actions in your systems.",
    primaryCTA: { label: "Design Your Voice Assistant", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos combines conversational AI, workflow engineering and enterprise integrations to move voice assistants beyond scripted responses into useful operational interfaces.",
    answerHeading: "What is an AI Voice Assistant?",
    answerBody:
      "An AI voice assistant understands spoken language, interprets intent and responds naturally. It can answer questions, schedule tasks, capture information, create tickets or trigger workflows within approved limits. For enterprise teams, voice becomes a faster interface to systems that normally demand screens, forms and manual follow-up.",
    deliverables: [
      {
        title: "Voice Conversation Design",
        description:
          "Intent flows, prompts, fallback handling and multilingual support designed for real human language, not rigid scripts.",
      },
      {
        title: "Speech-to-Text & Text-to-Speech",
        description:
          "Speech recognition and natural voice responses tuned for accuracy, latency and flow in the environment where they'll run.",
      },
      {
        title: "Enterprise Workflow Integration",
        description:
          "Connections to CRMs, ERPs, support and booking systems so conversations can create records, fetch data and trigger approved steps.",
      },
      {
        title: "Quality & Escalation Controls",
        description:
          "Confidence thresholds, human handoff, call summaries, transcripts and monitoring dashboards to keep performance reviewable.",
      },
    ],
    useCases: [
      {
        title: "Customer Support",
        description:
          "Assistants answer common questions, collect details, create tickets and escalate complex cases, passing the transcript and context to a human so customers never repeat themselves.",
        badge: "Support",
        image: "/service/each%20service%20page/Customer%20support.webp",
      },
      {
        title: "Field & Internal Operations",
        description:
          "Staff use voice to check status, update tasks, capture notes or trigger workflows without navigating screens, ideal for field and frontline teams.",
        badge: "Operations",
        image: "/service/each%20service%20page/Field%20&%20Internal%20operations.webp",
      },
    ],
    result:
      "Voice becomes a practical interface to enterprise systems, reducing friction for customers and frontline teams alike.",
    techStack: [
      "Speech-to-Text APIs",
      "Text-to-Speech APIs",
      "LLMs",
      "Telephony (Twilio, SIP)",
      "CRM APIs",
      "Workflow engines",
    ],
    industries: [
      "Customer support",
      "Healthcare",
      "Travel",
      "Logistics",
      "Manufacturing",
      "Enterprise operations",
    ],
    faqs: [
      {
        question: "Can voice assistants connect to our systems?",
        answer:
          "Yes. Trinos integrates voice assistants with CRMs, ERPs, support platforms and approved internal APIs. The assistant can retrieve information or trigger actions based on the permissions you define.",
      },
      {
        question: "Can they transfer to a human?",
        answer:
          "Yes. We build escalation logic that transfers complex conversations with transcript and collected context. This helps the human agent continue the conversation smoothly instead of starting again from the beginning.",
      },
      {
        question: "Can we use voice assistants internally?",
        answer:
          "Yes. Voice AI can support field teams, employee self service, approvals, status checks and operational reporting. It is especially useful when teams need quick access to systems without opening a full application.",
      },
    ],
    finalHeadline: "Plan a Voice Interface for Your Workflows",
    finalSubText:
      "We'll define the conversation flow, integration architecture and governance model for your voice assistant.",
    finalCTA: { label: "Book a Voice Scoping Call", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },

  "social-media-automation": {
    slug: "social-media-automation",
    icon: Share2,
    eyebrow: "Social Media Automation",
    pageTitle: "Social Media Automation Services | Trinos",
    metaDescription:
      "Automate social media content operations with AI assisted ideation, drafting, approvals, scheduling and performance analytics.",
    h1Lead: "AI-Assisted Content Operations,",
    h1Highlight: "With Brand Control Built In",
    subHeadline:
      "Trinos builds AI-powered content workflows for research, drafting, approval, scheduling and reporting, so teams scale output without losing editorial judgment.",
    primaryCTA: { label: "Plan Your Content Workflow", href: "/contact" },
    secondaryCTA: {
      label: "Explore Generative AI and Analytics",
      href: "/services/generative-ai-analytics",
    },
    credibility:
      "Trinos product experience includes AI systems that support large scale content generation through structured analysis, trend understanding and multi agent review workflows.",
    answerHeading: "What is Social Media Automation?",
    answerBody:
      "Social Media Automation uses AI and workflow systems to support content research, ideation, copy drafting, scheduling, reporting and approvals. Human review and brand rules stay in the loop, so teams scale output without sacrificing quality. It's especially useful for organizations that need consistent content across LinkedIn, X, Instagram and other channels.",
    deliverables: [
      {
        title: "Trend & Topic Intelligence",
        description:
          "AI-supported monitoring of topics, competitor signals and audience interests, so teams know what to talk about before they create.",
      },
      {
        title: "AI Content Generation",
        description:
          "Drafts of posts, captions, campaign ideas and content calendars aligned to brand tone, with your team keeping final editorial control.",
      },
      {
        title: "Approval & Publishing Workflows",
        description:
          "Human review loops, role-based approvals, scheduling and channel-specific formatting that replace scattered files and messages.",
      },
      {
        title: "Performance Analytics",
        description:
          "Reporting on engagement, reach, themes and opportunities to guide future topics, formats and campaigns.",
      },
    ],
    useCases: [
      {
        title: "Marketing Teams",
        description:
          "Consistent content calendars with far less manual effort in ideation, drafting and reporting, giving a small team the structure of a larger content function.",
        badge: "Marketing",
        image: "/service/each%20service%20page/Marketing%20teams.webp",
      },
      {
        title: "Leadership & Brand Communications",
        description:
          "Insights, announcements and reports turned into audience-ready posts with review controls, so leadership content stays consistent and on-brand.",
        badge: "Brand",
        image: "/service/each%20service%20page/Leadership&brand%20communications.webp",
      },
    ],
    result:
      "Content operations get more consistent while brand teams keep control of approvals, tone and timing.",
    techStack: [
      "LLMs",
      "Content workflow engines",
      "Scheduling APIs",
      "Analytics dashboards",
      "Social platform APIs",
      "Brand rule libraries",
    ],
    industries: [
      "B2B technology",
      "Consulting",
      "Enterprise services",
      "Travel",
      "Public sector communications",
      "Brand marketing",
    ],
    faqs: [
      {
        question: "Will AI publish content automatically?",
        answer:
          "Only if you choose that setup. By default, generated content goes through your approval workflow before scheduling or publishing. Your team controls which channels, post types and campaigns require review.",
      },
      {
        question: "Can the system follow our brand tone?",
        answer:
          "Yes. We build brand tone rules, vocabulary guidance and review feedback into the content workflow. The goal is to make drafts feel closer to your brand before they reach the approval stage.",
      },
      {
        question: "Can it generate reports?",
        answer:
          "Yes. Reports can cover engagement, reach, campaign outcomes, content themes and performance recommendations. These reports help marketing teams understand what worked and what needs to improve.",
      },
    ],
    finalHeadline: "Scale Social Content Without Losing Control",
    finalSubText:
      "We'll design an AI content workflow that supports ideation, drafting, approval, scheduling and reporting.",
    finalCTA: { label: "Book a Social Automation Consultation", href: "/contact" },
    related: [
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },

  "computer-vision": {
    slug: "computer-vision",
    icon: Eye,
    eyebrow: "Computer Vision",
    pageTitle: "Computer Vision Services for Enterprise Workflows | Trinos",
    metaDescription:
      "Build computer vision systems for defect detection, OCR, image recognition, edge deployment and visual workflow automation.",
    h1Lead: "Computer Vision for",
    h1Highlight: "Enterprise Operations",
    subHeadline:
      "Trinos builds vision systems that turn images, documents, video and physical environments into usable, structured business data.",
    primaryCTA: { label: "Book a Vision Assessment", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos computer vision capabilities support industrial, logistics, document and ERP connected workflows where visual accuracy and traceability matter.",
    answerHeading: "What is Computer Vision?",
    answerBody:
      "Computer Vision uses AI to interpret images and video, detecting objects, identifying defects, extracting text, inspecting products and monitoring environments, and converts what it sees into structured data for your systems. For operations teams, it turns visual inspection and document capture into measurable digital workflows.",
    deliverables: [
      {
        title: "Real-Time Defect Detection",
        description:
          "High-speed visual inspection on production and quality lines, flagging defects, missing parts and deviations with image evidence.",
      },
      {
        title: "OCR & Document Vision",
        description:
          "Text extracted from documents, labels, IDs and shipping forms, flowing into ERP, CRM or workflow systems with far less manual entry.",
      },
      {
        title: "Object Detection & Tracking",
        description:
          "Detect, count and track movement across physical workflows for inventory visibility, asset movement and safety checks.",
      },
      {
        title: "Edge Vision Deployment",
        description:
          "Local inference on edge devices where latency, privacy or connectivity constraints matter.",
      },
    ],
    useCases: [
      {
        title: "Manufacturing Quality Control",
        description:
          "Cameras catch defects, surface issues and missing parts on the line, giving quality teams faster alerts and better evidence than manual records.",
        badge: "Manufacturing",
        image: "/service/each%20service%20page/Manufacturing%20control.webp",
      },
      {
        title: "Logistics & Document Operations",
        description:
          "OCR and image recognition digitize labels, packages, documents and IDs across receiving, dispatch and compliance.",
        badge: "Logistics",
        image: "/service/each%20service%20page/logistics%20&%20Document%20operations.webp",
      },
    ],
    result:
      "Visual inspection and document capture become faster, more consistent and easier to measure.",
    techStack: [
      "OpenCV",
      "PyTorch",
      "YOLO",
      "TensorFlow",
      "NVIDIA Jetson",
      "Edge AI hardware",
      "OCR engines",
      "Camera integrations",
    ],
    industries: [
      "Manufacturing",
      "Logistics",
      "Automotive & engineering",
      "Healthcare",
      "Supply chain",
      "Government",
    ],
    faqs: [
      {
        question: "Can computer vision process live video?",
        answer:
          "Yes. Trinos builds real time video pipelines for inspection, monitoring, tracking and operational visibility. Frame rate, resolution and latency are planned around the use case and hardware environment.",
      },
      {
        question: "Can lighting affect accuracy?",
        answer:
          "Lighting can affect accuracy, so we account for it through training data, calibration and confidence based fallback logic. We also evaluate camera placement and image quality before deployment.",
      },
      {
        question: "Can the system support new defect types?",
        answer:
          "Yes. Models can be updated with new examples and validated through a controlled retraining process. This helps the system stay useful as products, materials or inspection rules change.",
      },
    ],
    finalHeadline: "Plan Computer Vision for Your Operations",
    finalSubText:
      "We'll assess your cameras, image data, hardware and workflow needs for a practical computer-vision roadmap.",
    finalCTA: { label: "Book a Vision Assessment", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },

  "enterprise-resource-planning": {
    slug: "enterprise-resource-planning",
    icon: Briefcase,
    eyebrow: "Enterprise Resource Planning",
    pageTitle: "Enterprise Resource Planning Services | Trinos",
    metaDescription:
      "Plan, implement and integrate ERP systems with AI ready workflows, clean data, reporting layers and enterprise automation foundations.",
    h1Lead: "ERP Systems Built for",
    h1Highlight: "AI-Ready Operations",
    subHeadline:
      "Trinos architects and implements ERP ecosystems that unify your data, workflows, reporting and integrations, a clean backbone for operations today and intelligent automation tomorrow.",
    primaryCTA: { label: "Book an ERP Consultation", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos ERP capability is supported by leadership with over 25 years of enterprise systems experience across global deployments.",
    answerHeading: "What does Trinos provide in Enterprise Resource Planning?",
    answerBody:
      "Trinos provides ERP architecture, implementation, configuration, integration, data migration, reporting and AI-ready workflow design. The goal is a reliable enterprise backbone that supports operations now and intelligent automation later. A well-planned ERP gives AI systems cleaner data, stronger process structure and better integration points.",
    deliverables: [
      {
        title: "Architecture & Blueprinting",
        description:
          "Business processes mapped, data models designed, modules planned and a practical implementation roadmap aligned to how you actually work.",
      },
      {
        title: "Configuration & Integration",
        description:
          "SAP, Oracle, Microsoft Dynamics, Infor, QAD and Epicor configured with the right integration architecture for reliable fit and long-term maintainability.",
      },
      {
        title: "Data Migration & Integrity",
        description:
          "Secure migration, cleansing, mapping, validation and reconciliation from legacy systems, clean data treated as the foundation.",
      },
      {
        title: "AI-Ready Workflows",
        description:
          "ERP data and processes prepared for natural-language queries, predictive alerts and automation, so future AI adoption is easier.",
      },
    ],
    useCases: [
      {
        title: "Manufacturing & Supply Chain",
        description:
          "Production, inventory, procurement, finance and supply-chain visibility unified into one operating view instead of disconnected spreadsheets.",
        badge: "Supply Chain",
        image: "/service/each%20service%20page/Manufacturing%20&%20supply%20chain.webp",
      },
      {
        title: "Healthcare & Multi-Location Operations",
        description:
          "Procurement, HR, finance, reporting and approvals centralized across facilities, with common standards and cleaner data.",
        badge: "Healthcare",
        image: "/service/each%20service%20page/healthcare%20&%20multi%20location%20operation.webp",
      },
    ],
    result:
      "Fewer fragmented tools, more reliable data and an operational backbone ready for AI-enabled workflows.",
    techStack: [
      "SAP",
      "Oracle",
      "Microsoft Dynamics",
      "Infor",
      "QAD",
      "Epicor",
      "APIs",
      "Data migration tools",
      "Reporting layers",
    ],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Automotive & engineering",
      "Supply chain",
      "Financial services",
      "Enterprise operations",
    ],
    faqs: [
      {
        question: "Which ERP platform is right for us?",
        answer:
          "The right platform depends on your industry, processes, existing systems, reporting needs and long term AI readiness goals. Trinos reviews requirements before recommending a platform or implementation path.",
      },
      {
        question: "Can ERP be implemented in phases?",
        answer:
          "Yes. Trinos can structure phased delivery so each stage creates value while reducing operational risk. This approach helps teams adopt the system without disrupting day to day work.",
      },
      {
        question: "Can ERP connect to AI systems?",
        answer:
          "Yes. We design data structures, workflows and APIs so ERP can support analytics, automation and agentic AI over time. The ERP system becomes a foundation for future intelligent workflows.",
      },
    ],
    finalHeadline: "Build an ERP Foundation for AI-Ready Operations",
    finalSubText:
      "Talk to our ERP architects to define your implementation strategy, integration model and AI-readiness roadmap.",
    finalCTA: { label: "Book an ERP Consultation", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },

  "web-development": {
    slug: "web-development",
    icon: Globe,
    eyebrow: "Web Development",
    pageTitle: "Enterprise Web Development Services | Trinos",
    metaDescription:
      "Build secure enterprise websites, portals, dashboards and AI enabled web applications with scalable architecture and system integrations.",
    h1Lead: "Web Platforms Built for Growth",
    h1Highlight: "and for AI",
    subHeadline:
      "Trinos builds enterprise websites, portals, dashboards and web applications with secure architecture, strong UX and AI-ready features.",
    primaryCTA: { label: "Scope Your Web Platform", href: "/contact" },
    secondaryCTA: {
      label: "Explore Web Development",
      href: "/services/mobile-app-development",
    },
    credibility:
      "Trinos has built multi tenant web application architecture for product platforms that support agents, customers, operational teams and AI powered workflows.",
    answerHeading: "What does Trinos provide in Web Development?",
    answerBody:
      "Trinos provides enterprise web development for websites, portals, dashboards, SaaS products, internal tools and AI-enabled applications. The focus is secure architecture, strong UX, system integration and features that help users adopt AI inside everyday workflows. A modern platform shouldn't just look good, it should carry your business processes, data access and future product growth.",
    deliverables: [
      {
        title: "Websites & Portals",
        description:
          "Secure, high-performance sites and portals for customers, employees and partners, planned around real user journeys and access control.",
      },
      {
        title: "Web Apps & SaaS Platforms",
        description:
          "Scalable applications with multi-tenant architecture, dashboards, access control and workflow logic that grow with users and roles.",
      },
      {
        title: "Embedded AI Features",
        description:
          "Conversational search, recommendations, report generation and assistants built into the product, not bolted on as a separate tool.",
      },
      {
        title: "Backend & Integration",
        description:
          "APIs, authentication, databases, cloud deployment, analytics and enterprise integrations for a stable long-term foundation.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Operations Portal",
        description:
          "Spreadsheet-heavy operations replaced with a secure portal connected to enterprise data and workflows, one place to access, update and track work.",
        badge: "Portal",
        image: "/service/each%20service%20page/Enterprise%20Operations%20Portal.webp",
      },
      {
        title: "AI-Enabled Customer Platform",
        description:
          "A customer-facing platform using AI search, recommendations and automated support to improve adoption and service speed.",
        badge: "Platform",
        image: "/service/each%20service%20page/AI-Enabled%20Customer%20Platform.webp",
      },
    ],
    result:
      "Modern, secure, usable platforms ready for AI-powered workflows and enterprise integration.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Tailwind CSS",
      "APIs",
      "Cloud deployment",
      "Authentication systems",
    ],
    industries: [
      "Travel & hospitality",
      "Healthcare",
      "Enterprise technology",
      "Financial services",
      "Manufacturing",
      "Government",
    ],
    faqs: [
      {
        question: "Can you build websites as well as full web applications?",
        answer:
          "Yes. Trinos builds marketing websites, customer portals, internal tools and full SaaS style web platforms. The architecture and delivery approach are matched to the depth of the product you need.",
      },
      {
        question: "Can web platforms integrate with legacy systems?",
        answer:
          "Yes. We connect modern web interfaces to ERP, CRM, databases and internal tools through secure API layers. This helps teams keep existing system investments while improving user experience.",
      },
      {
        question: "Can AI features be added after launch?",
        answer:
          "Yes. We can plan the architecture so conversational search, reporting, recommendations and workflow triggers can be added over time. This makes the platform easier to expand as your AI roadmap matures.",
      },
    ],
    finalHeadline: "Plan a Web Platform That Grows With AI",
    finalSubText:
      "We'll scope your architecture, UX, integrations and AI roadmap in one technical blueprint session.",
    finalCTA: { label: "Book a Web Scoping Call", href: "/contact" },
    related: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    icon: Smartphone,
    eyebrow: "Mobile App Development",
    pageTitle: "Mobile App Development Services | Trinos",
    metaDescription:
      "Build enterprise mobile apps with secure integrations, workflow approvals, AI assistants, voice features and cross platform delivery.",
    h1Lead: "Mobile Apps for the Way",
    h1Highlight: "Enterprise Work Actually Happens",
    subHeadline:
      "Trinos develops apps for customers, employees and field teams, with secure integrations, workflow access and embedded AI built in.",
    primaryCTA: { label: "Scope Your Mobile App", href: "/contact" },
    secondaryCTA: { label: "Explore Mobile App Development", href: "/services/web-development" },
    credibility:
      "Trinos product engineering includes multi application mobile ecosystems connected to back office platforms, customer experiences and operational workflows.",
    answerHeading: "What does Trinos provide in Mobile App Development?",
    answerBody:
      "Trinos provides mobile app development for enterprise users, customers, agents and field teams. Apps can include AI assistants, real-time updates, workflow approvals, recommendations, document capture, voice interaction and secure access to business systems, making enterprise workflows easier to use where the work actually happens.",
    deliverables: [
      {
        title: "Cross-Platform Development",
        description:
          "Native-quality iOS and Android apps from efficient shared codebases, with the technology chosen for performance and maintainability.",
      },
      {
        title: "Mobile Workflow Interfaces",
        description:
          "Approval flows, task updates, field reporting, document capture and dashboards, so work gets done without returning to a desktop.",
      },
      {
        title: "AI Inside the Mobile UX",
        description:
          "Embedded assistants, recommendations, search, voice input and summaries that help users decide faster on the move.",
      },
      {
        title: "Secure Enterprise Connectivity",
        description:
          "Authentication, APIs, offline sync, push notifications and role-based access connecting apps to business systems with governance intact.",
      },
    ],
    useCases: [
      {
        title: "Travel & Field Operations",
        description:
          "Agents, customers and field staff use connected apps for itineraries, updates, service requests and coordination across locations.",
        badge: "Travel",
        image: "/service/each%20service%20page/Travel%20&%20field%20operation.webp",
      },
      {
        title: "Enterprise Approvals & Reporting",
        description:
          "Managers approve workflows, review AI summaries and act on alerts from mobile, so decisions don't wait for a desk.",
        badge: "Approvals",
        image: "/service/each%20service%20page/Enterprise%20approval%20&%20reporting.webp",
      },
    ],
    result:
      "Higher adoption by giving users mobile access to AI-enabled workflows where the work happens.",
    techStack: [
      "React Native",
      "Flutter where appropriate",
      "Mobile APIs",
      "Authentication",
      "Push notifications",
      "Offline sync",
      "AI APIs",
      "Analytics",
    ],
    industries: [
      "Travel and hospitality",
      "Healthcare",
      "Logistics",
      "Manufacturing",
      "Enterprise technology",
      "Financial services",
    ],
    faqs: [
      {
        question: "Do you build for iOS and Android?",
        answer:
          "Yes. Trinos builds cross platform apps or native apps depending on performance, design and feature requirements. The recommendation depends on what the app needs to do and how users will interact with it.",
      },
      {
        question: "Can mobile apps work with enterprise systems?",
        answer:
          "Yes. We connect apps to ERP, CRM, workflow engines and internal databases through secure APIs and role based permissions. Users only access the data and actions approved for their role.",
      },
      {
        question: "Can mobile apps include AI voice or chat assistants?",
        answer:
          "Yes. Voice input, conversational AI and assistant features can be embedded directly into the mobile experience. These capabilities can connect to enterprise data through secure backend services.",
      },
    ],
    finalHeadline: "Bring Enterprise AI Into Mobile Workflows",
    finalSubText:
      "We'll define the mobile experience, integration architecture, AI features and delivery roadmap for your app.",
    finalCTA: { label: "Book a Mobile Scoping Call", href: "/contact" },
    related: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI Voice Assistants", href: "/services/ai-voice-assistants" },
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
    ],
  },
};

export const serviceSlugs = Object.keys(servicesContent);
