"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import benefitsPhoto from "@/assets/Services/EInvoicing/benefits.webp";

const BENEFITS = [
    "Fewer manual errors and improved accuracy",
    "Compliance with tax regulations and enhanced security",
    "Faster payment cycles that lead to better cash flow",
    "Seamless ERP integration that boosts efficiency and cuts the costs of paper-based invoicing",
    "Real-time tracking and reporting for greater transparency and effective financial management",
    "Support for sustainability through reduced paper usage",
];

export default function EInvoicingBenefits() {
    return (
        <section className="relative z-10 w-full pt-10 sm:pt-16 pb-10 sm:pb-16">
            {/* The image reaches the real browser edge (no side padding on this row); the
                bullet card fills the remaining space next to it. */}
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative h-[360px] w-full shrink-0 overflow-hidden sm:h-[460px] lg:h-[588px] lg:w-[42%] lg:max-w-[578px]"
                >
                    <Image
                        src={benefitsPhoto}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Text sits in the image's lower-left, inset as a % of the image itself
                        so it stays proportionally placed as the image scales. */}
                    <div className="absolute inset-x-8 bottom-8 flex flex-col gap-2 sm:inset-x-[64px] lg:inset-x-auto lg:bottom-[18%] lg:left-[14%] lg:right-[12%]">
                        <h2 className="text-xl sm:text-[28px] font-semibold text-white">
                            How E-Invoicing Benefits Your Business
                        </h2>
                        <p className="text-base font-light leading-snug text-white/90 sm:text-lg text-pretty">
                            E-invoicing simplifies billing by digitizing the entire invoicing process.
                        </p>
                    </div>
                </motion.div>

                {/* min-h instead of a fixed height so the longer bullets can wrap freely */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:max-w-[800px] self-center lg:min-h-[480px] bg-white shadow-[2px_2px_46px_rgba(0,0,0,0.15)] flex flex-col justify-center px-8 sm:px-12 py-10 sm:py-12"
                >
                    <ul className="list-disc pl-5 sm:pl-6 space-y-4 text-base sm:text-lg font-light leading-relaxed text-[#55595E]">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit} className="text-pretty">{benefit}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
