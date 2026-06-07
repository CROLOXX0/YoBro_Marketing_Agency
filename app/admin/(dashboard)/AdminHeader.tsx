"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-background/80 backdrop-blur-md border-b border-glass-stroke flex items-center justify-between px-8 z-40">
      <div className="flex items-center gap-4 bg-surface-container-low px-4 py-1.5 rounded-full border border-glass-stroke w-96 transition-colors focus-within:border-primary/50 focus-within:bg-surface-container">
        <span className="material-symbols-outlined text-secondary text-lg">search</span>
        <input 
          className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface outline-none placeholder:text-secondary/50" 
          placeholder="Search projects, clients, or tags..." 
          type="text"
        />
      </div>
      <div className="flex items-center gap-6 relative">
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => { setShowNotifications(!showNotifications); setShowProfileMenu(false); }}
              className="relative text-secondary hover:text-primary transition-all active:scale-90"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </button>
            {showNotifications && (
              <div className="absolute top-10 right-0 w-64 bg-surface-container-low border border-glass-stroke rounded-xl shadow-lg p-4 z-50 animate-in fade-in slide-in-from-top-2">
                <h3 className="text-sm font-bold text-crisp-white mb-2">Notifications</h3>
                <p className="text-xs text-secondary text-center py-4">No new notifications</p>
              </div>
            )}
          </div>
          <button className="text-secondary hover:text-primary transition-all active:scale-90" onClick={() => alert('Settings module coming soon!')}>
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <div className="h-8 w-[1px] bg-glass-stroke"></div>
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifications(false); }}
          >
            <div className="text-right hidden sm:block">
              <p className="text-xs font-label-bold text-crisp-white">Admin</p>
              <p className="text-[10px] text-secondary">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-glass-stroke group-hover:border-primary transition-all bg-surface-variant flex items-center justify-center overflow-hidden">
               <span className="material-symbols-outlined text-crisp-white">person</span>
            </div>
          </div>
          
          {showProfileMenu && (
            <div className="absolute top-14 right-0 w-48 bg-surface-container-low border border-glass-stroke rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2">
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error/10 flex items-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
