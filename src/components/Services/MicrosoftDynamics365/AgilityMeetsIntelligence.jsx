"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/MicrosoftDynamics365/agility-band.webp";

export default function AgilityMeetsIntelligence() {
    return (
        <section className="relative w-full bg-[#1c5f85] px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo with a left-to-right dark gradient so the left-aligned
                copy stays legible. bg-[#1c5f85] is the fallback while the image loads (and the
                band still reads as intended where bg-fixed is ignored, e.g. iOS Safari). */}
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
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Where Agility Meets Intelligence</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Enterprise-grade ERP sized for growing businesses</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    Business Central gives small and mid-sized organizations one system for financials, operations,
                    and customer data, without the overhead of running a large ERP on their own servers.
                </p>
                <p>
                    Connected to Power BI, Power Automate, and Microsoft 365, the same data that runs daily
                    transactions becomes the insight teams use to decide what to do next.
                </p>
            </motion.div>
        </section>
    );
}
