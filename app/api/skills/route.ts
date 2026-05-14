import { NextResponse, NextRequest } from 'next/server';

/**
 * GET /api/skills
 * Returns portfolio skills and expertise with markdown support
 */
export async function GET(request: NextRequest) {
  const markdown = request.headers.get('accept')?.includes('text/markdown');

  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Canvas API',
    ],
    backend: [
      'Node.js',
      'Python',
      'Flask',
      'FastAPI',
      'REST APIs',
      'Redis',
      'SQL',
      'MongoDB',
    ],
    programming: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C/C++',
      'Rust',
    ],
    aiml: [
      'Machine Learning',
      'Deep Learning',
      'LLMs',
      'RAG Systems',
      'NumPy',
      'Pandas',
      'TensorFlow',
    ],
    tools: [
      'Git',
      'GitHub',
      'Vercel',
      'AWS',
      'Docker',
      'Figma',
      'VS Code',
    ],
    design: [
      'UI/UX Design',
      'Figma',
      'Adobe Photoshop',
      'Adobe After Effects',
      'Responsive Design',
      'Accessibility',
    ],
  };

  if (markdown) {
    const markdown_content = `# Technical Skills & Expertise

## Frontend Development
- ${skills.frontend.join('\n- ')}

## Backend Development
- ${skills.backend.join('\n- ')}

## Programming Languages
- ${skills.programming.join('\n- ')}

## AI & Machine Learning
- ${skills.aiml.join('\n- ')}

## Tools & Platforms
- ${skills.tools.join('\n- ')}

## Design & UX
- ${skills.design.join('\n- ')}
`;

    return new NextResponse(markdown_content, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
      },
    });
  }

  return NextResponse.json(skills, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
