import { Target, Compass } from "lucide-react";
import { type as t } from "@/lib/typography";

const items = [
  {
    title: "Our Mission",
    description:
      "To empower organizations with intelligent and secure digital solutions that accelerate transformation and unlock operational excellence.",
    Icon: Target,
    iconColor: "text-[#6D28D9]",
    iconBg: "bg-[#EFE6FF]",
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in AI-driven enterprise transformation by delivering future-ready, scalable, and secure technology platforms.",
    Icon: Compass,
    iconColor: "text-[#9A4B00]",
    iconBg: "bg-[#FFE9CC]",
  },
];

const MissionVision = () => (
  <section className="bg-background py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {items.map(({ title, description, Icon, iconColor, iconBg }) => (
          <div
            key={title}
            className="group relative rounded-3xl border border-border bg-white p-8 md:p-10 lg:p-12 flex flex-col transition-shadow hover:shadow-card"
          >
            <span
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBg} ${iconColor}`}
            >
              <Icon className="w-6 h-6" strokeWidth={2} />
            </span>

            <h3 className={`mt-8 ${t.cardHeadlineMd} text-foreground`}>
              {title}
            </h3>

            <div className="mt-4 h-px w-12 bg-border" />

            <p className={`mt-5 ${t.bodyResponsive} text-muted-foreground`}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVision;
