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
        <section className="relative w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="relative lg:min-h-[520px] flex flex-col lg:block">
                {/* Wide photo on the left; the white card overlaps it from the right on desktop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full lg:w-[66%] aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-y-0 lg:left-0 overflow-hidden"
                >
                    <Image src={compliancePhoto} alt="" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="relative z-10 bg-white w-full lg:w-[48%] lg:ml-auto lg:mt-[64px] p-6 sm:p-10 lg:p-12 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Compliance &amp; Reporting</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Robust Time Tracking and Cost Control
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        SAP T&amp;M ensures regulatory compliance while giving finance and project teams the detailed
                        reporting they need to keep every project under control.
                    </p>
                    <ul className="flex flex-col gap-3 pt-2">
                        {POINTS.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-[#2E3033] text-base sm:text-lg font-light">
                                <span className="mt-2.5 size-2 shrink-0 bg-[#2d8ec5]" aria-hidden="true" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
