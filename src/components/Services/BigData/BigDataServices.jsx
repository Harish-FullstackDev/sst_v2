"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import servicesPhoto from "@/assets/Services/BigData/services.webp";

const SERVICES = [
    {
        title: "Data Storage",
        desc: "Advanced cloud storage solutions securely store and scale vast amounts of structured and unstructured data.",
        tools: ["AWS S3", "Google Cloud Storage", "Azure Data Lake"],
    },
    {
        title: "Data Integration",
        desc: "Enhanced integration tools bring diverse data sources together, ensuring seamless data flow for comprehensive analysis.",
        tools: ["Apache NiFi", "Informatica", "Talend"],
    },
    {
        title: "Data Visualization",
        desc: "Interactive tools provide intuitive dashboards and insights, making complex data accessible and actionable.",
        tools: ["Power BI", "Tableau", "Looker"],
    },
    {
        title: "Data Analytics",
        desc: "Modern analytics platforms process massive datasets, delivering real-time and predictive insights.",
        tools: ["Google BigQuery", "Snowflake", "Amazon Redshift"],
    },
    {
        title: "Data Processing",
        desc: "Cutting-edge technologies process data at lightning speed, enabling efficient large-scale analytics.",
        tools: ["Apache Spark", "Hadoop", "Databricks"],
    },
    {
        title: "Data Management",
        desc: "Governance solutions ensure data quality and compliance for reliable decision-making.",
        tools: ["Apache Atlas", "Informatica", "Collibra"],
    },
];

export default function BigDataServices() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 w-full">
                {/* Left: heading + image, sticky while the service list scrolls past */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[38%] shrink-0 lg:sticky lg:top-28"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                            Unlocking the Power of Core Big Data Services at SST
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Six service areas, each built on proven platforms, covering the full journey of your data.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image src={servicesPhoto} alt="Big Data services" fill className="object-cover" />
                    </div>
                </motion.div>

                {/* Right: numbered service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10 w-full lg:flex-1 lg:min-w-0">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                            className="group flex flex-col gap-3 border-t border-[#E2E5EA] pt-5"
                        >
                            <span className="text-[#2d8ec5] text-sm sm:text-base font-light">0{index + 1}</span>
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold transition-colors duration-300 group-hover:text-[#2d8ec5]">
                                {service.title}
                            </h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{service.desc}</p>
                            <ul className="flex flex-wrap gap-2 pt-1">
                                {service.tools.map((tool) => (
                                    <li
                                        key={tool}
                                        className="bg-[#f5f6f6] px-2.5 py-1 text-sm font-light text-[#2E3033]"
                                    >
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
