import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/sap-ams/" },
  description: "SAP AMS reduces costs, mitigates risks, and ensures smooth operations with tailored support and maintenance for efficient SAP technology management.",
  openGraph: {
    title: "SAP Application Management Services (AMS) | Support Studio Technologies",
    description: "SAP AMS reduces costs, mitigates risks, and ensures smooth operations with tailored support and maintenance for efficient SAP technology management.",
    url: "/services/sap-ams/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Application Management Services (AMS)",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/sap-ams/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/sap-ams/",
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
