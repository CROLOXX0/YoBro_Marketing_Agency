"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalInteractivity() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll Reveal Observer for fade-in-up
    let observer: IntersectionObserver | null = null;
    if (!prefersReducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              if (observer) observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px",
        }
      );

      document.querySelectorAll(".fade-in-up").forEach((el) => {
        if (observer) observer.observe(el);
      });
    } else {
      document.querySelectorAll(".fade-in-up").forEach((el) => el.classList.add("visible"));
    }

    // Magnetic Buttons
    const handleMagneticMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };
    
    const handleMagneticLeave = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transform = 'translate(0px, 0px)';
    };

    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    magneticBtns.forEach((btn) => {
      btn.addEventListener("mousemove", handleMagneticMove as EventListener);
      btn.addEventListener("mouseleave", handleMagneticLeave as EventListener);
    });

    // Ambient Glow
    const handleAmbientGlow = (e: MouseEvent) => {
      const ambientGlow = document.getElementById('ambientGlow');
      if (ambientGlow) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        ambientGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(173,198,255,0.05) 0%, transparent 40%)`;
      }
    };
    document.addEventListener('mousemove', handleAmbientGlow);

    return () => {
      if (observer) observer.disconnect();
      magneticBtns.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMagneticMove as EventListener);
        btn.removeEventListener("mouseleave", handleMagneticLeave as EventListener);
      });
      document.removeEventListener('mousemove', handleAmbientGlow);
    };
  }, [pathname]);

  return <div className="ambient-glow" id="ambientGlow"></div>;
}
