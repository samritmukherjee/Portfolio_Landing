export type Proficiency = "Learning" | "Proficient" | "Expert";

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
    link: "/portfolio-os",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png",
    dateCreated: "2026-01-20",
    author: "Samrit Mukherjee",
    keywords: ["portfolio", "creative dev", "interaction design"],
  },
];

/** Maps skill names to project ids for "Used in" linking */
export const skillProjectMap: Record<string, string[]> = {
  "Next.js": ["cosmic-canvas", "sukalya-ai", "portfolio-os"],
  React: ["cosmic-canvas", "sukalya-ai", "portfolio-os"],
  TypeScript: ["sukalya-ai", "portfolio-os"],
  Python: ["sukalya-ai"],
  "Framer Motion": ["portfolio-os"],
  "Tailwind CSS": ["cosmic-canvas", "sukalya-ai", "portfolio-os"],
  "OpenAI API": ["cosmic-canvas"],
  "Claude API": ["sukalya-ai"],
  "AI Systems": ["cosmic-canvas", "sukalya-ai"],
};

export const API_CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};
