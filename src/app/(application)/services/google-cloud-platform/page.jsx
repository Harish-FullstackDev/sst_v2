import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/google-cloud-platform/" },
  description: "Google Cloud Platform services from certified architects: storage, databases, compute, networking, big data, machine learning, identity and security.",
  openGraph: {
    title: "Google Cloud Platform | Support Studio Technologies",
    description: "Google Cloud Platform services from certified architects: storage, databases, compute, networking, big data, machine learning, identity and security.",
    url: "/services/google-cloud-platform/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Google Cloud Platform",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/google-cloud-platform/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/google-cloud-platform/",
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
