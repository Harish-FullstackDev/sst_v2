"use client";

import { motion } from "framer-motion";

const REASONS = [
    {
        title: "Comprehensive Financial Management",
        desc: "Financial accounting, controlling, reporting, and compliance handled in one solution rather than spread across disconnected tools.",
    },
    {
        title: "Enhanced Cost Monitoring & Control",
        desc: "The SAP CO module in FICO monitors costs and drives profitability through accounting, orders, and activity-based costing.",
    },
    {
        title: "Complementary Business Knowledge",
        desc: "SAP FICO seamlessly integrates with Sales, Materials Management, and Production Planning for holistic, data-driven business decisions.",
    },
];

export default function WhyFico() {
    return (
        <section className="w-full">
            <div className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">
                    {/* Left — centered in the stacked mobile layout; left aligned at lg. */}
                    <div className="flex flex-col gap-2 max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Why Choose <span className="text-[#2D8EC5]">Finance and Controlling?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#55595E] text-base sm:text-lg font-light"
                        >
                            What SAP FICO adds to the way your finance team works.
                        </motion.p>
                    </div>

                    {/* Middle rule — stretches with the list instead of a fixed height, so
                        it always spans the reasons however long their copy runs. */}
                    <div className="hidden lg:flex justify-center px-10 self-stretch">
                        <div className="w-0.5 h-full bg-[#2D8EC5]" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-start max-w-[520px] max-sm:mt-4"
                    >
                        <ul className="flex flex-col gap-6 lg:pl-6">
                            {REASONS.map((reason) => (
                                <li key={reason.title} className="flex flex-col gap-1">
                                    <h2 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{reason.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
