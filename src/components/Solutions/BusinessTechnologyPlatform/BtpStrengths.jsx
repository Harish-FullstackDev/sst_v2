"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import strengthsImage from "@/assets/Solutions/BusinessTechnologyPlatform/strengths.webp";

const STRENGTHS = [
    {
        title: "Integration & Extensibility",
        desc: "BTP enables seamless integration of processes and data across various systems and provides tools for extending and customizing SAP applications to meet specific business needs.",
    },
    {
        title: "Analytics & AI Capabilities",
        desc: "BTP includes advanced analytics tools and built-in AI capabilities that enable businesses to derive insights from data, optimize processes, and make informed decisions.",
    },
];

export default function BtpStrengths() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            {/* Image leads on desktop; stacked, the copy comes first so the section opens with its heading. */}
            <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-8 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full lg:w-[46%] aspect-[4/3] lg:aspect-auto lg:min-h-[420px] shrink-0 overflow-hidden bg-[#565656]"
                >
                    <Image src={strengthsImage} alt="" fill className="object-cover" />
                </motion.div>

                <div className="flex flex-col justify-center gap-8 sm:gap-10 w-full lg:flex-1 min-w-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Where SAP BTP Makes <span className="text-[#2D8EC5]">the Difference</span></h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Two strengths that sit at the heart of the platform.
                        </p>
                    </motion.div>

                    {STRENGTHS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.08 }}
                            className="flex flex-col gap-3 border-l-[3px] border-[#2d8ec5] pl-5 sm:pl-6"
                        >
                            <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
