import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/procurement/" },
  description: "SAP Supply Spend Management procurement: strategic sourcing management, streamlined procurement processes and robust contract life-cycle management for spend visibility and cost savings.",
  openGraph: {
    title: "Procurement | Support Studio Technologies",
    description: "SAP Supply Spend Management procurement: strategic sourcing management, streamlined procurement processes and robust contract life-cycle management for spend visibility and cost savings.",
    url: "/solutions/procurement/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Procurement",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/procurement/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/procurement/",
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
