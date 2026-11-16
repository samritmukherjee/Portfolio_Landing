# Complete Technical Project Audit Report — samrit.dev

**Date of Audit**: November 16, 2026  
**Project**: Samrit Mukherjee Portfolio (`samrit-portfolio`)  
**Production URL**: [https://samrit.dev](https://samrit.dev)  
**Framework**: Next.js 16.2.4 (App Router, Turbopack) • React 18.3.1 • TypeScript 5.0.0 • Tailwind CSS 3.4.0  
**Audit Scope**: Complete code audit, directory structure, routes, components, assets, integrations, SEO, performance, validation checks, and recent updates.

---

## A. Project Overview

### 1. Purpose and Identity
The website is the primary personal portfolio, technical publication, and software engineering showcase of **Samrit Mukherjee** — an AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner based in Kolkata, India. He is currently pursuing a B.Tech in Computer Science & Engineering (Artificial Intelligence and Machine Learning) at Meghnad Saha Institute of Technology (MSIT), MAKAUT, graduating in 2028.

### 2. Architecture Summary
The application is engineered on Next.js 16 with the modern App Router architecture, compiled via Turbopack. It pairs server-rendered content, static site generation (SSG) for articles and API manifests, client-side physics animations (Lenis smooth scroll synchronized with GSAP ticker loop), a dynamic theme system (Dark `#080F1E` vs Light `#F8FAFC` toggled with custom pixel-swap and Star Wars audio-visual controls), and AI agent discovery compliance (WebMCP, OpenAPI 3.0, and RFC 9727 Linksets).

### 3. Current Project Status
- **Core Production Website**: Fully active and operational at `https://samrit.dev`.
- **Validation**: TypeScript type checking (`npx tsc --noEmit`) passes with 0 errors. Turbopack production build (`next build`) compiles cleanly (22 static and dynamic routes generated).
- **Recent Expansions**: Horizontal center alignment of the footer visit counter, integration of Subho's Computer Institute professional journey role with verified official transparent logo, local asset reorganization of the Mount Litera Zee School logo, and complete route discovery.

---

## B. Complete Directory Structure

```
E:\Coding\Web-Developement Projects\3. Samrit Portfolio Landing
├── .agents/                        # Skill bundles and design reference documentation
│   └── skills/                     # Local customization and audit guidance rules
├── .next/                          # Next.js build cache and Turbopack compiler output
├── app/                            # Next.js 16 App Router tree
│   ├── about/                      # Secondary biographical route
│   │   └── page.tsx                # Standalone profile page (/about)
│   ├── api/                        # REST & WebMCP Route Handlers
│   │   ├── contact/route.ts        # GET contact details (JSON + Markdown negotiation)
│   │   ├── health/route.ts         # GET service uptime and health check
│   │   ├── projects/route.ts       # GET canonical projects array
│   │   ├── skills/route.ts         # GET categorized skills hierarchy
│   │   ├── v1/projects/route.ts    # Versioned filtered projects REST API
│   │   ├── visitors/route.ts       # GET & POST Redis visitor counter
│   │   └── well-known/             # Machine-readable discovery endpoints
│   │       ├── agent-skills-index/ # Agent skills registry
│   │       ├── api-catalog/        # RFC 9727 linkset catalog
│   │       ├── mcp/server-card/    # MCP server manifest
│   │       └── openapi/            # OpenAPI 3.0 specification
│   ├── blog/                       # Technical writing & case studies
│   │   ├── [slug]/page.tsx         # Pre-rendered SSG dynamic article reader
│   │   └── page.tsx                # Blog index (/blog)
│   ├── llms.txt/route.ts           # Dynamic LLM plain text crawler endpoint
│   ├── portfolio-os/               # Standalone workstation teaser
│   │   ├── layout.tsx              # Standalone metadata & OpenGraph wrapper
│   │   └── page.tsx                # Coming soon interactive OS showcase (/portfolio-os)
│   ├── layout.tsx                  # Root layout (fonts, metadata, analytics, theme init)
│   ├── manifest.ts                 # Dynamic Web App Manifest (/manifest.webmanifest)
│   ├── opengraph-image.tsx         # Edge-rendered dynamic social card (1200×630)
│   ├── page.tsx                    # Main 9-section portfolio landing page (/)
│   └── sitemap.ts                  # Dynamic XML sitemap generator (/sitemap.xml)
├── components/                     # Component architecture
│   ├── fancy/                      # Advanced SVG and typographic visual effects
│   │   ├── filter/gooey-svg-filter.tsx # Reusable SVG feGaussianBlur / feColorMatrix filter
│   │   └── text/text-highlighter.tsx   # Hand-drawn marker highlighter effect
│   ├── sections/                   # 9 primary modular sections of the homepage
│   │   ├── About.tsx               # About section with orbiting project logos
│   │   ├── ContactCards.tsx        # Formspree contact form & reach-out channels
│   │   ├── Experience.tsx          # Professional journey timeline (Subho's, MLZS, Hackerspace)
│   │   ├── Hackathons.tsx          # Accolades grid with hover photo reveals
│   │   ├── Hero.tsx                # Interactive Hero with 3D Lanyard ID badge
│   │   ├── Projects.tsx            # Featured projects with desktop folder tabs & mobile snap
│   │   ├── Services.tsx            # What I Do / Core Capabilities breakdown
│   │   ├── TechnicalArsenal.tsx    # Categorized skill badges with devicon logos
│   │   └── TechStackMarquee.tsx    # Infinite animated logo marquee ticker
│   ├── ui/                         # Reusable UI primitives
│   │   ├── BlobButton.tsx          # SVG goo-filtered morphing interactive button
│   │   ├── CustomCursor.tsx        # Spring-interpolated follower cursor (desktop only)
│   │   ├── Dock.tsx                # Floating macOS-inspired dock navigation
│   │   ├── DotGrid.tsx             # Interactive canvas dot matrix background
│   │   ├── LanyardBadge.tsx        # Interactive physics-based 3D ID card
│   │   ├── orbiting-circles.tsx    # CSS orbit animation primitive
│   │   └── orbiting-circles-demo.tsx # Multi-tier brand orbit animation
│   ├── Footer.tsx                  # Footer with visit counter, navigation, and colophon
│   ├── JsonLd.tsx                  # Schema.org structured data graph generator
│   ├── LenisWrapper.tsx            # Smooth scrolling client boundary
│   ├── Navbar.tsx                  # Floating responsive navigation bar with theme toggle
│   ├── PageLoader.tsx              # First-visit split-shutter entrance loader
│   ├── PixelSwap.css               # Official React Bits PixelSwap transition stylesheet
│   ├── PixelSwap.jsx               # PixelSwap theme transition component
│   ├── SiteAnalytics.tsx           # Google Analytics 4 (gtag) script loader
│   └── star-wars-toggle-switch.tsx # Theme toggle switch component with styled-components
├── hooks/                          # Custom React hooks
│   ├── useLenis.ts                 # Smooth scroll hook synchronized with GSAP ticker
│   └── useWebMCP.ts                # WebMCP browser tool registration hook
├── lib/                            # Shared utilities and data models
│   ├── blog-posts.ts               # Blog posts and case study metadata
│   ├── projects-data.ts            # Canonical project records and metadata
│   ├── redis.ts                    # Redis client initialization and visitor logic
│   ├── registry.tsx                # styled-components SSR stylesheet manager
│   ├── scrollToElement.ts          # Smooth scrolling helper for anchor targets
│   ├── skills-data.ts              # Categorized technical competencies
│   ├── structured-data.ts          # Schema.org linked data graph
│   ├── utils.ts                    # Shared clsx and twMerge helper (`cn`)
│   └── visitor.ts                  # Client session visitor deduplication logic
├── public/                         # Public static assets served from root
│   ├── assets/                     # Professional Journey & institutional logos
│   │   ├── Logo MLZS.png           # Mount Litera Zee School official logo (2700×2700, PNG)
│   │   └── subhos-computer-institute.png # Subho's Computer Institute logo (1280×720, PNG)
│   ├── apple-touch-icon.png        # 180×180 Apple Touch Icon
│   ├── favicon.ico                 # Root favicon icon
│   ├── llms.txt                    # Plain text summary for LLM scrapers (fallback)
│   ├── Resume.pdf                  # Official PDF resume document
│   └── robots.txt                  # Search crawler directives
├── styles/
│   └── globals.css                 # Design tokens, CSS custom properties, utility classes
├── types/
│   └── webmcp.ts                   # TypeScript interfaces for WebMCP tool registrations
├── .env / .env.local               # Environment variable definitions (credentials omitted)
├── .gitignore                      # Git ignored files and directories
├── components.json                 # shadcn/ui configuration
├── middleware.ts                   # API caching and Markdown negotiation middleware
├── myself.txt                      # Canonical personal bio and project source of truth
├── next.config.ts                  # Next.js configuration, rewrites, and headers
├── package.json                    # Dependencies, scripts, and project metadata
├── tailwind.config.ts              # Tailwind CSS configuration and theme extensions
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## C. Application Architecture

### 1. Root Layout & Theme System
- `app/layout.tsx` is the foundation. It evaluates the user's saved theme synchronously in `<head>` via an inline IIFE to eliminate any flash of unstyled theme (FOUC).
- Default theme is Light Mode on initial arrival, transitioning smoothly to Dark Mode upon user interaction.
- State is coordinated across `localStorage` and `sessionStorage`.
- When switching themes on the homepage, `PixelSwap.jsx` displays a diagonal retro pixel dissolution transition while DOM theme tokens swap beneath.

### 2. Design System & CSS Tokens
Declared in `styles/globals.css`:
- **Dark Mode**: `--theme-bg: #080F1E`, `--theme-surface: #0F1B30`, `--theme-card: #111D32`, `--theme-border: #263750`, `--theme-accent: #3B82F6`, `--theme-text: #F1F5F9`.
- **Light Mode**: `--theme-bg: #F8FAFC`, `--theme-surface: #EFF6FF`, `--theme-card: #FFFFFF`, `--theme-border: #DCE6F1`, `--theme-accent: #2563EB`, `--theme-text: #0F172A`.

### 3. Font Pipeline
Loaded via `next/font/google`:
- **Body**: `DM_Sans` (`--font-body`), variable font.
- **Headings**: `Syne` (`--font-display`), weights 400–800.
- **Serif Accents**: `Noto_Serif` (`--font-serif`), normal and italic.
- **Handwritten Signatures**: `Playwrite_CA_Guides` (`--font-accent`).

### 4. Animation and Smooth Scrolling Pipeline
- Powered by `lenis` via `hooks/useLenis.ts` and `components/LenisWrapper.tsx`.
- The Lenis RAF loop is bound to the GSAP Ticker (`gsap.ticker.add`) to ensure zero frame collisions with Framer Motion or GSAP scroll triggers.
- Native momentum scrolling is preserved on touch screens.
- `prefers-reduced-motion: reduce` media query is respected across all components.

---

## D. Complete Route Audit

*Refer to the companion document `ROUTE_INVENTORY.md` for full path-by-path endpoint tables.*

### Summary of Route Findings:
1. **Homepage (`/`)**: Main landing page with 9 sections.
2. **Hidden Standalone Pages (`/about`, `/blog`, `/portfolio-os`)**:
   - These 3 pages are valid, fully functional Next.js pages compiled in the build and listed in `sitemap.xml`.
   - None of them are linked from the floating Navbar, Dock, or Footer, which exclusively target on-page section IDs.
   - `/blog` features 3 statically generated case studies (`cosmic-canvas-architecture`, `double-slash-4-win`, `webmcp-nextjs`).
   - `/portfolio-os` is a "Coming Soon" teaser page with preview date "Q3 2026".
3. **API Endpoints**:
   - `/api/health`, `/api/projects`, `/api/skills`, `/api/v1/projects`, `/api/visitors`, `/api/contact`.
   - Machine discovery routes under `/api/well-known/`.
4. **Machine Discovery URL Resolution**:
   - Previous live production deployment lacked rewrites from `/.well-known/*` to `/api/well-known/*`, causing 404s when AI agents requested URLs declared in `robots.txt` or `<head>` Link headers.
   - Now resolved in `next.config.ts` via internal Next.js rewrites.

---

## E. Component Audit

| Component | Path | Responsibility | Dependencies | State / Interactions | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Navbar` | `components/Navbar.tsx` | Sticky floating navigation bar, logo, theme toggle, mobile slide menu | `framer-motion`, `lucide-react`, `StarWarsSwitch` | Auto-hides on downscroll; opens on upscroll. Mobile menu sheet. | Active & Verified |
| `Hero` | `components/sections/Hero.tsx` | Hero banner, availability badge, quick CTAs, 3D interactive badge | `LanyardBadge`, `DotGrid`, `BlobButton` | Interactive 3D drag physics. | Active & Verified |
| `TechStackMarquee` | `components/sections/TechStackMarquee.tsx` | Infinite horizontal scrolling logos ticker | CSS keyframes, Cloudinary logos | Pure CSS infinite translateX animation. | Active & Verified |
| `About` | `components/sections/About.tsx` | Bio overview, orbiting technology ring, stats cards | `orbiting-circles-demo`, `TextHighlighter` | In-view scroll trigger reveal. | Active & Verified |
| `Services` | `components/sections/Services.tsx` | Core engineering disciplines cards (AI, Full-Stack, Architecture) | `lucide-react`, `framer-motion` | Card hover lift & border glow. | Active & Verified |
| `Hackathons` | `components/sections/Hackathons.tsx` | Accolades display (11 wins), photo reveal cards, mobile carousel | `framer-motion`, Cloudinary image assets | Desktop hover photo reveal; mobile snap carousel. | Active & Verified |
| `Projects` | `components/sections/Projects.tsx` | 5 featured live projects + upcoming preview tab | `GooeySvgFilter`, `BlobButton`, `Image` | Desktop SVG goo folder tabs; mobile snap slider. | Active & Verified |
| `Experience` | `components/sections/Experience.tsx` | Professional Journey timeline (Subho's Institute, MLZS, Hackerspace) | `framer-motion`, `Image` | Alternating left/right cards with animated line. | **Updated & Verified** |
| `TechnicalArsenal` | `components/sections/TechnicalArsenal.tsx` | Tabbed skill badges with devicon logos | `framer-motion` | Filter by category (Languages, Frontend, Backend, AI). | Active & Verified |
| `ContactCards` | `components/sections/ContactCards.tsx` | Reach-out information, email copy button, Formspree contact form | `@formspree/react`, `BlobButton` | Form submission, validation, clipboard copy feedback. | Active & Verified |
| `Footer` | `components/Footer.tsx` | Brand colophon, focus ticker, nav links, social links, visit counter | `framer-motion`, `lucide-react`, `BlobButton` | Morphing focus text, real-time Redis counter. | **Updated & Verified** |
| `Dock` | `components/ui/Dock.tsx` | macOS-style bottom application dock with magnification physics | `framer-motion`, `lucide-react` | Pointer-distance-based spring icon magnification. | Active & Verified |
| `CustomCursor` | `components/ui/CustomCursor.tsx` | Precision mouse pointer with spring lag and hover reaction | `framer-motion` | Desktop only; hidden on touch screens. | Active & Verified |
| `PageLoader` | `components/PageLoader.tsx` | First-visit entrance shutter animation | `gsap` | Session-cached (triggers once per session). | Active & Verified |
| `SiteAnalytics` | `components/SiteAnalytics.tsx` | Google Analytics 4 (gtag.js) script injection | `next/script` | Conditional on `NEXT_PUBLIC_GA_MEASUREMENT_ID`. | Active & Verified |
| `JsonLd` | `components/JsonLd.tsx` | Injects Schema.org `@graph` script | `lib/structured-data.ts` | Server-rendered JSON-LD. | Active & Verified |

---

## F. Assets Audit

### 1. Static Assets (`public/`)
- `public/assets/Logo MLZS.png`: Official Mount Litera Zee School logo. High-resolution (2700×2700), 32-bit ARGB PNG with clean transparency. Moved from project root to dedicated assets folder.
- `public/assets/subhos-computer-institute.png`: Official Subho's Computer Institute logo extracted directly from official website header and preloader assets. High-resolution (1280×720), 32-bit ARGB PNG with full alpha channel transparency.
- `public/apple-touch-icon.png`: 180×180 PNG icon for iOS home screens.
- `public/favicon.ico`: Standard 32×32 favicon.
- `public/Resume.pdf`: Official PDF resume (69.8 KB). Directly accessible at `/Resume.pdf` and `/resume.pdf`.
- `public/robots.txt`: Search crawler directives.
- `public/llms.txt`: Plain-text dossier for LLMs.

### 2. Remote CDN Assets (Cloudinary)
All major project screenshots, hackathon victory photos, and tech stack logos are delivered through Cloudinary CDN (`https://res.cloudinary.com/duxrcy3jn/...`) with automatic format and dimension optimization configured in `next.config.ts`.

### 3. Missing / Discrepant Asset Notice
- `public/coming_soon.png`: Referenced in `lib/projects-data.ts` (line 108) as the fallback image for the `coming-soon` record and in `README.md` (line 168). The physical file was not present in `public/`. Note: On the homepage, the "Upcoming" tab renders Cloudinary logos and custom SVG rather than this image, so user-facing UI is not broken, but direct requests to `/coming_soon.png` return 404.

---

## G. Dependencies and Configuration

### 1. Installed Dependencies (`package.json`)
- `next` (`^16.2.4`): Modern App Router framework with Turbopack compilation.
- `react` / `react-dom` (`^18.3.1`): React core.
- `framer-motion` (`^12.38.0`): Card animations, reveals, and dock magnification.
- `gsap` (`^3.15.0`): Smooth scroll ticker integration and PageLoader entrance shutter.
- `lenis` (`^1.3.23`): Inertia-based smooth scrolling.
- `@formspree/react` (`^3.0.0`): Contact form processing.
- `redis` (`^5.12.1`): Redis client for global visitor counting.
- `styled-components` (`^6.4.0`): SSR-registered styling for Star Wars theme toggle switch.
- `lucide-react` (`^1.8.0`) / `react-icons` (`^5.6.0`): Icon libraries.
- `@vercel/speed-insights` (`^2.0.0`): Vercel real-user performance monitoring.
- `clsx` (`^2.1.1`) / `tailwind-merge` (`^3.5.0`): Class manipulation utilities.

### 2. Environment Variables
*No credentials or secrets are logged.*
- `REDIS_URL`: Connection string for Upstash/Redis instance powering the visitor counter.
- `DEBUG_REDIS`: Enables debug logs for Redis queries in development.
- `AVAILABILITY_STATUS`: Overrides the Hero availability badge ("Available" or "Busy").
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 tracking ID.
- `NEXT_PUBLIC_AVENTO_KEY`: Public client key for Avento AI chat widget.
- `NEXT_PUBLIC_AVENTO_BOT_URL`: Script source URL for Avento AI widget.

---

## H. Third-Party Integrations

1. **Redis Global Visitor Counter**:
   - Implementation: `lib/redis.ts` and `app/api/visitors/route.ts`.
   - Deduplication: `lib/visitor.ts` checks `sessionStorage` (`portfolio_visited_session`) and `localStorage` (`portfolio_last_visit_time`) to prevent duplicate increments during a single browsing session.
   - Fallback: If Redis is unavailable or unconfigured, the endpoint gracefully catches errors and the footer displays a resilient `"Live portfolio"` green status pill.
2. **Formspree Contact Form**:
   - Implementation: `components/sections/ContactCards.tsx` via `useForm("mqparaae")`.
   - Handles submission state, validation error rendering, and displays a success confirmation message upon delivery.
3. **Avento AI Support Widget**:
   - Implementation: Injected in `app/layout.tsx` via `next/script` (`https://www.avento-ai.xyz/sdk.js`) using `strategy="afterInteractive"`.
4. **Google Analytics (GA4)**:
   - Implementation: `components/SiteAnalytics.tsx` loads `gtag.js` when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present.
5. **Vercel Speed Insights**:
   - Implementation: Injected in `app/layout.tsx` (`@vercel/speed-insights/next`).

---

## I. SEO and Metadata

- **Metadata Architecture**: Comprehensive metadata configured in `app/layout.tsx` with dynamic title template `%s | Samrit Mukherjee`.
- **OpenGraph & Twitter Cards**: Dynamic Edge-rendered OpenGraph image generated via `app/opengraph-image.tsx` (1200×630) using `@vercel/og` ImageResponse.
- **Canonical URLs**: Configured on `/`, `/about`, `/blog`, `/blog/[slug]`, and `/portfolio-os`.
- **Structured Data (JSON-LD)**: Schema.org graph declared in `lib/structured-data.ts` and rendered by `components/JsonLd.tsx`, containing linked `Person`, `WebSite`, `ProfilePage`, and `ItemList` of `CreativeWork`.
- **Crawlers & AI Bot Directives**: `public/robots.txt` explicitly authorizes Googlebot, Bingbot, GPTBot, ClaudeBot, and PerplexityBot, while disallowing private routes. AI content signals (`Content-Signal: ai-train=yes, search=yes, ai-input=yes`) and agent discovery headers are declared.

---

## J. Performance and Reliability

- **Theme Flash Prevention (FOUC)**: Synchronous IIFE in `<head>` ensures correct theme class application before first paint.
- **Image Optimization**: Local images use Next.js `Image` with automatic responsive sizing. Remote Cloudinary assets use explicit aspect ratios and `object-contain`.
- **Scroll Frame Budget**: Binding Lenis to `gsap.ticker` prevents competing `requestAnimationFrame` loops.
- **Error Handling**: Redis visitor failures fail open (returns fallback count or Live status pill without throwing unhandled exceptions). Formspree errors display validation alerts inline.

---

## K. Code Quality and Technical Debt Assessment

1. **`eslint` Configuration & Next 16 CLI**:
   - `package.json` contains `"lint": "next lint"`.
   - In Next.js 16+, `next lint` behavior has changed and `eslint` is not listed in `devDependencies`. Running `npm run lint` results in `Invalid project directory provided: ...\lint`.
   - *Recommendation*: Configure ESLint 9 flat config or update the lint script.
2. **Font Fallback Warning**:
   - Turbopack logs a non-fatal warning during build: `Failed to find font override values for font Playwrite CA Guides`. This is expected for decorative cursive Google fonts without standard size-adjust metrics.
3. **Unlinked Secondary Pages**:
   - As documented in `ROUTE_INVENTORY.md`, `/about`, `/blog`, and `/portfolio-os` are active and indexed in `sitemap.xml`, but have no visible entry point on the homepage UI.

---

## L. Build and Validation Status

| Check | Command Executed | Result | Details |
| :--- | :--- | :--- | :--- |
| **TypeScript Check** | `npx tsc --noEmit` | **PASS (Code 0)** | Zero type errors across the entire codebase. |
| **Production Build** | `npm run build` | **PASS (Code 0)** | Turbopack compiled successfully in 22.4s. 22 static and dynamic routes generated cleanly. |
| **ESLint Check** | `npm run lint` | **CLI Issue** | `next lint` command failed because ESLint is not installed in `devDependencies` and Next 16 CLI syntax changed. Documented as technical debt. |

---

## M. Recent Changes Summary

1. **Footer Global Visit Counter Alignment**:
   - Restructured the bottom footer row from a `justify-between` flex container to a responsive CSS Grid: `grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4`.
   - The visitor counter pill is placed in the center grid track, guaranteeing true mathematical horizontal centering relative to the entire container width on desktop, regardless of unequal left and right content widths.
   - Stacks cleanly into a balanced centered column on mobile screens with no overlapping.
   - All styles, font sizes, pulse animations, and dynamic Redis count bindings were preserved.
2. **Subho's Computer Institute Professional Journey Entry**:
   - Added as a new entry in `components/sections/Experience.tsx`.
   - Position: Assistant Teacher.
   - Organization: Subho's Computer Institute.
   - Duration: "Present" (configurable).
   - Location: Barrackpore, West Bengal, India.
   - Official Website: `https://subhoscomputerinstitute.com/` (with external link icon).
   - Type Badge: "Teaching / Academic Role".
   - Official Logo: Extracted directly from website assets (`public/assets/subhos-computer-institute.png`) with clean alpha channel transparency. Delivered in a high-contrast dark container (`bg-[#0A1628] border border-slate-700/70`) ensuring crisp visibility in both light and dark modes.
   - Vertically centered directly against the organization name text using flexbox `flex items-center gap-2.5`.
   - Content structure refined: introductory paragraph removed, directly rendering the 5 specific teaching responsibilities to match Mount Litera Zee School and Hackerspace cards.
3. **Mount Litera Zee School Logo Organization & Alignment**:
   - Moved `Logo MLZS.png` from the project root into `public/assets/Logo MLZS.png`.
   - Verified image properties: 2700×2700 resolution, 32-bit ARGB PNG with transparency.
   - Connected the logo to the Mount Litera Zee School card in `components/sections/Experience.tsx`, vertically centered beside the organization name text using `flex items-center gap-2.5`.
   - Root duplicate removed cleanly.
4. **Hackerspace Preservation**:
   - Preserved Hackerspace's text-based presentation and existing card structure without adding any logo.
5. **Personal Information Source (`myself.txt`)**:
   - Added Subho's Computer Institute under `## 🔹 PROFESSIONAL JOURNEY` with all specified responsibilities, student levels (Classes VIII–XII), and website link.
   - Preserved all existing projects, achievements, and graduation year (2028).
6. **Agent Discovery Route Rewrites**:
   - Added internal rewrites in `next.config.ts` mapping `/.well-known/*` to `/api/well-known/*`, resolving the production 404 issue for RFC 9727 and OpenAPI machine discovery.
7. **Complete Route Discovery & Inventory**:
   - Created `ROUTE_INVENTORY.md` detailing all 23 URLs, endpoints, and statuses.

---

## N. Outstanding Issues & Recommendations

### High Priority
- **`.well-known/` Rewrites Deployment**:
  The internal rewrites added to `next.config.ts` will resolve the production 404 on `/.well-known/api-catalog` upon the next deployment.

### Medium Priority
- **Missing `public/coming_soon.png` Asset**:
  The upcoming project record in `lib/projects-data.ts` references `/coming_soon.png`, which is missing on disk. A placeholder graphic or asset update should be placed in `public/coming_soon.png`.
- **Navigation Visibility for Secondary Pages**:
  `/blog` (with 3 case studies) and `/about` are active and indexed by search engines, but completely hidden from the main navigation. Consider adding a small "Writing" or "Blog" link to the footer navigation.
- **ESLint Setup in `devDependencies`**:
  Install `eslint` and `eslint-config-next` or update `package.json` scripts so `npm run lint` runs successfully.

### Low Priority / Decision Items for User
- **Subho's Computer Institute Start Date**:
  The duration in `Experience.tsx` is currently set to `"Present"`. You may configure the exact start month or year (e.g. `"2026 – Present"` or `"Nov 2026 – Present"`) whenever you wish.
- **Portfolio OS Teaser Status**:
  `/portfolio-os` currently indicates an expected preview of "Q3 2026". You may update this timeline when the interactive desktop workstation feature is scheduled.

