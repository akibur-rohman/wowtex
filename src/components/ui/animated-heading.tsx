"use client";

import { motion } from "framer-motion";
import { motionConfig } from "@/lib/site";

export function AnimatedHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: motionConfig.duration, ease: motionConfig.ease }}
        className="text-3xl font-extrabold leading-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle ? <p className="text-lg text-textSecondary">{subtitle}</p> : null}
    </div>
  );
}
