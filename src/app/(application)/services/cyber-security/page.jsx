import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/cyber-security/" },
  description: "Cybersecurity services from Support Studio Technologies: threat detection and response, network security, endpoint protection, IAM, data encryption and incident response.",
  openGraph: {
    title: "Cyber Security | Support Studio Technologies",
    description: "Cybersecurity services from Support Studio Technologies: threat detection and response, network security, endpoint protection, IAM, data encryption and incident response.",
    url: "/services/cyber-security/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Cyber Security",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/cyber-security/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/cyber-security/",
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
