import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/enterprise-transformation/broader-technology-services/" },
  description: "Technology services that extend an SAP-centered estate — integration, platform and infrastructure work scoped around the digital core.",
  openGraph: {
    title: "Broader Technology Services for SAP Estates | Support Studio Technologies",
    description: "Technology services that extend an SAP-centered estate — integration, platform and infrastructure work scoped around the digital core.",
    url: "/what-we-do/enterprise-transformation/broader-technology-services/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Broader Technology Services for SAP Estates",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/enterprise-transformation/broader-technology-services/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/enterprise-transformation/broader-technology-services/",
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
