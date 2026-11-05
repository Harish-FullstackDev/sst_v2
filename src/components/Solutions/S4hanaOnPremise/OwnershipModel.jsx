"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ownershipPhoto from "@/assets/Solutions/S4hanaOnPremise/ownership.png";

const BOXES = [
    {
        title: "Customization & Control",
        desc: "Organizations customize configurations, control access, manage workflows, ensure compliance, and optimize system performance for SAP environments.",
    },
    {
        title: "Maintenance",
        desc: "Organizations must provide and maintain hardware and IT infrastructure, apply updates and patches, manage security, and ensure high availability and disaster recovery.",
    },
];

export default function OwnershipModel() {
    return (
        <section className="w-full py-10 sm:pt-8 sm:pb-16 px-8 sm:px-[64px] bg-white">
            {/* Two columns fill the full padded width via proportional flex-grow (≈654:475),
                so they scale together on any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What On-Premises Ownership Means</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Running SAP S/4HANA in your own data center gives you full control of the system, and full
                            responsibility for keeping it running.
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
                                className="bg-[#f5f6f6] w-full sm:flex-1 lg:h-full flex flex-col items-start gap-12 lg:gap-16 px-6 py-8"
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
                    <Image src={ownershipPhoto} alt="" fill className="object-cover object-center" />
                </motion.div>
            </div>
        </section>
    );
}
