"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/UiUxDesign/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "What is the difference between UI and UX design?",
        desc: "UX (user experience) design shapes how a product works: the research, structure, flows, and interactions that make it easy to use. UI (user interface) design shapes how it looks: the layout, colors, typography, and icons users see and touch. Both are needed for an experience that is intuitive and visually engaging.",
    },
    {
        title: "Can you redesign an existing website or application?",
        desc: "Yes. We start by reviewing the current experience and gathering user feedback to identify pain points, then redesign the areas that matter most while keeping what already works for your users.",
    },
    {
        title: "How do you make sure the design works for real users?",
        desc: "We test prototypes with real users before development, observe where they struggle, and refine the design based on what we learn. Testing continues after launch as usage data comes in.",
    },
    {
        title: "Will the designs work across devices?",
        desc: "Yes. Layouts are designed responsively so the experience stays consistent and usable on desktop, tablet, and mobile screens.",
    },
    {
        title: "What do your developers receive at hand-off?",
        desc: "Developers receive finished screens, interactive prototypes, specifications, and reusable components and assets, so the design can be built accurately and consistently.",
    },
];

export default function UiUxFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently <span className="text-[#2D8EC5]">Asked Questions</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions about our UI/UX design services.
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
                                <span className="font-['Houschka_Pro'] text-[#2E3033] text-lg sm:text-2xl font-semibold">{item.title}</span>
                                <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                    <Image src={circleIcon} alt="" fill className="object-contain" />
                                    <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />
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
