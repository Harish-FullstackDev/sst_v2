"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/BusinessTechnologyPlatform/clean-core-band.webp";

export default function BtpCleanCore() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden bg-[#1c5f85]">
            {/* Fixed-attachment background with a left-to-right dark gradient, so the
                left-aligned text stays legible while the photo shows through on the right. */}
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
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Extend Without Disturbing the Core</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Why extensions belong on the platform</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    Customizing SAP applications directly makes every upgrade harder. Building extensions on SAP BTP
                    keeps your core system clean while still tailoring it to your specific business needs.
                </p>
                <p>
                    Processes, data, and applications stay connected through the platform, so innovation moves at the
                    speed of the business without putting the systems you rely on at risk.
                </p>
            </motion.div>
        </section>
    );
}
