"use client";

import { motion } from "framer-motion";

// The three capabilities the old-site paragraph names, pulled out as highlights.
const HIGHLIGHTS = ["Real-Time Decisions", "Predictive Analytics", "Advanced Business Strategies"];

export default function WhyBigData() {
    return (
        <section className="w-full bg-[#f5f6f6]">
            <div className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px]">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1.4fr] lg:items-stretch gap-0">
                    {/* Left */}
                    <div className="flex flex-col justify-center gap-2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Why <span className="text-[#2D8EC5]">Big Data?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#2d8ec5] text-base sm:text-lg font-light"
                        >
                            Leverage and Evolve with Big Data.
                        </motion.p>
                    </div>

                    {/* Middle line */}
                    <div className="hidden lg:flex justify-center px-10 xl:px-16">
                        <div className="w-0.5 h-full bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-6 max-lg:mt-6"
                    >
                        <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                            Big Data provides transformative insights from vast datasets, enabling real-time decisions,
                            predictive analytics, and advanced business strategies. By optimizing processes, analyzing
                            market trends, and tailoring actions to customer preferences, Big Data ensures businesses
                            stay competitive and responsive in a dynamic landscape.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {HIGHLIGHTS.map((item) => (
                                <li
                                    key={item}
                                    className="bg-white px-4 py-3 text-[#2E3033] text-base font-semibold border-t-2 border-[#2d8ec5]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
