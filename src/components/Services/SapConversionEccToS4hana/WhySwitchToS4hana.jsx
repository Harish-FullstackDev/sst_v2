"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whySwitchImage from "@/assets/Services/SapConversionEccToS4hana/why-switch.webp";

const CREDENTIALS = ["S/4HANA Specialist", "Certified Implementation Team", "Agile Execution"];

export default function WhySwitchToS4hana() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col-reverse lg:flex-row gap-8 lg:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full lg:w-[38%] lg:max-w-[442px] aspect-[442/417] shrink-0 self-start overflow-hidden"
            >
                <Image src={whySwitchImage} alt="SAP consultant reviewing an ECC conversion plan" fill className="object-cover" />
            </motion.div>

            {/* Heading block, then the two old-page paragraphs as body copy: the
                short "why convert" statement leads into the longer "why switch". */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Why Switch From ECC to <span className="text-[#2D8EC5]">S/4HANA?</span>
                    </h2>
                    <p className="text-[#2d8ec5] text-lg sm:text-xl font-light">Upgrade and modernize ERP.</p>
                </div>
                <div className="flex flex-col gap-4 text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    <p>
                        SAP ECC to S/4HANA conversion is essential for modernizing your ERP system, leveraging
                        real-time analytics, improved performance, and simplified data models.
                    </p>
                    <p>
                        Migrating from ECC to S/4HANA offers businesses faster, more efficient processes with
                        real-time data insights. S/4HANA simplifies operations, reduces costs, and improves
                        decision-making by leveraging advanced analytics and cloud capabilities. With its modern
                        interface and enhanced user experience, S/4HANA supports business growth, innovation, and
                        scalability. The transition enables businesses to stay competitive and adapt to changing
                        market demands with greater agility and flexibility.
                    </p>
                </div>
                <ul className="flex flex-wrap gap-3">
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
        </section>
    );
}
