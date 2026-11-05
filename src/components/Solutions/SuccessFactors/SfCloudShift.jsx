"use client";

import { motion } from "framer-motion";
import cloudPhoto from "@/assets/Solutions/SuccessFactors/Cloud_Hero.webp";

const POINTS = [
    "SAP-delivered releases instead of periodic upgrade projects",
    "Access for employees and managers from desktop and mobile",
    "Less on-premise infrastructure to buy, host, and maintain",
    "One employee data model across countries and entities",
    "Security and compliance handled in SAP's global data centers",
    "Configuration-led changes rather than custom code",
];

export default function SfCloudShift() {
    return (
        <section className="relative w-full min-h-[460px] sm:min-h-[471px] flex overflow-hidden bg-[#0A3A52]">
            {/* Fixed background image; a gradient keeps the white copy legible over the
                lighter areas of the photo. */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${cloudPhoto.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col justify-center gap-4 sm:gap-6 px-8 sm:px-[64px] py-10 sm:py-14"
            >
                <h2 className="text-white text-xl sm:text-[32px] font-semibold">What Moving HR to the Cloud Changes</h2>

                <p className="text-white text-base sm:text-lg font-light sm:pb-6">
                    The practical differences teams notice once HR runs on SAP SuccessFactors.
                </p>

                <ul className="text-white text-base list-disc font-['Houschka_Pro'] sm:text-lg pl-5 font-light space-y-1">
                    {POINTS.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
