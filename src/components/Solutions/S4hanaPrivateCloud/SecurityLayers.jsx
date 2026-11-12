"use client";

import { motion } from "framer-motion";

const LAYERS = [
    {
        title: "Network Isolation",
        desc: "Dedicated network segments, private connectivity, and firewall rules keep the ERP landscape separate from public traffic.",
    },
    {
        title: "Identity & Access",
        desc: "Role-based authorizations, single sign-on, and segregation-of-duties checks give users access only to what their jobs require.",
    },
    {
        title: "Encryption",
        desc: "Data is encrypted at rest and in transit, with key management aligned to your security policies.",
    },
    {
        title: "Monitoring & Audit",
        desc: "Security logging, patch management, and regular audits keep the environment compliant and give auditors the evidence they need.",
    },
];

export default function SecurityLayers() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-16 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-8"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How a Private Cloud Landscape Is <span className="text-[#2D8EC5]">Secured</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The layers of protection we put around a dedicated SAP S/4HANA environment.
                </p>
            </motion.div>

            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full px-8 sm:px-[64px]">
                {LAYERS.map((layer, index) => (
                    <motion.div
                        key={layer.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <h2 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{layer.title}</h2>
                        <p className="text-[#55595E] text-base font-light">{layer.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: white title boxes on top of a full-bleed grey band that holds the
                descriptions. The band starts at the vertical middle of the title boxes (a
                fixed-height row), so it stays aligned however long the descriptions run. */}
            <div className="hidden lg:block relative w-full">
                <div className="absolute inset-x-0 top-[60px] bottom-0 bg-[#f3f6f9]" />

                <div className="relative z-10 px-[64px] grid grid-cols-4 gap-x-8">
                    {LAYERS.map((layer, index) => (
                        <motion.div
                            key={layer.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] h-[120px] flex items-center justify-center text-center px-8">
                                <h2 className="text-[#2E3033] text-xl font-semibold leading-tight">{layer.title}</h2>
                            </div>
                            <p className="text-[#55595E] text-center text-lg font-light px-6 pt-6 pb-10">{layer.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
