"use client";

import React, { useEffect, useState } from "react";

export default function PortfolioAdminPage() {
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/portfolio', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.portfolio) setPortfolio(data.portfolio);
        setLoading(false);
      });
  }, []);

  const handleChange = (index: number, field: string, value: any) => {
    const newPortfolio = [...portfolio];
    newPortfolio[index] = { ...newPortfolio[index], [field]: value };
    setPortfolio(newPortfolio);
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newPortfolio = [...portfolio];
    newPortfolio[index].categories = value.split(',').map((s: string) => s.trim());
    setPortfolio(newPortfolio);
  };

  const handleUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMessage("Uploading file...");
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      
      if (data.success) {
        handleChange(index, 'imgSrc', data.url);
        setMessage("Upload successful!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Upload failed: " + data.error);
      }
    } catch (err) {
      setMessage("Error uploading file.");
    }
  };

  const handleAddNew = () => {
    setPortfolio([
      ...portfolio,
      {
        id: Date.now().toString(),
        title: "",
        categories: [],
        imgSrc: "",
        mediaType: "image",
        description: "",
        beforeMetric: "",
        afterMetric: "",
        afterLabel: "",
        gridSize: "small",
        height: 400
      }
    ]);
  };

  const handleDelete = (index: number) => {
    const newPortfolio = [...portfolio];
    newPortfolio.splice(index, 1);
    setPortfolio(newPortfolio);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        body: JSON.stringify(portfolio),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        setMessage("Portfolio updated successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("Error updating portfolio.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-crisp-white">Loading portfolio data...</div>;

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-label-bold text-secondary mb-4 uppercase tracking-widest">
            <span>CMS</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary active-nav-glow">Portfolio & Case Studies</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-crisp-white">Project Showcase</h2>
          <p className="text-secondary mt-2 max-w-xl">Manage your agency's best work. Update results, organize case studies for high-intent leads.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSave} 
            disabled={saving}
            className="px-6 py-3 border border-glass-stroke rounded-xl text-crisp-white font-label-bold hover:bg-crisp-white hover:text-pure-black transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-symbols-outlined">save</span>
            <span>{saving ? "Saving..." : "Save Changes"}</span>
          </button>
          <button onClick={handleAddNew} className="px-8 py-3 bg-primary text-pure-black font-bold rounded-xl flex items-center gap-2 btn-glow">
            <span className="material-symbols-outlined">add</span>
            <span>Add New Project</span>
          </button>
        </div>
      </section>

      {message && (
        <div className="bg-primary/20 border border-primary/50 text-primary px-4 py-3 rounded-xl mb-8 text-sm font-bold flex items-center gap-3">
          <span className="material-symbols-outlined">check_circle</span>
          {message}
        </div>
      )}

      {/* CMS Grid */}
      <section className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {portfolio.map((item, index) => (
          <div key={item.id} className="glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-primary/50">
            <div className="relative h-56 overflow-hidden bg-surface-container-low flex items-center justify-center">
              {item.imgSrc ? (
                item.mediaType === 'video' ? (
                  <video src={item.imgSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <img alt={item.title} src={item.imgSrc} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )
              ) : (
                <span className="material-symbols-outlined text-6xl text-secondary/30">image</span>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 backdrop-blur-md text-pure-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {item.categories?.[0] || "No Category"}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <input
                    className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-xl font-bold text-crisp-white focus:ring-0 w-full mb-1 transition-colors outline-none"
                    type="text"
                    placeholder="Project Title"
                    value={item.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                  />
                  <input
                    className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-sm text-secondary focus:ring-0 w-full transition-colors outline-none"
                    type="text"
                    placeholder="Categories (comma separated)"
                    value={item.categories?.join(', ')}
                    onChange={(e) => handleCategoryChange(index, e.target.value)}
                  />
                </div>
                <div className="text-right w-24 flex-shrink-0">
                  <input
                    className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-xs font-label-bold text-secondary text-right w-full mb-1 block transition-colors outline-none"
                    type="text"
                    placeholder="Metric Label"
                    value={item.afterLabel || ""}
                    onChange={(e) => handleChange(index, 'afterLabel', e.target.value)}
                  />
                  <input
                    className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-lg font-bold text-primary focus:ring-0 text-right w-full transition-colors outline-none"
                    type="text"
                    placeholder="Metric Value"
                    value={item.afterMetric || ""}
                    onChange={(e) => handleChange(index, 'afterMetric', e.target.value)}
                  />
                </div>
              </div>

              <div className="h-[1px] bg-glass-stroke"></div>

              <div className="space-y-3">
                 <div className="flex gap-2">
                   <select
                      value={item.mediaType || "image"}
                      onChange={(e) => handleChange(index, 'mediaType', e.target.value)}
                      className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-sm text-secondary focus:ring-0 w-24 transition-colors outline-none cursor-pointer"
                    >
                      <option value="image" className="bg-surface-variant">Image</option>
                      <option value="video" className="bg-surface-variant">Video</option>
                    </select>
                   <input
                      className="flex-1 bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-sm text-secondary focus:ring-0 transition-colors outline-none"
                      type="text"
                      placeholder="Media URL"
                      value={item.imgSrc || ""}
                      onChange={(e) => handleChange(index, 'imgSrc', e.target.value)}
                    />
                 </div>
                 
                 <div className="flex items-center gap-4">
                    <label className="cursor-pointer px-3 py-1.5 bg-surface-variant hover:bg-surface-variant/80 text-[10px] uppercase font-bold rounded-md text-crisp-white border border-glass-stroke transition-all inline-flex items-center gap-1.5">
                       <span className="material-symbols-outlined text-[12px]">upload</span>
                       Upload
                       <input 
                         type="file" 
                         className="hidden" 
                         accept="image/*,video/mp4,video/webm"
                         onChange={(e) => handleUpload(index, e)}
                       />
                    </label>
                 </div>
                 <input
                    className="bg-transparent border-b border-transparent hover:border-glass-stroke focus:border-primary p-0 text-sm text-secondary focus:ring-0 w-full transition-colors outline-none"
                    type="text"
                    placeholder="Description (Optional)"
                    value={item.description || ""}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                  />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                   <select
                      value={item.gridSize || "small"}
                      onChange={(e) => handleChange(index, 'gridSize', e.target.value)}
                      className="bg-surface-variant text-[10px] text-crisp-white border-none rounded px-2 py-1 outline-none focus:ring-1 focus:ring-primary uppercase font-bold"
                    >
                      <option value="small">Small Grid (400px)</option>
                      <option value="large">Large Grid (400px)</option>
                      <option value="vertical-9-16">Reel 9:16 (Vertical)</option>
                      <option value="wide-16-9">Wide 16:9 (Horizontal)</option>
                    </select>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleDelete(index)} className="p-2 rounded-lg hover:bg-error/10 transition-colors text-secondary hover:text-error" title="Delete">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Project Placeholder */}
        <div 
          onClick={handleAddNew}
          className="border-2 border-dashed border-glass-stroke rounded-2xl flex flex-col items-center justify-center p-8 min-h-[400px] group hover:border-primary/50 transition-all cursor-pointer bg-white/[0.02]"
        >
          <div className="w-16 h-16 rounded-full bg-surface-variant/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl">add_photo_alternate</span>
          </div>
          <p className="font-bold text-crisp-white">New Case Study</p>
          <button className="mt-6 px-4 py-2 bg-white/5 border border-glass-stroke rounded-lg text-xs font-bold text-secondary group-hover:bg-primary group-hover:text-pure-black transition-all">
            START PROJECT
          </button>
        </div>
      </section>

      {/* Stats Footer */}
      <footer className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary flex items-center justify-between">
          <div>
            <p className="text-xs text-secondary uppercase font-label-bold">Total Projects</p>
            <p className="text-3xl font-bold text-crisp-white mt-1">{portfolio.length}</p>
          </div>
          <span className="material-symbols-outlined text-primary/30 text-5xl">rocket_launch</span>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs text-secondary uppercase font-label-bold">Small Grid</p>
            <p className="text-3xl font-bold text-crisp-white mt-1">{portfolio.filter(p => p.gridSize === 'small' || !p.gridSize).length}</p>
          </div>
          <span className="material-symbols-outlined text-secondary/30 text-4xl">grid_view</span>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs text-secondary uppercase font-label-bold">Large Grid</p>
            <p className="text-3xl font-bold text-primary mt-1">{portfolio.filter(p => p.gridSize === 'large').length}</p>
          </div>
          <span className="material-symbols-outlined text-primary/30 text-4xl">view_agenda</span>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs text-secondary uppercase font-label-bold">Reel 9:16</p>
            <p className="text-3xl font-bold text-crisp-white mt-1">{portfolio.filter(p => p.gridSize === 'vertical-9-16').length}</p>
          </div>
          <span className="material-symbols-outlined text-secondary/30 text-4xl">smartphone</span>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs text-secondary uppercase font-label-bold">Wide 16:9</p>
            <p className="text-3xl font-bold text-primary mt-1">{portfolio.filter(p => p.gridSize === 'wide-16-9').length}</p>
          </div>
          <span className="material-symbols-outlined text-primary/30 text-4xl">desktop_windows</span>
        </div>
      </footer>
    </div>
  );
}
