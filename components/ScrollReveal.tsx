"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  animateOnLoad?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
  animateOnLoad = false,
}: ScrollRevealProps) {
  const getVariants = () => {
    switch(direction) {
      case "up": return { hidden: { opacity: 0, y: 50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } };
      case "down": return { hidden: { opacity: 0, y: -50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } };
      case "left": return { hidden: { opacity: 0, x: -50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1 } };
      case "right": return { hidden: { opacity: 0, x: 50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1 } };
      case "none": return { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
      default: return { hidden: { opacity: 0, y: 50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } };
    }
  };

  const currentVariants = getVariants();

  return (
    <motion.div
      variants={currentVariants}
      initial="hidden"
      {...(animateOnLoad ? { animate: "visible" } : { whileInView: "visible" })}
      viewport={{ once: true, amount: threshold, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
