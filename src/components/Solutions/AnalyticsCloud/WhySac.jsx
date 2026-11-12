"use client";

import { LuClipboardList, LuLightbulb, LuTarget } from "react-icons/lu";
import { motion } from "framer-motion";

const REASONS = [
    {
        icon: LuClipboardList,
        title: "Improved Planning",
        desc: "SAP Analytics Cloud uses machine learning for accurate planning, forecasting, and real-time monitoring of expenses.",
    },
    {
        icon: LuLightbulb,
        title: "Useful Insights",
        desc: "SAP Analytics Cloud offers AI-powered data visualization and BI for faster, informed business decision-making insights.",
    },
    {
        icon: LuTarget,
        title: "Proper Alignment",
        desc: "SAP Analytics Cloud streamlines expense alignment across various departments, enhancing productivity with real-time collaborative insights.",
    },
];

export default function WhySac() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why Choose <span className="text-[#2D8EC5]">Analytics Cloud?</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    What SAP Analytics Cloud adds to the way your business plans and decides.
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        whileHover={{ y: -6 }}
                        className="bg-white border border-[#d3d5d8] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] flex flex-col items-center text-center gap-4 px-6 py-8 sm:px-8 sm:py-10 h-full"
                    >
                        <div className="flex items-center justify-center size-16 sm:size-[72px] rounded-full bg-[#2d8ec5]/10">
                            <reason.icon aria-hidden="true" strokeWidth={1.5} className="size-9 sm:size-10 text-[#1C5F85]" />
                        </div>
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{reason.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
