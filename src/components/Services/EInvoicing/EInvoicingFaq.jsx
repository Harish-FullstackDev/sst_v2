"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/EInvoicing/icons/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is e-invoicing?",
        desc: "E-invoicing is the exchange of invoices in a structured electronic format that systems can read and process automatically. A PDF sent by email is digital, but it is not usually treated as a structured e-invoice.",
    },
    {
        title: "Is e-invoicing mandatory?",
        desc: "That depends on the country and sometimes on the type of transaction. A growing number of tax authorities require structured e-invoices, so every engagement starts by confirming the rules that apply to your entities.",
    },
    {
        title: "Can e-invoicing work with our existing ERP?",
        desc: "Yes. E-invoicing integrates with popular ERP solutions such as SAP, Oracle, and Microsoft Dynamics, so invoices are generated and posted from the system your finance team already uses.",
    },
    {
        title: "How are invoices kept secure?",
        desc: "Invoices are delivered through secure electronic platforms, while validation, audit trails, and access controls keep every invoice traceable from creation to archive.",
    },
    {
        title: "Does e-invoicing help with audits?",
        desc: "Yes. Comprehensive tracking, audit trails, and detailed reporting give auditors a complete history of each invoice, which simplifies financial audits.",
    },
];

export default function EInvoicingFaq() {
    // First question opens by default so the section reads as answered content on load.
    const [openIndex, setOpenIndex] = useState(0);

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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">E-Invoicing: Frequently Asked Questions</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    What finance and IT teams usually want to know before moving to electronic invoicing.
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
