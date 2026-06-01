"use client";

import React from "react";
import { useAppContext } from "./AppContext";

export default function RedeemButton() {
  const { setIsRedeemModalOpen, isLoggedIn, setIsLoggedIn, setIsDiscountActive } = useAppContext();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setIsDiscountActive(false); // Remove discount on logout
  };

  if (isLoggedIn) {
    return (
      <button
        onClick={handleLogout}
        className="px-6 py-2 border border-red-500/30 bg-red-500/10 rounded-full font-label-bold text-label-bold text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300 backdrop-blur-md"
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsRedeemModalOpen(true);
      }}
      className="px-6 py-2 border border-primary-container/30 bg-primary-container/10 rounded-full font-label-bold text-label-bold text-primary hover:bg-primary-container/20 hover:border-primary-container/50 transition-all duration-300 backdrop-blur-md"
    >
      Login
    </button>
  );
}
