import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/full-stack-development/" },
  description: "Full-stack development services: end-to-end web solutions integrating advanced front-end interfaces with robust back-end systems for performance and seamless user experiences.",
  openGraph: {
    title: "Full Stack Development | Support Studio Technologies",
    description: "Full-stack development services: end-to-end web solutions integrating advanced front-end interfaces with robust back-end systems for performance and seamless user experiences.",
    url: "/services/full-stack-development/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Full Stack Development",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/full-stack-development/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/full-stack-development/",
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
