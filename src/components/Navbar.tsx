"use client";

import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="glass backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="container flex items-center justify-between h-14">
          <Link href="#about" className="font-semibold tracking-wide">
            Awais<span className="text-[var(--accent)]">.dev</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--foreground)] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            >
              <ArrowDownToLine className="h-4 w-4" /> Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}

