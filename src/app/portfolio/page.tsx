"use client";
import { useMemo, useState } from "react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { portfolioItems } from "@/data/content";
import { CTA, Modal, PortfolioCard } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";

const filters = ["All", "Web", "Apps", "Design"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = useMemo(
    () => portfolioItems.filter((item) => active === "All" || item.category === active),
    [active]
  );
  const project = useMemo(() => portfolioItems.find((p) => p.id === selected), [selected]);

  return (
    <>
      <SectionWrapper>
        <AnimatedHeading title="Our Portfolio" subtitle="Award-level visual storytelling, product strategy, and engineering craft." />
        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={active === filter ? "primary" : "secondary"}
              className="py-2"
              onClick={() => setActive(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              onOpen={() => setSelected(item.id)}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="overflow-x-hidden">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {portfolioItems.map((item) => (
            <div key={item.id} className="glass min-w-72 rounded-xl p-4">
              <p className="text-sm text-accentBlue">{item.category}</p>
              <p className="text-lg font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CTA />
      </SectionWrapper>

      <Modal
        open={Boolean(project)}
        onClose={() => setSelected(null)}
        title={project?.title ?? ""}
        body={`Tools used: ${(project?.tools ?? []).join(", ")}. Live link: ${project?.link ?? "#"}`}
      />
    </>
  );
}
