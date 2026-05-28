import Image from "next/image";
import { type as t } from "@/lib/typography";

const leaders = [
  {
    name: "Rajeshkumar Ganesan",
    role: "Co-Founder & CEO",
    image: "/team/Rajesh.webp",
    bio: "18+ years across IT, ITES, and semiconductor industries. Drives global business development, strategy, and strategic partnerships across the USA, Europe, India, the Middle East, and Southeast Asia.",
  },
  {
    name: "Mukesh Vaidyanathan",
    role: "Co-Founder & Chief Strategy Officer",
    image: "/team/Mukesh.webp",
    bio: "25+ years in enterprise systems and ERP. Brings cross-industry implementation experience to ensure AI integrates with legacy enterprise tools.",
  },
  {
    name: "Rajkumar Gangadharan",
    role: "Co-Founder & CTO",
    image: "/team/Raj.webp",
    bio: "17+ years in software development, system architecture, and AI. Chief architect behind multi-agent orchestration and workflow automation platforms.",
  },
];

const Leadership = () => (
  <section id="leadership" className="py-24 bg-white">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="max-w-3xl">
        <span className="chip mb-5">Leadership</span>
        <h2 className={t.sectionHeadline}>
          <span className="text-black">Meet the people</span>{" "}
          <span className="text-brand-gradient-reverse">behind Trinos</span>
        </h2>
        <p className={`mt-4 ${t.subheadlineNormal} text-muted-foreground`}>
          Operators with decades of enterprise, engineering, and AI experience — building what they once shipped.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <article key={leader.name} className="flex flex-col">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={leader.image}
                alt={`${leader.name}, ${leader.role}`}
                fill
                className="object-contain object-left-bottom"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="mt-6">
              <h3 className={`${t.cardHeadline} text-foreground`}>{leader.name}</h3>
              <p className={`mt-1 ${t.role} text-brand-gradient-reverse`}>{leader.role}</p>
              <p className={`mt-4 ${t.body} text-muted-foreground`}>{leader.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
