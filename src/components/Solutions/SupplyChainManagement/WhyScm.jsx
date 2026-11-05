"use client";

import { motion } from "framer-motion";

const REASONS = [
    {
        title: "Comprehensive Integration",
        desc: "SAP SCM integrates supply chain processes for seamless data flow, collaboration, visibility, and efficiency across stakeholders.",
    },
    {
        title: "Advanced Planning & Optimization",
        desc: "SAP SCM tools optimize inventory, reduce costs, and enhance service levels with real-time data for informed decisions.",
    },
    {
        title: "Advanced Scalability & Flexibility",
        desc: "SAP SCM scales and adapts to diverse business needs, supporting complex supply chains for long-term growth.",
    },
];

export default function WhyScm() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why Choose SAP Supply Chain Management?</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Three reasons supply chain leaders build on SAP SCM.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                {REASONS.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        className="group relative flex flex-col gap-4 bg-white border border-[#d3d5d8] px-6 py-8 sm:px-8 sm:py-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <span className="absolute inset-x-0 top-0 h-[3px] bg-[#2d8ec5] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <span className="text-[#E4E6E7] group-hover:text-[#2d8ec5]/25 text-6xl sm:text-7xl font-semibold leading-none transition-colors duration-500">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{reason.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
