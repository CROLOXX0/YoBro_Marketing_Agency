import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminNav from "./AdminNav";
import AdminHeader from "./AdminHeader";

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
      <AdminHeader />

      {/* Main Canvas */}
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
