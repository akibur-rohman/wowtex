import { Metadata } from "next";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { pricing, services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Website, app, and graphic design services engineered for growth."
};

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper>
        <AnimatedHeading
          title="Services engineered for speed, scale, and delight."
          subtitle="From strategy to launch, every deliverable is crafted to perform."
        />
      </SectionWrapper>

      <SectionWrapper className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-3 text-textSecondary">{service.description}</p>
            <div className="mt-6 h-40 rounded-xl border border-white/10 bg-gradient-to-br from-accentBlue/20 to-accentGreen/10" />
          </Card>
        ))}
      </SectionWrapper>

      <SectionWrapper>
        <AnimatedHeading title="Pricing that scales with ambition" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <Card key={plan.tier} className="hover:-translate-y-1 hover:border-accentBlue/70">
              <p className="text-sm uppercase tracking-widest text-accentGreen">{plan.tier}</p>
              <p className="mt-3 text-4xl font-extrabold">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-textSecondary">
                {plan.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
