# Samrit Mukherjee - Portfolio

A premium, interactive portfolio showcasing AI systems, full-stack engineering, and product development expertise. Featuring smooth animations, dark/light modes, and fully responsive design across all devices.

**🌐 Live**: [samritmukherjee.vercel.app](https://samritmukherjee.vercel.app/)

---

## ✨ Features

- **Premium Design** - Luxury dark mode with gold accents, glassmorphism UI
- **Smooth Scrolling** - Lenis-powered scroll with hidden scrollbar
- **Dark/Light Modes** - Theme switching with gold/graphite (dark) and clean light palette
- **Interactive Animations** - Framer Motion transitions, hover effects, scroll-driven reveals
- **Responsive Layout** - Optimized for mobile, tablet, and desktop
- **Accessibility** - WCAG compliant, keyboard navigation, screen reader support
- **Performance** - Optimized images on Cloudinary CDN, lazy loading, fast rendering
- **Modern Tech Stack** - Next.js 16, React 18, TypeScript, Tailwind CSS

---

## 🛠️ Technologies

| Area | Stack |
|------|-------|
| **Frontend** | Next.js 16, React 18, TypeScript 5 |
| **Styling** | Tailwind CSS, CSS Variables, Glassmorphism |
| **Animations** | Framer Motion, Lenis (smooth scroll) |
| **UI/UX** | Custom components, React Icons, Aceternity UI |
| **Images** | Cloudinary CDN |
| **Deployment** | Vercel (optimized with Turbopack) |

---

## 🎯 Portfolio Sections

### Hero Section
- Eye-catching introduction with animated text
- Current focus statement with metrics (8+ Projects, 2+ Years Experience)
- Call-to-action buttons (Download Resume, Get In Touch)
- Social media links (GitHub, LinkedIn)
- Availability badge for new projects

### About
- Personal background and philosophy
- Key stats and achievements
- Profile image with hover interactions
- Core principles and values

### Experience
- Professional work history
- Volunteer and leadership roles
- Timeline format with role details
- Technologies and impact highlights

### Featured Projects
- Interactive carousel showcase
- Tech stack for each project
- Live demo and repository links
- 3D perspective animations
- Image reveal on hover

### Skills
- 7 skill categories:
  - **Frontend** - React, Next.js, Tailwind CSS, Framer Motion
  - **Backend** - Node.js, Flask, FastAPI, REST APIs
  - **Programming** - JavaScript, TypeScript, Python, Java, C/C++
  - **Data & AI** - NumPy, Pandas, ML Systems
  - **Tools** - Git, GitHub, Vercel, AWS, Figma
  - **Design** - UI/UX, Adobe Photoshop, Figma
  - **Core Concepts** - DSA, AI Systems, Full Stack Engineering, Product Development

### Hackathons & Accolades
- Hackathon wins and achievements
- Trophy badges and location info
- Image reveals with hover effects
- Mobile-optimized smooth scrolling (no lag)

### OS Experience
- Interactive portfolio OS showcase
- Scroll-driven animations
- Status indicators for upcoming features
- Call-to-action to explore

### Resume
- Download option with gradient button
- Professional document link
- One-click access

### Contact
- Email and social links
- Dark and light mode styled buttons
- Gradient effects

## 🎨 Design System

### Color Palette

**Dark Mode** (Premium):
- Background: `#050505` (Deep Black)
- Surface: `#0f0f0f` (Graphite)
- Accent: `#d4af37` (Warm Gold)
- Text: `#f5f5f5` (Off-white)

**Light Mode** (Clean):
- Background: `#ffffff` (Pure White)
- Surface: `#f9fafb` (Light Gray)
- Accent: `#1d4ed8` (Deep Blue)
- Text: `#111827` (Dark Gray)

### Components
- **Glass Cards** - Semi-transparent with gold/blue borders
- **Glow Effects** - Accent-colored halos on hover
- **Smooth Transitions** - 300-500ms duration animations
- **Responsive Typography** - Fluid font sizes (clamp)

---

## � Performance

- **Build Time**: ~14-20 seconds (Next.js Turbopack)
- **Routes**: 3 prerendered pages (/, /portfolio-os, /_not-found)
- **Image Optimization**: Cloudinary CDN with responsive sizing
- **Mobile Optimization**: Disabled animations on mobile for smooth scrolling
- **Smooth Scroll**: Lenis library with custom RAF timing
- **GPU Acceleration**: Hardware-accelerated transforms

---

## 📄 Recent Enhancements

✅ **Premium Dark Mode** - Replaced blue palette with luxury gold/graphite theme  
✅ **Visible Card Borders** - Enhanced border opacity for better dark mode visibility  
✅ **Light Mode Contrast** - White hover text over images for readability  
✅ **Mobile Performance** - Optimized Hackathon cards to eliminate scroll lag  
✅ **Hero Section** - Fixed metrics box sizing across all screen sizes  
✅ **Smooth Scrolling** - Lenis integration with hidden scrollbar  
✅ **CDN Images** - All images hosted on Cloudinary for fast loading  
✅ **Container Scroll Animation** - Aceternity component for OS section  

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main portfolio page
│   └── portfolio-os/page.tsx   # Portfolio OS page
│
├── components/
│   ├── sections/               # Page sections
│   │   ├── HeroGlassmorphism.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── CircularProjects.tsx
│   │   ├── Skills.tsx
│   │   ├── Hackathons.tsx
│   │   ├── ContainerScrollAnimation.tsx
│   │   ├── Contact.tsx
│   │   └── Resume.tsx
│   ├── animations/             # Reusable animations
│   │   ├── BlurText.tsx
│   │   ├── DecryptedText.tsx
│   │   ├── GradientText.tsx
│   │   └── RotatingText.tsx
│   ├── spotlight-card.tsx
│   ├── TreeNavigation.tsx
│   └── Footer.tsx
│
├── styles/
│   └── globals.css             # Global styles, theme variables
│
├── lib/
│   ├── utils.ts
│   └── scrollToElement.ts
│
├── hooks/
│   └── useLenis.ts             # Smooth scroll hook
│
├── public/
│   ├── projects/               # Project images (Cloudinary)
│   └── hackathons/             # Hackathon images (Cloudinary)
│
└── config files
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── next.config.ts
    └── package.json
```

---

## 🔗 Links

- **Portfolio**: [samritmukherjee.vercel.app](https://samritmukherjee.vercel.app/)
- **GitHub**: [github.com/samritmukherjee](https://github.com/samritmukherjee)
- **LinkedIn**: [linkedin.com/in/samrit-mukherjee](https://www.linkedin.com/in/samrit-mukherjee-412788318/)

---

## 🤖 Agent Discovery & AI Integration

This portfolio is **fully AI-ready** with comprehensive agent discovery capabilities:

### ✅ Implemented Standards

- **RFC 8288** - Link Response Headers for agent discovery
- **RFC 9727** - API Catalog with Linkset+JSON format
- **RFC 9728** - OAuth Protected Resource Metadata
- **Agent Skills Discovery RFC v0.2.0** - Automated capability registration
- **MCP (Model Context Protocol)** - Browser & server tool integration
- **OpenAPI 3.0** - Complete API documentation
- **Content Signals** - AI training preferences
- **Markdown for Agents** - Content negotiation support

### 📍 Discovery Endpoints

| Endpoint | Purpose | Format |
|----------|---------|--------|
| `/robots.txt` | Robot rules & Content Signals | Text |
| `/sitemap.xml` | SEO sitemap | XML |
| `/.well-known/api-catalog` | API discovery (RFC 9727) | Linkset+JSON |
| `/.well-known/openapi.json` | OpenAPI specification | JSON |
| `/.well-known/agent-skills/index.json` | Agent skills registry | JSON |
| `/.well-known/mcp/server-card.json` | MCP server definition | JSON |
| `/api/health` | Service status | JSON |

### 🚀 Public APIs

```bash
# Projects (with markdown support)
GET /api/projects
GET /api/projects?category=ai
GET /api/projects -H "Accept: text/markdown"

# Skills
GET /api/skills
GET /api/skills -H "Accept: text/markdown"

# Contact
GET /api/contact
GET /api/contact -H "Accept: text/markdown"

# Visitor Tracking
GET /api/visitors
POST /api/visitors

# Health Check
GET /api/health
```

### 🧠 WebMCP Tools

Browser-based tools automatically registered for AI agents:
- `navigate_section` - Jump to portfolio sections
- `get_project_details` - Fetch project information
- `get_contact_info` - Retrieve contact information
- `read_resume` - Access resume data

**→ Full documentation: [AGENT_DISCOVERY.md](AGENT_DISCOVERY.md)**

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
