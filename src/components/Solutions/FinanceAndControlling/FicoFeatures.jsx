"use client";

import { motion } from "framer-motion";

const CORE_MODULES = [
    {
        title: "Financial Accounting (FI)",
        desc: "SAP FICO's Financial Accounting module ensures precise management of financial transactions and data recording, facilitating the generation of accurate financial statements. It encompasses crucial functions like general ledger management, accounts payable and receivable handling, and asset accounting, offering a comprehensive framework for robust financial management within organizations.",
    },
    {
        title: "Controlling (CO)",
        desc: "SAP FICO's Controlling module provides comprehensive insights into organizational costs and performance. It enables tracking of costs across various dimensions, analyzing profitability by different criteria, and optimizing resource allocation for enhanced efficiency and profitability. Key features include cost center accounting, internal orders management, profitability analysis, and product cost controlling capabilities.",
    },
];

const SUPPORTING_FEATURES = [
    {
        title: "Integrated Financial Management",
        desc: "SAP FICO enables seamless integration of financial processes throughout the organization, linking financial accounting with controlling, procurement, sales, and other business functions. This integration ensures consistent and accurate data across the enterprise, supporting informed decision-making and optimizing overall financial management efficiency.",
    },
    {
        title: "Real-time Reporting & Analytics",
        desc: "SAP FICO provides powerful reporting and analytics tools that enable real-time access to financial data. Users can generate standard reports, create customizable dashboards, and perform ad-hoc analysis, gaining actionable insights promptly. This supports informed decision-making by ensuring timely and accurate financial information is readily available and usable across the organization.",
    },
    {
        title: "Compliance & Governance",
        desc: "SAP FICO incorporates robust compliance and governance features to help organizations adhere to regulatory standards and internal policies. It includes financial controls, audit trails, and security measures to ensure transparency, accountability, and trustworthiness in all financial operations, enhancing overall compliance and governance effectiveness.",
    },
];

// Two core modules in the wide row, three supporting capabilities below. Cards
// size to their copy (the grid stretches each row to its tallest card), so no
// min-height is needed to keep a row aligned.
function Card({ title, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-[#d3d5d8] bg-[#E4E6E7] flex flex-col gap-3 px-6 py-7 sm:px-8 sm:py-8 h-full"
        >
            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{title}</h2>
            <p className="text-[#55595E] text-base sm:text-lg font-light">{desc}</p>
        </motion.div>
    );
}

export default function FicoFeatures() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[694px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of <span className="text-[#2D8EC5]">Finance and Controlling</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The core modules, and the integrated capabilities that turn them into one finance function.
                </p>
            </motion.div>

            <div className="w-full max-w-screen flex flex-col gap-6 sm:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {CORE_MODULES.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {SUPPORTING_FEATURES.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
