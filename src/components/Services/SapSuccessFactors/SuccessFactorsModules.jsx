"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// No photos: the panel uses the same navy-to-blue family as the Methodology cards
// further down the page, but where those step in brightness, this one is told
// apart by sharp-edged facets, two lighter planes cut into the gradient at hard
// diagonals. Each tab sets its own cut and the planes slide between them
// (clip-path polygons with matching point counts interpolate), drifting left as
// the tabs run from hire to retire. Straight edges only, to match the site.

const TABS = [
    {
        label: "Employee Central",
        desc: "A single core HR record for every employee, covering organisation structure, job data, time off, and self-service across countries.",
        facetLarge: "polygon(60% 0, 100% 0, 100% 100%, 85% 100%)",
        facetSmall: "polygon(80% 0, 100% 0, 100% 40%, 100% 40%)",
    },
    {
        label: "Recruiting & Onboarding",
        desc: "Job requisitions, candidate pipelines, and guided onboarding that help new hires become productive from their first day.",
        facetLarge: "polygon(50% 0, 100% 0, 100% 100%, 72% 100%)",
        facetSmall: "polygon(72% 0, 100% 0, 100% 50%, 100% 50%)",
    },
    {
        label: "Performance & Goals",
        desc: "Goal setting, continuous feedback, and review cycles that connect individual performance to business objectives.",
        facetLarge: "polygon(40% 0, 100% 0, 100% 100%, 64% 100%)",
        facetSmall: "polygon(64% 0, 100% 0, 100% 60%, 100% 60%)",
    },
    {
        label: "Learning & Development",
        desc: "Course catalogues, compliance training, and development plans that build the skills your workforce needs next.",
        facetLarge: "polygon(32% 0, 100% 0, 100% 100%, 56% 100%)",
        facetSmall: "polygon(56% 0, 100% 0, 100% 70%, 100% 70%)",
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

                {/* Gradient panel */}
                <div className="relative w-full lg:flex-1 aspect-[4/3] sm:aspect-[798/446] mx-auto lg:mx-0 overflow-hidden">
                    {/* One persistent panel: the gradient never changes, only the facets
                        slide to the active tab's cut, so switching never blanks the box. */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top_right,#0A2B3E,#1C5F85)]">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-white/[0.06] transition-[clip-path] duration-700 ease-in-out"
                            style={{ clipPath: activeTab.facetLarge }}
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-white/[0.05] transition-[clip-path] duration-700 ease-in-out"
                            style={{ clipPath: activeTab.facetSmall }}
                        />

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
