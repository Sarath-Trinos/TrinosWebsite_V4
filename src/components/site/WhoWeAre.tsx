import Image from "next/image";
import { Cloud, Cpu, ShieldCheck, BarChart3, Code2, Database } from "lucide-react";
import { type as t } from "@/lib/typography";
import aboutImg from "@/assets/aboutus.jpg";

const floatingIcons = [
  {
    Icon: Cloud,
    label: "Cloud",
    iconBg: "bg-sky-500",
    style: "top-[-2%] left-[8%]",
    delay: "0s",
  },
  {
    Icon: Cpu,
    label: "AI",
    iconBg: "bg-violet-500",
    style: "top-[-6%] left-[42%]",
    delay: "0.6s",
  },
  {
    Icon: BarChart3,
    label: "Analytics",
    iconBg: "bg-orange-500",
    style: "top-[2%] right-[6%]",
    delay: "1.2s",
  },
  {
    Icon: ShieldCheck,
    label: "Security",
    iconBg: "bg-emerald-500",
    style: "top-[42%] right-[-2%]",
    delay: "1.8s",
  },
  {
    Icon: Database,
    label: "Data",
    iconBg: "bg-blue-600",
    style: "top-[40%] left-[-2%]",
    delay: "2.4s",
  },
  {
    Icon: Code2,
    label: "DevOps",
    iconBg: "bg-fuchsia-500",
    style: "top-[68%] left-[6%]",
    delay: "3s",
  },
];

const WhoWeAre = () => (
  <section id="who-we-are" className="pt-24 pb-0 bg-white">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 items-start">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl">
            <Image
              src={aboutImg}
              alt="Trinos Technologies team collaborating"
              placeholder="blur"
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
            />

            {floatingIcons.map(({ Icon, label, iconBg, style, delay }) => (
              <div
                key={label}
                className={`absolute ${style} animate-float-slow will-change-transform flex items-center gap-2 rounded-full bg-white shadow-sm pl-1.5 pr-4 py-1.5`}
                style={{ animationDelay: delay }}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg} text-white`}>
                  <Icon className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:pt-16">
          <h2 className={t.sectionHeadline}>
            <span className="text-black">Who</span>{" "}
            <span className="text-brand-gradient-reverse">we are</span>
          </h2>
          <p className={`mt-3 max-w-2xl ${t.subheadlineNormal} text-muted-foreground`}>
            A next-generation technology partner.
          </p>
          <p className={`mt-6 ${t.bodyLg} text-muted-foreground`}>
            Trinos Technologies supports enterprises in achieving secure, efficient and
            accelerated digital transformation. We create intelligent technology ecosystems
            that enhance operational efficiency, improve digital execution and deliver long-term
            business value.
          </p>
          <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
            Our journey has grown from focused beginnings into industry-driven innovation. Every
            solution is shaped by practical experience, strong engineering and a commitment to
            lasting client impact.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
