import type { Metadata } from "next";
import { Inter, Montserrat, Geist } from "next/font/google";
import GlobalInteractivity from "@/components/GlobalInteractivity";
import Providers from "@/components/Providers";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import { AILoader } from "@/components/AILoader";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";
import TopNav from "@/components/TopNav";
import StudioFooter from "@/components/StudioFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webeesocial.com'),
  title: {
    default: "YoBro Studio | Modern Web Agency",
    template: "%s | YoBro Studio"
  },
  description: "High-end web development and digital experiences for brands that refuse to blend in.",
  keywords: ["Web Agency", "Web Development", "UI/UX Design", "Performance Optimization", "E-Commerce", "Digital Agency"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "YoBro Studio | Modern Web Agency",
    description: "High-end web development and digital experiences for brands that refuse to blend in.",
    siteName: "YoBro Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "YoBro Studio | Modern Web Agency",
    description: "High-end web development and digital experiences for brands that refuse to blend in.",
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
      className={`${inter.variable} ${montserrat.variable} ${geist.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md text-body-md overflow-x-hidden selection:bg-primary selection:text-on-primary flex flex-col min-h-screen">
        <AILoader />
        <SmoothScroll>
          <Providers>
            <GlobalInteractivity />
            <TopNav />
            <MainLayoutWrapper>
              {children}
            </MainLayoutWrapper>
            <StudioFooter />
            <CookieConsent />
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
