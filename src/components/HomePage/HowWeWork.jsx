"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
    {
        number: "01",
        title: "Assess & Blueprint",
        desc: "We start with your current landscape and business requirements, mapping what the system needs to do before deciding how to build it.",
    },
    {
        number: "02",
        title: "Design & Configure",
        desc: "We architect the solution against SAP best practice, whether that means a clean new build, an upgrade path, or a selective transition (greenfield, brownfield, or bluefield, whichever fits your landscape).",
    },
    {
        number: "03",
        title: "Migrate, Integrate & Test",
        desc: "Data migration, system integration, and testing happen before go-live, not as an afterthought once issues have already surfaced in production.",
    },
    {
        number: "04",
        title: "Enable, Go-Live & Support",
        desc: "Training and change management run alongside cutover, and we stay on through hypercare and beyond, monitoring, resolving, and looking for ways to get more value out of what's been built.",
    },
];

export default function HowWeWork() {
    // Card "02" originally carried the accent styling as a static example of
    // the hover/active look. That look is now driven by state so any card
    // can show it: it starts on card index 1 (matching the original default),
    // responds to hover/focus, and otherwise auto-advances every few seconds,
    // pausing while the grid is hovered/focused.
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-[#f3f6f9] pt-10 pb-10 sm:pt-16 sm:pb-16 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1094px] mx-auto text-center mb-10 sm:mb-14"
            >
                <h2 className="text-[#10161d] text-[28px] font-semibold">
                    A Delivery Approach Built Around <span className="text-[#0061AF]">SAP</span>, Not Adapted to It
                </h2>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 justify-between"
                onMouseLeave={() => setIsPaused(false)}
            >
                {STEPS.map((step, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={step.number}
                            tabIndex={0}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActiveIndex(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActiveIndex(index);
                            }}
                            onBlur={() => setIsPaused(false)}
                            // lg:pr-8: the 4 steps sit edge to edge (lg:gap-0), so without it each
                            // description could run right up to the next step's border line.
                            className={`flex flex-1 flex-col gap-6 pl-4 lg:pr-8 pb-10 border-l cursor-pointer transition-colors duration-300 ${isActive
                                ? "border-[#2d8ec5]"
                                : "border-[#d3dae2]"
                                }`}
                        >
                            <p
                                className={`text-lg font-medium transition-colors duration-300 ${isActive
                                    ? "text-[#1c5f85]"
                                    : "text-[#8794a3]"
                                    }`}
                            >
                                {step.number}
                            </p>

                            <p
                                className={`text-lg font-medium transition-colors duration-300 ${isActive
                                    ? "text-[#1c5f85]"
                                    : "text-[#8794a3]"
                                    }`}
                            >
                                {step.title}
                            </p>

                            <p
                                className={`text-base font-extralight leading-[1.59] transition-colors duration-300 ${isActive
                                    ? "text-[#10161d]"
                                    : "text-[#4a5568]"
                                    }`}
                            >
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
}
