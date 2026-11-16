# Samrit Mukherjee — Personal Portfolio

Production personal portfolio and engineering showcase for **Samrit Mukherjee** — AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner.

🌐 **Production Website**: [https://samrit.dev](https://samrit.dev)

---

## 1. Overview

The website delivers a high-performance personal portfolio landing page with interactive showcases, a dynamic dual-theme system (Dark `#080F1E` vs Light `#F8FAFC`), physics-based smooth scrolling, real-time accolades with photo reveals, a live global visitor counter, and direct zero-redirect delivery of the official resume.

---

## 2. Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Server Components) |
| **Language & Runtime** | [TypeScript 5](https://www.typescriptlang.org/), [React 18](https://react.dev/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/), CSS Custom Properties (Tokens) |
| **Component Registry** | [styled-components v6](https://styled-components.com/) (SSR registry for Star Wars theme toggle) |
| **Animations & Scroll** | [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll), [GSAP 3](https://greensock.com/gsap/) (Ticker loop), [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Visitor Counter** | [Redis](https://redis.io/) (`redis` client) via Upstash |
| **Contact Form** | [@formspree/react](https://formspree.io/) |
| **Performance** | [@vercel/speed-insights](https://vercel.com/analytics) |
| **Media Delivery** | [Cloudinary CDN](https://cloudinary.com/) (dynamic format & dimensions) |
| **Deployment Target** | [Vercel](https://vercel.com/) |

---

## 3. Project Structure

```text
├── app/
│   ├── api/
│   │   ├── contact/route.ts        # GET contact details (JSON + Markdown negotiation)
│   │   ├── health/route.ts         # GET service uptime & health check
│   │   ├── projects/route.ts       # GET canonical projects array
│   │   ├── skills/route.ts         # GET categorized skills hierarchy
│   │   ├── v1/projects/route.ts    # Versioned REST API with query filtering
│   │   ├── visitors/route.ts       # GET & POST Redis visitor counter
│   │   └── well-known/             # RFC 9727, WebMCP, and OpenAPI discovery endpoints
│   ├── layout.tsx                  # Root layout (fonts, metadata, analytics, theme init)
│   ├── manifest.ts                 # Web App Manifest (/manifest.webmanifest)
│   ├── opengraph-image.tsx         # Edge-rendered dynamic social card (1200×630)
│   ├── page.tsx                    # Landing page composed of 9 active sections
│   ├── robots.ts                   # Dynamic robots.txt metadata route
│   └── sitemap.ts                  # Dynamic XML sitemap generator (/sitemap.xml)
├── components/
│   ├── fancy/                      # Advanced SVG filters and typography effects
│   ├── sections/                   # 9 primary homepage sections (Hero, About, Projects, etc.)
│   ├── ui/                         # Reusable UI primitives (BlobButton, CustomCursor, Dock, etc.)
│   ├── Footer.tsx                  # Footer with centered visitor counter and colophon
│   ├── JsonLd.tsx                  # Schema.org structured data graph generator
│   ├── LenisWrapper.tsx            # Smooth scrolling client boundary
│   ├── Navbar.tsx                  # Floating navigation bar with theme switch
│   ├── PageLoader.tsx              # First-visit entrance shutter animation
│   └── SiteAnalytics.tsx           # Google Analytics 4 (gtag.js) script loader
├── hooks/                          # Custom hooks (useLenis, useWebMCP)
├── lib/                            # Canonical data models, Redis client, utilities
├── public/
│   ├── assets/                     # Institutional logos (Mount Litera Zee School, Subho's Institute)
│   ├── Resume.pdf                  # Official PDF resume document
│   ├── apple-touch-icon.png        # iOS application icon
│   └── favicon.ico                 # 32×32 browser favicon
├── styles/
│   └── globals.css                 # Design tokens and custom property declarations
├── next.config.ts                  # Next.js configuration, rewrites, and headers
├── package.json                    # Project dependencies and npm scripts
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## 4. Local Development

### Prerequisites
- Node.js 18.17+ or 20+
- npm or pnpm / yarn

### Installation
```bash
git clone https://github.com/samritmukherjee/samrit-portfolio.git
cd samrit-portfolio
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Environment Variables

Create a `.env.local` file in the root directory. All variables are optional for local development with graceful fallbacks:

| Variable | Description |
| :--- | :--- |
| `REDIS_URL` | Redis / Upstash connection URL for real-time global visitor tracking |
| `DEBUG_REDIS` | Set to `"true"` to enable verbose Redis error logging in development |
| `AVAILABILITY_STATUS` | Work availability badge state in Hero (`Available` or `Busy`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_AVENTO_KEY` | Public client key for Avento AI customer support widget |
| `NEXT_PUBLIC_AVENTO_BOT_URL` | Script source URL for Avento AI widget |

---

## 6. Production Build

To test and compile an optimized production build using Next.js Turbopack:

```bash
npm run build
```

To run the compiled production server locally:

```bash
npm run start
```

---

## 7. Deployment

The project is configured for zero-configuration continuous deployment on [Vercel](https://vercel.com/):

1. Import the repository into your Vercel team/account.
2. Ensure the Framework Preset is set to **Next.js**.
3. Add any production environment variables (`REDIS_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_AVENTO_KEY`) under Project Settings.
4. Deploy. Every push to `main` automatically triggers an Edge & Serverless production deployment.

---

## 8. Backend Integrations

1. **Global Visitor Counter (`/api/visitors`)**:
   - Backed by Redis. Client-side deduplication via session and timestamp prevents artificial inflation.
   - If Redis is disconnected, it fails open and gracefully displays a `"Live portfolio"` status badge.
2. **Contact Form (`components/sections/ContactCards.tsx`)**:
   - Powered by `@formspree/react` with client-side validation, error handling, and delivery confirmation.
3. **Agent Discovery & WebMCP (`/api/well-known/*`)**:
   - RFC 9727 Linkset catalog, WebMCP skill registry, and OpenAPI 3.0 specification for AI agent discovery.
   - Standard root paths (`/.well-known/api-catalog`, `/.well-known/openapi.json`, etc.) are internally rewritten in `next.config.ts`.
4. **Zero-Redirect Resume Delivery**:
   - Both `/resume` and `/resume.pdf` are internally rewritten in `next.config.ts` to `/Resume.pdf`, supporting in-browser viewing and direct download.
