"use client";

import { motion } from "framer-motion";

const CARDS = [
    { title: "Professional Services", desc: "Consulting and advisory firms billing clients for recorded hours and expenses." },
    { title: "IT & Technology Services", desc: "Project teams tracking effort across implementations, support, and change requests." },
    { title: "Engineering & Construction", desc: "Projects where labor and material usage both drive cost and client billing." },
    { title: "Field Service & Maintenance", desc: "Technicians recording time and parts used on every service order." },
];

export default function TmIndustries() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-6 sm:pb-16 px-8 sm:px-[0px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6 sm:px-0"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Where T&amp;M fits best</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Built for Project-Driven Businesses</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Organizations whose revenue depends on accurately recording and billing time and materials.
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
                <div className="absolute inset-x-0 top-[99px] bottom-0 bg-[#F5F6F6]" />

                <div className="relative z-10 max-w-full mx-auto px-6 sm:px-[64px] grid grid-cols-4 gap-x-6 lg:gap-x-8">
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

