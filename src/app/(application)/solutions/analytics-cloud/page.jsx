import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/analytics-cloud/" },
  description: "SAP Analytics Cloud: cloud-based business intelligence, enterprise planning and predictive analytics connecting SAP and non-SAP data for faster decisions.",
  openGraph: {
    title: "SAP Analytics Cloud Solution | Support Studio Technologies",
    description: "SAP Analytics Cloud: cloud-based business intelligence, enterprise planning and predictive analytics connecting SAP and non-SAP data for faster decisions.",
    url: "/solutions/analytics-cloud/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Analytics Cloud Solution",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/analytics-cloud/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/analytics-cloud/",
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
