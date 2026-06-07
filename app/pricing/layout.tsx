import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Marketing Packages",
  description: "Transparent pricing for high-impact social media management, reel editing, and lead generation packages.",
  keywords: ["Marketing Agency Pricing", "Social Media Packages", "Lead Generation Costs", "Marketing Agency India"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
