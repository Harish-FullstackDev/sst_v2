// Shared by the navbar mega menu, the footer columns and the /services and
// /solutions landing pages, so all of them always list the same pages.
//
// Each top-level entry is a category (SAP, Cloud, ERP…). Categories are not
// pages of their own: their href is an anchor on the landing page. An item
// either links to a page (href) or groups further items (children), e.g.
// SAP → Implementation → Rise with SAP.
export const SERVICES = [
  {
    id: "sap",
    name: "SAP",
    href: "/services#sap",
    items: [
      {
        name: "Implementation",
        children: [
          { name: "Rise with SAP", href: "/services/rise-with-sap" },
          { name: "Grow with SAP", href: "/services/grow-with-sap" },
        ],
      },
      {
        name: "Line of Business",
        children: [
          { name: "SAP SuccessFactors", href: "/services/sap-successfactors" },
          { name: "SAP Ariba", href: "/services/sap-ariba" },
          { name: "SAP CX", href: "/services/sap-cx" },
          { name: "SAP Analytics Cloud", href: "/services/sap-analytics-cloud" },
        ],
      },
      { name: "AMS", href: "/services/sap-ams" },
      { name: "Conversion (ECC – S/4HANA)", href: "/services/sap-conversion-ecc-to-s4hana" },
      { name: "Rollout", href: "/services/sap-rollout" },
      { name: "Migration", href: "/services/sap-migration" },
      { name: "T&M", href: "/services/sap-tm" },
    ],
  },
  {
    id: "microsoft",
    name: "Microsoft",
    href: "/services#microsoft",
    items: [
      {
        name: "Implementation",
        children: [
          { name: "Microsoft Dynamics 365", href: "/services/microsoft-dynamics-365" },
          { name: "Power BI", href: "/services/power-bi" },
        ],
      },
      { name: "AMS", href: "/services/microsoft-ams" },
      { name: "Migration (Any ERP to Microsoft)", href: "/services/microsoft-migration" },
      { name: "Rollout", href: "/services/microsoft-rollout" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    href: "/services#cloud",
    items: [
      { name: "Google Cloud Platform", href: "/services/google-cloud-platform" },
      { name: "Amazon Web Services", href: "/services/amazon-web-services" },
      { name: "Azure", href: "/services/azure" },
    ],
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    href: "/services#digital-transformation",
    items: [
      { name: "Robotic Process Automation", href: "/services/robotic-process-automation" },
      { name: "AI & Machine Learning", href: "/services/ai-ml" },
      { name: "E-Invoicing", href: "/services/e-invoicing" },
      { name: "Internet of Things", href: "/services/internet-of-things" },
      { name: "Big Data", href: "/services/big-data" },
      { name: "Cyber Security", href: "/services/cyber-security" },
    ],
  },
  {
    id: "design-development",
    name: "Design & Development",
    href: "/services#design-development",
    items: [
      { name: "Full Stack Development", href: "/services/full-stack-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Software Development", href: "/services/software-development" },
    ],
  },
];

export const SOLUTIONS = [
  {
    id: "erp",
    name: "ERP",
    href: "/solutions#erp",
    items: [
      { name: "S/4HANA On-Premise", href: "/solutions/s4hana-on-premise" },
      { name: "S/4HANA Public Cloud", href: "/solutions/s4hana-public-cloud" },
      { name: "S/4HANA Private Cloud", href: "/solutions/s4hana-private-cloud" },
    ],
  },
  {
    id: "business-technology",
    name: "Business Technology",
    href: "/solutions#business-technology",
    items: [
      { name: "Business Technology Platform", href: "/solutions/business-technology-platform" },
      { name: "Analytics Cloud", href: "/solutions/analytics-cloud" },
    ],
  },
  {
    id: "crm",
    name: "Customer Experience",
    href: "/solutions#crm",
    items: [
      { name: "Customer Relationship Management", href: "/solutions/customer-relationship-management" },
    ],
  },
  {
    id: "finance-controlling",
    name: "Finance & Controlling",
    href: "/solutions#finance-controlling",
    items: [
      { name: "Finance & Controlling", href: "/solutions/finance-and-controlling" },
    ],
  },
  {
    id: "hcm",
    name: "HCM",
    href: "/solutions#hcm",
    items: [
      { name: "Human Capital Management", href: "/solutions/human-capital-management" },
      { name: "SuccessFactors", href: "/solutions/successfactors" },
    ],
  },
  {
    id: "supply-spend-management",
    name: "Supply Spend Management",
    href: "/solutions#supply-spend-management",
    items: [
      { name: "Procurement", href: "/solutions/procurement" },
    ],
  },
  {
    id: "supply-chain-management",
    name: "Supply Chain Management",
    href: "/solutions#supply-chain-management",
    items: [
      { name: "Supply Chain Management", href: "/solutions/supply-chain-management" },
    ],
  },
];

export const MENUS = [
  { label: "Services", href: "/services", items: SERVICES },
  { label: "Solutions", href: "/solutions", items: SOLUTIONS },
];

// Every page a menu reaches, flattened — for active-state checks and route lists.
export const flattenLinks = (categories) =>
  categories.flatMap((category) =>
    category.items.flatMap((item) => (item.children ? item.children : [item]))
  );
