"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import customerIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-outcome-customer.svg";
import dataIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-outcome-data.svg";
import pipelineIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-outcome-pipeline.svg";
import serviceIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-outcome-service.svg";

const OUTCOMES = [
    {
        icon: pipelineIcon,
        title: "Clearer Sales Pipelines",
        desc: "Better lead conversion and full visibility into every opportunity, quotation, and order.",
    },
    {
        icon: customerIcon,
        title: "Stronger Customer Loyalty",
        desc: "Targeted engagement and a consistent experience across every channel.",
    },
    {
        icon: serviceIcon,
        title: "Faster Service Resolution",
        desc: "Tickets, SLAs, and agent tools that shorten resolution times.",
    },
    {
        icon: dataIcon,
        title: "Unified Customer Data",
        desc: "One customer record shared with ERP, feeding dashboards and predictive insight.",
    },
];

export default function CrmOutcomes() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What Customer-Facing Teams Gain</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The outcomes a well-implemented SAP CRM landscape is designed to deliver.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {OUTCOMES.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative bg-white flex flex-col gap-4 px-6 py-8 sm:px-7 sm:py-9 h-full overflow-hidden"
                    >
                        {/* Blue fill rises from the bottom on hover */}
                        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#2d8ec5] transition-all duration-500 ease-out group-hover:h-full group-hover:opacity-[0.06]" />
                        <Image src={item.icon} alt="" width={48} height={48} className="relative size-11 sm:size-12" />
                        <h3 className="relative text-[#2E3033] text-lg sm:text-xl font-semibold">{item.title}</h3>
                        <p className="relative text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
