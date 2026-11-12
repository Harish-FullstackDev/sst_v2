"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import amsPhoto from "@/assets/Services/MicrosoftAms/why-choose-ams.webp";

const CREDENTIALS = ["Application Services", "Certified Expertise", "End-to-End Management"];

const REASONS = [
    "Tailored support and optimization for your business applications",
    "Seamless performance with reduced downtime",
    "Enhanced efficiency through expert management",
    "Your software managed, monitored, and optimized while you focus on core operations",
    "Improved cost control",
    "Scalability for long-term success",
];

export default function WhyChooseAms() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-16">
            {/* Full-bleed row: the photo card reaches the real browser edge on the left (capped
                at its 578px design width on desktop) and the bullet panel fills the rest. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative min-h-[400px] w-full shrink-0 overflow-hidden sm:min-h-[460px] lg:min-h-[588px] lg:w-[42%] lg:max-w-[578px]"
                >
                    <Image
                        src={amsPhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/55" />

                    <div className="absolute inset-x-8 bottom-8 flex flex-col gap-3 sm:inset-x-[64px] sm:bottom-12 lg:left-[64px] lg:right-10">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">
                            Why Choose Application &amp; Management Services?
                        </h2>
                        <p className="text-base sm:text-lg font-normal text-white">
                            Simplify and enhance application performance.
                        </p>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg">
                            Application &amp; Management Services ensure seamless operations, improved application
                            functionality, and effective resource management for business success.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:flex-1 lg:max-w-[800px] self-center bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center gap-6 px-8 sm:px-12 py-10 sm:py-12"
                >
                    <ul className="flex flex-wrap gap-2">
                        {CREDENTIALS.map((item) => (
                            <li
                                key={item}
                                className="border border-[#2d8ec5]/50 px-3 py-1 text-[#1c5f85] text-sm font-light"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">
                        Reasons for Choosing <span className="text-[#2D8EC5]">AMS</span> for Your Business
                    </h2>
                    <ul className="list-disc pl-5 text-base sm:text-lg font-light leading-[1.5] text-[#55595E] sm:pl-6 flex flex-col gap-3">
                        {REASONS.map((reason) => (
                            <li key={reason}>{reason}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
