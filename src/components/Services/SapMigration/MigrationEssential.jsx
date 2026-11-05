"use client";

import { motion } from "framer-motion";
import bandPhoto from "@/assets/Services/SapMigration/statement-band.webp";

export default function MigrationEssential() {
    return (
        <section className="relative w-full bg-[#0A2B3E] px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo; gradient nested inside so it never paints behind
                the section's fallback colour. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bandPhoto.src})` }}
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
                <p className="text-white/80 text-base sm:text-lg font-light">Upgrade with confidence.</p>
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">
                    What Makes Migrating to SAP Essential for Your Business?
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1100px] text-white/90 text-lg sm:text-2xl font-light leading-[1.45]"
            >
                SAP migration enables businesses to upgrade to modern, scalable platforms like SAP S/4HANA,
                ensuring improved performance, enhanced data management, and real-time analytics. It supports
                innovation by integrating advanced technologies, reduces system complexity, and provides a
                foundation for digital transformation, empowering businesses to stay competitive and achieve
                long-term growth with streamlined processes.
            </motion.p>
        </section>
    );
}
