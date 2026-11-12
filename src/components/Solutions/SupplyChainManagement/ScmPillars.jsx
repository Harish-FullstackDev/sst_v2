"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pillarsImage from "@/assets/Solutions/SupplyChainManagement/pillars.webp";

const PILLARS = [
    {
        title: "Integration",
        desc: "SAP SCM integrates supply chain for seamless data, process management, visibility, collaboration, and synchronization.",
    },
    {
        title: "Planning & Optimization",
        desc: "SAP SCM optimizes planning, forecasting, production, and logistics with powerful tools and optimization algorithms for efficiency.",
    },
];

export default function ScmPillars() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full lg:w-[44%] aspect-[4/3] lg:aspect-auto lg:min-h-[460px] shrink-0 overflow-hidden bg-[#565656]"
                >
                    <Image src={pillarsImage} alt="Warehouse manager tracking inventory on a tablet in the aisles" fill className="object-cover" />
                </motion.div>

                <div className="flex flex-col justify-center gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                            Connected Today, <span className="text-[#2D8EC5]">Optimized for Tomorrow</span>
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            The two strengths SAP SCM brings to every link in the supply chain.
                        </p>
                    </motion.div>

                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.1 }}
                            className="group flex bg-white border-l-2 border-[#2d8ec5] px-6 py-6 sm:px-8 sm:py-8 transition-shadow duration-300 hover:shadow-lg"
                        >
                            <div className="flex flex-col gap-2 min-w-0">
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{pillar.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{pillar.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
