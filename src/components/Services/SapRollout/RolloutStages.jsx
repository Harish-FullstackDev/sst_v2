"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STAGES = [
    {
        title: "Project Preparation",
        desc: "Plan, form the team, study feasibility, set objectives, and establish timelines.",
    },
    {
        title: "Business Blueprint",
        desc: "Collect requirements, document processes, map them to SAP, and configure for operations.",
    },
    {
        title: "Realization",
        desc: "Customize SAP, develop modules, integrate, and test for business functionality.",
    },
    {
        title: "Final Preparation",
        desc: "Train users, migrate data, and test system performance for the final implementation.",
    },
    {
        title: "Go-Live and Support",
        desc: "Deploy SAP, support post-go-live, and monitor performance and user feedback.",
    },
    {
        title: "Improvement",
        desc: "Collect feedback, enhance based on it, and maintain and update regularly.",
    },
];

export default function RolloutStages() {
    // Autoplay cycles the highlighted (navy) stage; entering the grid pauses it
    // so hover takes over, and it resumes from the same stage on leave.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STAGES.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full bg-white pt-10 sm:pt-16 pb-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16 px-8 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Stages Involved in <span className="text-[#2D8EC5]">Rollout</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The stages that take each new site from preparation to a stable, continuously improving system.
                </p>
            </motion.div>

            {/* Full-bleed bordered grid: 1 column on phones, 2 on tablets, 3 on desktop.
                Outer edges are drawn by the wrapper and inner hairlines by each cell's
                right/bottom border, so the lines stay correct at every column count. */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-[#8794A3]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {STAGES.map((stage, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={stage.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`relative px-8 sm:px-10 py-10 sm:py-14 min-h-[240px] sm:min-h-[320px] overflow-hidden transition-colors duration-300 border-b border-[#8794A3] sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 ${isActive ? "text-white" : "text-[#2E3033]"
                                }`}
                        >
                            <div
                                aria-hidden
                                className={`absolute inset-0 bg-[#002C4F] transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                            />
                            <div className="relative flex flex-col gap-4 sm:gap-6">
                                <h2 className="text-xl sm:text-[28px] font-semibold">{stage.title}</h2>
                                <p className={`text-base sm:text-lg font-light ${isActive ? "text-white/90" : "text-[#55595E]"}`}>
                                    {stage.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
