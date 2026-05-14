import { NextResponse } from 'next/server';

/**
 * Health check endpoint for agent discovery
 * Returns service status and availability
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Samrit Portfolio',
      version: '1.0.0',
      uptime: process.uptime(),
    },
    {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
      },
    }
  );
}
