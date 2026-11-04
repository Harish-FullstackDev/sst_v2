// Shared by the navbar dropdowns and the footer columns so both always list the
// same items. Most Solutions have no page of their own yet, so they point to the
// launching-soon page until those exist.
export const SERVICES = [
  { name: "SAP", href: "/what-we-do/enterprise-transformation/sap-transformation" },
  { name: "Microsoft", href: "/what-we-do/enterprise-transformation/microsoft-services" },
  { name: "Cloud", href: "/what-we-do/cloud-infrastructure" },
  { name: "Digital Transformation", href: "/what-we-do/enterprise-transformation" },
  { name: "Design & Development", href: "/what-we-do/digital-engineering" },
];

export const SOLUTIONS = [
  { name: "ERP", href: "/launching-soon" },
  { name: "Business Technology", href: "/launching-soon" },
  { name: "Customer Experience", href: "/what-we-do/customer-experience" },
  { name: "Finance & Controlling", href: "/launching-soon" },
  { name: "HCM", href: "/launching-soon" },
  { name: "Supply Spend Management", href: "/launching-soon" },
  { name: "Supply Chain Management", href: "/launching-soon" },
];

export const MENUS = [
  { label: "Services", items: SERVICES },
  { label: "Solutions", items: SOLUTIONS },
];
