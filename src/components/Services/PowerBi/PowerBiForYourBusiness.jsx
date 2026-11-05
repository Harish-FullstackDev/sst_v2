"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Services/PowerBi/power-bi-for-business.webp";

export default function PowerBiForYourBusiness() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16">
            <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[760px] mx-auto text-center px-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Why Power BI for Your Business?
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Intuitive, integrated business intelligence for a data-driven world.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col items-center sm:items-stretch lg:flex-row lg:items-center gap-8 lg:gap-12 px-8 sm:pl-[64px] sm:pr-[64px] pt-10 sm:pt-16"
                >
                    {/* Navy accent bar pinned to the viewport edge; it spans the text block only */}
                    <div className="hidden sm:block absolute left-0 top-10 sm:top-16 bottom-0 w-[9px] bg-[#1c5f85]" />

                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-5 w-full lg:flex-1 min-w-0">
                        <h2 className="text-[#2E3033] text-base sm:text-2xl font-semibold">
                            Business Intelligence That Connects Everything
                        </h2>
                        <div className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed flex flex-col gap-4">
                            <p>
                                Microsoft Power BI revolutionizes data analysis for organizations seeking intuitive and
                                integrated business intelligence. It connects various data sources, creating unified
                                visualizations and dashboards to uncover trends and insights.
                            </p>
                            <p>
                                With real-time analytics, robust sharing capabilities, and scalability, Power BI
                                empowers businesses to stay competitive and agile in a data-driven world.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[46%] lg:max-w-[569px] aspect-[569/340] shrink-0 bg-[#565656] overflow-hidden">
                        <Image src={overviewImage} alt="" fill className="object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
