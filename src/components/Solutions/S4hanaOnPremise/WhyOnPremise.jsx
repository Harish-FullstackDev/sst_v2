"use client";

import { motion } from "framer-motion";

const REASONS = [
    {
        title: "Proven Results",
        desc: "An established way to run core ERP processes on infrastructure you own and govern.",
    },
    {
        title: "Continuous Innovation",
        desc: "Stay informed on SAP's latest innovations and updates to remain current.",
    },
    {
        title: "Extensive Support",
        desc: "Access support and resources for smooth implementation and ongoing success.",
    },
];

export default function WhyOnPremise() {
    return (
        <section className="w-full">
            <div className="w-full px-8 py-10 sm:p-16">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">
                    {/* Left: heading column (stacks above the list below lg) */}
                    <div className="flex flex-col gap-2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Why Choose <span className="text-[#2D8EC5]">S/4HANA On-Premises?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#55595E] text-base sm:text-lg font-light"
                        >
                            The advantages of keeping your ERP core in your own hands.
                        </motion.p>
                    </div>

                    {/* Middle rule stretches with the row instead of a fixed h-60 */}
                    <div className="hidden lg:flex justify-center self-stretch px-10">
                        <div className="w-0.5 h-full min-h-[200px] bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.ul
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-6 max-w-[520px] lg:pl-6 max-lg:mt-6"
                    >
                        {REASONS.map((reason) => (
                            <li key={reason.title} className="flex flex-col gap-1">
                                <h2 className="text-[#2E3033] text-xl font-semibold">{reason.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
