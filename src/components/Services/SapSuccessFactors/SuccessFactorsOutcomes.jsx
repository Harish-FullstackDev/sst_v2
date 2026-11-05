"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import outcomesPhoto from "@/assets/Services/SapSuccessFactors/outcomes.webp";

const OUTCOMES = [
    "One employee record from hire to retire",
    "Faster, more consistent hiring and onboarding",
    "Goals and performance aligned with business priorities",
    "Learning tied to the skills the business needs",
    "Real-time workforce analytics for HR and managers",
    "Self-service that reduces routine HR requests",
];

export default function SuccessFactorsOutcomes() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-16 bg-[#f5f6f6]">
            {/* The photo is full-bleed on the left, so this row is intentionally not wrapped
                in a padded container. It holds a 578px cap at lg and the card fills the
                rest of the row, capped at 800px. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[320px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[560px] lg:w-[42%] lg:max-w-[578px]"
                >
                    <Image
                        src={outcomesPhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    {/* Text inset as a % of the image so it stays proportionally placed as
                        the image scales between breakpoints. */}
                    <div className="absolute inset-x-8 bottom-8 flex flex-col gap-2 lg:inset-x-auto lg:bottom-[20%] lg:left-[14%] lg:right-[12%]">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">What Changes for Your People</h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            The everyday outcomes of a well-run SuccessFactors landscape.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-8 sm:px-12 py-10 sm:py-12"
                >
                    <ul className="list-disc pl-5 sm:pl-6 text-base sm:text-lg font-light leading-relaxed sm:leading-[48px] text-[#55595E] space-y-3 sm:space-y-0">
                        {OUTCOMES.map((outcome) => (
                            <li key={outcome}>{outcome}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
