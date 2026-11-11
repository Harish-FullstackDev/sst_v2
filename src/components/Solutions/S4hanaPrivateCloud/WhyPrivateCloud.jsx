"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyPhoto from "@/assets/Solutions/S4hanaPrivateCloud/why.webp";

const REASONS = [
    {
        title: "Control & Compliance",
        desc: "Maintain control while meeting industry regulations confidently.",
    },
    {
        title: "Performance & Reliability",
        desc: "Enjoy high performance and uptime guarantees.",
    },
    {
        title: "Cost-Efficiency",
        desc: "Predictable pricing and flexible billing optimize your IT spending.",
    },
];

export default function WhyPrivateCloud() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-16">
            {/* Full-bleed row: photo card on the left at its design width (578px cap, not a %
                of the viewport), the panel fills the space beside it. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[340px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[44%] lg:max-w-[578px]"
                >
                    <Image
                        src={whyPhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="absolute inset-x-8 bottom-8 flex flex-col gap-2 sm:inset-x-[64px] lg:inset-x-auto lg:bottom-[24%] lg:left-[16%] lg:right-[12%]">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">
                            Why Choose SAP S/4HANA Private Cloud?
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            The case for a dedicated cloud ERP environment.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center lg:min-h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center gap-8 px-8 sm:px-12 py-12"
                >
                    {REASONS.map((reason) => (
                        <div key={reason.title} className="flex">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{reason.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
