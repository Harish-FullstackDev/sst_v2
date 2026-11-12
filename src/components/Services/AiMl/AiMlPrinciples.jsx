"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
    "Clear business objectives and success measures for every model",
    "Data privacy and access controls built into data pipelines",
    "Explainable outputs that business users can review and trust",
    "Human oversight for high-impact decisions",
    "Ongoing monitoring for accuracy, bias, and data drift",
    "Integration with the systems your teams already use",
];

export default function AiMlPrinciples() {
    return (
        <section className="w-full">
            <div className="w-full px-8 py-10 sm:p-16">
                {/* items-stretch so the middle rule spans the bullet column's height
                    instead of a fixed h-60. From xl the list column is auto (sized to its
                    longest point) so every point stays on one line. */}
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] xl:grid-cols-[1fr_auto_auto] lg:items-stretch gap-0">

                    {/* Left — centered in the stacked mobile layout; at lg it is the left
                        column of the three-column row and stays left aligned. */}
                    <div className="flex flex-col justify-center gap-2 max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            <span className="text-[#2D8EC5]">Responsible AI</span> by Design
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#55595E] text-base sm:text-lg font-light"
                        >
                            The principles we apply to every AI &amp; ML engagement.
                        </motion.p>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-full bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-start max-w-[520px] xl:max-w-none max-lg:mt-8 max-sm:justify-self-center"
                    >
                        {/* pl-16 is desktop-only: it clears the vertical divider in the lg
                            three-column row. Below lg the 5 (20px) is just room for the markers. */}
                        <ul className="list-disc marker:text-[#7f7f7f] lg:pl-16 pl-5 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {PRINCIPLES.map((point) => (
                                <li key={point} className="xl:whitespace-nowrap">{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
