import { NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * Agent Skills Discovery Index (RFC v0.2.0)
 * Enables automated agent discovery and capability loading
 * Reference: https://github.com/cloudflare/agent-skills-discovery-rfc
 */
export async function GET() {
  const baseUrl = 'https://samrit.dev';

  // Compute SHA256 digest for skill content
  const skillsIndex = {
    $schema: 'https://schemas.agentskills.io/v1/skills-index.schema.json',
    version: '1.0.0',
    title: 'Samrit Mukherjee - Portfolio Agent Skills',
    description: 'Agent skills for portfolio exploration and project discovery',
    skills: [
      {
        name: 'portfolio-explorer',
        type: 'action',
        description: 'Browse portfolio projects, experience, and skills',
        url: `${baseUrl}/#projects`,
        category: 'portfolio',
        sha256: crypto
          .createHash('sha256')
          .update('portfolio-explorer-skill')
          .digest('hex'),
      },
      {
        name: 'contact-discovery',
        type: 'action',
        description:
          'Get contact information and social profiles for networking',
        url: `${baseUrl}/#contact`,
        category: 'contact',
        sha256: crypto
          .createHash('sha256')
          .update('contact-discovery-skill')
          .digest('hex'),
      },
      {
        name: 'resume-access',
        type: 'action',
        description: 'Download and view professional resume and experience',
        url: `${baseUrl}/#resume`,
        category: 'professional',
        sha256: crypto
          .createHash('sha256')
          .update('resume-access-skill')
          .digest('hex'),
      },
      {
        name: 'project-details',
        type: 'query',
        description: 'Query detailed information about specific projects',
        url: `${baseUrl}/api/projects`,
        category: 'portfolio',
        sha256: crypto
          .createHash('sha256')
          .update('project-details-skill')
          .digest('hex'),
      },
    ],
  };

  return NextResponse.json(skillsIndex, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
