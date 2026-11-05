"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/Services/EInvoicing/icons/assess.svg";
import designIcon from "@/assets/Services/EInvoicing/icons/design.svg";
import integrateIcon from "@/assets/Services/EInvoicing/icons/integrate.svg";
import supportIcon from "@/assets/Services/EInvoicing/icons/support.svg";

const STEPS = [
    {
        icon: assessIcon,
        title: "Assess Requirements",
        desc: "We map your invoicing flows, volumes, and the tax and format requirements that apply in each country you operate in.",
    },
    {
        icon: designIcon,
        title: "Design the Solution",
        desc: "We define invoice templates, validation rules, transmission channels, and the integration points with your ERP.",
    },
    {
        icon: integrateIcon,
        title: "Integrate & Test",
        desc: "We connect the e-invoicing platform to your ERP and test end to end, including validation, rejection, and correction scenarios.",
    },
    {
        icon: supportIcon,
        title: "Go Live & Support",
        desc: "We switch over in planned phases, monitor transmission and compliance status, and adjust as regulations evolve.",
    },
];

export default function EInvoicingDelivery() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:p-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Implement E-Invoicing</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
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
                                    <Image src={step.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
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
