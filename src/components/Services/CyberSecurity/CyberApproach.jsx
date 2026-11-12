"use client";

import { LuRadar, LuRotateCcw, LuSearch, LuShield, LuSiren } from "react-icons/lu";
import { motion } from "framer-motion";

const STEPS = [
    {
        icon: LuSearch,
        title: "Identify",
        desc: "Map your systems, sensitive data, and users to understand where the real risks sit.",
    },
    {
        icon: LuShield,
        title: "Protect",
        desc: "Apply network security, endpoint protection, access controls, and encryption.",
    },
    {
        icon: LuRadar,
        title: "Detect",
        desc: "Monitor systems in real time to spot threats before they escalate.",
    },
    {
        icon: LuSiren,
        title: "Respond",
        desc: "Act on a tested incident response plan to contain and neutralize attacks.",
    },
    {
        icon: LuRotateCcw,
        title: "Recover",
        desc: "Restore operations quickly and minimize downtime after an incident.",
    },
];

export default function CyberApproach() {
    return (
        <section className="w-full bg-white py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our <span className="text-[#2D8EC5]">Cybersecurity</span> Approach</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Connected functions covering threat detection, response, and prevention end to end.
                </p>
            </motion.div>

            <div className="relative w-full">
                {/* Connecting rule behind the icon row on desktop */}
                <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[#E2E5EA]" />

                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center"
                        >
                            <div className="relative shrink-0 size-16 bg-[#f5f6f6] border border-[#E2E5EA] flex items-center justify-center transition-colors duration-300 group-hover:border-[#2d8ec5]">
                                <step.icon aria-hidden="true" strokeWidth={1.5} className="size-9 text-[#1C5F85]" />
                            </div>
                            <div className="flex flex-col gap-2 min-w-0">
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty lg:text-balance">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
