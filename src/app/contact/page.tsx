"use client";

import { useState } from "react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [done, setDone] = useState(false);

  return (
    <SectionWrapper>
      <AnimatedHeading title="Let's build your next breakthrough." subtitle="Tell us what you need and we'll propose a tailored roadmap." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            {["Name", "Email", "Company", "Service", "Message"].map((field) => (
              <label key={field} className="block">
                <span className="mb-2 block text-sm text-textSecondary">{field}</span>
                {field === "Message" ? (
                  <textarea className="glass w-full rounded-xl p-3 outline-none focus:border-accentBlue" rows={4} required />
                ) : (
                  <input className="glass w-full rounded-xl p-3 outline-none focus:border-accentBlue" required />
                )}
              </label>
            ))}
            <Button className="w-full">Send Message</Button>
          </form>
          {done ? <p className="mt-4 animate-pulse text-sm text-accentGreen">Message sent successfully. We will contact you soon.</p> : null}
        </Card>

        <Card className="space-y-4">
          <p className="text-lg font-semibold">Contact Information</p>
          <p className="text-textSecondary">Address: Dhaka, Bangladesh</p>
          <p className="text-textSecondary">Email: hello@wowtex.co</p>
          <p className="text-textSecondary">Phone: +880 1XXX-XXXXXX</p>
          <div className="h-72 rounded-2xl border border-white/10 bg-gradient-to-br from-accentBlue/20 to-accentGreen/10" />
        </Card>
      </div>
    </SectionWrapper>
  );
}
