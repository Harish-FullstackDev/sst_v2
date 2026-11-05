"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/SapAms/icons/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is SAP Application Management Services (AMS)?",
        desc: "SAP AMS is an ongoing support agreement in which a specialist partner runs, maintains and improves your SAP applications after go-live, covering incident resolution, small enhancements, system administration and continuous optimization under agreed service levels.",
    },
    {
        title: "Which SAP systems can SST support?",
        desc: "We support SAP ECC and SAP S/4HANA landscapes, both on-premise and in the cloud, including the functional modules, custom developments, interfaces and Basis layer that sit around them.",
    },
    {
        title: "What happens to support hours we do not use?",
        desc: "Unused hours are not lost. Under our accumulate-and-carry model they roll forward month on month, so quieter periods build up capacity for busier ones such as year-end close or a new rollout.",
    },
    {
        title: "How do you take over from our current support team or partner?",
        desc: "We start with a structured transition: documentation review, knowledge transfer sessions and a period of shadow support, so your users see continuity rather than a drop in service while responsibility moves to SST.",
    },
    {
        title: "How is service quality measured?",
        desc: "Every ticket is tracked against the agreed SLA and followed by a customer satisfaction survey. Daily updates and regular reports give you a clear view of volumes, response times and recurring issues.",
    },
];

export default function AmsFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently Asked Questions</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions about moving SAP support to an application management partner.
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
