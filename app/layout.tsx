import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "@/styles/globals.css";
import { LenisWrapper } from "@/components/LenisWrapper";
import PageLoader from "@/components/PageLoader";
import StyledComponentsRegistry from "@/lib/registry";
import { JsonLd } from "@/components/JsonLd";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BlobGooFilter } from "@/components/ui/BlobButton";
import { CustomCursor } from "@/components/ui/CustomCursor";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteTitle = "Samrit Mukherjee | AI Systems & Full-Stack Engineering";
const siteDescription =
  "Portfolio of Samrit Mukherjee, an AI systems and full-stack engineer in Kolkata, India. Building intelligent software, scalable platforms, and AI products.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Samrit Mukherjee",
  },
  description: siteDescription,
  authors: [{ name: "Samrit Mukherjee", url: "https://samrit.dev" }],
  creator: "Samrit Mukherjee",
  publisher: "Samrit Mukherjee",
  keywords: [
    "Samrit Mukherjee",
    "Samrit Mukherjee Portfolio",
    "AI Systems Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Agentic AI",
    "RAG Systems",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
    "Cosmic Canvas",
    "SUKALYA.ai",
    "Avento AI",
    "Custodian",
    "Kolkata Developer",
  ],
  metadataBase: new URL("https://samrit.dev"),
  alternates: {
    canonical: "https://samrit.dev/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://samrit.dev/",
    siteName: "Samrit Mukherjee",
    images: [
      {
        url: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
        width: 1200,
        height: 630,
        alt: "Samrit Mukherjee — AI Systems Engineer & Full-Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg"],
  },
  other: {
    link: [
      '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
      '</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"',
      '</.well-known/mcp/server-card.json>; rel="mcp-server"; type="application/json"',
      '</api/health>; rel="status"; type="application/json"',
      '</sitemap.xml>; rel="sitemap"; type="application/xml"',
      '</llms.txt>; rel="llms"; type="text/plain"',
    ].join(", "),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const availabilityStatus =
    process.env.AVAILABILITY_STATUS === "Busy" ? "Busy" : "Available";

  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=sessionStorage.getItem("samrit_session_theme");var t=s?localStorage.getItem("samrit_theme")||"light":"light";sessionStorage.setItem("samrit_session_theme",t);localStorage.setItem("samrit_theme",t);document.documentElement.setAttribute("data-theme",t);if(t==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){document.documentElement.setAttribute("data-theme","light");document.documentElement.classList.remove("dark");}})();`,
          }}
        />
      </head>
      <body className="bg-[var(--theme-bg)] transition-colors duration-500 overflow-x-hidden selection:bg-primary selection:text-white">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <BlobGooFilter />
        <CustomCursor />
        <JsonLd />
        <SiteAnalytics />
        <SpeedInsights />
        <StyledComponentsRegistry>
          <PageLoader />
          <LenisWrapper>
            <div id="main">{children}</div>
          </LenisWrapper>
        </StyledComponentsRegistry>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__AVAILABILITY_STATUS__=${JSON.stringify(availabilityStatus)};`,
          }}
        />
      </body>
    </html>
  );
}
