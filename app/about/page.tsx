import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Samrit Mukherjee | AI Systems, Full-Stack Engineering & 11× Hackathon Winner",
  description:
    "Learn about Samrit Mukherjee — B.Tech Computer Science & Engineering (AI & ML) student at MSIT Kolkata, 11× hackathon winner, and full-stack engineer building AI systems and enterprise platforms.",
  alternates: { canonical: "https://samrit.dev/about" },
  openGraph: {
    title: "About Samrit Mukherjee | AI Systems & Full-Stack Engineer",
    description:
      "Learn about Samrit Mukherjee — B.Tech Computer Science & Engineering (AI & ML) student at MSIT Kolkata, 11× hackathon winner, and full-stack engineer building AI systems and enterprise platforms.",
    url: "https://samrit.dev/about",
    siteName: "Samrit Mukherjee",
    images: [
      {
        url: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
        width: 1200,
        height: 630,
        alt: "Samrit Mukherjee — About",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samrit Mukherjee | AI Systems & Full-Stack Engineer",
    description:
      "Learn about Samrit Mukherjee — B.Tech Computer Science & Engineering (AI & ML) student at MSIT Kolkata, 11× hackathon winner, and full-stack engineer building AI systems and enterprise platforms.",
    images: ["https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen app-shell section-wrapper">
      <div className="container-custom max-w-3xl py-24 space-y-8">
        <Link href="/" className="text-accent-400 text-sm font-semibold hover:underline">
          ← Back to portfolio
        </Link>
        <h1 className="text-[var(--theme-text)]">About Samrit Mukherjee</h1>
        <p className="!max-w-none text-[var(--theme-text-muted)]">
          Samrit Mukherjee is an AI Systems Engineer and full-stack developer based in Kolkata, India. He
          is pursuing a B.Tech in Computer Science & Engineering (AI & ML) at Meghnad Saha Institute of Technology (MSIT) under MAKAUT, graduating in 2027.
        </p>
        <p className="!max-w-none text-[var(--theme-text-muted)]">
          With 11× hackathon wins and 8 projects built — including Cosmic Canvas, SUKALYA.ai,
          Portfolio OS, Avento AI, and Custodian ERP — he builds scalable software that transforms complex technology into practical, real-world
          solutions. He also contributes to open source initiatives, including participating in GirlScript Summer of Code (GSSoC).
        </p>
        <blockquote className="border-l-4 border-accent-500 pl-6 italic text-lg text-[var(--theme-text)]">
          Build tools that matter, for people who need them.
        </blockquote>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/#contact" className="btn-primary">
            Get in touch
          </Link>
          <Link href="/#projects" className="btn-secondary">
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
