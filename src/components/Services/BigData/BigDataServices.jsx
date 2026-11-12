"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const COLUMNS = [
    { title: "Data Storage", items: ["Advanced cloud storage solutions securely store and scale vast amounts of structured and unstructured data."] },
    { title: "Data Integration", items: ["Enhanced integration tools bring diverse data sources together, ensuring seamless data flow for comprehensive analysis."] },
    { title: "Data Visualization", items: ["Interactive tools provide intuitive dashboards and insights, making complex data accessible and actionable."] },
    { title: "Data Analytics", items: ["Modern analytics platforms process massive datasets, delivering real-time and predictive insights."] },
    { title: "Data Processing", items: ["Cutting-edge technologies process data at lightning speed, enabling efficient large-scale analytics."] },
    { title: "Data Management", items: ["Governance solutions ensure data quality and compliance for reliable decision-making."] },
];

export default function BigDataServices() {
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
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[960px] mx-auto text-center mb-10 sm:mb-16 px-6 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Unlocking the Power of Core <span className="text-[#2D8EC5]">Big Data</span> Services at SST
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Six service areas, each built on proven platforms, covering the full journey of your data.
                </p>
            </motion.div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8794A3] border-y border-[#8794A3] w-full mx-auto"
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
                            className={`relative bg-white px-6 sm:px-10 py-10 sm:py-12 min-h-[240px] lg:min-h-[320px] overflow-hidden transition-colors duration-300 ${isActive ? "text-white" : "text-[#2E3033]"}`}
                        >
                            <div
                                aria-hidden
                                className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                            >
                                <div className="absolute inset-0 bg-[#0A3A52]" />
                            </div>
                            <div className="relative flex flex-col gap-8 sm:gap-12">
                                <h2 className="text-xl sm:text-[28px] font-semibold">
                                    {col.title}
                                </h2>

                                <div className="flex flex-col gap-2 text-base sm:text-lg font-light">
                                    {col.items.map((item) => (
                                        <p key={item}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
