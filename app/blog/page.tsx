import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Samrit Mukherjee",
  description: "Technical writing on AI products, hackathons, and Next.js by Samrit Mukherjee.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen app-shell section-wrapper">
      <div className="container-custom max-w-3xl py-24 space-y-10">
        <Link href="/" className="text-accent-400 text-sm font-semibold hover:underline">
          ← Back to portfolio
        </Link>
        <div>
          <h1 className="text-[var(--theme-text)]">Writing</h1>
          <p className="text-[var(--theme-text-muted)] mt-2">
            Notes on building AI products, winning hackathons, and shipping with Next.js.
          </p>
        </div>
        <ul className="space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block glass-card p-6 hover-lift group"
              >
                <time className="text-xs text-[var(--theme-text-muted)] uppercase tracking-widest">
                  {post.date} · {post.readTime}
                </time>
                <h2 className="text-xl font-bold text-[var(--theme-text)] mt-2 group-hover:text-accent-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[var(--theme-text-muted)] mt-2 !max-w-none text-sm">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
