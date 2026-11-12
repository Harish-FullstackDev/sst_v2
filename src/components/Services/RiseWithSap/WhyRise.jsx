"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/RiseWithSap/why-rise-bg.webp";

export default function WhyRise() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment background with a left-to-right dark gradient so the
                left-aligned text stays legible while the photo shows through on the right.
                The gradient lives inside the bg div and the text blocks are `relative`, so
                nothing depends on negative z-index stacking. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why RISE with SAP?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Streamline and optimize operations.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    RISE with SAP streamlines business functions, improves decision-making, and enhances customer
                    relationships through its modular design.
                </p>
                <p>The result is cost savings and a competitive advantage.</p>
            </motion.div>
        </section>
    );
}
