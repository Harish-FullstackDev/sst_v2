"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Solutions/SuccessFactors/Data_Governance.webp";

const HIGHLIGHTS = [
    {
        title: "Comprehensive Suite of HR Modules",
        desc: "SAP SuccessFactors integrates HR functions from recruitment to retirement, optimizing efficiency and enabling strategic HR management decisions.",
    },
    {
        title: "Cloud-Based Platform",
        desc: "SAP SuccessFactors operates in the cloud, providing scalability, flexibility, and accessibility, reducing IT costs while ensuring security and compliance.",
    },
];

export default function SfOverview() {
    return (
        <section className="w-full py-10 sm:py-16">
            <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 max-w-[900px] mx-auto text-center px-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SAP <span className="text-[#2D8EC5]">SuccessFactors</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Welcome to SAP SuccessFactors, your cloud-based solution for efficient HR management. SuccessFactors
                        is a cloud-based human capital management (HCM) software solution offering a comprehensive suite of
                        tools designed to streamline HR processes, helping organizations manage their HR functions
                        effectively, including talent management, recruiting, learning, workforce planning, and employee
                        performance management.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col items-stretch lg:flex-row lg:items-center gap-8 lg:gap-[14px] px-8 sm:px-0 sm:pl-[10px] sm:pr-[64px] pt-10 sm:pt-[64px]"
                >
                    {/* Navy accent bar on the section's left edge, spanning the text block */}
                    <div className="hidden sm:block absolute left-0 top-[64px] bottom-0 w-[9px] bg-[#1c5f85]" />

                    <div className="flex flex-col gap-8 w-full lg:flex-1 sm:pl-[54px] lg:pr-16">
                        {HIGHLIGHTS.map((item) => (
                            <div key={item.title} className="flex flex-col gap-3">
                                <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">{item.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full lg:w-[46%] lg:max-w-[569px] aspect-[569/300] shrink-0 bg-[#565656] sm:ml-[54px] lg:ml-0">
                        <Image src={overviewImage} alt="HR team working together around a meeting table in a bright office" fill className="object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
