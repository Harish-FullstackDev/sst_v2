"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Solutions/FinanceAndControlling/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is the difference between FI and CO?",
        desc: "Financial Accounting (FI) records business transactions for external reporting, producing the general ledger, payables, receivables, assets, and the legal financial statements. Controlling (CO) serves internal management accounting, tracking where costs arise and how profitable products, customers, and business segments are.",
    },
    {
        title: "How does SAP FICO work in SAP S/4HANA?",
        desc: "In SAP S/4HANA, financial accounting and controlling postings are stored together in the Universal Journal, so external and management reporting draw on a single set of line items instead of separate ledgers that must be reconciled.",
    },
    {
        title: "Which business areas does SAP FICO connect to?",
        desc: "SAP FICO links financial accounting with controlling, procurement, sales, and other business functions, integrating with Sales, Materials Management, and Production Planning so operational transactions flow into finance automatically.",
    },
    {
        title: "How does SAP FICO support compliance and audits?",
        desc: "Financial controls, audit trails, and security measures are built into the solution, giving auditors and finance leaders a transparent record of who posted what, when, and under which controls.",
    },
    {
        title: "Can SAP FICO reporting be tailored to our business?",
        desc: "Yes. Alongside standard reports, users can create customizable dashboards and run ad-hoc analysis, and controlling dimensions such as cost centers, internal orders, and profitability segments can be structured around how your business is managed.",
    },
];

export default function FicoFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-10 sm:py-[64px] px-8 sm:px-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently Asked Questions</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions finance teams ask before moving to SAP Finance and Controlling.
                </p>
            </motion.div>

            <div className="flex flex-col items-start w-full">
                {ITEMS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                            <button
                                type="button"
                                onClick={() => handleClick(index)}
                                className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 lg:py-[26px] text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="font-['Houschka_Pro'] text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                    {item.title}
                                </span>
                                <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                    <Image src={circleIcon} alt="" fill className="object-contain" />

                                    {/* Horizontal line */}
                                    <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />

                                    {/* Vertical line: rotates to turn + into − on open */}
                                    <motion.span
                                        className="absolute w-[2px] h-[14px] bg-[#2D8EC5] rounded-full"
                                        animate={{
                                            rotate: isOpen ? 90 : 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
                                    />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 sm:pb-6 pr-10 sm:pr-16 text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
