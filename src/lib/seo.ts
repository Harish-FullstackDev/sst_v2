/**
 * SEO Utility for generating JSON-LD Structured Data
 * Target: Enterprise search intent for IT and SAP consulting services.
 */

import { InquiryOrigin } from "@/types/database.types";
import { SITE_URL } from "@/lib/siteUrl";
import { SERVICES, SOLUTIONS } from "@/components/Navbar/menuLinks";

// serviceType for a page, taken from the menu category it sits under
// (e.g. /services/sap-tm → "SAP", /solutions/procurement → "Supply Spend Management"),
// so each Service schema describes its own area instead of one shared label.
const categoryForPath = (url: string): string | undefined => {
  const path = url.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "");
  for (const [kind, categories] of [["Services", SERVICES], ["Solutions", SOLUTIONS]] as const) {
    for (const category of categories as any[]) {
      const links = category.items.flatMap((item: any) => (item.children ? item.children : [item]));
      if (links.some((link: any) => link.href === path)) return `${category.name} ${kind}`;
    }
  }
  return undefined;
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Support Studio Technologies",
    "alternateName": "SST",
    "url": SITE_URL,
    "logo": `${SITE_URL}/icon.png`,
    "description": "Support Studio Technologies is a premium enterprise IT and SAP consulting firm providing digital transformation, cloud managed services, and S/4HANA migration across the UAE, Saudi Arabia, and the GCC.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#192, Kamaraj Salai",
      "addressLocality": "Puducherry",
      "postalCode": "605013",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/supportstudiotechnologies/",
      "https://www.instagram.com/isupportz.official/",
      "https://x.com/isupportz"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-413-2191301",
        "email": "info@isupportz.com",
        "contactType": "customer service",
        "areaServed": ["AE", "SA", "BH", "QA", "OM", "KW"],
        "availableLanguage": ["en", "ar"]
      }
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Support Studio Technologies",
    "url": SITE_URL
  };
};

// Crumbs with no page of their own (item: null, e.g. "What We Do", "Legal") are
// left out: Google expects every ListItem except the last to link to a real URL.
export const generateBreadcrumbSchema = (crumbs: { name: string; item: string | null }[]) => {
  const linked = crumbs.filter((crumb) => crumb.item);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": linked.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item!.startsWith('http') ? crumb.item : `${SITE_URL}${crumb.item}`
    }))
  };
};

export const generateServiceSchema = (service: { name: string; description: string; url: string; category?: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.category || categoryForPath(service.url) || "IT Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Support Studio Technologies",
      "url": SITE_URL
    },
    "name": service.name,
    "description": service.description,
    "url": service.url.startsWith('http') ? service.url : `${SITE_URL}${service.url}`,
    "areaServed": [
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Qatar" },
      { "@type": "Country", "name": "Oman" },
      { "@type": "Country", "name": "Kuwait" },
      { "@type": "Country", "name": "Bahrain" }
    ]
  };
};

const absolute = (url: string) => (url.startsWith("http") ? url : `${SITE_URL}${url}`);

export const generateArticleSchema = (article: {
  title: string;
  description?: string;
  url: string;
  image?: string | null;
  author?: string | null;
  datePublished?: string | null;
  type?: "Article" | "BlogPosting" | "Report";
}) => ({
  "@context": "https://schema.org",
  "@type": article.type || "Article",
  "headline": article.title,
  "description": article.description,
  "url": absolute(article.url),
  "mainEntityOfPage": absolute(article.url),
  "image": absolute(article.image || "/og-image.png?v=2"),
  ...(article.datePublished ? { "datePublished": article.datePublished } : {}),
  "author": article.author
    ? { "@type": "Person", "name": article.author }
    : { "@type": "Organization", "name": "Support Studio Technologies" },
  "publisher": {
    "@type": "Organization",
    "name": "Support Studio Technologies",
    "logo": { "@type": "ImageObject", "url": `${SITE_URL}/icon.png` }
  }
});

export const generateJobPostingSchema = (job: {
  title: string;
  aboutJob?: string;
  responsibilities?: string[];
  qualifications?: string[];
  location?: string;
  typeOfWork?: string;
  modeOfWork?: string;
  postedAt?: string | null;
  closesOn?: string | null;
  slug: string;
}) => {
  const description = [
    job.aboutJob,
    job.responsibilities?.length ? `Responsibilities: ${job.responsibilities.join("; ")}` : "",
    job.qualifications?.length ? `Qualifications: ${job.qualifications.join("; ")}` : "",
  ].filter(Boolean).join("\n\n");
  const type = (job.typeOfWork || "").toLowerCase();
  const employmentType = type.includes("part") ? "PART_TIME"
    : type.includes("contract") ? "CONTRACTOR"
    : type.includes("intern") ? "INTERN"
    : type.includes("full") ? "FULL_TIME" : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": description || job.title,
    ...(job.postedAt ? { "datePosted": job.postedAt } : {}),
    ...(job.closesOn ? { "validThrough": job.closesOn } : {}),
    ...(employmentType ? { "employmentType": employmentType } : {}),
    ...((job.modeOfWork || "").toLowerCase().includes("remote") ? { "jobLocationType": "TELECOMMUTE" } : {}),
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Support Studio Technologies",
      "sameAs": SITE_URL,
      "logo": `${SITE_URL}/icon.png`
    },
    ...(job.location ? {
      "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": job.location } }
    } : {}),
    "url": absolute(`/careers/${job.slug}/`)
  };
};
