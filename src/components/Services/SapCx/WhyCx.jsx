"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/SapCx/why-cx-bg.webp";

const OUTCOMES = ["Unified customer data", "Automated workflows", "Personalized marketing & support"];

export default function WhyCx() {
    return (
        <section className="relative w-full bg-[#1c5f85] px-8 py-10 sm:px-[64px] sm:py-16 overflow-hidden">
            {/* Fixed-attachment photo with a bottom-up gradient so the statement reads over it. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/40" />
            </div>

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[38%] shrink-0"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why SAP CX for Business Success?</h2>
                    <div className="mt-4 h-px w-16 bg-[#2d8ec5]" />
                    <ul className="flex flex-col gap-3 pt-6">
                        {OUTCOMES.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-white/90 text-base sm:text-lg font-light">
                                <span className="size-2 shrink-0 bg-[#2d8ec5]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full lg:flex-1 lg:min-w-0 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
                >
                    SAP CX empowers businesses to build deeper connections with customers by unifying data,
                    automating workflows, and providing tools for personalized marketing and support. This
                    comprehensive solution enhances customer experiences, improves engagement, and drives loyalty,
                    ultimately leading to increased satisfaction, stronger relationships, and long-term business
                    success.
                </motion.p>
            </div>
        </section>
    );
}
