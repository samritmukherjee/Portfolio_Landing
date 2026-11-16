# Complete Route & Endpoint Inventory — samrit.dev

**Generated**: November 16, 2026  
**Target Environment**: Next.js 16 (App Router) • Production: [https://samrit.dev](https://samrit.dev)  
**Verification Method**: Static source code analysis & live HTTP probe of production endpoints

---

## Executive Summary

A comprehensive audit of the portfolio repository and production deployment reveals **23 distinct URLs and endpoints**:
- **1 Main Homepage** (`/`) with 9 on-page anchor sections.
- **3 Secondary / Unlinked Pages** (`/about`, `/blog`, `/portfolio-os`) that exist as fully rendered HTML pages but are not linked in the main navbar or dock.
- **3 Dynamic Blog Post Routes** under `/blog/[slug]`, pre-rendered at build time via Static Site Generation (SSG).
- **10 API & Agent Discovery Routes** handling telemetry, data distribution, and AI agent integration.
- **6 System, Utility, and PWA Endpoints** (`/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest`, `/opengraph-image`, `/Resume.pdf`).

---

## 1. Main Portfolio Pages

| Route / Path | Full Production URL | Page Title / Identity | Purpose & Description | Linked in Nav? | Accessible? | Status & Completeness | Indexing Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `https://samrit.dev/` | Samrit Mukherjee — AI Systems Engineer & 11× Hackathon Winner | Primary portfolio landing page. Composed of 9 synchronized sections: Hero, Tech Marquee, About, Services, Hackathons, Projects, Experience (Professional Journey), Technical Arsenal, and Contact. Features smooth scrolling (Lenis/GSAP), Star Wars theme toggle, and visitor tracking. | **Yes** (Primary Root) | **Yes** (200 OK) | Complete & Fully Maintained | **Indexed** (Sitemap Priority: 1.0) |

---

## 2. Secondary & Hidden Pages (Unlinked from Main Navigation)

These routes are valid, fully accessible Next.js pages but do **not** have links in the homepage floating `Navbar`, bottom `Dock`, or `Footer`.

| Route / Path | Full Production URL | Page Title / Identity | Purpose & Description | Linked in Nav? | Accessible? | Status & Completeness | Indexing Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/about` | `https://samrit.dev/about` | About Samrit Mukherjee \| AI Systems & Full-Stack Engineer | Standalone biographical profile page. Summarizes educational background (MSIT / MAKAUT, B.Tech CSE AI & ML graduating 2028), hackathon achievements (11×), featured projects, guiding principle, and provides direct CTAs back to `/#contact` and `/#projects`. | **No** (Navbar has hash `#about`) | **Yes** (200 OK) | Complete | **Indexed** (Sitemap Priority: 0.85) |
| `/blog` | `https://samrit.dev/blog` | Blog \| Samrit Mukherjee | Dedicated technical writing index. Displays publication cards for technical case studies and architectural breakdowns with dates, read times, and summaries. | **No** (Hidden from Nav/Dock) | **Yes** (200 OK) | Complete | **Indexed** (Sitemap Priority: 0.75) |
| `/portfolio-os` | `https://samrit.dev/portfolio-os` | Portfolio OS — Interactive Workstation \| Samrit Mukherjee | Standalone teaser page showcasing the upcoming interactive desktop OS portfolio workstation. Features animated aurora background, feature preview cards, status badges, and expected release ("Q3 2026"). | **No** (Hidden from Nav/Dock) | **Yes** (200 OK) | In Progress / Coming Soon Teaser | **Indexed** (Sitemap Priority: 0.6) |

---

## 3. Dynamic Routes (`/blog/[slug]`)

All dynamic routes are statically pre-rendered at build time using `generateStaticParams()` in `app/blog/[slug]/page.tsx` based on data in `lib/blog-posts.ts`.

| Route / Path | Full Production URL | Page Title / Identity | Purpose & Description | Linked in Nav? | Accessible? | Status & Completeness | Indexing Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/blog/cosmic-canvas-architecture` | `https://samrit.dev/blog/cosmic-canvas-architecture` | How I Built Cosmic Canvas — AI Design Tool Architecture \| Samrit Mukherjee | Case study on building an AI-powered design tool. Details multi-layered generation, prompt pipelines, editable output vs flat PNGs, and iteration velocity. | **No** (Linked from `/blog`) | **Yes** (200 OK) | Complete | **Indexed** (Sitemap Priority: 0.7) |
| `/blog/double-slash-4-win` | `https://samrit.dev/blog/double-slash-4-win` | Winning Double Slash 4.0 — What We Built in 36 Hours \| Samrit Mukherjee | Retrospective on winning the 36-hour hackathon at Jadavpur University against 300+ teams. Details scoping strategy and interactive demos. | **No** (Linked from `/blog`) | **Yes** (200 OK) | Complete | **Indexed** (Sitemap Priority: 0.7) |
| `/blog/webmcp-nextjs` | `https://samrit.dev/blog/webmcp-nextjs` | Setting Up WebMCP in Next.js 16 \| Samrit Mukherjee | Technical guide describing how AI agent discovery protocols (WebMCP, OpenAPI, RFC 9727 Linkset) were integrated into this Next.js 16 portfolio. | **No** (Linked from `/blog`) | **Yes** (200 OK) | Complete | **Indexed** (Sitemap Priority: 0.7) |

---

## 4. API & Backend Route Handlers

All API routes are served under `/api/` by Next.js Route Handlers (`route.ts`). Middleware applies `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400` and handles agent Markdown content negotiation.

| Route / Path | Method | Full Production URL | Content-Type | Purpose & Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| `/api/health` | `GET` | `https://samrit.dev/api/health` | `application/json` | Uptime and service health check. Returns status `"ok"`, uptime in seconds, API version `"1.0.0"`, and current timestamp. Verified operational (200 OK). |
| `/api/projects` | `GET` | `https://samrit.dev/api/projects` | `application/json` | Returns complete JSON array of canonical projects from `lib/projects-data.ts`. Verified operational (200 OK). |
| `/api/skills` | `GET` | `https://samrit.dev/api/skills` | `application/json` | Returns hierarchical skill categories, proficiency levels, and tech stack from `lib/skills-data.ts`. Verified operational (200 OK). |
| `/api/v1/projects` | `GET` | `https://samrit.dev/api/v1/projects` | `application/json` | Versioned REST endpoint supporting query filtering (`?category=...`). Used by WebMCP agent tool discovery. Verified operational (200 OK). |
| `/api/visitors` | `GET`, `POST` | `https://samrit.dev/api/visitors` | `application/json` | Telemetry endpoint. `GET` reads total global visits; `POST` accepts `{ isNewVisitor: boolean }` and increments Upstash Redis key `portfolio:global_visits`. Includes memory fallback if Redis is unreachable. Verified operational (200 OK). |
| `/api/contact` | `GET` | `https://samrit.dev/api/contact` | `application/json` / `text/markdown` | Returns contact channels, availability, and social profiles. Supports `Accept: text/markdown` for AI agent scraping. Verified operational (200 OK). |
| `/api/well-known/api-catalog` | `GET` | `https://samrit.dev/api/well-known/api-catalog` | `application/linkset+json` | RFC 9727 linkset catalog specifying relationships between endpoints, OpenAPI definitions, and agent tools. Verified operational (200 OK). |
| `/api/well-known/agent-skills-index` | `GET` | `https://samrit.dev/api/well-known/agent-skills-index` | `application/json` | Index of registered WebMCP agent skills (`get-projects`, `get-skills`, `get-contact-info`). Verified operational (200 OK). |
| `/api/well-known/mcp/server-card` | `GET` | `https://samrit.dev/api/well-known/mcp/server-card` | `application/json` | Model Context Protocol (MCP) server manifest card for AI agent integration. Verified operational (200 OK). |
| `/api/well-known/openapi` | `GET` | `https://samrit.dev/api/well-known/openapi` | `application/json` | OpenAPI 3.0.3 specification documenting all public API endpoints. Verified operational (200 OK). |

---

## 5. Utility & System Routes

| Route / Path | Full Production URL | Content-Type | Purpose & Verification Status |
| :--- | :--- | :--- | :--- |
| `/sitemap.xml` | `https://samrit.dev/sitemap.xml` | `application/xml` | Dynamic XML sitemap generated by `app/sitemap.ts`. Contains `/`, `/about`, `/blog`, 3 blog slugs, `/Resume.pdf`, and `/portfolio-os`. Verified operational (200 OK). |
| `/robots.txt` | `https://samrit.dev/robots.txt` | `text/plain` | Search crawler and AI bot directives. Disallows `/api/`, `/admin`, `/private`. Allows Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot. Declares sitemap and AI content signals. Verified operational (200 OK). |
| `/llms.txt` | `https://samrit.dev/llms.txt` | `text/plain` | Plain-text Markdown dossier optimized for LLM scrapers and search summarizers. Dynamic handler at `app/llms.txt/route.ts` with static fallback in `public/llms.txt`. Verified operational (200 OK). |
| `/manifest.webmanifest` | `https://samrit.dev/manifest.webmanifest` | `application/manifest+json` | PWA web application manifest generated by `app/manifest.ts`. Defines standalone theme colors, name, and icons. Verified operational (200 OK). |
| `/opengraph-image` | `https://samrit.dev/opengraph-image` | `image/png` | Edge-rendered 1200×630 dynamic social share card generated via `@vercel/og` (`ImageResponse`). Verified operational (200 OK). |
| `/Resume.pdf` | `https://samrit.dev/Resume.pdf` | `application/pdf` | Official PDF resume served statically from `public/Resume.pdf`. Verified operational (200 OK). |

---

## 6. Rewrites & Path Aliases

| Source Route | Target Destination | Rewrite Type | Status & Purpose |
| :--- | :--- | :--- | :--- |
| `/resume.pdf` | `/Resume.pdf` | Internal Next.js Rewrite | Case-insensitive resume access. Serves official resume without 301/302 redirect. (200 OK) |
| `/.well-known/api-catalog` | `/api/well-known/api-catalog` | Internal Next.js Rewrite | Maps RFC 9727 standard path to API handler. Resolves production 404. |
| `/.well-known/agent-skills/index.json` | `/api/well-known/agent-skills-index` | Internal Next.js Rewrite | Maps standard agent skill URL to API handler. Resolves production 404. |
| `/.well-known/mcp/server-card.json` | `/api/well-known/mcp/server-card` | Internal Next.js Rewrite | Maps standard MCP manifest URL to API handler. Resolves production 404. |
| `/.well-known/openapi.json` | `/api/well-known/openapi` | Internal Next.js Rewrite | Maps standard OpenAPI URL to API handler. Resolves production 404. |

---

## 7. Production Discrepancy Findings & Recommendations

1. **The Hidden Page Paradox**:
   - The user noted they discovered `/blog` by surprise.
   - Investigation reveals `/about`, `/blog`, and `/portfolio-os` are all active, compiled, and indexed in Google via `sitemap.xml`, yet **none of them are linked from the website's UI**.
   - The desktop `Navbar`, mobile `Dock`, and `Footer` strictly link to hash fragments on the homepage (`/#hero`, `/#about`, `/#services`, `/#hackathons`, `/#projects`, `/#career`, `/#arsenal`, `/#contact`).
   - *Recommendation*: Keep pages active. In a future update, consider adding a subtle "Blog" or "Writing" link to the footer navigation, or creating a dedicated projects showcase link if desired.
2. **Standard `.well-known/` URL Resolution**:
   - While `/api/well-known/*` was accessible, the standard root URLs referenced in `robots.txt` and `<head>` Link headers (`/.well-known/api-catalog`, `/.well-known/agent-skills/index.json`, `/.well-known/mcp/server-card.json`, `/.well-known/openapi.json`) returned 404 on production.
   - *Status*: Resolved in `next.config.ts` via internal Next.js rewrites.

