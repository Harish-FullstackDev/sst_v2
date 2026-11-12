"use client";

import { motion } from "framer-motion";

const KEY_FEATURES = [
    "Demand Planning",
    "Supply Network Collaboration",
    "Inventory Optimization",
    "Warehouse Management",
    "Transportation Management",
    "Production Planning",
    "Order Fulfillment",
    "Supplier Relationship Management",
    "Analytics",
];

export default function ScmOverview() {
    return (
        <section className="w-full">
            <div className="w-full px-8 sm:p-16 py-10 ">
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] items-center gap-0">
                    <div className="flex flex-col gap-2 max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            Supply <span className="text-[#2D8EC5]">Chain Management</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#2d8ec5] text-base sm:text-lg font-light"
                        >
                            From raw material sourcing to customer delivery
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="flex flex-col gap-4 mb-4 text-[#55595E] text-base sm:text-lg font-light"
                        >
                            <span>
                                SAP Supply Chain Management (SCM) is a software solution by SAP, a leading multinational
                                corporation. SCM focuses on optimizing and streamlining supply chain processes, covering
                                everything from raw material sourcing to customer delivery.
                            </span>
                            <span>
                                Integrated with other SAP modules, SCM provides end-to-end visibility and control.
                            </span>
                        </motion.p>
                    </div>
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-80 bg-[#2D8EC5]" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        // Mobile: centered under the heading, and mt-4 on top of the
                        // description's own mb-4 makes the 32px gap the stacked layout needs
                        // (the grid is gap-0 because at lg these are side-by-side columns).
                        className="justify-self-start max-w-[467px] flex flex-col gap-4 max-sm:mt-4 max-sm:justify-self-center"
                    >
                        <h3 className="text-[#2E3033] text-xl font-semibold lg:pl-16 max-sm:text-center">Key features include</h3>
                        {/* Drawn bullets instead of list-disc markers, so each dot starts
                            exactly where the heading's "K" starts (same lg:pl-16). */}
                        <ul className="lg:pl-16 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {KEY_FEATURES.map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-[#7f7f7f]" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}