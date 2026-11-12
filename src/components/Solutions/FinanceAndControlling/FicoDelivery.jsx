"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/Solutions/FinanceAndControlling/assess.svg";
import prioritizeIcon from "@/assets/Solutions/FinanceAndControlling/prioritize.svg";
import executeIcon from "@/assets/Solutions/FinanceAndControlling/execute.svg";
import governIcon from "@/assets/Solutions/FinanceAndControlling/govern.svg";

const STEPS = [
    {
        icon: assessIcon,
        title: "Assess",
        desc: "Review current finance processes, the chart of accounts, period-end activities, and the reports the business relies on today.",
    },
    {
        icon: prioritizeIcon,
        title: "Design",
        desc: "Define the enterprise structure, including company codes, controlling areas, and cost and profit center hierarchies, around how the business is managed.",
    },
    {
        icon: executeIcon,
        title: "Build & Integrate",
        desc: "Configure FI and CO, connect them to sales, materials management, and production planning, and migrate master data and opening balances.",
    },
    {
        icon: governIcon,
        title: "Run & Improve",
        desc: "Support the first period-end closes after go-live, then refine controls, reports, and dashboards as finance requirements evolve.",
    },
];

export default function FicoDelivery() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Deliver <span className="text-[#2D8EC5]">SAP FICO</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A finance implementation is sequenced so the structure is settled before anything is configured
                        on top of it.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={step.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#10161d] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p className="text-[#4a5568] text-base sm:text-lg font-light">{step.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#d3dae2]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
