"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useCaseIcon from "@/assets/Services/AiMl/icons/use-case.svg";
import modelIcon from "@/assets/Services/AiMl/icons/model.svg";
import deployIcon from "@/assets/Services/AiMl/icons/deploy.svg";
import monitorIcon from "@/assets/Services/AiMl/icons/monitor.svg";

const STEPS = [
    {
        title: "Use Case & Data Readiness",
        desc: "We define the business problem, the success measures, and the data available to support it before any model is built.",
        icon: useCaseIcon,
    },
    {
        title: "Model Development",
        desc: "We prepare features, train and evaluate candidate models, and select the approach that balances accuracy with explainability.",
        icon: modelIcon,
    },
    {
        title: "Deployment & Integration",
        desc: "Models are deployed as services and integrated into the applications, workflows, and dashboards where decisions are made.",
        icon: deployIcon,
    },
    {
        title: "Monitoring & Improvement",
        desc: "We track model performance and data drift in production and retrain models as patterns and business conditions change.",
        icon: monitorIcon,
    },
];

export default function AiMlLifecycle() {
    return (
        <section className="w-full py-10 px-8 sm:p-16 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Deliver <span className="text-[#2D8EC5]">AI &amp; ML</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    A practical path from a business question to a model that runs reliably in production.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-20">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120px] h-[94px] bg-[#002C4F] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={step.icon} alt="" width={48} height={48} className="size-[48px]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-8 pt-16 sm:pt-20 pb-10">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light text-balance">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
