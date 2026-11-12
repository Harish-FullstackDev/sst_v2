"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Solutions/SupplyChainManagement/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What does SAP Supply Chain Management cover?",
        desc: "SAP SCM spans the supply chain from raw material sourcing to customer delivery, including demand planning, supply network collaboration, inventory optimization, warehouse management, transportation management and production planning.",
    },
    {
        title: "How does SAP SCM work with our ERP system?",
        desc: "SAP SCM integrates with SAP S/4HANA and other ERP systems so that orders, inventory, production and logistics data stay synchronized, giving planners and operations teams one consistent view.",
    },
    {
        title: "Can SAP SCM improve demand forecasting?",
        desc: "Yes. SAP's planning tools combine historical data, market signals and optimization algorithms to produce more reliable forecasts and translate them into supply, production and inventory plans.",
    },
    {
        title: "Is SAP SCM suitable for multi-site or global operations?",
        desc: "SAP SCM is built to plan and execute across multiple plants, warehouses and distribution networks, with collaboration features for suppliers and logistics partners.",
    },
    {
        title: "How do you approach an SAP SCM implementation?",
        desc: "We start by mapping your current supply chain processes and pain points, then design and configure the SAP SCM capabilities that address them, integrate with your existing systems, and support your teams through testing, go-live and beyond.",
    },
];

export default function ScmFaq() {
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
                    What organizations usually want to know before modernizing supply chain management on SAP.
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
