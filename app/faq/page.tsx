import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      



<main className="flex-grow pt-[120px] pb-section-padding px-margin-mobile md:px-section-padding max-w-container-max mx-auto w-full relative z-10">

<div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-container rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none -z-10"></div>
<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tertiary-container rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none -z-10"></div>

<ScrollReveal delay={0.1}>
  <div className="text-center mb-section-padding relative">
  <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-crisp-white mb-6">Frequently Asked <span className="text-primary">Questions</span></h1>
  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Everything you need to know about partnering with YoBro Marketing. Clear answers, zero fluff.</p>
  </div>
</ScrollReveal>

<ScrollReveal delay={0.2}>
  <div className="max-w-3xl mx-auto flex flex-col gap-4">

  <details className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 group" >
  <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
  <h3 className="font-headline-md text-headline-md text-crisp-white text-xl md:text-2xl">How long does it take to see results?</h3>
  <span className="material-symbols-outlined text-primary transition-transform duration-300 transform group-open:rotate-180">expand_more</span>
  </summary>
  <div className="px-6 pb-6 faq-content">
  <p className="font-body-md text-body-md text-on-surface-variant">
                          For Paid Ads (PPC), you can expect initial data and traffic within the first 48 hours, with optimization taking 2-4 weeks. For organic strategies like SEO and Content Marketing, typical timelines are 3-6 months to see significant compounding growth. We provide weekly performance reports regardless of the channel.
                      </p>
  </div>
  </details>

  <details className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 group" >
  <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
  <h3 className="font-headline-md text-headline-md text-crisp-white text-xl md:text-2xl">What is your pricing structure?</h3>
  <span className="material-symbols-outlined text-primary transition-transform duration-300 transform group-open:rotate-180">expand_more</span>
  </summary>
  <div className="px-6 pb-6 faq-content">
  <div className="font-body-md text-body-md text-on-surface-variant space-y-2">
                          <p>We offer flexible packages designed for small and growing businesses:</p>
                          <ul className="list-disc pl-5">
                              <li>One-Week Trial: ₹1,999</li>
                              <li>Starter Package: ₹6,999/month</li>
                              <li>Growth Package: ₹9,999/month</li>
                              <li>Premium Package: ₹17,999/month</li>
                          </ul>
                          <p>Each package includes different levels of content creation, social media management, and growth support to match your business needs.</p>
                      </div>
  </div>
  </details>

  <details className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 group" >
  <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
  <h3 className="font-headline-md text-headline-md text-crisp-white text-xl md:text-2xl">Do I need a minimum ad budget?</h3>
  <span className="material-symbols-outlined text-primary transition-transform duration-300 transform group-open:rotate-180">expand_more</span>
  </summary>
  <div className="px-6 pb-6 faq-content">
  <p className="font-body-md text-body-md text-on-surface-variant">
                          No. Our social media management packages can help grow your online presence organically. However, if you want faster reach, lead generation, or promotional campaigns, we recommend a separate advertising budget based on your goals and industry.
                      </p>
  </div>
  </details>

  <details className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 group" >
  <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
  <h3 className="font-headline-md text-headline-md text-crisp-white text-xl md:text-2xl">Who owns the accounts and data?</h3>
  <span className="material-symbols-outlined text-primary transition-transform duration-300 transform group-open:rotate-180">expand_more</span>
  </summary>
  <div className="px-6 pb-6 faq-content">
  <p className="font-body-md text-body-md text-on-surface-variant">
                          You do. Your social media accounts, business assets, leads, and data always remain your property. We only manage and optimize them on your behalf, ensuring full transparency and control.
                      </p>
  </div>
  </details>

  <details className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 group" >
  <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
  <h3 className="font-headline-md text-headline-md text-crisp-white text-xl md:text-2xl">How does communication work?</h3>
  <span className="material-symbols-outlined text-primary transition-transform duration-300 transform group-open:rotate-180">expand_more</span>
  </summary>
  <div className="px-6 pb-6 faq-content">
  <p className="font-body-md text-body-md text-on-surface-variant">
                          We keep communication simple and efficient through WhatsApp, phone calls, and email. You'll receive regular updates, monthly reports, and direct support based on your package level. Our goal is to ensure smooth collaboration and quick responses to your queries.
                      </p>
  </div>
  </details>
  </div>
</ScrollReveal>

<ScrollReveal delay={0.3}>
  <div className="mt-section-padding max-w-4xl mx-auto glass-panel rounded-2xl p-10 md:p-16 text-center relative overflow-hidden border-t border-primary/30">

  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
  <h2 className="font-headline-lg text-headline-lg text-crisp-white mb-4 relative z-10">Still have questions?</h2>
  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 relative z-10 max-w-xl mx-auto">Skip the email threads. Drop us a message directly on WhatsApp and get an answer from our strategy team today.</p>
  <a className="inline-flex items-center gap-3 font-label-bold text-label-bold bg-[#25D366] text-pure-black px-8 py-4 rounded-full glow-hover transition-all duration-300 relative z-10" href="https://wa.me/918510062139" target="_blank" rel="noopener noreferrer" style={{ "backgroundColor": "#25D366", "boxShadow": "0 0 15px rgba(37, 211, 102, 0.4)" }}>
  <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>chat</span>
                  Chat on WhatsApp
              </a>
  </div>
</ScrollReveal>
</main>












    </>
  );
}
