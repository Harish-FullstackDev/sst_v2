"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/SapAnalyticsCloud/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is SAP Analytics Cloud?",
        desc: "SAP Analytics Cloud (SAC) is SAP's cloud-based solution that brings business intelligence, enterprise planning and predictive analytics together in one place, so teams can analyze, plan and forecast without switching tools.",
    },
    {
        title: "Which data sources can SAP Analytics Cloud connect to?",
        desc: "SAC connects to SAP sources such as SAP S/4HANA, SAP BW/4HANA and SAP Datasphere, as well as non-SAP databases, cloud applications and files, using live connections or data imports depending on your landscape.",
    },
    {
        title: "Can SAP Analytics Cloud replace our planning spreadsheets?",
        desc: "Yes. SAC's planning capabilities support budgeting, forecasting and driver-based models with version management and collaboration, so plans live in one governed model instead of scattered spreadsheets.",
    },
    {
        title: "Do business users need technical skills to use SAC?",
        desc: "No. Business users can explore data, build stories and run what-if scenarios through a self-service interface, while IT keeps control over data models, security and governance.",
    },
    {
        title: "How do you get us started with SAP Analytics Cloud?",
        desc: "We begin by understanding the decisions you need to support, then connect and model your data, build dashboards and planning models with your teams, and train users so adoption continues after go-live.",
    },
];

export default function SacFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-8 sm:py-10 lg:py-[64px] px-8 sm:px-[64px] flex flex-col items-center gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently <span className="text-[#2D8EC5]">Asked Questions</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Answers to the questions teams most often ask before adopting SAP Analytics Cloud.
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
                                className="flex w-full items-center justify-between py-5 sm:py-6 lg:py-[26px] text-left"
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
