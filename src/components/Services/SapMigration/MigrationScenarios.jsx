"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import s4hanaPhoto from "@/assets/Services/SapMigration/scenario-s4hana.webp";
import hanaDbPhoto from "@/assets/Services/SapMigration/scenario-hana-db.webp";
import cloudPhoto from "@/assets/Services/SapMigration/scenario-cloud.webp";
import legacyPhoto from "@/assets/Services/SapMigration/scenario-legacy.webp";

const SCENARIOS = [
    {
        image: s4hanaPhoto,
        title: "ECC to SAP S/4HANA",
        desc: "Move from SAP ECC onto SAP S/4HANA for improved performance, simplified processes, and real-time analytics.",
    },
    {
        image: hanaDbPhoto,
        title: "Database to SAP HANA",
        desc: "Shift existing SAP systems onto the SAP HANA database to speed up processing and reporting.",
    },
    {
        image: cloudPhoto,
        title: "On-Premise to Cloud",
        desc: "Relocate SAP workloads from ageing data centres to scalable cloud infrastructure.",
    },
    {
        image: legacyPhoto,
        title: "Legacy Systems to SAP",
        desc: "Bring data and processes from non-SAP or home-grown systems into a modern SAP environment.",
    },
];

const AUTOPLAY_INTERVAL = 2500;

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
                        <Image src={scenario.image} alt={scenario.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
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
                            <Image
                                src={scenario.image}
                                alt={scenario.title}
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"}`}
                            />
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
