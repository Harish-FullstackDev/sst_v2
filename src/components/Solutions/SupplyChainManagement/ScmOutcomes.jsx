"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import compliancePhoto from "@/assets/Solutions/SupplyChainManagement/outcomes-band.webp";

const POINTS = [
    { title: "Operational Efficiency", desc: "Streamlined processes from sourcing through delivery." },
    { title: "Reduced Costs", desc: "Optimized inventory, logistics, and production planning." },
    { title: "Improved Customer Service", desc: "Reliable fulfillment and on-time delivery." },
    { title: "Quick Response to Change", desc: "Real-time visibility to act as conditions shift." },
];

export default function ScmOutcomes() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-16">
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[360px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[578px]"
                >
                    <Image
                        src={compliancePhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:bottom-8 lg:inset-x-auto lg:bottom-[24%] lg:left-[20.8%] lg:right-[14.5%]">
                        <h2 className="font-heading text-xl sm:text-[28px] font-semibold text-white">
                            What Implementing SAP SCM Delivers
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            SAP Supply Chain Management
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center min-h-[400px] lg:h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-6 sm:px-12 py-12" >

                    <p className="text-[#55595E] text-base sm:text-lg font-light mb-6">
                        Implementing SCM can enhance operational efficiency, reduce costs, improve customer service, and
                        enable quick responses to changes.
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-4 text-base sm:text-lg font-light text-[#55595E]">
                        {POINTS.map((point) => (
                            <li key={point.title}>
                                <span className="font-semibold text-[#2E3033]">{point.title}:</span> {point.desc}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
