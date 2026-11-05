"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import outcomesPhoto from "@/assets/Services/SapMigration/outcomes.webp";

const OUTCOMES = [
    { title: "Improved Performance", desc: "Faster processing on modern, scalable platforms like SAP S/4HANA." },
    { title: "Enhanced Data Management", desc: "Data integrity and consistency carried from the old system to the new." },
    { title: "Real-Time Analytics", desc: "Up-to-date insight that supports quicker, better-informed decisions." },
    { title: "Reduced Complexity", desc: "A simpler landscape with streamlined processes that is easier to run." },
    { title: "Ready for Innovation", desc: "A foundation for digital transformation and advanced technologies." },
];

export default function MigrationOutcomes() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-stretch">
                {/* Image half */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]"
                >
                    <Image src={outcomesPhoto} alt="" fill className="object-cover" />
                </motion.div>

                {/* List half on dark panel */}
                <div className="w-full lg:w-1/2 bg-[#0A2B3E] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <p className="text-[#7cc4ec] text-base sm:text-lg font-light">Stay competitive, grow long-term.</p>
                        <h2 className="text-white text-xl sm:text-[28px] font-semibold">What Your Business Gains</h2>
                    </motion.div>

                    <ul className="flex flex-col">
                        {OUTCOMES.map((item, index) => (
                            <motion.li
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="flex gap-4 py-4 sm:py-5 border-b border-white/15 last:border-b-0"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="size-6 shrink-0 mt-0.5 text-[#2d8ec5]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-white text-lg sm:text-xl font-semibold">{item.title}</h3>
                                    <p className="text-white/75 text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
