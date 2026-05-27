import {
  Factory,
  ShieldCheck,
  Landmark,
  HeartPulse,
  Building2,
  Cpu,
  Plane,
  Car,
} from "lucide-react";
import { type as t } from "@/lib/typography";

type Industry = {
  icon: typeof Factory;
  name: string;
};

const industries: Industry[] = [
  { icon: Factory, name: "Manufacturing" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: Landmark, name: "Financial Services" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Building2, name: "Government" },
  { icon: Cpu, name: "Enterprise Technology" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: Car, name: "Automobile & Engineering" },
];

const ServicesIndustries = () => (
  <section id="who-we-help" className="bg-[#F9F9F7] py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="mb-12 max-w-3xl">
        <span className="chip mb-5">Who we help</span>
        <h2 className={t.sectionHeadlineLg}>
          <span className="text-black">Built for</span>{" "}
          <span className="text-brand-gradient-reverse">operations-heavy industries</span>
        </h2>
        <p className={`mt-4 ${t.bodyLg} text-muted-foreground`}>
          We work with enterprises where AI must be secure, auditable, and aligned with business
          rules — across manufacturing, insurance, financial services, healthcare, government,
          enterprise technology, travel and hospitality, automobile and engineering, and other
          operations-heavy sectors.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="group tile bg-white p-6 flex flex-col items-start gap-4 hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon className="w-6 h-6" strokeWidth={1.75} />
            </div>
            <p className="font-semibold text-foreground">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesIndustries;
