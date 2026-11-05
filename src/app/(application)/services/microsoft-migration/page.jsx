import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/microsoft-migration/" },
  description: "Seamless migration from any ERP to Microsoft solutions by certified experts: secure data migration, change management and future-ready, scalable systems.",
  openGraph: {
    title: "ERP Migration to Microsoft | Support Studio Technologies",
    description: "Seamless migration from any ERP to Microsoft solutions by certified experts: secure data migration, change management and future-ready, scalable systems.",
    url: "/services/microsoft-migration/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Microsoft Migration",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/microsoft-migration/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/microsoft-migration/",
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
