"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Solutions/FinanceAndControlling/Data_Business_Intelligence.webp";

export default function FicoOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Finance and Controlling
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Experience the pinnacle of financial management with SAP Finance and Controlling (SAP FICO), a
                    comprehensive ERP solution tailored to meet the diverse needs of modern businesses.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    SAP FICO empowers organizations to streamline financial processes, gain real-time insights, and
                    ensure compliance, enabling them to make informed decisions and drive sustainable growth.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full lg:w-[42%] lg:max-w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
