"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import planningPhoto from "@/assets/Services/MicrosoftRollout/feature-planning.webp";
import integrationPhoto from "@/assets/Services/MicrosoftRollout/feature-integration.webp";
import changePhoto from "@/assets/Services/MicrosoftRollout/feature-change-management.webp";
import riskPhoto from "@/assets/Services/MicrosoftRollout/feature-risk.webp";
import scalablePhoto from "@/assets/Services/MicrosoftRollout/feature-scalable.webp";
import ecosystemPhoto from "@/assets/Services/MicrosoftRollout/feature-ecosystem.webp";

const FEATURES = [
    {
        title: "Strategic Deployment Planning",
        desc: "Tailored rollout strategies designed to align with your business goals and operational requirements.",
        image: planningPhoto,
    },
    {
        title: "Seamless System Integration",
        desc: "Smooth integration of Microsoft solutions into existing IT ecosystems, ensuring uninterrupted workflows.",
        image: integrationPhoto,
    },
    {
        title: "Change Management Support",
        desc: "Comprehensive training, support, and communication plans to guide teams through transitions effectively.",
        image: changePhoto,
    },
    {
        title: "Risk Assessment and Mitigation",
        desc: "Proactive identification and resolution of potential risks for a secure and reliable deployment process.",
        image: riskPhoto,
    },
    {
        title: "Scalable Rollout Solutions",
        desc: "Flexible deployment options that adapt to organizational size and complexity, ensuring efficient implementation.",
        image: scalablePhoto,
    },
    {
        title: "Microsoft Ecosystem Integration",
        desc: "Leverage seamless connectivity with Microsoft 365, Azure, and Dynamics 365 for a unified digital environment.",
        image: ecosystemPhoto,
    },
];

export default function RolloutFeatures() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px] mb-8 sm:mb-12"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Plan, Deploy, Succeed.</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Key Features of Microsoft Rollout Services</h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
                {/* Accordion: one feature open at a time; drives the image on desktop */}
                <div className="w-full lg:flex-1 lg:min-w-0 flex flex-col border-t border-[#D5D9DE]">
                    {FEATURES.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.title} className="border-b border-[#D5D9DE]">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left"
                                >
                                    <span
                                        className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isOpen ? "text-[#2d8ec5]" : "text-[#a5a5a5]"
                                            }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                        className={`flex-1 text-lg sm:text-2xl transition-colors duration-300 ${isOpen ? "text-[#2E3033] font-semibold" : "text-[#55595E] font-light"
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-[#2d8ec5] text-2xl font-light leading-none shrink-0"
                                        aria-hidden="true"
                                    >
                                        +
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-4 pb-6 pl-8 sm:pl-12">
                                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">
                                                    {item.desc}
                                                </p>
                                                {/* Inline image on mobile/tablet */}
                                                <div className="relative lg:hidden w-full aspect-[16/10] overflow-hidden">
                                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop image panel */}
                <div className="hidden lg:block relative w-[40%] shrink-0 min-h-[520px] overflow-hidden bg-[#f5f6f6]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={openIndex}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image src={FEATURES[openIndex].image} alt={FEATURES[openIndex].title} fill className="object-cover" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
