import Image from "next/image";
import { type as t } from "@/lib/typography";
import SectionHeader from "./SectionHeader";

type Card = {
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Career growth",
    description:
      "Continuous learning opportunities and clear career progression paths.",
    image: "/career/growth-strategy-team-collaboration-grow-business-success-teamwork-partnership-develop.jpg",
  },
  {
    title: "Work-life balance",
    description:
      "Flexible schedules and remote work options to support your lifestyle.",
    image: "/career/Worklife_Balance.png",
  },
  {
    title: "Innovation",
    description:
      "Work on cutting-edge AI projects that shape the future of technology.",
    image: "/career/ai-chatbot.jpg",
  },
  {
    title: "Global impact",
    description: "Build solutions that transform enterprises worldwide.",
    image: "/career/Global impact.jpg",
  },
];

const WhyJoinTrinos = () => {
  return (
    <section id="why-join" className="py-24 bg-surface-soft">
      <div className="container-px max-w-[1200px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              Why join <span className="text-brand-gradient">Trinos</span>
            </>
          }
          titleClassName={`${t.sectionHeadlineLg} text-foreground`}
          subtitle="Build Work That Matters"
          description="At Trinos, you will work with a team of innovators building AI first technology for enterprises. Grow your skills, solve meaningful problems and build a career with real impact."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article key={card.title} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className={`mt-5 ${t.cardHeadline} text-foreground`}>
                {card.title}
              </h3>
              <p className={`mt-3 ${t.bodySm} text-foreground/70`}>
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinTrinos;
