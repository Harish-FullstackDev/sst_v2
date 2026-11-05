"use client";

import { motion } from "framer-motion";

const PILLARS = [
    {
        title: "Cloud-based",
        desc: "SAP Analytics Cloud operates entirely on the cloud, offering scalability, accessibility from anywhere, and minimizing on-premises hardware and maintenance needs.",
    },
    {
        title: "Analytics & Planning",
        desc: "SAC integrates BI with enterprise planning, enabling data analysis, visualizations, reports, and strategic alignment through actionable insights.",
    },
];

export default function SacPlatform() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">One Platform for Analysis and Planning</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Integrated business intelligence and planning, delivered from the cloud.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {PILLARS.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        className="relative bg-white border-t-[3px] border-[#2d8ec5] flex flex-col gap-4 px-6 py-8 sm:px-10 sm:py-10 overflow-hidden"
                    >
                        {/* Oversized faded index sits behind the copy as a quiet marker */}
                        <span
                            aria-hidden="true"
                            className="absolute right-4 sm:right-8 -top-2 text-[72px] sm:text-[110px] font-semibold leading-none text-[#2d8ec5]/10 select-none"
                        >
                            0{index + 1}
                        </span>
                        <h3 className="relative text-[#2E3033] text-xl sm:text-2xl font-semibold">{pillar.title}</h3>
                        <p className="relative text-[#55595E] text-base sm:text-lg font-light">{pillar.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
