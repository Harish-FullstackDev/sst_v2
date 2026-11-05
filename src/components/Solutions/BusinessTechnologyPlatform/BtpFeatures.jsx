"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import unifiedPlatformIcon from "@/assets/Solutions/BusinessTechnologyPlatform/icon-unified-platform.svg";
import appDevelopmentIcon from "@/assets/Solutions/BusinessTechnologyPlatform/icon-app-development.svg";
import integrationIcon from "@/assets/Solutions/BusinessTechnologyPlatform/icon-integration.svg";
import analyticsIcon from "@/assets/Solutions/BusinessTechnologyPlatform/icon-analytics.svg";
import intelligentIcon from "@/assets/Solutions/BusinessTechnologyPlatform/icon-intelligent.svg";
import securityIcon from "@/assets/Solutions/BusinessTechnologyPlatform/icon-security.svg";

const FEATURES = [
    {
        icon: unifiedPlatformIcon,
        title: "Unified Platform",
        desc: "Simplify application development, integration, and management across cloud and on-premises environments with SAP BTP's unified platform. Address diverse business needs effortlessly from one centralized hub.",
    },
    {
        icon: appDevelopmentIcon,
        title: "Smart Application Development",
        desc: "Build intelligent applications quickly and easily using SAP BTP's comprehensive suite of development tools. Utilize industry-standard languages and frameworks to create innovative solutions tailored to your business requirements.",
    },
    {
        icon: integrationIcon,
        title: "Seamless Integration",
        desc: "Connect applications, data, and processes seamlessly across your enterprise with SAP BTP's powerful integration services. Enable real-time data exchange, streamline processes, and gain valuable insights with ease.",
    },
    {
        icon: analyticsIcon,
        title: "Advanced Analytics",
        desc: "Drive informed decision-making with SAP BTP's advanced analytics capabilities. Uncover hidden patterns and trends in your data using cutting-edge technologies like machine learning and predictive analytics.",
    },
    {
        icon: intelligentIcon,
        title: "Intelligent Technologies",
        desc: "Leverage AI, IoT, and blockchain technologies to transform your business processes and unlock new revenue streams. Infuse intelligence into every aspect of your operations for increased efficiency and innovation.",
    },
    {
        icon: securityIcon,
        title: "Security and Compliance",
        desc: "Ensure the security and compliance of your data and applications with SAP BTP's robust security features. Protect sensitive information, mitigate cyber threats, and maintain regulatory compliance with confidence.",
    },
];

export default function BtpFeatures() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of Business Technology Platform</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Six capabilities that make SAP BTP the foundation for building and running your business applications.
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {FEATURES.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="group relative bg-white border border-[#d3d5d8] flex flex-col gap-4 px-6 py-7 sm:px-8 sm:py-8 h-full overflow-hidden"
                    >
                        {/* Accent bar grows across the top edge on hover */}
                        <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#2d8ec5] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <div className="flex items-center justify-between w-full">
                            <Image src={feature.icon} alt="" width={48} height={48} className="size-11 sm:size-12" />
                            <span className="text-[#2d8ec5] text-base sm:text-lg font-semibold">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{feature.title}</h3>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
