import {
  personJsonLd,
  websiteJsonLd,
  profilePageJsonLd,
  projectsItemListJsonLd,
} from "@/lib/structured-data";

export function JsonLd() {
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd,
      websiteJsonLd,
      profilePageJsonLd,
      projectsItemListJsonLd,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
    />
  );
}
