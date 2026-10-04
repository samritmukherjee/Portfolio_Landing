# Samrit Mukherjee — Portfolio (Samrit.dev)

A modern, high-performance personal portfolio and engineering showcase built for **Samrit Mukherjee** — AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner.

The website delivers an interactive, editorial web experience featuring smooth physics-based scrolling, light and dark themes, interactive project showcases, real-time accolades with photo reveals, AI agent discovery protocols, and a locally delivered resume.

🌐 **Live Website**: [https://samrit.dev/](https://samrit.dev/)

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Server Components) |
| **Runtime & Language** | [React 18](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/), CSS Custom Properties (Design Tokens), Glassmorphism |
| **Component Registry** | [styled-components v6](https://styled-components.com/) (SSR registry for Star Wars theme toggle) |
| **Animations & Physics** | [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll), [GSAP 3](https://greensock.com/gsap/) (ScrollTrigger & Ticker), [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Data & State** | [Redis](https://redis.io/) (`redis` client) for real-time global visitor counter |
| **Form Handling** | [@formspree/react](https://formspree.io/) |
| **Performance Analytics** | [@vercel/speed-insights](https://vercel.com/analytics) |
| **Media & CDN** | [Cloudinary CDN](https://cloudinary.com/) (dynamic image resizing and optimization) |
| **Deployment Target** | [Vercel](https://vercel.com/) |

---

## ✨ Key Architectural Features

- **Coordinated Scroll Pipeline**: Smooth vertical scrolling powered by Lenis, unified with GSAP's central RAF ticker loop to prevent competing animation frames. Native touch momentum is preserved on mobile devices, and reduced-motion user preferences (`prefers-reduced-motion: reduce`) are honored automatically.
- **Dynamic Dual Theme System**: Features a high-contrast dark mode (`#000000`) and editorial light mode (`#FFFFFF`) with crimson red accents (`#FF0000`). Initial theme state is evaluated synchronously in `<head>` via an inline IIFE to eliminate flash of unstyled theme (FOUC).
- **Interactive Projects Showcase**:
  - *Desktop*: SVG gooey-filtered folder tabs that blend the active tab pill into the project card.
  - *Mobile*: Touch-optimized horizontal card carousel with CSS scroll snap points.
- **Accolades & Hackathon Showcase**:
  - *Desktop*: 3-column card grid with live hover-activated photo reveals and podium statistics.
  - *Mobile*: Horizontal snap-scroll carousel with explicit photo toggle buttons.
- **Preloaded First-Visit Loader**: A split-panel shutter curtain exit animation powered by GSAP, rendered only once per browser session via `sessionStorage`.
- **Custom Precision Cursor**: Smooth-following custom pointer with spring-based scale reactions on hoverable elements (desktop only).
- **Direct Resume Delivery**: Zero-redirect local delivery of `/Resume.pdf` supporting both direct download and in-browser tab viewing.
- **Comprehensive Technical SEO & Structured Data**: Interlinked Schema.org `@graph` (`Person`, `WebSite`, `ProfilePage`, `ItemList` of `CreativeWork`), semantic `<h1>`–`<h3>` hierarchy, crawler-friendly `robots.txt`, XML sitemap, and dynamic Edge-rendered OpenGraph previews (`app/opengraph-image.tsx`).
- **AI Agent Discovery & WebMCP**: Full compliance with RFC 8288 link headers, RFC 9727 API catalog, OpenAPI 3.0 specification, agent skill index (`/.well-known/agent-skills/index.json`), and browser tool registration via `hooks/useWebMCP.ts`.

---

## 🎨 Design System Tokens

All styling tokens are declared as CSS custom properties in `styles/globals.css`:

```css
/* Dark Mode (Default) */
html[data-theme="dark"], html.dark {
  --theme-bg: #000000;
  --theme-surface: #0A0A0A;
  --theme-surface-2: #121212;
  --theme-surface-elevated: #181818;
  --theme-card: #0A0A0A;
  --theme-text: #FFFFFF;
  --theme-text-secondary: #A3A3A3;
  --theme-text-muted: #737373;
  --theme-border: rgba(255, 255, 255, 0.12);
  --theme-accent: #FF0000;
  --theme-accent-glow: rgba(255, 0, 0, 0.28);
}

/* Light Mode */
html[data-theme="light"] {
  --theme-bg: #FFFFFF;
  --theme-surface: #FAFAFA;
  --theme-surface-2: #F4F4F5;
  --theme-surface-elevated: #FFFFFF;
  --theme-card: #FFFFFF;
  --theme-text: #000000;
  --theme-text-secondary: #404040;
  --theme-text-muted: #737373;
  --theme-border: #E5E5E5;
  --theme-accent: #FF0000;
  --theme-accent-glow: rgba(255, 0, 0, 0.14);
}
```

### Typography
- **Body**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (`--font-body`), variable font loaded via Next.js Google Fonts.
- **Display Headings**: [Syne](https://fonts.google.com/specimen/Syne) (`--font-display`), weights 400–800 for titles and branding.

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx                  # Root layout, metadata, fonts, analytics, theme init
│   ├── page.tsx                    # Landing page composed of active sections
│   ├── sitemap.ts                  # Dynamic XML sitemap generator
│   ├── opengraph-image.tsx         # Edge-rendered dynamic OpenGraph social card
│   ├── manifest.ts                 # Web App Manifest (/manifest.webmanifest)
│   ├── about/                      # /about page route
│   ├── blog/                       # /blog list and /blog/[slug] dynamic case studies
│   ├── portfolio-os/               # /portfolio-os interactive workstation route
│   ├── llms.txt/                   # /llms.txt route handler for AI crawlers
│   └── api/
│       ├── contact/                # GET contact details (JSON + Markdown)
│       ├── health/                 # GET service health check
│       ├── projects/               # GET projects data
│       ├── skills/                 # GET skills hierarchy
│       ├── visitors/               # GET & POST visitor tracking endpoint
│       ├── v1/projects/            # Versioned projects REST API
│       └── well-known/
│           ├── api-catalog/        # RFC 9727 Linkset+JSON catalog
│           ├── agent-skills-index/ # Agent skills discovery registry
│           ├── mcp/server-card/    # MCP server manifest
│           └── openapi/            # OpenAPI 3.0 specification
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx                # Hero section with Lanyard badge & semantic h1
│   │   ├── TechStackMarquee.tsx    # Infinite logo ticker
│   │   ├── About.tsx               # About section with orbiting project logos
│   │   ├── Services.tsx            # What I Do / Core Capabilities
│   │   ├── Hackathons.tsx          # Hackathons & accolades with photo reveal
│   │   ├── Projects.tsx            # Featured projects with desktop folder & mobile snap
│   │   ├── Experience.tsx          # Professional journey timeline
│   │   ├── TechnicalArsenal.tsx    # Categorized skill badges with devicon logos
│   │   └── ContactCards.tsx        # Formspree contact form & direct reach-out cards
│   ├── ui/
│   │   ├── BlobButton.tsx          # SVG goo-filter interactive button
│   │   ├── CustomCursor.tsx        # Spring-interpolated custom cursor
│   │   ├── Dock.tsx                # macOS-style bottom navigation dock
│   │   ├── DotGrid.tsx             # Canvas dot grid background with radial glow
│   │   ├── LanyardBadge.tsx        # 3D interactive physics-based identity badge
│   │   ├── orbiting-circles.tsx    # CSS orbit animation primitive
│   │   └── orbiting-circles-demo.tsx# Brand orbit visualization
│   ├── fancy/
│   │   ├── filter/
│   │   │   └── gooey-svg-filter.tsx# Reusable SVG feGaussianBlur filter
│   │   └── text/
│   │       └── text-highlighter.tsx# Hand-drawn marker highlight effect
│   ├── Footer.tsx                  # Colophon, nav links, and visitor counter
│   ├── JsonLd.tsx                  # Schema.org structured data renderer
│   ├── LenisWrapper.tsx            # Client boundary wrapper for smooth scrolling
│   ├── Navbar.tsx                  # Floating responsive navigation bar
│   ├── PageLoader.tsx              # First-visit split shutter entrance loader
│   ├── SiteAnalytics.tsx           # Google Analytics (gtag) client loader
│   └── star-wars-toggle-switch.tsx # Theme toggle switch component
│
├── hooks/
│   ├── useLenis.ts                 # Smooth scroll hook synchronized with GSAP ticker
│   └── useWebMCP.ts                # WebMCP browser tool registration hook
│
├── lib/
│   ├── projects-data.ts            # Canonical project records and metadata
│   ├── skills-data.ts              # Categorized technical competencies
│   ├── blog-posts.ts               # Blog posts and case study metadata
│   ├── structured-data.ts          # Schema.org linked data graph
│   ├── redis.ts                    # Redis client initialization and visitor logic
│   ├── registry.tsx                # styled-components SSR stylesheet manager
│   ├── scrollToElement.ts          # Smooth scrolling helper for anchor targets
│   ├── visitor.ts                  # Client session visitor deduplication logic
│   └── utils.ts                    # Shared clsx and twMerge helper (`cn`)
│
├── public/
│   ├── Resume.pdf                  # Official resume PDF document
│   ├── favicon.ico                 # 32x32 root browser favicon (1.8 KB)
│   ├── apple-touch-icon.png        # 180x180 Apple touch icon (7.3 KB)
│   ├── coming_soon.png             # Fallback graphic for upcoming projects
│   ├── robots.txt                  # Search crawler directives
│   └── llms.txt                    # Plain text summary for LLM scrapers
│
├── middleware.ts                   # API caching and Markdown negotiation middleware
├── next.config.ts                  # Next.js configuration and Cloudinary remote patterns
├── tailwind.config.ts              # Tailwind CSS theme extension
├── tsconfig.json                   # Strict TypeScript compiler options
└── package.json                    # Project scripts and dependencies
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root to configure runtime integrations. All variables are optional for local development (fallbacks are implemented for missing credentials):

| Variable | Description | Example / Format |
| :--- | :--- | :--- |
| `REDIS_URL` | Redis connection URL for real-time visitor tracking | `redis://default:<password>@<host>:<port>` |
| `DEBUG_REDIS` | Set to `"true"` to enable verbose Redis error logging in development | `true` |
| `AVAILABILITY_STATUS` | Work availability badge state in Hero (`Available` or `Busy`) | `Available` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_AVENTO_BOT_URL` | Optional customer support bot script URL | `https://avento-bot.vercel.app/sdk.js` |
| `NEXT_PUBLIC_AVENTO_BOT_KEY` | Optional customer support bot public key | `pk_...` |

> [!NOTE]
> Never commit `.env` or `.env.local` files containing live credentials. Template references should be maintained in `.env.example`.

---

## 🚀 Local Development

### Prerequisites
- **Node.js**: `v18.18.0` or later (tested with Node 18, 20, and 22).
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/samritmukherjee/Portfolio_Landing.git
cd Portfolio_Landing

# 2. Install dependencies
npm install

# 3. Create local environment configuration
cp .env.example .env.local  # or create .env.local manually
```

### Running Locally

```bash
# Start the Next.js development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔍 Validation, Testing & Build Commands

| Command | Purpose | Expected Output |
| :--- | :--- | :--- |
| `npx tsc --noEmit` | Validates TypeScript types across all files strictly | Exit code `0` (Zero type errors) |
| `npm run build` | Compiles an optimized production build using Turbopack | Static generation of 22 routes with zero compilation warnings |
| `npm run start` | Serves the production build locally | Production server listening on `http://localhost:3000` |
| `npm run lint` | Runs the Next.js linter (`next lint`) | Validates code standards |

> [!TIP]
> **Windows Path Note**: If running `npm run lint` in environments where the repository path contains spaces, invoke ESLint directly or use `npx next lint .` to avoid directory argument parsing ambiguities.

---

## 🌐 Public REST APIs & Machine Protocols

The application exposes structured, cache-controlled endpoints for programmatic consumption and AI agent discovery:

### Public Data Endpoints

```bash
# Get all projects (JSON)
curl https://samrit.dev/api/projects

# Get projects with category filter
curl https://samrit.dev/api/projects?category=ai

# Content Negotiation: Request Markdown response
curl -H "Accept: text/markdown" https://samrit.dev/api/projects

# Get technical skills
curl https://samrit.dev/api/skills

# Service health check
curl https://samrit.dev/api/health

# Real-time visitor counter (increments on POST)
curl -X POST https://samrit.dev/api/visitors
```

### AI Discovery Protocols

| Endpoint | Standard / Protocol | Purpose |
| :--- | :--- | :--- |
| `/.well-known/api-catalog` | [RFC 9727](https://www.rfc-editor.org/rfc/rfc9727.html) | Machine-readable API discovery catalog |
| `/.well-known/agent-skills/index.json` | Agent Skills Discovery v0.2.0 | Capability registration for autonomous agents |
| `/.well-known/mcp/server-card.json` | Model Context Protocol (MCP) | MCP server card definition |
| `/.well-known/openapi.json` | OpenAPI 3.0 | Complete OpenAPI schema specification |
| `/llms.txt` | Content Signals | Plain-text content and architectural guide for LLM crawlers |

---

## 📄 Resume Maintenance

The resume is delivered directly from the static root:
- **Location**: `public/Resume.pdf`
- **Public URL**: `https://samrit.dev/Resume.pdf`

To update the resume, replace `public/Resume.pdf` with the updated PDF. The filename is version-tagged in query parameters (e.g., `/Resume.pdf?v=YYYYMMDD`) within `Hero.tsx` to bust intermediate CDN cache layers automatically.

---

## 🛡️ External Services & Operational Dependencies

- **Formspree**: Contact form messages are posted to endpoint `https://formspree.io/f/mqparaae` via `@formspree/react`. If the service is unreachable, users can use the one-click copy button for direct email delivery (`samritmukherjee05@gmail.com`).
- **Redis (Upstash / Cloud Redis)**: Powers the visitor counter at `/api/visitors`. If Redis is offline or unconfigured, the API gracefully falls back to `0` without breaking page rendering or throwing uncaught client errors.
- **Cloudinary CDN**: External imagery (project banners, logos, profile photos) is delivered through Cloudinary's optimized global media delivery network.

---

## 👤 Author & Contact

**Samrit Mukherjee**
- **Portfolio**: [https://samrit.dev/](https://samrit.dev/)
- **GitHub**: [@samritmukherjee](https://github.com/samritmukherjee)
- **LinkedIn**: [linkedin.com/in/samrit-mukherjee/](https://www.linkedin.com/in/samrit-mukherjee/)
- **Email**: [samritmukherjee05@gmail.com](mailto:samritmukherjee05@gmail.com)
- **Base Location**: Kolkata, West Bengal, India
