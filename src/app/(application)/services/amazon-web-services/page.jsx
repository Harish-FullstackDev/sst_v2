import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/amazon-web-services/" },
  description: "Amazon Web Services from certified solutions architects: EC2, S3, RDS, Lambda, VPC and CloudFront, designed for scalability, security and cost efficiency.",
  openGraph: {
    title: "Amazon Web Services | Support Studio Technologies",
    description: "Amazon Web Services from certified solutions architects: EC2, S3, RDS, Lambda, VPC and CloudFront, designed for scalability, security and cost efficiency.",
    url: "/services/amazon-web-services/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Amazon Web Services",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/amazon-web-services/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/amazon-web-services/",
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
