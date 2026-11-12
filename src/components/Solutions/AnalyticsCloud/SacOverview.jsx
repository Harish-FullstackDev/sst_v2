"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introImage from "@/assets/Solutions/AnalyticsCloud/intro.webp";

export default function SacOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1 min-w-0"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">SAP Analytics Cloud</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Analytics <span className="text-[#2D8EC5]">Cloud</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    SAP Analytics Cloud is SAP&apos;s cloud-based solution for data analysis and visualization. It
                    integrates data from SAP and non-SAP sources, enabling businesses to uncover insights and make
                    informed decisions.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    With features like predictive analytics and business intelligence tools, it supports strategic
                    planning and forecasting. SAP Analytics Cloud also offers collaborative capabilities, allowing teams
                    to share insights and work together efficiently across the organization.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full lg:w-[42%] lg:max-w-[518px] aspect-[518/340] shrink-0 self-start overflow-hidden bg-[#565656]"
            >
                <Image src={introImage} alt="Two colleagues reviewing analytics charts on a desktop monitor" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
