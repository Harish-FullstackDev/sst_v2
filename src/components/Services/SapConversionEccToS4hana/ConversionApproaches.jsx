"use client";

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

// Three approaches side by side as photo-topped cards (the card style of the
// Managed Services operations carousel), so each one reads in full and the
// three can be compared at a glance.
export default function ConversionApproaches() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] mx-auto text-center mb-10 sm:mb-16"
            >
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
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {APPROACHES.map((approach, index) => (
                    <motion.div
                        key={approach.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white border border-black/[0.35] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col"
                    >
                        <div className="relative w-full aspect-[335/200] overflow-hidden">
                            <Image
                                src={approach.image}
                                alt={approach.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-3 px-6 sm:px-7 py-6 sm:py-7">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{approach.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{approach.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
