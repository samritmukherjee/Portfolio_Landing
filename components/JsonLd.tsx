import {
  personJsonLd,
  websiteJsonLd,
  projectsItemListJsonLd,
  hackerspaceOrgJsonLd,
} from "@/lib/structured-data";

export function JsonLd() {
  const schemas = [personJsonLd, websiteJsonLd, projectsItemListJsonLd, hackerspaceOrgJsonLd];
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={(schema as any)["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
