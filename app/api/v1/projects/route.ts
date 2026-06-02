import { NextResponse, NextRequest } from "next/server";
import { projectsData, API_CACHE_HEADERS } from "@/lib/projects-data";

/**
 * GET /api/v1/projects — versioned projects API for agents & LLM crawlers
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");
  const markdown = request.headers.get("accept")?.includes("text/markdown");

  let filtered = projectsData;
  if (category) {
    filtered = projectsData.filter((p) => p.category === category);
  }

  if (markdown) {
    const markdown_content = `# Portfolio Projects

${filtered
  .map(
    (p) => `
## ${p.title}

**Category:** ${p.category}
**Created:** ${p.dateCreated}
**Author:** ${p.author}
**Keywords:** ${p.keywords.join(", ")}

**Description:** ${p.description}

**Outcome:** ${p.outcome}

**Technologies:** ${p.technologies.join(", ")}

**Link:** [${p.title}](${p.link})

---
`
  )
  .join("\n")}`;

    return new NextResponse(markdown_content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        ...API_CACHE_HEADERS,
      },
    });
  }

  return NextResponse.json(filtered, {
    headers: {
      "Content-Type": "application/json",
      ...API_CACHE_HEADERS,
    },
  });
}
