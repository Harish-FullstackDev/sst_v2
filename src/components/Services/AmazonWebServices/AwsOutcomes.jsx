"use client";

import { motion } from "framer-motion";

const POINTS = [
    "Capacity that scales with demand instead of fixed hardware",
    "Pay-as-you-go spend with clear visibility by team and workload",
    "Faster releases through managed and serverless services",
    "Global reach through AWS Regions and CloudFront edge locations",
    "Resilience by design across multiple Availability Zones",
    "A stronger security posture with controls built into the platform",
];

export default function AwsOutcomes() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            {/* From xl the list column is auto (sized to its longest point) so every
                point stays on one line; the heading column takes what is left. */}
            <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_auto_auto] items-stretch gap-0">
                {/* Left: centered when stacked, left aligned in the lg three-column row. */}
                <div className="flex flex-col justify-center gap-2 max-lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                    >
                        What Your Business Gains
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#55595E] text-base sm:text-lg font-light"
                    >
                        The outcomes a well-architected AWS environment is designed to deliver.
                    </motion.p>
                </div>

                {/* Middle rule stretches with the list instead of a fixed height. */}
                <div className="hidden lg:flex justify-center px-10">
                    <div className="w-0.5 h-full bg-[#2D8EC5]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-lg:mt-8 max-lg:flex max-lg:justify-center"
                >
                    <ul className="list-disc marker:text-[#7f7f7f] pl-5 lg:pl-8 space-y-3 text-[#55595E] text-base sm:text-lg font-light max-w-[520px] xl:max-w-none">
                        {POINTS.map((point) => (
                            <li key={point} className="xl:whitespace-nowrap">{point}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
