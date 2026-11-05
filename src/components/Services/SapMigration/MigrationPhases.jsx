"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import assessPhoto from "@/assets/Services/SapMigration/phase-assess.webp";
import cleansePhoto from "@/assets/Services/SapMigration/phase-cleanse.webp";
import mockPhoto from "@/assets/Services/SapMigration/phase-mock.webp";
import cutoverPhoto from "@/assets/Services/SapMigration/phase-cutover.webp";
import hypercarePhoto from "@/assets/Services/SapMigration/phase-hypercare.webp";

const PHASES = [
    {
        title: "Assess & Plan",
        desc: "We review the current landscape, data volumes, custom code, and interfaces, then agree the migration approach and timeline.",
        image: assessPhoto,
    },
    {
        title: "Cleanse & Map",
        desc: "Legacy data is cleansed, deduplicated, and mapped to the target SAP structures so only accurate, consistent data moves across.",
        image: cleansePhoto,
    },
    {
        title: "Mock Migrations",
        desc: "Repeatable trial loads and comprehensive testing validate migrated data and applications before anything touches production.",
        image: mockPhoto,
    },
    {
        title: "Cutover",
        desc: "A rehearsed cutover plan moves the business onto the new SAP system within a controlled window, with minimal disruption.",
        image: cutoverPhoto,
    },
    {
        title: "Hypercare",
        desc: "Users and support teams are trained and supported while the new system settles, so issues are resolved quickly after go-live.",
        image: hypercarePhoto,
    },
];

export default function MigrationPhases() {
    const [active, setActive] = useState(0);
    const phase = PHASES[active];

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-8 sm:mb-12"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How a Migration Runs</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Five phases that keep data integrity and business continuity intact from first assessment to
                    life on the new platform.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-12"
            >
                {/* Tabs: horizontal scroll strip on mobile, vertical list on desktop */}
                <div
                    role="tablist"
                    className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible -mx-8 px-8 sm:mx-0 sm:px-0 lg:w-[34%] shrink-0 lg:border-l lg:border-[#E2E5EA]"
                >
                    {PHASES.map((item, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActive(index)}
                                onMouseEnter={() => setActive(index)}
                                className={`relative shrink-0 flex items-center gap-3 sm:gap-4 text-left px-4 py-3 lg:px-6 lg:py-5 border lg:border-0 transition-colors duration-300 ${isActive
                                    ? "border-[#2d8ec5] bg-[#f5f6f6] lg:bg-[#f5f6f6]"
                                    : "border-[#E2E5EA] hover:bg-[#f5f6f6]/60"
                                    }`}
                            >
                                <span
                                    className={`hidden lg:block absolute -left-px top-0 h-full w-[3px] transition-colors duration-300 ${isActive ? "bg-[#2d8ec5]" : "bg-transparent"
                                        }`}
                                />
                                <span
                                    className={`text-sm sm:text-base font-semibold ${isActive ? "text-[#2d8ec5]" : "text-[#a5a5a5]"}`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className={`whitespace-nowrap lg:whitespace-normal text-base sm:text-xl ${isActive ? "text-[#2E3033] font-semibold" : "text-[#55595E] font-light"
                                        }`}
                                >
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Panel */}
                <div className="relative w-full lg:flex-1 lg:min-w-0 min-h-[320px] sm:min-h-[380px] overflow-hidden bg-black">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={phase.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                        >
                            <Image src={phase.image} alt="" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col gap-2 sm:gap-3 max-w-[640px]">
                                <p className="text-white/70 text-sm sm:text-base font-light uppercase tracking-wide">
                                    Phase {active + 1} of {PHASES.length}
                                </p>
                                <h3 className="text-white text-xl sm:text-[28px] font-semibold">{phase.title}</h3>
                                <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed">{phase.desc}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}
