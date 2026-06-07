import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Work",
  description: "Dive into our arsenal of high-converting campaigns. We engineer growth for modern tech-forward brands.",
  keywords: ["Marketing Agency Portfolio", "Our Work", "Client Results", "Social Media Portfolio", "Marketing Success Stories"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
