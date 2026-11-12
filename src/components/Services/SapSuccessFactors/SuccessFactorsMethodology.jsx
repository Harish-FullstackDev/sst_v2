"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// No photos: each phase card is a gradient drawn from the site's own blue ramp
// (navy #0A2B3E, #003756, #00447A, deep blue #1C5F85, brand blue #2D8EC5). Every
// card starts from the same navy; the light end steps one notch brighter per card,
// so the row itself reads as progress from planning to go-live. Light end sits
// top-right, the navy bottom-left where the description lands, keeping white
// copy readable on every card.

const STEPS = [
    {
        from: "#0A2B3E",
        to: "#003756",
        title: "Plan & Design",
        desc: "We map your HR processes, policies, and data, then design the SuccessFactors solution around SAP best practices.",
    },
    {
        from: "#0A2B3E",
        to: "#00447A",
        title: "Configure & Integrate",
        desc: "We configure each module and connect it to payroll, SAP S/4HANA, and the other systems your HR team relies on.",
    },
    {
        from: "#0A2B3E",
        to: "#1C5F85",
        title: "Test & Train",
        desc: "We test end-to-end scenarios with your team and prepare instructional material so users are ready on day one.",
    },
    {
        from: "#0A2B3E",
        to: "#2D8EC5",
        title: "Go Live & Optimize",
        desc: "We support the launch, then adopt SAP's regular releases and refine the solution as your workforce evolves.",
    },
];

// Card face: the phase gradient only. (Arc motif dropped: curves clashed with
// the site's sharp-cornered look.)
function PhaseBackground({ step }) {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundImage: `linear-gradient(to top right, ${step.from}, ${step.to})` }}
        />
    );
}

export default function SuccessFactorsMethodology() {
    // Hover-to-grow card row: the first card is open by default, hovering opens another
    // and the last hovered card stays open. Autoplay cycles the open card while the
    // pointer is outside the row and resumes from where the user left off.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STEPS.length);
        }, 2500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full bg-white py-10 sm:p-16 px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SAP SuccessFactors <span className="text-[#2D8EC5]">Methodology</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Four phases that take your HR processes from design to a live, continuously improving system.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible */}
            <div className="flex sm:hidden flex-col gap-4">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full min-h-[220px] overflow-hidden"
                    >
                        <PhaseBackground step={step} />
                        <div className="relative flex flex-col justify-start gap-2 px-4 pt-5 pb-6">
                            <h2 className="text-white text-xl font-semibold">{step.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row. The gap is a % of the row capped at the design
                value, and card height comes from aspect-ratio (4:5 open, 16:15 closed) with
                a min-height floor so the open card's copy never runs out of room. */}
            <div
                className="hidden sm:flex sm:items-end gap-[clamp(12px,3.7%,42.67px)] w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {STEPS.map((step, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div key={step.title} className="relative flex-1 aspect-[4/5] min-h-[300px]">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onFocus={() => setActiveIndex(index)}
                                className={`absolute bottom-0 inset-x-0 overflow-hidden transition-[aspect-ratio] duration-500 ease-out ${isActive ? "aspect-[4/5] min-h-[300px] z-20" : "aspect-[16/15] z-10"
                                    }`}
                            >
                                <PhaseBackground step={step} />

                                <div
                                    className={`absolute inset-0 flex flex-col justify-between gap-3 transition-[padding] duration-500 ${isActive ? "p-6" : "p-4"
                                        }`}
                                >
                                    <h2 className="text-white text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p
                                        className={`text-white/85 text-base lg:text-lg font-light overflow-hidden transition-all duration-700 ease-out ${isActive ? "max-h-64 opacity-100 delay-250" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
