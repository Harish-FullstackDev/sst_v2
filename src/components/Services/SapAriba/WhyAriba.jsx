"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/SapAriba/why-ariba-bg.webp";

export default function WhyAriba() {
    return (
        <section className="relative w-full bg-[#1c5f85] px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo with a left-to-right gradient. The gradient is nested
                inside the bg div (no negative z-index), because a negative-z child would paint
                behind this section's own #1c5f85 fallback and disappear. */}
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
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why Choose SAP Ariba for Your Business?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Optimize procurement and supplier management.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1152px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    SAP Ariba empowers businesses by simplifying procurement processes, enhancing supplier
                    collaboration, and enabling real-time insights for smarter, data-driven decisions.
                </p>
                <p className="text-base sm:text-lg text-white/80">
                    SAP Ariba Methodology · Best Practices for Procurement Transformation · Streamlined Supplier
                    Collaboration
                </p>
            </motion.div>
        </section>
    );
}
