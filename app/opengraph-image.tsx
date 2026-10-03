import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Samrit Mukherjee — AI Systems Engineer & 11× Hackathon Winner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 10% 20%, #170707 0%, #050505 60%, #000000 100%)",
          color: "#f5f5f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: "linear-gradient(135deg, #FF0000 0%, #990000 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
                boxShadow: "0 8px 30px rgba(255, 0, 0, 0.3)",
              }}
            >
              SM
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, color: "#ffffff" }}>
                SAMRIT.DEV
              </span>
              <span style={{ fontSize: 16, color: "#a3a3a3" }}>Kolkata, India</span>
            </div>
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: 30,
              border: "1px solid rgba(255, 0, 0, 0.4)",
              background: "rgba(255, 0, 0, 0.1)",
              color: "#ff4d4d",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            11× Hackathon Winner
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#ffffff" }}>
            Samrit Mukherjee
          </div>
          <div style={{ fontSize: 30, color: "#d4d4d4", maxWidth: 900, fontWeight: 500 }}>
            AI Systems • Full-Stack Engineering • Product Development
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 18, color: "#a3a3a3", fontWeight: 600 }}>
          <span>Next.js</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Agentic AI & RAG</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
