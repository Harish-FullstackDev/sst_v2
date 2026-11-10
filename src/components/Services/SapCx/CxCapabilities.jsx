"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import salesPhoto from "@/assets/Services/SapCx/sales.webp";
import marketingPhoto from "@/assets/Services/SapCx/marketing.webp";
import commercePhoto from "@/assets/Services/SapCx/commerce.webp";
import servicePhoto from "@/assets/Services/SapCx/service.webp";

const STEPS = [
    {
        image: salesPhoto,
        title: "Sales",
        desc: "Give sellers a complete view of each customer, with real-time insights that help them respond quickly to customer needs.",
    },
    {
        image: marketingPhoto,
        title: "Marketing",
        desc: "Use unified customer data and AI-driven insights to deliver targeted, personalized campaigns across every channel.",
    },
    {
        image: commercePhoto,
        title: "Commerce",
        desc: "Offer seamless buying experiences across channels, connected to the same customer data that drives sales and service.",
    },
    {
        image: servicePhoto,
        title: "Service",
        desc: "Automate service workflows and equip support teams with the context they need to resolve issues and build loyalty.",
    },
];

export default function CxCapabilities() {
    // First card opens by default; hover opens another and it stays open.
    // Autoplay cycles the cards and pauses while the pointer is over the row.
    const [activeIndex, setActiveIndex] = useState(0);

    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STEPS.length);
        }, 2500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full bg-white py-10 sm:p-16 px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    One Unified Customer Experience
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    SAP CX brings sales, marketing, commerce, and service together in a single solution.
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1280px] mx-auto">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={step.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{step.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row, first card open by default. Height comes
                from aspect-ratio (4:5 open, 16:15 closed) so the photos keep their
                proportions as the cards go fluid. */}
            <div
                className="hidden sm:flex sm:items-end gap-[clamp(12px,3.7%,42.67px)] w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {STEPS.map((step, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div key={step.title} className="relative flex-1 aspect-[4/5] min-h-[280px]">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onFocus={() => setActiveIndex(index)}
                                className={`absolute bottom-0 inset-x-0 overflow-hidden transition-[aspect-ratio] duration-500 ease-out ${isActive ? "aspect-[4/5] z-20" : "aspect-[16/15] z-10"
                                    }`}
                            >
                                <Image src={step.image} alt="" fill className="object-cover" />

                                <div
                                    className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/65" : "bg-black/35"
                                        }`}
                                />

                                <div
                                    className={`absolute inset-0 flex flex-col justify-between gap-3 transition-[padding] duration-500 ${isActive ? "p-6" : "p-4"
                                        }`}
                                >
                                    <h2 className="text-white text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p
                                        className={`text-white/85 text-lg font-light overflow-hidden transition-all duration-700 ease-out ${isActive ? "max-h-64 opacity-100 delay-250" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
