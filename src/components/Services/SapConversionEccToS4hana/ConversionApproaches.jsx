"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import brownfieldImage from "@/assets/Services/SapConversionEccToS4hana/brownfield.webp";
import smartBrownfieldImage from "@/assets/Services/SapConversionEccToS4hana/smart-brownfield.webp";
import greenfieldImage from "@/assets/Services/SapConversionEccToS4hana/greenfield.webp";

const APPROACHES = [
    {
        title: "Brownfield",
        desc: "Brownfield implementations involve upgrading or enhancing an existing SAP system, allowing organizations to leverage their existing infrastructure while making necessary improvements. These implementations are often more complex, transitioning from older versions to newer ones or introducing new functionalities.",
        image: brownfieldImage,
    },
    {
        title: "Smart Brownfield",
        desc: "Smart Brownfield is a flexible approach that enables customers to make selective enhancements to their existing systems, even in complex environments like SAP. It speeds up S/4HANA implementations and standardizes the new environment.",
        image: smartBrownfieldImage,
    },
    {
        title: "Greenfield",
        desc: "A Greenfield implementation builds a new SAP system from scratch, allowing organizations to replace legacy systems or implement SAP for the first time. The system is designed and configured around the organization’s business requirements, promoting a fresh start and best practices.",
        image: greenfieldImage,
    },
];

// The old page's intro paragraph is too long for the donor's narrow inline
// intro column, so the intro sits above the row and the three cards share it.
function IntroText() {
    return (
        <>
            <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                Greenfield vs Brownfield Transformation Approaches
            </h2>
            <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                Some enterprises, for instance those running earlier editions of SAP software with few components
                that can be reused on an SAP S/4HANA platform, may choose not to convert, and instead opt for a
                &ldquo;greenfield&rdquo; implementation that requires migrating data from the old system into an
                entirely new SAP S/4HANA platform. For others, a &ldquo;brownfield&rdquo; transformation is a viable
                way to make the digital switch-over.
            </p>
        </>
    );
}

export default function ConversionApproaches() {
    // Cycles the active (revealed) card every few seconds, pausing while the
    // row is hovered or focused so manual interaction always takes over.
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % APPROACHES.length);
        }, 4000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-16 sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[960px] mb-8 sm:mb-12"
            >
                <IntroText />
            </motion.div>

            {/* Below xl: stacked cards, description always visible (no hover on touch) */}
            <div className="flex xl:hidden flex-col gap-4">
                {APPROACHES.map((approach, index) => (
                    <motion.div
                        key={approach.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full overflow-hidden"
                    >
                        <Image src={approach.image} alt={`${approach.title} SAP S/4HANA approach`} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/65" />
                        <div className="relative flex flex-col gap-2 px-5 py-6 sm:px-8 sm:py-8">
                            <h2 className="text-white text-xl sm:text-2xl font-semibold">{approach.title}</h2>
                            <p className="text-white/85 text-base sm:text-lg font-light leading-[1.4]">{approach.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-reveal row. Image stays put, overlay deepens, and the
                description slides in under the title on hover or auto-cycle. */}
            <div className="hidden xl:grid grid-cols-3 gap-6" onMouseLeave={() => setIsPaused(false)}>
                {APPROACHES.map((approach, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={approach.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            tabIndex={0}
                            className="relative aspect-[282/368] overflow-hidden outline-none"
                        >
                            <Image
                                src={approach.image}
                                alt={`${approach.title} SAP S/4HANA approach`}
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""
                                    }`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/75" : "bg-black/25"
                                    }`}
                            />
                            <div className="absolute inset-0 flex flex-col justify-start p-6 xl:p-8">
                                <h2 className="text-white text-2xl sm:text-[28px] font-semibold leading-[1.4]">
                                    {approach.title}
                                </h2>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 xl:px-8 xl:pb-8 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/90 text-base xl:text-lg font-light leading-[1.45] pt-2">{approach.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
