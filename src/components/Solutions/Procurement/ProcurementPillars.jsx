"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sourcingImage from "@/assets/Solutions/Procurement/strategic-sourcing.webp";
import processesImage from "@/assets/Solutions/Procurement/streamlined-processes.webp";

const PILLARS = [
    {
        title: "Strategic Sourcing Management",
        desc: "Efficiently selecting, negotiating, and managing supplier relationships to optimize costs and ensure high-quality procurement.",
        img: sourcingImage,
    },
    {
        title: "Streamlined Procurement Processes",
        desc: "Automating and optimizing procurement workflows, from requisitioning to invoicing, to enhance efficiency and compliance.",
        img: processesImage,
    },
];

export default function ProcurementPillars() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[720px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Two Foundations of Smarter Spending
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    How SAP SSM brings control to who you buy from and how every purchase moves through the business.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
                {PILLARS.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        className="group flex flex-col bg-white border border-[#d3d5d8] overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#565656]">
                            <Image
                                src={pillar.img}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-3 px-6 py-7 sm:px-8 sm:py-8">
                            <span className="h-[2px] w-12 bg-[#2d8ec5] transition-all duration-500 group-hover:w-24" />
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{pillar.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{pillar.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
