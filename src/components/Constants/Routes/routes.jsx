export const validRoutes = [
  "/",
  "/blog/",
  "/case-studies/",
  "/whitepapers/",
  "/industry-reports/",
  "/who-we-are/",
  "/book-a-consultation/",
  "/careers/",
  "/contact/",
  "/legal/privacy/",
  "/ascenduserrors/",
  "/ascenduspartner/",
  "/legal/terms/",
  "/trustcenter/",
  "/what-we-do/cybersecurity-digital-trust/",
  "/what-we-do/digital-engineering/",
  "/what-we-do/experience-design/",
  "/what-we-do/artificial-intelligence/",
  "/what-we-do/managed-services/",
  "/what-we-do/customer-experience/",
  "/what-we-do/business-advisory/",
  "/what-we-do/innovation-emerging-technologies/",
  "/what-we-do/intelligent-automation/",
  "/what-we-do/cloud-infrastructure/",
  "/what-we-do/data-intelligence/",
  "/what-we-do/enterprise-transformation/",
  "/what-we-do/enterprise-transformation/sap-transformation/",
  "/what-we-do/enterprise-transformation/microsoft-services/",
  "/what-we-do/enterprise-transformation/broader-technology-services/",
  "/services/",
  "/solutions/",
];

// Dynamic routes that reuse CareersLayout's dark parallax hero (job
// description pages, the application form) need the same navbar theme as
// "/careers/" itself, but their slug can't be listed literally above.
// Every /services/* and /solutions/* page opens on the same dark hero, so
// they share the dark navbar theme too.
export const isValidRoute = (pathname) =>
  validRoutes.includes(pathname) ||
  pathname.startsWith("/careers/") ||
  pathname.startsWith("/services/") ||
  pathname.startsWith("/solutions/");
