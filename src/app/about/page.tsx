import { Metadata } from "next";
import Image from "next/image";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { team, timeline } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: "Building tomorrow's digital products."
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper>
        <AnimatedHeading title="Building tomorrow's digital products." subtitle="We blend strategy, design, and code into premium growth engines." />
      </SectionWrapper>
      <SectionWrapper className="grid gap-5 md:grid-cols-2">
        {timeline.map((item) => (
          <Card key={item.year}>
            <p className="text-accentBlue">{item.year}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-textSecondary">{item.text}</p>
          </Card>
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <AnimatedHeading title="Our Team" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="text-center hover:-translate-y-1">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border border-white/20">
                <Image src={member.image} alt={`${member.name} avatar`} fill className="object-cover" />
              </div>
              <p className="mt-4 font-bold">{member.name}</p>
              <p className="text-sm text-textSecondary">{member.role}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
