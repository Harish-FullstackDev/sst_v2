"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGraduationCap, LuIdCard, LuTarget, LuUserPlus } from "react-icons/lu";

// Same panel as Microsoft Migration's key benefits: a quiet navy field
// (#0A2B3E to #003756) with the active item's Lucide icon (same set as the rest
// of the site) drawn large in a thin, faint line as a watermark on the right,
// cross-fading and drifting in on each change, and a 3px brand-blue timeline
// along the foot that fills over the autoplay interval (hidden while paused).
const INTERVAL = 5000;

const TABS = [
    {
        icon: LuIdCard,
        label: "Employee Central",
        desc: "A single core HR record for every employee, covering organisation structure, job data, time off, and self-service across countries.",
    },
    {
        icon: LuUserPlus,
        label: "Recruiting & Onboarding",
        desc: "Job requisitions, candidate pipelines, and guided onboarding that help new hires become productive from their first day.",
    },
    {
        icon: LuTarget,
        label: "Performance & Goals",
        desc: "Goal setting, continuous feedback, and review cycles that connect individual performance to business objectives.",
    },
    {
        icon: LuGraduationCap,
        label: "Learning & Development",
        desc: "Course catalogues, compliance training, and development plans that build the skills your workforce needs next.",
    },
];

export default function SuccessFactorsModules() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, INTERVAL);

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

                {/* Navy panel */}
                <div className="relative w-full lg:flex-1 aspect-[4/3] sm:aspect-[798/446] mx-auto lg:mx-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
                        {/* Faint deep-blue rise behind the copy, for depth. */}
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.35),rgba(28,95,133,0)_65%)]" />

                        {/* Watermark icon, cross-fading per tab. */}
                        <AnimatePresence>
                            <motion.div
                                key={active}
                                aria-hidden="true"
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-1/2 right-[6%] -translate-y-1/2 h-[72%] aspect-square text-white/[0.08]"
                            >
                                <activeTab.icon strokeWidth={0.6} className="size-full" />
                            </motion.div>
                        </AnimatePresence>

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

                        {/* Autoplay timeline: restarts on each tab (keyed), hidden while paused. */}
                        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
                            {!isPaused && (
                                <motion.div
                                    key={active}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                                    className="h-full origin-left bg-[#2D8EC5]"
                                />
                            )}
                        </div>
                        </div>
                </div>
            </div>
        </section>
    );
}
