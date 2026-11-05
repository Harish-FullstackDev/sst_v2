import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/" },
  description: "SAP, Microsoft, cloud, digital transformation and design & development services from Support Studio Technologies.",
  openGraph: {
    title: "Services | Support Studio Technologies",
    description: "SAP, Microsoft, cloud, digital transformation and design & development services from Support Studio Technologies.",
    url: "/services/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Services",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/services/"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
