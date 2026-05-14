import { NextRequest, NextResponse } from 'next/server';
import { getVisitorCount, incrementVisitorCount } from '@/lib/redis';

/**
 * GET /api/visitors
 * Returns current visitor count from Redis
 */
export async function GET() {
  try {
    const count = await getVisitorCount();
    return NextResponse.json({ count, success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[API Error] GET /api/visitors failed:', errorMessage);
    return NextResponse.json(
      { count: 0, success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

/**
 * POST /api/visitors
 * Increments visitor count if visitor is new (within 24h window)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (typeof body?.isNewVisitor !== 'boolean') {
      return NextResponse.json(
        { success: false, error: 'Missing isNewVisitor boolean in request body' },
        { status: 400 }
      );
    }

    const { isNewVisitor } = body;
    const count = await getVisitorCount();

    if (isNewVisitor) {
      const newCount = await incrementVisitorCount();
      return NextResponse.json({
        count: newCount,
        incremented: true,
        success: true,
      });
    }

    return NextResponse.json({
      count,
      incremented: false,
      success: true,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[API Error] POST /api/visitors failed:', errorMessage);
    return NextResponse.json(
      { count: 0, success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
