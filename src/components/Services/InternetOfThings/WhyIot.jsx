"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/InternetOfThings/why-iot-bg.webp";

// Benefits named in the old-site "Benefits of IoT for Your Business" paragraph.
const BENEFITS = [
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
        <section className="relative w-full overflow-hidden bg-[#0A2B3E]">
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
            </div>

            <div className="relative z-10 w-full px-8 py-10 sm:px-[64px] sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Why IoT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:gap-6"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why Internet of Things (IoT)?</h2>
                    <p className="text-white text-xl sm:text-[28px] font-light leading-snug">
                        Integrate and Innovate with IoT for Unparalleled Efficiency.
                    </p>
                    <p className="text-white/90 text-base sm:text-lg font-light">
                        IoT empowers businesses with connected ecosystems that enhance operational efficiency, automate
                        processes, and provide actionable insights through smart devices and real-time data analytics.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-4 lg:border-l lg:border-white/30 lg:pl-16"
                >
                    <h2 className="text-white text-xl sm:text-2xl font-semibold">Benefits of IoT for Your Business</h2>
                    <p className="text-white/90 text-base sm:text-lg font-light">
                        IoT connects physical devices to the internet, enabling seamless communication, control, and
                        data exchange. With real-time monitoring, it fosters innovation and creates new opportunities
                        for growth across industries.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3 text-white text-base sm:text-lg font-light">
                                <span className="mt-[9px] size-2 shrink-0 bg-[#2d8ec5]" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
