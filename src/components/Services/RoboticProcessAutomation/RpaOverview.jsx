"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/RoboticProcessAutomation/overview.webp";

const CREDENTIALS = [
    "Robotic Process Automation Specialist",
    "Certified Data Scientist",
    "Agile Development Expert",
];

export default function RpaOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f5f6f6]">

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[143px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[700px] flex flex-col gap-2"
                >
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Automation That Drives Operational Excellence
                    </h2>

                    <p className="text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        Robotic Process Automation (RPA) delivers powerful automation with real-time data processing,
                        advanced task automation, and efficiency that drives innovation and operational excellence.
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

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1,
                    }}
                    className="relative w-full lg:w-[467px] lg:max-w-[40%] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
