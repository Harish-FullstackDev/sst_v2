"use client";
import { motion } from "framer-motion";
import bandPhoto from "@/assets/Services/SapAms/quality-band.webp";

export default function AmsQualityPrinciple() {
    return (
        <section className="relative w-full min-h-[220px] sm:min-h-[371px] overflow-hidden bg-[#0A2B3E] flex">
            {/* Fixed background image, darkened from the left so the white quote stays legible */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bandPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full flex flex-col justify-center gap-4 sm:gap-8 px-8 py-10 sm:px-16 sm:py-12"
            >
                <h2 className="text-white text-2xl font-light">Quality &amp; Assurance</h2>

                <p className="text-white text-base sm:text-lg font-light sm:pb-5">
                    The standard every SST support ticket is held to.
                </p>
                <figure className="flex flex-col gap-3 max-w-[820px]">
                    <blockquote className="text-white text-xl sm:text-[32px] font-light leading-snug">
                        &ldquo;Quality means doing it right when no one is looking.&rdquo;
                    </blockquote>
                    <figcaption className="text-white/80 text-base sm:text-lg font-light">Henry Ford</figcaption>
                </figure>
            </motion.div>
        </section>
    );
}
