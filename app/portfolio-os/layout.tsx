import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio OS & Future Projects | Samrit Mukherjee",
  description:
    "Explore future projects, web applications, and AI-powered solutions built by Samrit Mukherjee — AI & ML Developer & Hackathon Winner.",
  alternates: {
    canonical: "/portfolio-os",
  },
};

export default function PortfolioOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
