"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import legacyMicrosoftImage from "@/assets/Services/MicrosoftMigration/start-legacy-microsoft.webp";
import thirdPartyImage from "@/assets/Services/MicrosoftMigration/start-third-party-erp.webp";
import entryLevelImage from "@/assets/Services/MicrosoftMigration/start-entry-level.webp";

// Three common starting points for a move to Microsoft ERP. Hover / auto-cycle
// reveal follows the Data & Intelligence photo-card treatment.
const PATHS = [
    {
        title: "Legacy Microsoft ERP",
        desc: "Dynamics NAV, GP, or AX running on-premises, moving to Dynamics 365 Business Central or Finance and Supply Chain Management in the cloud.",
        image: legacyMicrosoftImage,
    },
    {
        title: "Third-Party ERP",
        desc: "Systems from other vendors, or home-grown applications, with data mapped to the Microsoft data model and processes redesigned around standard functionality.",
        image: thirdPartyImage,
    },
    {
        title: "Entry-Level Accounting",
        desc: "Spreadsheets and small-business accounting packages the business has outgrown, replaced by a full ERP with history carried forward.",
        image: entryLevelImage,
    },
];

function IntroText() {
    return (
        <>
            <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Any ERP to Microsoft</h2>
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
                            <Image src={path.image} alt="" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                                <h2 className="text-white text-xl font-semibold">{path.title}</h2>
                                <p className="text-white/85 text-base font-light leading-[1.4]">{path.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Desktop: intro sits inline as the first column of the same row as
                the cards (234:282 flex ratio). Image stays put, overlay deepens, and
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
                            className="relative flex-[282_0_0] aspect-[282/368] overflow-hidden"
                        >
                            <Image
                                src={path.image}
                                alt=""
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"
                                    }`}
                            />
                            <div className="absolute inset-0 flex flex-col justify-start p-6">
                                <p
                                    className={`text-2xl sm:text-[28px] font-medium leading-[1.4] transition-colors duration-500 ${isActive ? "text-white" : "text-black"
                                        }`}
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
