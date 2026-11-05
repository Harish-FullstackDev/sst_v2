"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/AiMl/why-adopt-bg.webp";

export default function WhyAdoptAiMl() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden bg-[#0A2B3E]">
            {/* Fixed-attachment background from sm up (iOS Safari ignores bg-fixed, so phones
                get a plain cover image), with a left-to-right dark gradient so the
                left-aligned text stays legible while the image shows through on the right. */}
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
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
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why Should Your Business Adopt AI &amp; ML?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">
                    Faster, better-informed decisions in a rapidly evolving market.
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
                    AI and ML drive efficiency and innovation by automating tasks, improving decision-making, and
                    enhancing customer experiences. They enable businesses to analyze large datasets quickly, uncover
                    patterns, and generate insights that would be impossible for humans to detect.
                </p>
                <p>
                    By implementing AI &amp; ML, companies can optimize processes, personalize offerings, and predict
                    future trends with greater accuracy. These technologies offer a competitive edge by enabling faster,
                    more informed decisions and empowering businesses to stay ahead.
                </p>
            </motion.div>
        </section>
    );
}
