import { NextResponse, NextRequest } from 'next/server';

// Portfolio projects data
const projects = [
  {
    id: 'cosmic-canvas',
    title: 'Cosmic Canvas',
    description:
      'An advanced AI design tool that generates fully editable, layered designs from natural language prompts',
    category: 'ai',
    technologies: ['Next.js', 'React', 'OpenAI API', 'Canvas API', 'Tailwind CSS'],
    link: 'https://cosmic-canvas-delta.vercel.app/',
    image:
      'https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133961/cosmic-canvas_dbmi8b.png',
  },
  {
    id: 'sukalya-ai',
    title: 'SUKALYA.ai',
    description:
      'AI-powered health assistant that improves healthcare accessibility through symptom understanding and preventive guidance',
    category: 'ai',
    technologies: ['Next.js', 'React', 'Claude API', 'TypeScript', 'Tailwind CSS'],
    link: 'https://sukalya-ai.vercel.app/',
    image:
      'https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133963/sukalya-ai_uguskw.png',
  },
  {
    id: 'portfolio-os',
    title: 'Portfolio OS',
    description: 'Interactive operating system-inspired portfolio experience with animations and transitions',
    category: 'web',
    technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://samrit.dev/portfolio-os',
    image:
      'https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png',
  },
];

/**
 * GET /api/projects
 * Returns portfolio projects with optional filtering
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const markdown = request.headers.get('accept')?.includes('text/markdown');

  let filtered = projects;
  if (category) {
    filtered = projects.filter((p) => p.category === category);
  }

  if (markdown) {
    // Return as Markdown for Agents
    const markdown_content = `# Portfolio Projects

${filtered
  .map(
    (p) => `
## ${p.title}

**Category:** ${p.category}

**Description:** ${p.description}

**Technologies:** ${p.technologies.join(', ')}

**Link:** [${p.title}](${p.link})

---
`
  )
  .join('\n')}`;

    return new NextResponse(markdown_content, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  return NextResponse.json(filtered, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
