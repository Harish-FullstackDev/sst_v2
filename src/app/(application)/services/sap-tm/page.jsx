import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/sap-tm/" },
  description: "SAP T&M provides accurate tracking of project costs and resources, integrates seamlessly with billing systems, and offers real-time insights for efficient project management and financial control.",
  openGraph: {
    title: "SAP Time & Materials (T&M) | Support Studio Technologies",
    description: "SAP T&M provides accurate tracking of project costs and resources, integrates seamlessly with billing systems, and offers real-time insights for efficient project management and financial control.",
    url: "/services/sap-tm/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Time & Materials (T&M)",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/sap-tm/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/sap-tm/",
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
