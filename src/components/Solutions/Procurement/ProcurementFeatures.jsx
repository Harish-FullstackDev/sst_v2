"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuBlocks, LuChartColumn, LuChartPie, LuFilePen, LuHandshake, LuReceipt, LuSearchCheck, LuShoppingCart } from "react-icons/lu";

const ITEMS = [
    {
        title: "Integrated Procurement",
        desc: [
            "Seamlessly integrate SAP SSM with your existing ERP system for a comprehensive view of procurement operations.",
            "Experience a streamlined, end-to-end procurement journey, from requisition to payment, all within a single, unified platform. Enhance efficiency, visibility, and control, ensuring smooth and effective procurement management under one roof.",
        ],
        icon: LuBlocks,
        points: ["ERP integration", "Requisition to payment", "One unified platform"],
    },
    {
        title: "Supplier Relationship Management",
        desc: [
            "Cultivate dynamic relationships with suppliers using SAP SSM's innovative collaboration tools. Leverage deep insights into supplier performance to negotiate smarter, more effective contracts.",
            "Mitigate risks confidently with advanced analytics, ensuring stronger partnerships and optimized procurement strategies. Enhance your procurement operations and drive success with SAP SSM.",
        ],
        icon: LuHandshake,
        points: ["Supplier collaboration", "Performance insights", "Risk analytics"],
    },
    {
        title: "Spend Analysis",
        desc: [
            "Take control of your spending with SAP SSM's powerful analytical capabilities. Uncover cost-saving opportunities by identifying spending patterns and tracking trends.",
            "Make informed, strategic decisions based on comprehensive, insightful data. Empower your procurement strategy, optimize resources, and drive financial efficiency with SAP SSM's robust analysis tools.",
        ],
        icon: LuChartPie,
        points: ["Spending patterns", "Cost-saving opportunities", "Data-led decisions"],
    },
    {
        title: "Strategic Sourcing",
        desc: [
            "Drive strategic sourcing initiatives with SAP SSM's cutting-edge capabilities. Thoroughly evaluate suppliers and engage in competitive bidding processes to secure the best deals.",
            "Choose optimal sourcing strategies that significantly reduce costs and mitigate supply chain risks. Empower your procurement operations with SAP SSM's advanced, data-driven approach.",
        ],
        icon: LuSearchCheck,
        points: ["Supplier evaluation", "Competitive bidding", "Lower supply risk"],
    },
    {
        title: "Contract Management",
        desc: [
            "Simplify contract management using SAP SSM's intuitive tools. Centralize all your contracts in one accessible platform, automate renewals, and ensure consistent compliance with regulations and policies.",
            "Reduce administrative burdens and enhance efficiency, allowing your procurement team to focus on strategic initiatives and value-added activities.",
        ],
        icon: LuFilePen,
        points: ["Central contract repository", "Automated renewals", "Policy compliance"],
    },
    {
        title: "Purchase Order Management",
        desc: [
            "Streamline purchase orders with SAP SSM's intuitive module. Enhance efficiency by automating order creation and approval processes, minimizing errors and delays.",
            "Foster seamless collaboration among procurement teams and stakeholders with real-time updates and shared access to information, ensuring a smooth, transparent procurement operation from start to finish.",
        ],
        icon: LuShoppingCart,
        points: ["Automated order creation", "Faster approvals", "Real-time updates"],
    },
    {
        title: "Invoice Processing",
        desc: [
            "Automate invoice workflows with SAP SSM's intelligent capabilities. Accelerate approval cycles by streamlining processes and eliminating manual errors.",
            "Gain crystal-clear visibility into payment statuses, ensuring smoother cash flow management. Enhance efficiency and accuracy in your procurement operations, allowing for more strategic financial planning and resource allocation.",
        ],
        icon: LuReceipt,
        points: ["Automated workflows", "Faster approval cycles", "Payment visibility"],
    },
    {
        title: "Analytics & Reporting",
        desc: [
            "Harness the power of advanced analytics and reporting tools within SAP SSM. Monitor Key Performance Indicators (KPIs) to gauge procurement effectiveness, track savings initiatives to measure financial impact, and optimize procurement processes with precision-driven insights.",
            "Make data-informed decisions that enhance efficiency and drive continuous improvement across your supply chain.",
        ],
        icon: LuChartColumn,
        points: ["KPI monitoring", "Savings tracking", "Process optimization"],
    },
];

const ROTATE_INTERVAL = 4500;

// No photos, same treatment as Big Data's pipeline panel. The left panel is
// navy (#0A2B3E to #003756) with a soft deep-blue rise; the active capability's
// Lucide icon (same set as the rest of the site) sits centred in a fine line and
// draws itself stroke by stroke on every change, with the capability's key
// points (from its description) easing in below it. Along the panel's right edge, beside the list, a 3px brand-blue line
// fills top to bottom over the rotate interval.
const DRAW_KEYFRAMES = "@keyframes ssm-draw { to { stroke-dashoffset: 0; } }";

export default function ProcurementFeatures() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[0px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[780px] mx-auto text-center"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Every capability, one platform</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of SSM Procurement</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">Select a capability to see how SAP SSM supports it.</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto lg:h-[820px] pt-16 md:pt-16">
                <div className="relative hidden lg:block w-full lg:h-full lg:w-[35%] shrink-0 overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
                    <style>{DRAW_KEYFRAMES}</style>
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_65%)]" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={ITEMS[active].title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.25 } }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-10"
                        >
                            {(() => {
                                const Icon = ITEMS[active].icon;
                                return (
                                    <Icon
                                        aria-hidden="true"
                                        strokeWidth={0.6}
                                        className="w-[34%] h-auto text-white/55 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[ssm-draw_2s_cubic-bezier(0.65,0,0.35,1)_forwards]"
                                    />
                                );
                            })()}
                            {/* Key points from the capability's description, easing in one by one. */}
                            <ul className="flex flex-col gap-3">
                                {ITEMS[active].points.map((point, i) => (
                                    <motion.li
                                        key={point}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 + i * 0.2 }}
                                        className="flex items-center gap-3 text-white/80 text-base xl:text-lg font-light"
                                    >
                                        <span className="size-1.5 shrink-0 bg-[#2D8EC5]" />
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                    {/* Upright timeline, restarts on every change (keyed). */}
                    <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[3px] bg-white/15">
                        <motion.div
                            key={active}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: ROTATE_INTERVAL / 1000, ease: "linear" }}
                            className="w-full h-full origin-top bg-[#2D8EC5]"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full lg:flex-1">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            // Fragment, not a wrapper element: the active button grows with
                            // lg:flex-1 against this flex column, which a wrapper would break.
                            <Fragment key={item.title}>
                                <button
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`relative text-left flex flex-col justify-center gap-3 px-6 sm:px-8 border-b border-[#cac9c9] last:border-b-0 overflow-hidden bg-[#F8FAFC] ${isActive ? "py-6 lg:flex-1" : "py-5"}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="ssm-feature-highlight"
                                            className="absolute inset-0 bg-[#E8EBEF] border-l-[12px] border-l-[#1C5F85]"
                                            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                    )}
                                    <div className="relative flex flex-col gap-3 ">
                                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden flex flex-col gap-3 text-[#55595E] text-base w-[92%] font-normal"
                                                >
                                                    {item.desc.map((paragraph) => (
                                                        <p key={paragraph}>{paragraph}</p>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
