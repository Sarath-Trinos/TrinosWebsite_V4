import { ArrowRight } from "lucide-react";
import { type as t } from "@/lib/typography";

const CareersHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[5rem]" aria-hidden="true" />
      <div className="relative pt-16 lg:pt-24 pb-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
          src="/videos/0_Interview_Team_3840x2160.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container-px max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="chip mb-5">Careers</span>
            <h1 className={`${t.heroHeadline} text-white`}>
              Join a team of{" "}
              <span className="text-brand-gradient-reverse">
                passionate innovators
              </span>
              .
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
              Work on meaningful projects, grow your tech skills, and make a lasting career
              impact at Trinos.
            </p>

            <a
              href="#open-positions"
              className="group mt-9 inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
            >
              View open roles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
