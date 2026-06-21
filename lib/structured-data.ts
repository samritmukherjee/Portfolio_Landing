export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samrit Mukherjee",
  url: "https://samrit.dev",
  image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg",
  sameAs: [
    "https://github.com/samritmukherjee",
    "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
  ],
  jobTitle: "AI & ML Developer",
  description: "AI & ML Developer, Hackathon Winner, and BTech CSE student at Meghnad Saha Institute of Technology (MSIT) with multiple Hackathon achievements.",
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
      name: "Hackerspace MSIT",
      description: "Student-led tech community and creative builders lab.",
    }
  ],
  award: [
    "Google Solution Challenge 2026 - Top 106 Globally",
    "Synchronicity 2.0 - Best Startup Track Winner",
    "Double Slash 4.0 - Winner",
    "ShowcaseX x Techsprint - Winner",
    "Hello World Hacks - Best Beginner Team",
    "GirlScript Summer of Code (GSSoC '26) Open Source Contributor",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
    "WebMCP",
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
  description: "A community of student developers, designers, and creators at Meghnad Saha Institute of Technology.",
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Meghnad Saha Institute of Technology",
    alternateName: "MSIT",
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
    "Portfolio of Samrit Mukherjee — BTech Computer Science & Engineering (AI & ML) student at Meghnad Saha Institute of Technology (MSIT), 8× hackathon winner, and AI & ML Developer.",
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
        description:
          "AI design tool generating editable layered designs from natural language prompts.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "SUKALYA.ai",
        url: "https://sukalya-ai.vercel.app/",
        description: "AI-powered health assistant for symptom understanding and guidance.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Portfolio OS",
        url: "https://samrit.dev/portfolio-os",
        description: "Browser-based OS portfolio with multi-window interface.",
      },
    },
  ],
};
