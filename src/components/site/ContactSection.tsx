"use client";

import { useState } from "react";
import { type as t } from "@/lib/typography";
import { Loader2, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Generative AI and Analytics",
  "Agent-Based Automation",
  "Retrieval-Augmented Generation",
  "RPA & Industrial AI",
  "Enterprise Resource Planning",
  "Cyber Security Services",
  "Customer Relationship Management",
  "Cloud Solutions",
  "Domain-Specific LLMs Fine-Tuning",
  "Modernization",
  "Workflow Automation",
  "Computer Vision",
  "Predictive Analytics & Data Modeling",
  "Web & Mobile Development",
  "AI for ERP Systems",
  "Enterprise Software Development",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data?.error || "Could not send your message. Please try again.");
        return;
      }

      toast.success("Thanks! We'll get back to you within 24 hours.");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-10 bg-background">
      <div className="container-px max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
        <div>
          <h2 className={`${t.sectionHeadline} text-foreground`}>
            Send us a message
          </h2>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@gmail.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service interested in <span className="text-primary">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-xl shadow-soft hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  Sending...
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <div>
          <h2 className={`${t.sectionHeadline} text-foreground`}>
            Get in touch
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Have a question or want to discuss a project? Our team is here to help. Reach out through
            any of these channels, and we'll respond within 24 hours.
          </p>

          <div className="mt-5 grid gap-5">
            {offices.map((office) => (
              <div
                key={office.country}
                className="flex flex-col rounded-2xl border border-white/10 bg-surface-dark text-on-surface-dark p-6 shadow-card"
              >
                <div className="text-base font-semibold text-primary">
                  {office.country} {office.flag}
                </div>
                <div className="mt-3 text-lg font-display font-semibold text-on-surface-dark">
                  {office.city}
                </div>
                <p className="mt-2 text-base text-on-surface-dark/70 leading-relaxed">
                  {office.address}
                </p>

                <div className="mt-auto pt-5 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                    <a
                      href={office.phoneHref}
                      className="text-base font-medium text-on-surface-dark hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-base font-medium text-on-surface-dark hover:text-primary transition-colors break-all"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const offices = [
  {
    country: "India",
    flag: "🇮🇳",
    city: "Chennai",
    address:
      "Inwrks Spaces, C' wing, 1st floor, 29 Sree Narayana Complex, Sarathy Nagar, Velachery, Chennai, Tamil Nadu 600042",
    phone: "+91 98849 19111",
    phoneHref: "tel:+919884919111",
    email: "info@trinos.ai",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    city: "New Jersey",
    address: "1104 Maple Hill Drive, Woodbridge, New Jersey 07095",
    phone: "+1 732 734 1160",
    phoneHref: "tel:+17327341160",
    email: "info@trinos.ai",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    city: "Beaumont",
    address: "214 - 6502 60 Ave, Beaumont, Alberta T4X 2A7",
    phone: "+1 825 733 6948",
    phoneHref: "tel:+18257336948",
    email: "info@trinos.ai",
  },
];

export default ContactSection;
