"use client";
import React from "react";
import { Radar, IconContainer } from "./ui/radar-effect";
import { 
  Share2, 
  Video, 
  TrendingUp, 
  BarChart3, 
  Megaphone, 
  Crosshair 
} from "lucide-react";

export default function RadarServices() {
  return (
    <div className="flex w-full items-center justify-center bg-transparent py-10 relative">
      <div className="relative flex h-[500px] w-full max-w-3xl flex-col items-center justify-center space-y-12 overflow-hidden px-4">
        {/* Row 1 */}
        <div className="mx-auto w-full max-w-3xl relative z-50">
          <div className="flex flex-wrap w-full items-center justify-center gap-4 sm:gap-6 md:gap-0 md:justify-between">
            <IconContainer
              text="Social Media Mgmt"
              delay={0.2}
              icon={<Share2 className="h-6 w-6 text-primary" />}
            />
            <IconContainer
              delay={0.4}
              text="Ad Campaigns"
              icon={<Megaphone className="h-6 w-6 text-primary" />}
            />
            <IconContainer
              text="Lead Generation"
              delay={0.3}
              icon={<Crosshair className="h-6 w-6 text-primary" />}
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="mx-auto w-full max-w-md relative z-50">
          <div className="flex flex-wrap w-full items-center justify-center gap-4 sm:gap-6 md:gap-0 md:justify-between">
            <IconContainer
              text="Analytics & ROI"
              delay={0.5}
              icon={<BarChart3 className="h-6 w-6 text-primary" />}
            />
            <IconContainer
              text="Brand Identity"
              delay={0.8}
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="mx-auto w-full max-w-sm relative z-50">
          <div className="flex flex-wrap w-full items-center justify-center gap-4 sm:gap-6 md:justify-center md:gap-0">
            <IconContainer
              delay={0.6}
              text="Reel Editing"
              icon={<Video className="h-6 w-6 text-primary" />}
            />
          </div>
        </div>

        <Radar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Fading bottom line (optional touch from original demo) */}
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-glass-stroke to-transparent" />
      </div>
    </div>
  );
}
