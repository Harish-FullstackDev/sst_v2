import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/power-bi/" },
  description: "Microsoft Power BI implementation by certified experts: data integration, interactive dashboards, real-time analytics and AI-driven insights that turn data into actionable decisions.",
  openGraph: {
    title: "Microsoft Power BI Implementation | Support Studio Technologies",
    description: "Microsoft Power BI implementation by certified experts: data integration, interactive dashboards, real-time analytics and AI-driven insights that turn data into actionable decisions.",
    url: "/services/power-bi/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Power BI",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/power-bi/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/power-bi/",
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
