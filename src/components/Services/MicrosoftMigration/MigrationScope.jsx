"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Finance & Accounting",
        desc: "Chart of accounts, dimensions, open balances, and the transaction history your auditors and reports depend on.",
    },
    {
        title: "Supply Chain & Inventory",
        desc: "Items, warehouses, and open purchase orders, with real-time inventory tracking and control, including batch and serial tracking.",
    },
    {
        title: "Sales & Customers",
        desc: "Customer records, price lists, open sales orders, and the relationship history held in your current system.",
    },
    {
        title: "Integrations & Reports",
        desc: "Interfaces to banks, e-commerce, and other systems rebuilt, and critical reports recreated in the new ERP or Power BI.",
    },
];

export default function MigrationScope() {
    return (
        <section className="w-full bg-white pt-10 sm:pt-16 pb-10 sm:pb-16 px-8 sm:px-0 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What We <span className="text-[#2D8EC5]">Migrate</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Every area of the business moves across, mapped and validated before cutover.
                </p>
            </motion.div>

            {/* Mobile / tablet layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full sm:px-[64px]">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <h2 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{card.title}</h2>
                        <p className="text-[#55595E] text-base font-light">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop layout — white title cards floating on top of a full-bleed Neutral/100 band that holds the descriptions */}
            <div className="hidden lg:block relative w-full lg:min-h-[303px]">
                <div className="absolute inset-x-0 top-[99px] bottom-0 bg-[#F5F6F6]" />

                <div className="relative z-10 max-w-full mx-auto px-[64px] grid grid-cols-4 gap-x-6 lg:gap-x-8">
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
                                <h2 className="text-[#2E3033] text-xl font-semibold leading-tight">{card.title}</h2>
                            </div>
                            <p className="text-[#55595E] text-center text-base sm:text-lg font-light p-6">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

