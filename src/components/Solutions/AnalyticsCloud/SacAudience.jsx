"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/AnalyticsCloud/audience-bg.webp";

const AUDIENCES = [
    {
        title: "Finance Teams",
        desc: "Budgets, forecasts, and real-time expense monitoring in one planning model.",
    },
    {
        title: "HR & Workforce Planners",
        desc: "Workforce planning built on the same data as the rest of the business.",
    },
    {
        title: "Business Leaders",
        desc: "Interactive dashboards that support faster, informed decisions.",
    },
    {
        title: "Analysts",
        desc: "Predictive models and Smart Insights that surface trends and anomalies.",
    },
];

export default function SacAudience() {
    return (
        <section className="relative w-full overflow-hidden bg-[#1c5f85]">
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10 px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-10 sm:gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 max-w-[767px]"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Insight for Every Team</h2>
                    <p className="text-white/85 text-base sm:text-lg font-light">
                        Shared, real-time insight that keeps departments aligned and productive.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20">
                    {AUDIENCES.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className="flex flex-col gap-3 bg-black/40 backdrop-blur-[2px] px-6 py-7 sm:px-8 sm:py-9 transition-colors duration-300 hover:bg-[#2d8ec5]/40"
                        >
                            <span className="text-[#7fc3ea] text-base font-semibold">0{index + 1}</span>
                            <h3 className="text-white text-lg sm:text-xl font-semibold">{item.title}</h3>
                            <p className="text-white/85 text-base sm:text-lg font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
