"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  let initial = { opacity: 0, scale: 0.95, x: 0, y: 0 };
  if (direction === "up") initial.y = 50;
  else if (direction === "down") initial.y = -50;
  else if (direction === "left") initial.x = -50;
  else if (direction === "right") initial.x = 50;

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
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
