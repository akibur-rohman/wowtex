"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { motionConfig } from "@/lib/site";

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: motionConfig.duration, ease: motionConfig.ease, delay }}
    >
      {children}
    </motion.div>
  );
}
