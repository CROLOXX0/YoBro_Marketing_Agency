"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AppContextType {
  isDiscountActive: boolean;
  setIsDiscountActive: (active: boolean) => void;
  isRedeemModalOpen: boolean;
  setIsRedeemModalOpen: (open: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (active: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDiscountActive, setIsDiscountActive] = useState(false);
  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const savedDiscount = localStorage.getItem("yobro_discount_active");
    if (savedDiscount === "true") {
      setIsDiscountActive(true);
    }
    
    const savedLogin = localStorage.getItem("yobro_logged_in");
    if (savedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSetDiscount = (active: boolean) => {
    setIsDiscountActive(active);
    localStorage.setItem("yobro_discount_active", active ? "true" : "false");
  };

  const handleSetLogin = (active: boolean) => {
    setIsLoggedIn(active);
    localStorage.setItem("yobro_logged_in", active ? "true" : "false");
  };

  return (
    <AppContext.Provider
      value={{
        isDiscountActive,
        setIsDiscountActive: handleSetDiscount,
        isRedeemModalOpen,
        setIsRedeemModalOpen,
        isLoggedIn,
        setIsLoggedIn: handleSetLogin
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
