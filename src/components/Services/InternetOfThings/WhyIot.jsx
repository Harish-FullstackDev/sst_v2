"use client";

import { motion } from "framer-motion";

const POINTS = [
    "Optimized processes",
    "Better decision-making",
    "Automated routine tasks",
    "Less downtime",
    "Lower operational costs",
    "Higher service quality",
    "Improved safety",
    "Sustainable practices",
];

export default function WhyIot() {
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
                            Why Internet of Things (IoT)?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#2d8ec5] text-base sm:text-lg font-light"
                        >
                            Integrate and Innovate with IoT for Unparalleled Efficiency.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="flex flex-col gap-4 mb-4 text-[#55595E] text-base sm:text-lg font-light"
                        >
                            <span>
                                IoT empowers businesses with connected ecosystems that enhance operational efficiency,
                                automate processes, and provide actionable insights through smart devices and real-time
                                data analytics.
                            </span>
                            <span>
                                IoT connects physical devices to the internet, enabling seamless communication, control,
                                and data exchange. With real-time monitoring, it fosters innovation and creates new
                                opportunities for growth across industries.
                            </span>
                        </motion.p>
                    </div>
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-72 bg-[#2D8EC5]" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        // Mobile: centered under the heading, and mt-4 on top of the
                        // description's own mb-4 makes the 32px gap the stacked layout needs
                        // (the grid is gap-0 because at lg these are side-by-side columns).
                        className="justify-self-start max-w-[467px] flex flex-col gap-4 max-sm:mt-4 max-sm:justify-self-center"
                    >
                        <h3 className="text-[#2E3033] text-xl font-semibold lg:pl-16 max-sm:text-center">Benefits of IoT for Your Business</h3>
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 max-sm:pl-5 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {POINTS.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}