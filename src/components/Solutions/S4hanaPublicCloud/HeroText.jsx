"use client";

import { motion } from "framer-motion";

export default function HeroText() {
    return (
        <div className="absolute inset-x-0 top-[18%] sm:top-[23%] px-8 py-6 sm:py-0 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[1057px]"
            >
                <p className="text-white/90 text-sm sm:text-lg lg:text-xl uppercase tracking-wide font-light">
                    ERP Solutions · SAP S/4HANA Cloud
                </p>
                <div className="mt-3 sm:mt-1 h-px w-full bg-white/40" />
                <h1 className="text-white text-xl sm:text-4xl lg:text-5xl font-semibold capitalize mt-6 sm:mt-6 leading-tight">
                    SAP S/4HANA Public Cloud
                </h1>
                {/* Credentials strip from the old page, kept as the hero subline */}
                <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-lg font-light">
                    Scalable Cloud Infrastructure • Ongoing Cloud Environment Management • Expert SAP Cloud Support Team
                </p>
            </motion.div>
        </div>
    );
}
