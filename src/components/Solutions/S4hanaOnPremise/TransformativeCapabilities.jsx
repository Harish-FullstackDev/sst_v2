"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import capabilitiesImage from "@/assets/Solutions/S4hanaOnPremise/capabilities.webp";

const CAPABILITIES = [
    {
        title: "Real-Time Insights",
        desc: "Real-Time Insights provides immediate access to data and analytics, empowering informed decision-making. Leveraging the speed and efficiency of in-memory computing, this solution ensures optimal performance, enabling businesses to respond swiftly to changing conditions and make data-driven decisions in real time.",
    },
    {
        title: "End-to-End Visibility",
        desc: "Achieve complete visibility into every aspect of your business processes, enhancing operational efficiency across departments such as finance, supply chain, sales, and customer service. This holistic approach ensures seamless integration and optimization, driving overall business performance and fostering a more responsive and agile organization.",
    },
    {
        title: "Advanced Automation",
        desc: "Streamline your business processes using intelligent technologies such as machine learning and robotic process automation (RPA). These advancements automate routine tasks, significantly reducing manual effort and freeing up valuable time, so your team can focus on strategic initiatives that drive innovation and growth.",
    },
    {
        title: "Flexibility and Scalability",
        desc: "Easily adapt to evolving business needs with customized solutions designed for your unique requirements. Whether scaling operations, integrating new technologies, or responding to market shifts, tailored solutions ensure flexibility and agility, keeping you aligned with your business goals and supporting sustained growth and competitiveness.",
    },
    {
        title: "Security & Compliance",
        desc: "Safeguard sensitive data and maintain compliance with industry regulations through robust security features. Best-in-class technologies and practices such as encryption, access controls, and regular audits ensure comprehensive protection, mitigating risk, building trust with stakeholders, and reinforcing your commitment to data security and regulatory adherence.",
    },
];

export default function TransformativeCapabilities() {
    return (
        // Vertical breathing room lives on the outer section, outside the grey block,
        // so the grey block runs edge to edge.
        <section className="w-full py-10 sm:py-[32px]">
            <div className="w-full bg-[#F5F6F6] flex flex-col items-center gap-10 sm:gap-16 px-8 sm:px-[64px] py-10 sm:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Transformative <span className="text-[#2D8EC5]">Capabilities</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        What SAP S/4HANA On-Premises brings to finance, supply chain, sales, and service operations.
                    </p>
                </motion.div>

                {/* Both columns split 50/50 with lg:flex-1. The image keeps its portrait ratio and
                    the list is spread across the row height with justify-between, so the copy can
                    grow without a fixed height. */}
                <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-[47px]">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full lg:flex-1"
                    >
                        {/* Portrait on desktop (Figma 546/806); a landscape crop when stacked so
                            the image doesn't push the list a full screen down on phones. */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[640px]">
                            <Image src={capabilitiesImage} alt="Analyst reviewing financial charts on a desktop monitor" fill className="object-cover" />
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-8 lg:justify-between w-full lg:flex-1">
                        {CAPABILITIES.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                                className="group flex flex-col gap-4 w-full"
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[#2E3033] text-xl font-semibold">{item.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                                <div className="relative w-[139px] h-[2px]">
                                    {/* Base line */}
                                    <div className="absolute left-0 top-1/2 w-full h-px -translate-y-1/2 bg-[#3d3d4e]/40" />

                                    {/* Hover line */}
                                    <div className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 origin-left bg-[#2D8EC5] scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
