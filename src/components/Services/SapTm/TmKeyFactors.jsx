"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import timeIcon from "@/assets/Services/SapTm/icons/ProcessAssessment.svg";
import materialIcon from "@/assets/Services/SapTm/icons/TechnologyAssessment.svg";
import costIcon from "@/assets/Services/SapTm/icons/LeanTransformation.svg";
import billingIcon from "@/assets/Services/SapTm/icons/AutomationOpportunities.svg";
import monitoringIcon from "@/assets/Services/SapTm/icons/WorkflowStandardization.svg";
import reportingIcon from "@/assets/Services/SapTm/icons/ProcessDocumentation.svg";

const ROW_1 = [
    { icon: timeIcon, title: "Time Recording", desc: "Enables precise project and task time tracking for employees' efficiency." },
    { icon: materialIcon, title: "Material Usage Tracking", desc: "Ensures accurate material and resource consumption tracking for cost calculation." },
    { icon: costIcon, title: "Cost Calculation", desc: "Provides clear project expense transparency through time and material calculations." },
];

const ROW_2 = [
    { icon: billingIcon, title: "Billing Integration", desc: "Connects recorded time and materials seamlessly with billing systems for accurate invoicing." },
    { icon: monitoringIcon, title: "Project Monitoring", desc: "Provides tools to monitor project progress, resource utilization, and profitability in real time." },
    { icon: reportingIcon, title: "Compliance & Reporting", desc: "Ensures regulatory compliance and detailed project finance and performance reporting." },
];

const Card = ({ icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="flex flex-col gap-4"
    >
        <div className="relative size-10 shrink-0">
            <Image src={icon} alt="" fill className="object-contain" />
        </div>
        <h2 className="text-[#2E3033] text-xl font-semibold">{title}</h2>
        <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">{desc}</p>
    </motion.div>
);

const FeatureRow = ({ items }) => (
    <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-8">
            {items.map((item, index) => (
                <Card key={item.title} {...item} index={index} />
            ))}
        </div>
        <div className="hidden lg:flex lg:items-stretch">
            {items.map((item, index) => (
                <div key={item.title} className="contents">
                    <div className="flex-1 min-w-0">
                        <Card {...item} index={index} />
                    </div>
                    {index < items.length - 1 && (
                        <div className="w-[144px] shrink-0 flex justify-center">
                            <div className="w-px self-stretch bg-[#8794A3]/30" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default function TmKeyFactors() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-10 lg:pb-16 px-8 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16 w-full"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Optimize, Track, Succeed.</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Key Factors that Enhance <span className="text-[#2D8EC5]">Project Efficiency</span> at SST through T&amp;M
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Six capabilities that keep every project measured, costed, and billed accurately.
                </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-20 w-full">
                <FeatureRow items={ROW_1} />
                <FeatureRow items={ROW_2} />
            </div>
        </section>
    );
}
