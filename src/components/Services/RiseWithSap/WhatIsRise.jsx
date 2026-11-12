"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import erpIcon from "@/assets/Services/RiseWithSap/icons/bundle-1.svg";
import processIcon from "@/assets/Services/RiseWithSap/icons/bundle-2.svg";
import platformIcon from "@/assets/Services/RiseWithSap/icons/bundle-3.svg";
import networkIcon from "@/assets/Services/RiseWithSap/icons/bundle-4.svg";

const CARDS = [
    {
        title: "SAP S/4HANA Cloud",
        desc: "The intelligent ERP core that brings finance, operations, and customer processes together in one cloud suite.",
        icon: erpIcon,
    },
    {
        title: "Business Process Intelligence",
        desc: "Process analysis tools that show how work runs today and where it can be simplified or automated.",
        icon: processIcon,
    },
    {
        title: "SAP Business Technology Platform",
        desc: "A platform for extending, integrating, and analysing the ERP core without modifying it.",
        icon: platformIcon,
    },
    {
        title: "SAP Business Network",
        desc: "Starter access for connecting with trading partners across procurement, logistics, and asset management.",
        icon: networkIcon,
    },
];

export default function WhatIsRise() {
    return (
        <section className="w-full py-10 px-8 sm:p-16 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What is <span className="text-[#2D8EC5]">Rise with SAP?</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    One subscription that combines cloud ERP, the tools around it, and SAP-managed infrastructure
                    and technical operations under a single contract.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-20">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col min-h-[240px] sm:min-h-[339px] mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120px] h-[94px] bg-[#002C4F] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={card.icon} alt="" width={48} height={48} className="size-[48px]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-8 pt-16 sm:pt-20 pb-10">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
