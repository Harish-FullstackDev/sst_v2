"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import continuityIcon from "@/assets/Services/CyberSecurity/icons/continuity.svg";
import trustIcon from "@/assets/Services/CyberSecurity/icons/trust.svg";
import complianceIcon from "@/assets/Services/CyberSecurity/icons/compliance.svg";
import riskIcon from "@/assets/Services/CyberSecurity/icons/risk.svg";

const PILLARS = [
    {
        icon: continuityIcon,
        title: "Business Continuity",
        desc: "Strong security measures safeguard operations and reduce downtime when attacks happen.",
    },
    {
        icon: trustIcon,
        title: "Customer Trust",
        desc: "Protecting customer information builds trust and shields your reputation from damage.",
    },
    {
        icon: complianceIcon,
        title: "Regulatory Compliance",
        desc: "Effective controls keep the business compliant with data protection regulations.",
    },
    {
        icon: riskIcon,
        title: "Lower Risk & Loss",
        desc: "Minimizing risk prevents the financial losses that follow a successful attack.",
    },
];

export default function CyberMatters() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[42%] shrink-0"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Why Cybersecurity Matters for Your Business
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        Cybersecurity is vital for protecting sensitive business data, intellectual property, and
                        customer information from cyber threats such as hacking, data breaches, and malware.
                    </p>
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        With the increasing frequency and sophistication of cyberattacks, strong security measures
                        safeguard business continuity, build trust with customers, and ensure compliance with
                        regulations. Effective cybersecurity minimizes risks, reduces downtime, and prevents financial
                        losses, ultimately allowing businesses to operate safely in a digital world and protect their
                        reputation from potential damage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:flex-1 lg:min-w-0">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="group bg-white flex flex-col gap-4 px-6 py-8 transition-shadow duration-300 hover:shadow-xl"
                        >
                            <div className="relative size-10 sm:size-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
                                <Image src={pillar.icon} alt="" fill className="object-contain" />
                            </div>
                            <h2 className="text-[#2E3033] text-xl font-semibold">{pillar.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
