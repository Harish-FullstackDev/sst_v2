"use client";
import { motion } from "framer-motion";
import statementPhoto from "@/assets/Services/GrowWithSap/statement-bg.webp";

export default function GrowStatement() {
    return (
        <section className="relative w-full min-h-[300px] sm:min-h-[340px] flex overflow-hidden bg-[#0A2B3E]">
            {/* Fixed background image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${statementPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col justify-center gap-4 sm:gap-12 px-8 sm:px-[64px] py-10"
            >
                <h2 className="text-white text-base sm:text-2xl font-light">Built to Scale</h2>
                <p className="text-white text-xl sm:text-[32px] font-light leading-snug max-w-[960px]">
                    “Start on a clean, standard cloud core, and keep growing on it without starting over.”
                </p>
            </motion.div>
        </section>
    );
}
