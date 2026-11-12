"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/Services/SapAnalyticsCloud/icons/assess.svg";
import prioritizeIcon from "@/assets/Services/SapAnalyticsCloud/icons/prioritize.svg";
import executeIcon from "@/assets/Services/SapAnalyticsCloud/icons/execute.svg";
import governIcon from "@/assets/Services/SapAnalyticsCloud/icons/govern.svg";

const STEPS = [
    {
        icon: assessIcon,
        title: "Assess & Plan",
        desc: "We review your reporting, planning, and data landscape, and agree the decisions SAP Analytics Cloud needs to support.",
    },
    {
        icon: prioritizeIcon,
        title: "Connect & Model Data",
        desc: "We integrate data from your SAP and non-SAP sources into trusted models for a unified, real-time view of performance.",
    },
    {
        icon: executeIcon,
        title: "Build Stories & Plans",
        desc: "We design dashboards, planning and forecasting models, and predictive scenarios around how your teams work.",
    },
    {
        icon: governIcon,
        title: "Adopt & Scale",
        desc: "We train users, build a data-driven culture, and extend SAC as your analytics and planning needs evolve.",
    },
];

// Sticky intro column beside an icon + text list, one divider per row.
export default function SacMethodology() {
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
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Real-Time Analytics for Success</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SAP SAC <span className="text-[#2D8EC5]">Methodology</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Best practices for data-driven decision making, in four phases.
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
