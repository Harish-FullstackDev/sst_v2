"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import s4hanaPhoto from "@/assets/Services/SapMigration/scenario-s4hana.webp";
import hanaDbPhoto from "@/assets/Services/SapMigration/scenario-hana-db.webp";
import cloudPhoto from "@/assets/Services/SapMigration/scenario-cloud.webp";
import legacyPhoto from "@/assets/Services/SapMigration/scenario-legacy.webp";

const CARDS = [
    {
        title: "ECC to SAP S/4HANA",
        desc: "Move from SAP ECC onto SAP S/4HANA for improved performance, simplified processes, and real-time analytics.",
        image: s4hanaPhoto,
    },
    {
        title: "Database to SAP HANA",
        desc: "Shift existing SAP systems onto the SAP HANA database to speed up processing and reporting.",
        image: hanaDbPhoto,
    },
    {
        title: "On-Premise to Cloud",
        desc: "Relocate SAP workloads from ageing data centres to scalable cloud infrastructure.",
        image: cloudPhoto,
    },
    {
        title: "Legacy Systems to SAP",
        desc: "Bring data and processes from non-SAP or home-grown systems into a modern SAP environment.",
        image: legacyPhoto,
    },
];

export default function MigrationScenarios() {
    // Cycles the revealed card, pausing while the grid is hovered or focused.
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % CARDS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px] mb-10 sm:mb-[50px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Migrate, Modernize, Thrive.</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Migration Scenarios We Deliver</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Wherever your landscape starts, the move is planned around your data, your processes, and your
                    business calendar.
                </p>
            </motion.div>

            {/* Mobile: stacked cards with descriptions always visible */}
            <div className="flex sm:hidden flex-col gap-4">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full min-h-[220px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative flex flex-col justify-start gap-2 px-4 pt-5 pb-6">
                            <h3 className="text-white text-xl font-semibold">{card.title}</h3>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-reveal; active card widens and reveals its description */}
            <div
                className="hidden sm:grid grid-cols-2 lg:flex gap-6 lg:h-[420px] w-full"
                onMouseLeave={() => setIsPaused(false)}
            >
                {CARDS.map((card, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            tabIndex={0}
                            className={`relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full transition-[flex-grow] duration-700 ease-out ${isActive ? "lg:flex-[2_1_0%]" : "lg:flex-[1_1_0%]"
                                }`}
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/65" : "bg-black/30"}`}
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 flex flex-col gap-2">
                                <h3 className="text-white text-xl sm:text-2xl font-semibold">{card.title}</h3>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/85 text-base lg:text-lg font-light leading-relaxed max-w-[420px]">
                                            {card.desc}
                                        </p>
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
