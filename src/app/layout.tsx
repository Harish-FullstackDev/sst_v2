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
  description: "Support Studio Technologies delivers SAP consulting, IT managed services and digital transformation for enterprises in Saudi Arabia, the UAE and the GCC.",
  authors: [{ name: "Support Studio Technologies", url: SITE_URL }],
  creator: "Support Studio Technologies",
  publisher: "Support Studio Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Support Studio Technologies",
    title: "Support Studio Technologies | Enterprise Technology, SAP and Managed Services",
    description: "Support Studio Technologies designs, builds and runs enterprise technology: SAP, cloud, data, AI, security and managed operations, under one team.",
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
  // Search Console verification: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION once
  // Google provides the code. No tag is emitted until then.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  twitter: {
    card: "summary_large_image",
    title: "Support Studio Technologies | Enterprise Technology, SAP and Managed Services",
    description: "Support Studio Technologies designs, builds and runs enterprise technology: SAP, cloud, data, AI, security and managed operations, under one team.",
    images: ["/og-image.png?v=2"],
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
