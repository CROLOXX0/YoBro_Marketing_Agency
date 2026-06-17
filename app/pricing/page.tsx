"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/components/AppContext";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  const { isDiscountActive } = useAppContext();
  const [pricing, setPricing] = useState<any>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/api/pricing?t=${Date.now()}`, { cache: 'no-store' }).then(res => res.json()),
      fetch(`/api/settings?t=${Date.now()}`, { cache: 'no-store' }).then(res => res.json())
    ]).then(([pricingData, settingsData]) => {
      if (pricingData.pricing) setPricing(pricingData.pricing);
      if (settingsData.discountSettings?.percentage) setDiscountPercent(settingsData.discountSettings.percentage);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen pt-32 text-center text-crisp-white">Loading packages...</div>;
  }

  const getPrice = (base: number) => isDiscountActive ? Math.round(base * (1 - discountPercent / 100)) : base;

  return (
    <>
      


<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">

<ScrollReveal delay={0.1}>
  <section className="py-12 md:py-section-padding text-center relative">

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container rounded-full opacity-10 blur-[120px] pointer-events-none"></div>
  <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-crisp-white mb-6 relative z-10">
                  Transparent Pricing, <br /><span className="text-primary">Exponential ROI.</span>
  </h1>
  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-10">
                  Choose the growth engine that fits your current scale. No hidden fees, just aggressive marketing execution designed for modern tech-forward brands.
              </p>
  </section>
</ScrollReveal>

<section className="mb-12 md:mb-section-padding relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-gutter">

<ScrollReveal delay={0.1}>
  <div className="bg-surface-container border border-glass-stroke rounded-xl p-6 md:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,146,28,0.1)] transition-all duration-300 relative h-full">
  {pricing.trial.offerTag && (
    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary/20 text-primary px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider border border-primary/30">
      {pricing.trial.offerTag}
    </div>
  )}
  <h3 className="font-headline-md text-headline-md text-crisp-white mb-2">One-Week Trial</h3>
  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Allow businesses to test our service before committing.</p>
  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-8">
    {isDiscountActive ? (
      <>
        <span className="line-through text-on-surface-variant text-xl md:text-2xl mr-2">Rs-{pricing.trial.price.toLocaleString()}</span>
        Rs-{getPrice(pricing.trial.price).toLocaleString()}
      </>
    ) : (
      `Rs-${pricing.trial.price.toLocaleString()}`
    )}
    &nbsp;<span className="text-lg text-on-surface-variant font-normal">/{pricing.trial.period}</span>
  </div>
  <ul className="flex-grow mb-8 space-y-2">
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Social Media Audit</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Profile Optimization (Instagram/Facebook)</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">3 Professional Post Designs</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">2 Reel Edits</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Caption Writing &amp; Hashtag Research</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Competitor Analysis</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Content Suggestions</span></li>
  </ul>
  <a href={`https://wa.me/918510062139?text=Hi%20YoBro%20Marketing%20Team%2C%0A%0AI%20am%20interested%20in%20the%20${pricing.trial.name.replace(/ /g, '%20')}%20package%20(Rs-${getPrice(pricing.trial.price).toLocaleString()}%2F${pricing.trial.period}).%0A%0APlease%20provide%20more%20details.`} target="_blank" rel="noopener noreferrer" className="border border-glass-stroke hover:bg-white/10 text-crisp-white w-full py-3 rounded-lg font-label-bold text-label-bold mt-auto transition-colors block text-center">Start Trial</a>
  </div>
</ScrollReveal>

<ScrollReveal delay={0.2}>
  <div className="bg-surface-container border border-glass-stroke rounded-xl p-6 md:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,146,28,0.1)] transition-all duration-300 relative h-full">
  {pricing.starter.offerTag && (
    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary/20 text-primary px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider border border-primary/30">
      {pricing.starter.offerTag}
    </div>
  )}
  <h3 className="font-headline-md text-headline-md text-crisp-white mb-2">Starter</h3>
  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Foundational growth for early-stage startups.</p>
  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-8">
    {isDiscountActive ? (
      <>
        <span className="line-through text-on-surface-variant text-xl md:text-2xl mr-2">Rs-{pricing.starter.price.toLocaleString()}</span>
        Rs-{getPrice(pricing.starter.price).toLocaleString()}
      </>
    ) : (
      `Rs-${pricing.starter.price.toLocaleString()}`
    )}
    &nbsp;<span className="text-lg text-on-surface-variant font-normal">/{pricing.starter.period}</span>
  </div>
  <ul className="flex-grow mb-8 space-y-2">
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">10 Static Posts &amp; 2 Carousels</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">5 Reels &amp; 8-10 Stories</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Captions &amp; Hashtag Research</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Monthly Content Calendar</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Basic Profile Optimization</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Monthly Report</span></li>
  </ul>
  <a href={`https://wa.me/918510062139?text=Hi%20YoBro%20Marketing%20Team%2C%0A%0AI%20am%20interested%20in%20the%20${pricing.starter.name.replace(/ /g, '%20')}%20package%20(Rs-${getPrice(pricing.starter.price).toLocaleString()}%2F${pricing.starter.period}).%0A%0APlease%20provide%20more%20details.`} target="_blank" rel="noopener noreferrer" className="border border-glass-stroke hover:bg-white/10 text-crisp-white w-full py-3 rounded-lg font-label-bold text-label-bold mt-auto transition-colors block text-center">Choose Starter</a>
  </div>
</ScrollReveal>

<ScrollReveal delay={0.3}>
  <div className="bg-surface-container rounded-xl p-6 md:p-8 flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_30px_rgba(255,146,28,0.2)] border-2 border-primary/80 h-full">
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-pure-black px-4 py-1 rounded-full font-label-bold text-xs uppercase tracking-wider">Most Popular</div>
  {pricing.growth.offerTag && (
    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-pure-black px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider">
      {pricing.growth.offerTag}
    </div>
  )}
  <h3 className="font-headline-md text-headline-md text-crisp-white mb-2">Growth</h3>
  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Aggressive scaling for established brands.</p>
  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-8">
    {isDiscountActive ? (
      <>
        <span className="line-through text-on-surface-variant text-xl md:text-2xl mr-2">Rs-{pricing.growth.price.toLocaleString()}</span>
        Rs-{getPrice(pricing.growth.price).toLocaleString()}
      </>
    ) : (
      `Rs-${pricing.growth.price.toLocaleString()}`
    )}
    <span className="text-lg text-on-surface-variant font-normal">/{pricing.growth.period}</span>
  </div>
  <ul className="flex-grow mb-8 space-y-2">
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">12 Static Posts &amp; 4 Carousels</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">10 Reels &amp; 18-20 Stories</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Content Calendar</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Advanced Profile Optimization</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Basic Lead Generation Support</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Monthly Analytics Report</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Priority Support</span></li>
  </ul>
  <a href={`https://wa.me/918510062139?text=Hi%20YoBro%20Marketing%20Team%2C%0A%0AI%20am%20interested%20in%20the%20${pricing.growth.name.replace(/ /g, '%20')}%20package%20(Rs-${getPrice(pricing.growth.price).toLocaleString()}%2F${pricing.growth.period}).%0A%0APlease%20provide%20more%20details.`} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-pure-black w-full py-3 rounded-lg font-label-bold text-label-bold mt-auto transition-colors shadow-[0_0_15px_rgba(255,146,28,0.4)] block text-center">Scale Now</a>
  </div>
</ScrollReveal>

<ScrollReveal delay={0.4}>
  <div className="bg-surface-container border border-glass-stroke rounded-xl p-6 md:p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,146,28,0.1)] transition-all duration-300 relative h-full">
  {pricing.premium.offerTag && (
    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary/20 text-primary px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider border border-primary/30">
      {pricing.premium.offerTag}
    </div>
  )}
  <h3 className="font-headline-md text-headline-md text-crisp-white mb-2">Premium</h3>
  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Full-suite market dominance.</p>
  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-8">
    {isDiscountActive ? (
      <>
        <span className="line-through text-on-surface-variant text-xl md:text-2xl mr-2">Rs-{pricing.premium.price.toLocaleString()}</span>
        Rs-{getPrice(pricing.premium.price).toLocaleString()}
      </>
    ) : (
      `Rs-${pricing.premium.price.toLocaleString()}`
    )}
    <span className="text-lg text-on-surface-variant font-normal" style={{ "color": "rgb(220, 194, 175)" }}>/{pricing.premium.period}</span>
  </div>
  <ul className="flex-grow mb-8 space-y-2">
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">15 Static Posts &amp; 6 Carousels</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">12 Reels &amp; 30 Stories</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Advanced Content Strategy</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Lead Generation Support</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Google Business Optimization</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Detailed Monthly Reporting</span></li>
  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span><span className="font-body-md text-body-md">Dedicated Support</span></li>
  </ul>
  <a href={`https://wa.me/918510062139?text=Hi%20YoBro%20Marketing%20Team%2C%0A%0AI%20am%20interested%20in%20the%20${pricing.premium.name.replace(/ /g, '%20')}%20package%20(Rs-${getPrice(pricing.premium.price).toLocaleString()}%2F${pricing.premium.period}).%0A%0APlease%20provide%20more%20details.`} target="_blank" rel="noopener noreferrer" className="border border-glass-stroke hover:bg-white/10 text-crisp-white w-full py-3 rounded-lg font-label-bold text-label-bold mt-auto transition-colors block text-center">Contact Sales</a>
  </div>
</ScrollReveal>
</div>
</section>

<ScrollReveal delay={0.2}>
  <section className="mb-12 md:mb-section-padding relative z-10">
  <div className="text-center mb-10">
  <h2 className="font-headline-md text-headline-md text-crisp-white mb-4">Add-On Services</h2>
  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Customize your package with these standalone power-ups.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {[
    { title: "Extra Reel", price: "₹499" },
    { title: "Extra Post Design", price: "₹249" },
    { title: "Google Business Profile Setup", price: "₹1,499" },
    { title: "WhatsApp Funnel Setup", price: "₹1,499" },
    { title: "Landing Page Design", price: "₹2,499" },
    { title: "Meta Ads Setup", price: "₹1,999" },
    { title: "Meta Ads Management", price: "₹2,999/month" },
    { title: "Logo Design", price: "₹1,999" },
  ].map((addon, idx) => (
    <div key={idx} className="glass-panel border border-glass-stroke p-6 rounded-xl flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,146,28,0.1)]">
      <h4 className="font-body-md text-body-md text-crisp-white mb-2">{addon.title}</h4>
      <div className="text-2xl font-bold text-primary">{addon.price}</div>
    </div>
  ))}
  </div>
  </section>
</ScrollReveal>

<ScrollReveal delay={0.3}>
  <section className="py-12 md:py-section-padding">
  <div className="text-center mb-16">
  <h2 className="font-headline-lg text-headline-lg text-crisp-white mb-4">Beyond the Price Tag</h2>
  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">We don't just run ads; we build revenue engines. Here's what comes standard with every tier.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
  <div className="glass-panel p-6 md:p-10 rounded-xl flex items-start gap-4 md:gap-6">
  <div className="bg-surface-container-high p-4 rounded-lg">
  <span className="material-symbols-outlined text-primary text-4xl" style={{ "fontVariationSettings": "&quot" }}>trending_up</span>
  </div>
  <div>
  <h4 className="font-headline-md text-headline-md text-crisp-white mb-2">Relentless ROI Focus</h4>
  <p className="font-body-md text-body-md text-on-surface-variant">Every dollar spent is tracked, optimized, and pushed to yield maximum return. We treat your budget like our own capital.</p>
  </div>
  </div>
  <div className="glass-panel p-6 md:p-10 rounded-xl flex items-start gap-4 md:gap-6">
  <div className="bg-surface-container-high p-4 rounded-lg">
  <span className="material-symbols-outlined text-primary text-4xl" style={{ "fontVariationSettings": "&quot" }}>support_agent</span>
  </div>
  <div>
  <h4 className="font-headline-md text-headline-md text-crisp-white mb-2">Dedicated Support Sync</h4>
  <p className="font-body-md text-body-md text-on-surface-variant">Direct access to your account managers via Slack or Discord. No more waiting 48 hours for an email reply when campaigns are live.</p>
  </div>
  </div>
  </div>
  </section>
</ScrollReveal>
</main>















    </>
  );
}
