"use client";

import { motion } from "framer-motion";

const POINTS = [
    "One team accountable from interface to infrastructure",
    "A consistent architecture across front end, back end, and data",
    "Working software at the end of every iteration",
    "Security and performance considered at every layer",
    "Clean, documented code your own team can maintain",
    "Applications designed to scale as usage grows",
];

export default function WhatYouCanExpect() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-0">
                {/* Left: centered when stacked, left aligned in the lg three-column row. */}
                <div className="flex flex-col justify-center gap-2 max-lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                    >
                        What You Can Expect
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#55595E] text-base sm:text-lg font-light"
                    >
                        How we work on every full-stack engagement.
                    </motion.p>
                </div>

                {/* Middle rule stretches with the list instead of a fixed height. */}
                <div className="hidden lg:flex justify-center px-10">
                    <div className="w-0.5 h-full bg-[#2D8EC5]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-lg:mt-8 max-lg:flex max-lg:justify-center"
                >
                    <ul className="list-disc marker:text-[#7f7f7f] pl-5 lg:pl-8 space-y-3 text-[#55595E] text-base sm:text-lg font-light max-w-[520px]">
                        {POINTS.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
