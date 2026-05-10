import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionWrapper({
  id,
  children,
  className
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("container py-20 md:py-28", className)}>
      {children}
    </section>
  );
}
