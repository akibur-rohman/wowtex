"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((v) => (v >= value ? value : v + Math.ceil(value / 30)));
    }, 35);
    return () => clearInterval(id);
  }, [value]);

  return (
    <Card className="text-center">
      <p className="text-3xl font-bold text-gradient">{Math.min(count, value)}{suffix}</p>
      <p className="mt-2 text-sm text-textSecondary">{label}</p>
    </Card>
  );
}

export function PortfolioCard({
  title,
  category,
  image,
  onOpen
}: {
  title: string;
  category: string;
  image: string;
  onOpen?: () => void;
}) {
  return (
    <button onClick={onOpen} className="group relative h-72 w-full overflow-hidden rounded-2xl border text-left">
      <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/60" />
      <div className="absolute bottom-0 p-5">
        <p className="text-xs uppercase tracking-widest text-accentGreen">{category}</p>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </button>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <Card>
      <p className="text-textSecondary">&quot;{quote}&quot;</p>
      <p className="mt-5 font-semibold">{name}</p>
      <p className="text-xs text-textSecondary">{role}</p>
    </Card>
  );
}

export function CTA() {
  return (
    <Card className="relative overflow-hidden border-accentBlue/30 bg-gradient-to-r from-accentBlue/20 to-accentGreen/10 p-10 text-center">
      <h3 className="text-3xl font-extrabold">Let&apos;s Build Something Extraordinary</h3>
      <p className="mt-3 text-textSecondary">Book a free strategy call and transform your digital presence.</p>
      <Button href="/contact" className="mt-6">
        Start a Project
      </Button>
    </Card>
  );
}

export function Modal({
  open,
  onClose,
  title,
  body
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  body: string;
}) {
  const classes = useMemo(() => cn("fixed inset-0 z-[70] flex items-center justify-center p-4"), []);
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className={classes} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="absolute inset-0 bg-black/75" onClick={onClose} aria-label="Close modal" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="glass relative z-10 max-w-xl rounded-2xl p-6"
          >
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="mt-3 text-textSecondary">{body}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
