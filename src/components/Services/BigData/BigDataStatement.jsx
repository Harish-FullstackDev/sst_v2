"use client";

import { motion } from "framer-motion";

const CREDENTIALS = [
    "Big Data Visionary",
    "Master of Analytics & Insights",
    "Champion of Real-Time Intelligence",
];

export default function BigDataStatement() {
    return (
        <section className="w-full">
            <div className="w-full px-8 sm:p-16 py-10 ">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">
                    <div className="flex flex-col gap-2 max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Analyze, Adapt, Achieve
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#55595E] text-base sm:text-lg font-light max-w-[560px]"
                        >
                            Big Data unlocks groundbreaking potential with real-time analytics, scalable processing,
                            and a cohesive data strategy to drive informed decision-making and innovation.
                        </motion.p>
                    </div>
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-40 bg-[#2D8EC5]" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        // Mobile: centered under the heading, and mt-4 on top of the
                        // description's own mb-4 makes the 32px gap the stacked layout needs
                        // (the grid is gap-0 because at lg these are side-by-side columns).
                        className="justify-self-start max-w-[467px] max-sm:mt-4 max-sm:justify-self-center"
                    >
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 max-sm:pl-5 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {CREDENTIALS.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}