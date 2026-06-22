"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm transition-all duration-300"
      id="topNav"
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-on-surface"
          href="/"
        >
          YoBro Studio
        </Link>
        <div className="hidden md:flex items-center gap-gutter">
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hover:opacity-80 transition-all duration-300 hover:scale-[1.02]"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hover:opacity-80 transition-all duration-300 hover:scale-[1.02]"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hover:opacity-80 transition-all duration-300 hover:scale-[1.02]"
            href="#process"
          >
            Process
          </Link>
          <Link
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hover:opacity-80 transition-all duration-300 hover:scale-[1.02]"
            href="#faq"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant/50"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined" data-icon="dark_mode">
              {mounted && theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <Link
            className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full magnetic-btn hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            href="#contact"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
