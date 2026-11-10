import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/about-us/" },
  description: "Who Support Studio Technologies is, how we are structured, where we deliver from, and what a client can independently verify before engaging us.",
  openGraph: {
    title: "About Support Studio Technologies | Enterprise Technology Services",
    description: "Who Support Studio Technologies is, how we are structured, where we deliver from, and what a client can independently verify before engaging us.",
    url: "/about-us/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: { absolute: "About Support Studio Technologies | Enterprise Technology Services" },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/about-us/"));

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
