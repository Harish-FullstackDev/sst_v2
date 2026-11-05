"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import benefitsImg from "@/assets/Services/SapAms/benefits.webp";

const BENEFITS = [
    "Predictable monthly cost for running SAP",
    "Fewer repeat incidents through root-cause fixes",
    "Less dependence on individual in-house experts",
    "Faster resolution from a shared knowledge base",
    "Clear visibility through daily updates and SLA reports",
    "Internal teams freed up for transformation work",
];

export default function AmsBenefits() {
    return (
        <section className="relative z-10 w-full py-10 sm:py-16">
            {/* The photo reaches the real browser edge on the left, so this row is
                deliberately not wrapped in a padded container. The photo keeps a
                capped width at lg; the bullet panel takes the remaining space. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[320px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[42%] lg:max-w-[578px]"
                >
                    <Image
                        src={benefitsImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="absolute inset-x-8 bottom-8 flex flex-col gap-2 lg:inset-x-[14%] lg:bottom-[20%]">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">What You Gain</h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            The practical outcomes of handing SAP operations to a dedicated AMS team.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:flex-1 lg:max-w-[800px] self-center bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-8 sm:px-12 py-10 sm:py-12 lg:min-h-[480px]"
                >
                    <ul className="list-disc pl-5 text-base sm:text-lg font-light leading-[1.6] sm:leading-[2.4] text-[#55595E] sm:pl-6 flex flex-col gap-3 sm:gap-0">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
