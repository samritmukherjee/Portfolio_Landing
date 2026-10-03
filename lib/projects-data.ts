export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  image: string;
  category?: string;
  dateCreated?: string;
  author?: string;
  keywords?: string[];
  outcome?: string;
  isUpcoming?: boolean;
}

export const projectsData: ProjectData[] = [
  {
    id: "cosmic-canvas",
    title: "Cosmic Canvas",
    subtitle: "AI-Powered Design Platform",
    description:
      "Transforms natural-language prompts into editable visual compositions, combining generative AI with interactive design capabilities.",
    technologies: ["Next.js", "React", "OpenAI API", "Canvas API", "Tailwind CSS"],
    link: "https://cosmic-canvas-delta.vercel.app/",
    github: "https://github.com/samritmukherjee",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133961/cosmic-canvas_dbmi8b.png",
    category: "ai",
    dateCreated: "2025",
    author: "Samrit Mukherjee",
    keywords: ["AI Design", "Generative AI", "Canvas API", "Next.js"],
    outcome: "Best Beginner's Team Track Winner — Hello World Hacks",
  },
  {
    id: "sukalya-ai",
    title: "SUKALYA.ai",
    subtitle: "AI Health Guidance System",
    description:
      "An AI-powered health guidance application making healthcare information accessible through conversational interaction, symptom understanding, and preventive guidance.",
    technologies: ["HTML", "CSS", "JavaScript", "SQL", "Python"],
    link: "https://sukalya-ai.vercel.app/",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133963/sukalya-ai_uguskw.png",
    category: "ai",
    dateCreated: "2026",
    author: "Samrit Mukherjee",
    keywords: ["Healthcare AI", "NLP", "Conversational AI", "Python"],
    outcome: "Global Top 106 — Google Solution Challenge 2026",
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS",
    subtitle: "Interactive Web Experience",
    description:
      "An interactive, operating-system-inspired portfolio that presents projects and information through a digital workspace with desktop interfaces and window management.",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    link: "https://samrit-portfolio-os.vercel.app/",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png",
    category: "web",
    dateCreated: "2026",
    author: "Samrit Mukherjee",
    keywords: ["Web OS", "Interactive UI", "Framer Motion", "Next.js"],
    outcome: "Full-Featured Web OS Architecture with Multi-Window Management",
  },
  {
    id: "avento-ai",
    title: "Avento AI",
    subtitle: "Multi-Tenant AI Customer Support SaaS",
    description:
      "A multi-tenant, RAG-powered customer support platform that transforms business documents and website content into context-aware AI assistants embeddable without writing code.",
    technologies: ["Next.js", "Node.js", "MongoDB Atlas", "Pinecone", "OpenRouter", "LangChain"],
    link: "https://www.avento-ai.xyz/",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290758/WhatsApp_Image_2026-07-06_at_3.56.16_AM_ltb6sl.jpg",
    category: "ai",
    dateCreated: "2026",
    author: "Samrit Mukherjee",
    keywords: ["RAG Systems", "Multi-Tenant SaaS", "Pinecone", "LangChain"],
    outcome: "Best Startup Track Winner — Synchronicity 2.0",
  },
  {
    id: "custodian",
    title: "Custodian",
    subtitle: "Asset Management & Administrative Platform",
    description:
      "A web-based asset management platform designed to streamline inventory tracking, requests, approvals, issue-return workflows, and accountability across user roles.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "SQL"],
    link: "https://custodian-mlzs.vercel.app/",
    image:
      "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791013160/Screenshot_2026-10-03_123913_hzru2f.png",
    category: "web",
    dateCreated: "2025",
    author: "Samrit Mukherjee",
    keywords: ["ERP Systems", "Role-Based Access Control", "Asset Management", "SQL"],
    outcome: "Production Enterprise Infrastructure for Institutional Operations",
  },
  {
    id: "coming-soon",
    title: "3 More Projects Coming Soon",
    subtitle: "Active Engineering & Prototyping",
    description:
      "Three additional projects in agentic workflows, automation, and computer vision will be revealed as they are ready to be featured.",
    technologies: ["AI Systems", "Full-Stack", "Computer Vision", "Automation"],
    link: "#contact",
    image: "/coming_soon.png",
    category: "ai",
    dateCreated: "2026",
    author: "Samrit Mukherjee",
    keywords: ["Agentic AI", "Computer Vision", "Automation"],
    outcome: "In Active Development",
    isUpcoming: true,
  },
];

export const API_CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};
