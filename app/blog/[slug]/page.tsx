import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Samrit Mukherjee`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

const postBodies: Record<string, string[]> = {
  "cosmic-canvas-architecture": [
    "Cosmic Canvas started from a simple question: what if AI-generated designs were editable layers instead of flat PNGs?",
    "The architecture splits into three layers — prompt understanding, layout generation, and a canvas editor that preserves structure. Next.js handles the app shell; the canvas uses a custom layer model so users can tweak typography, colors, and spacing after generation.",
    "Week one saw 500+ designs created. The lesson: optimize for iteration speed, not perfect first outputs.",
  ],
  "double-slash-4-win": [
    "Double Slash 4.0 at Jadavpur University brought 300+ teams and 36 hours on the clock.",
    "We scoped ruthlessly: one core demo path, one backup feature, and zero vanity UI. Finalist selection came from a working prototype judges could touch — not slides.",
    "Winning meant shipping under pressure with clear ownership and nightly integration checks.",
  ],
  "webmcp-nextjs": [
    "Modern portfolios should be discoverable by agents, not just humans. WebMCP on Next.js 16 adds structured API catalogs, agent skill indexes, and MCP server cards.",
    "This site exposes /api/v1/projects, /.well-known/api-catalog, and /llms.txt with cache-friendly headers so crawlers get consistent snapshots.",
    "If you're adding agent discovery, version your APIs early — /api/v1/projects beats breaking /api/projects later.",
  ],
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const paragraphs = postBodies[slug] ?? [post.excerpt];

  return (
    <main className="min-h-screen app-shell section-wrapper">
      <article className="container-custom max-w-3xl py-24 space-y-6">
        <Link href="/blog" className="text-accent-400 text-sm font-semibold hover:underline">
          ← All posts
        </Link>
        <header>
          <time className="text-xs text-[var(--theme-text-muted)] uppercase tracking-widest">
            {post.date} · {post.readTime}
          </time>
          <h1 className="text-[var(--theme-text)] mt-3">{post.title}</h1>
          <p className="text-[var(--theme-text-muted)] mt-4">By Samrit Mukherjee</p>
        </header>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="!max-w-none text-[var(--theme-text-muted)]">
            {p}
          </p>
        ))}
      </article>
    </main>
  );
}
