"use client";

import { motion } from "framer-motion";

const CREDENTIALS = ["Data Analytics", "Certified Experts", "Actionable Insights"];

export default function WhyChoosePowerBi() {
    return (
        <section className="w-full bg-white">
            <div className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

                    {/* Left — heading, subtitle and the original page's credentials strip */}
                    <div className="max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Why Choose Power BI?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-2 text-[#55595E] text-base sm:text-lg font-light leading-[140%]"
                        >
                            Simplify and enhance business intelligence.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-6 flex flex-wrap gap-x-3 gap-y-2 max-sm:justify-center text-[#1c5f85] text-sm sm:text-base font-light uppercase tracking-wide"
                        >
                            {CREDENTIALS.map((item, index) => (
                                <li key={item} className="flex items-center gap-3">
                                    {index > 0 && <span aria-hidden className="size-1 rounded-full bg-[#2d8ec5]" />}
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Middle Line — height follows the row instead of a fixed h-60 */}
                    <div className="hidden lg:flex justify-center self-stretch px-10">
                        <div className="w-0.5 h-full min-h-[160px] bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-lg:mt-8 max-sm:text-center"
                    >
                        <p className="text-[#55595E] text-base sm:text-xl font-light leading-[1.5]">
                            Power BI provides interactive reports, real-time analytics, and robust data connections to
                            improve decision-making and optimize business performance.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
