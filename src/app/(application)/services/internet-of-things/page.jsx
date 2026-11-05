import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/internet-of-things/" },
  description: "Internet of Things (IoT) services from Support Studio Technologies: smart device management, real-time analytics, predictive maintenance, automation, asset tracking and health monitoring.",
  openGraph: {
    title: "Internet of Things | Support Studio Technologies",
    description: "Internet of Things (IoT) services from Support Studio Technologies: smart device management, real-time analytics, predictive maintenance, automation, asset tracking and health monitoring.",
    url: "/services/internet-of-things/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Internet of Things",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/internet-of-things/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/internet-of-things/",
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
