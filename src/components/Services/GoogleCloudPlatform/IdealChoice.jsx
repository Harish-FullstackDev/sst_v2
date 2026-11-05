"use client";

import { motion } from "framer-motion";

export default function IdealChoice() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-0">
                {/* Left: heading + lead. Centered when stacked, left aligned at lg. */}
                <div className="flex flex-col justify-center max-lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                    >
                        What Makes Google Cloud the Ideal Choice for Your Business?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-2 text-[#55595E] text-base sm:text-lg font-light leading-[140%]"
                    >
                        A unified, flexible, and scalable platform tailored to meet diverse business needs.
                    </motion.p>
                </div>

                {/* Middle rule stretches with the taller column instead of a fixed height. */}
                <div className="hidden lg:flex justify-center px-10">
                    <div className="w-0.5 h-full min-h-[160px] bg-[#2D8EC5]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col gap-4 max-lg:mt-8 max-lg:text-center"
                >
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        With advanced AI tools, high-availability storage, and seamless integrations, Google Cloud
                        empowers businesses to optimize processes, improve agility, and drive innovation.
                    </p>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Built-in security, powerful analytics, and collaboration with Google services enhance
                        operational efficiency and support accelerated business growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
