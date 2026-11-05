"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import flowBg from "@/assets/Services/FullStackDevelopment/delivery-flow.webp";

const STEPS = [
    { title: "Discover", desc: "Goals, users, and requirements are captured and turned into a prioritized backlog." },
    { title: "Design", desc: "Wireframes, prototypes, and the technical architecture are agreed before build starts." },
    { title: "Build", desc: "Front end, back end, and database are developed together in short agile sprints." },
    { title: "Test", desc: "Automated and manual testing covers functionality, performance, and security." },
    { title: "Deploy & Support", desc: "Releases go out through CI/CD pipelines, followed by monitoring and ongoing updates." },
];

export default function FullStackDeliveryFlow() {
    // First step active by default; hovering another takes over and stays open.
    // Autoplay advances every few seconds and pauses while the row is hovered.
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setHoveredIndex((prev) => (prev + 1) % STEPS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-white py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[841px] text-center px-8 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Deliver Full-Stack Projects</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    An agile flow that takes an idea from requirements to a supported, live application.
                </p>
            </motion.div>

            {/* Below lg: stacked numbered list; the five-column banner needs desktop width. */}
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
                            <p className="text-[#55595E] text-sm sm:text-base font-light leading-snug">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: full-bleed image split into five columns; the active one fills navy. */}
            <div className="relative hidden lg:block w-full h-[clamp(440px,38vw,544px)] overflow-hidden">
                <Image src={flowBg} alt="" fill className="object-cover" />
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: "linear-gradient(to bottom, rgba(102,102,102,0) 0%, rgba(0,0,0,0.77) 85.6%)" }}
                />

                <div className="absolute inset-0 flex" onMouseLeave={() => setIsPaused(false)}>
                    {STEPS.map((step, index) => {
                        const isHovered = index === hoveredIndex;
                        return (
                            <div
                                key={step.title}
                                onMouseEnter={() => {
                                    setIsPaused(true);
                                    setHoveredIndex(index);
                                }}
                                className={`relative flex-1 min-w-0 flex flex-col justify-center gap-5 px-6 xl:px-10 cursor-pointer transition-colors duration-300 ${isHovered ? "bg-[#00447A]/80" : ""}`}
                            >
                                <span className="text-white/70 text-lg font-light">{String(index + 1).padStart(2, "0")}</span>
                                <h2 className="text-white text-xl xl:text-2xl font-semibold">{step.title}</h2>
                                {isHovered && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white text-base xl:text-lg font-light leading-snug"
                                    >
                                        {step.desc}
                                    </motion.p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
