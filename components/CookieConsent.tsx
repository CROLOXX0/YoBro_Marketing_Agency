"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("yobro_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("yobro_cookie_consent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("yobro_cookie_consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-sm z-[100] bg-surface-container/95 backdrop-blur-xl border border-glass-stroke p-6 rounded-2xl shadow-2xl"
        >
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary-container/20 rounded-full text-primary-fixed">
              <Cookie size={24} />
            </div>
            <div>
              <h3 className="font-label-bold text-label-bold text-on-surface mb-1">
                We use cookies
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our use of cookies.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="flex-1 py-2.5 px-4 rounded-full border border-glass-stroke text-on-surface hover:bg-surface-container-highest transition-colors font-label-bold text-sm"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 py-2.5 px-4 rounded-full bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim transition-colors font-label-bold text-sm shadow-[0_0_20px_rgba(var(--primary-fixed),0.3)]"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
