import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/human-capital-management/" },
  description: "SAP Human Capital Management (HCM) covers the full employee lifecycle from hire to retire, with integrated core HR, time, payroll, talent and self-service.",
  openGraph: {
    title: "SAP Human Capital Management | Support Studio Technologies",
    description: "SAP Human Capital Management (HCM) covers the full employee lifecycle from hire to retire, with integrated core HR, time, payroll, talent and self-service.",
    url: "/solutions/human-capital-management/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Human Capital Management",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/human-capital-management/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/human-capital-management/",
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
