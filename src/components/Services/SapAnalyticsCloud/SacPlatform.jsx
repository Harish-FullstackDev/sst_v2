"use client";

import { LuChartColumn, LuClipboardList, LuTrendingUp } from "react-icons/lu";
import { motion } from "framer-motion";

const PILLARS = [
    {
        icon: LuChartColumn,
        title: "Business Intelligence",
        desc: "Explore data and report on performance in one place, so every decision is backed by data.",
    },
    {
        icon: LuClipboardList,
        title: "Planning",
        desc: "Bring planning into the same platform as your analytics to improve planning across the business.",
    },
    {
        icon: LuTrendingUp,
        title: "Predictive Analytics",
        desc: "Look ahead with predictive capabilities that support operational efficiency and business growth.",
    },
];

export default function SacPlatform() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[900px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why SAP SAC for Business Success?</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">
                    SAP SAC is an all-in-one cloud-based solution that combines business intelligence, planning, and
                    predictive analytics. By empowering data-driven decisions, SAP SAC enhances operational
                    efficiency, improves planning, and drives business growth.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                {PILLARS.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: index * 0.1 }}
                        className="relative bg-white flex flex-col gap-4 px-6 py-8 sm:px-8 sm:py-10 border-t-[3px] border-[#2d8ec5]"
                    >
                        <span className="absolute top-6 right-6 text-[#E2E5EA] text-4xl sm:text-5xl font-semibold leading-none">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <pillar.icon aria-hidden="true" strokeWidth={1.5} className="size-10 sm:size-12 text-[#1C5F85]" />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{pillar.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{pillar.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
