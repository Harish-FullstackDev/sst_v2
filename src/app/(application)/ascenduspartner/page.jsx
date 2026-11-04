import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/ascenduspartner/" },
  description: "Apply to the Support Studio Technologies partner program — the qualification criteria, engagement model and next steps for prospective partners.",
  openGraph: {
    title: "Partner Program | Support Studio Technologies",
    description: "Apply to the Support Studio Technologies partner program — the qualification criteria, engagement model and next steps for prospective partners.",
    url: "/ascenduspartner/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Partner Program",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/ascenduspartner/"));

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
