"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Services/SapAnalyticsCloud/accordion-toggle-circle.svg";
import factorsPhoto from "@/assets/Services/SapAnalyticsCloud/success-factors.webp";

const ITEMS = [
    {
        title: "Certified SAP SAC Experts",
        desc: "Work with certified professionals who provide tailored SAC solutions for your business needs.",
    },
    {
        title: "Seamless Integration",
        desc: "Integrate data from various sources for a unified, real-time view of your business performance.",
    },
    {
        title: "Advanced Analytics",
        desc: "Leverage powerful analytics tools for in-depth data exploration, reporting, and predictive modeling.",
    },
    {
        title: "Real-Time Data & Insights",
        desc: "Make smarter, data-driven decisions with real-time access to critical business insights.",
    },
    {
        title: "Collaboration & Planning",
        desc: "Collaborate seamlessly across teams with integrated planning and forecasting tools.",
    },
    {
        title: "Scalable Solutions",
        desc: "Adopt solutions that grow with your business, supporting evolving data analytics and planning needs.",
    },
    {
        title: "Data-Driven Culture",
        desc: "Enable a culture of data-driven decision-making to improve business agility and performance.",
    },
    {
        title: "Cloud-Based Flexibility",
        desc: "Benefit from cloud-based analytics tools that ensure scalability, security, and flexibility.",
    },
];

export default function SacSuccessFactors() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                {/* Heading and photo stick beside the accordion on desktop. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 w-full lg:w-[40%] shrink-0 lg:sticky lg:top-28"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                            Our Key Success Factors with SAP SAC
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Eight strengths behind every SAP Analytics Cloud engagement we deliver.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[912/480] overflow-hidden">
                        <Image src={factorsPhoto} alt="" fill className="object-cover" />
                    </div>
                </motion.div>

                <div className="flex flex-col w-full lg:flex-1 lg:min-w-0 border-t border-[#a4a7a5]">
                    {ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                                <button
                                    type="button"
                                    onClick={() => handleClick(index)}
                                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="flex items-baseline gap-4 min-w-0">
                                        <span className="text-[#2d8ec5] text-sm sm:text-base font-light shrink-0">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                            {item.title}
                                        </span>
                                    </span>
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
                                            <p className="pb-5 sm:pb-6 pl-8 sm:pl-10 pr-10 sm:pr-16 text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
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
