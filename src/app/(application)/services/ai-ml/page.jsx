import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/ai-ml/" },
  description: "AI & Machine Learning services: NLP, computer vision, predictive analytics, recommendation systems, RPA and chatbots that turn data into smarter decisions.",
  openGraph: {
    title: "AI & Machine Learning | Support Studio Technologies",
    description: "AI & Machine Learning services: NLP, computer vision, predictive analytics, recommendation systems, RPA and chatbots that turn data into smarter decisions.",
    url: "/services/ai-ml/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "AI & Machine Learning",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/ai-ml/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/ai-ml/",
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
