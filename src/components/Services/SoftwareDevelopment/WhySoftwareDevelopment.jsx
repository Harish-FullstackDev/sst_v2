"use client";

import { motion } from "framer-motion";

const DRIVERS = ["Drives innovation", "Solves complex problems", "Automates processes", "Tailored to evolving needs"];

export default function WhySoftwareDevelopment() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.4fr)] items-stretch gap-0">
                <div className="flex flex-col justify-center gap-2 max-lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                    >
                        Why Software Development?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#2d8ec5] text-base sm:text-lg font-light"
                    >
                        Enhance and innovate your software solutions.
                    </motion.p>
                </div>

                {/* Middle rule stretches with the right column. */}
                <div className="hidden lg:flex justify-center px-12">
                    <div className="w-0.5 h-full bg-[#2D8EC5]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col gap-6 max-lg:mt-8 max-lg:text-center"
                >
                    <p className="text-[#2E3033] text-lg sm:text-2xl font-light leading-[1.4]">
                        Software development drives innovation, solves complex problems, automates processes, and
                        creates tailored solutions to meet evolving business needs.
                    </p>
                    <ul className="flex flex-wrap gap-2 sm:gap-3 max-lg:justify-center">
                        {DRIVERS.map((label) => (
                            <li
                                key={label}
                                className="border border-[#d3dae2] px-3 sm:px-4 py-1.5 text-sm sm:text-base font-light text-[#55595E]"
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
