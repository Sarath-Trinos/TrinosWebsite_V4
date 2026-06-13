"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

type NavLink = { label: string; href: string };
type NavPillar = { label: string; children: NavLink[] };
type NavDropdown = { label: string; href?: string; children: NavLink[] };
type NavMega = { label: string; href?: string; pillars: NavPillar[] };
type NavItem = NavLink | NavDropdown | NavMega;

function isMega(item: NavItem): item is NavMega {
  return "pillars" in item;
}
function isDropdown(item: NavItem): item is NavDropdown {
  return "children" in item;
}

const navItems: NavItem[] = [
  { label: "Products", href: "/products" },
  {
    label: "Services",
    href: "/services",
    pillars: [
      {
        label: "Agentic Automation",
        children: [
          { label: "Agentic AI", href: "/services/agentic-ai" },
          { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
          { label: "AI Voice Assistants", href: "/services/ai-voice-assistants" },
          { label: "Social Media Automation", href: "/services/social-media-automation" },
        ],
      },
      {
        label: "AI Intelligence Systems",
        children: [
          { label: "LLM Fine Tuning", href: "/services/llm-fine-tuning" },
          { label: "Generative AI and Analytics", href: "/services/generative-ai-analytics" },
          { label: "Computer Vision", href: "/services/computer-vision" },
        ],
      },
      {
        label: "Enterprise Platforms",
        children: [
          { label: "Enterprise Resource Planning", href: "/services/enterprise-resource-planning" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
        ],
      },
    ],
  },
  { label: "Industries", href: "/industry" },
  { label: "Trinos Edge", href: "/trinos-edge" },
  { label: "Careers", href: "/careers" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Our Values", href: "/about#our-values" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleGroup = (label: string) =>
    setOpenGroups((g) => ({ ...g, [label]: !g[label] }));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const isGroupActive = (children: NavLink[]) => children.some((c) => isActive(c.href));

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-white shadow-soft" : "bg-white/95"
      }`}
    >
      <div className="container-px max-w-[1200px] mx-auto flex items-center justify-between min-h-[3rem] py-1.5 md:min-h-[3.5rem] md:py-1.5">
        <div className="[&_.logo-wordmark]:text-[#0c3470] [&_.logo-wordmark]:font-normal">
          <Logo variant="header" />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            if (isMega(item)) {
              const allChildren = item.pillars.flatMap((p) => p.children);
              const active = (item.href && isActive(item.href)) || isGroupActive(allChildren);
              return (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`nav-link flex items-center gap-1 px-4 py-2 text-base font-medium rounded-full transition-colors ${
                        active ? "is-active text-primary" : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`nav-link flex items-center gap-1 px-4 py-2 text-base font-medium rounded-full transition-colors ${
                        active ? "is-active text-primary" : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  )}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-surface-dark text-on-surface-dark rounded-2xl shadow-card border border-white/10 p-6 grid grid-cols-3 gap-8 w-[min(780px,calc(100vw-2rem))]">
                      {item.pillars.map((pillar) => (
                        <div key={pillar.label}>
                          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            {pillar.label}
                          </div>
                          <div className="space-y-1">
                            {pillar.children.map((c) => (
                              <a
                                key={c.label}
                                href={c.href}
                                className={`block px-3 py-2 text-sm rounded-lg hover:bg-white/10 transition-colors ${
                                  isActive(c.href)
                                    ? "text-white bg-white/10"
                                    : "text-on-surface-dark/80 hover:text-white"
                                }`}
                              >
                                {c.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            if (isDropdown(item)) {
              const active =
                (item.href && isActive(item.href)) || isGroupActive(item.children);
              return (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`nav-link flex items-center gap-1 px-4 py-2 text-base font-medium rounded-full transition-colors ${
                        active ? "is-active text-primary" : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`nav-link flex items-center gap-1 px-4 py-2 text-base font-medium rounded-full transition-colors ${
                        active ? "is-active text-primary" : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  )}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-surface-dark text-on-surface-dark rounded-2xl shadow-card border border-white/10 p-2 min-w-[200px]">
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className={`block px-4 py-2.5 text-sm rounded-xl hover:bg-white/10 transition-colors ${
                            isActive(c.href)
                              ? "text-white bg-white/10"
                              : "text-on-surface-dark/80 hover:text-white"
                          }`}
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link px-4 py-2 text-base font-medium rounded-full transition-colors ${
                  isActive(item.href)
                    ? "is-active text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/contact"
            className="text-base font-semibold bg-surface-dark text-on-surface-dark px-4 py-2 rounded-full shadow-soft hover:shadow-glow transition-all"
          >
            Contact Us
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-px py-4 space-y-1">
            {navItems.map((item) => {
              if (isMega(item)) {
                return (
                  <div key={item.label} className="border-b border-border/60">
                    <div className="flex items-center justify-between">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex-1 py-3 font-medium text-foreground"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="flex-1 py-3 font-medium text-foreground">
                          {item.label}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleGroup(item.label)}
                        aria-expanded={!!openGroups[item.label]}
                        aria-label={`Toggle ${item.label} submenu`}
                        className="p-3 -mr-3 text-foreground"
                      >
                        <ChevronDown
                          className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                            openGroups[item.label] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openGroups[item.label] && (
                      <div className="pb-2 space-y-3">
                        {item.pillars.map((pillar) => (
                          <div key={pillar.label}>
                            <div className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                              {pillar.label}
                            </div>
                            {pillar.children.map((c) => (
                              <a
                                key={c.label}
                                href={c.href}
                                className="block py-2 pl-6 text-sm text-muted-foreground hover:text-primary"
                              >
                                {c.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (isDropdown(item)) {
                return (
                  <div key={item.label} className="border-b border-border/60">
                    <div className="flex items-center justify-between">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex-1 py-3 font-medium text-foreground"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="flex-1 py-3 font-medium text-foreground">
                          {item.label}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleGroup(item.label)}
                        aria-expanded={!!openGroups[item.label]}
                        aria-label={`Toggle ${item.label} submenu`}
                        className="p-3 -mr-3 text-foreground"
                      >
                        <ChevronDown
                          className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                            openGroups[item.label] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openGroups[item.label] && (
                      <div className="pb-2">
                        {item.children.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            className="block py-2.5 pl-4 text-sm text-muted-foreground hover:text-primary"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 font-medium border-b border-border/60"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/contact"
              className="block mt-4 text-center bg-surface-dark text-on-surface-dark py-3 rounded-full font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
