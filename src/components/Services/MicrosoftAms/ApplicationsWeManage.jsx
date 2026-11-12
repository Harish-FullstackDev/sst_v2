"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const COLUMNS = [
    {
        title: "Dynamics 365",
        desc: "Business Central, Finance, Supply Chain, Sales, and Customer Service apps, including extensions and integrations.",
    },
    {
        title: "Microsoft 365",
        desc: "Exchange Online, SharePoint, Teams, and OneDrive administration, governance, and user support.",
    },
    {
        title: "Microsoft Azure",
        desc: "The virtual machines, databases, app services, and integrations your business applications run on.",
    },
    {
        title: "Power Platform",
        desc: "Power Apps, Power Automate flows, and Power BI reports kept working as data and processes change.",
    },
];

export default function ApplicationsWeManage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % COLUMNS.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full bg-white py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16 px-8 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Applications <span className="text-[#2D8EC5]">We Manage</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    One support team across the Microsoft platforms your business runs on.
                </p>
            </motion.div>

            {/* 1 column on phones, 2 on tablet, 4 on desktop. Each cell draws its own top
                border plus a right border where another cell follows in the same row; the
                wrapper closes the bottom edge, so hairlines stay single-width at every count. */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border-b border-[#8794A3]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {COLUMNS.map((col, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={col.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`relative px-8 sm:px-6 py-10 sm:py-14 min-h-[240px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden transition-colors duration-300 border-t border-[#8794A3] sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 ${isActive ? "text-white" : "text-[#2E3033]"
                                }`}
                        >
                            <div
                                aria-hidden
                                className={`absolute inset-0 bg-[#002C4F] transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                            />
                            <div className="relative lg:mt-10 flex flex-col gap-8 sm:gap-16">
                                <h2 className="text-xl sm:text-2xl font-semibold">{col.title}</h2>
                                <p className="text-base sm:text-xl font-light">{col.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
