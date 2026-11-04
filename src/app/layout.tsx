import "./globals.css";
import "./font.css";
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import BackgroundMusic from "../components/BackgroundMusic/BackgroundMusic";
import CookieConsent from "../components/Cookies/CookieConsent";
import ContactUsButton from "../components/Contactusbutton/contact_us_button";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";
import { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/siteUrl";

export const viewport: Viewport = {
  themeColor: "#2e3033",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Support Studio Technologies | Enterprise SAP & IT Consulting GCC",
    template: "%s | Support Studio Technologies"
  },
  description: "Support Studio Technologies provides premium SAP consulting, IT managed services, and digital transformation solutions for enterprises in the UAE, Saudi Arabia, and the wider GCC region.",
  authors: [{ name: "Support Studio Technologies", url: SITE_URL }],
  creator: "SST Engineering",
  publisher: "Support Studio Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-us",
      "en-AE": "/en-ae",
      "en-SA": "/en-sa",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Support Studio Technologies",
    title: "Support Studio Technologies | Enterprise Technology, SAP and Managed Services",
    description: "Support Studio Technologies designs, builds and runs enterprise technology — SAP, cloud, data, AI, engineering, security and managed operations — under one accountable team.",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Support Studio Technologies Enterprise Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "pending_verification_code", // TODO: Add once provided
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className="scroll-smooth" style={{ "--lineWidth": "2px" } as React.CSSProperties}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        {/* <ScrollToTop /> */}
        {/* <ContactUsButton /> */}
        {/* <BackgroundMusic /> */}
        <CookieConsent />
      </body>
    </html>
  );
}
