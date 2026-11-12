"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import journeyBg from "@/assets/Services/GoogleCloudPlatform/adoption-journey.webp";

const STEPS = [
    {
        title: "Assess & Plan",
        desc: "Workloads, dependencies, and costs are reviewed to decide what moves to Google Cloud, when, and how.",
    },
    {
        title: "Landing Zone",
        desc: "Resource hierarchy, IAM, networking, and billing controls are set up for every project to build on.",
    },
    {
        title: "Migrate",
        desc: "Workloads move in planned waves using Migrate to Virtual Machines and Database Migration Service.",
    },
    {
        title: "Modernize",
        desc: "Applications move to GKE or Cloud Run where it adds value, and data consolidates in BigQuery.",
    },
    {
        title: "Operate & Optimize",
        desc: "Cloud Monitoring, Cloud Logging, and regular cost reviews keep the environment efficient.",
    },
];

const HEADING = "How We Take You to Google Cloud";
const SUBHEADING = "A phased path from first assessment to optimized, well-governed operations";

export default function GcpAdoptionJourney() {
    // First step is open by default; hovering another takes over and stays open
    // (no reset on mouse-out) so one step is always active. Autoplay advances
    // every few seconds and pauses while the strip is hovered or focused.
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
        <section className="w-full py-10 sm:py-16 lg:py-0 flex flex-col items-center gap-8 sm:gap-10">

            {/* Below lg: stacked numbered cards. The five-column strip needs the
                full desktop width to keep its copy readable. */}
            <div className="flex lg:hidden flex-col items-center gap-2 text-center px-8 sm:px-[64px]">
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Take You to <span className="text-[#2D8EC5]">Google Cloud</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">{SUBHEADING}</p>
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
                            <h3 className="text-[#2E3033] text-base sm:text-lg font-semibold">{step.title}</h3>
                            <p className="text-[#55595E] text-sm sm:text-base font-light">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: steps float over the bottom band of the image, full-bleed.
                Aspect-locked to the art (1280x682) so the composition keeps its
                proportions at every width. */}
            <div className="relative hidden lg:block w-full aspect-[1280/682] overflow-hidden">
                <Image src={journeyBg} alt="" fill className="object-cover" />
                <div className="absolute top-10 inset-x-0 text-center text-white z-20 px-16">
                    <h2 className="text-[28px] font-semibold">{HEADING}</h2>
                    <p className="mt-2 mx-auto max-w-3xl text-lg font-light">{SUBHEADING}</p>
                </div>

                <div
                    className="absolute inset-x-0 top-[35.8%] bottom-[20.2%] flex"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {STEPS.map((step, index) => {
                        const isActive = hovered === index;
                        return (
                            <div key={step.title} className="relative h-full flex-1 min-w-0">
                                {/* Number badge straddles the image/card boundary */}
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
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-4 xl:px-8 overflow-hidden transition-colors duration-500 ease-in-out ${isActive ? "bg-[#0A3A52]" : "bg-white"}`}
                                >
                                    <motion.h2
                                        layout
                                        transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                                        className={`relative z-10 text-xl xl:text-2xl font-semibold leading-tight transition-colors duration-500 ease-in-out ${isActive ? "text-white" : "text-black"}`}
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
                                                className="relative z-10 text-white text-sm xl:text-lg font-light leading-snug"
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
