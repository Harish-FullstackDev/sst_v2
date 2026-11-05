"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/FinanceAndControlling/Business_CTA.webp";

export default function FicoStatement() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment background with a left-to-right dark gradient, so the
                left-aligned text stays legible while the photo shows through on the
                right. The gradient is nested inside the bg div and the text blocks are
                `relative`, so nothing depends on negative z-index. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">One Ledger, One Version of the Numbers</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Why finance and controlling belong together</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    When external accounting and internal cost reporting run on separate data, every period-end turns
                    into a reconciliation exercise and every variance needs explaining twice.
                </p>
                <p>
                    Running both on one integrated foundation means the figures in the financial statements and the
                    figures behind cost and profitability decisions come from the same postings.
                </p>
            </motion.div>
        </section>
    );
}
