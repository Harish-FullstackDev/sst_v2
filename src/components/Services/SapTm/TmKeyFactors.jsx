"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import keyFactorsPhoto from "@/assets/Services/SapTm/key-factors.webp";
import timeIcon from "@/assets/Services/SapTm/icons/ProcessAssessment.svg";
import materialIcon from "@/assets/Services/SapTm/icons/TechnologyAssessment.svg";
import costIcon from "@/assets/Services/SapTm/icons/LeanTransformation.svg";
import billingIcon from "@/assets/Services/SapTm/icons/AutomationOpportunities.svg";
import monitoringIcon from "@/assets/Services/SapTm/icons/WorkflowStandardization.svg";
import reportingIcon from "@/assets/Services/SapTm/icons/ProcessDocumentation.svg";

const FACTORS = [
    {
        icon: timeIcon,
        title: "Time Recording",
        desc: "Enables precise project and task time tracking for employees' efficiency.",
    },
    {
        icon: materialIcon,
        title: "Material Usage Tracking",
        desc: "Ensures accurate material and resource consumption tracking for cost calculation.",
    },
    {
        icon: costIcon,
        title: "Cost Calculation",
        desc: "Provides clear project expense transparency through time and material calculations.",
    },
    {
        icon: billingIcon,
        title: "Billing Integration",
        desc: "Connects recorded time and materials seamlessly with billing systems for accurate invoicing.",
    },
    {
        icon: monitoringIcon,
        title: "Project Monitoring",
        desc: "Provides tools to monitor project progress, resource utilization, and profitability in real time.",
    },
    {
        icon: reportingIcon,
        title: "Compliance & Reporting",
        desc: "Ensures regulatory compliance and detailed project finance and performance reporting.",
    },
];

export default function TmKeyFactors() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start">
            {/* Heading + image stay pinned while the factor list scrolls past on desktop */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6 w-full lg:w-[40%] shrink-0 lg:sticky lg:top-28"
            >
                <div className="flex flex-col gap-2">
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Optimize, Track, Succeed.</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Key Factors that Enhance Project Efficiency at SST through T&amp;M
                    </h2>
                </div>
                <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                    <Image src={keyFactorsPhoto} alt="" fill className="object-cover" />
                </div>
            </motion.div>

            <div className="flex flex-col w-full lg:flex-1 lg:min-w-0">
                {FACTORS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="group flex items-start gap-5 sm:gap-8 py-6 sm:py-8 border-b border-[#D5D9DE] first:pt-0 last:border-b-0"
                    >
                        <div className="flex items-center justify-center size-14 sm:size-16 shrink-0 bg-white border border-[#E2E5EA] transition-colors duration-300 group-hover:border-[#2d8ec5]">
                            <Image src={item.icon} alt="" width={36} height={36} className="size-8 sm:size-9" />
                        </div>
                        <div className="flex flex-col gap-2 min-w-0">
                            <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                        <span className="hidden sm:block ml-auto text-[#a5a5a5] text-base font-light">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
