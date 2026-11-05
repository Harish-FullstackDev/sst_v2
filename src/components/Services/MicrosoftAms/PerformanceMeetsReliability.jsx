"use client";

import { motion } from "framer-motion";
import bandPhoto from "@/assets/Services/MicrosoftAms/reliability-band.webp";

export default function PerformanceMeetsReliability() {
    return (
        // min-h rather than a fixed height, so the quote can wrap on narrow screens
        // without being clipped by overflow-hidden.
        <section className="relative w-full min-h-[300px] sm:min-h-[340px] overflow-hidden bg-[#0A2B3E]">
            {/* Fixed background image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bandPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 min-h-[300px] sm:min-h-[340px] flex flex-col justify-center gap-4 sm:gap-12 px-8 sm:px-[64px] py-10 sm:py-16"
            >
                <h2 className="text-white text-base sm:text-2xl font-light">Where Performance Meets Reliability</h2>
                <p className="text-white text-lg sm:text-[32px] font-light leading-snug max-w-[1100px]">
                    &ldquo;Applications that are monitored, maintained, and improved every month stop being a source
                    of disruption and become a platform the business can grow on.&rdquo;
                </p>
            </motion.div>
        </section>
    );
}
