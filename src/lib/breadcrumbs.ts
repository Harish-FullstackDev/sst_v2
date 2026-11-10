// Maps a URL path segment to its display label for breadcrumb trails.
// Add an entry here whenever a new /what-we-do/* (or other) route is created.
export const ROUTE_LABELS: Record<string, string> = {
  "what-we-do": "What We Do",
  "about-us": "About Us",
  "enterprise-transformation": "Enterprise Transformation",
  "sap-transformation": "SAP Transformation",
  "microsoft-services": "Microsoft Services",
  "broader-technology-services": "Broader Technology Services",
  "artificial-intelligence": "Artificial Intelligence",
  "cloud-infrastructure": "Cloud & Infrastructure",
  "customer-experience": "Customer Experience",
  "cybersecurity-digital-trust": "Cybersecurity & Digital Trust",
  "data-intelligence": "Data & Intelligence",
  "digital-engineering": "Digital Engineering",
  "experience-design": "Experience Design",
  "innovation-emerging-technologies": "Innovation & Emerging Technologies",
  "intelligent-automation": "Intelligent Automation",
  "managed-services": "Managed Services",
  "business-advisory": "Business Advisory",
  services: "Services",
  solutions: "Solutions",
  "rise-with-sap": "Rise with SAP",
  "grow-with-sap": "Grow with SAP",
  "sap-successfactors": "SAP SuccessFactors",
  "sap-ariba": "SAP Ariba",
  "sap-cx": "SAP CX",
  "sap-analytics-cloud": "SAP Analytics Cloud",
  "sap-ams": "SAP AMS",
  "sap-conversion-ecc-to-s4hana": "SAP Conversion (ECC – S/4HANA)",
  "sap-rollout": "SAP Rollout",
  "sap-migration": "SAP Migration",
  "sap-tm": "SAP T&M",
  "microsoft-dynamics-365": "Microsoft Dynamics 365",
  "power-bi": "Power BI",
  "microsoft-ams": "Microsoft AMS",
  "microsoft-migration": "Microsoft Migration",
  "microsoft-rollout": "Microsoft Rollout",
  "google-cloud-platform": "Google Cloud Platform",
  "amazon-web-services": "Amazon Web Services",
  azure: "Azure",
  "robotic-process-automation": "Robotic Process Automation",
  "ai-ml": "AI & Machine Learning",
  "e-invoicing": "E-Invoicing",
  "internet-of-things": "Internet of Things",
  "big-data": "Big Data",
  "cyber-security": "Cyber Security",
  "full-stack-development": "Full Stack Development",
  "ui-ux-design": "UI/UX Design",
  "software-development": "Software Development",
  "s4hana-on-premise": "S/4HANA On-Premise",
  "s4hana-public-cloud": "S/4HANA Public Cloud",
  "s4hana-private-cloud": "S/4HANA Private Cloud",
  "business-technology-platform": "Business Technology Platform",
  "analytics-cloud": "Analytics Cloud",
  "customer-relationship-management": "Customer Relationship Management",
  "finance-and-controlling": "Finance & Controlling",
  "human-capital-management": "Human Capital Management",
  successfactors: "SuccessFactors",
  procurement: "Procurement",
  "supply-chain-management": "Supply Chain Management",
  "book-a-consultation": "Book a Consultation",
  legal: "Legal",
  terms: "Terms & Conditions",
  privacy: "Privacy Policy",
  security: "Security & Privacy Policy",
  cookies: "Cookie Policy",
  disclaimer: "Disclaimer",
  privacyCommitment: "Privacy Commitment",
  "sst-partner": "SST Partner Program",
  "sst-errors": "Errors",
  trustcenter: "Trust Center",
  whitepapers: "Whitepapers",
  "case-studies": "Case Studies",
  "industry-reports": "Industry Reports",
  careers: "Careers",
  blog: "Blog",
  contact: "Contact",
};

// Path prefixes that are only grouping folders, with no page of their own.
// Their crumb is shown as plain text and left out of the JSON-LD.
const NO_PAGE = new Set(["/what-we-do", "/legal"]);

export type BreadcrumbItem = { name: string; item: string | null };

// Builds breadcrumb items (Home first) from a path like "/what-we-do/experience-design".
// Falls back to a title-cased version of the segment when it isn't in ROUTE_LABELS.
export function buildBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: "Home", item: "/" }];

  let running = "";
  for (const segment of segments) {
    running += `/${segment}`;
    const label =
      ROUTE_LABELS[segment] ||
      segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    // Trailing slash to match the canonical URLs (trailingSlash is on), so
    // crumb links don't go through a 308 redirect.
    items.push({ name: label, item: NO_PAGE.has(running) ? null : `${running}/` });
  }

  return items;
}
