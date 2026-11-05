"use client";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/Solutions/HumanCapitalManagement/Intelligent_Cost_of_Inefficency.webp";

export default function HcmStatement() {
    return (
        <section className="relative w-full min-h-[300px] sm:min-h-[340px] flex overflow-hidden bg-[#1c5f85]">
            {/* Fixed background image with a left-to-right gradient for legibility */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${buildingPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col justify-center gap-4 sm:gap-12 px-8 py-10 sm:px-[64px] sm:py-16"
            >
                <h2 className="text-white text-base sm:text-2xl font-light">From Hire to Retire</h2>
                <p className="text-white text-xl sm:text-[32px] font-light leading-snug max-w-[980px]">
                    &ldquo;Every payslip, leave request, and promotion draws on the same employee record, so it has
                    to be right the first time.&rdquo;
                </p>
            </motion.div>
        </section>
    );
}
