"use client";
import { motion } from "framer-motion";
import bgPhoto from "@/assets/Services/RoboticProcessAutomation/why-rpa-bg.webp";

export default function WhyRpa() {
    return (
        // min-h instead of a fixed height so the quote plus its supporting line never clip.
        <section className="relative w-full min-h-[300px] sm:min-h-[380px] overflow-hidden bg-[#0A3A52]">
            {/* Fixed background from sm up; iOS Safari ignores bg-fixed, so phones get a plain cover image */}
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 min-h-[300px] sm:min-h-[380px] flex flex-col justify-center gap-4 sm:gap-8 px-8 sm:px-[64px] py-10 sm:py-16"
            >
                <h2 className="text-white text-base sm:text-2xl font-light">Why RPA?</h2>
                <p className="text-white text-xl sm:text-[32px] font-light leading-snug max-w-[900px]">
                    “Enhance and Evolve with Robotic Process Automation.”
                </p>
                <p className="text-white/90 text-base sm:text-lg font-light max-w-[760px]">
                    RPA drives efficiency, automates repetitive tasks, improves accuracy, and enables faster
                    decision-making for competitive advantage and growth.
                </p>
            </motion.div>
        </section>
    );
}
