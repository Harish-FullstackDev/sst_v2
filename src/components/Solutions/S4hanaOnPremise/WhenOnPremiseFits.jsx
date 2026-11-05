"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Solutions/S4hanaOnPremise/fit-band.webp";

export default function WhenOnPremiseFits() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo with a left-to-right dark gradient, so the left-aligned
                copy stays legible while the image shows through on the right. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">When On-Premises Is the Right Fit</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">
                    The deployment model should follow your constraints, not the other way around.
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
                    On-premises suits organizations that need full control over where their data lives, operate under
                    strict data-residency or industry regulations, rely on deep custom developments, or have already
                    invested in data center infrastructure and in-house SAP Basis skills.
                </p>
                <p>
                    Where those constraints don&apos;t apply, we compare on-premises against the SAP S/4HANA Cloud
                    public and private editions with you before you commit, so the choice is made on evidence.
                </p>
            </motion.div>
        </section>
    );
}
