"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import integrationIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-integration.svg";
import comprehensiveIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-comprehensive.svg";

const HIGHLIGHTS = [
    {
        icon: integrationIcon,
        title: "Integration with other Modules",
        desc: "SAP CRM integrates seamlessly with SAP ERP for unified customer data and synchronized business processes.",
    },
    {
        icon: comprehensiveIcon,
        title: "Comprehensive Customer Relationship Management",
        desc: "SAP CRM offers tools for sales, marketing, customer service, support, and analytics that streamline operations and enhance customer satisfaction.",
    },
];

export default function CrmOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1074px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Customer Relationship Management</h2>
                {/* 1074px block (was 900) with text-balance: three long, even desktop
                    lines, so "and support." no longer sits alone on the last one. */}
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5] text-balance">
                    SAP Customer Relationship Management is a comprehensive customer relationship management software
                    solution provided by SAP SE, a leading enterprise software company. SAP CRM helps organizations
                    manage customer relationships by integrating various business processes such as sales, marketing,
                    customer service, and support.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {HIGHLIGHTS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 border border-[#d3d5d8] px-6 py-7 sm:px-8 sm:py-8 h-full"
                    >
                        <div className="flex items-center justify-center size-14 sm:size-16 shrink-0 bg-[#f5f6f6]">
                            <Image src={item.icon} alt="" width={48} height={48} className="size-9 sm:size-10" />
                        </div>
                        <div className="flex flex-col gap-2 min-w-0">
                            <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
