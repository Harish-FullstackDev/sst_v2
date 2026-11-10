import PageClient from "./PageClient";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services/microsoft-dynamics-365/" },
  description: "Microsoft Dynamics 365 Business Central implementation using the Microsoft Sure Step methodology, with an optimal strategy and guided setup assistance.",
  openGraph: {
    title: "Microsoft Dynamics 365 Business Central Implementation | Support Studio Technologies",
    description: "Microsoft Dynamics 365 Business Central implementation using the Microsoft Sure Step methodology, with an optimal strategy and guided setup assistance.",
    url: "/services/microsoft-dynamics-365/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Microsoft Dynamics 365",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(
    buildBreadcrumbItems("/services/microsoft-dynamics-365/")
  );
  const serviceSchema = generateServiceSchema({
    name: metadata.title,
    description: metadata.description,
    url: "/services/microsoft-dynamics-365/",
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
