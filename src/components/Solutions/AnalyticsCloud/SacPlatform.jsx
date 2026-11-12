"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/Solutions/AnalyticsCloud/platform.webp";

const BOXES = [
    {
        title: "Cloud-based",
        desc: "SAP Analytics Cloud operates entirely on the cloud, offering scalability, accessibility from anywhere, and minimizing on-premises hardware and maintenance needs.",
    },
    {
        title: "Analytics & Planning",
        desc: "SAC integrates BI with enterprise planning, enabling data analysis, visualizations, reports, and strategic alignment through actionable insights.",
    },
];

export default function SacPlatform() {
    return (
        <section className="w-full py-16 px-8 sm:px-[64px] bg-[#f5f6f6]">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">One Platform for <span className="text-[#2D8EC5]">Analysis and Planning</span></h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Integrated business intelligence and planning, delivered from the cloud.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-8 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-12 lg:gap-16 px-6 py-8"
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
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] aspect-auto lg:aspect-[475/563] overflow-hidden"
                >
                    <Image src={serviceDesignPhoto} alt="Analyst studying a wall of live charts and maps" fill className="object-cover object-center" />
                </motion.div>
            </div>
        </section>
    );
}

