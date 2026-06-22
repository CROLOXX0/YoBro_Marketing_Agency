import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="relative min-h-[921px] flex items-center pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20 mix-blend-screen">
          <div
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary blur-[120px] rounded-full animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-container blur-[150px] rounded-full animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>
        </div>
        <div className="relative z-10 w-full flex flex-col items-center text-center fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-variant border border-outline-variant/30 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Digital Agency of the Year 2024
            </span>
          </div>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 max-w-4xl tracking-tight leading-tight">
            We Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Digital Future
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            High-end web development and digital experiences for brands that refuse to blend in. We combine technical rigor with uncompromising creative flair.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              className="magnetic-btn inline-flex items-center justify-center bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-full shadow-[0_0_30px_rgba(173,198,255,0.2)] hover:shadow-[0_0_40px_rgba(173,198,255,0.4)] transition-all"
              href="#contact"
            >
              Start Your Project
              <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
            <Link
              className="magnetic-btn inline-flex items-center justify-center border border-outline-variant text-on-surface font-label-sm text-label-sm px-8 py-4 rounded-full hover:bg-surface-variant transition-colors backdrop-blur-sm"
              href="#portfolio"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trusted By (Marquee) */}
      <section className="py-12 border-y border-outline-variant/10 bg-surface-container-lowest/50 backdrop-blur-sm fade-in-up">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-6 text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            Trusted by industry leaders
          </p>
        </div>
        <div className="marquee-container w-full">
          <div className="marquee-content gap-16 md:gap-32 px-16 md:px-32 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Duplicate items for seamless scrolling */}
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">TechFlow</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">NEXUS</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">Zenith</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">Aura</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">TechFlow</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">NEXUS</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">Zenith</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter">Aura</span>
          </div>
        </div>
      </section>

      <div className="h-[160px]"></div>

      {/* 3. Services (Bento) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-in-up" id="services">
        <div className="mb-16 md:w-2/3">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Engineering Excellence.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We don't just build websites; we engineer digital platforms designed for scalability, performance, and conversion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-base md:gap-gutter auto-rows-[300px]">
          {/* Large Card */}
          <div className="md:col-span-8 bg-surface-container border border-outline-variant/20 rounded-2xl p-8 bento-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-display-xl text-primary" data-icon="code_blocks">
                code_blocks
              </span>
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-sm text-label-sm rounded-full mb-4 w-max">
                Core Expertise
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Web Application Development</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Robust, secure, and scalable architectures built on modern tech stacks.
              </p>
            </div>
          </div>
          {/* Small Card 1 */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 rounded-2xl p-8 bento-card flex flex-col justify-between group">
            <span className="material-symbols-outlined text-headline-md text-secondary group-hover:scale-110 transition-transform" data-icon="design_services">
              design_services
            </span>
            <div>
              <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">UI/UX Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Intuitive interfaces grounded in user psychology.
              </p>
            </div>
          </div>
          {/* Small Card 2 */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 rounded-2xl p-8 bento-card flex flex-col justify-between group">
            <span className="material-symbols-outlined text-headline-md text-tertiary group-hover:scale-110 transition-transform" data-icon="speed">
              speed
            </span>
            <div>
              <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">Performance Optimization</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Lightning-fast load times for better SEO and retention.
              </p>
            </div>
          </div>
          {/* Medium Card */}
          <div className="md:col-span-8 bg-gradient-to-br from-surface-container to-surface-variant border border-outline-variant/20 rounded-2xl p-8 bento-card flex items-end">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">E-Commerce Solutions</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                Custom storefronts that turn visitors into loyal customers with seamless checkout flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[160px]"></div>

      {/* 5. Portfolio (Masonry-ish) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-in-up" id="portfolio">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Selected Works.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A glimpse into digital platforms we've crafted for forward-thinking brands.
            </p>
          </div>
          <Link className="font-label-sm text-label-sm text-primary hover:text-primary-container flex items-center gap-2 group" href="#">
            View All Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="portfolio-item group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-variant cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJO7gIwlqgIOm0zKNBkkhnSI5ikc8GRME9sW1-gGsLmRMdOYCW-GwS883FJvXBZhTRtV0XB7ED_49Bs2y4r5_JV-KLPFBaB1U5QLLjrfkflS6WuBUT1MwkCe-LyPvkI_uDblh4hk5bFbsBvHEd3Njo-2lQV5ji6d413ucHjqTeu6j1CkGEVQUvaOBVAFMQEwpMn1Fuh6Ja6H8C1HGIFBo5FhcFdMOYZxlw2hIbjvlXX01qriBW15TT8gyDYp0DJo1TvJ1hXyHx2E"
              alt="Nexus Dashboard"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="portfolio-overlay absolute inset-0 bg-surface-dim/80 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                <span className="font-label-sm text-label-sm text-primary mb-2 block">Fintech / Web App</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Nexus Dashboard</h3>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="portfolio-item group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-variant cursor-pointer md:mt-16">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKv5Rf01PxZLEiZjzbSKTHZXx-iKD98ZKxRozJhijiqLh8eqps63rGR11sXiRpfCOmxbTHezEwjNwjRckJCnjV2mF14kta8EtNDVQ6PWrO-KYD-4fxxD_73V3WAslQUHSG2sXvlkQugsZMxORmJZyCL0TSF12YYAqFkEDVbDMBZyz5rLb_vmpkrggS9hXRBSYOx1wJI1dpMr6fkt7jhIxoRYFC42Au2Ef133bJMhWc7VfX59QGkJz_2INjV7xkLODZQtVFqUrjNQY"
              alt="Aura Studio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="portfolio-overlay absolute inset-0 bg-surface-dim/80 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                <span className="font-label-sm text-label-sm text-secondary mb-2 block">E-Commerce / Branding</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Aura Studio</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[160px]"></div>

      {/* Contact Form */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-in-up mb-32" id="contact">
        <div className="bg-surface-container-high border border-outline-variant/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-16 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="md:w-1/2 relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Let's build something extraordinary.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Ready to transform your digital presence? Reach out to schedule a technical discovery call.
            </p>
            <div className="space-y-6">
              <Link className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors group" href="mailto:hello@yobrostudio.com">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined" data-icon="mail">mail</span>
                </div>
                <span className="font-body-lg text-body-lg">hello@yobrostudio.com</span>
              </Link>
              <Link className="flex items-center gap-4 text-on-surface hover:text-tertiary transition-colors group" href="https://wa.me/918510062139">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center group-hover:bg-tertiary/20 transition-colors">
                  <span className="material-symbols-outlined" data-icon="chat">chat</span>
                </div>
                <span className="font-body-lg text-body-lg">WhatsApp Us Directly</span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <form className="space-y-6">
              <div className="relative">
                <input
                  className="w-full bg-transparent border-b border-outline-variant py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors"
                  id="name"
                  placeholder="Name"
                  type="text"
                />
                <label
                  className="absolute left-0 top-4 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-transparent border-b border-outline-variant py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
                <label
                  className="absolute left-0 top-4 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0 peer placeholder-transparent transition-colors resize-none"
                  id="message"
                  placeholder="Message"
                  rows={4}
                ></textarea>
                <label
                  className="absolute left-0 top-4 font-label-sm text-label-sm text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
                  htmlFor="message"
                >
                  Project Details
                </label>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded-full magnetic-btn hover:bg-primary-container transition-colors mt-8"
                type="button"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
