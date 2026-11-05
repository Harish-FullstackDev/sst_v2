"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import datacenterIcon from "@/assets/Services/Azure/icons/scenario-1.svg";
import modernizationIcon from "@/assets/Services/Azure/icons/scenario-2.svg";
import hybridIcon from "@/assets/Services/Azure/icons/scenario-3.svg";
import dataAiIcon from "@/assets/Services/Azure/icons/scenario-4.svg";

const CARDS = [
    {
        title: "Datacenter Exit",
        desc: "Moving on-premises servers to Azure ahead of hardware refresh or lease end, in planned and tested waves.",
        icon: datacenterIcon,
    },
    {
        title: "Windows & SQL Modernization",
        desc: "Taking ageing Windows Server and SQL Server estates to supported, managed Azure platforms.",
        icon: modernizationIcon,
    },
    {
        title: "Hybrid Operations",
        desc: "Managing servers and Kubernetes clusters outside Azure from one place with Azure Arc.",
        icon: hybridIcon,
    },
    {
        title: "Data & AI Workloads",
        desc: "Building analytics and AI solutions with Azure data services, Azure Machine Learning, and Azure OpenAI Service.",
        icon: dataAiIcon,
    },
];

export default function AzureScenarios() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Common Azure Scenarios</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The situations where businesses most often bring us in to plan and deliver on Azure.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 sm:gap-x-8 xl:gap-x-12 gap-y-20">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col sm:min-h-[280px] mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120px] h-[94px] bg-[#002C4F] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={card.icon} alt="" width={48} height={48} className="size-[48px]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-6 sm:px-8 pt-16 sm:pt-20 pb-10">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
