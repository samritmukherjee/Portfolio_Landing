export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://samrit.dev/#person",
  name: "Samrit Mukherjee",
  alternateName: "Samrit",
  url: "https://samrit.dev/",
  image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
  sameAs: [
    "https://github.com/samritmukherjee",
    "https://www.linkedin.com/in/samrit-mukherjee/",
  ],
  jobTitle: "AI Systems & Full-Stack Engineer",
  description:
    "Samrit Mukherjee is an AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner building intelligent, scalable software, enterprise platforms, and AI-powered products.",
  email: "samritmukherjee05@gmail.com",
  worksFor: [
    {
      "@type": "Organization",
      name: "Mount Litera Zee School",
      description: "Technical Advisor / Internship on digital infrastructure, administrative systems, and ERP workflows.",
    },
  ],
  affiliation: [
    {
      "@type": "Organization",
      name: "Hackerspace MSIT",
      description: "Designer & Web Contributor.",
    },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Meghnad Saha Institute of Technology",
    alternateName: "MSIT",
    url: "https://msit.edu.in",
  },
  award: [
    "Smart India Hackathon 2026 - Panel Winner & 2nd Runner-Up Overall",
    "BuildX 2026 (IIT Kharagpur) - Winner",
    "Google Solution Challenge 2026 - Top 106 Globally",
    "Synchronicity 2.0 (Jadavpur University) - Best Startup Track Winner",
    "Double Slash 4.0 (Jadavpur University) - Top 30 Finalist (300+ Teams)",
    "ShowcaseX x Techsprint (RCCIIT) - Winner",
    "Hello World Hacks (RCCIIT) - Best Beginner's Team",
    "GirlScript Summer of Code (GSSoC '26) - Open Source Contributor",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Agentic AI",
    "Retrieval-Augmented Generation (RAG)",
    "Full-Stack Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Enterprise Systems & ERP",
    "Role-Based Access Control",
    "Workflow Automation",
    "Computer Vision",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://samrit.dev/#website",
  name: "Samrit Mukherjee",
  url: "https://samrit.dev/",
  description:
    "Official portfolio of Samrit Mukherjee — 11× hackathon winner, AI Systems and Full-Stack Engineer building enterprise platforms and intelligent software.",
  publisher: {
    "@id": "https://samrit.dev/#person",
  },
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://samrit.dev/#webpage",
  url: "https://samrit.dev/",
  name: "Samrit Mukherjee | AI Systems, Full-Stack Engineering & 11× Hackathon Winner",
  description:
    "Explore the portfolio, projects, and hackathon achievements of Samrit Mukherjee, an AI Systems Engineer and Full-Stack Developer based in Kolkata, India.",
  mainEntity: {
    "@id": "https://samrit.dev/#person",
  },
  isPartOf: {
    "@id": "https://samrit.dev/#website",
  },
};

export const hackerspaceOrgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hackerspace MSIT",
  url: "https://samrit.dev/",
  description: "Student-led tech community and creative builders lab at Meghnad Saha Institute of Technology.",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Meghnad Saha Institute of Technology",
    alternateName: "MSIT",
    url: "https://msit.edu.in",
  },
  member: {
    "@id": "https://samrit.dev/#person",
  },
};

export const projectsItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects by Samrit Mukherjee",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Cosmic Canvas",
        url: "https://cosmic-canvas-delta.vercel.app/",
        description: "AI-powered design platform transforming natural language prompts into editable visual compositions.",
        creator: {
          "@id": "https://samrit.dev/#person",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "SUKALYA.ai",
        url: "https://sukalya-ai.vercel.app/",
        description: "AI-driven health guidance application offering conversational health insights and preventive support.",
        creator: {
          "@id": "https://samrit.dev/#person",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Portfolio OS",
        url: "https://samrit.dev/portfolio-os",
        description: "Operating-system-inspired portfolio interface with desktop-style navigation and multi-window multitasking.",
        creator: {
          "@id": "https://samrit.dev/#person",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Avento AI",
        url: "https://www.avento-ai.xyz/",
        description: "Multi-tenant, RAG-powered customer support SaaS platform that transforms business documents into context-aware AI assistants.",
        creator: {
          "@id": "https://samrit.dev/#person",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Custodian",
        url: "https://custodian-mlzs.vercel.app/",
        description: "Web-based asset management and administrative platform designed to streamline inventory tracking, requests, approvals, and accountability.",
        creator: {
          "@id": "https://samrit.dev/#person",
        },
      },
    },
  ],
};
