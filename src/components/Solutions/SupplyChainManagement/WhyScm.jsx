"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Comprehensive Integration",
        desc: "SAP SCM integrates supply chain processes for seamless data flow, collaboration, visibility, and efficiency across stakeholders.",
    },
    {
        title: "Advanced Planning & Optimization",
        desc: "SAP SCM tools optimize inventory, reduce costs, and enhance service levels with real-time data for informed decisions.",
    },
    {
        title: "Advanced Scalability & Flexibility",
        desc: "SAP SCM scales and adapts to diverse business needs, supporting complex supply chains for long-term growth.",
    },
];

export default function WhyScm() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-6 sm:pb-16 px-8 sm:px-[0px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6 sm:px-0"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why Choose <span className="text-[#2D8EC5]">SAP Supply Chain Management?</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Three reasons supply chain leaders build on SAP SCM.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full px-6 sm:px-0">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <p className="text-[#2E3033] text-base sm:text-lg font-semibold">{card.title}</p>
                        <p className="text-[#55595E] text-sm font-light">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
            <div className="hidden lg:block relative w-full lg:min-h-[303px]">
                <div className="absolute inset-x-0 top-[99px] bottom-0 bg-[#f3f6f9]" />

                <div className="relative z-10 max-w-full mx-auto px-6 sm:px-[64px] grid grid-cols-3 gap-x-6 lg:gap-x-8">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] min-h-[121px] flex items-center justify-center text-center px-8">
                                <h2 className="text-[#2E3033] text-xl  font-semibold leading-tight">{card.title}</h2>
                            </div>
                            <p className="text-[#55595E] justify-center text-center text-base sm:text-lg font-light p-6">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

