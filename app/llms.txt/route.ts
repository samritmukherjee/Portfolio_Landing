const LLMS_CONTENT = `# llms.txt — Samrit Mukherjee

site: https://samrit.dev
name: Samrit Mukherjee
role: AI & ML Developer
location: Kolkata, India
contact: samritmukherjee05@gmail.com

## Summary
Samrit Mukherjee is a BTech Computer Science & Engineering (AI & ML) student at Meghnad Saha Institute of Technology (MSIT), 8× hackathon winner, and AI & ML Developer building AI-powered products. Portfolio at https://samrit.dev.

## Core skills
- AI/ML: LLM integration, AI product prototyping, Python
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, REST APIs, SQL

## Featured projects
- Cosmic Canvas — AI design tool (https://cosmic-canvas-delta.vercel.app/)
- SUKALYA.ai — AI health assistant (https://sukalya-ai.vercel.app/)
- Portfolio OS — Interactive portfolio (https://samrit.dev/portfolio-os)

## APIs
- Projects: https://samrit.dev/api/v1/projects
- Skills: https://samrit.dev/api/skills
- Contact: https://samrit.dev/api/contact
- Health: https://samrit.dev/api/health

## Social
- GitHub: https://github.com/samritmukherjee
- LinkedIn: https://www.linkedin.com/in/samrit-mukherjee-412788318/

## Availability
Open to full-time, contract, freelance, and consulting. Response within 24–48 hours.
`;

export async function GET() {
  return new Response(LLMS_CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
