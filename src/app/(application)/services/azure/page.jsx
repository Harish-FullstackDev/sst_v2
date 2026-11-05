import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/azure/" },
  description: "Microsoft Azure services from certified cloud architects: virtual machines, storage, Azure SQL and Cosmos DB, AKS, identity, and serverless integration with Functions and Logic Apps.",
  openGraph: {
    title: "Azure | Support Studio Technologies",
    description: "Microsoft Azure services from certified cloud architects: virtual machines, storage, Azure SQL and Cosmos DB, AKS, identity, and serverless integration with Functions and Logic Apps.",
    url: "/services/azure/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Azure",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/azure/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/azure/",
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
