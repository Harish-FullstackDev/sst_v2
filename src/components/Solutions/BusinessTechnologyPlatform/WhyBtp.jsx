"use client";

import { LuChartColumn, LuPlug, LuZap } from "react-icons/lu";
import { motion } from "framer-motion";

const REASONS = [
    {
        icon: LuPlug,
        title: "Unified Integration",
        desc: "BTP integrates processes, data, and apps, enhancing operational efficiency seamlessly.",
    },
    {
        icon: LuZap,
        title: "Innovation & Agility",
        desc: "BTP enables rapid cloud app development, deployment, scalability, and market responsiveness.",
    },
    {
        icon: LuChartColumn,
        title: "Analytics & Insights",
        desc: "BTP enhances decision-making with analytics and AI, boosting efficiency and competitiveness.",
    },
];

export default function WhyBtp() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Why SAP BTP</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Why Choose <span className="text-[#2D8EC5]">SAP Business Technology Platform?</span>
                </h2>
            </motion.div>

            {/* Three columns divided by thin rules on desktop; stacked with rules between rows below lg. */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#d3d5d8]">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        className={`flex flex-col gap-4 py-8 lg:py-10 lg:px-10 border-b lg:border-b-0 border-[#d3d5d8] ${
                            index > 0 ? "lg:border-l" : "lg:pl-0"
                        } ${index === REASONS.length - 1 ? "lg:pr-0" : ""}`}
                    >
                        <reason.icon aria-hidden="true" strokeWidth={1.5} className="size-11 sm:size-12 text-[#1C5F85]" />
                        <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{reason.title}</h3>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
