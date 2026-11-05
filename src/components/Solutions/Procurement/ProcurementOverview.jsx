"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Solutions/Procurement/overview.webp";

export default function ProcurementOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">
                    Welcome to SAP SSM Supply Spend Management
                </p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SSM Procurement</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Revolutionize your procurement journey with SAP SSM (Supply Spend Management), the ultimate ERP
                    solution engineered to revolutionize how your organization manages spending.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    SAP SSM empowers businesses to soar to new heights by enhancing visibility, nurturing supplier
                    relationships, and unlocking substantial cost savings across your entire supply chain.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full lg:w-[48%] lg:max-w-[620px] aspect-[1024/400] shrink-0 overflow-hidden"
            >
                <Image src={overviewImage} alt="" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
