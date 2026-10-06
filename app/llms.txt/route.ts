const LLMS_CONTENT = `# llms.txt — Samrit Mukherjee

site: https://samrit.dev
name: Samrit Mukherjee
role: AI Systems Engineer & Full-Stack Developer
location: Kolkata, India
contact: samritmukherjee05@gmail.com

## Summary
Samrit Mukherjee is a B.Tech Computer Science and Engineering student specializing in AI & ML at Meghnad Saha Institute of Technology (MSIT), Kolkata (graduating 2027), 11× hackathon winner, and full-stack engineer building AI systems, scalable software, and enterprise platforms. Portfolio at https://samrit.dev.

## Core skills
- AI/ML & Systems: LLM APIs, Agentic AI, RAG pipelines, Semantic Search, Vector DBs, Computer Vision, Python
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design
- Backend & Cloud: Node.js, Flask, FastAPI, REST APIs, SQL, MongoDB Atlas, Firebase, Docker, Vercel

## Featured projects
- Cosmic Canvas — AI-powered design platform (https://cosmic-canvas-delta.vercel.app/)
- SUKALYA.ai — AI health guidance system (https://sukalya-ai.vercel.app/)
- Portfolio OS — Operating-system-inspired portfolio (https://samrit.dev/portfolio-os)
- Avento AI — Multi-tenant RAG customer support SaaS (https://www.avento-ai.xyz/)
- Custodian — Asset management & administrative platform (https://custodian-mlzs.vercel.app/)

## APIs
- Projects: https://samrit.dev/api/v1/projects
- Skills: https://samrit.dev/api/skills
- Contact: https://samrit.dev/api/contact
- Health: https://samrit.dev/api/health

## Social
- GitHub: https://github.com/samritmukherjee
- LinkedIn: https://www.linkedin.com/in/samrit-mukherjee/

## Availability
Available for software engineering roles, enterprise systems development, and AI engineering collaborations. Response within 24–48 hours.
`;

export async function GET() {
  return new Response(LLMS_CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
