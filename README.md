# Samrit Mukherjee's Portfolio

A high-performance, interactive portfolio showcasing AI systems, full-stack engineering, and product development projects. Built with cutting-edge web technologies for a seamless, accessible experience.

**Live Demo**: [samritmukherjee.vercel.app](https://samritmukherjee.vercel.app/)

---

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Smooth Animations** - Frame-motion powered transitions and micro-interactions
- **Accessibility First** - WCAG 2.1 compliant, keyboard navigable, screen reader friendly
- **Performance Optimized** - Lazy loading, code splitting, optimized images
- **Interactive Components** - Carousel projects, animated text, glass-morphism UI
- **SEO Optimized** - Metadata, structured data, semantic HTML
- **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + CSS Modules |
| **Animations** | Framer Motion |
| **Icons** | React Icons (FontAwesome) |
| **UI Components** | Custom components with React |
| **Deployment** | Vercel / Self-hosted |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samritmukherjee/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production

```bash
# Build optimized bundle
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout, metadata, fonts
│   └── page.tsx             # Main portfolio page
│
├── components/
│   ├── sections/            # Page sections
│   │   ├── HeroGlassmorphism.tsx    # Hero with glassmorphism
│   │   ├── About.tsx                # About & achievements
│   │   ├── Experience.tsx           # Work & volunteer roles
│   │   ├── CircularProjects.tsx     # Featured projects carousel
│   │   ├── Skills.tsx               # Technical skills
│   │   ├── Hackathons.tsx           # Hackathon wins
│   │   ├── Resume.tsx               # Resume download
│   │   ├── Contact.tsx              # Contact links
│   │   └── index.ts                 # Exports
│   │
│   ├── animations/          # Reusable animations
│   │   ├── BlurText.tsx
│   │   ├── DecryptedText.tsx
│   │   ├── GradientText.tsx
│   │   └── RotatingText.tsx
│   │
│   ├── spotlight-card.tsx   # Glow effect card component
│   ├── TreeNavigation.tsx   # Side navigation
│   ├── Footer.tsx           # Footer
│   └── star-wars-toggle-switch.tsx
│
├── styles/
│   └── globals.css          # Global styles, themes, utilities
│
├── lib/
│   └── utils.ts             # Utility functions
│
├── public/                  # Static assets
│   ├── projects/            # Project images
│   └── hackathons/          # Hackathon images
│
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## 🎨 Customization Guide

### Update Content

1. **Hero Section** - Edit `components/sections/HeroGlassmorphism.tsx`
   - Name, title, headline
   - Social links (GitHub, LinkedIn)
   - Call-to-action buttons

2. **About Section** - Edit `components/sections/About.tsx`
   - Bio and background
   - Stats (projects, students)
   - Profile image

3. **Experience** - Edit `components/sections/Experience.tsx`
   - Add/remove work experience
   - Update roles, durations, highlights

4. **Projects** - Edit `components/sections/CircularProjects.tsx`
   - Add featured projects
   - Update descriptions and links
   - Upload project images to `public/projects/`

5. **Skills** - Edit `components/sections/Skills.tsx`
   - Update skill categories
   - Modify proficiency levels

6. **Contact** - Edit `components/sections/Contact.tsx`
   - Update email link
   - Modify social media links

### Theme Customization

**Colors**: Edit `tailwind.config.ts`
```ts
theme: {
  extend: {
    colors: {
      accent: { /* Custom accent colors */ },
      stone: { /* Neutral palette */ }
    }
  }
}
```

**Fonts**: Update in `app/layout.tsx` or `styles/globals.css`

**Dark/Light Mode**: Theme variables in `styles/globals.css`

---

## 📋 Key Sections

### Hero Section
- Animated greeting with decrypted text
- Call-to-action buttons (Resume, Get In Touch)
- Social media links
- Availability badge

### About
- Personal bio with AI/ML focus
- Statistics (projects built, students taught)
- Profile image with hover effects
- Key principle highlight

### Experience
- Work and volunteer roles
- Timeline with bullet-point highlights
- Organized by type (work, volunteer, leadership)

### Featured Projects
- Interactive carousel with 3D perspective
- Project descriptions and tech stacks
- Links to live demos
- Image reveals on hover

### Hackathons
- Trophy-bearing wins only
- Card-based layout with image reveals
- Location and year badges
- Result labels

### Skills
- Categorized skills (Languages, Frameworks, Tools)
- Visual proficiency indicators
- Organized and scannable

### Contact
- Direct email compose link
- GitHub profile link
- LinkedIn connection
- All open in new tabs

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Deploy directly from git
vercel
```

### Self-Hosted

```bash
# Build
npm run build

# Start
npm start
```

Environment variables needed: None (all static)

---

## 🎯 Performance Optimizations

- Image optimization with Next.js Image
- Code splitting at route level
- Lazy loading for sections
- Minified CSS with Tailwind
- Optimized font loading
- Efficient animations with Framer Motion

---

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Focus indicators
- Screen reader optimized
- Reduced motion preferences respected

---

## 📝 License

This project is open source and available under the MIT License.

---

## 💬 Questions or Issues?

Feel free to reach out:
- **Email**: [samritmukherjee05@gmail.com](mailto:samritmukherjee05@gmail.com)
- **GitHub**: [@samritmukherjee](https://github.com/samritmukherjee)
- **LinkedIn**: [Samrit Mukherjee](https://linkedin.com/in/samrit-mukherjee-412788318/)

---

**Built with ❤️ by Samrit Mukherjee**
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add navigation menu
- Blog section
- Dark mode toggle
- Animated scrolling sections
- Interactive projects showcase

## License

Feel free to use this portfolio as a template for your own.

---

Built with ❤️ using Next.js and Tailwind CSS
