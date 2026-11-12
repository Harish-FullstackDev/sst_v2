"use client";

import { LuBrainCircuit, LuDatabase, LuLightbulb, LuMaximize2 } from "react-icons/lu";
import { motion } from "framer-motion";

const OUTCOMES = [
    {
        icon: LuLightbulb,
        title: "Actionable Insight",
        desc: "Uncover trends and understand consumer behavior to make data-driven decisions with confidence.",
    },
    {
        icon: LuMaximize2,
        title: "Scale Without Limits",
        desc: "Store and process large, complex datasets as they grow, without slowing the business down.",
    },
    {
        icon: LuDatabase,
        title: "A Single Source of Truth",
        desc: "A cohesive data strategy that brings every source together under consistent governance.",
    },
    {
        icon: LuBrainCircuit,
        title: "AI-Ready Data",
        desc: "Clean, well-managed data that powers real-time intelligence and predictive analytics.",
    },
];

export default function BigDataOutcomes() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What <span className="text-[#2D8EC5]">Big Data</span> Delivers</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The outcomes a well-built Big Data platform gives your teams every day.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {OUTCOMES.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="group bg-white flex flex-col gap-5 px-6 py-8 border-b-[3px] border-transparent transition-[border-color,box-shadow] duration-300 hover:border-[#2d8ec5] hover:shadow-xl"
                    >
                        <div className="relative size-10 sm:size-12 shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
                            <item.icon aria-hidden="true" strokeWidth={1.5} className="size-full text-[#1C5F85]" />
                        </div>
                        <h2 className="text-[#2E3033] text-xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
