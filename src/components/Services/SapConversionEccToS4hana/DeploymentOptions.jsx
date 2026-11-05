"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/SapConversionEccToS4hana/deployment-band.webp";

export default function DeploymentOptions() {
    return (
        <section className="relative w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-10 overflow-hidden">
            {/* Fixed-attachment photo with a left-to-right dark gradient nested inside
                it, so the left-aligned text stays legible while the image shows through
                on the right. Text blocks are `relative` to sit above it. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/20" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-white text-xl sm:text-[28px] font-semibold">Platform &amp; Cloud Deployment Options</h2>
                <p className="text-white/90 text-base sm:text-lg font-light">Choosing where your S/4HANA system runs</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1100px] flex flex-col gap-6 text-white/90 text-lg sm:text-2xl font-light leading-[1.4]"
            >
                <p>
                    SAP develops platform and cloud versions of SAP S/4HANA, with different migration paths available.
                    Experience gained from hundreds of SAP HANA and SAP S/4HANA projects will help customers make the
                    right choice.
                </p>
                <p>You can also host your existing SAP S/4HANA instance in a private, hybrid, or public managed cloud.</p>
            </motion.div>
        </section>
    );
}
