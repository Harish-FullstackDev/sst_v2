"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import roadmapBg from "@/assets/Services/PowerBi/implementation-roadmap.webp";

const STEPS = [
    {
        title: "Assess",
        desc: "Review existing reports, data sources, and the KPIs each team actually decides on.",
    },
    {
        title: "Model",
        desc: "Connect sources and build a shared semantic model, so every report uses the same definitions.",
    },
    {
        title: "Visualize",
        desc: "Design dashboards and custom visuals around the questions each audience needs answered.",
    },
    {
        title: "Secure & Share",
        desc: "Publish to the Power BI service with workspaces, row-level security, and scheduled refresh.",
    },
    {
        title: "Adopt",
        desc: "Train report owners and users, then extend reports as new questions come up.",
    },
];

export default function ImplementationRoadmap() {
    // First card is open by default; hovering another card takes over,
    // and the last-hovered card stays open (no reset back to null on
    // mouse-out) so a card is always in the active state. When the user
    // isn't interacting, it auto-advances to the next card every few
    // seconds, pausing while the row is hovered/focused.
    const [hovered, setHovered] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setHovered((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full pt-10 pb-10 sm:pt-16 sm:pb-16 lg:pt-0 lg:pb-0 flex flex-col items-center gap-8">

            {/* Mobile: stacked list — the 5-column image banner has no room to breathe
                this narrow, so swap it for the same card-list pattern used by
                Change Management on Business Advisory. Title/subtitle repeated here
                since the desktop pair lives inside the hidden banner block. */}
            <div className="flex lg:hidden flex-col items-center gap-2 text-center px-8 sm:px-[64px]">
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Our Power BI Implementation Roadmap
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Five steps from scattered spreadsheets to trusted, shared reporting
                </p>
            </div>

            <div className="flex lg:hidden w-full flex-col gap-3 px-8 sm:px-[64px]">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex gap-4 rounded-[10px] bg-[#F5F6F6] px-5 py-4"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00447A] text-sm font-semibold text-white">
                            {index + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#2E3033] text-base font-semibold">{step.title}</p>
                            <p className="text-[#55595E] text-sm font-light">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop / tablet: pixel-accurate Figma composition — cards float over the
                bottom band of the hero image, full-bleed edge to edge. Aspect-locked to
                the source art (1280x682) so the hero keeps the same proportions as Figma
                at every viewport width, instead of a fixed px height that crops it differently
                per breakpoint. */}
            <div className="relative hidden lg:block w-full aspect-[1280/682] min-h-[460px] overflow-hidden">
                <Image src={roadmapBg} alt="" fill className="object-cover" />
                <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center text-white z-20 px-4 sm:px-0">
                    <h2 className="text-xl sm:text-[28px] font-semibold">
                        Our Power BI Implementation Roadmap
                    </h2>

                    <p className="mt-2 sm:mt-2 max-w-3xl text-sm sm:text-lg ">
                        Five steps from scattered spreadsheets to trusted, shared reporting
                    </p>
                </div>

                {/* Card row sits at the same top/bottom offsets as the Figma frame
                    (244px / 138px of a 682px-tall frame => 35.8% / 20.2%), full-bleed
                    edge to edge with no side gutters. */}
                <div
                    className="absolute inset-x-0 top-[35.8%] bottom-[20.2%] flex"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {STEPS.map((step, index) => {
                        const isActive = hovered === index;
                        return (
                            <div key={step.title} className="relative h-full flex-1">
                                {/* Number badge: floats above the card, straddling the hero/card boundary */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.7 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute -top-[30px] left-1/2 z-20 flex size-[60px] -translate-x-1/2 items-center justify-center bg-white"
                                        >
                                            <span className="text-black text-[32px] font-light leading-none">
                                                {index + 1}
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <motion.button
                                    layout
                                    transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                                    type="button"
                                    onMouseEnter={() => setHovered(index)}
                                    onFocus={() => {
                                        setIsPaused(true);
                                        setHovered(index);
                                    }}
                                    onBlur={() => setIsPaused(false)}
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-4 lg:px-8 overflow-hidden transition-colors duration-500 ease-in-out ${isActive ? "bg-[#0A3A52]" : "bg-white"
                                        }`}
                                >
                                    <motion.h2
                                        layout
                                        transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                                        className={`relative z-10 text-base lg:text-2xl font-semibold leading-tight transition-colors duration-500 ease-in-out ${isActive ? "text-white" : "text-black"
                                            }`}
                                    >
                                        {step.title}
                                    </motion.h2>
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.p
                                                layout
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="relative z-10 text-white text-lg font-light leading-snug"
                                            >
                                                {step.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

