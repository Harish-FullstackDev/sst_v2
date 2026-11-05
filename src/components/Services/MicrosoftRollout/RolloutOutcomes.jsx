"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import outcomesPhoto from "@/assets/Services/MicrosoftRollout/outcomes.webp";

const OUTCOMES = [
    { title: "Minimal Downtime", desc: "A smooth transition to new systems without interrupting daily work." },
    { title: "Minimized Risk", desc: "Expert guidance and proactive mitigation at every stage." },
    { title: "Operational Efficiency", desc: "Tailored solutions that improve how the business runs." },
    { title: "Confident Adoption", desc: "Teams ready to use new technologies effectively from day one." },
];

export default function RolloutOutcomes() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                <div className="w-full lg:flex-1 lg:min-w-0 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Maximum impact</p>
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What a Well-Run Rollout Delivers</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {OUTCOMES.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="flex flex-col gap-2 bg-white p-6 border-l-[3px] border-[#2d8ec5]"
                            >
                                <h3 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{item.title}</h3>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[42%] shrink-0 aspect-square overflow-hidden"
                >
                    <Image src={outcomesPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
