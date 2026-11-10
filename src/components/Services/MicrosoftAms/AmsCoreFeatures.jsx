"use client";

import { LuGauge, LuLifeBuoy, LuPuzzle, LuShieldCheck, LuUsers, LuWrench } from "react-icons/lu";
import { motion } from "framer-motion";

const ITEMS = [
    {
        icon: LuGauge,
        title: "Application Performance Management",
        desc: "Ensure peak application performance with continuous monitoring, tuning, and optimization.",
    },
    {
        icon: LuWrench,
        title: "Proactive Maintenance",
        desc: "Stay ahead of issues with regular updates, patches, and proactive issue resolution.",
    },
    {
        icon: LuUsers,
        title: "Resource Management",
        desc: "Optimize resource allocation and usage to maximize operational efficiency.",
    },
    {
        icon: LuShieldCheck,
        title: "Data Security & Compliance",
        desc: "Protect sensitive data and ensure compliance with industry standards and regulations.",
    },
    {
        icon: LuLifeBuoy,
        title: "End-to-End Support",
        desc: "Get comprehensive support for application deployment, updates, and troubleshooting.",
    },
    {
        icon: LuPuzzle,
        title: "Integration with Microsoft Ecosystem",
        desc: "Seamlessly integrate applications with Microsoft 365, Azure, and Dynamics 365 for enhanced functionality.",
    },
];

export default function AmsCoreFeatures() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] bg-[#F5F6F6] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[900px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Exploring the Core Features of Application &amp; Management Services
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Microsoft Application &amp; Management Services enable businesses to optimize processes, manage
                    resources effectively, and enhance application performance through expert solutions and
                    comprehensive support.
                </p>
            </motion.div>

            {/* 6 items as 3 + 3 on desktop; the divider sits on every item that is not
                first in its row, so it holds at any column count. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-16 gap-x-8 w-full">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                        className={`flex flex-col gap-8 lg:gap-12 lg:pl-8 ${index % 3 !== 0 ? "lg:border-l lg:border-[#929292]" : ""
                            }`}
                    >
                        <item.icon aria-hidden="true" strokeWidth={1.5} className="size-[40px] text-[#1C5F85]" />
                        <div className="flex flex-col gap-4 sm:gap-5">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
