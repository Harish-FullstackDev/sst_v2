"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import employeeCentralPhoto from "@/assets/Services/SapSuccessFactors/employee-central.webp";
import recruitingPhoto from "@/assets/Services/SapSuccessFactors/recruiting.webp";
import performancePhoto from "@/assets/Services/SapSuccessFactors/performance.webp";
import learningPhoto from "@/assets/Services/SapSuccessFactors/learning.webp";

const TABS = [
    {
        label: "Employee Central",
        desc: "A single core HR record for every employee, covering organisation structure, job data, time off, and self-service across countries.",
        img: employeeCentralPhoto,
    },
    {
        label: "Recruiting & Onboarding",
        desc: "Job requisitions, candidate pipelines, and guided onboarding that help new hires become productive from their first day.",
        img: recruitingPhoto,
    },
    {
        label: "Performance & Goals",
        desc: "Goal setting, continuous feedback, and review cycles that connect individual performance to business objectives.",
        img: performancePhoto,
    },
    {
        label: "Learning & Development",
        desc: "Course catalogues, compliance training, and development plans that build the skills your workforce needs next.",
        img: learningPhoto,
    },
];

export default function SuccessFactorsModules() {
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
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">From Hire to Retire</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The SAP SuccessFactors capabilities we implement, configure, and integrate.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-[80px] w-full">
                {/* Tabs — height follows the tab count (gap-based) instead of a fixed h-96. */}
                <div className="flex flex-col w-full lg:w-[380px] gap-2 lg:gap-10 shrink-0">
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
                            className={`text-left border-l-[3px] flex items-center min-h-12 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-2xl font-semibold">{tab.label}</h2>
                        </button>
                    ))}
                </div>

                {/* Image panel */}
                <div className="relative w-full lg:flex-1 aspect-[4/3] sm:aspect-[798/446] mx-auto lg:mx-0 overflow-hidden">
                    {/* Every image stays mounted and cross-fades on opacity, so switching tabs never blanks the box; only the copy swaps, after the image has started to change. */}
                    <div className="absolute inset-0">
                        {TABS.map((tab, index) => (
                            <Image
                                key={index}
                                src={tab.img}
                                alt={index === active ? tab.label : ""}
                                fill
                                className={`object-cover transition-opacity duration-700 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
                                priority={index === 0}
                            />
                        ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                            <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                                className="absolute left-6 right-6 sm:left-[48px] sm:right-auto bottom-6 sm:bottom-[40px] sm:max-w-[462px] text-white flex flex-col gap-3"
                            >
                                <h2 className="text-xl font-semibold">{activeTab.label}</h2>
                                <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                                    {activeTab.desc}
                                </p>
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    
                </div>
            </div>
        </section>
    );
}
