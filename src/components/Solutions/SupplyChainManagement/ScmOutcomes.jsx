"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/SupplyChainManagement/outcomes-band.webp";

const OUTCOMES = [
    { title: "Operational Efficiency", desc: "Streamlined processes from sourcing through delivery." },
    { title: "Reduced Costs", desc: "Optimized inventory, logistics, and production planning." },
    { title: "Improved Customer Service", desc: "Reliable fulfillment and on-time delivery." },
    { title: "Quick Response to Change", desc: "Real-time visibility to act as conditions shift." },
];

export default function ScmOutcomes() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-10 sm:gap-14 overflow-hidden">
            {/* Fixed-attachment photo under a dark overlay so the white copy stays legible. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-[#0b1520]/80" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-3 max-w-[900px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">What Implementing SAP SCM Delivers</h2>
                <p className="text-white/85 text-lg sm:text-2xl font-light leading-[1.4]">
                    Implementing SCM can enhance operational efficiency, reduce costs, improve customer service, and
                    enable quick responses to changes.
                </p>
            </motion.div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/25">
                {OUTCOMES.map((outcome, index) => (
                    <motion.div
                        key={outcome.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group flex flex-col gap-2 py-6 sm:py-8 sm:pr-6 border-b border-white/25 lg:border-b-0"
                    >
                        <span className="text-[#2d8ec5] text-3xl sm:text-[40px] font-semibold leading-none transition-transform duration-500 group-hover:-translate-y-1">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-white text-lg sm:text-xl font-semibold mt-2">{outcome.title}</h2>
                        <p className="text-white/75 text-base font-light">{outcome.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
