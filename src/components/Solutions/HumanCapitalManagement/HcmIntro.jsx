"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import workforcePhoto from "@/assets/Solutions/HumanCapitalManagement/Business_Software_Scalability.webp";

const BOXES = [
    {
        title: "End-to-End HR Management",
        desc: "SAP HCM integrates HR processes from recruitment to offboarding, enhancing workforce planning, employee experiences, and administrative efficiency for organizational growth.",
    },
    {
        title: "Comprehensive Integrations",
        desc: "SAP HCM integrates with other SAP modules, enabling unified data flow and accurate information for strategic decision-making and operational efficiency.",
    },
];

export default function HcmIntro() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] bg-[#f5f6f6]">
            {/* Two columns share the padded width via proportional flex-grow (≈654:475)
                rather than fixed px, so they scale together on any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-12 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-4"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Human Capital Management</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Welcome to SAP HCM (Human Capital Management), your all-in-one solution for managing HR
                            processes within your organization. SAP HCM is a comprehensive suite of tools and modules
                            designed to manage the human resource processes of an organization.
                        </p>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            As part of SAP&apos;s ERP (Enterprise Resource Planning) software suite, it provides integrated
                            solutions to handle the entire lifecycle of an employee, from hiring to retirement.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-8 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-6 lg:gap-10 px-6 py-8"
                            >
                                <h2 className="text-[#2E3033] text-xl font-semibold">{box.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{box.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] aspect-auto lg:aspect-[475/563] overflow-hidden"
                >
                    <Image src={workforcePhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
