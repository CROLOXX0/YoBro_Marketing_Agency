"use client";

import React, { useEffect, useState } from "react";

export default function PagesAdminPage() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/pages', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.pages) setPages(data.pages);
        setLoading(false);
      });
  }, []);

  const handleChange = (index: number, field: string, value: any) => {
    const newPages = [...pages];
    newPages[index] = { ...newPages[index], [field]: value };
    setPages(newPages);
  };

  const handleAddNew = () => {
    setPages([
      ...pages,
      {
        id: Date.now().toString(),
        title: "",
        slug: "",
        content: "",
        seoDescription: "",
        seoKeywords: ""
      }
    ]);
  };

  const handleDelete = (index: number) => {
    if(!confirm("Are you sure you want to delete this page?")) return;
    const newPages = [...pages];
    newPages.splice(index, 1);
    setPages(newPages);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        body: JSON.stringify(pages),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        setMessage("Pages updated successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("Error updating pages.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-crisp-white">Loading custom pages...</div>;

  return (
    <div className="animate-in fade-in duration-500">
      <section className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-label-bold text-secondary mb-4 uppercase tracking-widest">
            <span>CMS</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary active-nav-glow">Custom Pages</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-crisp-white">Custom Pages Management</h2>
          <p className="text-secondary mt-2 max-w-xl">Create and edit dedicated pages for your services (e.g. Social Media, Video Production).</p>
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
            <span>Add New Page</span>
          </button>
        </div>
      </section>

      {message && (
        <div className="bg-primary/20 border border-primary/50 text-primary px-4 py-3 rounded-xl mb-8 text-sm font-bold flex items-center gap-3">
          <span className="material-symbols-outlined">check_circle</span>
          {message}
        </div>
      )}

      <section className="space-y-8">
        {pages.map((item, index) => (
          <div key={item.id} className="glass-card rounded-2xl overflow-hidden flex flex-col p-6 space-y-4 relative">
            <button onClick={() => handleDelete(index)} className="absolute top-6 right-6 p-2 rounded-lg hover:bg-error/10 text-secondary hover:text-error transition-colors">
               <span className="material-symbols-outlined text-lg">delete</span>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-secondary uppercase font-bold mb-1 block">Page Title</label>
                <input
                  className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none"
                  type="text"
                  placeholder="e.g. Social Media Management"
                  value={item.title}
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-secondary uppercase font-bold mb-1 block">URL Slug</label>
                <input
                  className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none"
                  type="text"
                  placeholder="e.g. social-media"
                  value={item.slug}
                  onChange={(e) => handleChange(index, 'slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                />
                <p className="text-[10px] text-secondary mt-1">This page will be live at: <strong>/p/{item.slug}</strong></p>
              </div>
            </div>

            <div>
              <label className="text-xs text-secondary uppercase font-bold mb-1 block">Page Content (HTML allowed)</label>
              <textarea
                className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none min-h-[300px] font-mono text-sm"
                placeholder="Write your page content here..."
                value={item.content}
                onChange={(e) => handleChange(index, 'content', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-secondary uppercase font-bold mb-1 block">SEO Description</label>
                <textarea
                  className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none min-h-[80px]"
                  placeholder="Short description for search engines..."
                  value={item.seoDescription}
                  onChange={(e) => handleChange(index, 'seoDescription', e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-secondary uppercase font-bold mb-1 block">SEO Keywords (comma separated)</label>
                <textarea
                  className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none min-h-[80px]"
                  placeholder="marketing, social media, leads..."
                  value={item.seoKeywords}
                  onChange={(e) => handleChange(index, 'seoKeywords', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        {pages.length === 0 && (
          <div 
            onClick={handleAddNew}
            className="border-2 border-dashed border-glass-stroke rounded-2xl flex flex-col items-center justify-center p-12 hover:border-primary/50 transition-all cursor-pointer bg-white/[0.02]"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-2">article</span>
            <p className="font-bold text-crisp-white">No custom pages found</p>
            <p className="text-secondary text-sm">Click here to create your first page.</p>
          </div>
        )}
      </section>
    </div>
  );
}
