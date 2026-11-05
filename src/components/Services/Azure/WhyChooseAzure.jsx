"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyAzureImg from "@/assets/Services/Azure/why-azure.webp";

const BENEFITS = [
    "Unmatched scalability, flexibility, and security",
    "Comprehensive services, including AI, analytics, and seamless integrations",
    "Global reach with hybrid capabilities",
    "Enterprise-grade reliability",
    "Tools to optimize processes and reduce costs",
    "A foundation for innovation, streamlined operations, and sustainable growth",
];

export default function WhyChooseAzure() {
    return (
        <section className="relative z-10 w-full py-10 sm:py-16 lg:pb-0">
            {/* Full-bleed photo on the left reaching the browser edge, shadowed bullet
                card filling the rest. The photo takes a share of the row (not a fixed
                px width) so both halves scale together. */}
            <div className="flex w-full flex-col lg:flex-row lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[360px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[42%]"
                >
                    <Image
                        src={whyAzureImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/55" />

                    <div className="absolute inset-x-8 bottom-8 sm:inset-x-[64px] flex flex-col gap-2 lg:bottom-[20%] lg:right-[12%]">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">
                            Why Choose Microsoft Azure for Your Business?
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            A robust cloud platform that empowers businesses to innovate and streamline operations.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative mx-8 sm:mx-[64px] lg:mx-0 lg:mr-[64px] lg:flex-1 bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-6 sm:px-12 py-10 sm:py-12"
                >
                    <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-3 sm:gap-4 text-base sm:text-lg font-light leading-[1.5] text-[#55595E]">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
