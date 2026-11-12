"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PRINCIPLES = [
    {
        title: "Ownership",
        description:
            "Minimize custom code in the SAP core to ensure seamless upgrades and innovations.",
    },
    {
        title: "Precision",
        description:
            "Build extensions on SAP Business Technology Platform to stay upgrade safe.",
    },
    {
        title: "Transparency",
        description:
            "Use standard APIs and integration suites instead of direct system modifications.",
    },
    {
        title: "Regional Fluency",
        description:
            "Adopt cloud native practices for scalability, agility, and continuous innovation.",
    },
];

const AUTOPLAY_INTERVAL = 3500;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Same card as Grow with SAP's "What is Grow with SAP?" (Figma 2205:2114): a
// resting card is the inverse surface (#00223D) under a black/30 wash; the open
// card (hover or autoplay) fades to primary/700 (#004174). Title and description
// sit as one block centred vertically, inset 10% left and right; the description
// opens under the title on the active card.
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

export default function WhatShapesHowWeDeliver() {
    // Autoplay cycles the open card; hovering the grid pauses it and hands control
    // to the pointer, and mouse-leave resumes from the same card.
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;
        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PRINCIPLES.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full px-8 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16">
            <div className="flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">What Shapes <span className="text-[#2D8EC5]">How We Deliver</span></h2>
                    <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                        The principles carried into every engagement, not values printed on a wall and left there.
                    </p>
                </motion.div>

                {/* Mobile: static stacked cards in the open look, description always visible. */}
                <div className="flex sm:hidden flex-col gap-6 w-full">
                    {PRINCIPLES.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative w-full min-h-[200px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                        >
                            <CardBackground isActive />
                            <div className="relative flex min-h-[inherit] flex-col justify-center gap-2 px-[10%] py-6 text-white">
                                <h3 className="text-xl font-semibold leading-7">{item.title}</h3>
                                <p className="text-base font-light leading-6 text-white/90">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* sm and up: reveal grid driven by hover or autoplay. */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                >
                    {PRINCIPLES.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={item.title}
                                variants={itemVariants}
                                onMouseEnter={() => setActiveIndex(index)}
                                className="relative w-full min-h-[240px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.19)]"
                            >
                                <CardBackground isActive={isActive} />
                                <div className="absolute inset-0 flex flex-col justify-center px-[10%] text-white">
                                    <h3 className="text-xl font-semibold leading-7">{item.title}</h3>
                                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                        <div className="overflow-hidden">
                                            <p className="text-base font-light leading-6 pt-2">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
