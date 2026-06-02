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
    eyebrow: "AGENTIC AI",
    pageTitle: "Agentic AI Services for Enterprises | Trinos Technologies",
    metaDescription:
      "Build secure agentic AI systems that reason, use tools, automate multi-step tasks, and work across enterprise workflows with human approval controls.",
    h1Lead: "AI Agents That",
    h1Highlight: "Think, Act and Improve",
    subHeadline:
      "Trinos builds AI agent systems that understand context, coordinate across tools and complete complex tasks within clear security, approval and audit boundaries.",
    primaryCTA: { label: "Talk to an AI Architect", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Our multi-agent architecture powers AI products where autonomous agents debate, analyze, generate and escalate outputs through structured workflows.",
    answerHeading: "What Is Agentic AI?",
    answerBody:
      "Agentic AI uses autonomous software agents that understand context, plan tasks, call tools, retrieve data and take action. Unlike a chatbot that answers questions, agentic systems are built to complete workflows from start to finish.",
    deliverables: [
      {
        title: "Multi-Agent System Design",
        description:
          "We build specialized agents for research, analysis, validation, reporting and operations. Each agent knows its role and works within a coordinated system.",
      },
      {
        title: "Tool Calling and System Integration",
        description:
          "Agents connect securely to your approved APIs, CRMs, ERPs, databases, email systems and internal tools to take real action inside your business.",
      },
      {
        title: "Human-in-the-Loop Controls",
        description:
          "Approval checkpoints are built in so high-risk decisions always go through a human review step before execution. Your team stays in control.",
      },
      {
        title: "Agent Monitoring and Audit Trails",
        description:
          "Full logs, traceability, performance monitoring and exception reporting keep every agent action visible and accountable for responsible AI operations.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Operations",
        description:
          "Agents monitor incoming tasks, collect relevant data, prepare recommendations and route decisions to the right person or system without manual hand-holding.",
        image: "/service/enterprise-operations.jpg",
        badge: "Operations",
      },
      {
        title: "Decision Intelligence",
        description:
          "Multiple agents analyze a problem from different angles and produce structured recommendations with risk levels and confidence scores for faster decisions.",
        image: "/service/decision-intelligence.jpg",
        badge: "Strategy",
      },
    ],
    result:
      "Teams move repetitive analysis and coordination work from manual effort to controlled AI execution while keeping oversight where it matters.",
    techStack: [
      "Python",
      "OpenAI API",
      "Anthropic",
      "LangChain",
      "LlamaIndex",
      "Secure internal APIs",
      "Vector databases",
      "Workflow engines",
    ],
    industries: [
      "Financial services",
      "Enterprise technology",
      "Insurance",
      "Government",
      "Manufacturing",
      "Consulting",
    ],
    faqs: [
      {
        question: "How is Agentic AI different from a chatbot?",
        answer:
          "A chatbot responds to questions. An AI agent takes action. It can call tools, retrieve data, run multi-step processes and escalate based on what it finds. It is built to complete tasks, not just answer them.",
      },
      {
        question: "Can AI agents work with our internal systems?",
        answer:
          "Yes. We build agents with secure connections to your existing APIs, databases, CRMs and internal tools. Agents only access what they are permitted to and every action is logged.",
      },
      {
        question: "How do you prevent uncontrolled agent actions?",
        answer:
          "Every agent system we build includes approval gates, permission boundaries and audit trails. High-risk actions require human sign-off before they execute. Control is designed in from the start, not added later.",
      },
    ],
    finalHeadline: "AI Agents That Work Like Operational Teammates",
    finalSubText:
      "Start with a focused agentic AI discovery session to identify where autonomous agents can reduce repetitive work and improve decision speed.",
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
    eyebrow: "AI WORKFLOW AUTOMATION",
    pageTitle: "AI Workflow Automation & Process Orchestration | Trinos Technologies",
    metaDescription:
      "Automate enterprise workflows with AI triggers, system integrations, human approvals, audit trails, and cross-platform process orchestration.",
    h1Lead: "Let AI Run Your",
    h1Highlight: "Business Processes",
    subHeadline:
      "We connect your tools, teams and data into one smart workflow layer. Less manual work. Faster decisions. Full visibility.",
    primaryCTA: { label: "Map Your Process", href: "/contact" },
    secondaryCTA: { label: "Explore Agentic AI", href: "/services/agentic-ai" },
    credibility:
      "Trinos workflows are built for enterprise operations. Document review, quality checks, anomaly detection and human approval steps are included out of the box.",
    answerHeading: "What Is AI Workflow Automation?",
    answerBody:
      "It uses AI to move work through your business automatically. Tasks get triggered, routed, reviewed and approved without manual effort. Your team stays in control while AI handles the repetitive steps in between.",
    deliverables: [
      {
        title: "Cross-System Workflow Orchestration",
        description:
          "We connect your ERP, CRM, documents, email and custom tools into one unified flow. No more switching between systems or chasing updates manually.",
      },
      {
        title: "AI-Triggered Process Initiation",
        description:
          "Workflows start on their own, triggered by incoming data, documents, alerts or thresholds. The right action happens at the right time without anyone pressing a button.",
      },
      {
        title: "Approval and Audit Infrastructure",
        description:
          "Every decision has a clear path. We build escalation flows, approval screens and audit logs so your processes stay compliant and traceable at every stage.",
      },
      {
        title: "Smart Exception Handling",
        description:
          "When something looks off or needs a human call, it gets flagged and routed instantly. Your team only sees what actually needs their attention.",
      },
    ],
    useCases: [
      {
        title: "Insurance and Document Operations",
        description:
          "Trinos routes documents through extraction, validation, AI quality checks and anomaly detection, right through to the review and approval stage. Faster processing with fewer errors.",
      },
      {
        title: "HR and Finance Operations",
        description:
          "Onboarding, procurement, invoice review and approvals run across your tools without manual follow-up. Every step is tracked and nothing falls through the gaps.",
      },
    ],
    result:
      "Enterprises cut process delays, reduce manual tracking and stop repeated data entry. Human control stays in place where it matters most.",
    techStack: [
      "Python",
      "REST APIs",
      "Webhooks",
      "AWS Step Functions",
      "SAP / Oracle",
      "Workflow Engines",
      "Secure Databases",
    ],
    industries: [
      "Insurance",
      "Financial Services",
      "Healthcare",
      "HR",
      "Enterprise Technology",
      "Manufacturing",
    ],
    faqs: [
      {
        question: "How is this different from Agentic AI?",
        answer:
          "Workflow Automation handles structured, repeatable processes with clear rules and triggers. Agentic AI goes further. It can reason and make decisions with less guidance. The two work well together: automation handles the backbone while agentic tools add intelligent decision-making on top.",
      },
      {
        question: "Will this replace our existing software?",
        answer:
          "No. Trinos builds on top of what you already have. We integrate with your ERP, CRM and SaaS tools so your current systems keep working, just smarter and more connected.",
      },
      {
        question: "Can workflows include human approvals?",
        answer:
          "Yes. Human review steps are a standard part of our workflow design. Your team approves what needs approving. AI handles everything in between so they can focus on decisions that matter.",
      },
    ],
    finalHeadline: "Ready to Cut Manual Work Across Your Business?",
    finalSubText:
      "Trinos will map one of your workflows and show you exactly where AI automation saves time and reduces errors.",
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
    eyebrow: "LLM FINE TUNING",
    pageTitle: "LLM Fine Tuning & Custom Language Models | Trinos Technologies",
    metaDescription:
      "Fine-tune language models on enterprise data, workflows, tone, terminology, and domain rules to improve AI accuracy, reliability, and cost efficiency.",
    h1Lead: "AI That Knows Your",
    h1Highlight: "Business Language",
    subHeadline:
      "We train language models on your domain, documents and workflows. The result is a model that understands your terminology, follows your rules and gives accurate outputs every time.",
    primaryCTA: { label: "Assess Your Model Opportunity", href: "/contact" },
    secondaryCTA: {
      label: "Explore Generative AI and Analytics",
      href: "/services/generative-ai-analytics",
    },
    credibility:
      "Custom domain-specific models support Trinos platforms that require high accuracy in technical, regulated and operations-heavy environments.",
    answerHeading: "What Is LLM Fine Tuning?",
    answerBody:
      "Fine tuning trains a general AI model on your specific business data. It learns your terminology, answer style and document formats so it performs specialist tasks far better than a generic model.",
    deliverables: [
      {
        title: "Dataset Curation and Cleaning",
        description:
          "We prepare your proprietary documents, examples, prompts and labels into a clean training dataset ready for safe and effective fine tuning.",
      },
      {
        title: "Instruction Fine Tuning",
        description:
          "We teach the model to follow your business instructions, produce the right output formats and use your industry language consistently.",
      },
      {
        title: "Small Language Model Strategy",
        description:
          "Compact, domain-specific models can outperform large generic ones for focused tasks. We advise on the right model size for your cost, speed and control needs.",
      },
      {
        title: "Evaluation and Benchmarking",
        description:
          "We test model quality, measure hallucination risk, latency and cost against benchmarks defined for your specific enterprise use case.",
      },
    ],
    useCases: [
      {
        title: "Insurance and Legal Review",
        description:
          "The model learns your document terminology and classification patterns. It supports faster, more accurate review, summarization and analysis at scale.",
      },
      {
        title: "Internal Knowledge and Support",
        description:
          "The model answers in your company style and follows your approved formats. Support, reporting and internal operations become faster and more consistent.",
      },
    ],
    result:
      "Fine-tuned models improve reliability and lower inference costs for domain-specific tasks where a general AI model is not precise enough.",
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
          "Not always. For some tasks, a well-prompted general model is enough. We assess your use case first and only recommend fine tuning when it delivers a clear improvement in accuracy or cost.",
      },
      {
        question: "How much data is required?",
        answer:
          "It depends on the task. Some fine tuning approaches work with a few hundred quality examples. We review your available data and advise on the most practical path forward.",
      },
      {
        question: "Where does the model live?",
        answer:
          "We can deploy on your cloud environment, a private instance or a managed endpoint depending on your security and infrastructure requirements. Your data stays under your control.",
      },
    ],
    finalHeadline: "Build a Model That Speaks Your Domain",
    finalSubText:
      "Trinos will assess your data, task complexity and model strategy before recommending fine tuning, RAG or a hybrid approach.",
    finalCTA: { label: "Book a Model Strategy Session", href: "/contact" },
    related: [
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Computer Vision", href: "/services/computer-vision" },
    ],
  },

  "generative-ai-analytics": {
    slug: "generative-ai-analytics",
    icon: BarChart3,
    eyebrow: "GENERATIVE AI AND ANALYTICS",
    pageTitle: "Generative AI Analytics & Decision Intelligence | Trinos Technologies",
    metaDescription:
      "Build generative AI analytics systems for conversational dashboards, intelligent reports, data storytelling, and decision intelligence grounded in enterprise data.",
    h1Lead: "Turn Your Business Data Into",
    h1Highlight: "Clear Decisions",
    subHeadline:
      "Trinos builds generative analytics systems that convert complex enterprise data into plain language answers, executive summaries, decision reports and business narratives grounded in your approved sources.",
    primaryCTA: { label: "Explore AI Analytics", href: "/contact" },
    secondaryCTA: { label: "Talk to an AI Architect", href: "/contact" },
    credibility:
      "Trinos products use structured multi-agent debate and grounded generation to transform data and trends into consultant-grade insights.",
    answerHeading: "What Is Generative AI and Analytics?",
    answerBody:
      "It combines enterprise data pipelines, language models and reporting workflows so teams can ask questions, generate summaries, interpret trends and produce decision-ready narratives from approved business data.",
    deliverables: [
      {
        title: "Conversational Dashboards",
        description:
          "Natural language interfaces let executives and business users ask questions about operational data and get clear, plain language answers instantly.",
      },
      {
        title: "Intelligent Reporting",
        description:
          "We automate the synthesis of multi-source data into readable reports, executive summaries and recommendations your team can act on right away.",
      },
      {
        title: "Grounded Generation",
        description:
          "All outputs are verified against your approved documents, datasets and business rules so your team can trust what they read and share.",
      },
      {
        title: "Decision Intelligence Workflows",
        description:
          "AI-assisted recommendations include risks, assumptions, confidence signals and source context so decision-makers have everything they need in one view.",
      },
    ],
    useCases: [
      {
        title: "Consulting and Strategy",
        description:
          "Analysts convert raw data, research and trends into structured reports and presentations in a fraction of the usual time.",
      },
      {
        title: "Government and Enterprise Reporting",
        description:
          "Leadership teams receive concise briefings from large policy, operations or performance datasets without manual preparation.",
      },
    ],
    result:
      "Teams spend less time manually preparing reports and more time acting on clear, traceable insights.",
    techStack: [
      "Python",
      "OpenAI API",
      "Anthropic",
      "LangChain",
      "BI integrations",
      "Vector databases",
      "SQL",
      "Data pipelines",
    ],
    industries: [
      "Government",
      "Insurance",
      "Enterprise technology",
      "Consulting",
      "Manufacturing",
      "Financial services",
    ],
    faqs: [
      {
        question: "How do you reduce hallucination risk?",
        answer:
          "We use grounded generation techniques that tie every output to approved source documents and datasets. The system flags low-confidence responses and cites its sources so your team can verify before acting.",
      },
      {
        question: "Can this connect to existing BI tools?",
        answer:
          "Yes. We integrate with your existing BI platforms and data sources so the generative layer sits on top of what you already have, adding natural language access without replacing your current reporting setup.",
      },
      {
        question: "Are outputs auditable?",
        answer:
          "Yes. Every generated output includes a source trail showing which data points and documents were used. This supports compliance, traceability and internal review processes.",
      },
    ],
    finalHeadline: "Move From Reporting to Decision Intelligence",
    finalSubText:
      "Let Trinos demonstrate how generative analytics can shorten reporting cycles and improve executive decision speed.",
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
    eyebrow: "AI VOICE ASSISTANTS",
    pageTitle: "AI Voice Assistant Development for Enterprises | Trinos Technologies",
    metaDescription:
      "Develop AI voice assistants for customer support, internal operations, field teams, scheduling, reminders, and workflow automation across enterprise systems.",
    h1Lead: "Voice AI That Connects",
    h1Highlight: "Conversations to Real Workflows",
    subHeadline:
      "Trinos builds AI voice assistants that understand speech, retrieve context, answer questions, trigger workflows and connect voice interactions to your business systems.",
    primaryCTA: { label: "Design Your Voice Assistant", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos combines conversational AI, workflow engineering and enterprise integrations to move voice assistants beyond scripted responses into useful operational tools.",
    answerHeading: "What Is an AI Voice Assistant?",
    answerBody:
      "An AI voice assistant understands spoken language, processes context and responds naturally. It can answer questions, schedule tasks, collect information, create tickets and trigger business workflows using voice alone.",
    deliverables: [
      {
        title: "Voice Conversation Design",
        description:
          "We design intent flows, prompts, fallback handling and multilingual support so your voice assistant sounds natural and handles real conversations confidently.",
      },
      {
        title: "Speech-to-Text and Text-to-Speech",
        description:
          "Reliable speech recognition and natural voice responses for customer-facing and internal use cases, built with enterprise-grade accuracy and low latency.",
      },
      {
        title: "Enterprise Workflow Integration",
        description:
          "Voice assistants connect to your CRMs, ERPs, support systems, booking platforms, databases and approval workflows so conversations turn into real actions.",
      },
      {
        title: "Quality and Escalation Controls",
        description:
          "Confidence thresholds, human handoff, call summaries, transcripts and monitoring dashboards keep your voice operations reliable and auditable.",
      },
    ],
    useCases: [
      {
        title: "Customer Support",
        description:
          "Voice assistants handle common questions, collect customer information, create tickets and escalate complex requests to the right human agent at the right time.",
      },
      {
        title: "Field and Internal Operations",
        description:
          "Employees use voice to check status, update tasks, capture notes and trigger workflows without touching a screen, keeping frontline teams productive on the move.",
      },
    ],
    result:
      "Voice becomes a practical interface for enterprise systems, reducing friction for customers, frontline teams and operational staff.",
    techStack: [
      "Speech-to-text APIs",
      "Text-to-speech APIs",
      "LLMs",
      "Telephony integrations",
      "Twilio",
      "SIP",
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
          "Yes. We integrate voice assistants with your CRMs, ERPs, support platforms and internal APIs so they can retrieve data and trigger real actions, not just provide scripted responses.",
      },
      {
        question: "Can they transfer to a human?",
        answer:
          "Yes. We build escalation logic so the assistant hands off to a live agent when needed, passing along the conversation context so the customer does not have to repeat themselves.",
      },
      {
        question: "Can we use voice assistants internally?",
        answer:
          "Absolutely. Many clients use voice AI for internal operations, field teams and employee support. We design the conversation flow and integrations to match how your internal teams actually work.",
      },
    ],
    finalHeadline: "Build a Voice Interface for Your Enterprise Workflows",
    finalSubText:
      "Trinos will define the conversation flow, integration architecture and governance model for your AI voice assistant.",
    finalCTA: { label: "Book a Voice AI Scoping Call", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },

  "computer-vision": {
    slug: "computer-vision",
    icon: Eye,
    eyebrow: "COMPUTER VISION",
    pageTitle: "Computer Vision & Edge AI Solutions | Trinos Technologies",
    metaDescription:
      "Deploy computer vision systems for defect detection, OCR, quality inspection, object detection, live video analytics, and edge AI workflows.",
    h1Lead: "Give Your Enterprise Systems",
    h1Highlight: "the Power of Sight",
    subHeadline:
      "Trinos builds computer vision systems that interpret images, documents, video feeds, labels, parts and physical environments for real-time enterprise decision-making.",
    primaryCTA: { label: "Book a Vision AI Assessment", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos computer vision capabilities support industrial, logistics, document and ERP-connected workflows where visual accuracy and traceability matter.",
    answerHeading: "What Is Computer Vision?",
    answerBody:
      "Computer Vision uses AI to understand images and video. It can detect objects, identify defects, extract text, inspect products, read labels, monitor environments and convert visual information into structured data for enterprise systems.",
    deliverables: [
      {
        title: "Real-Time Defect Detection",
        description:
          "High-speed visual inspection for manufacturing lines and quality control environments. Defects, surface issues and missing parts are flagged instantly.",
      },
      {
        title: "OCR and Document Vision",
        description:
          "Text extraction from documents, labels, ID cards, shipping forms and operational records so your data flows into the right systems automatically.",
      },
      {
        title: "Object Detection and Tracking",
        description:
          "Detection, counting, movement tracking and spatial analysis for physical workflows where human inspection is too slow or too inconsistent.",
      },
      {
        title: "Edge Vision Deployment",
        description:
          "Local inference on edge devices where latency, privacy or connectivity constraints mean cloud processing is not an option.",
      },
    ],
    useCases: [
      {
        title: "Manufacturing Quality Control",
        description:
          "Cameras detect defects, surface issues, missing parts or process deviations on the production line, reducing waste and improving consistency.",
      },
      {
        title: "Logistics and Document Operations",
        description:
          "OCR and image recognition digitize labels, packages, documents, IDs and operational forms so data capture becomes fast, accurate and automatic.",
      },
    ],
    result:
      "Organizations convert visual inspection and document capture into faster, more consistent and measurable AI-assisted workflows.",
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
      "Automotive and engineering",
      "Healthcare",
      "Supply chain",
      "Government",
    ],
    faqs: [
      {
        question: "Can computer vision process live video?",
        answer:
          "Yes. We build systems that process live video streams in real time for applications like production line monitoring, security and environment tracking. Frame rate and latency are tuned to your specific use case.",
      },
      {
        question: "Does lighting affect accuracy?",
        answer:
          "It can. We account for lighting conditions during model training and system design. Where environments are variable, we include calibration and fallback logic to maintain reliable detection.",
      },
      {
        question: "Can the system learn new defect types?",
        answer:
          "Yes. Models can be retrained or fine-tuned as new defect types are identified. We build retraining workflows into the system so your model stays accurate as your products or processes evolve.",
      },
    ],
    finalHeadline: "Automate Visual Inspection and Image Understanding",
    finalSubText:
      "Trinos can assess your cameras, image data, hardware, workflow and model requirements for a practical computer vision roadmap.",
    finalCTA: { label: "Book a Vision AI Assessment", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },

  "enterprise-resource-planning": {
    slug: "enterprise-resource-planning",
    icon: Briefcase,
    eyebrow: "ENTERPRISE RESOURCE PLANNING",
    pageTitle: "Enterprise Resource Planning Implementation | Trinos Technologies",
    metaDescription:
      "Implement and modernize ERP systems across SAP, Oracle, Microsoft Dynamics, Infor, QAD, Epicor, integrations, data migration, and AI-ready workflows.",
    h1Lead: "ERP Systems Built for",
    h1Highlight: "AI-Ready Operations",
    subHeadline:
      "Trinos architects and implements ERP ecosystems that unify enterprise data, operational workflows, reporting and integrations so your organization has a stable foundation for AI-driven transformation.",
    primaryCTA: { label: "Book an ERP Consultation", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos ERP capability is supported by leadership with 25 plus years of enterprise systems experience across global deployments.",
    answerHeading: "What Does Trinos Deliver in Enterprise Resource Planning?",
    answerBody:
      "Trinos provides ERP architecture, implementation, configuration, integration, data migration, reporting and AI-ready workflow design. The goal is to create a reliable enterprise backbone that supports operations today and intelligent automation tomorrow.",
    deliverables: [
      {
        title: "ERP Architecture and Blueprinting",
        description:
          "Business process mapping, data model design, module planning and implementation roadmap built around how your organization actually operates.",
      },
      {
        title: "ERP Configuration and Integration",
        description:
          "SAP, Oracle, Microsoft Dynamics, Infor, QAD, Epicor and custom integration architecture configured to your specific workflows and reporting needs.",
      },
      {
        title: "Data Migration and Integrity",
        description:
          "Secure migration, cleansing, mapping, validation and reconciliation from legacy systems so your new ERP starts with clean, trustworthy data.",
      },
      {
        title: "AI-Ready ERP Workflows",
        description:
          "We prepare ERP data and processes for natural language queries, predictive alerts and workflow automation so your system is ready for AI from day one.",
      },
    ],
    useCases: [
      {
        title: "Manufacturing and Supply Chain",
        description:
          "ERP systems unify production, inventory, procurement, finance and supply chain visibility so operations teams work from a single source of truth.",
      },
      {
        title: "Healthcare and Multi-Location Operations",
        description:
          "ERP centralizes procurement, HR, finance, reporting and approvals across facilities so multi-site organizations operate with consistency and control.",
      },
    ],
    result:
      "Enterprises reduce fragmented tools, improve data reliability and prepare the operational backbone required for AI-enabled workflows.",
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
      "Automotive and engineering",
      "Supply chain",
      "Financial services",
      "Enterprise operations",
    ],
    faqs: [
      {
        question: "Which ERP platform is right for us?",
        answer:
          "It depends on your industry, company size, existing systems and growth plans. Trinos assesses your requirements and recommends the platform that fits your operations and your AI readiness goals, not just the most popular option.",
      },
      {
        question: "Can ERP be implemented in phases?",
        answer:
          "Yes. We design phased implementation plans that deliver value at each stage. This reduces risk, manages change across the organization and keeps operations running throughout the transition.",
      },
      {
        question: "Can ERP connect to AI systems later?",
        answer:
          "Absolutely. We design ERP architecture with AI integration in mind from the start. Your data structures, workflows and APIs are built to support natural language querying, predictive analytics and agentic AI when you are ready.",
      },
    ],
    finalHeadline: "Build the Enterprise Backbone for AI-Ready Operations",
    finalSubText:
      "Speak with Trinos ERP architects to define your implementation strategy, integration model and AI-readiness roadmap.",
    finalCTA: { label: "Book an ERP Consultation", href: "/contact" },
    related: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },

  "social-media-automation": {
    slug: "social-media-automation",
    icon: Share2,
    eyebrow: "SOCIAL MEDIA AUTOMATION",
    pageTitle: "AI Social Media Automation Services | Trinos Technologies",
    metaDescription:
      "Automate social media research, content generation, publishing workflows, trend analysis, reporting, and brand-safe approvals using AI systems.",
    h1Lead: "More Content. Less Manual Work.",
    h1Highlight: "Full Brand Control",
    subHeadline:
      "Trinos builds AI-powered social media systems that research trends, generate content, manage approvals, schedule publishing, analyze performance and maintain brand consistency across channels.",
    primaryCTA: { label: "Automate Your Content Workflow", href: "/contact" },
    secondaryCTA: {
      label: "Explore Generative AI and Analytics",
      href: "/services/generative-ai-analytics",
    },
    credibility:
      "Trinos builds AI systems capable of generating large volumes of content through structured analysis, trend understanding and multi-agent review workflows.",
    answerHeading: "What Is Social Media Automation?",
    answerBody:
      "It uses AI and workflow systems to research content ideas, generate copy, manage creative briefs, handle publishing schedules, track performance and run approval processes while keeping your brand rules and human oversight intact.",
    deliverables: [
      {
        title: "Trend and Topic Intelligence",
        description:
          "AI monitors competitor signals, customer interests and market conversations so your team always has fresh, relevant content ideas to work with.",
      },
      {
        title: "AI Content Generation",
        description:
          "We draft posts, captions, campaign ideas, content calendars, hooks and variants aligned to your brand tone. Your team reviews and approves before anything goes live.",
      },
      {
        title: "Approval and Publishing Workflows",
        description:
          "Human review loops, role-based approvals, scheduling and channel-specific formatting are all built into one clean workflow your team can manage easily.",
      },
      {
        title: "Performance Analytics",
        description:
          "We report on engagement, reach, campaign outcomes, content themes and improvement opportunities so your strategy gets sharper over time.",
      },
    ],
    useCases: [
      {
        title: "Marketing Teams",
        description:
          "Teams generate consistent content calendars and reduce manual effort in ideation, drafting and reporting. More output with the same headcount.",
      },
      {
        title: "Leadership and Brand Communications",
        description:
          "Insights, announcements and reports are converted into audience-ready posts with review controls in place. Brand voice stays consistent across every channel.",
      },
    ],
    result:
      "Social content operations become faster and more consistent while brand teams keep control over approvals, tone and publishing decisions.",
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
      "Public sector communication",
      "Brand marketing teams",
    ],
    faqs: [
      {
        question: "Will AI publish content automatically?",
        answer:
          "Only if you choose that option. By default, all content goes through your approval workflow before it is published. You decide how much automation to apply and at which stage.",
      },
      {
        question: "Can the system follow our brand tone?",
        answer:
          "Yes. We build brand rule libraries and tone guidelines into the content generation process. The AI produces drafts that match your voice and your team reviews them before they go anywhere.",
      },
      {
        question: "Can it generate reports?",
        answer:
          "Yes. We connect performance data from your social platforms and generate clear reports on engagement, reach, campaign outcomes and content trends, either on a schedule or on demand.",
      },
    ],
    finalHeadline: "Scale Social Media Without Losing Quality Control",
    finalSubText:
      "Trinos can design an AI content workflow that supports ideation, drafting, approvals, scheduling and reporting for your team.",
    finalCTA: { label: "Book a Social Automation Consultation", href: "/contact" },
    related: [
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "Web Development", href: "/services/web-development" },
    ],
  },

  "web-development": {
    slug: "web-development",
    icon: Globe,
    eyebrow: "WEB DEVELOPMENT",
    pageTitle: "AI-Enabled Web Development Services | Trinos Technologies",
    metaDescription:
      "Build secure enterprise websites, portals, dashboards, SaaS platforms, and AI-enabled web applications with scalable architecture and modern UX.",
    h1Lead: "Web Platforms Built for",
    h1Highlight: "Scale, Speed and AI Adoption",
    subHeadline:
      "Trinos builds modern enterprise websites, portals, dashboards and web applications with production-grade architecture and AI features embedded into the user experience.",
    primaryCTA: { label: "Scope Your Web Platform", href: "/contact" },
    secondaryCTA: {
      label: "Explore Mobile App Development",
      href: "/services/mobile-app-development",
    },
    credibility:
      "Trinos has built multi-tenant web application architecture for product platforms that support agents, customers, operational teams and AI-powered workflows.",
    answerHeading: "What Does Trinos Provide in Web Development?",
    answerBody:
      "Trinos provides enterprise web development for websites, portals, dashboards, SaaS products, internal tools and AI-enabled applications. The focus is secure architecture, strong UX, system integration and features that help users adopt AI inside everyday workflows.",
    deliverables: [
      {
        title: "Enterprise Websites and Portals",
        description:
          "Secure, high-performance websites and portals for customers, employees, partners and operational teams, built to handle real enterprise traffic and workflows.",
      },
      {
        title: "Web Applications and SaaS Platforms",
        description:
          "Scalable applications with multi-tenant architecture, dashboards, role-based access and workflow logic for product companies and internal platform teams.",
      },
      {
        title: "Embedded AI Features",
        description:
          "Conversational search, smart recommendations, report generation, automation triggers and AI assistants built directly into the interface your users already work in.",
      },
      {
        title: "Backend and Integration Architecture",
        description:
          "APIs, authentication, databases, cloud deployment, analytics and integration with enterprise systems so your web platform connects to everything it needs.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Operations Portal",
        description:
          "A company replaces spreadsheet-heavy operations with a secure web portal connected to enterprise data and workflows, giving teams a single place to work.",
      },
      {
        title: "AI-Enabled Customer Platform",
        description:
          "A customer-facing platform uses AI search, recommendations and automated support features to improve adoption and service speed for its users.",
      },
    ],
    result:
      "Organizations get web platforms that are modern, usable, secure and ready for AI-powered workflows and enterprise integration.",
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
      "Travel and hospitality",
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
          "Yes. We handle everything from marketing websites and content portals to complex SaaS platforms and internal operational tools. The approach and tech stack are matched to what your specific platform needs to do.",
      },
      {
        question: "Can the web platform integrate with legacy systems?",
        answer:
          "Yes. We design integration layers that connect modern web applications to your existing ERP, CRM, databases and internal tools through APIs and secure middleware, without requiring a full system replacement.",
      },
      {
        question: "Can AI features be added after launch?",
        answer:
          "Yes. We build platforms with AI integration in mind. Features like conversational search, report generation and automation triggers can be added as modules after the core platform is live.",
      },
    ],
    finalHeadline: "Build a Web Platform That Can Grow Into an AI System",
    finalSubText:
      "Trinos can scope your web architecture, user experience, integrations and AI roadmap in one technical blueprint session.",
    finalCTA: { label: "Book a Web Platform Scoping Call", href: "/contact" },
    related: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    icon: Smartphone,
    eyebrow: "MOBILE APP DEVELOPMENT",
    pageTitle: "AI-Enabled Mobile App Development | Trinos Technologies",
    metaDescription:
      "Develop cross-platform mobile apps for enterprise users, customers, agents, field teams, and AI-powered workflows on iOS and Android.",
    h1Lead: "Mobile Apps That Put AI",
    h1Highlight: "Into the Hands of Users",
    subHeadline:
      "Trinos develops cross-platform mobile apps for customers, employees, agents and field teams with secure integrations, intuitive UX and embedded AI capabilities.",
    primaryCTA: { label: "Scope Your Mobile App", href: "/contact" },
    secondaryCTA: { label: "Explore Web Development", href: "/services/web-development" },
    credibility:
      "Trinos product engineering includes multi-application mobile ecosystems connected to back-office platforms, customer experiences and operational workflows.",
    answerHeading: "What Does Trinos Provide in Mobile App Development?",
    answerBody:
      "Trinos provides mobile app development for enterprise users, customers, agents and field teams. Apps can include AI assistants, real-time updates, workflow approvals, personalized recommendations, document capture, voice interactions and secure access to business systems.",
    deliverables: [
      {
        title: "Cross-Platform App Development",
        description:
          "Native-quality iOS and Android apps using efficient shared codebases where appropriate, built for performance, reliability and long-term maintainability.",
      },
      {
        title: "Mobile Workflow Interfaces",
        description:
          "Mobile-first approval flows, task updates, field reporting, document capture and operational dashboards so your teams can work from anywhere.",
      },
      {
        title: "AI Features Inside Mobile UX",
        description:
          "AI assistants, recommendations, search, voice inputs, summaries and predictive guidance built directly into the app experience your users interact with daily.",
      },
      {
        title: "Secure Enterprise Connectivity",
        description:
          "Authentication, APIs, offline sync, push notifications, analytics and role-based access so your app connects securely to every system it needs.",
      },
    ],
    useCases: [
      {
        title: "Travel and Field Operations",
        description:
          "Agents, customers and field guides use connected apps for itineraries, updates, service requests and operational coordination while away from a desk.",
      },
      {
        title: "Enterprise Approvals and Reporting",
        description:
          "Managers approve workflows, review AI summaries, capture documents and act on alerts from mobile devices without needing to be at a desktop system.",
      },
    ],
    result:
      "Enterprises improve adoption by giving users mobile access to AI-enabled workflows where the work actually happens.",
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
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes. We build cross-platform apps using React Native and Flutter where appropriate, or native builds when performance and platform-specific features require it. You get quality on both platforms without doubling the budget.",
      },
      {
        question: "Can mobile apps work with enterprise systems?",
        answer:
          "Yes. We build secure API integrations that connect your mobile app to ERP, CRM, workflow platforms and internal databases. Apps access only what they are permitted to and every connection is authenticated and logged.",
      },
      {
        question: "Can mobile apps include AI voice or chat assistants?",
        answer:
          "Yes. We embed voice inputs, conversational assistants and AI-powered interactions directly into the mobile UX. These connect to your backend AI systems and business data through secure API layers.",
      },
    ],
    finalHeadline: "Bring Enterprise AI to Mobile Workflows",
    finalSubText:
      "Trinos can help define the mobile experience, integration architecture, AI features and delivery roadmap for your application.",
    finalCTA: { label: "Book a Mobile App Scoping Call", href: "/contact" },
    related: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI Voice Assistants", href: "/services/ai-voice-assistants" },
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
    ],
  },
};

export const serviceSlugs = Object.keys(servicesContent);
