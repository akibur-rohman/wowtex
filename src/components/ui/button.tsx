"use client";

import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue",
  {
    variants: {
      variant: {
        primary: "bg-accentBlue text-bg shadow-glowBlue hover:shadow-[0_0_35px_rgba(0,191,255,0.45)] hover:-translate-y-0.5",
        secondary: "glass text-textPrimary hover:border-accentGreen hover:shadow-glowGreen"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

type Props = VariantProps<typeof buttonVariants> & {
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, children, className, variant, ...props }: Props) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant }), className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
