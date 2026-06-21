import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samrit Mukherjee Portfolio",
    short_name: "Samrit Mukherjee",
    description: "Samrit Mukherjee — AI & ML Developer & Hackathon Winner portfolio showcasing high-performance web applications and AI-driven products.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#f59e0b",
    icons: [
      {
        src: "https://res.cloudinary.com/duxrcy3jn/image/upload/q_auto/f_auto/v1777463452/SAMRIT_FEBICON_hxnczn.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
