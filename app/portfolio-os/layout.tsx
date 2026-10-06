import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio OS — Interactive Workstation | Samrit Mukherjee",
  },
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
    images: [
      {
        url: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio OS — Samrit Mukherjee",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio OS — Interactive Workstation | Samrit Mukherjee",
    description:
      "An interactive, operating-system-inspired portfolio by Samrit Mukherjee featuring draggable windows, terminal workflows, and interactive applications.",
    images: ["https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg"],
  },
};

export default function PortfolioOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
