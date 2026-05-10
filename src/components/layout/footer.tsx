import Link from "next/link";
import { Linkedin, Twitter, Dribbble } from "lucide-react";
import { navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary/40">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-bold">Wow Tex</p>
          <p className="mt-3 text-sm text-textSecondary">Premium digital experiences for ambitious brands.</p>
        </div>
        <div>
          <p className="mb-3 font-semibold">Quick Links</p>
          <ul className="space-y-2 text-sm text-textSecondary">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold">Newsletter</p>
          <input
            className="glass w-full rounded-xl px-4 py-2 text-sm outline-none focus:border-accentBlue"
            placeholder="Enter your email"
            aria-label="Email"
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Social</p>
          <div className="flex items-center gap-3 text-textSecondary">
            <Linkedin />
            <Twitter />
            <Dribbble />
          </div>
        </div>
      </div>
    </footer>
  );
}
