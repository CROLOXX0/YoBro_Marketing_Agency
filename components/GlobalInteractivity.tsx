"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalInteractivity() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll Reveal Observer
    let observer: IntersectionObserver | null = null;
    if (!prefersReducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              if (observer) observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      document.querySelectorAll(".reveal").forEach((el) => {
        // Reset active class when route changes so it animates again if needed
        // el.classList.remove("active");
        if (observer) observer.observe(el);
      });
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
    }

    // Glass Card Mouse Tracking Glow
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const cards = document.querySelectorAll(".glass-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove as EventListener);
    });

    return () => {
      if (observer) observer.disconnect();
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove as EventListener);
      });
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
