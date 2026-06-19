import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "@/styles/globals.css";
import { LenisWrapper } from "@/components/LenisWrapper";
import PageLoader from "@/components/PageLoader";
import { BlobGooFilter } from "@/components/ui/BlobButton";
import StyledComponentsRegistry from "@/lib/registry";
import { JsonLd } from "@/components/JsonLd";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  "Samrit Mukherjee — BTech CS/AI student, 3× hackathon winner, and full stack developer building AI-powered products. Based in Kolkata. Available for projects.";

export const metadata: Metadata = {
  title: "Samrit Mukherjee | AI Engineer & Full Stack Developer | Kolkata",
  description: siteDescription,
  keywords: [
    "Samrit Mukherjee",
    "Samrit Mukherjee developer",
    "AI Developer Kolkata",
    "Full Stack Developer India",
    "Cosmic Canvas",
    "Portfolio OS",
    "Next.js Portfolio",
    "React Developer",
  ],
  metadataBase: new URL("https://samrit.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/q_auto/f_auto/v1777463452/SAMRIT_FEBICON_hxnczn.png",
  },
  openGraph: {
    title: "Samrit Mukherjee — AI Engineer & Full Stack Developer",
    description: siteDescription,
    url: "https://samrit.dev",
    siteName: "Samrit Mukherjee",
    images: [
      {
        url: "https://samrit.dev/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samrit Mukherjee — AI Engineer",
    description: siteDescription,
    images: ["https://samrit.dev/opengraph-image"],
    creator: "@samritmukherjee",
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
      <body className="bg-[var(--theme-bg)] transition-colors duration-500">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <SiteAnalytics />
        <SpeedInsights />
        <StyledComponentsRegistry>
          <BlobGooFilter />
          <PageLoader />
          <LenisWrapper>
            <div className="aurora-bg" aria-hidden="true" />
            <div id="main">{children}</div>
          </LenisWrapper>
        </StyledComponentsRegistry>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__AVAILABILITY_STATUS__=${JSON.stringify(availabilityStatus)};`,
          }}
        />
        <script
          src={process.env.NEXT_PUBLIC_AVENTO_BOT_URL}
          data-key={process.env.NEXT_PUBLIC_AVENTO_BOT_KEY}
          async
        ></script>
      </body>
    </html>
  );
}
