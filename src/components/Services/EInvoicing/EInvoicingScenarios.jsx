"use client";

import { motion } from "framer-motion";

const SCENARIOS = [
    {
        title: "Regulatory Mandates",
        desc: "Organizations preparing for government e-invoicing mandates that require structured invoice formats and reporting to tax authorities.",
    },
    {
        title: "High Invoice Volumes",
        desc: "Finance teams processing large numbers of supplier or customer invoices that strain manual entry and approval.",
    },
    {
        title: "Multi-Entity Operations",
        desc: "Groups running several legal entities or countries that need consistent invoicing rules and formats across all of them.",
    },
    {
        title: "ERP Modernization",
        desc: "Businesses moving to a new ERP, such as SAP S/4HANA, that want compliant invoicing built into the new landscape.",
    },
];

export default function EInvoicingScenarios() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-16 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-8"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Who E-Invoicing Is For</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">
                    Typical situations where moving to electronic invoicing pays off quickly.
                </p>
            </motion.div>

            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full px-8 sm:px-[64px]">
                {SCENARIOS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <h2 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base font-light text-pretty">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop layout — white title cards floating on top of a full-bleed grey band
                that holds the descriptions. The band starts at half the title-box height. */}
            <div className="hidden lg:block relative w-full">
                <div className="absolute inset-x-0 top-[60px] bottom-0 bg-[#F5F6F6]" />

                <div className="relative z-10 px-[64px] grid grid-cols-4 gap-x-8 pb-4">
                    {SCENARIOS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] h-[120px] flex items-center justify-center text-center px-8">
                                <h2 className="text-[#2E3033] text-xl font-semibold leading-tight">{item.title}</h2>
                            </div>
                            <p className="text-[#55595E] text-center text-lg font-light p-6 text-balance">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
