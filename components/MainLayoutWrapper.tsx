"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <SiteHeader />
      <main className={`flex-grow ${isAdmin ? "" : "pt-24"}`}>
        {children}
      </main>
    </>
  );
}
