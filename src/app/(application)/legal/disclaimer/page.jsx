import DisclaimerContent from '@/components/Disclaimer/DisclaimerContent'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import { generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export const metadata = {
  alternates: { canonical: "/legal/disclaimer/" },
  title: "Disclaimer",
  description: "The disclaimer governing use of information published on the Support Studio Technologies website, including limitation of liability and third-party links.",
  openGraph: {
    title: "Disclaimer | Support Studio Technologies",
    description: "The disclaimer governing use of information published on the Support Studio Technologies website, including limitation of liability and third-party links.",
    url: "/legal/disclaimer/",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
  },
}

const page = () => {
  const breadcrumbSchema = generateBreadcrumbSchema(buildBreadcrumbItems("/legal/disclaimer/"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <Navbar />
        <DisclaimerContent />
        <Footer />
      </div>
    </>
  )
}

export default page
