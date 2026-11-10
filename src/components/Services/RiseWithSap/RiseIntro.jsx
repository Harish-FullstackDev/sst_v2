"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Services/RiseWithSap/intro.webp";

const CREDENTIALS = ["Rise with SAP Methodology", "Best Course of Action", "Supervised Configuration Support"];

export default function RiseIntro() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Simplify, Automate, Grow.</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Rise with SAP empowers businesses to transform and streamline their operations by integrating
                    and managing finances, operations, and customer relationships efficiently through the SAP
                    S/4HANA ERP suite.
                </p>
                {/* Credentials strip from the original page, rendered as outlined chips so it
                    wraps cleanly at any width instead of running as one bullet-separated line. */}
                <ul className="flex flex-wrap gap-3 pt-2">
                    {CREDENTIALS.map((item) => (
                        <li
                            key={item}
                            className="border border-[#8794A3]/60 px-4 py-2 text-[#2E3033] text-sm sm:text-base font-light"
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
                className="relative w-full sm:w-[44%] lg:w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="Business team reviewing performance charts at a meeting table" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
