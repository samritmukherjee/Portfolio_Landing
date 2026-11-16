# Complete Project Technical Audit Report — samrit.dev

**Audit Date**: November 16, 2026  
**Project**: Samrit Mukherjee — Personal Portfolio (`samrit-portfolio`)  
**Production URL**: [https://samrit.dev](https://samrit.dev)  
**Architecture**: Next.js 16.2.4 (App Router, Turbopack) • React 18.3.1 • TypeScript 5.0.0 • Tailwind CSS 3.4.0  
**Audit Purpose**: Complete technical audit of the cleaned, reduced, production-ready codebase after removal of all standalone pages, dead code, unused assets, and temporary documentation.

---

## 1. Project Overview

The website is the canonical personal portfolio, technical showcase, and professional profile of **Samrit Mukherjee** — an AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner based in Kolkata, India. He is pursuing a B.Tech in Computer Science & Engineering (Artificial Intelligence and Machine Learning) at Meghnad Saha Institute of Technology (MSIT), MAKAUT, graduating in 2028.

The project has been streamlined from a multi-page site containing an experimental blog and placeholder subpages into a lean, high-performance portfolio application. The only user-facing destinations are the **Homepage (`/`)** and the **Resume resource (`/Resume.pdf` and its aliases `/resume` / `/resume.pdf`)**.

---

## 2. Final Directory and Folder Structure

```text
E:\Coding\Web-Developement Projects\3. Samrit Portfolio Landing
├── .agents/                        # Installed agent skill references (locked by skills-lock.json)
│   └── skills/                     # Local customization and design reference documentation
├── .next/                          # Turbopack build cache and compiled server/static output
├── app/                            # Next.js 16 App Router tree
│   ├── api/                        # Backend REST & WebMCP Route Handlers
│   │   ├── contact/route.ts        # GET contact details (JSON + Markdown negotiation)
│   │   ├── health/route.ts         # GET service uptime & health check
│   │   ├── projects/route.ts       # GET canonical projects array
│   │   ├── skills/route.ts         # GET categorized skills hierarchy
│   │   ├── v1/projects/route.ts    # Versioned REST API with category filtering
│   │   ├── visitors/route.ts       # GET & POST Redis visitor counter
│   │   └── well-known/             # Agent discovery endpoints (Linkset, OpenAPI, WebMCP)
│   │       ├── agent-skills-index/ # Agent skills registry
│   │       ├── api-catalog/        # RFC 9727 linkset catalog
│   │       ├── mcp/server-card/    # MCP server manifest
│   │       └── openapi/            # OpenAPI 3.0 specification
│   ├── layout.tsx                  # Root layout (fonts, metadata, analytics, theme init)
│   ├── manifest.ts                 # Web App Manifest (/manifest.webmanifest)
│   ├── opengraph-image.tsx         # Edge-rendered dynamic social card (1200×630)
│   ├── page.tsx                    # Landing page composed of 9 active sections
│   ├── robots.ts                   # Dynamic Next.js robots.txt metadata route
│   └── sitemap.ts                  # Dynamic XML sitemap generator (/sitemap.xml)
├── components/                     # Component architecture
│   ├── fancy/                      # Advanced SVG filters and typography effects
│   │   ├── filter/gooey-svg-filter.tsx # Reusable SVG feGaussianBlur / feColorMatrix filter
│   │   └── text/text-highlighter.tsx   # Hand-drawn marker highlighter effect
│   ├── sections/                   # 9 primary homepage sections
│   │   ├── About.tsx               # About section with orbiting project logos
│   │   ├── ContactCards.tsx        # Formspree contact form & reach-out channels
│   │   ├── Experience.tsx          # Professional journey timeline (Subho's, MLZS, Hackerspace)
│   │   ├── Hackathons.tsx          # Accolades display (11 wins) with hover photo reveals
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
│   ├── Footer.tsx                  # Footer with centered visitor counter and colophon
│   ├── JsonLd.tsx                  # Schema.org structured data graph generator
│   ├── LenisWrapper.tsx            # Smooth scrolling client boundary
│   ├── Navbar.tsx                  # Floating navigation bar with theme toggle
│   ├── PageLoader.tsx              # First-visit split-shutter entrance loader
│   ├── PixelSwap.css               # Official React Bits PixelSwap transition stylesheet
│   ├── PixelSwap.jsx               # PixelSwap theme transition component
│   ├── SiteAnalytics.tsx           # Google Analytics 4 (gtag.js) script loader
│   └── star-wars-toggle-switch.tsx # Theme toggle switch component with styled-components
├── hooks/                          # Custom React hooks (useLenis, useWebMCP)
├── lib/                            # Canonical data models, Redis client, utilities
│   ├── projects-data.ts            # Canonical project records and metadata
│   ├── redis.ts                    # Redis client initialization and visitor logic
│   ├── registry.tsx                # styled-components SSR stylesheet manager
│   ├── scrollToElement.ts          # Smooth scrolling helper for anchor targets
│   ├── skills-data.ts              # Categorized technical competencies
│   ├── structured-data.ts          # Schema.org linked data graph
│   ├── utils.ts                    # Shared clsx and twMerge helper (`cn`)
│   └── visitor.ts                  # Client session visitor deduplication logic
├── public/                         # Public static assets
│   ├── assets/                     # Institutional logos
│   │   ├── Logo MLZS.png           # Mount Litera Zee School official logo (2700×2700, PNG)
│   │   └── subhos-computer-institute.png # Subho's Institute logo (1280×720, PNG)
│   ├── apple-touch-icon.png        # 180×180 Apple Touch Icon
│   ├── favicon.ico                 # Root favicon icon
│   └── Resume.pdf                  # Official PDF resume document
├── styles/
│   └── globals.css                 # Design tokens, CSS custom properties, utility classes
├── types/
│   └── webmcp.ts                   # TypeScript interfaces for WebMCP tool registrations
├── .env / .env.local               # Environment variable definitions (credentials omitted)
├── .gitignore                      # Git ignored files and directories
├── components.json                 # shadcn/ui configuration
├── middleware.ts                   # API caching and Markdown negotiation middleware
├── next.config.ts                  # Next.js configuration, rewrites, and headers
├── package.json                    # Dependencies, scripts, and project metadata
├── tailwind.config.ts              # Tailwind CSS configuration and theme extensions
├── tsconfig.json                   # Strict TypeScript compiler options
├── README.md                       # Streamlined developer documentation
└── PROJECT_AUDIT_REPORT.md         # This technical audit report
```

---

## 3. Framework and Technology Stack

- **Framework**: Next.js 16.2.4 using the App Router and Turbopack compiler.
- **Runtime & Language**: React 18.3.1, TypeScript 5.0.0.
- **Styling**: Tailwind CSS 3.4.0 with CSS variables declared in `styles/globals.css`.
- **SSR Style Registry**: `styled-components` 6.4.0 used exclusively to support the Star Wars theme toggle switch without SSR hydration mismatches.
- **Animation System**:
  - `lenis` 1.3.23 for smooth physics-based scrolling.
  - `gsap` 3.15.0 for central animation ticker coordination and entrance shutter transitions.
  - `framer-motion` 12.38.0 for interactive gestures, dock magnification, and in-view scroll reveals.
- **Data & Telemetry**: `redis` 5.12.1 for global visit counter increments and reads.
- **Forms**: `@formspree/react` 3.0.0 for contact form submission and state handling.
- **CDN**: Cloudinary for dynamic responsive image delivery.

---

## 4. Homepage Architecture

The homepage (`app/page.tsx`) renders as a single-page application consisting of 9 synchronized sections:

1. **Hero**: Headline, live availability status badge, quick CTAs ("View Projects", "Contact Me", "Resume"), and an interactive 3D physics-based identity lanyard (`components/ui/LanyardBadge.tsx`).
2. **TechStackMarquee**: Infinite horizontal ticker displaying language, framework, and tool logos.
3. **About**: Personal narrative, core statistics (11× hackathon wins, 8 projects built, 5 featured), and multi-tier orbiting technology circles (`components/ui/orbiting-circles-demo.tsx`).
4. **Services**: Core capabilities breakdown (AI Systems, Full-Stack Architecture, Enterprise Software).
5. **Hackathons**: Accolades showcase highlighting 11 victories and achievements with interactive hover photo reveals on desktop and a touch-snap carousel on mobile.
6. **Projects**: Interactive showcase displaying 5 featured production applications (Cosmic Canvas, SUKALYA.ai, Portfolio OS, Avento AI, Custodian) and an active upcoming engineering preview. Features SVG goo-filtered folder tabs on desktop and snap-scroll points on mobile.
7. **Experience (Professional Journey)**: Alternating timeline cards covering Subho's Computer Institute (Assistant Teacher), Mount Litera Zee School (Technical Advisor), and Hackerspace MSIT (Designer & Web Contributor). Logos are vertically centered directly against organization names.
8. **TechnicalArsenal**: Categorized skill badge matrix (Languages, Frontend, Backend, AI/ML, Cloud & DevOps, Creative) with devicon logos.
9. **ContactCards**: Reach-out channels, direct email copy button with clipboard feedback, and an integrated Formspree contact form.

The homepage is enveloped by:
- **Navbar**: Floating header with automatic downscroll hiding, upscroll revealing, section hash jumping, and the Star Wars audio-visual theme switch.
- **Dock**: Fixed bottom macOS-inspired dock with mouse-distance-based spring magnification.
- **Footer**: Brand colophon, Focus & Vision morphing ticker, navigation links, social icons, and the mathematically centered Redis visit counter.

---

## 5. Resume Page Architecture

The Resume resource is delivered via zero-redirect local static serving:
- **Primary Static Asset**: `public/Resume.pdf` (69.8 KB).
- **Internal Next.js Rewrites** (`next.config.ts`):
  - `/resume` ➔ `/Resume.pdf` (serves the PDF directly under the clean URL `/resume` with 200 OK).
  - `/resume.pdf` ➔ `/Resume.pdf` (case-insensitive fallback with 200 OK).
- **UI Integration**:
  - Hero section provides direct download and in-browser viewing buttons.
  - ContactCards provides both "View Resume" (`target="_blank"`) and "Download" buttons.
- **Sitemap**: Declared in `app/sitemap.ts` (`https://samrit.dev/Resume.pdf`, priority: 0.8).

---

## 6. Component Organization

Components are organized into functional directories:
- `components/sections/`: Modular homepage sections. Each section owns its markup, in-view trigger observers, and responsive layout.
- `components/ui/`: Reusable primitives (`BlobButton`, `CustomCursor`, `Dock`, `DotGrid`, `LanyardBadge`, `orbiting-circles`).
- `components/fancy/`: Specialized SVG filters (`gooey-svg-filter.tsx`) and typographic effects (`text-highlighter.tsx`).
- Root `components/`: Global shell elements (`Navbar`, `Footer`, `PageLoader`, `LenisWrapper`, `JsonLd`, `SiteAnalytics`, `PixelSwap`, `star-wars-toggle-switch`).

---

## 7. Backend and API Architecture

All backend endpoints are built using Next.js App Router Route Handlers (`route.ts`) under `app/api/`. Middleware (`middleware.ts`) applies caching headers (`Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`) and handles agent Markdown content negotiation.

| Endpoint | Method | Response Type | Purpose |
| :--- | :--- | :--- | :--- |
| `/api/health` | `GET` | `application/json` | Returns uptime, system health status `"ok"`, and timestamp. |
| `/api/projects` | `GET` | `application/json` | Returns full canonical projects array. |
| `/api/skills` | `GET` | `application/json` | Returns hierarchical skill categories and proficiency data. |
| `/api/v1/projects` | `GET` | `application/json` | Versioned REST API supporting `?category=` query parameter filtering for AI agents. |
| `/api/visitors` | `GET`, `POST` | `application/json` | Telemetry endpoint. Increments and retrieves the global visitor count from Redis. |
| `/api/contact` | `GET` | `application/json` / `text/markdown` | Returns contact channels, availability, and social links. Supports Markdown negotiation via `Accept: text/markdown`. |
| `/api/well-known/api-catalog` | `GET` | `application/linkset+json` | RFC 9727 linkset catalog describing machine-readable relationships. |
| `/api/well-known/agent-skills-index` | `GET` | `application/json` | Registry of registered WebMCP agent skills (`get-projects`, `get-skills`, `get-contact-info`). |
| `/api/well-known/mcp/server-card` | `GET` | `application/json` | Model Context Protocol (MCP) server manifest card. |
| `/api/well-known/openapi` | `GET` | `application/json` | OpenAPI 3.0.3 specification documenting public API schemas. |

---

## 8. Third-Party Integrations

1. **Redis Global Visitor Counter**:
   - Connection initialized in `lib/redis.ts`.
   - Client session deduplication managed by `lib/visitor.ts` (`sessionStorage` and `localStorage` checks).
   - If Redis connection fails, error is caught gracefully and the footer renders a fallback `"Live portfolio"` green status pill.
2. **Formspree Contact Form**:
   - Initialized via `useForm("mqparaae")` from `@formspree/react` in `ContactCards.tsx`.
   - Handles submission lifecycle, validation error states, and success confirmations.
3. **Avento AI Customer Support Widget**:
   - Injected in `app/layout.tsx` using `next/script` (`https://www.avento-ai.xyz/sdk.js`) with `data-key={process.env.NEXT_PUBLIC_AVENTO_KEY}` and `strategy="afterInteractive"`.
4. **Google Analytics 4 (GA4)**:
   - Configured in `components/SiteAnalytics.tsx` to load `gtag.js` when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present.
5. **Vercel Speed Insights**:
   - Integrated in `app/layout.tsx` via `@vercel/speed-insights/next`.

---

## 9. Environment Variable Names and Purposes

*No secret values or credentials are recorded.*

- `REDIS_URL`: Connection URI for the Upstash / Redis instance powering the visitor counter.
- `DEBUG_REDIS`: Enables verbose Redis connection logs during development.
- `AVAILABILITY_STATUS`: Overrides the Hero availability badge state (`"Available"` or `"Busy"`).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 measurement ID (`G-XXXXXXXXXX`).
- `NEXT_PUBLIC_AVENTO_KEY`: Public client authentication key for the Avento AI widget.
- `NEXT_PUBLIC_AVENTO_BOT_URL`: Script source URL for the Avento AI chatbot.

---

## 10. Asset Organization

All static assets are located in `public/`:
- `public/assets/Logo MLZS.png`: Official Mount Litera Zee School logo. High-resolution (2700×2700), 32-bit ARGB transparent PNG.
- `public/assets/subhos-computer-institute.png`: Official Subho's Computer Institute logo. High-resolution (1280×720), 32-bit ARGB transparent PNG.
- `public/apple-touch-icon.png`: 180×180 PNG icon for iOS home screens.
- `public/favicon.ico`: 32×32 browser favicon.
- `public/Resume.pdf`: Official PDF resume (69.8 KB).

Project screenshots, hackathon victory photos, and tech stack logos are delivered through Cloudinary CDN (`https://res.cloudinary.com/duxrcy3jn/...`) with dynamic optimization.

---

## 11. SEO Implementation

- **Canonical URL**: `https://samrit.dev/`.
- **Title Configuration**: `Samrit Mukherjee | AI Systems & Full-Stack Engineering`.
- **Description**: Accurate description of AI systems engineering, hackathons, and full-stack software development.
- **Language & Viewport**: `lang="en"`, responsive viewport with initial scale 1 and maximum scale 5.
- **OpenGraph & Twitter Cards**: Dynamic Edge-rendered 1200×630 social card (`app/opengraph-image.tsx`) generated via `@vercel/og` ImageResponse.
- **Deindexing of Removed Pages**: Because `/about`, `/blog`, `/blog/*`, and `/portfolio-os` were deleted from source code and excluded from `sitemap.ts`, search engine crawlers encountering them will receive standard **404 Not Found** responses, naturally pruning them from search indices without false redirects to the homepage.

---

## 12. Metadata and Structured Data

Structured data is rendered as a Schema.org `@graph` script by `components/JsonLd.tsx` using entities defined in `lib/structured-data.ts`:
- **`Person`**: Name, alternate name, canonical URL, profile image, social profiles (GitHub, LinkedIn), job titles, `worksFor` entries (Subho's Computer Institute, Mount Litera Zee School), `affiliation` (Hackerspace MSIT), education (`Meghnad Saha Institute of Technology`), hackathon awards (11 wins), technical competencies, and location (Kolkata, India).
- **`WebSite`**: Name, URL, description, publisher reference.
- **`ProfilePage`**: Name, URL, description, primary image, main entity link.
- **`ItemList` (`CreativeWork`)**: 5 featured production applications (Cosmic Canvas, SUKALYA.ai, Portfolio OS pointing to `https://samrit-portfolio-os.vercel.app/`, Avento AI, Custodian).

---

## 13. Sitemap and Robots Configuration

### Dynamic Sitemap (`app/sitemap.ts`)
Generates `/sitemap.xml` containing exclusively the active, indexable URLs:
1. `https://samrit.dev` (weekly, priority: 1.0)
2. `https://samrit.dev/Resume.pdf` (monthly, priority: 0.8)

### Dynamic Robots Configuration (`app/robots.ts`)
Generates `/robots.txt` dynamically via the Next.js App Router metadata route convention:
- **Googlebot & Bingbot**: Allow `/`, disallow `/api/`, `/admin`, `/dashboard`, `/private`.
- **AI Bots** (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`): Allow `/`, disallow private routes.
- **Default (`*`)**: Allow `/` and `/_next/static/`, disallow `/api/` and private routes.
- **Sitemap Directive**: Declares `https://samrit.dev/sitemap.xml`.

---

## 14. Dependency Audit

All installed packages in `package.json` are actively utilized:
- `next` (`^16.2.4`): Core framework and routing.
- `react` / `react-dom` (`^18.3.1`): React rendering engine.
- `framer-motion` (`^12.38.0`): Card animations, reveals, dock magnification.
- `gsap` (`^3.15.0`): Smooth scroll ticker loop and PageLoader.
- `lenis` (`^1.3.23`): Inertia smooth scrolling.
- `@formspree/react` (`^3.0.0`): Contact form processing.
- `redis` (`^5.12.1`): Redis visitor telemetry.
- `styled-components` (`^6.4.0`): Star Wars switch component styling.
- `lucide-react` / `react-icons`: UI icons.
- `@vercel/speed-insights`: Performance monitoring.
- `clsx` / `tailwind-merge`: Utility class merging.
- `@types/*`, `tailwindcss`, `postcss`, `autoprefixer`, `typescript`: Build tooling.

---

## 15. Dead-Code and Unused-Asset Cleanup Summary

- **Removed Dead Code**:
  - `lib/blog-posts.ts` (exclusively used by deleted blog routes).
  - Unused `description` property and rendering logic from `components/sections/Experience.tsx`.
  - Obsolete `llms.txt` Link header in `app/layout.tsx`.
- **Removed Unused Assets**:
  - `public/llms.txt` (redundant text file).
  - `public/robots.txt` (migrated to dynamic Next.js `app/robots.ts`).
  - Broken `/coming_soon.png` reference in `lib/projects-data.ts` replaced with an active Cloudinary preview URL.
- **Removed Documentation**:
  - `myself.txt` (old personal text dump).
  - `ROUTE_INVENTORY.md` (consolidated into this report).

---

## 16. Removed Standalone Pages

1. `/about` (`app/about/page.tsx`) — Removed. Standalone biographical subpage.
2. `/blog` (`app/blog/page.tsx`) — Removed. Technical writing index page.
3. `/blog/cosmic-canvas-architecture` (`app/blog/[slug]/page.tsx`) — Removed. Dynamic blog article route.
4. `/blog/double-slash-4-win` (`app/blog/[slug]/page.tsx`) — Removed. Dynamic blog article route.
5. `/blog/webmcp-nextjs` (`app/blog/[slug]/page.tsx`) — Removed. Dynamic blog article route.
6. `/portfolio-os` (`app/portfolio-os/page.tsx`, `app/portfolio-os/layout.tsx`) — Removed. Standalone teaser page.
7. `/llms.txt` (`app/llms.txt/route.ts`) — Removed. Redundant crawler endpoint.

---

## 17. Removed Files and Folders Grouped by Category

### Removed Route Directories & Page Files
- `app/about/page.tsx`
- `app/about/`
- `app/blog/[slug]/page.tsx`
- `app/blog/[slug]/`
- `app/blog/page.tsx`
- `app/blog/`
- `app/portfolio-os/layout.tsx`
- `app/portfolio-os/page.tsx`
- `app/portfolio-os/`
- `app/llms.txt/route.ts`
- `app/llms.txt/`

### Removed Data & Helper Files
- `lib/blog-posts.ts`

### Removed Static & Documentation Files
- `myself.txt`
- `ROUTE_INVENTORY.md`
- `public/llms.txt`
- `public/robots.txt`

---

## 18. Preserved Functionality

- **Homepage (`/`)**: 100% operational with all 9 active sections.
- **Resume Resource (`/Resume.pdf`, `/resume`, `/resume.pdf`)**: Fully functional with zero-redirect delivery.
- **Smooth Scrolling Pipeline**: Lenis synchronized with GSAP ticker loop.
- **Dual-Theme System**: Seamless light/dark toggling with PixelSwap transition and Star Wars switch.
- **Visitor Telemetry**: Redis counter and fallback badge preserved.
- **Contact Workflow**: Formspree submission and clipboard copy feedback preserved.
- **Avento AI Support Bot**: Script initialization preserved.
- **Analytics**: Google Analytics 4 and Vercel Speed Insights preserved.
- **All 10 API Handlers**: Active under `/api/` with internal rewrites for agent discovery.

---

## 19. Build, Lint, and TypeScript Validation Results

| Test / Command | Result | Verification Notes |
| :--- | :--- | :--- |
| **TypeScript (`npx tsc --noEmit`)** | **PASS (Code 0)** | 0 compilation errors across the entire codebase. |
| **Turbopack Build (`npm run build`)** | **PASS (Code 0)** | Compiled in 17.3s. Generated 16 optimized routes (1 homepage + 15 system/API endpoints). Zero standalone pages remaining. |
| **ESLint (`npm run lint`)** | **CLI Limitation** | `package.json` contains `"lint": "next lint"`. Next.js 16 App Router CLI does not bundle a standalone `lint` command, and `eslint` is not listed in `devDependencies`. Documented as technical debt. |

---

## 20. Remaining Issues and Recommendations

1. **Production Deployment**:
   The local codebase is clean and verified. Once deployed to Vercel, the removed pages will naturally return 404, deindexing them from search engines over time.
2. **ESLint Package Configuration**:
   To enable `npm run lint`, install `eslint` and `eslint-config-next` in `devDependencies` with an ESLint flat config file.
3. **Subho's Computer Institute Start Date**:
   Duration is currently set to `"Present"`. You may configure the exact start date (e.g. `"2026 – Present"`) in `components/sections/Experience.tsx` line 25 whenever desired.
