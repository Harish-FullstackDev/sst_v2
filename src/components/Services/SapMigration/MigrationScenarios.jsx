"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SCENARIOS = [
    {
        title: "ECC to SAP S/4HANA",
        desc: "Move from SAP ECC onto SAP S/4HANA for improved performance, simplified processes, and real-time analytics.",
    },
    {
        title: "Database to SAP HANA",
        desc: "Shift existing SAP systems onto the SAP HANA database to speed up processing and reporting.",
    },
    {
        title: "On-Premise to Cloud",
        desc: "Relocate SAP workloads from ageing data centres to scalable cloud infrastructure.",
    },
    {
        title: "Legacy Systems to SAP",
        desc: "Bring data and processes from non-SAP or home-grown systems into a modern SAP environment.",
    },
];

const AUTOPLAY_INTERVAL = 2500;

// No photos: quiet navy cards, kept in the site's darker blues (navy #0A2B3E,
// #003756, deep blue #1C5F85, brand blue #2D8EC5 only as a fine line).
// The open state is deliberately restrained rather than a colour swap:
// - a soft deep-blue lift rises from the foot,
// - a 1px brand-blue hairline frame draws itself around the card (top and
//   bottom from the left, sides from the top, a beat apart), sharp corners,
// - a single faint light sweep crosses the card once as it opens (it resets
//   instantly on close so it never plays backwards).
function Hairline({ isActive, className, axis, delay }) {
    const scale = axis === "x" ? (isActive ? "scale-x-100" : "scale-x-0") : isActive ? "scale-y-100" : "scale-y-0";
    return (
        <span
            className={`absolute bg-[#2D8EC5]/80 transition-transform duration-700 ease-out ${scale} ${className}`}
            style={{ transitionDelay: isActive ? delay : "0ms" }}
        />
    );
}

function MigrationBackground({ isActive }) {
    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
            <div
                className={`absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.45),rgba(28,95,133,0)_70%)] transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-0"
                    }`}
            />
            <div
                className={`absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)] transition-transform ease-out ${isActive ? "translate-x-[300%] duration-[1400ms]" : "translate-x-0 duration-0"
                    }`}
            />
            <Hairline isActive={isActive} axis="x" delay="0ms" className="inset-x-0 top-0 h-px origin-left" />
            <Hairline isActive={isActive} axis="y" delay="150ms" className="inset-y-0 right-0 w-px origin-top" />
            <Hairline isActive={isActive} axis="y" delay="150ms" className="inset-y-0 left-0 w-px origin-top" />
            <Hairline isActive={isActive} axis="x" delay="300ms" className="inset-x-0 bottom-0 h-px origin-left" />
        </div>
    );
}

// Desktop reveals one card at a time on a timer; hover takes over.
export default function MigrationScenarios() {
    const [autoIndex, setAutoIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const activeIndex = hoveredIndex ?? autoIndex;

    useEffect(() => {
        if (hoveredIndex !== null) return;
        const id = setInterval(() => {
            setAutoIndex((i) => (i + 1) % SCENARIOS.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [hoveredIndex]);

    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Migration Scenarios We Deliver</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Migrate, Modernize, Thrive. Wherever your landscape starts, the move is planned around your data and your processes.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible — no hover. */}
            <div className="flex sm:hidden flex-col gap-4">
                {SCENARIOS.map((scenario, index) => (
                    <motion.div
                        key={scenario.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <MigrationBackground isActive />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{scenario.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{scenario.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: auto-advancing reveal grid, hover takes over on demand. */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-[43px]">
                {SCENARIOS.map((scenario, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <motion.div
                            key={scenario.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative aspect-[258/335] overflow-hidden"
                        >
                            <MigrationBackground isActive={isActive} />
                            <div className="absolute inset-0 flex items-start justify-start px-6 py-10 text-left">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold">{scenario.title}</h2>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-base sm:text-lg font-light pt-2">{scenario.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
