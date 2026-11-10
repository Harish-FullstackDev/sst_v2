import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/supply-chain-management/" },
  description: "SAP Supply Chain Management: an integrated supply chain solution with robust optimization tools and advanced logistics and planning capabilities.",
  openGraph: {
    title: "Supply Chain Management | Support Studio Technologies",
    description: "SAP Supply Chain Management: an integrated supply chain solution with robust optimization tools and advanced logistics and planning capabilities.",
    url: "/solutions/supply-chain-management/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Supply Chain Management",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/supply-chain-management/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/supply-chain-management/",
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
