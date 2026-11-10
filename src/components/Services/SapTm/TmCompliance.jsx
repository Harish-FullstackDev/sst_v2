"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import compliancePhoto from "@/assets/Services/SapTm/compliance.webp";

const POINTS = [
    "Integrated expense management alongside time and material postings",
    "Policy compliance built into how time and costs are recorded",
    "Detailed project finance and performance reports",
    "Real-time cost visibility for financial control",
];

export default function TmCompliance() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-16">
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[360px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[578px]"
                >
                    <Image
                        src={compliancePhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:bottom-8 lg:inset-x-auto lg:bottom-[24%] lg:left-[20.8%] lg:right-[14.5%]">
                        <h2 className="font-heading text-xl sm:text-[28px] font-semibold text-white">
                            Robust Time Tracking and Cost Control
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            Compliance &amp; Reporting
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center min-h-[400px] lg:h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-6 sm:px-12 py-12" >

                    <p className="text-[#55595E] text-base sm:text-lg font-light mb-6">
                        SAP T&amp;M ensures regulatory compliance while giving finance and project teams the detailed
                        reporting they need to keep every project under control.
                    </p>
                    <ul className="list-disc pl-5 text-lg font-light leading-[40px] text-[#55595E] sm:pl-6">
                        {POINTS.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
