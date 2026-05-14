import { NextResponse, NextRequest } from 'next/server';

/**
 * OpenAPI 3.0 Specification for Portfolio APIs
 * Enables automated agent discovery and integration
 */
export async function GET(request: NextRequest) {
  const baseUrl = 'https://samrit.dev';

  const openapi = {
    openapi: '3.0.0',
    info: {
      title: 'Samrit Portfolio API',
      version: '1.0.0',
      description:
        'API for portfolio information, projects, and visitor tracking',
      contact: {
        name: 'Samrit Mukherjee',
        url: baseUrl,
        email: 'samritmukherjee05@gmail.com',
      },
      license: {
        name: 'MIT',
      },
    },
    servers: [
      {
        url: baseUrl,
        description: 'Production',
      },
    ],
    paths: {
      '/api/health': {
        get: {
          summary: 'Health Check',
          description: 'Check if the service is healthy',
          tags: ['System'],
          responses: {
            '200': {
              description: 'Service is healthy',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: { type: 'string', example: 'healthy' },
                      timestamp: { type: 'string', format: 'date-time' },
                      service: { type: 'string', example: 'Samrit Portfolio' },
                      version: { type: 'string', example: '1.0.0' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/api/visitors': {
        get: {
          summary: 'Get Visitor Count',
          description: 'Retrieve the current portfolio visitor count',
          tags: ['Analytics'],
          responses: {
            '200': {
              description: 'Current visitor count',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      count: { type: 'number', example: 150 },
                      success: { type: 'boolean', example: true },
                    },
                  },
                },
              },
            },
            '500': {
              description: 'Server error',
            },
          },
        },
        post: {
          summary: 'Record Visitor',
          description: 'Record a new visitor if within 24h window',
          tags: ['Analytics'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    isNewVisitor: {
                      type: 'boolean',
                      example: true,
                    },
                  },
                  required: ['isNewVisitor'],
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Visitor recorded',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      count: { type: 'number' },
                      incremented: { type: 'boolean' },
                      success: { type: 'boolean' },
                    },
                  },
                },
              },
            },
            '400': {
              description: 'Missing required parameters',
            },
            '500': {
              description: 'Server error',
            },
          },
        },
      },
      '/api/projects': {
        get: {
          summary: 'Get Projects',
          description: 'Retrieve portfolio projects information',
          tags: ['Portfolio'],
          parameters: [
            {
              name: 'category',
              in: 'query',
              schema: { type: 'string', enum: ['ai', 'web', 'fullstack'] },
            },
          ],
          responses: {
            '200': {
              description: 'List of projects',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        category: { type: 'string' },
                        link: { type: 'string', format: 'uri' },
                        image: { type: 'string', format: 'uri' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Project: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Unique project identifier' },
            title: { type: 'string', description: 'Project name' },
            description: { type: 'string' },
            category: { type: 'string', enum: ['ai', 'web', 'fullstack'] },
            technologies: { type: 'array', items: { type: 'string' } },
            link: { type: 'string', format: 'uri' },
            image: { type: 'string', format: 'uri' },
          },
        },
      },
    },
  };

  return NextResponse.json(openapi, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
