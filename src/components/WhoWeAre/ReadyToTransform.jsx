"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/sst-cta.webp";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

export default function ReadyToTransform() {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleContactClick = () => {
        setShowCalendly(true);
    };

    return (
        <>
            <section className="relative z-0 w-full overflow-hidden">
                <Image src={ctaBg} alt="" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 px-6 sm:px-[64px] py-14 sm:py-16 lg:py-0 lg:min-h-[288px]"
                >
                    <div className="flex flex-col gap-3 w-full sm:w-[60%] lg:w-[74%] text-center sm:text-left items-center sm:items-start">
                        <h2 className="text-2xl sm:text-[32px] lg:text-[40px] leading-tight font-semibold text-white">
                            Let&apos;s Shape What&apos;s Next, Together.
                        </h2>

                        <p className="text-base sm:text-xl font-light text-white/90">
                            Transform business ambitions into measurable outcomes through trusted expertise.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleContactClick}
                        className="shrink-0 rounded-none border border-[#d0d0d0] px-6 sm:px-[24px] py-2 sm:py-[8px] text-lg font-light text-white transition-colors hover:bg-white hover:text-black"
                    >
                        Book a Consultation
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

