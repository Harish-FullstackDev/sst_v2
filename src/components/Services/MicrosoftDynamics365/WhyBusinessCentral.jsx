"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Services/MicrosoftDynamics365/why-business-central.webp";

const CREDENTIALS = [
    "Microsoft Sure Step Methodology",
    "Optimal Implementation Strategy",
    "Guided Setup Assistance",
];

export default function WhyBusinessCentral() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1 min-w-0"
            >
                {/* Credentials strip from the original page, set as outlined chips above the heading */}
                <ul className="flex flex-wrap gap-2 sm:gap-3">
                    {CREDENTIALS.map((item) => (
                        <li
                            key={item}
                            className="border border-[#2d8ec5]/50 px-3 py-1 text-[#1c5f85] text-sm sm:text-base font-light"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Why Dynamics 365 Business Central?
                </h2>
                <p className="text-[#2E3033] text-base sm:text-xl font-light">
                    Optimize and streamline business operations.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Dynamics 365 Business Central streamlines operations, integrates finances, boosts productivity,
                    and scales with business growth effectively and efficiently.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[44%] lg:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="Team reviewing financial charts on a tablet and printed reports" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
