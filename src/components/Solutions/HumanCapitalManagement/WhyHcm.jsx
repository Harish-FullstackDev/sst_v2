"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import officePhoto from "@/assets/Solutions/HumanCapitalManagement/AI_Intelligent_Assistants.webp";

const REASONS = [
    {
        title: "Streamlined & Digitalized HR Processes",
        desc: "SAP HCM optimizes HR processes, automates payroll, and enhances data transparency, productivity, and compliance.",
    },
    {
        title: "Comprehensive HR Capabilities",
        desc: "SAP HCM integrates personnel, time, payroll, organizational management, talent, recruitment, and more for comprehensive HR management.",
    },
    {
        title: "Strategic HR Insights & Decision-Making",
        desc: "SAP HCM delivers robust HR analytics for strategic decisions, enabling trend identification and alignment with business goals.",
    },
];

export default function WhyHcm() {
    return (
        <section className="relative z-10 w-full bg-white py-10 sm:py-16 lg:py-0">
            {/* The photo is full-bleed on the left edge (no side padding on the row); its
                width is a cap rather than a viewport %, and the panel takes the rest. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[320px] w-full shrink-0 overflow-hidden sm:h-[420px] lg:h-auto lg:min-h-[588px] lg:w-[42%] lg:max-w-[578px]"
                >
                    <Image
                        src={officePhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:inset-x-10 sm:bottom-10 lg:inset-x-[12%] lg:bottom-[18%]">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">
                            Why Choose Human Capital Management?
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            One HR platform for the whole employee lifecycle.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative mx-8 sm:mx-[64px] lg:mx-0 lg:ml-[-48px] lg:mr-[64px] lg:my-16 lg:flex-1 self-center bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center gap-8 px-6 sm:px-12 py-10 sm:py-12 mt-8 sm:mt-10 lg:mt-16"
                >
                    {REASONS.map((reason, index) => (
                        <div key={reason.title} className="flex gap-5">
                            <span className="text-[#2d8ec5] text-lg sm:text-xl font-semibold leading-tight">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">{reason.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
