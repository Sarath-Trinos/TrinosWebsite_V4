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
    h1Lead: "AI Agents for",
    h1Highlight: "Enterprise Workflows",
    subHeadline:
      "Trinos builds agentic AI systems that coordinate across business systems, data and approvals to support complex enterprise work.",
    primaryCTA: { label: "Talk to an AI Architect", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos multi agent architecture supports AI products where autonomous agents analyze, generate and escalate outputs through structured workflows.",
    answerHeading: "What is Agentic AI?",
    answerBody:
      "Agentic AI uses autonomous software agents that understand business context, plan tasks, retrieve data, connect with approved systems, support permitted actions and escalate exceptions. Unlike a chatbot, an agentic system is designed to support workflow completion instead of stopping at a text response. In enterprise settings, these agents need clear permissions, monitoring and human approval points.",
    deliverables: [
      {
        title: "Multi Agent System Design",
        description:
          "Design specialized agents for research, analysis, validation, reporting and operational escalation. Each agent has a defined role so the system can divide complex work into controlled steps.",
      },
      {
        title: "Enterprise System Integration",
        description:
          "Connect agents securely to approved APIs, CRMs, ERPs, databases, email systems and internal platforms. This allows agents to work with real business context while staying within clearly defined access and permission boundaries.",
      },
      {
        title: "Human in the Loop Controls",
        description:
          "Add approval checkpoints so high risk actions require human review before execution. This protects business critical decisions while still allowing agents to prepare, route and support the work.",
      },
      {
        title: "Agent Monitoring and Audit Trails",
        description:
          "Track agent actions with logs, traceability, performance monitoring and exception reporting. Operations teams can see what the agent did, why it acted and where human review was involved.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Operations",
        description:
          "Agents monitor incoming tasks, collect relevant data, prepare recommendations and route decisions to the right team. This reduces coordination effort for operations teams that manage repeatable but context heavy work.",
        image: "/service/each%20service%20page/enterprise-operations.jpg",
        badge: "Operations",
      },
      {
        title: "Decision Intelligence",
        description:
          "Multiple agents analyze a business problem from different perspectives and produce recommendations with risks, assumptions and confidence levels. Decision makers receive a structured brief instead of scattered information from multiple sources.",
        image: "/service/each%20service%20page/decision-intelligence.jpg",
        badge: "Strategy",
      },
    ],
    result:
      "Teams can reduce repetitive analysis and coordination work while keeping oversight in the right parts of the process.",
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
    finalHeadline: "Use AI Agents to Support Operational Work",
    finalSubText:
      "Start with a focused discovery session to identify where agentic AI can reduce repetitive work and improve decision speed.",
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
    h1Lead: "AI Workflow Automation for",
    h1Highlight: "Complex Processes",
    subHeadline:
      "Trinos builds AI driven workflows that connect enterprise systems, approvals and human teams into one intelligent process layer.",
    primaryCTA: { label: "Map Your Workflow", href: "/contact" },
    secondaryCTA: { label: "Explore Agentic AI", href: "/services/agentic-ai" },
    credibility:
      "Trinos workflow automation architecture supports document review, quality checks, anomaly detection and human approval loops across enterprise operations.",
    answerHeading: "What is AI Workflow Automation?",
    answerBody:
      "AI Workflow Automation uses AI triggers, business rules, system integrations and human approvals to move work across enterprise systems. It helps reduce manual handoffs, improve process visibility and make complex operations easier to track. For teams using ERP, CRM, documents, data warehouses and SaaS tools together, it creates one connected layer for everyday process execution.",
    deliverables: [
      {
        title: "Cross System Workflow Orchestration",
        description:
          "Connect ERP, CRM, databases, documents, email and internal applications through one coordinated workflow layer. Teams get fewer disconnected steps and a clearer view of where each process stands.",
      },
      {
        title: "AI Triggered Process Initiation",
        description:
          "Start workflows from incoming data, predictive alerts, emails, uploaded documents, tickets or threshold events. The right process begins without waiting for manual follow up from different teams.",
      },
      {
        title: "Approval and Audit Infrastructure",
        description:
          "Design approval screens, escalation paths, decision logs and audit trails for regulated workflows. Human control stays visible where business risk, compliance or financial value requires review.",
      },
      {
        title: "Exception Handling",
        description:
          "Route low confidence, incomplete or high risk cases to reviewers with the right context. Routine work moves automatically while sensitive decisions remain with the right people.",
      },
    ],
    useCases: [
      {
        title: "Insurance and Document Operations",
        description:
          "Route policy documents, claims files and supporting records through extraction, validation, quality checks, anomaly detection, review and approval. This reduces repeated manual checking while maintaining visibility across the full document lifecycle.",
        image: "/service/each%20service%20page/Insurance-and-Document-Operations.png",
        badge: "Documents",
      },
      {
        title: "HR and Finance Operations",
        description:
          "Coordinate onboarding, procurement, invoice review and approvals across HR, finance and management teams. The workflow keeps every task, approval and exception traceable without depending on repeated email follow up.",
        image: "/service/each%20service%20page/HR-and-Finance-Operations.png",
        badge: "Operations",
      },
    ],
    result:
      "Enterprises can reduce process delays, improve visibility and keep human approval where the business needs it most.",
    techStack: [
      "Python",
      "REST APIs",
      "Webhooks",
      "AWS Step Functions",
      "SAP and Oracle integrations",
      "Workflow engines",
      "Secure databases",
    ],
    industries: [
      "Insurance",
      "Financial services",
      "Healthcare",
      "HR",
      "Enterprise technology",
      "Manufacturing",
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
    finalHeadline: "Reduce Manual Handoffs Across Your Business",
    finalSubText:
      "Trinos can map one complex workflow and identify where AI automation can reduce cycle time, reduce errors and remove operational friction.",
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
    h1Lead: "Language Models for Your",
    h1Highlight: "Business Context",
    subHeadline:
      "Trinos fine tunes language models around your domain, documents, workflows and terminology so outputs become more reliable for enterprise use.",
    primaryCTA: { label: "Assess Your Model Opportunity", href: "/contact" },
    secondaryCTA: {
      label: "Explore Generative AI and Analytics",
      href: "/services/generative-ai-analytics",
    },
    credibility:
      "Custom domain specific modeling supports Trinos AI platforms that need high accuracy across regulated, technical and operations heavy language.",
    answerHeading: "What is LLM Fine Tuning?",
    answerBody:
      "LLM Fine Tuning adapts a base language model using carefully prepared examples from a specific business domain. The model learns preferred terminology, answer style, document formats and task patterns so it can support specialist work more reliably. It is most useful when a general model is not consistent enough for repeatable enterprise tasks.",
    deliverables: [
      {
        title: "Dataset Curation and Cleaning",
        description:
          "Prepare proprietary examples, documents, prompts, labels and outputs for safer and more useful training. We remove noise, align formats and make sure the dataset reflects the task the model must perform.",
      },
      {
        title: "Instruction Fine Tuning",
        description:
          "Train models to follow business instructions, output formats and industry language more consistently. This helps the model respond in the structure and tone your internal users expect.",
      },
      {
        title: "Small Language Model Strategy",
        description:
          "Use compact domain specific models where they improve cost, speed and control for focused tasks. For narrow enterprise workflows, a smaller trained model can be more practical than a large general model.",
      },
      {
        title: "Evaluation and Benchmarking",
        description:
          "Test accuracy, hallucination risk, latency and cost against defined enterprise task requirements. Clear benchmarks help decide whether fine tuning, RAG or a hybrid approach is the best path.",
      },
    ],
    useCases: [
      {
        title: "Insurance and Legal Review",
        description:
          "Improve classification, summarization and document analysis using models trained around domain terminology. Teams can review policies, contracts, claims documents and compliance records with more consistent AI support.",
      },
      {
        title: "Internal Knowledge and Support",
        description:
          "Support teams with models that follow company style, approved formats and internal terminology. This is useful for HR, IT, operations and knowledge teams that need consistent answers from internal information.",
      },
    ],
    result:
      "Fine tuned models can improve reliability and cost efficiency for repeatable tasks where general AI is not precise enough.",
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
      "Trinos can assess your data, task complexity and model strategy before recommending fine tuning, RAG or a hybrid approach.",
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
    h1Highlight: "Business Intelligence",
    subHeadline:
      "Trinos turns approved enterprise data into natural language answers, reports and decision ready business insights.",
    primaryCTA: { label: "Explore AI Analytics", href: "/contact" },
    secondaryCTA: { label: "Talk to an AI Architect", href: "/contact" },
    credibility:
      "Trinos AI products use structured multi agent analysis and grounded generation to transform data and trends into consultant grade insights.",
    answerHeading: "What is Generative AI and Analytics?",
    answerBody:
      "Generative AI and Analytics combines enterprise data pipelines, language models, retrieval systems, dashboards and reporting workflows. It helps users ask questions, generate summaries, interpret trends and produce decision ready narratives from approved business data. This reduces dependency on manual report preparation while keeping outputs connected to source information.",
    deliverables: [
      {
        title: "Conversational Dashboards",
        description:
          "Enable executives and business users to query operational data through natural language. Users can ask follow up questions without needing SQL knowledge or deep BI tool experience.",
      },
      {
        title: "Intelligent Reporting",
        description:
          "Synthesize multi source data into readable reports, summaries and recommendations. Reports can combine numbers, trends and written explanations in a format that is easier for leadership to use.",
      },
      {
        title: "Grounded Generation",
        description:
          "Ground outputs against approved documents, datasets and business rules where applicable. This helps reduce unsupported answers and gives users more confidence in the response.",
      },
      {
        title: "Decision Intelligence Workflows",
        description:
          "Present recommendations with risks, assumptions, confidence signals and source references. Decision makers get more than a conclusion, they get the context behind it.",
      },
    ],
    useCases: [
      {
        title: "Consulting and Strategy",
        description:
          "Analysts convert raw data, research and trends into structured reports and presentations. Teams spend less time preparing first drafts and more time refining insights, strategy and recommendations.",
      },
      {
        title: "Government and Enterprise Reporting",
        description:
          "Leadership teams receive concise briefings from large policy, operations or performance datasets. This improves reporting speed while keeping the information traceable for review.",
      },
    ],
    result:
      "Teams spend less time preparing reports manually and more time acting on clear, traceable insights.",
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
    eyebrow: "AI Voice Assistants",
    pageTitle: "AI Voice Assistant Development Services | Trinos",
    metaDescription:
      "Build enterprise voice AI assistants for customer support, internal teams, workflow triggers, system integrations and human handoff.",
    h1Lead: "Voice AI for",
    h1Highlight: "Business Workflows",
    subHeadline:
      "Trinos builds AI voice assistants that understand speech, retrieve context and connect conversations to business systems.",
    primaryCTA: { label: "Design Your Voice Assistant", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos combines conversational AI, workflow engineering and enterprise integrations to move voice assistants beyond scripted responses into useful operational interfaces.",
    answerHeading: "What is an AI Voice Assistant?",
    answerBody:
      "An AI voice assistant is a conversational system that understands spoken language, processes intent and responds naturally. It can perform approved actions such as answering questions, scheduling tasks, collecting information, creating tickets or triggering workflows. For enterprise teams, voice becomes a faster interface to systems that normally require screens, forms or manual follow up.",
    deliverables: [
      {
        title: "Voice Conversation Design",
        description:
          "Plan intent flows, prompts, fallback handling, multilingual needs and voice experience. The assistant is designed to handle real user language instead of forcing people into rigid scripts.",
      },
      {
        title: "Speech to Text and Text to Speech Integration",
        description:
          "Integrate speech recognition and natural voice responses for customer and internal use cases. We tune accuracy, latency and response flow based on the environment where the assistant will be used.",
      },
      {
        title: "Enterprise Workflow Integration",
        description:
          "Connect voice assistants to CRMs, ERPs, support systems, booking systems and databases. Conversations can create records, fetch information and trigger approved workflow steps.",
      },
      {
        title: "Quality and Escalation Controls",
        description:
          "Use confidence thresholds, human handoff, call summaries, transcripts and monitoring dashboards. This helps teams review performance, improve responses and manage conversations that need human support.",
      },
    ],
    useCases: [
      {
        title: "Customer Support",
        description:
          "Voice assistants answer common questions, collect customer information, create tickets and escalate complex requests. Human agents receive the transcript and collected context so customers do not need to repeat the same details.",
      },
      {
        title: "Field and Internal Operations",
        description:
          "Employees use voice to retrieve status, update tasks, capture notes or trigger workflows without navigating screens. This is useful for field teams, frontline staff and operations teams working away from a desk.",
      },
    ],
    result:
      "Voice becomes a practical interface for enterprise systems, reducing friction for customers, frontline teams and operational staff.",
    techStack: [
      "Speech to Text APIs",
      "Text to Speech APIs",
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
      "Trinos can define the conversation flow, integration architecture and governance model for your AI voice assistant.",
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
    h1Lead: "AI Assisted",
    h1Highlight: "Social Media Operations",
    subHeadline:
      "Trinos builds AI powered content workflows for research, drafting, approvals, scheduling and performance reporting.",
    primaryCTA: { label: "Plan Your Content Workflow", href: "/contact" },
    secondaryCTA: {
      label: "Explore Generative AI and Analytics",
      href: "/services/generative-ai-analytics",
    },
    credibility:
      "Trinos product experience includes AI systems that support large scale content generation through structured analysis, trend understanding and multi agent review workflows.",
    answerHeading: "What is Social Media Automation?",
    answerBody:
      "Social Media Automation uses AI and workflow systems to support content research, idea generation, copy drafting, creative briefs, publishing schedules, performance reporting, approvals and campaign optimization. Human review and brand rules remain part of the process so teams can scale output without losing quality control. This is especially useful for companies that need consistent content across LinkedIn, X, Instagram and other digital channels.",
    deliverables: [
      {
        title: "Trend and Topic Intelligence",
        description:
          "Monitor topics, competitor signals, customer interests and market conversations with AI support. Teams get a clearer view of what to discuss before they start creating content.",
      },
      {
        title: "AI Content Generation",
        description:
          "Draft posts, captions, campaign ideas, content calendars and variants aligned to brand tone. The system supports content production while your team keeps final editorial judgment and brand accountability.",
      },
      {
        title: "Approval and Publishing Workflows",
        description:
          "Build human review loops, role based approvals, scheduling and channel specific formatting. Content moves from draft to approval to publishing with fewer scattered files and messages.",
      },
      {
        title: "Performance Analytics",
        description:
          "Report on engagement, reach, campaign outcomes, content themes and improvement opportunities. Insights can guide future topics, formats and campaign planning.",
      },
    ],
    useCases: [
      {
        title: "Marketing Teams",
        description:
          "Teams create consistent content calendars and reduce manual effort in ideation, drafting and reporting. This helps smaller teams operate with the structure of a larger content function.",
      },
      {
        title: "Leadership and Brand Communications",
        description:
          "Organizations turn insights, announcements and reports into audience ready posts with review controls. Leadership content becomes more consistent while still sounding aligned to the person and the brand.",
      },
    ],
    result:
      "Social content operations become more consistent while brand teams keep control over approvals, tone and publishing decisions.",
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
    finalHeadline: "Improve Social Media Workflow Without Losing Control",
    finalSubText:
      "Trinos can design an AI content workflow that supports ideation, drafting, approvals, scheduling and reporting.",
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
      "Trinos builds computer vision systems that convert images, documents, video and physical environments into usable business data.",
    primaryCTA: { label: "Book a Vision Assessment", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos computer vision capabilities support industrial, logistics, document and ERP connected workflows where visual accuracy and traceability matter.",
    answerHeading: "What is Computer Vision?",
    answerBody:
      "Computer Vision uses AI to understand images and video. It can detect objects, identify defects, extract text, inspect products, read labels, monitor environments and convert visual information into structured data for enterprise systems. For operations teams, it turns visual inspection and document capture into measurable digital workflows.",
    deliverables: [
      {
        title: "Real Time Defect Detection",
        description:
          "Inspect manufacturing lines and quality environments using high speed visual detection. The system can flag defects, missing parts or process deviations with supporting image evidence.",
      },
      {
        title: "OCR and Document Vision",
        description:
          "Extract text from documents, labels, ID cards, shipping forms and operating records. Captured data can move into ERP, CRM or workflow systems with less manual entry.",
      },
      {
        title: "Object Detection and Tracking",
        description:
          "Detect, count and track movement or spatial patterns across physical workflows. This supports inventory visibility, asset movement, safety checks and logistics monitoring.",
      },
      {
        title: "Edge Vision Deployment",
        description:
          "Run local inference on edge devices when latency, privacy or connectivity constraints matter. This helps teams process visual data closer to the point of capture.",
      },
    ],
    useCases: [
      {
        title: "Manufacturing Quality Control",
        description:
          "Cameras detect defects, surface issues, missing parts or process deviations on the production line. Quality teams get faster alerts and better evidence than manual inspection records alone.",
      },
      {
        title: "Logistics and Document Operations",
        description:
          "OCR and image recognition digitize labels, packages, documents, IDs and operational forms. This improves data capture speed across receiving, dispatch, verification and compliance workflows.",
      },
    ],
    result:
      "Organizations can make visual inspection and document capture faster, more consistent and easier to measure.",
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
      "Automobile and engineering",
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
      "Trinos can assess your cameras, image data, hardware, workflow and model requirements for a practical computer vision roadmap.",
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
    h1Lead: "ERP Systems for",
    h1Highlight: "AI Ready Operations",
    subHeadline:
      "Trinos architects and implements ERP ecosystems that unify enterprise data, workflows, reporting and integrations for AI ready operations.",
    primaryCTA: { label: "Book an ERP Consultation", href: "/contact" },
    secondaryCTA: {
      label: "Explore AI Workflow Automation",
      href: "/services/ai-workflow-automation",
    },
    credibility:
      "Trinos ERP capability is supported by leadership with over 25 years of enterprise systems experience across global deployments.",
    answerHeading: "What does Trinos provide in Enterprise Resource Planning?",
    answerBody:
      "Trinos provides ERP architecture, implementation, configuration, integration, data migration, reporting and AI ready workflow design. The goal is to create a reliable enterprise backbone that supports operations today and intelligent automation tomorrow. A well planned ERP environment gives AI systems cleaner data, stronger process structure and better integration points.",
    deliverables: [
      {
        title: "ERP Architecture and Blueprinting",
        description:
          "Map business processes, design data models, plan modules and define a practical implementation roadmap. The blueprint helps align the ERP system with how the organization actually works.",
      },
      {
        title: "ERP Configuration and Integration",
        description:
          "Configure SAP, Oracle, Microsoft Dynamics, Infor, QAD and Epicor with the right integration architecture. We focus on reliable process fit, clean integrations and long term maintainability.",
      },
      {
        title: "Data Migration and Integrity",
        description:
          "Manage secure migration, cleansing, mapping, validation and reconciliation from legacy systems. Clean and trusted data is treated as a foundation for ERP success.",
      },
      {
        title: "AI Ready ERP Workflows",
        description:
          "Prepare ERP data and processes for natural language queries, predictive alerts and workflow automation. This makes future AI adoption easier because the operating backbone is already structured.",
      },
    ],
    useCases: [
      {
        title: "Manufacturing and Supply Chain",
        description:
          "ERP systems unify production, inventory, procurement, finance and supply chain visibility. Teams gain a single operating view instead of relying on disconnected spreadsheets and fragmented tools.",
      },
      {
        title: "Healthcare and Multi Location Operations",
        description:
          "ERP centralizes procurement, HR, finance, reporting and approvals across facilities. Multi location teams can work with common standards, cleaner data and better management visibility.",
      },
    ],
    result:
      "Enterprises can reduce fragmented tools, improve data reliability and prepare the operational backbone for AI enabled workflows.",
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
      "Automobile and engineering",
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
    finalHeadline: "Build an ERP Foundation for AI Ready Operations",
    finalSubText:
      "Speak with Trinos ERP architects to define the implementation strategy, integration model and AI readiness roadmap.",
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
    h1Lead: "Web Platforms for Enterprise",
    h1Highlight: "Growth and AI Adoption",
    subHeadline:
      "Trinos builds enterprise websites, portals, dashboards and web applications with secure architecture and AI ready features.",
    primaryCTA: { label: "Scope Your Web Platform", href: "/contact" },
    secondaryCTA: {
      label: "Explore Mobile App Development",
      href: "/services/mobile-app-development",
    },
    credibility:
      "Trinos has built multi tenant web application architecture for product platforms that support agents, customers, operational teams and AI powered workflows.",
    answerHeading: "What does Trinos provide in Web Development?",
    answerBody:
      "Trinos provides enterprise web development for websites, portals, dashboards, SaaS products, internal tools and AI enabled applications. The focus is secure architecture, strong UX, system integration and features that help users adopt AI inside everyday workflows. A modern web platform should not only look good, it should support business processes, data access and future product growth.",
    deliverables: [
      {
        title: "Enterprise Websites and Portals",
        description:
          "Build secure, high performance websites and portals for customers, employees, partners and operations teams. Every platform is planned around user journeys, access control and the business systems it needs to connect with.",
      },
      {
        title: "Web Applications and SaaS Platforms",
        description:
          "Develop scalable applications with multi tenant architecture, dashboards, access control and workflow logic. The system is designed to grow with users, roles, data and product requirements.",
      },
      {
        title: "Embedded AI Features",
        description:
          "Add conversational search, recommendations, report generation, automation triggers and AI assistants. AI becomes part of the product experience rather than a separate tool users must open elsewhere.",
      },
      {
        title: "Backend and Integration Architecture",
        description:
          "Design APIs, authentication, databases, cloud deployment, analytics and enterprise system integrations. This gives the web platform a stable technical foundation for long term use.",
      },
    ],
    useCases: [
      {
        title: "Enterprise Operations Portal",
        description:
          "A company replaces spreadsheet heavy operations with a secure web portal connected to enterprise data and workflows. Teams get one place to access information, update tasks and track operational progress.",
      },
      {
        title: "AI Enabled Customer Platform",
        description:
          "A customer facing platform uses AI search, recommendations and automated support features to improve adoption and service speed. Users get faster answers while the business reduces support friction.",
      },
    ],
    result:
      "Organizations get web platforms that are modern, usable, secure and ready for AI powered workflows and enterprise integration.",
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
    finalHeadline: "Plan a Web Platform That Can Grow With AI",
    finalSubText:
      "Trinos can scope your web architecture, user experience, integrations and AI roadmap in one technical blueprint session.",
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
    h1Lead: "Mobile Apps for",
    h1Highlight: "Enterprise Users",
    subHeadline:
      "Trinos develops mobile apps for customers, employees and field teams with secure integrations and embedded AI capabilities.",
    primaryCTA: { label: "Scope Your Mobile App", href: "/contact" },
    secondaryCTA: { label: "Explore Web Development", href: "/services/web-development" },
    credibility:
      "Trinos product engineering includes multi application mobile ecosystems connected to back office platforms, customer experiences and operational workflows.",
    answerHeading: "What does Trinos provide in Mobile App Development?",
    answerBody:
      "Trinos provides mobile app development for enterprise users, customers, agents and field teams. Apps can include AI assistants, real time updates, workflow approvals, personalized recommendations, document capture, voice interactions and secure access to business systems. The goal is to make enterprise workflows easier to use where the work actually happens.",
    deliverables: [
      {
        title: "Cross Platform App Development",
        description:
          "Build native quality iOS and Android apps using efficient shared codebases where appropriate. The technology choice is based on performance, user experience and long term maintainability.",
      },
      {
        title: "Mobile Workflow Interfaces",
        description:
          "Create mobile approval flows, task updates, field reporting, document capture and dashboards. Users can complete operational work without waiting to return to a desktop system.",
      },
      {
        title: "AI Features Inside Mobile UX",
        description:
          "Embed AI assistants, recommendations, search, voice input, summaries and predictive guidance. These features help users make faster decisions inside the mobile experience.",
      },
      {
        title: "Secure Enterprise Connectivity",
        description:
          "Integrate authentication, APIs, offline sync, push notifications, analytics and role based access. The app connects to business systems while keeping permissions and governance in place.",
      },
    ],
    useCases: [
      {
        title: "Travel and Field Operations",
        description:
          "Agents, customers and field guides use connected apps for itineraries, updates, service requests and coordination. This improves communication when teams and customers are moving across locations.",
      },
      {
        title: "Enterprise Approvals and Reporting",
        description:
          "Managers approve workflows, review AI summaries, capture documents and act on alerts from mobile devices. Decisions move faster because approval no longer depends on being at a desk.",
      },
    ],
    result:
      "Enterprises can improve adoption by giving users mobile access to AI enabled workflows where the work happens.",
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
      "Trinos can help define the mobile experience, integration architecture, AI features and delivery roadmap for your application.",
    finalCTA: { label: "Book a Mobile Scoping Call", href: "/contact" },
    related: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI Voice Assistants", href: "/services/ai-voice-assistants" },
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
    ],
  },
};

export const serviceSlugs = Object.keys(servicesContent);
