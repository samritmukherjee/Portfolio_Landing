import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Resume.pdf",
      },
      {
        source: "/.well-known/api-catalog",
        destination: "/api/well-known/api-catalog",
      },
      {
        source: "/.well-known/agent-skills/index.json",
        destination: "/api/well-known/agent-skills-index",
      },
      {
        source: "/.well-known/mcp/server-card.json",
        destination: "/api/well-known/mcp/server-card",
      },
      {
        source: "/.well-known/openapi.json",
        destination: "/api/well-known/openapi",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
