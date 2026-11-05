"use client";

import { motion } from "framer-motion";
import bandPhoto from "@/assets/Solutions/S4hanaPublicCloud/statement-band.webp";

export default function FitToStandardStatement() {
    return (
        <section className="relative w-full min-h-[300px] sm:min-h-[340px] overflow-hidden bg-[#0A2B3E]">
            {/* Fixed background image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bandPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
            </div>

            {/* min-h instead of a fixed height so the statement can wrap on narrow screens */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 min-h-[300px] sm:min-h-[340px] flex flex-col justify-center gap-4 sm:gap-10 px-8 sm:px-[64px] py-10"
            >
                <h2 className="text-white text-base sm:text-2xl font-light">Fit to Standard</h2>
                <p className="text-white text-xl sm:text-[32px] font-light leading-snug max-w-[980px]">
                    Public cloud ERP pays off when the business adopts SAP&apos;s best-practice processes first, and
                    extends only where it creates real differentiation.
                </p>
            </motion.div>
        </section>
    );
}
