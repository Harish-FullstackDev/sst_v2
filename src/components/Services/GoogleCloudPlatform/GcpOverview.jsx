"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Services/GoogleCloudPlatform/overview.webp";

// Credentials strip from the original GCP page, rendered as chips under the intro.
const CREDENTIALS = ["GCP Specialist", "Certified Cloud Architect Team", "Agile Deployment"];

export default function GcpOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Migrate, Innovate, Accelerate with <span className="text-[#2D8EC5]">Google Cloud Platform</span>
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Google Cloud Platform redefines IT with modern infrastructure, real-time insights, and
                    automated processes, enabling businesses to scale effortlessly and achieve operational
                    excellence.
                </p>
                <ul className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                    {CREDENTIALS.map((label) => (
                        <li
                            key={label}
                            className="border border-[#d3dae2] px-3 sm:px-4 py-1.5 text-sm sm:text-base font-light text-[#2E3033]"
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full lg:w-[40%] lg:max-w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="Team working on laptops with charts and reports on the desk" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
