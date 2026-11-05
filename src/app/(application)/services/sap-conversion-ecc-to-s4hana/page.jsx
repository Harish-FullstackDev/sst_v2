import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/sap-conversion-ecc-to-s4hana/" },
  description: "SAP ECC to S/4HANA conversion is essential for modernizing your ERP system, leveraging real-time analytics, improved performance, and simplified data models.",
  openGraph: {
    title: "SAP Conversion (ECC to S/4HANA) | Support Studio Technologies",
    description: "SAP ECC to S/4HANA conversion is essential for modernizing your ERP system, leveraging real-time analytics, improved performance, and simplified data models.",
    url: "/services/sap-conversion-ecc-to-s4hana/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Conversion (ECC to S/4HANA)",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/sap-conversion-ecc-to-s4hana/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/sap-conversion-ecc-to-s4hana/",
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
