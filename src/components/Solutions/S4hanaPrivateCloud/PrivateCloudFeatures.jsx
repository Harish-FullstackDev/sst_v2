"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dedicatedIcon from "@/assets/Solutions/S4hanaPrivateCloud/icon-dedicated.svg";
import securityIcon from "@/assets/Solutions/S4hanaPrivateCloud/icon-security.svg";
import scalabilityIcon from "@/assets/Solutions/S4hanaPrivateCloud/icon-scalability.svg";
import deploymentIcon from "@/assets/Solutions/S4hanaPrivateCloud/icon-deployment.svg";
import integrationIcon from "@/assets/Solutions/S4hanaPrivateCloud/icon-integration.svg";

const ITEMS = [
    {
        icon: dedicatedIcon,
        title: "Dedicated Resources",
        desc: "SAP S/4HANA Private Cloud gives organizations their own virtual environment, ensuring top performance and robust security. This dedicated infrastructure allows tailored configurations and stringent control over data privacy and compliance, a reliable fit for enterprises with high-performance requirements and strict security needs.",
    },
    {
        icon: securityIcon,
        title: "Enhanced Security",
        desc: "Sensitive data is safeguarded through advanced controls and encryption, protecting against unauthorized access and data breaches. With customizable security configurations, organizations can adhere to compliance standards while maintaining high levels of data integrity and confidentiality in their dedicated cloud environment.",
    },
    {
        icon: scalabilityIcon,
        title: "Scalability",
        desc: "Scaling is effortless as the business expands. Whether you are increasing user numbers or entering new markets, the private cloud infrastructure accommodates growth seamlessly, letting you adjust resources dynamically for optimal performance and responsiveness without compromising security or efficiency.",
    },
    {
        icon: deploymentIcon,
        title: "Custom Deployment",
        desc: "Flexible deployment options cater to diverse organizational needs. Businesses can opt for fully managed setups where SAP handles all aspects, or hybrid models combining on-premises and cloud environments, so the solution aligns with specific IT strategies and operational preferences.",
    },
    {
        icon: integrationIcon,
        title: "Seamless Integration",
        desc: "Seamless integration with existing systems enhances productivity. Organizations connect ERP functionality with other enterprise applications and data sources effortlessly, streamlining operations, empowering data-driven decision-making, and optimizing workflows for efficiency and agility across the enterprise.",
    },
];

export default function PrivateCloudFeatures() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[38%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features in S/4HANA Private Cloud</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Dedicated resources, enterprise-grade security, and deployment choices built around your
                        organization.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={item.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#d3dae2]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
