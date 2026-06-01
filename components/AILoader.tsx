"use client";

import { useEffect, useState } from "react";
import "./loader.css";

export const AILoader = () => {
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5s
    const timer = setTimeout(() => setHiding(true), 1500);
    // Remove from DOM after 2s
    const timer2 = setTimeout(() => setLoading(false), 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[99999] bg-pure-black flex flex-col items-center justify-center transition-opacity duration-500 ${hiding ? "opacity-0" : "opacity-100"}`}>
      <div className="loader-wrapper relative flex items-center justify-center">
        <div className="absolute flex gap-[2px] font-headline-md text-xl font-bold tracking-[0.2em] text-crisp-white z-10">
          <span className="loader-letter" style={{ animationDelay: "0s" }}>Y</span>
          <span className="loader-letter" style={{ animationDelay: "0.1s" }}>O</span>
          <span className="loader-letter" style={{ animationDelay: "0.2s" }}>B</span>
          <span className="loader-letter" style={{ animationDelay: "0.3s" }}>R</span>
          <span className="loader-letter" style={{ animationDelay: "0.4s" }}>O</span>
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
};
