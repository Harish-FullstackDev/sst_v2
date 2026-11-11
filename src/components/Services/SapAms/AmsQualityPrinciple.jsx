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
                className="relative z-10 w-full flex flex-col justify-center gap-6 sm:gap-10 px-8 py-10 sm:px-16 sm:py-12"
            >
                {/* Heading + subtitle use the same scale, weight and gap-2 as the
                    section headings on this page (What Our SAP AMS Covers). */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Quality &amp; Assurance</h2>
                    <p className="text-white/85 text-base sm:text-lg font-light">
                        The standard every SST support ticket is held to.
                    </p>
                </div>

                {/* w-fit so the figure is exactly as wide as the quote's longest line,
                    letting the attribution align right with where the quote ends. */}
                <figure className="flex flex-col gap-3 w-fit">
                    <blockquote className="text-white text-2xl sm:text-[36px] lg:text-[44px] font-medium leading-tight text-balance relative">
                        {/* Full stop + closing mark hang past "looking" (absolute, no offsets, so
                            they stay at their spot in the line but add no width), letting the
                            figure, and the right-aligned attribution, end at the final "g". */}
                        &ldquo;Quality means doing it right when no one is looking<span className="absolute">.&rdquo;</span>
                    </blockquote>
                    <figcaption className="self-end text-right text-white/80 text-base sm:text-lg font-medium">- Henry Ford</figcaption>
                </figure>
            </motion.div>
        </section>
    );
}
