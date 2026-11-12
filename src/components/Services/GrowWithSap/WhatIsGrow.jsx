"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CARDS = [
    {
        title: "SAP S/4HANA Cloud Public Edition",
        desc: "A ready-to-run cloud ERP with SAP best practices built in, updated by SAP on a regular release cycle.",
    },
    {
        title: "SAP Business Technology Platform",
        desc: "Integration, extension, and analytics tools that add capabilities without changing the ERP core.",
    },
    {
        title: "Preconfigured Best Practices",
        desc: "Industry-proven processes that shorten design and configuration, so teams start from a working baseline.",
    },
    {
        title: "Learning & Adoption",
        desc: "Guided onboarding, learning content, and community resources that help users adopt the new system.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Figma 2205:2114. Solid cards, no photos or icons: a resting card is the
// inverse surface (#00223D) under a black/30 wash; the open card (hover or
// autoplay) fades to primary/700 (#004174). Title and description sit as one
// block centred vertically, inset 10% left and right; the description opens
// under the title on the active card.
function CardBackground({ isActive }) {
    return (
        <div aria-hidden="true" className="absolute inset-0 bg-[#00223D]">
            <div className="absolute inset-0 bg-black/30" />
            <div
                className={`absolute inset-0 bg-[#004174] transition-opacity duration-500 ease-out ${isActive ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
}

export default function WhatIsGrow() {
    // Autoplay cycles the active (revealed) card; hovering the grid pauses it and
    // hands control to the pointer, and mouse-leave resumes from the same card.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % CARDS.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:gap-[64px] px-8 sm:px-[64px] pt-10 sm:pt-[32px] pb-10 sm:pb-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center max-w-[767px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What is <span className="text-[#2D8EC5]">GROW with SAP?</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    An SAP offering that packages cloud ERP, a technology platform, and adoption support for
                    businesses that want to scale on a standard cloud core.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible. */}
            <div className="flex sm:hidden flex-col gap-8 w-full">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full min-h-[220px] overflow-hidden"
                    >
                        <CardBackground isActive />
                        <div className="relative flex min-h-[inherit] flex-col justify-center gap-2 px-[10%] py-6">
                            <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: bottom-anchored active-reveal grid, driven by hover or autoplay. */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="hidden sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-8 w-full"
            >
                {CARDS.map((card, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={card.title}
                            variants={itemVariants}
                            onMouseEnter={() => setActiveIndex(index)}
                            className="relative w-full min-h-[240px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                        >
                            <CardBackground isActive={isActive} />
                            <div className="absolute inset-0 flex flex-col justify-center px-[10%] text-white">
                                <h2 className="text-xl font-semibold leading-7">{card.title}</h2>
                                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-base font-light leading-6 pt-2">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
