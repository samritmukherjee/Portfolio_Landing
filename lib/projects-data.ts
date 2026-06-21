
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  outcome: string;
  category: string;
  technologies: string[];
  link: string;
  github?: string;
  image: string;
  dateCreated: string;
  author: string;
  keywords: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "cosmic-canvas",
    title: "Cosmic Canvas",
    description:
      "An advanced AI design tool that generates fully editable, layered designs from natural language prompts.",
    outcome: "500+ designs generated in week 1",
    category: "ai",
    technologies: ["Next.js", "React", "OpenAI API", "Canvas API", "Tailwind CSS"],
    link: "https://cosmic-canvas-delta.vercel.app/",
    github: "https://github.com/samritmukherjee",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133961/cosmic-canvas_dbmi8b.png",
    dateCreated: "2025-11-01",
    author: "Samrit Mukherjee",
    keywords: ["AI design", "generative UI", "Next.js"],
  },
  {
    id: "sukalya-ai",
    title: "SUKALYA.ai",
    description:
      "AI-powered health assistant improving accessibility through symptom understanding and preventive guidance.",
    outcome: "Interactive health guidance at scale",
    category: "ai",
    technologies: ["Next.js", "React", "Claude API", "TypeScript", "Tailwind CSS"],
    link: "https://sukalya-ai.vercel.app/",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133963/sukalya-ai_uguskw.png",
    dateCreated: "2025-09-15",
    author: "Samrit Mukherjee",
    keywords: ["healthtech", "AI chat", "accessibility"],
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS",
    description:
      "Browser-based operating system showcasing projects through multi-window UI and terminal simulation.",
    outcome: "Immersive portfolio experience on samrit.dev",
    category: "web",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    link: "https://samrit-portfolio-os.vercel.app/",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png",
    dateCreated: "2026-01-20",
    author: "Samrit Mukherjee",
    keywords: ["portfolio", "creative dev", "interaction design"],
  },
  {
    id: "more-projects-coming-soon",
    title: "3 More Projects Coming Soon",
    description:
      "I'm constantly designing and building new tools to solve real-world problems. Keep an eye out for upcoming projects in AI, full stack systems, and developer tooling.",
    outcome: "Active research & design phase",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "/portfolio-os",
    image: "/coming_soon.png",
    dateCreated: "2026-06-18",
    author: "Samrit Mukherjee",
    keywords: ["upcoming", "future projects", "coming soon"],
  },
];


export const API_CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};
