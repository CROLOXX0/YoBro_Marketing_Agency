"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [leadsCount, setLeadsCount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(10);

  useEffect(() => {
    fetch("/api/leads", { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) setLeadsCount(data.leads.length);
      });
      
    fetch(`/api/settings?t=${Date.now()}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.discountSettings) setDiscountPercent(data.discountSettings.percentage);
      });
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-label-bold text-secondary/60 uppercase tracking-widest mb-2">
            <span>Admin</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary active-nav-glow">Dashboard</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-crisp-white">Command Center</h2>
          <p className="text-secondary max-w-lg mt-2">Overview of agency performance, recent leads, and quick access to content management.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href="/admin/leads" className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-primary">group</span>
          </div>
          <div className="relative z-10">
             <h3 className="font-label-bold text-secondary uppercase text-[10px] tracking-widest mb-2">Total Leads Generated</h3>
             <p className="font-display-lg text-5xl font-extrabold text-crisp-white group-hover:text-primary transition-colors">{leadsCount}</p>
          </div>
        </Link>

        <Link href="/admin/pricing" className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-primary">sell</span>
          </div>
          <div className="relative z-10">
             <h3 className="font-label-bold text-secondary uppercase text-[10px] tracking-widest mb-2">Active Packages</h3>
             <p className="font-display-lg text-5xl font-extrabold text-crisp-white group-hover:text-primary transition-colors">4</p>
          </div>
        </Link>

        <Link href="/admin/pricing" className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer border-l-4 border-l-primary">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-primary">loyalty</span>
          </div>
          <div className="relative z-10">
             <h3 className="font-label-bold text-secondary uppercase text-[10px] tracking-widest mb-2">Global Discount</h3>
             <p className="font-display-lg text-5xl font-extrabold text-primary">{discountPercent}%</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="glass-card rounded-2xl p-8 border-t-2 border-t-secondary/20">
            <h3 className="font-headline-md text-xl text-crisp-white mb-4">Quick Actions</h3>
            <div className="space-y-4">
               <Link href="/admin/portfolio" className="w-full py-4 bg-surface-container-low hover:bg-surface-variant/50 border border-glass-stroke rounded-xl flex items-center justify-between px-6 transition-all group">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                     <span className="material-symbols-outlined">work</span>
                   </div>
                   <span className="font-bold text-crisp-white">Add New Case Study</span>
                 </div>
                 <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">arrow_forward</span>
               </Link>

               <Link href="/admin/pricing" className="w-full py-4 bg-surface-container-low hover:bg-surface-variant/50 border border-glass-stroke rounded-xl flex items-center justify-between px-6 transition-all group">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                     <span className="material-symbols-outlined">edit</span>
                   </div>
                   <span className="font-bold text-crisp-white">Update Package Prices</span>
                 </div>
                 <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">arrow_forward</span>
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
}
