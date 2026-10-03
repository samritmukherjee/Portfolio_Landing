export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samrit Mukherjee",
  url: "https://samrit.dev",
  image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
  sameAs: [
    "https://github.com/samritmukherjee",
    "https://www.linkedin.com/in/samrit-mukherjee/",
  ],
  jobTitle: "AI Systems & Full-Stack Engineer",
  description: "Samrit Mukherjee — AI Systems Engineer, Full-Stack Developer, and 11× Hackathon Winner specializing in AI-driven enterprise systems, intelligent automation, and production-grade architectures.",
  email: "samritmukherjee05@gmail.com",
  affiliation: [
    {
      "@type": "EducationalOrganization",
      name: "Meghnad Saha Institute of Technology",
      alternateName: "MSIT",
      url: "https://msit.edu.in",
    },
    {
      "@type": "Organization",
      name: "Mount Litera Zee School",
      description: "Technical Advisor / Internship on digital infrastructure and ERP systems.",
    },
    {
      "@type": "Organization",
      name: "Hackerspace MSIT",
      description: "Designer & Web Contributor.",
    },
  ],
  award: [
    "Smart India Hackathon 2026 - Panel Winner & 2nd Runner-Up Overall",
    "BuildX 2026 (IIT Kharagpur) - Winner",
    "Google Solution Challenge 2026 - Top 106 Globally",
    "Synchronicity 2.0 - Best Startup Track Winner",
    "Double Slash 4.0 - Winner & Top 30 Finalist",
    "ShowcaseX x Techsprint - Winner",
    "Hello World Hacks - Best Beginner Team",
    "GirlScript Summer of Code (GSSoC '26) Open Source Contributor",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Enterprise Systems & ERP",
    "Role-Based Access Control",
    "Workflow Automation",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressCountry: "IN",
  },
};

export const hackerspaceOrgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hackerspace MSIT",
  url: "https://samrit.dev",
  description: "Student-led tech community and creative builders lab at Meghnad Saha Institute of Technology.",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Meghnad Saha Institute of Technology",
    alternateName: "MSIT",
    url: "https://msit.edu.in",
  },
  member: {
    "@type": "Person",
    name: "Samrit Mukherjee",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Samrit Mukherjee",
  url: "https://samrit.dev",
  description:
    "Official portfolio of Samrit Mukherjee — 11× hackathon winner, AI Systems and Full-Stack Engineer building enterprise platforms and intelligent software.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://samrit.dev/#projects",
    "query-input": "required name=search_term_string",
  },
};

export const projectsItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Cosmic Canvas",
        url: "https://cosmic-canvas-delta.vercel.app/",
        description: "AI-powered design platform transforming natural language prompts into editable visual compositions.",
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
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Avento AI",
        url: "https://avento.in",
        description: "Production-oriented AI chatbot SaaS delivering instant domain-grounded customer assistance.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Custodian",
        url: "https://custodian-navy.vercel.app",
        description: "Comprehensive ERP and management system designed for institutional governance and workflow automation.",
      },
    },
  ],
};
