import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import GlobalInteractivity from "@/components/GlobalInteractivity";
import Providers from "@/components/Providers";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import { AILoader } from "@/components/AILoader";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";
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
  metadataBase: new URL('https://webeesocial.com'), // Using reference URL provided
  title: {
    default: "YoBro | Creative Digital Marketing Agency",
    template: "%s | YoBro Marketing"
  },
  description: "YoBro is a creative digital marketing & Social Media agency offering 360° digital solutions, lead generation, and high-impact content creation.",
  keywords: ["Digital Marketing Agency", "Social Media Management", "Lead Generation", "Content Creation", "Reel Editing", "SEO", "Marketing Agency India"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "YoBro | Creative Digital Marketing Agency",
    description: "High-impact marketing for brands that want to dominate. Social media, lead gen, and content creation.",
    siteName: "YoBro Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "YoBro | Creative Digital Marketing Agency",
    description: "High-impact marketing for brands that want to dominate.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md text-body-md overflow-x-hidden selection:bg-primary-container selection:text-pure-black flex flex-col min-h-screen">
        <AILoader />
        <SmoothScroll>
          <Providers>
            <GlobalInteractivity />
            <MainLayoutWrapper>
              {children}
            </MainLayoutWrapper>

          <footer className="w-full bg-surface-container-lowest py-section-padding px-margin-mobile md:px-section-padding flex flex-col md:flex-row justify-between gap-gutter border-t border-glass-stroke shadow-none relative z-10 flex-wrap">
          <div className="flex flex-col gap-4 max-w-sm mb-8 md:mb-0">
            <div className="font-headline-md text-headline-md font-bold text-on-surface">YoBro Marketing</div>
            <p className="font-body-md text-body-md text-on-surface-variant">High-impact marketing for brands that want to dominate.</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">Yobromarketing3@gmail.com</p>
          </div>
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <h4 className="font-label-bold text-label-bold text-crisp-white mb-2">Services</h4>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/social-media">SMM</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/content-lead-gen">Content Creation</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/content-lead-gen">Lead Gen</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/services/reel-editing">Reel Editing</a>
          </div>
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <h4 className="font-label-bold text-label-bold text-crisp-white mb-2">Connect</h4>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="https://wa.me/918510062139" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="mailto:Yobromarketing3@gmail.com">Email</a>
          </div>
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <h4 className="font-label-bold text-label-bold text-crisp-white mb-2">Legal</h4>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/privacy">Privacy Policy</a>
            <a className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary-fixed transition-all duration-200 hover:translate-x-1" href="/terms">Terms &amp; Conditions</a>
          </div>
          <div className="w-full mt-8 pt-8 border-t border-glass-stroke text-center md:text-left text-on-secondary-fixed-variant font-body-md text-body-md text-sm flex flex-col md:flex-row justify-between items-center">
            <span>&copy; {new Date().getFullYear()} YoBro Marketing Agency. All rights reserved.</span>
          </div>
        </footer>
        <CookieConsent />
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
