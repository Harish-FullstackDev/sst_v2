"use client";

import { motion } from "framer-motion";
import bandPhoto from "@/assets/Services/MicrosoftRollout/statement-band.webp";

export default function RolloutStatement() {
    return (
        <section className="relative w-full min-h-[340px] flex overflow-hidden bg-[#0A2B3E]">
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bandPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
            </div>

            <div className="relative z-10 w-full px-8 py-10 sm:px-[64px] sm:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 lg:gap-16 items-start">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-white text-xl sm:text-[28px] font-semibold leading-snug"
                >
                    Why Choose Microsoft Rollout Services for Your Business?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-5 border-l-2 border-[#2d8ec5] pl-5 sm:pl-8"
                >
                    <p className="text-white/90 text-lg sm:text-2xl font-light leading-[1.45]">
                        Microsoft Rollout Services offer a systematic implementation strategy designed to meet your
                        organization&apos;s unique needs.
                    </p>
                    <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed">
                        From planning to deployment, businesses benefit from expert guidance, minimized risks, and
                        tailored solutions that enhance operational efficiency. These services ensure a seamless
                        transition, allowing businesses to adopt new technologies confidently and effectively.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
