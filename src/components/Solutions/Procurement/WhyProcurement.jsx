"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/Procurement/why-bg.webp";

const REASONS = [
    {
        title: "Comprehensive Spend Management Capabilities",
        desc: "SAP integrates Ariba, Fieldglass, and Concur for comprehensive spend management across procurement, workforce, and travel.",
    },
    {
        title: "Complete Spend Visibility and Control",
        desc: "Gain actionable insights across spending categories, suppliers, and timelines with advanced analytics and AI for informed decisions.",
    },
    {
        title: "Seamless Integration with Third-Party Systems",
        desc: "SAP Supply Spend Management integrates with ERP and source systems, streamlining processes from origin to settlement.",
    },
];

export default function WhyProcurement() {
    return (
        <section className="relative w-full overflow-hidden bg-black">
            <Image src={bgImage} alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />

            <div className="relative px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 max-w-[760px]"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">
                        Why Choose SAP Supply Spend Management?
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg font-light">
                        Every category of spend, one view of it, and a platform that connects to the systems you already run.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {REASONS.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                            className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/30 pt-6 md:pt-0 md:pl-6 lg:pl-8"
                        >
                            <span className="text-[#2d8ec5] text-base sm:text-lg font-semibold">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-white text-xl sm:text-2xl font-semibold">{reason.title}</h2>
                            <p className="text-white/80 text-base sm:text-lg font-light">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
