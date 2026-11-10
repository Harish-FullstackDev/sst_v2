"use client";

import { motion } from "framer-motion";

export default function SacIdealSolution() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] ">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[45%] shrink-0"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Simplify, Analyze, Succeed.</p>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">Unlock data-driven insights to drive success.</p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Why Is SAP SAC the Ideal Solution for Data Analytics in Your Business?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-4 w-full lg:flex-1 lg:min-w-0 text-base sm:text-lg text-[#55595E] font-light leading-relaxed"
                >
                    <p>
                        SAP Analytics Cloud (SAC) helps businesses turn data into actionable insights. By integrating
                        analytics, planning, and predictive capabilities, SAC enables smarter decisions and greater
                        business outcomes.
                    </p>
                    <p>
                        SAP SAC offers real-time data insights, powerful analytics, and seamless integration across
                        business functions, enabling informed decision-making, improved performance, and enhanced
                        business outcomes with a user-friendly, cloud-based solution.
                    </p>
                </motion.div>
            </div>

        </section>
    );
}
