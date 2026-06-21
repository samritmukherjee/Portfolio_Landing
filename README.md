# Samrit Mukherjee — Portfolio

A premium, interactive portfolio showcasing AI systems, full-stack engineering, and product development expertise. Features smooth animations, dark/light modes, responsive design, AI agent discovery endpoints, and a locally hosted resume PDF.

**🌐 Live**: [samrit.dev](https://samrit.dev)

---

## ✨ Features

- **Premium Design** — Luxury dark mode with gold accents, glassmorphism UI, and clean light palette
- **Smooth Scrolling** — Lenis-powered smooth scroll with hidden scrollbar
- **Dark / Light Modes** — Theme switching with gold/graphite (dark) and clean white/blue (light)
- **Interactive Animations** — Framer Motion transitions, hover effects, and scroll-driven reveals
- **Responsive Layout** — Optimized for mobile, tablet, and desktop with mobile-specific components
- **Accessibility** — Skip-to-content link, keyboard navigation, ARIA labels, screen reader support
- **Performance** — Cloudinary CDN images, lazy-loaded dynamic sections, GPU-accelerated animations
- **Visitor Counter** — Redis-backed real-time visitor tracking with animated FlipCountdown
- **Local Resume PDF** — Resume hosted directly at `/Resume.pdf` with download and in-tab view
- **AI-Ready** — WebMCP tools, agent skills registry, OpenAPI spec, and RFC-compliant discovery endpoints

---

## 🛠️ Tech Stack

| Area | Stack |
|------|-------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS v3, CSS Variables, Glassmorphism |
| **Animations** | Framer Motion, Lenis (smooth scroll) |
| **UI Components** | Custom components, React Icons, Lucide React |
| **Styled Components** | styled-components v6 (with Next.js registry) |
| **State / Data** | Redis (Upstash) for visitor tracking |
| **Images** | Cloudinary CDN |
| **Analytics** | Vercel Speed Insights, Google Analytics (gtag) |
| **Deployment** | Vercel |

---

## 📋 Portfolio Sections

### Hero
- Animated headline with `DecryptedText` and `RotatingText` effects
- Availability badge (Available / Busy), driven by `AVAILABILITY_STATUS` env var
- Count-up metrics (Projects, Experience, Hackathon Wins)
- CTA buttons: **Download Resume** (scrolls to Resume section) and **View Work**
- GitHub and LinkedIn icon links

### About
- Personal background, philosophy, and core principles
- Profile image with hover interactions and stats

### Experience
- Professional work history and volunteer/leadership roles
- Timeline format with technologies and impact highlights

### Hackathons & Accolades
- Desktop: full interactive `Hackathons` component with image reveals
- Mobile: dedicated `MobileHackathons` component with smooth scrolling

### Featured Projects
- `CircularProjects` carousel with 3D perspective animations
- Tech stack badges, live demo links, and hover image reveals

### OS Preview
- `ContainerScrollAnimation` for the Portfolio OS showcase
- Scroll-driven reveal with link to `/portfolio-os`

### Skills
- 7 categorized skill groups (Frontend, Backend, Programming, Data & AI, Tools, Design, Core Concepts)

### Resume
- "Download PDF" button — direct file download of `/Resume.pdf`
- "View Online" button — opens `/Resume.pdf` in a new browser tab
- Preview image with hover reveal, and metadata (edition date, file format)

### Contact
- ElectricBorder-animated cards for GitHub, LinkedIn, and Email
- Location badge (Kolkata, India)

### Footer
- Animated visitor counter (Redis-backed, FlipCountdown animation)
- Social links with hover animations
- Copyright notice

---

## 🎨 Design System

### Color Palette

**Dark Mode** (Default — Premium):
- Background: `#050505` (Deep Black)
- Surface: `#0f0f0f` (Graphite)
- Accent: `#d4af37` (Warm Gold)
- Text: `#f5f5f5` (Off-white)

**Light Mode** (Clean):
- Background: `#ffffff` (Pure White)
- Surface: `#f9fafb` (Light Gray)
- Accent: `#1d4ed8` (Deep Blue)
- Text: `#111827` (Dark Gray)

### Typography
- **Body**: DM Sans (`--font-body`) from Google Fonts
- **Display**: Syne (`--font-display`) from Google Fonts — used for headings and the logo

### Components
- **Glass Cards** — Semi-transparent with themed borders
- **BlobButton** — SVG goo-filter animated buttons (primary, secondary, icon variants)
- **ElectricBorder** — Animated canvas border for contact cards
- **FlipCountdown** — Animated digit flip for the visitor counter
- **PageLoader** — Full-screen loading animation on first visit

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx                  # Root layout, metadata, fonts, analytics
│   ├── page.tsx                    # Main portfolio page (all sections)
│   ├── sitemap.ts                  # Dynamic XML sitemap
│   ├── opengraph-image.tsx         # Dynamic OG image generation
│   ├── about/                      # /about page
│   ├── blog/                       # /blog and blog post pages
│   ├── portfolio-os/               # /portfolio-os interactive page
│   ├── llms.txt/                   # /llms.txt route handler
│   └── api/
│       ├── contact/                # GET contact information
│       ├── health/                 # GET service health check
│       ├── projects/               # GET projects (JSON + Markdown)
│       ├── skills/                 # GET skills (JSON + Markdown)
│       ├── visitors/               # GET/POST visitor count (Redis)
│       ├── v1/                     # Versioned API routes
│       └── well-known/
│           ├── api-catalog/        # RFC 9727 Linkset+JSON API catalog
│           ├── agent-skills-index/ # Agent Skills Discovery v0.2.0
│           ├── mcp/                # MCP server card (Model Context Protocol)
│           └── openapi/            # OpenAPI 3.0 specification
│
├── components/
│   ├── sections/
│   │   ├── HeroGlassmorphism.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── CircularProjects.tsx
│   │   ├── Skills.tsx
│   │   ├── Hackathons.tsx
│   │   ├── ContainerScrollAnimation.tsx
│   │   ├── Resume.tsx
│   │   ├── ContactCards.tsx
│   │   ├── index.ts
│   │   └── mobile/
│   │       └── MobileHackathons.tsx
│   ├── animations/
│   │   ├── DecryptedText.tsx
│   │   ├── RotatingText.tsx
│   │   └── ...
│   ├── ui/
│   │   └── BlobButton.tsx
│   ├── ElectricBorder.jsx
│   ├── Carousel.jsx
│   ├── ScrollStack.jsx
│   ├── Folder.jsx
│   ├── Footer.tsx
│   ├── PageLoader.tsx
│   ├── JsonLd.tsx
│   ├── LenisWrapper.tsx
│   ├── SiteAnalytics.tsx
│   ├── TreeNavigation.tsx
│   ├── flip-countdown.tsx
│   ├── spotlight-card.tsx
│   └── star-wars-toggle-switch.tsx
│
├── hooks/
│   └── useWebMCP.ts                # WebMCP browser tool registration
│
├── lib/
│   ├── projects-data.ts            # Project definitions
│   ├── skills-data.ts              # Skills definitions
│   ├── blog-posts.ts               # Blog post metadata
│   ├── structured-data.ts          # JSON-LD schema objects
│   ├── redis.ts                    # Redis client (Upstash)
│   ├── registry.tsx                # styled-components SSR registry
│   ├── scrollToElement.ts          # Smooth scroll utility
│   ├── visitor.ts                  # Client-side visitor session logic
│   └── utils.ts                    # Shared utilities
│
├── types/
│   └── webmcp.ts                   # WebMCP type definitions
│
├── styles/
│   └── globals.css                 # Global styles, CSS custom properties, theme tokens
│
├── public/
│   ├── Resume.pdf                  # ← Locally hosted resume (served at /Resume.pdf)
│   ├── llms.txt                    # AI content signals
│   ├── robots.txt                  # Crawler rules
│   └── fonts/                      # Self-hosted web fonts (if any)
│
├── middleware.ts                   # Next.js middleware (routing, headers)
├── next.config.ts                  # Next.js config (Cloudinary remote patterns, headers)
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- An [Upstash Redis](https://upstash.com/) account (for visitor tracking)

### Installation

```bash
# Clone the repository
git clone https://github.com/samritmukherjee/Portfolio_Landing.git
cd Portfolio_Landing

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Redis (Upstash) — required for visitor counter
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token

# Availability status shown in the Hero badge
# Set to "Busy" to show "Limited Availability"
AVAILABILITY_STATUS=Available

# Optional: Vercel Analytics / Speed Insights (auto-injected on Vercel)
# Optional: Google Analytics measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Avento AI bot widget
NEXT_PUBLIC_AVENTO_BOT_URL=
NEXT_PUBLIC_AVENTO_BOT_KEY=
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

---

## 📄 Resume

The resume PDF is served directly from the project's `public` folder:

- **File**: `public/Resume.pdf`
- **URL**: `/Resume.pdf`
- **Download**: The "Download PDF" button triggers a direct browser download
- **View**: The "View Online" button opens the PDF in a new browser tab

To update the resume, simply replace `public/Resume.pdf` with the new file. No code changes required.

---

## 🤖 Agent Discovery & AI Integration

This portfolio is **fully AI-ready** with comprehensive agent discovery capabilities:

### ✅ Implemented Standards

- **RFC 8288** — Link Response Headers for agent discovery
- **RFC 9727** — API Catalog with Linkset+JSON format
- **Agent Skills Discovery RFC v0.2.0** — Automated capability registration
- **MCP (Model Context Protocol)** — Browser tool integration via WebMCP
- **OpenAPI 3.0** — Complete API documentation
- **Content Signals** — AI training preferences via `llms.txt` and `robots.txt`

### 📍 Discovery Endpoints

| Endpoint | Purpose | Format |
|----------|---------|--------|
| `/robots.txt` | Crawler rules & content signals | Text |
| `/sitemap.xml` | SEO sitemap | XML |
| `/llms.txt` | AI agent content guide | Text |
| `/.well-known/api-catalog` | API discovery (RFC 9727) | Linkset+JSON |
| `/.well-known/openapi.json` | OpenAPI specification | JSON |
| `/.well-known/agent-skills/index.json` | Agent skills registry | JSON |
| `/.well-known/mcp/server-card.json` | MCP server definition | JSON |
| `/api/health` | Service status | JSON |

### 🚀 Public APIs

```bash
# Projects (with optional Markdown response)
GET /api/projects
GET /api/projects?category=ai
GET /api/projects  -H "Accept: text/markdown"

# Skills
GET /api/skills
GET /api/skills  -H "Accept: text/markdown"

# Contact
GET /api/contact
GET /api/contact  -H "Accept: text/markdown"

# Visitor Tracking
GET /api/visitors
POST /api/visitors

# Health Check
GET /api/health
```

### 🧠 WebMCP Browser Tools

Browser-based tools registered for AI agents via `hooks/useWebMCP.ts`:

| Tool | Description |
|------|-------------|
| `navigate_section` | Smooth-scroll to any portfolio section |
| `get_project_details` | Fetch project info by ID |
| `get_contact_info` | Retrieve contact information |
| `read_resume` | Access resume URL (`/Resume.pdf`) |

---

## 🔗 Links

- **Portfolio**: [samrit.dev](https://samrit.dev)
- **GitHub**: [github.com/samritmukherjee](https://github.com/samritmukherjee)
- **LinkedIn**: [linkedin.com/in/samrit-mukherjee-412788318](https://www.linkedin.com/in/samrit-mukherjee-412788318/)
- **Email**: samritmukherjee05@gmail.com

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
