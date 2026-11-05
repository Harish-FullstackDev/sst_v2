"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/MicrosoftMigration/why-migrate-band.png";

export default function WhyMigrateBand() {
    return (
        <section className="relative w-full bg-[#1c5f85] px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo with a left-to-right dark gradient for the left-aligned
                copy; bg-[#1c5f85] stays underneath as the fallback while the image loads.
                No negative z-index — on a section with its own background-color a negative-z
                child paints behind that background and disappears. */}
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
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why Migrate to Microsoft ERP?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">
                    Unlock the full potential of your business operations.
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
                    ERP migration to Microsoft solutions optimizes processes, provides real-time insights, and ensures
                    scalability for growth, all while reducing IT complexity.
                </p>
            </motion.div>
        </section>
    );
}
