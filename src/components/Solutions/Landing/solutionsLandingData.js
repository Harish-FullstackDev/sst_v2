// Copy for the /solutions landing page, taken from the old isupportz.com
// /solutions/ page. Category ids and page hrefs match Navbar/menuLinks.js, so
// the mega menu's category links (/solutions#erp…) land on these bands.
export const INTRO = {
    title: "Explore our innovative solutions designed to propel your success",
    body: "Discover unparalleled commitment at Solutions Hub. Our comprehensive range of services guarantees cutting-edge solutions, personalized support, and a proven track record of achieving tangible success for your business.",
};

export const CATEGORIES = [
    {
        id: "erp",
        title: "ERP Services",
        paragraphs: [
            "ERP services have evolved to meet diverse organizational needs. S/4HANA On-Premise integrates finance, procurement, and sales for efficiency and transparency. S/4HANA Public Cloud enhances scalability and flexibility, enabling swift adaptation to market changes.",
            "Meanwhile, S/4HANA Private Cloud offers secure, dedicated data control. Business ByDesign aids mid-sized enterprises with CRM, supply chain, and HR management, enhancing agility and fostering growth in dynamic market landscapes.",
        ],
        cards: [
            { title: "S/4HANA On-Premise", href: "/solutions/s4hana-on-premise", desc: "S/4HANA On-Premise offers customizable ERP solutions integrating finance, procurement, and sales for operational efficiency." },
            { title: "S/4HANA Public Cloud", href: "/solutions/s4hana-public-cloud", desc: "S/4HANA Public Cloud provides scalable ERP solutions via a flexible, cloud-based deployment model for adaptability." },
            { title: "S/4HANA Private Cloud", href: "/solutions/s4hana-private-cloud", desc: "S/4HANA Private Cloud offers a dedicated environment serving one organization, with enhanced control over data privacy, security, and compliance." },
        ],
    },
    {
        id: "business-technology",
        title: "Business Technology",
        paragraphs: [
            "BTP supports seamless integration, application development, and data-driven decision-making, enabling organizations to transform operations and drive sustainable growth.",
        ],
        cards: [
            { title: "Business Technology Platform", href: "/solutions/business-technology-platform", desc: "SAP Business Technology Platform utilizes data management, analytics, AI, and IoT to develop intelligent enterprise applications with seamless integration and scalability." },
            { title: "Analytics Cloud", href: "/solutions/analytics-cloud", desc: "SAP Analytics Cloud provides business intelligence, planning, and predictive analytics using data visualization, machine learning, and cloud technology for informed decision-making." },
        ],
    },
    {
        id: "crm",
        title: "Customer Experience",
        paragraphs: [
            "SAP Customer Relationship Management (CRM) integrates marketing, sales, and service processes to enhance customer interactions and drive business growth. Marketing in SAP CRM targets customer segments with tailored campaigns and analytics, optimizing engagement and conversion rates.",
            "Sales in SAP CRM streamlines sales processes, from lead generation to closing deals, ensuring efficiency and better customer relationships. Service in SAP CRM focuses on delivering exceptional customer support through efficient case management and timely resolution of issues.",
        ],
        cards: [
            { title: "Customer Relationship Management", href: "/solutions/customer-relationship-management", desc: "SAP Customer Relationship Management (CRM) focuses on enhancing customer interactions and relationships through integrated marketing, sales, and service processes." },
        ],
    },
    {
        id: "finance-controlling",
        title: "Finance & Controlling",
        paragraphs: [
            "FICO streamlines financial operations through real-time data, automation, and analytics, enabling efficient resource management and driving organizational profitability and growth.",
        ],
        cards: [
            { title: "Finance & Controlling", href: "/solutions/finance-and-controlling", desc: "SAP Finance & Controlling (FICO) focuses on optimizing financial management through integrated financial accounting, controlling, planning, and reporting processes." },
        ],
    },
    {
        id: "hcm",
        title: "Human Capital Management",
        paragraphs: [
            "HCM enhances employee experiences through seamless data integration, analytics, and self-service capabilities, driving strategic talent management and organizational growth.",
        ],
        cards: [
            { title: "Human Capital Management", href: "/solutions/human-capital-management", desc: "SAP Human Capital Management leverages integrated HR processes, including recruitment, payroll, and performance management, to optimize workforce efficiency and enhance employee experiences." },
            { title: "SuccessFactors", href: "/solutions/successfactors", desc: "SAP SuccessFactors delivers integrated HR solutions for talent management, employee experience, and core HR processes to drive organizational performance and growth." },
        ],
    },
    {
        id: "supply-spend-management",
        title: "Supply Spend Management",
        paragraphs: [
            "It integrates with SAP ERP systems to streamline purchasing, contract management, and inventory control, ensuring transparency and compliance across supply chain operations.",
        ],
        cards: [
            { title: "SSM Procurement", href: "/solutions/procurement", desc: "SAP Supply Spend Management (SSM) optimizes procurement processes, integrating sourcing, contract management, supplier collaboration, and spend analytics for efficiency and savings." },
        ],
    },
    {
        id: "supply-chain-management",
        title: "Supply Chain Management",
        paragraphs: [
            "It optimizes inventory management, demand forecasting, and order fulfillment, ensuring efficient production cycles and responsive customer service.",
        ],
        cards: [
            { title: "Supply Chain Management", href: "/solutions/supply-chain-management", desc: "SAP SCM optimizes and streamlines supply chain processes, from raw material sourcing to customer delivery, with integrated planning, optimization, and logistics." },
        ],
    },
];
