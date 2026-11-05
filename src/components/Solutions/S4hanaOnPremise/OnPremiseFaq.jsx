"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Solutions/S4hanaOnPremise/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "How is S/4HANA On-Premises different from SAP S/4HANA Cloud?",
        desc: "With on-premises you license the software and run it on infrastructure you own or control, so you decide when updates are applied and how far the system is customized. The SAP S/4HANA Cloud editions are subscription based, with SAP operating the system and delivering updates on its release cycle.",
    },
    {
        title: "How often is SAP S/4HANA On-Premises updated?",
        desc: "SAP publishes new on-premises releases periodically, with feature packs and support packages in between. Because you run the system, you choose when to adopt them, and we help you plan, test, and apply each upgrade.",
    },
    {
        title: "Can we move from SAP ECC to S/4HANA On-Premises?",
        desc: "Yes. The usual approaches are a new implementation (greenfield), a system conversion (brownfield), or a selective data transition. The right one depends on how much of your existing configuration, custom code, and history you want to carry forward.",
    },
    {
        title: "What infrastructure does an on-premises deployment need?",
        desc: "SAP S/4HANA runs on the SAP HANA in-memory database, so the landscape needs SAP-certified hardware sized for your data volumes and users, separate development, quality, and production systems, and a high-availability and disaster recovery design.",
    },
    {
        title: "Do you support the system after go-live?",
        desc: "Yes. We can take on monitoring, patching, performance tuning, and functional support after go-live, so your in-house team isn't carrying the system on its own.",
    },
];

export default function OnPremiseFaq() {
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently Asked Questions</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    What enterprises usually ask before choosing an on-premises SAP S/4HANA deployment.
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
                                className="flex w-full items-center justify-between gap-6 py-5 sm:py-6 lg:py-[26px] text-left"
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
