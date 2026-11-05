"use client";

import { motion } from "framer-motion";

export default function BtpOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[38%] shrink-0"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">SAP BTP</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Business Technology Platform</h2>
                    <div className="mt-4 h-[2px] w-[96px] bg-[#2d8ec5]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-4 w-full lg:flex-1 min-w-0"
                >
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        Experience the future of digital transformation with SAP Business Technology Platform (BTP), your
                        all-in-one solution for accelerating innovation and growth.
                    </p>
                    <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        SAP BTP offers a seamless foundation for developing, integrating, and managing business
                        applications in the cloud, empowering organizations to thrive in the digital era.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
