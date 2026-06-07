"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: "dashboard" },
    { name: "Leads", href: "/admin/leads", icon: "group_add" },
    { name: "Pricing CMS", href: "/admin/pricing", icon: "sell" },
    { name: "Portfolio CMS", href: "/admin/portfolio", icon: "work" },
    { name: "Custom Pages CMS", href: "/admin/pages", icon: "article" },
    { name: "Blogs CMS", href: "/admin/blogs", icon: "book" },
  ];

  return (
    <nav className="flex-1 space-y-2 mt-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "text-primary font-bold border-r-2 border-primary bg-surface-variant/20"
                : "text-secondary hover:text-crisp-white hover:bg-surface-variant/30"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-body-md">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
