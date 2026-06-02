import { NextResponse, NextRequest } from "next/server";

const API_CACHE = "public, s-maxage=3600, stale-while-revalidate=86400";

/**
 * Middleware: markdown negotiation for agents + cache headers on public APIs
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = request.headers.get("accept") || "";

  if (pathname.startsWith("/api/")) {
    const response = accept.includes("text/markdown")
      ? NextResponse.next({
          request: {
            headers: (() => {
              const h = new Headers(request.headers);
              h.set("x-agent-markdown-support", "true");
              return h;
            })(),
          },
        })
      : NextResponse.next();

    if (
      pathname.startsWith("/api/projects") ||
      pathname.startsWith("/api/v1/") ||
      pathname.startsWith("/api/skills") ||
      pathname.startsWith("/api/contact") ||
      pathname.startsWith("/api/health")
    ) {
      response.headers.set("Cache-Control", API_CACHE);
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
