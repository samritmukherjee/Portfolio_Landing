export const personJsonLd = {
  "@type": "Person",
  "@id": "https://samrit.dev/#person",
  name: "Samrit Mukherjee",
  alternateName: "Samrit",
  url: "https://samrit.dev/",
  image: {
    "@type": "ImageObject",
    "@id": "https://samrit.dev/#profile-image",
    url: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
    caption: "Samrit Mukherjee",
  },
  sameAs: [
    "https://github.com/samritmukherjee",
    "https://www.linkedin.com/in/samrit-mukherjee/",
  ],
  jobTitle: ["AI Systems Engineer", "Full-Stack Developer"],
  description:
    "Samrit Mukherjee is an AI Systems Engineer and Full-Stack Developer based in Kolkata, India. He builds AI-powered software, scalable platforms, and intelligent automation systems.",
  email: "samritmukherjee05@gmail.com",
  worksFor: [
    {
      "@type": "Organization",
      name: "Mount Litera Zee School",
      description: "Technical Advisor / Internship on digital infrastructure, school technology workflows, and administrative systems.",
    },
  ],
  affiliation: [
    {
      "@type": "Organization",
      name: "Hackerspace MSIT",
      description: "Designer & Web Contributor at student-led technical community.",
    },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Meghnad Saha Institute of Technology",
    alternateName: "MSIT",
    url: "https://msit.edu.in",
  },
  award: [
    "Smart India Hackathon 2026 - Panel Winner & Second Runner-Up Overall",
    "BuildX 2026 (IIT Kharagpur) - Winner",
    "Google Solution Challenge 2026 - Top 106 Globally",
    "Synchronicity 2.0 (Jadavpur University) - Best Startup Track Winner",
    "Double Slash 4.0 (Jadavpur University) - Top 30 Finalist (300+ Teams)",
    "ShowcaseX x Techsprint (RCCIIT) - Winner",
    "Hello World Hacks (RCCIIT) - Best Beginner's Team",
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
  "@type": "WebSite",
  "@id": "https://samrit.dev/#website",
  name: "Samrit Mukherjee",
  url: "https://samrit.dev/",
  description:
    "Official portfolio of Samrit Mukherjee — AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner building intelligent software and enterprise platforms.",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://samrit.dev/#person",
  },
};

export const profilePageJsonLd = {
  "@type": "ProfilePage",
  "@id": "https://samrit.dev/#webpage",
  url: "https://samrit.dev/",
  name: "Samrit Mukherjee | AI Systems & Full-Stack Engineering",
  description:
    "Official portfolio and engineering projects of Samrit Mukherjee, an AI Systems Engineer and Full-Stack Developer based in Kolkata, India.",
  inLanguage: "en-IN",
  mainEntity: {
    "@id": "https://samrit.dev/#person",
  },
  isPartOf: {
    "@id": "https://samrit.dev/#website",
  },
  primaryImageOfPage: {
    "@id": "https://samrit.dev/#profile-image",
  },
};

export const projectsItemListJsonLd = {
  "@type": "ItemList",
  "@id": "https://samrit.dev/#featured-projects",
  name: "Featured Projects by Samrit Mukherjee",
  description: "Production-ready platforms and AI systems engineered by Samrit Mukherjee.",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Cosmic Canvas",
        url: "https://cosmic-canvas-delta.vercel.app/",
        description: "AI-powered design platform that transforms natural-language prompts into editable visual compositions.",
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
        description: "AI health guidance application providing conversational symptom understanding, preventive insights, and health accessibility.",
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
        description: "Operating-system-inspired portfolio interface with draggable desktop windows, terminal workflows, and interactive applications.",
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
        description: "Multi-tenant, RAG-powered customer support SaaS platform converting business documents and web content into context-aware AI support widgets.",
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
        description: "Web-based asset management and administrative platform streamlining inventory tracking, requests, role-based approvals, and accountability.",
        creator: {
          "@id": "https://samrit.dev/#person",
        },
      },
    },
  ],
};
