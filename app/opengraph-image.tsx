import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Samrit Mukherjee — AI & ML Developer · Hackathon Winner · MSIT Student";
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
          background: "linear-gradient(135deg, #0b0c10 0%, #0f1a14 50%, #0b0c10 100%)",
          color: "#f5f7fb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "linear-gradient(135deg, #4f7cff, #2a46b3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            SM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, opacity: 0.7, letterSpacing: 4 }}>
              SAMRIT.DEV
            </span>
            <span style={{ fontSize: 18, color: "#8fa4fb" }}>Kolkata, India</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Samrit Mukherjee
          </div>
          <div style={{ fontSize: 32, color: "#b6bcc7", maxWidth: 800 }}>
            AI & ML Developer · Hackathon Winner · MSIT Student
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 20, color: "#8fa4fb" }}>
          <span>Next.js</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>Open to work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
