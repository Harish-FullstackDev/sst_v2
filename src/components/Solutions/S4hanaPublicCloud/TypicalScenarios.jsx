"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/S4hanaPublicCloud/scenarios-bg.png";

const SCENARIOS = [
    "Growing Mid-Size Companies",
    "Subsidiaries in a Two-Tier ERP Model",
    "New Business Units & Spin-Offs",
    "Moves Off Legacy ERP",
    "Standardizing on Best Practices",
    "Lean In-House IT Teams",
];

export default function TypicalScenarios() {
    return (
        <section className="relative w-full overflow-hidden px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col items-center gap-10 sm:gap-14">
            <Image src={bgImage} alt="" fill className="object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-black/70 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center gap-4 text-center"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Where Public Cloud Fits Best</h2>
                <p className="text-white text-base sm:text-lg font-light">
                    Situations in which organizations most often choose SAP S/4HANA Public Cloud
                </p>
            </motion.div>

            <div className="relative z-10 w-full max-w-[1152px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-y-10">
                {SCENARIOS.map((scenario, index) => (
                    <motion.div
                        key={scenario}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="border-b border-white/50 pb-4 flex items-center justify-center"
                    >
                        <h2 className="text-[#f5f6f6] text-xl sm:text-2xl font-medium text-center">{scenario}</h2>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
