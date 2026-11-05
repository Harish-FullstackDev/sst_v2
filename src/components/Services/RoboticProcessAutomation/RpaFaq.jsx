"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/RoboticProcessAutomation/icons/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "Which processes are good candidates for RPA?",
        desc: "Processes that are rules-based, repetitive, high in volume, and work with structured digital data are the strongest candidates. Processes that depend on frequent judgement calls usually need redesign or AI support first.",
    },
    {
        title: "Does RPA replace our existing systems?",
        desc: "No. Bots work through the same user interfaces and APIs your teams already use, so RPA sits on top of existing applications such as ERP, CRM, and email rather than replacing them.",
    },
    {
        title: "How is RPA different from AI?",
        desc: "RPA follows defined rules to execute tasks, while AI and machine learning interpret unstructured information and make predictions. The two are often combined, for example using OCR to read documents that a bot then processes.",
    },
    {
        title: "What happens when a process or application changes?",
        desc: "Bots need updating when the screens, rules, or data they depend on change. That is why monitoring and a maintenance process are built into every deployment.",
    },
    {
        title: "How do we keep bots secure and compliant?",
        desc: "Bots run under dedicated, role-based credentials with access limited to what each process needs, and every action is logged so automated work stays auditable.",
    },
];

export default function RpaFaq() {
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">RPA: Frequently Asked Questions</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Answers to the questions teams usually ask before starting with automation.
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
