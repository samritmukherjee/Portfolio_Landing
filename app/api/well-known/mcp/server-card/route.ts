import { NextResponse } from 'next/server';

/**
 * MCP Server Card Discovery (SEP-1649)
 * Enables AI agents to discover and connect to this site as an MCP server
 * Reference: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 */
export async function GET() {
  const serverCard = {
    $schema: 'https://schemas.anthropic.com/mcp/1.0/server-card.schema.json',
    serverInfo: {
      name: 'Samrit Portfolio Server',
      version: '1.0.0',
      description:
        'MCP Server providing portfolio information and project details for AI agents',
      author: 'Samrit Mukherjee',
      homepage: 'https://samrit.dev',
      repository: 'https://github.com/samritmukherjee/portfolio',
      license: 'MIT',
    },
    capabilities: {
      resources: [
        {
          uri: 'portfolio://projects',
          name: 'Projects',
          description: 'List of portfolio projects with descriptions',
          mimeType: 'application/json',
        },
        {
          uri: 'portfolio://skills',
          name: 'Skills',
          description: 'Technical skills and expertise areas',
          mimeType: 'application/json',
        },
        {
          uri: 'portfolio://experience',
          name: 'Experience',
          description: 'Professional experience and work history',
          mimeType: 'application/json',
        },
        {
          uri: 'portfolio://contact',
          name: 'Contact',
          description: 'Contact information and social profiles',
          mimeType: 'application/json',
        },
      ],
      tools: [
        {
          name: 'get_project_details',
          description: 'Get detailed information about a specific project',
          inputSchema: {
            type: 'object' as const,
            properties: {
              projectId: {
                type: 'string',
                description: 'The unique identifier of the project',
              },
            },
            required: ['projectId'],
          },
        },
        {
          name: 'search_projects',
          description: 'Search projects by technology, category, or keyword',
          inputSchema: {
            type: 'object' as const,
            properties: {
              query: {
                type: 'string',
                description: 'Search query',
              },
              category: {
                type: 'string',
                enum: ['ai', 'web', 'fullstack', 'mobile'],
                description: 'Project category filter',
              },
            },
            required: ['query'],
          },
        },
        {
          name: 'get_contact_info',
          description: 'Get contact information and social profiles',
          inputSchema: {
            type: 'object' as const,
            properties: {},
          },
        },
      ],
    },
    transport: {
      type: 'sse',
      url: 'https://samrit.dev/api/mcp/transport',
    },
  };

  return NextResponse.json(serverCard, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
