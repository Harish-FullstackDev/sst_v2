"use client";

import { LuPencilRuler, LuRocket, LuSearch, LuSettings, LuUsers } from "react-icons/lu";
import { motion } from "framer-motion";

const PHASES = [
    {
        icon: LuSearch,
        title: "Assess Procurement",
        desc: "We review current sourcing, purchasing, and payment processes to find where spend, time, and risk are being lost.",
    },
    {
        icon: LuPencilRuler,
        title: "Design the Solution",
        desc: "We map your procurement policies to SAP Ariba best practices and agree approval flows, catalogues, and roles.",
    },
    {
        icon: LuSettings,
        title: "Configure & Integrate",
        desc: "We configure SAP Ariba and connect it to SAP S/4HANA or your existing ERP so orders, receipts, and invoices flow end to end.",
    },
    {
        icon: LuUsers,
        title: "Enable Suppliers",
        desc: "We onboard suppliers onto the network, set up catalogues and electronic invoicing, and support them through their first transactions.",
    },
    {
        icon: LuRocket,
        title: "Launch & Improve",
        desc: "We support go-live, train buyers and approvers, and use procurement analytics to keep refining the process.",
    },
];

export default function AribaMethodology() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SAP Ariba Methodology</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Five phases that move procurement from assessment to a live, supplier-connected platform.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 w-full lg:flex-1 lg:min-w-0"
                >
                    {PHASES.map((phase) => (
                        <div key={phase.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <phase.icon aria-hidden="true" strokeWidth={1.5} className="size-full text-[#1C5F85]" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{phase.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{phase.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#E2E5EA]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
