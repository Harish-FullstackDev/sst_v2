"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import featuresImage from "@/assets/Solutions/Procurement/features.webp";

const FEATURES = [
    {
        title: "Integrated Procurement",
        desc: [
            "Seamlessly integrate SAP SSM with your existing ERP system for a comprehensive view of procurement operations.",
            "Experience a streamlined, end-to-end procurement journey, from requisition to payment, all within a single, unified platform. Enhance efficiency, visibility, and control, ensuring smooth and effective procurement management under one roof.",
        ],
    },
    {
        title: "Supplier Relationship Management",
        desc: [
            "Cultivate dynamic relationships with suppliers using SAP SSM's innovative collaboration tools. Leverage deep insights into supplier performance to negotiate smarter, more effective contracts.",
            "Mitigate risks confidently with advanced analytics, ensuring stronger partnerships and optimized procurement strategies. Enhance your procurement operations and drive success with SAP SSM.",
        ],
    },
    {
        title: "Spend Analysis",
        desc: [
            "Take control of your spending with SAP SSM's powerful analytical capabilities. Uncover cost-saving opportunities by identifying spending patterns and tracking trends.",
            "Make informed, strategic decisions based on comprehensive, insightful data. Empower your procurement strategy, optimize resources, and drive financial efficiency with SAP SSM's robust analysis tools.",
        ],
    },
    {
        title: "Strategic Sourcing",
        desc: [
            "Drive strategic sourcing initiatives with SAP SSM's cutting-edge capabilities. Thoroughly evaluate suppliers and engage in competitive bidding processes to secure the best deals.",
            "Choose optimal sourcing strategies that significantly reduce costs and mitigate supply chain risks. Empower your procurement operations with SAP SSM's advanced, data-driven approach.",
        ],
    },
    {
        title: "Contract Management",
        desc: [
            "Simplify contract management using SAP SSM's intuitive tools. Centralize all your contracts in one accessible platform, automate renewals, and ensure consistent compliance with regulations and policies.",
            "Reduce administrative burdens and enhance efficiency, allowing your procurement team to focus on strategic initiatives and value-added activities.",
        ],
    },
    {
        title: "Purchase Order Management",
        desc: [
            "Streamline purchase orders with SAP SSM's intuitive module. Enhance efficiency by automating order creation and approval processes, minimizing errors and delays.",
            "Foster seamless collaboration among procurement teams and stakeholders with real-time updates and shared access to information, ensuring a smooth, transparent procurement operation from start to finish.",
        ],
    },
    {
        title: "Invoice Processing",
        desc: [
            "Automate invoice workflows with SAP SSM's intelligent capabilities. Accelerate approval cycles by streamlining processes and eliminating manual errors.",
            "Gain crystal-clear visibility into payment statuses, ensuring smoother cash flow management. Enhance efficiency and accuracy in your procurement operations, allowing for more strategic financial planning and resource allocation.",
        ],
    },
    {
        title: "Analytics & Reporting",
        desc: [
            "Harness the power of advanced analytics and reporting tools within SAP SSM. Monitor Key Performance Indicators (KPIs) to gauge procurement effectiveness, track savings initiatives to measure financial impact, and optimize procurement processes with precision-driven insights.",
            "Make data-informed decisions that enhance efficiency and drive continuous improvement across your supply chain.",
        ],
    },
];

export default function ProcurementFeatures() {
    const [active, setActive] = useState(0);
    const feature = FEATURES[active];

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[760px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Eight capabilities, one platform</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of SSM Procurement</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Select a capability to see how SAP SSM supports it.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full"
            >
                {/* Tab list: a two-column grid of buttons when stacked, a vertical list at lg */}
                <div
                    role="tablist"
                    aria-label="Features of SSM Procurement"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 w-full lg:w-[36%] lg:max-w-[420px] shrink-0 self-start"
                >
                    {FEATURES.map((item, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActive(index)}
                                className={`flex items-center gap-4 w-full text-left px-5 py-4 border-l-2 transition-colors duration-300 ${
                                    isActive
                                        ? "border-[#2d8ec5] bg-[#f5f6f6]"
                                        : "border-[#d3d5d8] bg-white hover:bg-[#f5f6f6]"
                                }`}
                            >
                                <span
                                    className={`text-sm sm:text-base font-semibold shrink-0 ${
                                        isActive ? "text-[#2d8ec5]" : "text-[#9aa0a6]"
                                    }`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className={`text-base sm:text-lg ${
                                        isActive ? "text-[#2E3033] font-semibold" : "text-[#55595E] font-light"
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Detail panel */}
                <div role="tabpanel" className="flex flex-col w-full lg:flex-1 lg:min-w-0 bg-[#f5f6f6]">
                    <div className="relative w-full aspect-[864/400] overflow-hidden bg-[#565656]">
                        <Image src={featuresImage} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute left-6 sm:left-8 bottom-4 sm:bottom-6 text-white text-4xl sm:text-6xl font-semibold leading-none">
                            {String(active + 1).padStart(2, "0")}
                        </span>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="flex flex-col gap-4 px-6 py-7 sm:px-10 sm:py-10"
                        >
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{feature.title}</h2>
                            {feature.desc.map((paragraph) => (
                                <p key={paragraph} className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}
