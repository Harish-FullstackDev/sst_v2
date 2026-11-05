"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/Services/SapAnalyticsCloud/intro.jpg";

const KEYWORDS = ["Simplify", "Analyze", "Succeed"];

export default function SacIdealSolution() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[45%] shrink-0"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Unlock data-driven insights to drive success.</p>
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

            {/* Wide image strip with the tagline laid over its lower edge. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="relative w-full aspect-[4/3] sm:aspect-[16/6] overflow-hidden"
            >
                <Image src={introPhoto} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-3">
                    {KEYWORDS.map((word, index) => (
                        <div
                            key={word}
                            className={`px-3 sm:px-8 py-4 sm:py-6 ${index > 0 ? "border-l border-white/30" : ""}`}
                        >
                            <span className="block text-[#2d8ec5] text-xs sm:text-sm font-light">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="block text-white text-base sm:text-2xl font-semibold">{word}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
