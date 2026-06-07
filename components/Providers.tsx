"use client";

import React from "react";
import { AppProvider } from "./AppContext";
import RedeemModal from "./RedeemModal";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AppProvider>
        {children}
        <RedeemModal />
      </AppProvider>
    </ThemeProvider>
  );
}
