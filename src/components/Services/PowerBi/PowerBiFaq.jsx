"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/PowerBi/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What data sources can Power BI connect to?",
        desc: "Power BI connects to databases such as SQL Server, Excel and CSV files, SharePoint lists, cloud services including Azure and Dynamics 365, and many third-party applications through built-in connectors. Data can be imported on a refresh schedule or queried live.",
    },
    {
        title: "What is the difference between Power BI Desktop and the Power BI service?",
        desc: "Power BI Desktop is where data models and reports are built. The Power BI service is the cloud platform where those reports are published, refreshed, shared through workspaces and apps, and viewed in a browser or on mobile.",
    },
    {
        title: "How do you keep reports secure when they are shared?",
        desc: "Access is controlled through workspace roles and app permissions, and row-level security limits each user to the data they are allowed to see. Reports can be shared with teams, departments, or external stakeholders without exposing the full dataset.",
    },
    {
        title: "Can dashboards show real-time data?",
        desc: "Yes. Depending on the source, reports can use DirectQuery or streaming datasets for live data, or scheduled refresh for data that only needs to update a few times a day.",
    },
    {
        title: "What AI capabilities are included?",
        desc: "Power BI includes AI visuals and features such as anomaly detection, key influencers, decomposition trees, forecasting on line charts, and natural-language Q&A, so users can explore patterns without writing code.",
    },
];

export default function PowerBiFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently Asked Questions</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions about implementing Microsoft Power BI.
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
                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
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
