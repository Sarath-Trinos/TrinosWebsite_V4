import { Building2, Globe, Smartphone } from "lucide-react";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

const cards = [
  {
    icon: Building2,
    title: "Enterprise Resource Planning",
    description:
      "Enterprise systems that centralize operational data, connect business processes and provide the foundation for intelligent automation across the organization.",
    href: "/services/enterprise-resource-planning",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Production-grade web platforms engineered for scale, performance and AI-native experiences across customer and internal applications.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross platform mobile apps that place AI directly in users' hands, built for reliability, accessibility, security and seamless enterprise integration.",
    href: "/services/mobile-app-development",
  },
];

const HealthcareAI = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container-px max-w-[1200px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          contentClassName="max-w-none"
          titleExtraClassName="font-manrope"
          descriptionClassName="font-inter text-wrap"
          title={
            <>
              Enterprise <span className="text-brand-gradient">Platforms</span>
            </>
          }
          description="The enterprise execution layer beneath AI. ERP systems that manage core data, web platforms that scale access and mobile apps that bring intelligence to where work actually happens."
          exploreHref="/services"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
          {cards.map((it) => (
            <a
              key={it.title}
              href={it.href}
              className="tile bg-surface-dark text-on-surface-dark border border-white/10 p-7 lg:p-8 flex flex-col gap-5 text-left h-full transition-[border-color,box-shadow] duration-300 ease-out hover:border-transparent hover:shadow-glow"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl grid place-items-center bg-white/10 text-primary-glow">
                <it.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className={`${t.cardHeadline} font-manrope text-white`}>{it.title}</h3>
                <p className={`mt-3 ${t.bodySm} font-inter text-white/85`}>
                  {it.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareAI;
