"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const COLUMNS = [
    {
        title: "Microsoft 365 & Entra ID",
        desc: "One identity for cloud apps, Microsoft 365, and Azure resources, with single sign-on and conditional access.",
    },
    {
        title: "Dynamics 365 & Power Platform",
        desc: "Business apps, low-code solutions, and automated workflows that run on and connect through Azure services.",
    },
    {
        title: "Power BI & Microsoft Fabric",
        desc: "Analytics and reporting built on data held in Azure storage and databases, governed in one place.",
    },
    {
        title: "Windows Server & SQL Server",
        desc: "Existing Microsoft licences can be reused in Azure through Azure Hybrid Benefit to lower running costs.",
    },
];

export default function AzureMicrosoftEcosystem() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return undefined;
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % COLUMNS.length);
        }, 3500);
        return () => clearInterval(id);
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Azure at the Heart of Your <span className="text-[#2D8EC5]">Microsoft Estate</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Azure works most effectively when it is connected to the Microsoft tools your teams already use.
                </p>
            </motion.div>

            {/* Full-bleed bordered grid: the active column fills navy. Height is a
                floor so longer copy grows the row instead of clipping. */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border-t border-[#8794A3]"
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
                            className={`relative px-8 py-10 sm:px-8 sm:py-14 sm:min-h-[400px] lg:min-h-[480px] overflow-hidden transition-colors duration-300 border-b border-[#8794A3]
                                ${isActive ? "text-white" : "text-[#2E3033]"}
                                ${index % 2 === 0 ? "sm:border-r" : ""}
                                ${index < 3 ? "lg:border-r" : "lg:border-r-0"}`}
                        >
                            <div
                                aria-hidden
                                className={`absolute inset-0 bg-[#0A3A52] transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                            />
                            <div className="relative flex flex-col gap-8 sm:gap-16">
                                <h2 className="text-xl sm:text-[28px] xl:text-[32px] font-semibold leading-tight">{col.title}</h2>
                                <p
                                    className={`text-base sm:text-lg xl:text-xl font-light transition-colors duration-300 ${isActive ? "text-white/90" : "text-[#55595E]"}`}
                                >
                                    {col.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
