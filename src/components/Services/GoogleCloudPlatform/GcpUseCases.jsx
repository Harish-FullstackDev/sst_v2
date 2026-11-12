"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dataPlatformsIcon from "@/assets/Services/GoogleCloudPlatform/icons/data-platforms.svg";
import aiMlIcon from "@/assets/Services/GoogleCloudPlatform/icons/ai-ml.svg";
import modernizationIcon from "@/assets/Services/GoogleCloudPlatform/icons/modernization.svg";
import multiCloudIcon from "@/assets/Services/GoogleCloudPlatform/icons/multi-cloud.svg";

const ITEMS = [
    {
        icon: dataPlatformsIcon,
        title: "Analytics Platforms",
        desc: "Consolidating reporting data in BigQuery so business teams query one governed source instead of many.",
    },
    {
        icon: aiMlIcon,
        title: "AI & Machine Learning",
        desc: "Building, training, and serving models on Vertex AI, or applying pre-trained models to documents, images, and text.",
    },
    {
        icon: modernizationIcon,
        title: "Application Modernization",
        desc: "Moving applications from virtual machines to containers on GKE or serverless services such as Cloud Run.",
    },
    {
        icon: multiCloudIcon,
        title: "Hybrid & Multi-Cloud",
        desc: "Running and governing workloads consistently across on-premises and other clouds with Anthos.",
    },
];

export default function GcpUseCases() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full lg:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Where Google Cloud Fits Best</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Typical scenarios where businesses get the most from Google Cloud&apos;s data, AI, and container
                    strengths.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 w-full lg:flex-1">
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
                        <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
