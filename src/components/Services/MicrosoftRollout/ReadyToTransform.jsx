"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/sst-cta.webp";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

export default function ReadyToTransform({
    title = "Ready to Transform Your Business?",
    description = "Discover the possibilities. Contact us for a personalized demo.",
    buttonLabel = "Get in Touch",
    bgImage = ctaBg,
}) {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleContactClick = () => {
        setShowCalendly(true);
    };

    return (
        <>
            <section className="relative z-0 w-full overflow-hidden">
                <Image src={bgImage} alt="" fill className="object-cover object-bottom" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/72 to-black/36" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 px-6 sm:px-[64px] pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20"
                >
                    <div className="flex flex-col w-full md:gap-12 sm:w-[60%] lg:w-[74%] text-center sm:text-left items-center sm:items-start">
                        <h2 className="text-xl sm:text-4xl md:text-5xl font-semibold text-white">
                            {title}
                        </h2>

                        <p className=" text-base sm:text-2xl font-light text-white">
                            {description}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleContactClick}
                        className="shrink-0 rounded-none border border-[#d0d0d0] px-6 sm:px-[24px] py-2 sm:py-[8px] text-lg font-light text-white transition-colors hover:bg-white hover:text-black"
                    >
                        {buttonLabel}
                    </button>
                </motion.div>
            </section>

            {/* Calendly Modal */}
            <CalendlyModal
                isOpen={showCalendly}
                onClose={() => setShowCalendly(false)}
                calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
                pageSettings={{
                    backgroundColor: "ffffff",
                    primaryColor: "#2d8ec5",
                    textColor: "#003756",
                }}
            />
        </>
    );
}
