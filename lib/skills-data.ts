import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Layout,
  Lightbulb,
  Palette,
  Server,
  Wrench,
} from "lucide-react";

export type SkillCategoryId =
  | "languages"
  | "frontend"
  | "backend"
  | "aiml"
  | "tools"
  | "design"
  | "core";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  skills: string[];
  icon: LucideIcon;
  fullWidth?: boolean;
}

/** Source of truth: CV (June 2026) — no proficiency levels */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Prolog"],
    icon: Code2,
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: Layout,
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Flask", "FastAPI", "REST APIs", "SQL"],
    icon: Server,
  },
  {
    id: "aiml",
    label: "AI / ML",
    skills: ["NumPy", "Pandas", "LLM APIs", "RAG Systems"],
    icon: Brain,
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "AWS", "Razorpay"],
    icon: Wrench,
  },
  {
    id: "design",
    label: "Design & Media",
    skills: ["Figma", "Canva", "Adobe Photoshop", "Filmora", "UI/UX"],
    icon: Palette,
  },
  {
    id: "core",
    label: "Core Concepts",
    skills: ["DSA", "AI Systems", "Full Stack Engineering", "Product Development"],
    icon: Lightbulb,
    fullWidth: true,
  },
];
