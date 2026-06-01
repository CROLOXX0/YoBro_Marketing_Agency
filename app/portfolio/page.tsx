"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        if(data.portfolio) setPortfolio(data.portfolio);
        setLoading(false);
      });
  }, []);

  return (
    <>
      
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-4 bg-surface/90 backdrop-blur-xl border-b border-glass-stroke md:hidden">
<a className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter text-[24px]" href="#">YoBro</a>
<button className="text-crisp-white">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>menu</span>
</button>
</nav>
<main className="pt-32 md:pt-48 pb-section-padding px-margin-mobile md:px-0 max-w-container-max mx-auto">

<section className="mb-section-padding text-center relative z-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tighter">
                Our Work <span className="text-primary text-glow">Speaks</span> Volumes.
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                Dive into our arsenal of high-converting campaigns. We don't just create content; we engineer growth.
            </p>

<div className="flex flex-wrap justify-center gap-4">
<button className="px-5 py-2 rounded-full border border-primary text-primary bg-primary/10 font-label-bold text-label-bold transition-colors">All Work</button>
<button className="px-5 py-2 rounded-full border border-glass-stroke text-on-surface-variant hover:border-primary/50 hover:text-primary transition-colors font-label-bold text-label-bold">Social Media</button>
<button className="px-5 py-2 rounded-full border border-glass-stroke text-on-surface-variant hover:border-primary/50 hover:text-primary transition-colors font-label-bold text-label-bold">Video Production</button>
<button className="px-5 py-2 rounded-full border border-glass-stroke text-on-surface-variant hover:border-primary/50 hover:text-primary transition-colors font-label-bold text-label-bold">Brand Identity</button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
  {loading ? (
    <div className="md:col-span-12 text-center text-crisp-white py-12">Loading portfolio...</div>
  ) : (
    portfolio.map((item) => {
      let gridClass = 'md:col-span-3';
      let heightClass = 'h-[300px]';
      
      if (item.gridSize === 'large') {
        gridClass = 'md:col-span-6';
      } else if (item.gridSize === 'vertical-9-16') {
        gridClass = 'md:col-span-3';
        heightClass = 'aspect-[9/16] h-auto';
      } else if (item.gridSize === 'wide-16-9') {
        gridClass = 'md:col-span-6';
        heightClass = 'aspect-video h-auto';
      }
      return (
        <div key={item.id} className={`${gridClass} group relative rounded-xl overflow-hidden glass-panel ${heightClass}`}>
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
      );
    })
  )}
</section>

<section className="mt-section-padding glass-panel p-16 rounded-2xl text-center relative overflow-hidden">
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
</main>













    </>
  );
}
