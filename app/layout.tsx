import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { LenisWrapper } from "@/components/LenisWrapper";
import PageLoader from "@/components/PageLoader";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-neue-montreal", // Re-using variable for consistency
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samrit Mukherjee | AI & Full Stack Developer Portfolio",
  description:
    "Samrit Mukherjee - Founder, educator, and AI developer specializing in building mission-driven AI tools and interactive web experiences. Explore projects like Cosmic Canvas and SUKALYA.ai.",
  keywords: ["Samrit Mukherjee", "AI Developer", "Full Stack Developer India", "Cosmic Canvas", "Portfolio OS", "Next.js Portfolio", "React Developer", "AI Education"],
  metadataBase: new URL("https://samrit.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/q_auto/f_auto/v1777463452/SAMRIT_FEBICON_hxnczn.png",
  },
  openGraph: {
    title: "Samrit Mukherjee - AI & Full Stack Developer",
    description:
      "Founder and AI developer building practical, mission-driven tech solutions.",
    type: "website",
    locale: "en_IN",
  },
  // RFC 8288 - Link Response Headers for Agent Discovery
  other: {
    "link": [
      '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
      '</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"',
      '</.well-known/mcp/server-card.json>; rel="mcp-server"; type="application/json"',
      '</api/health>; rel="status"; type="application/json"',
      '</sitemap.xml>; rel="sitemap"; type="application/xml"',
    ].join(', '),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-[var(--theme-bg)] transition-colors duration-500">
        <StyledComponentsRegistry>
          <PageLoader />
          <LenisWrapper>
            <div className="aurora-bg"></div>
            {children}
          </LenisWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

