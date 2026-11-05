"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import threatPhoto from "@/assets/Services/CyberSecurity/service-threat-detection.webp";
import networkPhoto from "@/assets/Services/CyberSecurity/service-network.webp";
import endpointPhoto from "@/assets/Services/CyberSecurity/service-endpoint.webp";
import iamPhoto from "@/assets/Services/CyberSecurity/service-iam.webp";
import dataPhoto from "@/assets/Services/CyberSecurity/service-data-protection.webp";
import incidentPhoto from "@/assets/Services/CyberSecurity/service-incident-response.webp";

const SERVICES = [
    {
        title: "Threat Detection and Response",
        desc: "Monitor systems in real-time to identify and neutralize threats before they escalate.",
        img: threatPhoto,
    },
    {
        title: "Network Security",
        desc: "Implement firewalls, intrusion detection systems, and secure network architectures to protect against unauthorized access.",
        img: networkPhoto,
    },
    {
        title: "Endpoint Protection",
        desc: "Secure devices such as laptops, desktops, and mobile devices with advanced malware protection and encryption.",
        img: endpointPhoto,
    },
    {
        title: "Identity and Access Management (IAM)",
        desc: "Control user access with multi-factor authentication (MFA) and role-based access controls to protect sensitive data.",
        img: iamPhoto,
    },
    {
        title: "Data Protection and Encryption",
        desc: "Ensure sensitive data is encrypted both in transit and at rest to prevent unauthorized access.",
        img: dataPhoto,
    },
    {
        title: "Incident Response and Recovery",
        desc: "Develop a robust incident response plan to minimize downtime and recover quickly from cyberattacks.",
        img: incidentPhoto,
    },
];

export default function CyberServices() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[900px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Top Cybersecurity Services Keeping SST&apos;s Data Safe
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Layered protection across threats, networks, devices, identities, data, and recovery.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="group relative h-[280px] sm:h-[340px] overflow-hidden"
                    >
                        <Image
                            src={service.img}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
                        <div className="absolute inset-0 bg-[#2d8ec5]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                        {/* Description always visible below lg (no hover on touch), revealed on hover at lg */}
                        <div className="absolute inset-x-6 sm:inset-x-8 bottom-6 sm:bottom-8 flex flex-col gap-3">
                            <h2 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                                {service.title}
                            </h2>
                            <p className="text-white text-sm sm:text-base font-light overflow-hidden transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:-translate-y-2 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                                {service.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
