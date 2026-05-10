import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={cn("glass rounded-2xl p-6 transition-all duration-300", className)}>{children}</article>;
}
