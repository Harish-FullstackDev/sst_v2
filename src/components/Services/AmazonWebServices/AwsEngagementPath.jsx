"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/Services/AmazonWebServices/icons/path-assess.svg";
import foundationIcon from "@/assets/Services/AmazonWebServices/icons/path-prioritize.svg";
import migrateIcon from "@/assets/Services/AmazonWebServices/icons/path-execute.svg";
import operateIcon from "@/assets/Services/AmazonWebServices/icons/path-govern.svg";

const STEPS = [
    {
        icon: assessIcon,
        title: "Discover & Assess",
        desc: "Inventory current servers, applications, and dependencies, and build the business case and migration plan for each workload.",
    },
    {
        icon: foundationIcon,
        title: "Build the Landing Zone",
        desc: "Set up a multi-account foundation with AWS Control Tower, covering networking, identity, logging, and guardrails.",
    },
    {
        icon: migrateIcon,
        title: "Migrate & Modernize",
        desc: "Move workloads in waves with AWS Application Migration Service and AWS Database Migration Service, modernizing to managed or serverless services where it pays off.",
    },
    {
        icon: operateIcon,
        title: "Operate & Optimize",
        desc: "Monitor with Amazon CloudWatch, review spend in AWS Cost Explorer, and run regular AWS Well-Architected reviews to keep improving.",
    },
];

// Sticky, percentage-width intro column next to a flexible icon + text list
// with a trailing divider per row.
export default function AwsEngagementPath() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Path to <span className="text-[#2D8EC5]">AWS</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A structured sequence that gets workloads onto AWS safely, then keeps them secure, efficient, and
                        cost-effective once they are there.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={step.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
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
