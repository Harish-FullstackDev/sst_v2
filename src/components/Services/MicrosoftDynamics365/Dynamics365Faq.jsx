"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/MicrosoftDynamics365/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "Who is Dynamics 365 Business Central designed for?",
        desc: "Business Central is Microsoft's ERP for small and mid-sized organizations, and for subsidiaries of larger groups, that have outgrown entry-level accounting software and need finance, sales, purchasing, inventory, and projects in one system.",
    },
    {
        title: "Can Business Central handle more than one company or currency?",
        desc: "Yes. It supports multiple companies within one environment and transactions in multiple currencies, which makes it suitable for businesses operating several legal entities or trading internationally.",
    },
    {
        title: "How does Business Central work with the rest of Microsoft?",
        desc: "It integrates with Office 365 / Microsoft 365 apps such as Outlook, Excel, and Teams, with the Power Platform for reporting, automation, and low-code apps, and with Azure services for extended scalability.",
    },
    {
        title: "Can we migrate data from our current system?",
        desc: "Yes. Master data such as customers, vendors, items, and the chart of accounts, along with opening balances and open documents, is mapped, cleansed, and loaded as part of the implementation, then validated before go-live.",
    },
    {
        title: "What happens after go-live?",
        desc: "The Operation phase of Sure Step covers stabilization and support after launch. From there, ongoing application management can take over monitoring, updates, and continuous improvement.",
    },
];

export default function Dynamics365Faq() {
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
                    Common questions about implementing Dynamics 365 Business Central.
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
