import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/sap-migration/" },
  description: "Migration in SAP ensures updated systems, improved functionality, and compatibility with modern business needs, enhancing efficiency, data integrity, and leveraging new technologies for sustainable growth.",
  openGraph: {
    title: "SAP Migration | Support Studio Technologies",
    description: "Migration in SAP ensures updated systems, improved functionality, and compatibility with modern business needs, enhancing efficiency, data integrity, and leveraging new technologies for sustainable growth.",
    url: "/services/sap-migration/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Migration",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/sap-migration/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/sap-migration/",
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
