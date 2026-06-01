import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminNav from "./AdminNav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  
  if (session?.value !== "authenticated") {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md overflow-x-hidden relative">
      
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-glass-stroke bg-background/80 backdrop-blur-xl flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">YoBro</h1>
          <p className="text-xs text-secondary/60 uppercase tracking-widest font-label-bold mt-1">Admin Console</p>
        </div>
        
        <AdminNav />
        
        <div className="mt-auto p-2">
          <a href="/" target="_blank" className="w-full py-4 bg-surface-variant hover:bg-surface-variant/80 text-crisp-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
            <span className="material-symbols-outlined">public</span>
            <span>View Live Site</span>
          </a>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-background/80 backdrop-blur-md border-b border-glass-stroke flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-4 bg-surface-container-low px-4 py-1.5 rounded-full border border-glass-stroke w-96 transition-colors focus-within:border-primary/50 focus-within:bg-surface-container">
          <span className="material-symbols-outlined text-secondary text-lg">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface outline-none placeholder:text-secondary/50" 
            placeholder="Search projects, clients, or tags..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="relative text-secondary hover:text-primary transition-all active:scale-90">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </button>
            <button className="text-secondary hover:text-primary transition-all active:scale-90">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="h-8 w-[1px] bg-glass-stroke"></div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-label-bold text-crisp-white">Admin</p>
              <p className="text-[10px] text-secondary">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-glass-stroke group-hover:border-primary transition-all bg-surface-variant flex items-center justify-center overflow-hidden">
               <span className="material-symbols-outlined text-crisp-white">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
