import { NextResponse } from 'next/server';

/**
 * RFC 9727 - API Catalog Discovery
 * Returns application/linkset+json format for automated API discovery
 * Agents can discover available APIs and their documentation
 */
export async function GET() {
  const baseUrl = 'https://samrit.dev';

  const catalog = {
    linkset: [
      {
        anchor: baseUrl,
        links: [
          {
            rel: 'service-doc',
            href: `${baseUrl}/#resume`,
            type: 'text/html',
            title: 'Portfolio Documentation',
          },
          {
            rel: 'service-desc',
            href: `${baseUrl}/.well-known/openapi.json`,
            type: 'application/json',
            title: 'OpenAPI Specification',
          },
          {
            rel: 'status',
            href: `${baseUrl}/api/health`,
            type: 'application/json',
            title: 'Health Status',
          },
        ],
      },
      {
        anchor: `${baseUrl}/api/visitors`,
        links: [
          {
            rel: 'service-doc',
            href: `${baseUrl}/#experience`,
            type: 'text/html',
            title: 'Visitor Tracking API',
          },
          {
            rel: 'service-desc',
            href: `${baseUrl}/.well-known/openapi.json#/paths/~1api~1visitors`,
            type: 'application/json',
          },
        ],
      },
    ],
  };

  return NextResponse.json(catalog, {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
