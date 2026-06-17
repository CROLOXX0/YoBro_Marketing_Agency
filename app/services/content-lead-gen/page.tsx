import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Creation & Lead Gen | Services",
  description: "High-retention, trend-driven short-form content and targeted campaigns designed to flood your pipeline with qualified prospects.",
  keywords: ["B2B Lead Generation", "Content Marketing Strategy", "Content Creation Agency", "Qualified Prospects"],
};
import ScrollReveal from "@/components/ScrollReveal";

export default function ContentLeadGenService() {
  return (
    <>
      


<main className="flex-grow pt-[100px]">

<ScrollReveal delay={0.1}>
  <section className="relative min-h-[819px] flex items-center px-margin-mobile md:px-section-padding max-w-container-max mx-auto py-section-padding">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-glow-orange/20 via-background to-background -z-10"></div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div className="space-y-8 z-10">
  <div className="inline-block px-4 py-1.5 rounded-full border border-glass-stroke bg-surface-container-low text-primary font-label-bold text-label-bold">
                          Service Spotlight
                      </div>
  <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
                          Content Creation &amp; <span className="text-gradient">Lead Gen.</span>
  </h1>
  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                          We don't just make pretty pictures. We engineer content ecosystems designed to capture attention, nurture intent, and convert scrollers into high-value leads.
                      </p>
  <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <button className="font-label-bold text-label-bold bg-primary-container text-pure-black px-8 py-4 rounded-full glow-hover transition-all duration-300">Get a Custom Strategy</button>
  </div>
  </div>
  <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden glass-panel flex items-center justify-center">
  <img alt="Abstract data visualization" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" data-alt="A highly stylized, cinematic rendering of data flowing through glowing orange and deep slate tech nodes. The environment is dark and atmospheric, representing a sophisticated digital ecosystem. Luminous streaks of light simulate high-speed data transfer and lead generation metrics, emphasizing a modern tech-forward brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPzt0wpSLWsbzH8GqZPwOLyTnWJfCHCVEymVFJ1PyWwZHq4Ptxrp-LekWv58RKBkgZvyDbPjUfnfJZbZxMXzcHtzGZlymvYKbzrzOwUEKiUAsZ6cWKh2Pk6N8JObfzdwocQf-EcZbdTqaDq6OWh01N5RFVUx_EWDRhTo_6MbLxYZB7gs25QhnAzfmqnslyEqFvmJ0cbQjwjT2AZU2wCV3EUER5Isc5ywIMcGe_QlOsXCJoBxKd0HH6706i75p3oQ-RbjtJSDM3Tg3o" />
  <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-transparent to-transparent"></div>

  <div className="absolute top-1/4 left-1/4 glass-panel p-4 rounded-lg border border-primary/30 animate-[bounce_4s_infinite] shadow-[0_0_15px_rgba(255,146,28,0.2)]">
  <div className="flex items-center gap-2">
  <span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
  <span className="font-headline-md text-headline-md text-on-surface">+340%</span>
  </div>
  <p className="font-label-bold text-label-bold text-on-surface-variant">Lead Volume</p>
  </div>
  </div>
  </div>
  </section>
</ScrollReveal>
</main>













    </>
  );
}
