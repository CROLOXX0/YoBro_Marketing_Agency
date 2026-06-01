"use client";

import React from "react";
import { AppProvider } from "./AppContext";
import RedeemModal from "./RedeemModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      {children}
      <RedeemModal />
    </AppProvider>
  );
}
