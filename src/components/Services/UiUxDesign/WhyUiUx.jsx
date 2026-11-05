"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/UiUxDesign/why-bg.jpg";

export default function WhyUiUx() {
    return (
        <section className="relative w-full bg-[#1c5f85] px-8 py-14 sm:px-[64px] sm:py-24 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo with a left-to-right gradient, nested inside the bg
                div so it never paints behind the section's fallback colour. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
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
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Why UI/UX Design?</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Innovate and refine user experiences.</p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[960px] text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                UI/UX Design enhances user satisfaction, ensures intuitive interactions, and creates visually
                appealing interfaces, driving engagement and product success.
            </motion.p>
        </section>
    );
}
