"use client";

import { motion } from "framer-motion";

const CREDENTIALS = [
    "Big Data Visionary",
    "Master of Analytics & Insights",
    "Champion of Real-Time Intelligence",
];

export default function BigDataStatement() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 w-full">
                {/* Left: eyebrow + statement, with a blue rule marking it as the page's thesis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:flex-[3_1_0%] lg:min-w-0 border-l-[3px] border-[#2d8ec5] pl-5 sm:pl-8"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Analyze, Adapt, Achieve</p>
                    <p className="text-[#2E3033] text-xl sm:text-[28px] lg:text-[32px] font-light leading-snug">
                        Big Data unlocks groundbreaking potential with real-time analytics, scalable processing, and a
                        cohesive data strategy to drive informed decision-making and innovation.
                    </p>
                </motion.div>

                {/* Right: credentials strip from the old page, stacked as chips */}
                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-wrap lg:flex-col lg:items-start gap-2 sm:gap-3 w-full lg:flex-[2_1_0%] lg:min-w-0"
                >
                    {CREDENTIALS.map((item) => (
                        <li
                            key={item}
                            className="border border-[#2d8ec5]/50 bg-white px-3 py-1 text-sm sm:text-base font-light text-[#2d8ec5]"
                        >
                            {item}
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
