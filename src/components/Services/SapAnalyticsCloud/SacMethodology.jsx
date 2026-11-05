"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessPhoto from "@/assets/Services/SapAnalyticsCloud/step-assess.webp";
import connectPhoto from "@/assets/Services/SapAnalyticsCloud/step-connect.webp";
import buildPhoto from "@/assets/Services/SapAnalyticsCloud/step-build.webp";
import adoptPhoto from "@/assets/Services/SapAnalyticsCloud/step-adopt.webp";

const STEPS = [
    {
        image: assessPhoto,
        title: "Assess & Plan",
        desc: "We review your reporting, planning, and data landscape, and agree the decisions SAP Analytics Cloud needs to support.",
    },
    {
        image: connectPhoto,
        title: "Connect & Model Data",
        desc: "We integrate data from your SAP and non-SAP sources into trusted models for a unified, real-time view of performance.",
    },
    {
        image: buildPhoto,
        title: "Build Stories & Plans",
        desc: "We design dashboards, planning and forecasting models, and predictive scenarios around how your teams work.",
    },
    {
        image: adoptPhoto,
        title: "Adopt & Scale",
        desc: "We train users, build a data-driven culture, and extend SAC as your analytics and planning needs evolve.",
    },
];

export default function SacMethodology() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Real-Time Analytics for Success</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SAP SAC Methodology</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Best practices for data-driven decision making, in four phases.
                </p>
            </motion.div>

            {/* Alternating image / text rows. */}
            <div className="flex flex-col gap-10 sm:gap-14">
                {STEPS.map((step, index) => {
                    const reversed = index % 2 === 1;
                    return (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`flex flex-col gap-6 lg:gap-16 items-center ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                        >
                            <div className="relative w-full lg:w-1/2 aspect-[16/10] overflow-hidden shrink-0">
                                <Image src={step.image} alt="" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col gap-3 w-full lg:flex-1 lg:min-w-0">
                                <span className="text-[#2d8ec5] text-3xl sm:text-5xl font-semibold leading-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
