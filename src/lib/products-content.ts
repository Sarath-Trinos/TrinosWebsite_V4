import type { LucideIcon } from "lucide-react";
import { Brain, Plane, Factory, Vote } from "lucide-react";

export type ProductStat = {
  label: string;
  value: string;
};

export type ProductRelatedLink = {
  label: string;
  href: string;
};

/**
 * Per-product color accent. Reuses the Services category-accent system
 * (see OurServices.tsx) for visual continuity across the site.
 */
export type ProductAccent = {
  /** Left border / heading bar + small dots. */
  bar: string;
  /** Card-media gradient tint (composed with `bg-gradient-to-br`). */
  tile: string;
  /** Text color for the category eyebrow on cards / detail hero. */
  text: string;
};

export type ProductContent = {
  slug: string;
  icon: LucideIcon;
  /** "Case Study NN" index used on the detail eyebrow. */
  caseNumber: string;
  category: string;
  accent: ProductAccent;

  /** Hub card name (may differ from detail H1, e.g. "VoteSense" vs "VoteSense Platform"). */
  name: string;
  /** Detail-page H1. */
  h1: string;

  pageTitle: string;
  metaDescription: string;

  /** Hub card one-liner. */
  cardSummary: string;
  /** Two headline stats surfaced on the hub card. */
  cardStats: ProductStat[];
  /** Short domain tags on the hub card. */
  cardTags: string[];

  /** Detail-page summary (one or two sentences). */
  summary: string;

  /** Product-led block (above the fold on detail pages). */
  whatItDoes: string;
  whoItsFor: string;
  keyFeatures: string[];

  /** Case-study narrative. */
  challenge: string;
  solution: string;
  impact: string;

  /** Sticky stat panel — Key Capabilities. */
  capabilities: ProductStat[];

  /** Domain Addressed tag chips. */
  domains: string[];

  /** Optional product imagery (real, cleared screenshots). Empty → gradient placeholder. */
  images: string[];
  imageAlt: string;

  related: ProductRelatedLink[];
};

const CTA = { label: "Book a Discovery Workshop", href: "/contact" };

export const productOrder = [
  "moltter-studio",
  "trip11",
  "traceflow",
  "votesense",
] as const;

export const productsContent: Record<string, ProductContent> = {
  "moltter-studio": {
    slug: "moltter-studio",
    icon: Brain,
    caseNumber: "Case Study 01",
    category: "Decision Intelligence AI",
    accent: {
      bar: "bg-primary",
      tile: "from-primary/40 via-primary/15 to-[#0f1115]",
      text: "text-primary",
    },
    name: "Moltter Studio",
    h1: "Moltter Studio",
    pageTitle: "Moltter Studio — Decision Intelligence AI | Trinos",
    metaDescription:
      "Moltter Studio is a decision-intelligence platform that makes high-stakes deliberation bias-aware, evidence-grounded and calibrated over time.",
    cardSummary:
      "A decision-intelligence platform that makes high-stakes deliberation bias-aware, evidence-grounded and calibrated over time.",
    cardStats: [
      { label: "Source-Cited Claims", value: "100%" },
      { label: "Biases Surfaced / Decision", value: "2–4" },
    ],
    cardTags: [
      "Cognitive Bias Detection",
      "Multi-Perspective Reasoning",
      "Calibration Tracking",
    ],
    summary:
      "A decision-intelligence platform that makes every high-stakes deliberation bias-aware, evidence-grounded and calibrated over time.",
    whatItDoes:
      "Pressure-tests important decisions through a structured, evidence-grounded deliberation process — surfacing hidden biases, mapping where experts agree and disagree, and tracking decision quality over time.",
    whoItsFor:
      "Investors, operators and strategists making high-stakes investment, M&A and strategic decisions.",
    keyFeatures: [
      "6-stage deliberation pipeline",
      "Multi-panel expert perspectives",
      "Built-in contrarian view",
      "2–4 biases surfaced per decision",
      "100% source-cited claims",
      "Calibration tracking over time",
    ],
    challenge:
      "The bottleneck in high-stakes decisions isn't data access; it's cognitive bias. Anchoring, confirmation, sunk cost and framing quietly distort how investors, operators and strategists weigh information. Critical calls proceed without contrarian stress-testing or calibration tracking, producing repeatable, costly errors.",
    solution:
      "Moltter Studio pressure-tests your thinking through a structured, evidence-grounded deliberation process: it surfaces hidden biases, maps where experts agree and disagree, and tracks the quality of your decisions over time.",
    impact:
      "Instead of a single confident answer, decision-makers get a deliberation pressure-tested from multiple angles, grounded in evidence and stripped of hidden bias — fewer blind spots, more confidence at the moment of commitment, and a defensible record of why a decision was made. Because outcomes are tracked, judgment improves over time.",
    capabilities: [
      { label: "Pipeline Stages", value: "6" },
      { label: "Biases Surfaced per Decision", value: "2 to 4" },
      { label: "Source-Cited Claims", value: "100%" },
      { label: "Expert Perspectives", value: "Multi-Panel" },
      { label: "Contrarian View", value: "Built-In" },
    ],
    domains: [
      "Cognitive Bias Detection",
      "Multi-Perspective Reasoning",
      "Structured Disagreement",
      "Decision Reports",
      "Calibration Tracking",
    ],
    images: [],
    imageAlt: "Moltter Studio decision-intelligence platform screenshot",
    related: [
      { label: "Trip11", href: "/products/trip11" },
      { label: "TraceFlow", href: "/products/traceflow" },
      { label: "VoteSense", href: "/products/votesense" },
    ],
  },

  trip11: {
    slug: "trip11",
    icon: Plane,
    caseNumber: "Case Study 02",
    category: "Vertical SaaS · Travel",
    accent: {
      bar: "bg-cyan-400",
      tile: "from-cyan-400/40 via-cyan-400/15 to-[#0f1115]",
      text: "text-cyan-500",
    },
    name: "Trip11",
    h1: "Trip11",
    pageTitle: "Trip11 — Vertical SaaS for Travel Businesses | Trinos",
    metaDescription:
      "Trip11 is an integrated operating system that consolidates seven or more travel-business tools — itineraries, clients, payments, proposals and analytics — into one platform.",
    cardSummary:
      "One operating system that consolidates seven or more travel-business tools — itineraries, clients, payments, proposals and analytics.",
    cardStats: [
      { label: "Faster Itineraries", value: "3×" },
      { label: "Avg Monthly Revenue Uplift", value: "₹4L+" },
    ],
    cardTags: [
      "Itinerary Engine",
      "Travel CRM",
      "Revenue Analytics",
      "Role-Based Access",
    ],
    summary:
      "An integrated operating system that consolidates seven or more travel-business tools into one platform — itineraries, clients, payments, proposals and analytics.",
    whatItDoes:
      "Replaces a fragmented stack of spreadsheets, messaging apps and disconnected booking systems with one interoperable platform covering the full travel-business workflow.",
    whoItsFor: "Tour operators, travel agencies and DMCs.",
    keyFeatures: [
      "Drag-and-drop itinerary builder with client-ready PDFs, real-time pricing and supplier integration",
      "Centralised travel CRM for travellers, payments and documents",
      "Revenue, margin and seasonal-trend analytics",
      "Smart task management",
      "Finance and invoicing with forecasting",
      "Branded digital proposals and vouchers",
      "Role-based access for Administrators, Agents and Guides",
    ],
    challenge:
      "Tour operators, agencies and DMCs still run on spreadsheets, messaging apps, email and disconnected booking systems. The cost is real: double bookings, manual errors, weak visibility into profitability and fragmented client communication. Bookings are lost, revenue leaks and client trust is put at risk.",
    solution:
      "Trip11 unifies the core modules in a single platform, from itinerary building through CRM, analytics, task management, finance and branded proposals — all under role-based access.",
    impact:
      "Travel teams build itineraries 3× faster, cut no-shows by 40% and see an average monthly revenue uplift of ₹4L or more, replacing a seven-tool stack with one platform.",
    capabilities: [
      { label: "Tools Consolidated", value: "7+" },
      { label: "Faster Itinerary Creation", value: "3×" },
      { label: "No-Show Reduction", value: "40%" },
      { label: "Avg Monthly Revenue Uplift", value: "₹4L+" },
      { label: "Deployment Stage", value: "Early Access Beta" },
    ],
    domains: [
      "Itinerary Engine",
      "Travel CRM",
      "Revenue Analytics",
      "Finance Automation",
      "Digital Proposals",
      "Role-Based Access",
      "Supplier Integration",
    ],
    images: [],
    imageAlt: "Trip11 travel-business operating system screenshot",
    related: [
      { label: "Moltter Studio", href: "/products/moltter-studio" },
      { label: "TraceFlow", href: "/products/traceflow" },
      { label: "VoteSense", href: "/products/votesense" },
    ],
  },

  traceflow: {
    slug: "traceflow",
    icon: Factory,
    caseNumber: "Case Study 03",
    category: "Industrial AI · Manufacturing",
    accent: {
      bar: "bg-violet-400",
      tile: "from-violet-400/40 via-violet-400/15 to-[#0f1115]",
      text: "text-violet-500",
    },
    name: "TraceFlow",
    h1: "TraceFlow",
    pageTitle: "TraceFlow — Industrial AI for Manufacturing | Trinos",
    metaDescription:
      "TraceFlow delivers end-to-end material tracking and inventory management for manufacturing, with complete supply-chain visibility from supplier to customer.",
    cardSummary:
      "End-to-end material tracking and inventory management with complete supply-chain visibility from supplier to customer.",
    cardStats: [
      { label: "Traceability", value: "LOT-Level" },
      { label: "Inventory & FIFO", value: "Real-Time" },
    ],
    cardTags: [
      "Supply Chain",
      "Quality Control",
      "Compliance",
      "Manufacturing",
    ],
    summary:
      "End-to-end material tracking and inventory management for manufacturing, delivering complete supply-chain visibility from supplier to customer.",
    whatItDoes:
      "Tracks every material movement from receiving through production to dispatch, with automated compliance and integrated quality control — creating a complete audit trail.",
    whoItsFor: "Manufacturers and supply-chain operations teams.",
    keyFeatures: [
      "LOT-level traceability",
      "Automated FIFO compliance enforcement",
      "Real-time inventory monitoring and alerts",
      "Integrated quality-control inspection workflows",
      "Production-order coordination and dispatch",
      "Comprehensive reporting and analytics dashboards",
    ],
    challenge:
      "Manufacturers face fragmented supply-chain visibility: materials tracked in spreadsheets, FIFO compliance managed by hand, and quality inspections disconnected from production. The result is inventory errors, compliance gaps and delayed shipments.",
    solution:
      "TraceFlow provides automated LOT-level traceability, real-time FIFO compliance enforcement and integrated quality-control workflows, tracking every movement from receiving to dispatch.",
    impact:
      "Manufacturers gain real-time stock visibility with automated alerts, quality-inspection integration and production-order coordination that eliminates manual tracking — turning raw operational data into actionable decisions through reporting dashboards.",
    capabilities: [
      { label: "Material Traceability", value: "LOT-Level" },
      { label: "FIFO Compliance", value: "Automated" },
      { label: "Inventory Monitoring", value: "Real-Time" },
      { label: "Quality Integration", value: "End-to-End" },
      { label: "Production Orders", value: "Full Lifecycle" },
    ],
    domains: [
      "Supply Chain",
      "Inventory Management",
      "Quality Control",
      "Manufacturing",
      "Compliance",
      "Analytics",
    ],
    images: [
      "/products/traceflow-6.jpg",
      "/products/traceflow-7.jpg",
      "/products/traceflow-8.jpg",
    ],
    imageAlt: "TraceFlow material tracking and inventory management screenshot",
    related: [
      { label: "Moltter Studio", href: "/products/moltter-studio" },
      { label: "Trip11", href: "/products/trip11" },
      { label: "VoteSense", href: "/products/votesense" },
    ],
  },

  votesense: {
    slug: "votesense",
    icon: Vote,
    caseNumber: "Case Study 04",
    category: "Election Tech AI",
    accent: {
      bar: "bg-amber-400",
      tile: "from-amber-400/40 via-amber-400/15 to-[#0f1115]",
      text: "text-amber-500",
    },
    name: "VoteSense",
    h1: "VoteSense Platform",
    pageTitle: "VoteSense — Election Tech AI Platform | Trinos",
    metaDescription:
      "VoteSense is a multi-tenant election-management platform with ML analytics, hierarchical access control, 6.5 crore voter records and offline-first field operations.",
    cardSummary:
      "A multi-tenant election-management platform with ML analytics, hierarchical access control and offline-first field operations.",
    cardStats: [
      { label: "Voter Records", value: "6.5 crore" },
      { label: "Polling Booths", value: "75,000+" },
    ],
    cardTags: [
      "Multi-Tenant AI",
      "Hierarchical RBAC",
      "ML Swing Prediction",
      "NLP Sentiment",
    ],
    summary:
      "An AI-powered, multi-tenant election-management platform with ML analytics, hierarchical geographic access control, 6.5 crore voter records and offline-first field operations.",
    whatItDoes:
      "Runs large-scale election operations from a single platform — isolated per party — combining voter-roll analytics, geographic access control and AI-driven predictive intelligence.",
    whoItsFor:
      "Political parties managing large-scale election campaigns and field operations.",
    keyFeatures: [
      "Per-party fully isolated database (multi-tenant)",
      "Five-level hierarchical RBAC (State → District → Constituency → Zone → Booth)",
      "6.5 crore ECI electoral-roll records with booth-wise analytics",
      "ML swing-booth prediction",
      "Anomaly detection",
      "NLP sentiment analysis",
      "Offline-first, GPS-verified field operations",
      "White-label apps",
    ],
    challenge:
      "Parties managing elections across tens of thousands of booths rely on fragmented spreadsheets, manual field reporting and zero predictive intelligence — under extreme time pressure and strict data-confidentiality requirements. No existing platform combined multi-party data isolation, geographic access control and AI analytics in one system.",
    solution:
      "VoteSense is a cloud-native, multi-tenant platform where each party operates in a fully isolated environment, with five-level hierarchical RBAC enforcing geographic boundaries, a voters module integrating 6.5 crore ECI records, and an AI engine delivering swing-booth prediction, anomaly detection and NLP sentiment analysis.",
    impact:
      "15+ political parties across 234 constituencies and 75,000+ polling booths operate from a single platform with zero data leakage between competitors. Field operations once run on WhatsApp and spreadsheets are now GPS-verified and centrally tracked, and booth-level predictive intelligence replaces intuition-based strategy.",
    capabilities: [
      { label: "Constituencies", value: "234" },
      { label: "Polling Booths", value: "75,000+" },
      { label: "Political Parties", value: "15+" },
      { label: "Voter Records", value: "6.5 crore" },
      { label: "AI/ML Models", value: "5" },
    ],
    domains: [
      "Multi-Tenant AI",
      "Hierarchical RBAC",
      "ML Swing Prediction",
      "NLP Sentiment",
      "Offline-First Mobile",
      "White-Label Apps",
    ],
    images: [],
    imageAlt: "VoteSense election-management platform screenshot",
    related: [
      { label: "Moltter Studio", href: "/products/moltter-studio" },
      { label: "Trip11", href: "/products/trip11" },
      { label: "TraceFlow", href: "/products/traceflow" },
    ],
  },
};

export const productCTA = CTA;
