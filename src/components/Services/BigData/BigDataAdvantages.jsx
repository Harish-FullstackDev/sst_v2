"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/BigData/advantages.webp";

export default function BigDataAdvantages() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden bg-[#0A2B3E]">
            {/* Fixed-attachment background from sm up (iOS Safari ignores bg-fixed, so phones
                get a plain cover image), darkened left-to-right for legible text. */}
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Advantages of Big Data for Your Business</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">
                    Insights, predictions, and data-driven decisions from information at scale.
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
                    Big Data allows businesses to harness vast amounts of information to uncover insights, predict
                    trends, and make data-driven decisions. By analyzing large, complex datasets, companies can optimize
                    operations, improve customer experiences, and identify new growth opportunities.
                </p>
                <p>
                    Big Data enhances business agility by enabling real-time decision-making, boosting efficiency, and
                    offering a competitive edge. It also helps businesses better understand consumer behavior, allowing
                    for more personalized offerings and targeted marketing strategies that drive profitability.
                </p>
            </motion.div>
        </section>
    );
}
