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

// Same colours as the Grow with SAP "What is Grow with SAP?" cards: a resting
// card is the inverse surface (#00223D) under a black/30 wash, and the open
// card (hover or autoplay) fades to primary/700 (#004174). A single faint
// light sweep crosses the card once as it opens; it resets instantly on close
// so it never plays backwards.
function MigrationBackground({ isActive }) {
    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#00223D]">
            <div className="absolute inset-0 bg-black/30" />
            <div
                className={`absolute inset-0 bg-[#004174] transition-opacity duration-500 ease-out ${isActive ? "opacity-100" : "opacity-0"}`}
            />
            <div
                className={`absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)] transition-transform ease-out ${isActive ? "translate-x-[300%] duration-[1400ms]" : "translate-x-0 duration-0"
                    }`}
            />
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Migration Scenarios <span className="text-[#2D8EC5]">We Deliver</span></h2>
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
                            // Same 240px height and centred title-plus-description block as
                            // the Grow with SAP "What is Grow with SAP?" cards, so the
                            // description opens under the title rather than from the foot.
                            className="relative min-h-[240px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                        >
                            <MigrationBackground isActive={isActive} />
                            <div className="absolute inset-0 flex flex-col justify-center px-6 text-left">
                                <h2 className="text-white text-xl font-semibold leading-7">{scenario.title}</h2>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/85 text-base font-light leading-6 pt-2">{scenario.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
