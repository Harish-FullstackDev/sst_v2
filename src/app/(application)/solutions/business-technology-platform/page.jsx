import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/business-technology-platform/" },
  description: "SAP Business Technology Platform (BTP): one foundation for developing, integrating, and managing business applications in the cloud, with built-in analytics, AI, and enterprise security.",
  openGraph: {
    title: "SAP Business Technology Platform | Support Studio Technologies",
    description: "SAP Business Technology Platform (BTP): one foundation for developing, integrating, and managing business applications in the cloud, with built-in analytics, AI, and enterprise security.",
    url: "/solutions/business-technology-platform/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Business Technology Platform",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/business-technology-platform/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/business-technology-platform/",
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
