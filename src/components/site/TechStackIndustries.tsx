import {
  ArrowLeftRight,
  Atom,
  AudioLines,
  Bell,
  Bot,
  Boxes,
  Braces,
  BrainCircuit,
  Building2,
  CalendarClock,
  Camera,
  CircuitBoard,
  ClipboardCheck,
  Cloud,
  Cog,
  Component,
  Cpu,
  Database,
  Factory,
  FileSearch,
  Flame,
  GitBranch,
  HeartPulse,
  Hexagon,
  Landmark,
  Layers,
  LineChart,
  MessagesSquare,
  Mic,
  Network,
  Palette,
  PhoneCall,
  Plug,
  Radio,
  RefreshCw,
  ScanEye,
  ScanFace,
  ScanText,
  Server,
  ServerCog,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Table,
  Truck,
  Users,
  Volume2,
  Webhook,
  Wind,
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
  // Order matters: earlier, more-specific patterns win over later generic ones.
  const table: Array<[RegExp, LucideIcon]> = [
    // ── Tech stack ──
    // ML frameworks & model tooling — keep each tool visually distinct.
    [/hugging\s?face/, Bot],
    [/pytorch/, Flame],
    [/tensorflow/, BrainCircuit],
    [/\bpeft\b/, Cog],
    [/\blora\b|fine-?tun/, SlidersHorizontal],
    [/sagemaker/, ServerCog],
    [/\btraining\b/, BrainCircuit],
    [/evaluation|\beval\b|benchmark/, ClipboardCheck],
    // Cloud / managed compute (check before generic "api"/"engine")
    [/aws|azure|\bgcp\b|google cloud|step functions|cloud/, Cloud],
    // Foundation models / providers — distinguish provider vs. provider.
    [/anthropic|claude/, Bot],
    [/openai|gpt|\bllm|\bai\b/, Sparkles],
    // Orchestration vs. retrieval/indexing.
    [/llamaindex|\bindex/, FileSearch],
    [/langchain|orchestr|agent/, Network],
    // Computer vision — detection vs. OCR vs. camera.
    [/\bocr\b|text recognition/, ScanText],
    [/camera/, Camera],
    [/\byolo\b/, ScanFace],
    [/opencv|vision|image recognition|detection/, ScanEye],
    // Edge / hardware
    [/jetson|nvidia|edge ai|hardware|embedded|\biot\b/, CircuitBoard],
    // Voice / speech — input vs. output.
    [/speech to text|\bstt\b|transcri/, Mic],
    [/text to speech|\btts\b/, Volume2],
    [/voice|audio/, AudioLines],
    // Telephony — distinct glyph per channel.
    [/twilio/, MessagesSquare],
    [/\bsip\b/, Radio],
    [/telephony|\bcall\b/, PhoneCall],
    // ERP / enterprise systems — vendor-distinct where possible.
    [/sap and oracle|oracle integration/, Server],
    [/oracle/, Database],
    [/\bsap\b/, Factory],
    [/dynamics|microsoft/, Layers],
    [/infor/, Boxes],
    [/\bqad\b/, Cog],
    [/epicor|\berp\b/, Server],
    [/\bcrm\b/, Users],
    // Data
    [/vector/, Boxes],
    [/\bsql\b/, Table],
    [/database|\bdb\b|postgres|redis|data store|datastore/, Database],
    [/data (pipeline|migration)|migration tools|etl/, ArrowLeftRight],
    [/\bbi\b|analytics|reporting|dashboard|metrics/, LineChart],
    // APIs & integrations — scheduling/social are more specific than generic API.
    [/scheduling/, CalendarClock],
    [/social|platform api/, Share2],
    [/webhook/, Webhook],
    [/graphql/, Hexagon],
    [/rest|\bapis?\b|integration|\bsdk\b/, Plug],
    // Web & mobile frameworks — keep each framework distinct.
    [/push notification/, Bell],
    [/offline/, RefreshCw],
    [/flutter/, TabletSmartphone],
    [/react native|\bmobile\b/, Smartphone],
    [/tailwind/, Wind],
    [/\breact\b(?! native)/, Component],
    [/next\.?js|frontend|\bui\b/, Atom],
    [/python|node|java|ruby|\bgo\b|rust|\bcode\b/, Braces],
    // Workflow / automation
    [/workflow|pipeline|\bengines?\b|automation/, Workflow],
    // Security & auth
    [/secure|security|auth|encrypt|identity/, ShieldCheck],
    // Content / brand
    [/brand|content|creative|design/, Palette],
    [/\bshare\b/, Share2],
    // Devops
    [/git|repo|version|ci\/cd|deploy/, GitBranch],
    [/infra|kubernetes|docker|container|compute/, Boxes],

    // ── Industries ──
    [/financ|bank|fintech|capital|invest/, LineChart],
    [/insur|\brisk\b|claims/, ShieldCheck],
    [/healthcare|health|medical|clinical/, HeartPulse],
    [/government|public|\bgov\b|civic/, Landmark],
    [/automobile|engineering/, Cog],
    [/manufactur|industr|factory/, Factory],
    [/supply/, Truck],
    [/logistic|warehouse/, ArrowLeftRight],
    [/\bhr\b|human resource|recruit|talent/, Users],
    [/legal|compliance|law/, Landmark],
    [/customer support|support|service desk/, PhoneCall],
    [/travel|hospitality|tourism/, Share2],
    [/\bb2b\b/, Network],
    [/enterprise|technology|saas|software|operations/, Layers],
    [/consult|advisory|services|marketing/, Building2],
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

      <div className="container-px mx-auto max-w-[1200px]">
        {/* ── Section heading ── */}
        <div className="mb-12 lg:mb-16">
          <h2 className={`${t.sectionHeadlineLg} text-foreground`}>
            Built on a modern AI toolchain,{" "}
            <span className="text-brand-gradient-reverse">applied across industries</span>
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
                <h3 className={`${t.cardHeadlineSemibold} text-foreground`}>
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
                <h3 className={`${t.cardHeadlineSemibold} text-foreground`}>
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
