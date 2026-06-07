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
    <div className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-glass-stroke shadow-none">
      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center px-margin-mobile md:px-section-padding py-4 max-w-container-max mx-auto w-full gap-6 lg:gap-12">
        <a href="/" className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter whitespace-nowrap hover:text-primary-fixed transition-colors">
          YoBro
        </a>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          <a className="px-5 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-on-surface-variant hover:bg-white/10 hover:text-crisp-white transition-all duration-300 backdrop-blur-md whitespace-nowrap" href="/#services">Services</a>
          <a className="px-5 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-on-surface-variant hover:bg-white/10 hover:text-crisp-white transition-all duration-300 backdrop-blur-md whitespace-nowrap" href="/pricing">Pricing</a>
          <a className="px-5 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-on-surface-variant hover:bg-white/10 hover:text-crisp-white transition-all duration-300 backdrop-blur-md whitespace-nowrap" href="/portfolio">Portfolio</a>
          <a className="px-5 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-on-surface-variant hover:bg-white/10 hover:text-crisp-white transition-all duration-300 backdrop-blur-md whitespace-nowrap" href="/faq">FAQ</a>
          <RedeemButton />
        </nav>
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <ThemeToggle />
          <a href="/pricing" className="px-6 py-2 border border-glass-stroke bg-white/5 rounded-full font-label-bold text-label-bold text-crisp-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md block whitespace-nowrap">View Packages</a>
          <a href="https://wa.me/918510062139" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary-container rounded-full font-label-bold text-label-bold text-pure-black btn-glow transition-all duration-300 hover:scale-105 block whitespace-nowrap">Book Free Consultation</a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden justify-between items-center px-margin-mobile py-4 w-full relative">
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
            className="md:hidden absolute top-full left-0 w-full bg-surface-container-high/95 backdrop-blur-3xl border-b border-glass-stroke p-6 flex flex-col gap-6 shadow-2xl h-[calc(100vh-70px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <a className="font-headline-md text-headline-md text-crisp-white hover:text-primary transition-colors py-2" href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
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
    </div>
  );
}
