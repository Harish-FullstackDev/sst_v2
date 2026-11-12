"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/EInvoicing/why-e-invoicing-bg.webp";

export default function WhyEInvoicing() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-20 flex flex-col gap-8 sm:gap-10 overflow-hidden bg-[#1c5f85]">
            {/* Fixed-attachment background from sm up (iOS Safari ignores bg-fixed, so phones
                get a plain cover image), with a left-to-right dark gradient for legibility. */}
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why E-Invoicing?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light text-pretty">
                    Optimize and evolve your billing processes with e-invoicing.
                </p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1000px] text-white/90 text-lg sm:text-2xl font-light leading-[1.4] text-pretty"
            >
                E-Invoicing enables seamless digital transactions, automates invoicing workflows, ensures compliance
                with tax regulations, and accelerates payment cycles for improved cash flow management.
            </motion.p>
        </section>
    );
}
