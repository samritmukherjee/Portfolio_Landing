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

const siteDescription =
  "Samrit Mukherjee — AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner. Building intelligent, scalable software, enterprise systems, and AI-powered products.";

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
  title: "Samrit Mukherjee | AI Systems, Full-Stack Engineering & 11× Hackathon Winner",
  description: siteDescription,
  authors: [{ name: "Samrit Mukherjee", url: "https://samrit.dev" }],
  creator: "Samrit Mukherjee",
  publisher: "Samrit Mukherjee",
  keywords: [
    "Samrit Mukherjee",
    "Samrit Mukherjee AI ML",
    "Samrit Mukherjee MSIT",
    "Samrit Mukherjee Hackathon",
    "Samrit Mukherjee Developer",
    "Samrit Mukherjee Portfolio",
    "Samrit Mukherjee Hackathon Winner",
    "Product Engineering",
    "Enterprise Systems",
    "AI Systems Engineer",
    "Full Stack Developer India",
    "Kolkata Developer",
    "Cosmic Canvas",
    "SUKALYA.ai",
    "Portfolio OS",
    "Avento AI",
    "Custodian",
  ],
  metadataBase: new URL("https://samrit.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png",
    shortcut: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png",
    apple: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png",
  },
  openGraph: {
    title: "Samrit Mukherjee | AI Systems, Full-Stack Engineering & 11× Hackathon Winner",
    description: siteDescription,
    url: "https://samrit.dev",
    siteName: "Samrit Mukherjee",
    images: [
      {
        url: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
        width: 1200,
        height: 630,
        alt: "Samrit Mukherjee — AI Systems Engineer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samrit Mukherjee | AI Systems & Full-Stack Engineer",
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
      <body className="bg-[var(--theme-bg)] transition-colors duration-500 overflow-x-hidden selection:bg-[#FF0000] selection:text-white">
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
