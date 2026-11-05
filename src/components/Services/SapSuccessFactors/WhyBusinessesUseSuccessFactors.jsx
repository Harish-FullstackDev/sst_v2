"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Services/SapSuccessFactors/why-businesses.webp";

export default function WhyBusinessesUseSuccessFactors() {
    return (
        <section className="w-full py-10 sm:py-16">
            <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[860px] mx-auto text-center px-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Why Do Businesses Use SuccessFactors?
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        SAP SuccessFactors Methodology · Best Practices for Workforce Transformation · Employee
                        Engagement &amp; Productivity
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col items-center sm:items-stretch lg:flex-row lg:items-center gap-8 lg:gap-[14px] px-8 sm:px-0 sm:pl-[10px] sm:pr-[64px] pt-10 sm:pt-[64px]"
                >
                    {/* Navy accent bar spans the text block's height instead of a fixed
                        value, so it tracks the copy at every breakpoint. */}
                    <div className="hidden sm:block absolute left-0 top-[64px] bottom-0 w-[9px] bg-[#1c5f85]" />

                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-5 w-full lg:flex-1 sm:pl-[54px] lg:pr-20">
                        <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">
                            HR Strategy Aligned With Business Goals
                        </h2>
                        <div className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed flex flex-col gap-4">
                            <p>
                                SuccessFactors is used by businesses to streamline HR processes, enhance talent
                                management, and improve employee engagement. It helps align workforce strategies with
                                business goals through tools for recruitment, performance management, learning, and
                                analytics.
                            </p>
                            <p>
                                This cloud-based solution fosters productivity, ensures compliance, and supports
                                decision-making with real-time insights, driving organizational growth and efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[46%] lg:max-w-[569px] aspect-[569/300] shrink-0 bg-[#565656]">
                        <Image src={overviewImage} alt="" fill className="object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
