"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/GoogleCloudPlatform/why-gcp-bg.webp";

export default function WhyGcp() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment background with a left-to-right dark gradient so the
                left-aligned copy stays legible. The gradient is nested inside the bg
                div and the text blocks are `relative`, so no negative z-index is needed. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat bg-[#1c5f85]"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why GCP?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">
                    Upgrade your digital landscape with cutting-edge solutions.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    Google Cloud Platform provides next-generation infrastructure, advanced analytics,
                    state-of-the-art AI/ML tools, unmatched security, and optimized cost management.
                </p>
                <p>These capabilities empower businesses to innovate and thrive in a competitive market.</p>
            </motion.div>
        </section>
    );
}
