"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDesignPhoto from "@/assets/Solutions/Procurement/strategic-sourcing.webp";

const BOXES = [
    {
        title: "Strategic Sourcing Management",
        desc: "Efficiently selecting, negotiating, and managing supplier relationships to optimize costs and ensure high-quality procurement.",
    },
    {
        title: "Streamlined Procurement Processes",
        desc: "Automating and optimizing procurement workflows, from requisitioning to invoicing, to enhance efficiency and compliance.",
    },
];

export default function ProcurementPillars() {
    return (
        <section className="w-full py-16 px-8 sm:px-[64px] bg-[#f3f6f9]">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Two Foundations of <span className="text-[#2D8EC5]">Smarter Spending</span></h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            How SAP SSM brings control to who you buy from and how every purchase moves through the business.
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
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-12 lg:gap-16 px-6 py-8"
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
                    <Image src={serviceDesignPhoto} alt="Buyer checking stock levels on a tablet between warehouse shelves" fill className="object-cover object-center" />
                </motion.div>
            </div>
        </section>
    );
}

