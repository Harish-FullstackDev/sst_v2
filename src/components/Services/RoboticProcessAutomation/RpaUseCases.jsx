"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import financePhoto from "@/assets/Services/RoboticProcessAutomation/use-case-finance.webp";
import hrPhoto from "@/assets/Services/RoboticProcessAutomation/use-case-hr.webp";
import supplyChainPhoto from "@/assets/Services/RoboticProcessAutomation/use-case-supply-chain.webp";
import customerServicePhoto from "@/assets/Services/RoboticProcessAutomation/use-case-customer-service.webp";

const USE_CASES = [
    {
        image: financePhoto,
        title: "Finance & Accounting",
        desc: "Accounts payable, reconciliations, journal entries, and period-end tasks that follow consistent rules.",
    },
    {
        image: hrPhoto,
        title: "Human Resources",
        desc: "Employee onboarding, payroll inputs, and record updates across HR and IT systems.",
    },
    {
        image: supplyChainPhoto,
        title: "Supply Chain & Procurement",
        desc: "Purchase order creation, order status updates, and supplier data maintenance between ERP and partner portals.",
    },
    {
        image: customerServicePhoto,
        title: "Customer Service",
        desc: "Case logging, account updates, and routine requests handled consistently around the clock.",
    },
];

const AUTOPLAY_INTERVAL = 2500;

// Desktop grid auto-advances the reveal one card at a time; hovering a card takes
// over and autoplay resumes from there on mouse-out. Mobile shows every
// description open — there is no hover surface.
export default function RpaUseCases() {
    const [autoIndex, setAutoIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const activeIndex = hoveredIndex ?? autoIndex;

    useEffect(() => {
        if (hoveredIndex !== null) return;
        const id = setInterval(() => {
            setAutoIndex((i) => (i + 1) % USE_CASES.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [hoveredIndex]);

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Where RPA Fits</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Business functions where high-volume, rules-based work is ready for automation.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible — no hover. */}
            <div className="flex sm:hidden flex-col gap-4">
                {USE_CASES.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{item.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: auto-advancing reveal grid, hover takes over on demand. */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-[43px]">
                {USE_CASES.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative aspect-[258/335] overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"}`}
                            />
                            <div className="absolute inset-0 flex items-start justify-start px-6 py-10 text-left">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold">{item.title}</h2>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-base sm:text-lg font-light pt-2">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
