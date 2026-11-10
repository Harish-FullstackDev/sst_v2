import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/enterprise-transformation/sap-transformation/" },
  description: "SAP transformation programs — S/4HANA migration, RISE and GROW delivery — scoped around process design and data readiness, not a fixed template.",
  openGraph: {
    title: "SAP Transformation Services | Support Studio Technologies",
    description: "SAP transformation programs — S/4HANA migration, RISE and GROW delivery — scoped around process design and data readiness, not a fixed template.",
    url: "/what-we-do/enterprise-transformation/sap-transformation/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Transformation Services",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/enterprise-transformation/sap-transformation/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/enterprise-transformation/sap-transformation/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageClient />
    </>
  );
}
