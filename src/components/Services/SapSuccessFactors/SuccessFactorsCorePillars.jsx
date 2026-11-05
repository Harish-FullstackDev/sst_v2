"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import certifiedIcon from "@/assets/Services/SapSuccessFactors/icons/certified.svg";
import knowledgeTransferIcon from "@/assets/Services/SapSuccessFactors/icons/knowledge-transfer.svg";
import pricingIcon from "@/assets/Services/SapSuccessFactors/icons/pricing.svg";
import customerCentricIcon from "@/assets/Services/SapSuccessFactors/icons/customer-centric.svg";
import documentationIcon from "@/assets/Services/SapSuccessFactors/icons/documentation.svg";
import practicesIcon from "@/assets/Services/SapSuccessFactors/icons/practices.svg";
import catalystIcon from "@/assets/Services/SapSuccessFactors/icons/catalyst.svg";
import planningIcon from "@/assets/Services/SapSuccessFactors/icons/planning.svg";
import deploymentIcon from "@/assets/Services/SapSuccessFactors/icons/deployment.svg";

const ITEMS = [
    {
        icon: certifiedIcon,
        title: "Certified SAP Experts",
        desc: "Work with certified professionals who provide expertise to ensure smooth implementation and continued success.",
    },
    {
        icon: knowledgeTransferIcon,
        title: "Knowledge Transfer",
        desc: "Access effective knowledge sharing through easy-to-understand instructional videos.",
    },
    {
        icon: pricingIcon,
        title: "Flexible Pricing Models",
        desc: "Choose from flexible plans tailored to your needs, with transparent pricing and free services.",
    },
    {
        icon: customerCentricIcon,
        title: "Customer-Centric Solutions",
        desc: "Develop solutions that focus on your specific business needs, fostering long-term success.",
    },
    {
        icon: documentationIcon,
        title: "Comprehensive Documentation",
        desc: "Benefit from thorough documentation and rigorous testing to ensure the highest quality.",
    },
    {
        icon: practicesIcon,
        title: "Industry-Leading Practices",
        desc: "Implement recognized industry standards and best practices for business success.",
    },
    {
        icon: catalystIcon,
        title: "SAP SuccessFactors Catalyst",
        desc: "Quick, efficient deployment with SAP tools that accelerate your transformation journey.",
    },
    {
        icon: planningIcon,
        title: "Proficient Business Planning",
        desc: "Support business growth with structured, data-driven planning and decision-making tools.",
    },
    {
        icon: deploymentIcon,
        title: "Cloud vs On-Premise",
        desc: "Select the best deployment model, cloud or on-premise, depending on your business needs, budget, and infrastructure.",
    },
];

export default function SuccessFactorsCorePillars() {
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
                    Our Core Pillars of SuccessFactors at SST
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    How we deliver SAP SuccessFactors, from the first workshop to long-term support.
                </p>
            </motion.div>

            {/* Nine pillars in three rows of three; the vertical divider sits on every
                column except the first of each row. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-14 gap-x-8 w-full">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                        className={`flex flex-col gap-8 lg:pl-8 ${index % 3 !== 0 ? "lg:border-l lg:border-[#929292]" : ""
                            }`}
                    >
                        <Image src={item.icon} alt="" width={32} height={32} className="size-8" />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
