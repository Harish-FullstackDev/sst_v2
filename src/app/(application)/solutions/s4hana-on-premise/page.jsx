import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions/s4hana-on-premise/" },
  description: "SAP S/4HANA On-Premises: SAP's next-generation ERP suite on dedicated infrastructure you control, with real-time insights, end-to-end visibility, advanced automation, and full customization.",
  openGraph: {
    title: "SAP S/4HANA On-Premises | Support Studio Technologies",
    description: "SAP S/4HANA On-Premises: SAP's next-generation ERP suite on dedicated infrastructure you control, with real-time insights, end-to-end visibility, advanced automation, and full customization.",
    url: "/solutions/s4hana-on-premise/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "SAP S/4HANA On-Premises",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/solutions/s4hana-on-premise/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/solutions/s4hana-on-premise/",
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
