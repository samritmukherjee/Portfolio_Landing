# Samrit's Portfolio

A modern, professional portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Clean, Linear Design** - Professional and easy to scan
- **Fully Responsive** - Works seamlessly on all devices
- **Warm Neutral Colors** - Stone/slate palette for a natural feel
- **Smooth Animations** - Subtle transitions and fade-ins
- **Organized Sections** - Hero, About, Hackathons, Projects, Skills, Resume, Contact
- **TypeScript** - Fully typed for better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js 14** - Latest React framework with App Router

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone or navigate to the project
cd portfolio-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   └── page.tsx            # Main portfolio page
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Hackathons.tsx  # Hackathons timeline
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills listing
│   │   ├── Resume.tsx      # Resume download
│   │   ├── Contact.tsx     # Contact section
│   │   └── index.ts        # Section exports
│   └── Footer.tsx          # Footer component
├── styles/
│   └── globals.css         # Global styles and Tailwind directives
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Customization

### Update Content

Edit the specific section components in `components/sections/` to update content:

- **Hero**: Modify name, role, and intro text in `Hero.tsx`
- **About**: Update background and experience in `About.tsx`
- **Projects**: Add/modify projects in `Projects.tsx`
- **Skills**: Update skills and categories in `Skills.tsx`
- **Contact**: Update contact links in `Contact.tsx`

### Update Colors

Modify the color palette in `tailwind.config.ts`. The site uses warm neutral tones (stone/slate).

### Add Fonts

Update the Inter font import in `app/layout.tsx` or modify `styles/globals.css`.

## Design Principles

- **Typography**: Inter font with clear hierarchy
- **Spacing**: Generous margins for clean layout
- **Colors**: Warm neutrals - no pure black or white
- **Shadows**: Soft and subtle
- **Animations**: Minimal and smooth only
- **Layout**: Natural, not over-engineered

## Browser Support

- Chrome (latest)
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
