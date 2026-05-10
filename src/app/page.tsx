"use client";

import { useMemo, useState } from "react";
import { Smartphone, Globe, Palette } from "lucide-react";
import Image from "next/image";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { BackgroundEffects } from "@/components/effects/background-effects";
import { CTA, Counter, Modal, PortfolioCard, TestimonialCard } from "@/components/sections/shared";
import { portfolioItems, services, stats, testimonials } from "@/data/content";

const iconMap = { Globe, Smartphone, Palette };

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const project = useMemo(() => portfolioItems.find((p) => p.id === selectedProject), [selectedProject]);

  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-96px)] overflow-hidden">
        <BackgroundEffects />
        <div className="container relative grid min-h-[calc(100vh-96px)] items-center gap-16 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-accentGreen">Wow Tex Studio</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              We Build Digital Experiences That Define The Future.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-textSecondary">
              Websites, Apps &amp; Designs engineered for growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="/contact">Start a Project</MagneticButton>
              <Button variant="secondary" href="/portfolio">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-4">
            {[
              { label: "Laptop Mockup", image: "/device-laptop.svg" },
              { label: "Phone Mockup", image: "/device-phone.svg" },
              { label: "Tablet Mockup", image: "/device-tablet.svg" }
            ].map((item) => (
              <Card key={item.label} className="animate-float p-4 text-center [animation-delay:0.2s]">
                <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.label} fill className="object-cover" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper id="services">
        <AnimatedHeading title="Digital Services, Elevated" subtitle="Everything you need to ship premium digital products." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <Card className="group h-full hover:-translate-y-1 hover:border-accentBlue/60">
                  <Icon className="text-accentBlue transition group-hover:rotate-6 group-hover:text-accentGreen" />
                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm text-textSecondary">{service.description}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper id="stats">
        <AnimatedHeading title="Why Wow Tex" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <Counter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="featured-work">
        <AnimatedHeading title="Featured Work" subtitle="Recent projects designed for growth and built for scale." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              onOpen={() => setSelectedProject(item.id)}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="testimonials">
        <AnimatedHeading title="What Clients Say" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CTA />
      </SectionWrapper>

      <Modal
        open={Boolean(project)}
        onClose={() => setSelectedProject(null)}
        title={project?.title ?? ""}
        body={`Category: ${project?.category ?? ""}. Tools: ${(project?.tools ?? []).join(", ")}.`}
      />
    </>
  );
}
