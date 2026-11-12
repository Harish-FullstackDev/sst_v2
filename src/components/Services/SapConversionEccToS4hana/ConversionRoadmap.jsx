"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import roadmapBg from "@/assets/Services/SapConversionEccToS4hana/roadmap.webp";

// The five SAP Activate phases a system conversion runs through after discovery.
const STEPS = [
    {
        title: "Prepare",
        desc: "Project setup, Readiness Check results, scope and a conversion plan aligned to your cutover windows.",
    },
    {
        title: "Explore",
        desc: "Fit-to-standard workshops, simplification item decisions and custom code scope agreed with the business.",
    },
    {
        title: "Realize",
        desc: "Sandbox and development conversions, code adaptation, data cleansing and repeated test cycles.",
    },
    {
        title: "Deploy",
        desc: "Mock conversions and a dress rehearsal, then the production cutover and go-live.",
    },
    {
        title: "Run",
        desc: "Hypercare, phased Fiori activation and ongoing optimization of the new S/4HANA system.",
    },
];

const HEADING = "Our Conversion Roadmap";
const SUBHEADING = "Following SAP Activate, from preparation to a running S/4HANA system";

export default function ConversionRoadmap() {
    // First step is open by default; hovering another takes over and stays
    // open. Without interaction it auto-advances, pausing while hovered.
    const [hovered, setHovered] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setHovered((prev) => (prev + 1) % STEPS.length);
        }, 3500);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full py-10 lg:py-0 flex flex-col items-center gap-8">
            {/* Mobile / tablet: numbered card list; the five-column banner needs lg width */}
            <div className="flex lg:hidden flex-col items-center gap-2 text-center px-8">
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Conversion <span className="text-[#2D8EC5]">Roadmap</span></h2>
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
                            <h2 className="text-[#2E3033] text-base sm:text-lg font-semibold">{step.title}</h2>
                            <p className="text-[#55595E] text-sm sm:text-base font-light">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: step strip floating over the bottom band of the photo, aspect-locked
                to the source art so it keeps its proportions at every width. */}
            <div className="relative hidden lg:block w-full aspect-[1280/682] min-h-[520px] overflow-hidden">
                <Image src={roadmapBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center text-white z-20 px-16">
                    <h2 className="text-[28px] font-semibold">{HEADING}</h2>
                    <p className="mt-2 text-lg">{SUBHEADING}</p>
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
                                {/* Number badge straddling the photo / card boundary */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.7 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute -top-[30px] left-1/2 z-20 flex size-[60px] -translate-x-1/2 items-center justify-center bg-white"
                                        >
                                            <span className="text-black text-[32px] font-light leading-none">{index + 1}</span>
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
                                    className={`relative h-full w-full flex flex-col items-center justify-center text-center gap-3 px-6 xl:px-8 overflow-hidden transition-colors duration-500 ease-in-out ${isActive ? "bg-[#0A3A52]" : "bg-white"
                                        }`}
                                >
                                    <motion.h2
                                        layout
                                        transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                                        className={`relative z-10 text-2xl font-semibold leading-tight transition-colors duration-500 ease-in-out ${isActive ? "text-white" : "text-black"
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
                                                className="relative z-10 text-white text-base xl:text-lg font-light leading-snug"
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
