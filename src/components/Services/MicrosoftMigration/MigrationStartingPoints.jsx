"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Three common starting points for a move to Microsoft ERP. Hover / auto-cycle
// reveal follows the Data & Intelligence card treatment; photos replaced by the
// navy card below.
const PATHS = [
    {
        title: "Legacy Microsoft ERP",
        desc: "Dynamics NAV, GP, or AX running on-premises, moving to Dynamics 365 Business Central or Finance and Supply Chain Management in the cloud.",
    },
    {
        title: "Third-Party ERP",
        desc: "Systems from other vendors, or home-grown applications, with data mapped to the Microsoft data model and processes redesigned around standard functionality.",
    },
    {
        title: "Entry-Level Accounting",
        desc: "Spreadsheets and small-business accounting packages the business has outgrown, replaced by a full ERP with history carried forward.",
    },
];

// No photos: the same restrained navy card as SAP Migration's scenarios (navy
// base, soft deep-blue lift, self-drawing 1px brand-blue hairline frame, one
// faint light sweep on open). The one difference: here the frame draws from the
// bottom up (bottom edge from the left, sides rising, top edge last), a quiet
// nod to the data rising out of the old system into Microsoft.
function Hairline({ isActive, className, axis, delay }) {
    const scale = axis === "x" ? (isActive ? "scale-x-100" : "scale-x-0") : isActive ? "scale-y-100" : "scale-y-0";
    return (
        <span
            className={`absolute bg-[#2D8EC5]/80 transition-transform duration-700 ease-out ${scale} ${className}`}
            style={{ transitionDelay: isActive ? delay : "0ms" }}
        />
    );
}

function CardBackground({ isActive }) {
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
            <Hairline isActive={isActive} axis="x" delay="0ms" className="inset-x-0 bottom-0 h-px origin-left" />
            <Hairline isActive={isActive} axis="y" delay="150ms" className="inset-y-0 left-0 w-px origin-bottom" />
            <Hairline isActive={isActive} axis="y" delay="150ms" className="inset-y-0 right-0 w-px origin-bottom" />
            <Hairline isActive={isActive} axis="x" delay="300ms" className="inset-x-0 top-0 h-px origin-left" />
        </div>
    );
}

function IntroText() {
    return (
        <>
            <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Any ERP to <span className="text-[#2D8EC5]">Microsoft</span></h2>
            <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                Wherever your data lives today, the migration is planned around your systems, your history, and
                your cutover window.
            </p>
        </>
    );
}

export default function MigrationStartingPoints() {
    // Auto open/close: cycles the "active" (hover-revealed) card every few
    // seconds, pausing whenever the row is actually hovered/focused so manual
    // interaction always takes over — same behavior as EnterpriseDataFoundations.
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % PATHS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            {/* Below lg: intro stacked above, then simple stacked cards with the
                description always visible — no hover on touch. */}
            <div className="flex lg:hidden flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2"
                >
                    <IntroText />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {PATHS.map((path, index) => (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative w-full h-[240px] sm:h-[340px] overflow-hidden"
                        >
                            <CardBackground isActive />
                            <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                                <h2 className="text-white text-xl font-semibold">{path.title}</h2>
                                <p className="text-white/85 text-base font-light leading-[1.4]">{path.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Desktop: intro sits inline as the first column of the same row as
                the cards (234:282 flex ratio). Card lifts, its frame draws in, and
                the description slides in under the title on hover/auto-cycle. */}
            <div
                className="hidden lg:flex items-start gap-6"
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 flex-[234_0_0]"
                >
                    <IntroText />
                </motion.div>

                {PATHS.map((path, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            // Shorter from xl (282:300, about 300px tall at 1280); between lg
                            // and xl the cards are narrower, so they keep 282:368 to leave the
                            // description room under the title.
                            className="relative flex-[282_0_0] aspect-[282/368] xl:aspect-[282/300] overflow-hidden"
                        >
                            <CardBackground isActive={isActive} />
                            <div className="absolute inset-0 flex flex-col justify-start p-6">
                                <p
                                    className="text-2xl sm:text-[28px] font-medium leading-[1.4] text-white"
                                >
                                    {path.title}
                                </p>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-base sm:text-lg font-light leading-[1.4] pt-2">{path.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
