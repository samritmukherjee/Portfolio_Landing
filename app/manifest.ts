import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samrit Mukherjee | Portfolio",
    short_name: "Samrit.dev",
    description:
      "Samrit Mukherjee — AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner building intelligent software, enterprise platforms, and AI-powered products.",
    start_url: "/",
    display: "standalone",
    background_color: "#080F1E",
    theme_color: "#080F1E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
