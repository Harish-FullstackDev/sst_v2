"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Solutions/Procurement/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is SAP Supply Spend Management (SSM)?",
        desc: "SAP SSM is an ERP solution for managing how an organization spends. It enhances visibility, nurtures supplier relationships, and unlocks cost savings across the supply chain, covering sourcing, contracts, purchase orders, invoices, and spend analytics.",
    },
    {
        title: "Does SAP SSM work with our existing ERP system?",
        desc: "Yes. SAP SSM integrates with your existing ERP and source systems, giving a comprehensive view of procurement operations and streamlining processes from origin to settlement on a single, unified platform.",
    },
    {
        title: "Which areas of spend does it cover?",
        desc: "SAP integrates Ariba, Fieldglass, and Concur, so spend management extends across procurement, workforce, and travel rather than purchasing alone.",
    },
    {
        title: "How does SAP SSM help reduce costs?",
        desc: "Spend analysis identifies spending patterns and tracks trends to uncover savings, while strategic sourcing uses supplier evaluation and competitive bidding to secure the best deals and reduce supply chain risk.",
    },
    {
        title: "How are procurement results measured?",
        desc: "Built-in analytics and reporting monitor procurement KPIs and track savings initiatives, so teams can measure financial impact and keep improving their processes.",
    },
];

export default function ProcurementFaq() {
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently <span className="text-[#2D8EC5]">Asked Questions</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions procurement teams ask about SAP Supply Spend Management.
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
