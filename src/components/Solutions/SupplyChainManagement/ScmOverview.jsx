"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Solutions/SupplyChainManagement/overview.webp";

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
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-12">
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-[48px] items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[46%] lg:max-w-[600px] aspect-[1024/400] lg:aspect-[600/420] shrink-0 overflow-hidden"
                >
                    <Image src={overviewImage} alt="" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:flex-1"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">From raw material sourcing to customer delivery</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Supply Chain Management</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        SAP Supply Chain Management (SCM) is a software solution by SAP, a leading multinational
                        corporation. SCM focuses on optimizing and streamlining supply chain processes, covering
                        everything from raw material sourcing to customer delivery.
                    </p>
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        Integrated with other SAP modules, SCM provides end-to-end visibility and control.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4"
            >
                <h2 className="text-[#2E3033] text-lg sm:text-xl font-semibold">Key features include</h2>
                <ul className="flex flex-wrap gap-3">
                    {KEY_FEATURES.map((item) => (
                        <li
                            key={item}
                            className="border border-[#d3d5d8] bg-[#f5f6f6] px-4 py-2 text-[#55595E] text-sm sm:text-base font-light transition-colors duration-300 hover:border-[#2d8ec5] hover:text-[#2E3033]"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
