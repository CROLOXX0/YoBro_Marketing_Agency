"use client";

import React, { useEffect, useState } from "react";

export default function PricingAdminPage() {
  const [pricing, setPricing] = useState<any>({});
  const [settings, setSettings] = useState<any>({ code: "", percentage: 10 });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    Promise.all([
      fetch(`/api/pricing?t=${Date.now()}`, { cache: 'no-store' }).then(res => res.json()),
      fetch(`/api/settings?t=${Date.now()}`, { cache: 'no-store' }).then(res => res.json())
    ]).then(([pricingData, settingsData]) => {
      if (pricingData.pricing) setPricing(pricingData.pricing);
      if (settingsData.discountSettings) setSettings(settingsData.discountSettings);
      setLoading(false);
    });
  }, []);

  const handleChange = (key: string, field: string, value: string | number) => {
    setPricing({
      ...pricing,
      [key]: {
        ...pricing[key],
        [field]: value
      }
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await fetch('/api/pricing', {
        method: 'POST',
        body: JSON.stringify(pricing),
        headers: { 'Content-Type': 'application/json' }
      });
      
      await fetch('/api/settings', {
        method: 'POST',
        body: JSON.stringify(settings),
        headers: { 'Content-Type': 'application/json' }
      });
      
      setMessage("Saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Error saving data.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-crisp-white">Loading pricing data...</div>;

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-label-bold text-secondary/60 uppercase tracking-widest mb-2">
            <span>Admin</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span>CMS</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary active-nav-glow">Services & Pricing</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-crisp-white">Service Ecosystem</h2>
          <p className="text-secondary max-w-lg mt-2">Manage your agency's core offerings, tier structures, and dynamic pricing models across the global marketplace.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl border border-glass-stroke text-crisp-white hover:bg-crisp-white hover:text-pure-black transition-all font-label-bold"
          >
            Discard Changes
          </button>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3 rounded-xl bg-primary text-pure-black font-bold btn-glow transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-symbols-outlined">save</span>
            {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </div>

      {message && (
        <div className="bg-primary/20 border border-primary/50 text-primary px-4 py-3 rounded-xl mb-8 text-sm font-bold flex items-center gap-3">
          <span className="material-symbols-outlined">check_circle</span>
          {message}
        </div>
      )}

      <div className="grid grid-cols-12 gap-8">
        
        {/* Left Column: Global Settings & Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary relative overflow-hidden">
             <h3 className="font-headline-md text-headline-sm text-crisp-white mb-6">Discount Settings</h3>
             
             <div className="space-y-4">
               <div>
                  <label className="font-label-bold text-secondary uppercase text-[10px] tracking-widest block mb-1">Secret Code</label>
                  <input 
                    type="text" 
                    value={settings.code}
                    onChange={(e) => setSettings({...settings, code: e.target.value})}
                    className="w-full bg-surface-container-low border border-glass-stroke focus:border-primary rounded-lg px-4 py-3 text-crisp-white outline-none transition-colors"
                  />
               </div>
               <div>
                  <label className="font-label-bold text-secondary uppercase text-[10px] tracking-widest block mb-1">Discount Percentage (%)</label>
                  <input 
                    type="number" 
                    value={settings.percentage}
                    onChange={(e) => setSettings({...settings, percentage: Number(e.target.value)})}
                    className="w-full bg-surface-container-low border border-glass-stroke focus:border-primary rounded-lg px-4 py-3 text-crisp-white outline-none transition-colors"
                  />
               </div>
               <div className="pt-4 border-t border-glass-stroke">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Active</span>
                    <span className="text-[10px] italic text-secondary/60">Applied to checkout dynamically</span>
                  </div>
               </div>
             </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-headline-sm text-crisp-white mb-4">Pricing Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-lowest/50 border border-glass-stroke">
                <p className="text-[10px] text-secondary/60 uppercase font-bold mb-1">Active Tiers</p>
                <p className="text-headline-sm font-bold text-primary">{Object.keys(pricing).length}</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest/50 border border-glass-stroke">
                <p className="text-[10px] text-secondary/60 uppercase font-bold mb-1">Discount</p>
                <p className="text-headline-sm font-bold text-crisp-white">{settings.percentage}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Pricing Tiers */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="font-headline-md text-crisp-white text-2xl">Premium Pricing Tiers</h3>
              <div className="flex gap-2">
                  <span className="text-xs text-secondary/60">Currency:</span>
                  <span className="text-xs font-bold text-primary">INR (₹)</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(pricing).map((key, index) => {
                const isFeatured = index === 1; // Highlight the second package as popular

                return (
                  <div key={key} className={`glass-card p-6 rounded-2xl relative group transition-all ${isFeatured ? 'border-2 border-primary shadow-[0_0_30px_rgba(255,146,28,0.1)]' : 'border-t-2 border-t-secondary/20'}`}>
                    
                    {isFeatured && (
                      <div className="absolute top-0 right-0 bg-primary text-pure-black px-4 py-1 rounded-bl-xl font-bold text-[10px] uppercase tracking-tighter z-10">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-6">
                      <input 
                        className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 font-headline-sm text-2xl text-crisp-white w-full focus:ring-0 outline-none transition-colors" 
                        type="text" 
                        value={pricing[key].name || ""}
                        onChange={(e) => handleChange(key, 'name', e.target.value)}
                        placeholder="Package Name"
                      />
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-primary font-bold">₹</span>
                        <input 
                          className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 font-display-lg text-[32px] text-primary w-32 focus:ring-0 outline-none transition-colors" 
                          type="number" 
                          value={pricing[key].price || 0}
                          onChange={(e) => handleChange(key, 'price', parseInt(e.target.value) || 0)}
                        />
                        <span className="text-secondary text-sm">/</span>
                        <input
                           className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-sm text-secondary w-16 focus:ring-0 outline-none transition-colors" 
                           type="text"
                           value={pricing[key].period || "mo"}
                           onChange={(e) => handleChange(key, 'period', e.target.value)}
                           placeholder="mo"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-glass-stroke">
                        <label className="font-label-bold text-secondary uppercase text-[10px] tracking-widest block mb-2">Offer Tag</label>
                        <div className="flex items-center gap-2">
                          <input 
                            className={`${isFeatured ? 'bg-primary/20 border-primary/30 text-primary' : 'bg-surface-container-low border-glass-stroke text-secondary focus:border-primary'} border rounded px-2 py-1 text-xs font-bold w-24 outline-none`} 
                            type="text" 
                            placeholder="Tag"
                            value={pricing[key].offerTag || ""}
                            onChange={(e) => handleChange(key, 'offerTag', e.target.value)}
                          />
                          <span className={`text-[10px] italic ${isFeatured ? 'text-primary/60' : 'text-secondary/40'}`}>
                            {isFeatured ? 'Limited time seasonal' : 'Visible on checkout'}
                          </span>
                        </div>
                    </div>
                  </div>
                );
              })}
           </div>
        </div>
      </div>
    </div>
  );
}
