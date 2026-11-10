"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import advantagesImage from "@/assets/Services/BigData/advantages.webp";

export default function BigDataAdvantages() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-8 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">
                    Insights, predictions, and data-driven decisions from information at scale.
                </p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Advantages of Big Data for Your Business
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Big Data allows businesses to harness vast amounts of information to uncover insights, predict
                    trends, and make data-driven decisions. By analyzing large, complex datasets, companies can
                    optimize operations, improve customer experiences, and identify new growth opportunities.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Big Data enhances business agility by enabling real-time decision-making, boosting efficiency,
                    and offering a competitive edge. It also helps businesses better understand consumer behavior,
                    allowing for more personalized offerings and targeted marketing strategies that drive
                    profitability.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={advantagesImage} alt="Colleagues reviewing data charts and reports at a desk" fill className="object-cover" />
            </motion.div>
        </section>
    );
}