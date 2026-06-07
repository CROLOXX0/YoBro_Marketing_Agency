"use client";

import React, { useEffect, useState } from "react";

export default function BlogsAdminPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/blogs', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs) setBlogs(data.blogs);
        setLoading(false);
      });
  }, []);

  const handleChange = (index: number, field: string, value: any) => {
    const newBlogs = [...blogs];
    newBlogs[index] = { ...newBlogs[index], [field]: value };
    setBlogs(newBlogs);
  };

  const handleAddNew = () => {
    setBlogs([
      ...blogs,
      {
        id: Date.now().toString(),
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        date: new Date().toISOString().split('T')[0],
        author: "YoBro Team",
        keywords: [],
        image: ""
      }
    ]);
  };

  const handleDelete = (index: number) => {
    if(!confirm("Are you sure you want to delete this blog post?")) return;
    const newBlogs = [...blogs];
    newBlogs.splice(index, 1);
    setBlogs(newBlogs);
  };

  const handleUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMessage("Uploading image...");
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      
      if (data.success) {
        handleChange(index, 'image', data.url);
        setMessage("Upload successful!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Upload failed: " + data.error);
      }
    } catch (err) {
      setMessage("Error uploading file.");
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify(blogs),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        setMessage("Blogs updated successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("Error updating blogs.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-crisp-white">Loading blogs...</div>;

  return (
    <div className="animate-in fade-in duration-500">
      <section className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-label-bold text-secondary mb-4 uppercase tracking-widest">
            <span>CMS</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary active-nav-glow">Blog Posts</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-crisp-white">Blog Management</h2>
          <p className="text-secondary mt-2 max-w-xl">Create and edit articles to boost SEO and establish industry authority.</p>
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
            <span>Add New Post</span>
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
        {blogs.map((item, index) => (
          <div key={item.id} className="glass-card rounded-2xl overflow-hidden flex flex-col p-6 space-y-4 relative">
            <button onClick={() => handleDelete(index)} className="absolute top-6 right-6 p-2 rounded-lg hover:bg-error/10 text-secondary hover:text-error transition-colors z-10">
               <span className="material-symbols-outlined text-lg">delete</span>
            </button>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/3 space-y-4">
                <div className="aspect-video bg-surface-container-low rounded-xl overflow-hidden relative flex items-center justify-center border border-glass-stroke">
                  {item.image ? (
                    <img src={item.image} alt="Thumbnail" className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-secondary/50">image</span>
                  )}
                  <label className="absolute bottom-2 right-2 cursor-pointer px-3 py-1 bg-pure-black/70 hover:bg-primary text-[10px] uppercase font-bold rounded-md text-crisp-white hover:text-pure-black transition-all inline-flex items-center gap-1.5 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[12px]">upload</span>
                    Cover Image
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleUpload(index, e)} />
                  </label>
                </div>
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Author</label>
                  <input className="bg-surface-container-low border border-glass-stroke focus:border-primary p-2 rounded-lg text-crisp-white w-full outline-none" type="text" value={item.author} onChange={(e) => handleChange(index, 'author', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Date</label>
                  <input className="bg-surface-container-low border border-glass-stroke focus:border-primary p-2 rounded-lg text-crisp-white w-full outline-none" type="date" value={item.date} onChange={(e) => handleChange(index, 'date', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Keywords (comma separated)</label>
                  <input className="bg-surface-container-low border border-glass-stroke focus:border-primary p-2 rounded-lg text-crisp-white w-full outline-none" type="text" value={Array.isArray(item.keywords) ? item.keywords.join(', ') : item.keywords} onChange={(e) => handleChange(index, 'keywords', e.target.value.split(',').map((k: string) => k.trim()))} />
                </div>
              </div>

              <div className="w-full lg:w-2/3 space-y-4">
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Title</label>
                  <input className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none text-lg font-bold" type="text" value={item.title} onChange={(e) => handleChange(index, 'title', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Slug</label>
                  <input className="bg-surface-container-low border border-glass-stroke focus:border-primary p-2 rounded-lg text-crisp-white w-full outline-none" type="text" value={item.slug} onChange={(e) => handleChange(index, 'slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))} />
                  <p className="text-[10px] text-secondary mt-1">Live URL: <strong>/blog/{item.slug}</strong></p>
                </div>
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Excerpt (Short Summary)</label>
                  <textarea className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none min-h-[80px]" value={item.excerpt} onChange={(e) => handleChange(index, 'excerpt', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-secondary uppercase font-bold mb-1 block">Content (HTML allowed)</label>
                  <textarea className="bg-surface-container-low border border-glass-stroke focus:border-primary p-3 rounded-lg text-crisp-white w-full outline-none min-h-[300px] font-mono text-sm" placeholder="Write your blog content here..." value={item.content} onChange={(e) => handleChange(index, 'content', e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <div 
            onClick={handleAddNew}
            className="border-2 border-dashed border-glass-stroke rounded-2xl flex flex-col items-center justify-center p-12 hover:border-primary/50 transition-all cursor-pointer bg-white/[0.02]"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-2">book</span>
            <p className="font-bold text-crisp-white">No blog posts found</p>
            <p className="text-secondary text-sm">Click here to create your first post.</p>
          </div>
        )}
      </section>
    </div>
  );
}
