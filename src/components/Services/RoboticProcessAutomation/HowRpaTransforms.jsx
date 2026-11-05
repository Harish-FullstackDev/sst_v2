"use client";

import { motion } from "framer-motion";

export default function HowRpaTransforms() {
    return (
        <section className="w-full">
            <div className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px]">
                {/* items-stretch (not items-center) so the middle rule spans the taller
                    column instead of a fixed h-60 that only fits one copy length. */}
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] lg:items-stretch gap-0">

                    {/* Left — centered in the stacked mobile layout; at lg it is the left
                        column of the three-column row and stays left aligned. */}
                    <div className="flex flex-col justify-center max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            How RPA Transforms Your Business
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-2 text-[#55595E] text-base sm:text-lg font-light"
                        >
                            Streamlined workflows, fewer errors, and people free to focus on higher-value work.
                        </motion.p>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-full min-h-40 bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col justify-center gap-4 max-w-[620px] max-lg:mt-8 max-sm:text-center"
                    >
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Robotic Process Automation (RPA) streamlines repetitive tasks, improves accuracy, and boosts
                            efficiency by automating workflows. It reduces operational costs, minimizes errors, and enables
                            employees to focus on higher-value activities.
                        </p>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            With scalability and seamless integration across systems, RPA enhances productivity, supports
                            digital transformation, and accelerates decision-making, making it an essential tool for
                            businesses aiming for growth and operational excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
