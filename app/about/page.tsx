import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Samrit Mukherjee | AI & Full Stack Developer",
  description:
    "Learn about Samrit Mukherjee — BTech CS/AI student, hackathon winner, and developer building AI-powered products in Kolkata, India.",
  alternates: { canonical: "/about" },
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
          Samrit Mukherjee is an AI engineer and full stack developer based in Kolkata, India. He
          is pursuing BTech in Computer Science with a specialization in Artificial Intelligence
          and Machine Learning at MSIT.
        </p>
        <p className="!max-w-none text-[var(--theme-text-muted)]">
          With 3× hackathon wins and 8+ shipped projects — including Cosmic Canvas, SUKALYA.ai,
          and Portfolio OS — he builds tools that bridge complex technology and real-world
          usability.
        </p>
        <blockquote className="border-l-4 border-accent-500 pl-6 italic text-lg text-[var(--theme-text)]">
          Build tools that matter, for people who need them.
        </blockquote>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="/#contact" className="btn-primary">
            Get in touch
          </a>
          <a href="/#projects" className="btn-secondary">
            View projects
          </a>
        </div>
      </div>
    </main>
  );
}
