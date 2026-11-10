import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/enterprise-transformation/microsoft-services/" },
  description: "Microsoft platform delivery — Azure, Dynamics 365 and Power Platform — scoped to work alongside an SAP-centered enterprise architecture.",
  openGraph: {
    title: "Microsoft Services for Enterprise Transformation | Support Studio Technologies",
    description: "Microsoft platform delivery — Azure, Dynamics 365 and Power Platform — scoped to work alongside an SAP-centered enterprise architecture.",
    url: "/what-we-do/enterprise-transformation/microsoft-services/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Microsoft Services for Enterprise Transformation",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/enterprise-transformation/microsoft-services/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/enterprise-transformation/microsoft-services/",
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
