"use client";

import React, { useEffect, useState } from "react";

interface Lead {
  id: string;
  name: string;
  email: string;
  contact: string;
  code: string;
  createdAt: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads", { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.leads) setLeads(data.leads.reverse()); // Show newest first
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['Name', 'Email', 'Contact', 'Discount Code', 'Date Received'];
    
    const rows = leads.map(lead => [
      `"${lead.name.replace(/"/g, '""')}"`,
      `"${lead.email.replace(/"/g, '""')}"`,
      `"${lead.contact.replace(/"/g, '""')}"`,
      `"${(lead.code || 'N/A').replace(/"/g, '""')}"`,
      `"${new Date(lead.createdAt).toLocaleString().replace(/"/g, '""')}"`
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `leads_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-label-bold text-secondary/60 uppercase tracking-widest mb-2">
            <span>Admin</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary active-nav-glow">Leads</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-crisp-white">Lead Generation</h2>
          <p className="text-secondary max-w-lg mt-2">Monitor inbound prospects, review inquiry details, and track conversions from marketing campaigns.</p>
        </div>
        <div className="flex gap-4">
           <button 
             onClick={handleExportCSV}
             disabled={leads.length === 0 || loading}
             className="px-6 py-3 rounded-xl bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30 transition-all font-label-bold flex items-center gap-2 disabled:opacity-50"
           >
             <span className="material-symbols-outlined">download</span>
             Export CSV
           </button>
           <button 
             onClick={() => window.location.reload()}
             className="px-6 py-3 rounded-xl border border-glass-stroke text-crisp-white hover:bg-crisp-white hover:text-pure-black transition-all font-label-bold flex items-center gap-2"
           >
             <span className="material-symbols-outlined">refresh</span>
             Refresh Data
           </button>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden border-t-4 border-t-primary">
        <div className="p-6 border-b border-glass-stroke flex items-center justify-between bg-surface-container-low/50">
           <h3 className="font-headline-sm text-crisp-white">Recent Inquiries</h3>
           <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
             {leads.length} Total Leads
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-glass-stroke text-secondary font-label-bold text-[10px] uppercase tracking-widest bg-surface-container-lowest/30">
                <th className="px-6 py-4">Prospect Info</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Discount Code</th>
                <th className="px-6 py-4">Date Received</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center px-6 py-12">
                    <div className="flex items-center justify-center gap-3 text-primary">
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                      <span className="font-bold">Loading leads...</span>
                    </div>
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center px-6 py-12">
                    <div className="flex flex-col items-center justify-center gap-2 text-secondary">
                      <span className="material-symbols-outlined text-4xl opacity-50">inbox</span>
                      <span className="font-bold">No leads found yet.</span>
                    </div>
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-glass-stroke hover:bg-surface-variant/30 transition-colors text-crisp-white font-body-md group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-bold text-crisp-white group-hover:text-primary transition-colors">{lead.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">{lead.email}</div>
                      <div className="text-xs text-secondary mt-1">{lead.contact}</div>
                    </td>
                    <td className="px-6 py-4">
                      {lead.code ? (
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/30 inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]">sell</span>
                          {lead.code}
                        </span>
                      ) : (
                        <span className="text-secondary/50 text-xs italic">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-secondary text-sm">
                      {new Date(lead.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                      <div className="text-xs text-secondary/50 mt-1">
                        {new Date(lead.createdAt).toLocaleTimeString(undefined, {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <button className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/10 transition-colors inline-flex items-center justify-center">
                         <span className="material-symbols-outlined text-sm">mail</span>
                       </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
