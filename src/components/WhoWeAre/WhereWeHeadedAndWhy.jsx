"use client";

import { motion } from "framer-motion";

// Layout: section title and description, then Mission and Vision side by side.
// The photo and the four-metric band that used to sit between them were removed.
const STATEMENTS = [
    {
        title: "Mission",
        description:
            "To give enterprises globally a single, accountable partner for the technology their operations depend on, from the first SAP assessment through years of live production support. We measure our work by whether systems keep running the way they were designed to, long after the project team has moved on.",
    },
    {
        title: "Vision",
        description:
            "To be the enterprise technology practice global organizations turn to first, not because we cover every capability on a page, but because our SAP foundation, cloud engineering, and compliance fluency operate as one coordinated practice instead of five separate vendor relationships.",
    },
];

export default function WhereWeHeadedAndWhy() {
    return (
        <section className="w-full pt-10 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-8 sm:px-[64px]"
            >
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">Where We&apos;re Headed, <span className="text-[#2D8EC5]">and Why</span></h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    Everything we build ties back to two commitments what we exist to do for clients today, and
                    where we intend to take the practice next.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 px-8 pb-8 sm:px-[64px] sm:pb-8">
                {STATEMENTS.map((statement, index) => (
                    <motion.div
                        key={statement.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <h3 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">{statement.title}</h3>
                        <span aria-hidden className="mt-3 block h-1 w-12 bg-[#2d8ec5]" />
                        <p className="mt-6 max-w-xl text-base sm:text-lg font-light text-[#55595E] leading-relaxed">
                            {statement.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
