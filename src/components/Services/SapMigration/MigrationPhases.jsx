"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import assessPhoto from "@/assets/Services/SapMigration/phase-assess.webp";
import cleansePhoto from "@/assets/Services/SapMigration/phase-cleanse.webp";
import mockPhoto from "@/assets/Services/SapMigration/phase-mock.webp";
import cutoverPhoto from "@/assets/Services/SapMigration/phase-cutover.webp";
import hypercarePhoto from "@/assets/Services/SapMigration/phase-hypercare.webp";

const TABS = [
    {
        label: "Assess & Plan",
        title: "Assess & Plan",
        desc: "We review the current landscape, data volumes, custom code, and interfaces, then agree the migration approach and timeline.",
        img: assessPhoto,
    },
    {
        label: "Cleanse & Map",
        title: "Cleanse & Map",
        desc: "Legacy data is cleansed, deduplicated, and mapped to the target SAP structures so only accurate, consistent data moves across.",
        img: cleansePhoto,
    },
    {
        label: "Mock Migrations",
        title: "Mock Migrations",
        desc: "Repeatable trial loads and comprehensive testing validate migrated data and applications before anything touches production.",
        img: mockPhoto,
    },
    {
        label: "Cutover",
        title: "Cutover",
        desc: "A rehearsed cutover plan moves the business onto the new SAP system within a controlled window, with minimal disruption.",
        img: cutoverPhoto,
    },
    {
        label: "Hypercare",
        title: "Hypercare",
        desc: "Users and support teams are trained and supported while the new system settles, so issues are resolved quickly after go-live.",
        img: hypercarePhoto,
    },
];

export default function MigrationPhases() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const activeTab = TABS[active];

    return (
        <section className="w-full py-10 sm:py-[64px] px-8 sm:px-0 flex flex-col items-center gap-8 sm:gap-[45px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    How a Migration Runs
                </h2>

                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Five phases that keep data integrity and business continuity intact from first assessment to go-live.
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-[100px] w-full lg:pl-[64px]">
                {/* Tabs */}
                <div className="flex flex-col justify-between w-full lg:w-96 h-auto lg:h-[420px] gap-2 lg:gap-0 shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.label}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center h-12 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-2xl font-semibold">
                                {tab.label}
                            </h2>
                        </button>
                    ))}
                </div>

                {/* Image panel */}
                <div className="relative w-full lg:flex-1 aspect-[798/446] mx-auto lg:mx-0 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={activeTab.img}
                                alt={activeTab.title}
                                fill
                                className="object-cover"
                                priority={active === 0}
                            />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="absolute left-6 right-6 sm:left-[55px] sm:right-auto bottom-6 sm:bottom-[46px] sm:w-[462px] text-white flex flex-col gap-3"
                            >
                                <h2 className="text-xl font-semibold">
                                    {activeTab.title}
                                </h2>

                                <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                                    {activeTab.desc}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}