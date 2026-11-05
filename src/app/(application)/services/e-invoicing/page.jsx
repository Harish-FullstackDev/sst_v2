import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/e-invoicing/" },
  description: "E-Invoicing services from Support Studio Technologies: invoice validation, generation, transmission, tax compliance, audit reporting and ERP integration that accelerate payment cycles.",
  openGraph: {
    title: "E-Invoicing | Support Studio Technologies",
    description: "E-Invoicing services from Support Studio Technologies: invoice validation, generation, transmission, tax compliance, audit reporting and ERP integration that accelerate payment cycles.",
    url: "/services/e-invoicing/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "E-Invoicing",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/e-invoicing/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/e-invoicing/",
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
