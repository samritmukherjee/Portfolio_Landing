export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cosmic-canvas-architecture",
    title: "How I Built Cosmic Canvas — AI Design Tool Architecture",
    excerpt:
      "Layered canvas generation, prompt pipelines, and why editable output beats flat image exports.",
    date: "2026-03-15",
    readTime: "8 min",
  },
  {
    slug: "double-slash-4-win",
    title: "Winning Double Slash 4.0 — What We Built in 36 Hours",
    excerpt:
      "From 300+ teams to top 30 to winner: execution, scope control, and demo strategy.",
    date: "2026-02-20",
    readTime: "6 min",
  },
  {
    slug: "webmcp-nextjs",
    title: "Setting Up WebMCP in Next.js 16",
    excerpt:
      "Agent discovery on a personal portfolio — API catalog, skills index, and MCP server cards.",
    date: "2026-04-01",
    readTime: "10 min",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
