import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/sap-ariba/" },
  description: "SAP Ariba services: simplify procurement, enhance supplier collaboration, and gain real-time insights for smarter, data-driven decisions.",
  openGraph: {
    title: "SAP Ariba | Support Studio Technologies",
    description: "SAP Ariba services: simplify procurement, enhance supplier collaboration, and gain real-time insights for smarter, data-driven decisions.",
    url: "/services/sap-ariba/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Ariba",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/sap-ariba/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/sap-ariba/",
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
