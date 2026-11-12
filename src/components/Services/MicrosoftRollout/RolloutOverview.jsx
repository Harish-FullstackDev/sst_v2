"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/MicrosoftRollout/overview.webp";

const HIGHLIGHTS = ["Deployment Expertise", "Certified Professionals", "Seamless Rollout"];

export default function RolloutOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f3f6f9]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[120px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[700px] flex flex-col gap-2"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">
                        Achieve seamless deployment for maximum efficiency.
                    </p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Why Choose <span className="text-[#2D8EC5]">Microsoft Rollout Services?</span>
                    </h2>

                    <div className="flex flex-col gap-4 pt-2 text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        <p>
                            Microsoft Rollout Services provide businesses with a structured approach to implementing
                            Microsoft solutions, ensuring efficient deployment, minimal disruption, and optimized
                            performance.
                        </p>
                        <p>
                            Rollout Services ensure a smooth transition to new systems, enabling businesses to leverage
                            Microsoft solutions with minimal downtime and maximum impact.
                        </p>
                    </div>

                    <ul className="flex flex-wrap gap-3 pt-4">
                        {HIGHLIGHTS.map((item) => (
                            <li
                                key={item}
                                className="bg-white border border-[#d3dae2] px-4 py-2 text-[#55595E] text-sm sm:text-base font-light"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[467px] lg:max-w-[40%] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="Hand pointing to locations pinned across a world map" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
