import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/grow-with-sap/" },
  description: "Grow with SAP implementation services: scale efficiently by integrating finances, operations, and customer relationships through the SAP S/4HANA ERP suite.",
  openGraph: {
    title: "Grow with SAP | Support Studio Technologies",
    description: "Grow with SAP implementation services: scale efficiently by integrating finances, operations, and customer relationships through the SAP S/4HANA ERP suite.",
    url: "/services/grow-with-sap/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Grow with SAP",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/grow-with-sap/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/grow-with-sap/",
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
