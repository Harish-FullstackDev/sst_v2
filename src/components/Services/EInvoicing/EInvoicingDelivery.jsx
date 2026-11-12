"use client";

import { LuLifeBuoy, LuPencilRuler, LuPlug, LuSearch } from "react-icons/lu";
import { motion } from "framer-motion";

const STEPS = [
    {
        icon: LuSearch,
        title: "Assess Requirements",
        desc: "We map your invoicing flows, volumes, and the tax and format requirements that apply in each country you operate in.",
    },
    {
        icon: LuPencilRuler,
        title: "Design the Solution",
        desc: "We define invoice templates, validation rules, transmission channels, and the integration points with your ERP.",
    },
    {
        icon: LuPlug,
        title: "Integrate & Test",
        desc: "We connect the e-invoicing platform to your ERP and test end to end, including validation, rejection, and correction scenarios.",
    },
    {
        icon: LuLifeBuoy,
        title: "Go Live & Support",
        desc: "We switch over in planned phases, monitor transmission and compliance status, and adjust as regulations evolve.",
    },
];

export default function EInvoicingDelivery() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:p-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Implement <span className="text-[#2D8EC5]">E-Invoicing</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">
                        A structured rollout that keeps billing running while compliance is built in.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <step.icon aria-hidden="true" strokeWidth={1.5} className="size-full text-[#1C5F85]" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">{step.desc}</p>
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
