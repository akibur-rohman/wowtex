"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <motion.div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accentBlue/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accentGreen/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -35, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}
