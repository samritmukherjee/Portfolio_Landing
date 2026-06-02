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
  jobTitle: "AI Engineer & Full Stack Developer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "MSIT" },
  knowsAbout: [
    "Artificial Intelligence",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressCountry: "IN",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Samrit Mukherjee",
  url: "https://samrit.dev",
  description:
    "Portfolio of Samrit Mukherjee — AI engineer and full stack developer based in Kolkata, India.",
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
