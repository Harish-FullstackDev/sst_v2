"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import unifiedSolutionIcon from "@/assets/Services/MicrosoftMigration/unified-solution.svg";
import realTimeInsightsIcon from "@/assets/Services/MicrosoftMigration/real-time-insights.svg";
import automationIcon from "@/assets/Services/MicrosoftMigration/automation.svg";
import cloudScaleIcon from "@/assets/Services/MicrosoftMigration/cloud-scale.svg";

const CREDENTIALS = ["Seamless Migration", "Certified Experts", "Future-Ready Solutions"];

const ITEMS = [
    {
        icon: unifiedSolutionIcon,
        title: "One Unified Solution",
        desc: "Manage finances, operations, supply chain, and customer relationships in a single system.",
    },
    {
        icon: realTimeInsightsIcon,
        title: "Real-Time Insights",
        desc: "Enhanced data visibility and real-time insights improve decision-making.",
    },
    {
        icon: automationIcon,
        title: "Process Automation",
        desc: "Automated processes boost efficiency across day-to-day operations.",
    },
    {
        icon: cloudScaleIcon,
        title: "Cloud-Based Scale",
        desc: "Scale easily, reduce costs, and collaborate seamlessly, while staying adaptable to evolving market demands.",
    },
];

export default function WhyMigrateToMicrosoftErp() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1 min-w-0"
            >
                <ul className="flex flex-wrap gap-2 sm:gap-3">
                    {CREDENTIALS.map((item) => (
                        <li
                            key={item}
                            className="border border-[#2d8ec5]/50 px-3 py-1 text-[#1c5f85] text-sm sm:text-base font-light"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Why Migrate to Microsoft ERP for Your Business?
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Migrating to Microsoft ERP solutions streamlines operations, integrates data, and enhances
                    business performance by providing scalable and efficient systems.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10 w-full lg:flex-1">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-4 sm:gap-6"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
