import Link from "next/link";
import { type as t } from "@/lib/typography";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[5rem]" aria-hidden="true" />
      <div className="relative pt-16 lg:pt-24 pb-20">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
          src="/videos/mp4.mp4"
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
            <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="text-white/90">Contact</span>
            </nav>

            <h1 className={`${t.heroHeadline} text-white`}>
              Let's Build Something{" "}
              <span className="text-brand-gradient-reverse">
                Intelligent
              </span>
            </h1>
            <p className={`mt-6 ${t.subheadline} text-white/80 max-w-2xl`}>
              Have a question or want to discuss a project? Our team is here to help you transform
              your business with AI-powered solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
