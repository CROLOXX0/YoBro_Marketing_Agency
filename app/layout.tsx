import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import GlobalInteractivity from "@/components/GlobalInteractivity";
import Providers from "@/components/Providers";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import { AILoader } from "@/components/AILoader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YoBro Marketing Agency",
  description: "High-impact marketing for brands that want to dominate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-pure-black text-on-surface font-body-md text-body-md overflow-x-hidden selection:bg-primary-container selection:text-pure-black flex flex-col min-h-screen">
        <AILoader />
        <SmoothScroll>
          <Providers>
            <GlobalInteractivity />
            <MainLayoutWrapper>
              {children}
            </MainLayoutWrapper>

          <footer className="w-full bg-surface-container-lowest py-section-padding px-margin-mobile md:px-section-padding flex flex-col md:flex-row justify-between gap-gutter border-t border-glass-stroke shadow-none relative z-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="font-headline-md text-headline-md font-bold text-on-surface">YoBro Marketing</div>
            <p className="font-body-md text-body-md text-on-surface-variant">High-impact marketing for brands that want to dominate.</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">Yobromarketing3@gmail.com</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-bold text-label-bold text-crisp-white mb-2">Services</h4>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/social-media">SMM</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/content-lead-gen">Content Creation</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/content-lead-gen">Lead Gen</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/reel-editing">Reel Editing</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-bold text-label-bold text-crisp-white mb-2">Connect</h4>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="https://wa.me/918510062139" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="mailto:Yobromarketing3@gmail.com">Email</a>
          </div>
          <div className="w-full md:w-auto mt-8 md:mt-0 text-left md:text-right text-on-secondary-fixed-variant font-body-md text-body-md text-sm mt-auto">
            © 2024 YoBro Marketing Agency. All rights reserved.
          </div>
        </footer>
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
