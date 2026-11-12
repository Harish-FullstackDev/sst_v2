"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import approachBg from "@/assets/Services/MicrosoftRollout/approach-bg.webp";

const STEPS = [
    { title: "Plan", desc: "Define scope, sites, and timelines, and align the rollout strategy with business goals." },
    { title: "Prepare", desc: "Assess risks, readiness, and integration points across the existing IT environment." },
    { title: "Pilot", desc: "Deploy to a first group, validate the setup, and refine before scaling further." },
    { title: "Deploy", desc: "Roll out in planned waves sized to your organization, keeping downtime to a minimum." },
    { title: "Adopt", desc: "Train and support users so teams take up new tools confidently and effectively." },
];

export default function RolloutApproach() {
    // First step open by default; auto-advances, pausing while hovered.
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
        <section className="w-full py-10 sm:py-0 flex flex-col items-center gap-8 sm:gap-[62px]">
            <div className="flex sm:hidden flex-col items-center gap-2 text-center px-6">
                <h2 className="text-[#2E3033] text-xl font-semibold">
                    Our Rollout Approach
                </h2>
                <p className="text-[#55595E] text-sm font-light">
                    Where strategy meets execution: a systematic path from planning to deployment, built to minimize risk and disruption.
                </p>
            </div>

            <div className="flex sm:hidden w-full flex-col gap-3 px-6">
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
                            <p className="text-[#55595E] text-sm font-light ">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="relative hidden sm:block w-full aspect-[1280/682] min-h-[460px] overflow-hidden">
                <Image src={approachBg} alt="" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center text-white z-20 px-4 sm:px-0">
                    <h2 className="text-xl sm:text-[28px] font-semibold">
                        Our <span className="text-[#2D8EC5]">Rollout</span> Approach
                    </h2>

                    <p className="mt-2 sm:mt-2 max-w-3xl text-sm sm:text-lg ">
                        Where strategy meets execution: a systematic path from planning to deployment, built to minimize risk and disruption.
                    </p>
                </div>
                <div
                    className="absolute inset-x-0 top-[35.8%] bottom-[20.2%] flex"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {STEPS.map((step, index) => {
                        const isActive = hovered === index;
                        return (
                            <div key={step.title} className="relative h-full flex-1">
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

