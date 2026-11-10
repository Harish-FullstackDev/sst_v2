import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/s4hana-private-cloud/" },
  description: "SAP S/4HANA Private Cloud: cloud ERP in a dedicated environment, with greater control over data privacy, security and compliance, and tailored deployment.",
  openGraph: {
    title: "SAP S/4HANA Private Cloud | Support Studio Technologies",
    description: "SAP S/4HANA Private Cloud: cloud ERP in a dedicated environment, with greater control over data privacy, security and compliance, and tailored deployment.",
    url: "/solutions/s4hana-private-cloud/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP S/4HANA Private Cloud",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/s4hana-private-cloud/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/s4hana-private-cloud/",
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
