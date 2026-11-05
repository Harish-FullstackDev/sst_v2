"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/CyberSecurity/why-cyber-bg.webp";

// What the old-site paragraph says cybersecurity does, pulled out as four points.
const POINTS = [
    "Protects sensitive information",
    "Prevents breaches",
    "Ensures compliance",
    "Builds trust",
];

export default function WhyCyber() {
    return (
        <section className="relative w-full min-h-[360px] flex overflow-hidden bg-[#0A2B3E]">
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
            </div>

            <div className="relative z-10 w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:gap-6 w-full lg:flex-[3_1_0%] lg:min-w-0"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why Cybersecurity?</h2>
                    <p className="text-white text-xl sm:text-[32px] font-light leading-snug max-w-[860px]">
                        Strengthen and Secure with Comprehensive Cybersecurity.
                    </p>
                    <p className="text-white/90 text-base sm:text-lg font-light max-w-[760px]">
                        Cybersecurity protects sensitive information, prevents breaches, ensures compliance, and builds
                        trust through advanced threat detection, response, and prevention strategies.
                    </p>
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 w-full lg:flex-[2_1_0%] lg:min-w-0"
                >
                    {POINTS.map((point) => (
                        <li
                            key={point}
                            className="border-l-[3px] border-[#2d8ec5] bg-white/10 backdrop-blur-sm px-4 py-3 text-white text-base sm:text-lg font-light"
                        >
                            {point}
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
