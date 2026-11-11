// Static case studies, rendered without a database and listed ahead of any
// Supabase rows. Shape matches the Supabase 'case_studies' table.
//
// These are anonymised sample write-ups. Before relying on them publicly,
// replace each with an approved client case (the listing page promises client
// approval and a stated measurement basis) or remove it.

export const staticCaseStudiesData = [
    {
        id: "static-cs-manufacturing-conversion",
        slug: "manufacturing-group-moves-from-ecc-to-s4hana",
        title: "Manufacturing Group Moves From SAP ECC to S/4HANA With a Rehearsed Cutover",
        type: "Case Study",
        category: "SAP Migration",
        summary:
            "A regional manufacturer converted its ECC system to S/4HANA in place, keeping familiar processes while cleaning up custom code and finance data.",
        author: "SST Delivery Team",
        publish_date: "2026-10-28",
        cover_image: "/insights/case-studies/manufacturing-s4hana-conversion.webp",
        tags: ["SAP S/4HANA", "System Conversion", "Manufacturing"],
        sections: [
            {
                heading: "The Challenge",
                content:
                    "The client, a multi-plant manufacturing group in the GCC, had run SAP ECC for over a decade. The system was stable, but mainstream maintenance deadlines were approaching and years of custom development made every change slow.\n\nThe business did not want a full redesign. Plants were running well, and leadership wanted to modernise without disrupting production.",
            },
            {
                heading: "Our Approach",
                content:
                    "SST started with a readiness assessment covering simplification items, custom code usage and finance data quality. Unused custom objects were retired before the project began, which reduced the remediation scope considerably.\n\nThe team chose a system conversion and ran multiple full cutover rehearsals on production copies, refining the runbook each time until timings and reconciliations were predictable.",
            },
            {
                heading: "What Changed",
                content:
                    "The business moved to S/4HANA over a planned weekend, with plants operating normally the following week. Finance gained the Universal Journal and faster period-end reporting, and IT inherited a cleaner codebase that is easier to maintain.\n\nPost go-live support transitioned directly into an SST application management engagement, so the team that knew the system stayed with it.",
            },
        ],
    },
    {
        id: "static-cs-retail-successfactors",
        slug: "retail-group-unifies-hr-on-sap-successfactors",
        title: "Retail Group Unifies HR Across Countries on SAP SuccessFactors",
        type: "Case Study",
        category: "SAP SuccessFactors",
        summary:
            "A multi-country retailer replaced separate local HR tools with SAP SuccessFactors Employee Central, giving leadership one view of its workforce.",
        author: "SST Delivery Team",
        publish_date: "2026-10-14",
        cover_image: "/insights/case-studies/retail-successfactors-rollout.webp",
        tags: ["SAP SuccessFactors", "Employee Central", "Retail"],
        sections: [
            {
                heading: "The Challenge",
                content:
                    "The client operated stores in several GCC countries, each with its own HR spreadsheets and local tools. Headcount reporting took weeks to compile, and employee data was inconsistent from one country to the next.",
            },
            {
                heading: "Our Approach",
                content:
                    "SST designed a global template for Employee Central with local variations only where labour law required them. Data was cleansed and harmonised country by country, and the rollout ran in waves so lessons from each country improved the next.\n\nManagers and HR teams were trained in short, role-based sessions focused on the tasks they perform every week.",
            },
            {
                heading: "What Changed",
                content:
                    "HR now works from a single system of record. Leadership can see headcount and organisation structure across all countries on demand, and employees use self-service for routine updates instead of email requests.\n\nThe common foundation also opened the way for the client to add recruiting and performance modules on the same platform.",
            },
        ],
    },
    {
        id: "static-cs-logistics-aws",
        slug: "logistics-company-moves-sap-workloads-to-aws",
        title: "Logistics Company Moves Its SAP Workloads to AWS",
        type: "Case Study",
        category: "Cloud",
        summary:
            "A logistics operator migrated its SAP landscape from an ageing data centre to AWS, improving resilience and making capacity easier to scale.",
        author: "SST Delivery Team",
        publish_date: "2026-09-30",
        cover_image: "/insights/case-studies/logistics-sap-on-aws.webp",
        tags: ["AWS", "SAP on Cloud", "Logistics"],
        sections: [
            {
                heading: "The Challenge",
                content:
                    "The client's SAP systems ran on hardware approaching end of life in a single on-premise data centre. Seasonal peaks stretched capacity, and disaster recovery depended on manual procedures that had rarely been tested.",
            },
            {
                heading: "Our Approach",
                content:
                    "SST designed an AWS landing zone with network, security and backup standards agreed with the client's IT and security teams before any workload moved. Non-production systems migrated first to prove the approach, followed by production in a planned window.\n\nHigh availability and cross-region backups were built in from the start, and the disaster recovery process was tested end to end.",
            },
            {
                heading: "What Changed",
                content:
                    "The SAP landscape now runs on infrastructure that can be resized as demand changes, with tested recovery procedures and monitoring that alerts the team before users notice issues. The data centre exit removed a hardware refresh from the client's budget plans.",
            },
        ],
    },
    {
        id: "static-cs-distribution-power-bi",
        slug: "distributor-replaces-manual-reports-with-power-bi",
        title: "Distributor Replaces Manual Spreadsheet Reports With Power BI",
        type: "Case Study",
        category: "Data & Analytics",
        summary:
            "A distribution business connected SAP and sales data to Power BI, replacing weekly spreadsheet packs with self-service dashboards.",
        author: "SST Delivery Team",
        publish_date: "2026-09-16",
        cover_image: "/insights/case-studies/distribution-power-bi-reporting.webp",
        tags: ["Power BI", "Reporting", "Distribution"],
        sections: [
            {
                heading: "The Challenge",
                content:
                    "Every week, the client's finance and sales teams exported data from SAP and other systems into spreadsheets to build management reports. The process was slow, prone to errors, and different teams often presented different numbers.",
            },
            {
                heading: "Our Approach",
                content:
                    "SST built a governed data model in Power BI that brings SAP finance and sales data together with agreed definitions for each key measure. Dashboards were designed with the people who use them, starting with the reports leadership relied on most.\n\nRow-level security ensures each manager sees only their own region, and data refreshes run automatically.",
            },
            {
                heading: "What Changed",
                content:
                    "Management reports are now available on demand rather than once a week, and teams work from the same numbers. Analysts spend their time explaining trends instead of assembling spreadsheets, and new reports can be added on the existing model without starting from scratch.",
            },
        ],
    },
];

export const getStaticCaseStudyBySlug = (slug) =>
    staticCaseStudiesData.find((c) => c.slug === slug) || null;
