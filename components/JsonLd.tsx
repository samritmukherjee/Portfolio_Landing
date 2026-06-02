import {
  personJsonLd,
  websiteJsonLd,
  projectsItemListJsonLd,
} from "@/lib/structured-data";

export function JsonLd() {
  const schemas = [personJsonLd, websiteJsonLd, projectsItemListJsonLd];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
