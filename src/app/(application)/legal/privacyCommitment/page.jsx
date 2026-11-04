import PageClient from "./PageClient";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/legal/privacyCommitment/" },
  description: "The principles Support Studio Technologies follows when handling client and candidate data, and how those principles are enforced in practice.",
  openGraph: {
    title: "Our Privacy Commitment | Support Studio Technologies",
    description: "The principles Support Studio Technologies follows when handling client and candidate data, and how those principles are enforced in practice.",
    url: "/legal/privacyCommitment/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
  title: "Our Privacy Commitment",
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/legal/privacyCommitment/"));

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
