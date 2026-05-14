import { NextResponse, NextRequest } from 'next/server';

/**
 * Middleware for Markdown for Agents support (Accept: text/markdown)
 * Enables agents to request markdown versions of content
 */
export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';

  // If agent requests markdown, add custom header
  if (accept.includes('text/markdown')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-agent-markdown-support', 'true');
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*', '/:path*'],
};
