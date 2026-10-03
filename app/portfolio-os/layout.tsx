import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio OS — Interactive Workstation | Samrit Mukherjee",
  description:
    "An interactive, operating-system-inspired portfolio by Samrit Mukherjee featuring draggable windows, terminal workflows, and interactive applications.",
  alternates: {
    canonical: "https://samrit.dev/portfolio-os",
  },
  openGraph: {
    title: "Portfolio OS — Interactive Workstation | Samrit Mukherjee",
    description:
      "An interactive, operating-system-inspired portfolio by Samrit Mukherjee featuring draggable windows, terminal workflows, and interactive applications.",
    url: "https://samrit.dev/portfolio-os",
    siteName: "Samrit Mukherjee",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio OS — Interactive Workstation | Samrit Mukherjee",
    description:
      "An interactive, operating-system-inspired portfolio by Samrit Mukherjee featuring draggable windows, terminal workflows, and interactive applications.",
  },
};

export default function PortfolioOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
