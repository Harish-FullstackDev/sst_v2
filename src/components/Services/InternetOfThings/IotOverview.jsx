"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/InternetOfThings/overview.webp";

const CREDENTIALS = [
    "IoT Specialist",
    "Certified IoT Solutions Architect",
    "Pioneer of Smart Solutions",
];

export default function IotOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f5f6f6]">
            {/* Image leads on desktop for this page; text comes first when stacked */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[120px]">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full lg:w-[520px] lg:max-w-[42%] shrink-0 aspect-[520/380] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="Close-up of wireless connectivity controls on a smartphone screen" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[700px] flex flex-col gap-2"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Connect, Automate, Excel.</p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Intelligent Connectivity for Smarter Operations
                    </h2>
                    <p className="text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        The Internet of Things (IoT) revolutionizes industries with intelligent connectivity, real-time
                        insights, and automation, enabling smarter, data-driven operations.
                    </p>

                    {/* Credentials strip from the old page, shown as chips */}
                    <ul className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                        {CREDENTIALS.map((item) => (
                            <li
                                key={item}
                                className="border border-[#2d8ec5]/50 bg-white px-3 py-1 text-sm sm:text-base font-light text-[#2d8ec5]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
