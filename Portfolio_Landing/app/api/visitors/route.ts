import { NextRequest, NextResponse } from 'next/server';
import { getVisitorCount, incrementVisitorCount } from '@/lib/redis';

const DEBUG_REDIS = process.env.DEBUG_REDIS === 'true';

/**
 * GET /api/visitors
 * Returns current visitor count
 * 
 * Response:
 * { count: number, success: boolean }
 */
export async function GET() {
  try {
    const count = await getVisitorCount();

    if (DEBUG_REDIS) {
      console.log('[API] GET /api/visitors -> count:', count);
    }

    return NextResponse.json({ count, success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[API Error] GET /api/visitors failed:', errorMessage);

    if (DEBUG_REDIS) {
      console.error('[API Debug] Full error:', error);
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

/**
 * POST /api/visitors
 * Increments visitor count if visitor is new (within 24h window)
 * 
 * Body: { isNewVisitor: boolean }
 * 
 * Response:
 * { count: number, incremented: boolean, success: boolean }
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

    let count = await getVisitorCount();
    let incremented = false;

    if (isNewVisitor) {
      count = await incrementVisitorCount();
      incremented = true;

      if (DEBUG_REDIS) {
        console.log('[API] POST /api/visitors -> New visitor, incremented to:', count);
      }
    } else if (DEBUG_REDIS) {
      console.log('[API] POST /api/visitors -> Returning count (not new visitor):', count);
    }

    return NextResponse.json({
      count,
      incremented,
      success: true,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[API Error] POST /api/visitors failed:', errorMessage);

    if (DEBUG_REDIS) {
      console.error('[API Debug] Full error:', error);
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
