"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import adoptionImage from "@/assets/Solutions/AnalyticsCloud/adoption.webp";

const STEPS = [
    {
        title: "Connect",
        desc: "Identify the SAP and non-SAP sources that matter and set up live or import connections to each.",
    },
    {
        title: "Model",
        desc: "Shape the data into models that support reporting, planning, and predictive scenarios.",
    },
    {
        title: "Visualize & Plan",
        desc: "Build the dashboards, stories, budgets, and forecasts each team needs to run the business.",
    },
    {
        title: "Collaborate & Grow",
        desc: "Roll insights out across departments, enable annotation and sharing, and extend use cases over time.",
    },
];

export default function SacAdoption() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 w-full lg:w-[45%] shrink-0 lg:sticky lg:top-28"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Bring SAP Analytics Cloud to Life</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            From the first data connection to insight shared across the organization.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#565656]">
                        <Image src={adoptionImage} alt="" fill className="object-cover" />
                    </div>
                </motion.div>

                {/* Vertical timeline: numbered nodes joined by a rule */}
                <div className="relative flex flex-col w-full lg:flex-1 min-w-0">
                    <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-[#d3dae2]" />
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className="relative flex items-start gap-5 sm:gap-8 pb-10 last:pb-0"
                        >
                            <span className="relative z-10 flex items-center justify-center size-10 sm:size-12 shrink-0 bg-white border-2 border-[#2d8ec5] text-[#2d8ec5] text-base sm:text-lg font-semibold">
                                0{index + 1}
                            </span>
                            <div className="flex flex-col gap-2 min-w-0 pt-1 sm:pt-2">
                                <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h3>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
