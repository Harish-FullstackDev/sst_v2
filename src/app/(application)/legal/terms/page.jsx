import TermsContent from '@/components/TermsOfService/TermsContent'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/legal/terms/" },
  title: "Terms & Conditions",
  description: "The terms governing your use of the Support Studio Technologies website, including acceptable use, intellectual property and limitation of liability.",
  openGraph: {
    title: "Terms & Conditions | Support Studio Technologies",
    description: "The terms governing your use of the Support Studio Technologies website, including acceptable use, intellectual property and limitation of liability.",
    url: "/legal/terms/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
}

const page = () => {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/legal/terms/"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <Navbar />
        <TermsContent />
        <Footer />
      </div>
    </>
  )
}

export default page