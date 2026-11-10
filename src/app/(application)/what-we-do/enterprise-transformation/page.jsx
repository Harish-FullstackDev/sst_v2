import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/what-we-do/enterprise-transformation/" },
  description: "Transformation programs that keep architecture, process and integration decisions aligned across every workstream, from design through implementation.",
  openGraph: {
    title: "Enterprise Transformation Services | Support Studio Technologies",
    description: "Transformation programs that keep architecture, process and integration decisions aligned across every workstream, from design through implementation.",
    url: "/what-we-do/enterprise-transformation/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Enterprise Transformation Services",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/what-we-do/enterprise-transformation/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/what-we-do/enterprise-transformation/",
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
