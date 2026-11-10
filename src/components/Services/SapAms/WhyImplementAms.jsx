"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Services/SapAms/overview.webp";

const CREDENTIALS = ["SAP AMS", "Cost and Risk Reduction", "Tailored Support Services"];

export default function WhyImplementAms() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Why Implement Application Management Services?
                </h2>
                <p className="text-[#2d8ec5] text-lg sm:text-xl font-light">Reduce, Secure, Enhance.</p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    SAP AMS reduces costs, mitigates risks, and ensures smooth operations with tailored support and
                    maintenance for efficient SAP technology management.
                </p>

                {/* Credentials strip from the old page, set as quiet chips under the intro copy */}
                <ul className="flex flex-wrap gap-3 pt-2">
                    {CREDENTIALS.map((item) => (
                        <li
                            key={item}
                            className="border border-[#d3dae2] px-4 py-2 text-[#55595E] text-sm sm:text-base font-light"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[45%] lg:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="SAP support analyst reviewing service requests" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
