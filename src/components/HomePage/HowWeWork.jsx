"use client";

import { useEffect, useRef, useState } from "react";
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
    // pausing while the grid is hovered/focused. The active step gets a soft
    // blue wash, a 2px line that draws down its border (timed to the
    // auto-advance), a blue number and a darker title that eases in 6px.
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    // Short hover intent: a cursor just passing over a step on its way
    // somewhere else doesn't trigger it, so sweeping across stays calm.
    const hoverTimer = useRef(null);
    const clearHover = () => clearTimeout(hoverTimer.current);
    useEffect(() => clearHover, []);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-white pt-10 pb-10 sm:pt-16 sm:pb-16 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1094px] mx-auto text-center mb-10 sm:mb-14"
            >
                <h2 className="text-[#10161d] text-[28px] font-semibold">
                    A Delivery Approach Built Around <span className="text-[#2D8EC5]">SAP</span>, Not Adapted to It
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
                                clearHover();
                                hoverTimer.current = setTimeout(() => setActiveIndex(index), 120);
                            }}
                            onMouseLeave={clearHover}
                            onFocus={() => {
                                setIsPaused(true);
                                setActiveIndex(index);
                            }}
                            onBlur={() => setIsPaused(false)}
                            // lg:pr-8: the 4 steps sit edge to edge (lg:gap-0), so without it each
                            // title could run right up to the next step's border line.
                            className="relative flex flex-1 flex-col gap-6 pl-5 lg:pr-8 pt-2 pb-10 border-l border-[#d3dae2] cursor-pointer outline-none"
                        >
                            {/* Soft brand-blue wash from the line, fading in behind the active step. */}
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(45,142,197,0.08),rgba(45,142,197,0)_75%)] transition-opacity duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                            {/* 2px brand-blue line drawing down over the grey border. While
                                auto-playing it fills across the whole interval, so it doubles
                                as a timer for the next step; on hover/focus it completes
                                smoothly over a second; leaving, it fades out. Hover timings are long
                                and eased on purpose so moving across steps feels soft. */}
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none absolute -left-px top-0 bottom-0 w-[2px] origin-top bg-[#2d8ec5] motion-reduce:transition-none ${isActive
                                    ? `scale-y-100 opacity-100 ${isPaused
                                        ? "transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                                        : "transition-transform duration-[3000ms] ease-linear"
                                    }`
                                    : "scale-y-0 opacity-0 transition-[opacity,scale] duration-[700ms,0ms] [transition-delay:0ms,700ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                    }`}
                            />

                            <p
                                className={`relative text-lg font-medium transition-colors duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? "text-[#2d8ec5]" : "text-[#8794a3]"
                                    }`}
                            >
                                {step.number}
                            </p>

                            <p
                                className={`relative text-lg sm:text-xl font-medium transition-[color,translate] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isActive ? "translate-x-1.5 text-[#10161d]" : "translate-x-0 text-[#8794a3]"
                                    }`}
                            >
                                {step.title}
                            </p>

                            {/* Step descriptions hidden for now (2026-11-12); the copy is
                                still in STEPS[].desc if they come back. */}
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
}
