"use client";

import { motion } from "framer-motion";

const REASONS = [
    {
        title: "Comprehensive HR Capabilities",
        desc: "SAP SuccessFactors integrates HR functions for streamlined processes, data accuracy, and informed decision-making with analytics.",
    },
    {
        title: "Cloud-Based Deployment",
        desc: "SAP SuccessFactors offers scalable, flexible cloud HR solutions with accessibility, security, compliance, and global data centers.",
    },
    {
        title: "Integration with SAP & Third-Party Systems",
        desc: "SAP SuccessFactors integrates with SAP and third-party applications, enhancing efficiency, data consistency, and informed decision-making.",
    },
];

export default function WhySf() {
    return (
        <section className="w-full py-10 sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-8"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why Choose SAP SuccessFactors?</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Three reasons organizations move their HR processes onto SuccessFactors.
                </p>
            </motion.div>

            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:hidden gap-6 w-full px-8 sm:px-[64px]">
                {REASONS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <h2 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{card.title}</h2>
                        <p className="text-[#55595E] text-base font-light">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop — white title boxes floating on a full-bleed grey band that holds the
                descriptions. The band starts at the title boxes' vertical centre, and every
                box shares one fixed min-height so that offset stays correct. */}
            <div className="hidden lg:block relative w-full">
                <div className="absolute inset-x-0 top-[60px] bottom-0 bg-[#F5F6F6]" />

                <div className="relative z-10 px-[64px] grid grid-cols-3 gap-x-8 pb-6">
                    {REASONS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] min-h-[121px] flex items-center justify-center text-center px-8">
                                <h2 className="text-[#2E3033] text-xl font-semibold leading-tight">{card.title}</h2>
                            </div>
                            <p className="text-[#55595E] text-center text-lg font-light p-6">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
