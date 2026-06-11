import Logo from "./Logo";
import { Linkedin, Facebook, Instagram } from "lucide-react";

// X (formerly Twitter) brand mark. lucide-react no longer ships brand logos,
// so we render the official X glyph inline with the same size/className API
// as the lucide icon components used below.
const XLogo = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trinos-technologies-private-limited/posts/",
  },
  {
    icon: XLogo,
    label: "X",
    href: "https://x.com/TrinosAI1512",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/Trinostechnologies",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/trinos_technologies/",
  },
];

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Agentic AI", href: "/services/agentic-ai" },
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
      { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
      { label: "View all services →", href: "/services" },
    ],
  },
  {
    title: "The Trinos Edge",
    links: [
      { label: "Small Language Models", href: "/trinos-edge" },
      { label: "Self-Improving AI", href: "/trinos-edge" },
      { label: "The Feedback Loop", href: "/trinos-edge" },
      { label: "Rapid App Development", href: "/trinos-edge" },
      { label: "Use Cases & Results", href: "/trinos-edge#use-cases" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Moltter Studio", href: "/products/moltter-studio" },
      { label: "Trip11", href: "/products/trip11" },
      { label: "TraceFlow", href: "/products/traceflow" },
      { label: "VoteSense", href: "/products/votesense" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-surface-dark text-on-surface-dark pt-20 pb-10">
    <div className="container-px max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 pb-14 border-b border-white/10">
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
          <Logo />
          <p className="mt-5 text-white/70 max-w-sm">
            Trinos engineers AI-first platforms and enterprise systems — agentic AI, workflow automation, analytics, computer vision, ERP, web and mobile — built to be secure, integrated and production-ready.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-ring group relative h-9 w-9 inline-flex items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
              >
                <span className="absolute inset-0 rounded-full border border-white/15" aria-hidden="true" />
                <svg
                  className="social-ring__svg absolute inset-0 h-full w-full"
                  viewBox="0 0 36 36"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    stroke="hsl(var(--primary-glow))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    pathLength="100"
                  />
                </svg>
                <Icon size={16} className="relative" />
              </a>
            ))}
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/90 mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="footer-link text-sm">{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Trinos Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
