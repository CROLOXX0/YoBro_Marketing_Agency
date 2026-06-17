"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import RedeemButton from "./RedeemButton";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1400px] z-50 bg-surface/90 backdrop-blur-xl border border-glass-stroke rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
    >
      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center px-4 lg:px-6 py-3 w-full gap-4 lg:gap-8">
        <motion.a 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          href="/" className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter whitespace-nowrap hover:text-primary-fixed transition-colors"
        >
          YoBro
        </motion.a>
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 flex-1 justify-center">
          {[
            { label: "Services", href: "/#services" },
            { label: "Pricing", href: "/pricing" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Blog", href: "/blog" },
            { label: "FAQ", href: "/faq" }
          ].map((item, i) => (
            <motion.a 
              key={item.label}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 + (i * 0.05) }}
              className="px-3 lg:px-4 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-on-surface-variant hover:bg-white/10 hover:text-crisp-white transition-all duration-300 backdrop-blur-md whitespace-nowrap" 
              href={item.href}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.7 }}>
            <RedeemButton />
          </motion.div>
        </nav>
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden lg:flex items-center gap-3 lg:gap-4 flex-shrink-0"
        >
          <ThemeToggle />
          <a href="/pricing" className="px-4 lg:px-6 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-crisp-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md block whitespace-nowrap">View Packages</a>
          <a href="https://wa.me/918510062139" target="_blank" rel="noopener noreferrer" className="px-4 lg:px-6 py-2 bg-primary-container rounded-full font-label-bold text-label-bold text-pure-black btn-glow transition-all duration-300 hover:scale-105 block whitespace-nowrap">Book Free Consultation</a>
        </motion.div>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden justify-between items-center px-4 py-3 w-full relative">
        {/* Left Side (Hamburger) */}
        <div className="flex-1 flex justify-start">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-crisp-white p-2 -ml-2 z-50 relative focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center (Logo) */}
        <a href="/" className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter whitespace-nowrap z-50 relative hover:text-primary-fixed transition-colors">
          YoBro
        </a>

        {/* Right Side (Spacer for centering) */}
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[calc(100%+1rem)] left-0 w-full bg-surface-container-high/95 backdrop-blur-3xl border border-glass-stroke rounded-2xl p-6 flex flex-col gap-6 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            </nav>
            <div className="h-px w-full bg-glass-stroke my-2"></div>
            <div className="flex flex-col gap-4 pb-10">
              <RedeemButton />
              <a href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-6 py-4 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-crisp-white hover:bg-white/10 transition-all duration-300">View Packages</a>
              <a href="https://wa.me/918510062139" onClick={() => setIsMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="w-full text-center px-6 py-4 bg-primary-container rounded-full font-label-bold text-label-bold text-pure-black btn-glow transition-all duration-300">Book Free Consultation</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
