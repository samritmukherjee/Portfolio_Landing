import { NextResponse, NextRequest } from "next/server";
import { skillCategories } from "@/lib/skills-data";
import { API_CACHE_HEADERS } from "@/lib/projects-data";

/**
 * GET /api/skills — portfolio skills (CV-aligned, no proficiency levels)
 */
export async function GET(request: NextRequest) {
  const markdown = request.headers.get("accept")?.includes("text/markdown");

  const skills = Object.fromEntries(
    skillCategories.map((cat) => [cat.id, cat.skills])
  );

  if (markdown) {
    const markdown_content = `# Technical Skills

${skillCategories
  .map(
    (cat) => `## ${cat.label}
- ${cat.skills.join("\n- ")}`
  )
  .join("\n\n")}
`;

    return new NextResponse(markdown_content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        ...API_CACHE_HEADERS,
      },
    });
  }

  return NextResponse.json(skills, {
    headers: {
      "Content-Type": "application/json",
      ...API_CACHE_HEADERS,
    },
  });
}
