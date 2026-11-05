"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import buildPhoto from "@/assets/Solutions/BusinessTechnologyPlatform/area-build.webp";
import integrationPhoto from "@/assets/Solutions/BusinessTechnologyPlatform/area-integration.webp";
import dataPhoto from "@/assets/Solutions/BusinessTechnologyPlatform/area-data.webp";
import aiPhoto from "@/assets/Solutions/BusinessTechnologyPlatform/area-ai.webp";

const CARDS = [
    {
        title: "Build",
        desc: "Develop and extend business applications in the cloud with development tools and industry-standard languages and frameworks.",
        image: buildPhoto,
    },
    {
        title: "Integrate",
        desc: "Connect applications, data, and processes across SAP and non-SAP systems, in the cloud and on premises.",
        image: integrationPhoto,
    },
    {
        title: "Data & Analytics",
        desc: "Turn enterprise data into insight, uncovering patterns and trends that drive informed decisions.",
        image: dataPhoto,
    },
    {
        title: "Artificial Intelligence",
        desc: "Infuse AI and intelligent technologies into everyday processes to optimize operations and open new opportunities.",
        image: aiPhoto,
    },
];

export default function BtpAreas() {
    // Cycles the revealed card every few seconds, pausing whenever the grid is
    // hovered or focused so manual interaction always takes over.
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
        <section className="w-full py-10 px-8 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">One Platform, Four Capability Areas</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Development, integration, data, and AI brought together on a single foundation.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible */}
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

            {/* Desktop: hover-reveal grid, title at the top and description revealed at the
                bottom; auto-cycles and pauses on real hover/focus. */}
            <div
                className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[43px] w-full"
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
                            className="relative aspect-[258/335] overflow-hidden outline-none"
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/25"}`}
                            />
                            <div className="absolute inset-x-0 top-0 px-6 py-8 text-left">
                                <span className="text-[#7fc3ea] text-base font-semibold">0{index + 1}</span>
                                <h3 className="text-white text-xl sm:text-2xl font-semibold mt-1">{card.title}</h3>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-base lg:text-lg font-light leading-relaxed pt-2">{card.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
