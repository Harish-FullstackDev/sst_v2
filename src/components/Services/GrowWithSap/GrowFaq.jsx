"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/GrowWithSap/icons/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "How is GROW with SAP different from RISE with SAP?",
        desc: "Both offerings are built around SAP S/4HANA Cloud. GROW with SAP centres on the public cloud edition, with standard preconfigured processes and fast adoption. RISE with SAP is typically chosen by organisations that need more flexibility, such as the private cloud edition or a move of an existing SAP system.",
    },
    {
        title: "Is GROW with SAP only for small companies?",
        desc: "No. It is designed for businesses of all sizes, and is often chosen by midsize and fast-growing companies, or by subsidiaries of larger groups that want a standard cloud ERP.",
    },
    {
        title: "Can we tailor the system to our processes?",
        desc: "SAP S/4HANA Cloud Public Edition keeps the core standard. Configuration covers most needs, and further requirements are met with key-user and side-by-side extensions on SAP BTP, which keeps upgrades predictable.",
    },
    {
        title: "How are updates handled?",
        desc: "SAP delivers updates on a regular release schedule. We help you review each release, test the processes that matter to you, and adopt the new features worth using.",
    },
    {
        title: "What does SST provide during a GROW with SAP project?",
        desc: "Assessment and the best course of action, fit-to-standard workshops, supervised configuration, data migration, testing, go-live support, and ongoing help as your business grows.",
    },
];

export default function GrowFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-10 lg:py-[64px] px-8 sm:px-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently <span className="text-[#2D8EC5]">Asked Questions</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions from businesses considering GROW with SAP.
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
