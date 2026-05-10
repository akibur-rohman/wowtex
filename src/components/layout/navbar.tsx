"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300",
          scrolled ? "bg-secondary/60 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <Link href="/" className="relative h-9 w-32">
          <Image src="/logo.svg" alt="Wow Tex logo" fill className="object-contain object-left" priority />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-textSecondary transition hover:text-textPrimary">
              {item.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="glass mt-3 mx-auto flex max-w-6xl flex-col gap-5 rounded-3xl p-6 md:hidden">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg">
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
