import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/rise-with-sap/" },
  description: "RISE with SAP implementation services: integrate and manage finances, operations, and customer relationships through the SAP S/4HANA ERP suite in the cloud.",
  openGraph: {
    title: "RISE with SAP | Support Studio Technologies",
    description: "RISE with SAP implementation services: integrate and manage finances, operations, and customer relationships through the SAP S/4HANA ERP suite in the cloud.",
    url: "/services/rise-with-sap/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "RISE with SAP",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/rise-with-sap/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/rise-with-sap/",
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
