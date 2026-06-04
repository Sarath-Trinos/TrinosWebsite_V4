import {
  Boxes,
  Braces,
  Building2,
  Cpu,
  Database,
  GitBranch,
  Landmark,
  Layers,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";

type Props = {
  techStack: string[];
  industries: string[];
};

/**
 * Keyword → icon resolver. `techStack`/`industries` are arbitrary strings that
 * vary per service, so we map by substring and fall back to a neutral icon —
 * every chip always renders with a relevant or sensible default glyph.
 */
const resolveIcon = (label: string, fallback: LucideIcon): LucideIcon => {
  const s = label.toLowerCase();
  const table: Array<[RegExp, LucideIcon]> = [
    [/python|node|java|ruby|\bgo\b|rust|code|sdk/, Braces],
    [/openai|anthropic|claude|gpt|llm|model|\bai\b/, Sparkles],
    [/langchain|llamaindex|orchestr|agent/, Network],
    [/vector|database|\bdb\b|postgres|redis|store/, Database],
    [/secure|security|auth|api|encrypt/, ShieldCheck],
    [/workflow|pipeline|engine|automation/, Workflow],
    [/git|repo|version|ci\/cd|deploy/, GitBranch],
    [/cloud|infra|compute|kubernetes|docker|container/, Boxes],
    // Industries
    [/financ|bank|fintech|capital|invest/, LineChart],
    [/insur|risk|claims/, ShieldCheck],
    [/government|public|gov|civic/, Landmark],
    [/manufactur|industr|factory|supply/, Cpu],
    [/enterprise|technology|saas|software/, Layers],
    [/consult|advisory|services/, Building2],
  ];
  for (const [re, icon] of table) if (re.test(s)) return icon;
  return fallback;
};

const TechStackIndustries = ({ techStack, industries }: Props) => {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F7] py-20 lg:py-28">
      {/* ── Ambient background: grid + soft brand glows ── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 75%)",
          }}
        />
        {/* Soft radial glows */}
        <div className="absolute -top-24 left-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-[30rem] w-[30rem] translate-x-1/2 rounded-full bg-primary-glow/10 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-[1400px]">
        {/* ── Section heading ── */}
        <div className="mb-12 max-w-2xl lg:mb-16">
          <h2 className={`${t.sectionHeadlineMd} text-foreground`}>
            Built on a{" "}
            <span className="text-brand-gradient">modern AI toolchain</span>,
            applied across industries
          </h2>
        </div>

        {/* ── Two matching glass panels ── */}
        <div className="relative grid gap-6 lg:grid-cols-2">
          {/* ░░ ZONE A — Tech stack ░░ */}
          <div
            className={cn(
              "group/panel relative overflow-hidden rounded-3xl",
              "border border-white/60 bg-white/70 backdrop-blur-xl",
              "p-8 sm:p-10",
              "shadow-[0_24px_70px_-30px_hsl(210_60%_25%/0.35)]"
            )}
          >
            {/* inner top highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-[0_8px_22px_-8px_hsl(var(--primary)/0.7)]">
                <Cpu className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Tech stack &amp; tools
                </div>
                <h3 className={`${t.cardHeadlineSm} text-foreground`}>
                  The toolchain we work with
                </h3>
              </div>
            </div>

            {/* Floating technology chips */}
            <ul className="flex flex-wrap gap-2.5 sm:gap-3">
              {techStack.map((tech, i) => {
                const Icon = resolveIcon(tech, Braces);
                return (
                  <li
                    key={tech}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span
                      className={cn(
                        "group/chip relative inline-flex items-center gap-2 rounded-2xl",
                        "border border-border bg-white px-3.5 py-2.5",
                        "text-sm font-medium text-foreground",
                        "shadow-[0_2px_8px_-4px_hsl(210_60%_25%/0.18)]",
                        "transition-all duration-300 ease-out",
                        "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_14px_28px_-14px_hsl(var(--primary)/0.55)]"
                      )}
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-tint text-primary transition-colors duration-300 group-hover/chip:bg-primary group-hover/chip:text-white">
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </span>
                      {tech}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ░░ ZONE B — Industries (matches Zone A) ░░ */}
          <div
            className={cn(
              "group/panel relative overflow-hidden rounded-3xl",
              "border border-white/60 bg-white/70 backdrop-blur-xl",
              "p-8 sm:p-10",
              "shadow-[0_24px_70px_-30px_hsl(210_60%_25%/0.35)]"
            )}
          >
            {/* inner top highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-[0_8px_22px_-8px_hsl(var(--primary)/0.7)]">
                <Building2 className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Industries
                </div>
                <h3 className={`${t.cardHeadlineSm} text-foreground`}>
                  Where this service is applied
                </h3>
              </div>
            </div>

            {/* Industry chips */}
            <ul className="flex flex-wrap gap-2.5 sm:gap-3">
              {industries.map((ind, i) => {
                const Icon = resolveIcon(ind, Building2);
                return (
                  <li
                    key={ind}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <span
                      className={cn(
                        "group/chip relative inline-flex items-center gap-2 rounded-2xl",
                        "border border-border bg-white px-3.5 py-2.5",
                        "text-sm font-medium text-foreground",
                        "shadow-[0_2px_8px_-4px_hsl(210_60%_25%/0.18)]",
                        "transition-all duration-300 ease-out",
                        "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_14px_28px_-14px_hsl(var(--primary)/0.55)]"
                      )}
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-tint text-primary transition-colors duration-300 group-hover/chip:bg-primary group-hover/chip:text-white">
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </span>
                      {ind}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackIndustries;
