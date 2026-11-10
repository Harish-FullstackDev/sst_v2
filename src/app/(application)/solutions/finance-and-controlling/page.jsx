import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/finance-and-controlling/" },
  description: "SAP Finance and Controlling (SAP FICO) streamlines financial processes and compliance, with integrated financial accounting, controlling and reporting.",
  openGraph: {
    title: "SAP Finance and Controlling | Support Studio Technologies",
    description: "SAP Finance and Controlling (SAP FICO) streamlines financial processes and compliance, with integrated financial accounting, controlling and reporting.",
    url: "/solutions/finance-and-controlling/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP Finance and Controlling",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/finance-and-controlling/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/finance-and-controlling/",
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
