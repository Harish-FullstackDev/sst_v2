"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Spend Visibility",
        desc: "A clear view of who is buying what, from whom, and on which terms across the business.",
    },
    {
        title: "Policy Compliance",
        desc: "Guided buying and approval rules that keep purchases on contract and within policy.",
    },
    {
        title: "Faster Procure-to-Pay",
        desc: "Electronic orders and invoices that shorten cycle times and reduce manual processing.",
    },
    {
        title: "Lower Supplier Risk",
        desc: "Supplier qualification and monitoring that surface issues before they disrupt supply.",
    },
];

export default function AribaOutcomes() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-0 px-8 sm:px-0 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center sm:px-8"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What Procurement <span className="text-[#2D8EC5]">Teams Gain</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The outcomes a well-implemented SAP Ariba landscape is designed to deliver.
                </p>
            </motion.div>

            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full sm:px-[64px]">
                {CARDS.map((card, index) => (
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

            {/* Desktop layout: white title boxes floating on a full-bleed grey band that holds
                the descriptions. The band starts halfway down the fixed-height title boxes. */}
            <div className="hidden lg:block relative w-full">
                <div className="absolute inset-x-0 top-[60px] bottom-0 bg-[#f3f6f9]" />

                <div className="relative z-10 px-[64px] grid grid-cols-4 gap-x-8">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] h-[120px] flex items-center justify-center text-center px-8">
                                <h2 className="text-[#2E3033] text-xl font-semibold leading-tight">{card.title}</h2>
                            </div>
                            <p className="text-[#55595E] text-center text-base sm:text-lg font-light p-6 pb-10">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
