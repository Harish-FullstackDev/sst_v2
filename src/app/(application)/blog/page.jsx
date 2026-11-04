import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/blog/" },
  description: "Practitioner analysis of enterprise technology decisions — SAP modernization, cloud operating models, data foundations and applied AI.",
  openGraph: {
    title: "Blog | Support Studio Technologies",
    description: "Practitioner analysis of enterprise technology decisions — SAP modernization, cloud operating models, data foundations and applied AI.",
    url: "/blog/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Blog",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/blog/"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
