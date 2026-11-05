"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/SapRollout/icons/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is the difference between an SAP rollout and an SAP implementation?",
        desc: "An implementation builds the SAP system and its processes for the first time. A rollout takes that proven system, usually as a global template, and extends it to additional countries, companies, plants or divisions, adding only the local requirements each new site needs.",
    },
    {
        title: "Do we need a global template before we can roll out?",
        desc: "It helps a great deal. If your first implementation was not designed as a template, we start by identifying which processes, settings and master data standards should become the global core, and which belong to the local layer, before the first rollout wave begins.",
    },
    {
        title: "How are country-specific requirements handled?",
        desc: "Legal, tax, statutory reporting, language and currency requirements are captured in the Business Blueprint stage and configured as a localization layer on top of the template, so they do not alter the processes other sites depend on.",
    },
    {
        title: "Can several sites go live at the same time?",
        desc: "Yes. Rollouts can be planned as single-site go-lives or as waves that bring several locations live together. The right choice depends on how similar the sites are, the support capacity available and the business calendar of each location.",
    },
    {
        title: "What support is available after a site goes live?",
        desc: "Every rollout includes the Go-Live and Support stage, where we monitor performance and collect user feedback, followed by the Improvement stage, where that feedback is used to enhance, maintain and update the system regularly.",
    },
];

export default function RolloutFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-white py-10 sm:py-16 px-8 sm:px-[64px]">
            {/* Heading on the left and the accordion on the right at xl, stacked below it */}
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full xl:w-[32%] shrink-0"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Rollout Questions, Answered</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                        What organizations usually ask before extending SAP to a new location.
                    </p>
                </motion.div>

                <div className="flex flex-col items-start w-full min-w-0 border-t border-[#a4a7a5]">
                    {ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                                <button
                                    type="button"
                                    onClick={() => handleClick(index)}
                                    className="flex w-full items-center justify-between gap-6 py-5 sm:py-6 text-left"
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
            </div>
        </section>
    );
}
