"use client";

import React, { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Work");

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        if(data.portfolio) setPortfolio(data.portfolio);
        setLoading(false);
      });
  }, []);

  const categories = ["All Work", "Social Media", "Video Production", "Brand Identity"];

  const filteredPortfolio = portfolio.filter(item => {
    if (activeCategory === "All Work") return true;
    if (!item.categories || item.categories.length === 0) return false;
    return item.categories.some((c: string) => c.toLowerCase().includes(activeCategory.toLowerCase()));
  });

  return (
    <>

<main className="pt-24 md:pt-48 pb-16 md:pb-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto">

<ScrollReveal delay={0.1}>
  <section className="mb-12 md:mb-section-padding text-center relative z-10">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
  <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tighter">
                  Our Work <span className="text-primary text-glow">Speaks</span> Volumes.
              </h1>
  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                  Dive into our arsenal of high-converting campaigns. We don't just create content; we engineer growth.
              </p>

  <div className="flex flex-wrap justify-center gap-4">
    {categories.map(cat => (
      <button 
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`px-5 py-2 rounded-full border font-label-bold text-label-bold transition-colors ${activeCategory === cat ? 'border-primary text-primary bg-primary/10' : 'border-glass-stroke text-on-surface-variant hover:border-primary/50 hover:text-primary'}`}
      >
        {cat}
      </button>
    ))}
  </div>
  </section>
</ScrollReveal>

<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-gutter">
  {loading ? (
    <div className="md:col-span-12 text-center text-crisp-white py-12">Loading portfolio...</div>
  ) : filteredPortfolio.length === 0 ? (
    <div className="md:col-span-12 text-center text-on-surface-variant py-12 border border-dashed border-glass-stroke rounded-xl">No projects found for this category.</div>
  ) : (
    filteredPortfolio.map((item) => {
      let gridClass = 'col-span-1 md:col-span-3';
      let heightClass = 'h-[300px]';
      
      if (item.gridSize === 'large') {
        gridClass = 'col-span-1 sm:col-span-2 md:col-span-6';
      } else if (item.gridSize === 'vertical-9-16') {
        gridClass = 'col-span-1 md:col-span-3';
        heightClass = 'aspect-[9/16] h-auto';
      } else if (item.gridSize === 'wide-16-9') {
        gridClass = 'col-span-1 sm:col-span-2 md:col-span-6';
        heightClass = 'aspect-video h-auto';
      }
      return (
        <ScrollReveal delay={0.1} key={item.id} className={gridClass}>
          <div className={`group relative rounded-xl overflow-hidden glass-panel ${heightClass} w-full`}>
            {item.mediaType === 'video' ? (
              <video src={item.imgSrc} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
            ) : (
              <img alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src={item.imgSrc} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-pure-black/90 via-surface/40 to-transparent p-6 flex flex-col justify-end">
              <div className="mb-3 flex gap-2">
                {item.categories?.map((cat: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 rounded-full border border-glass-stroke text-xs text-on-surface-variant backdrop-blur-md">{cat}</span>
                ))}
              </div>
              <h3 className="font-headline-md text-headline-md text-crisp-white mb-2 leading-tight">{item.title}</h3>
              
              {item.description && (
                <p className="text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.description}</p>
              )}

              {item.afterMetric && (
                <div className="flex gap-8 mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.beforeMetric && (
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider">Before</p>
                      <p className="font-headline-md text-headline-md text-error">{item.beforeMetric}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">After</p>
                    <p className="font-headline-md text-headline-md text-primary">{item.afterMetric} <span className="text-sm font-normal text-on-surface-variant">{item.afterLabel}</span></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      );
    })
  )}
</section>

<ScrollReveal delay={0.2}>
  <section className="mt-16 md:mt-section-padding glass-panel p-8 md:p-16 rounded-2xl text-center relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-tertiary-container/5"></div>
  <div className="relative z-10">
  <h2 className="font-headline-lg text-headline-lg mb-4">Ready to be our next success story?</h2>
  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">Stop leaving money on the table. Let's build a strategy that dominates your market.</p>
  <button className="font-label-bold text-label-bold px-8 py-4 rounded bg-primary-container text-pure-black font-bold btn-glow transition-all duration-300 inline-flex items-center gap-2">
                      Let's Talk Numbers
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
  </button>
  </div>
  </section>
</ScrollReveal>
</main>













    </>
  );
}
