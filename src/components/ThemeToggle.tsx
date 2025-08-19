"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-[var(--accent)]" />
      ) : (
        <Moon className="h-5 w-5 text-[var(--accent-2)]" />
      )}
    </button>
  );
}

