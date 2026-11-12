"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import accessIcon from "@/assets/Services/AmazonWebServices/icons/security-DataAccessControls.svg";
import encryptionIcon from "@/assets/Services/AmazonWebServices/icons/security-DataProtection.svg";
import networkIcon from "@/assets/Services/AmazonWebServices/icons/security-DataClassification.svg";
import detectionIcon from "@/assets/Services/AmazonWebServices/icons/security-PrivacyControls.svg";

const ITEMS = [
    {
        icon: accessIcon,
        title: "Identity & Access",
        desc: "Least-privilege IAM roles and policies, with AWS IAM Identity Center for central sign-in across accounts.",
    },
    {
        icon: encryptionIcon,
        title: "Encryption",
        desc: "Data encrypted at rest and in transit, with keys managed and rotated through AWS KMS.",
    },
    {
        icon: networkIcon,
        title: "Network Isolation",
        desc: "Workloads segmented in VPCs with private subnets, security groups, and private connectivity to AWS services.",
    },
    {
        icon: detectionIcon,
        title: "Detection & Audit",
        desc: "AWS CloudTrail, Amazon GuardDuty, and AWS Security Hub give a continuous record and early warning of risky activity.",
    },
];

export default function AwsSecurity() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f3f6f9] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[900px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Security Built Into <span className="text-[#2D8EC5]">Every AWS Workload</span></h2>
                {/* ~1150px of text: a 680px cap plus text-balance splits it into two
                    even lines on desktop. */}
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[680px] text-balance">
                    Controls we design in from the first account, so security is part of the architecture rather than
                    a later remediation project.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 w-full">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className={`flex flex-col gap-8 lg:gap-12 lg:pl-8 ${index !== 0 ? "lg:border-l lg:border-[#929292]" : ""}`}
                    >
                        <Image src={item.icon} alt="" width={32} height={32} />
                        <div className="flex flex-col gap-5">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
