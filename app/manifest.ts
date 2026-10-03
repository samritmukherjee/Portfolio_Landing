import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samrit Mukherjee Portfolio",
    short_name: "Samrit Mukherjee",
    description: "Samrit Mukherjee — AI & ML Developer & Hackathon Winner portfolio showcasing high-performance web applications and AI-driven products.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#35A7FF",
    icons: [
      {
        src: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791013135/Futuristic_S_M_Orbit_Emblem_refidi.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
