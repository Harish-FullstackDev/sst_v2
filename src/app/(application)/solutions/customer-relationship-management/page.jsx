import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/customer-relationship-management/" },
  description: "SAP Customer Relationship Management (CRM): integrated sales, marketing, service, commerce and analytics, connected to SAP ERP for unified customer data.",
  openGraph: {
    title: "SAP Customer Relationship Management | Support Studio Technologies",
    description: "SAP Customer Relationship Management (CRM): integrated sales, marketing, service, commerce and analytics, connected to SAP ERP for unified customer data.",
    url: "/solutions/customer-relationship-management/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Customer Relationship Management",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/customer-relationship-management/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/customer-relationship-management/",
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
