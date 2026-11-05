"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/SapRollout/overview.webp";

const CREDENTIALS = ["SAP Rollout", "Comprehensive Deployment Plan", "Guided Implementation Assistance"];

const BOXES = [
    {
        title: "Deploy and Enhance Efficiency",
        desc: "SAP Rollout ensures unified system deployment across locations, optimizing processes, enhancing decision-making, and fostering customer satisfaction, achieving operational efficiency and competitive advantage.",
    },
    {
        title: "Why SAP Rollout?",
        desc: "SAP Rollout is essential for making systematic improvements and extending the use of SAP software across different branches or divisions. It enables informing clients, consistent implementation, customized settings, and compatibility with existing systems. Through effective standardization that provides a single version of the truth, and by training users, SAP Rollout increases productivity and optimizes business processes, promoting scalability and identical performance across regions to unlock SAP’s potential.",
    },
];

export default function RolloutOverview() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] bg-[#f5f6f6]">
            {/* Two columns fill the padded width via proportional flex-grow (≈654:475)
                instead of fixed px, so they scale together on any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-12 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why Conduct an SAP Rollout?</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">
                                Extending one proven SAP system to every branch, division and region.
                            </p>
                        </div>
                        <ul className="flex flex-wrap gap-3">
                            {CREDENTIALS.map((item) => (
                                <li
                                    key={item}
                                    className="bg-white border border-[#d3dae2] rounded-2xl px-4 py-2 text-[#55595E] text-sm sm:text-base font-light"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col md:flex-row gap-8 w-full lg:flex-1"
                    >
                        {BOXES.map((box, index) => (
                            <div
                                key={box.title}
                                className={`bg-white w-full flex flex-col items-start gap-6 lg:gap-10 px-6 py-8 ${index === 0 ? "md:flex-[2_1_0%]" : "md:flex-[3_1_0%]"
                                    }`}
                            >
                                <h2 className="text-[#2E3033] text-xl font-semibold">{box.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{box.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="SAP rollout plan laid out on a desk" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
