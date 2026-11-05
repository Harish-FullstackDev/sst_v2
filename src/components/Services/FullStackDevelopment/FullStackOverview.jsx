"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/FullStackDevelopment/overview.webp";

const CREDENTIALS = [
    "Full-Stack Development",
    "Proficient in Front-End and Back-End Technologies",
    "Agile Development Expert",
];

export default function FullStackOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-16"
            >
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">Why Full-Stack Development?</h2>
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {CREDENTIALS.map((label) => (
                        <li
                            key={label}
                            className="border border-[#d3dae2] px-3 sm:px-4 py-1.5 text-sm sm:text-base font-light text-[#2E3033]"
                        >
                            {label}
                        </li>
                    ))}
                </ul>
                <p className="max-w-[900px] text-base sm:text-lg font-light text-[#55595E]">
                    Full-Stack Development provides comprehensive web solutions, integrating advanced front-end
                    interfaces with robust back-end systems for optimal performance and seamless user experiences.
                </p>
            </motion.div>

            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[clamp(3rem,8vw,143px)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex w-full flex-1 flex-col gap-5"
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#2E3033]">
                        Innovate and streamline web applications.
                    </h2>
                    <p className="text-base sm:text-lg font-light leading-normal text-[#55595E]">
                        Full-stack development offers versatility, enabling seamless integration of front-end and
                        back-end, resulting in efficient, cohesive, and scalable web solutions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full shrink-0 overflow-hidden lg:w-[42%] lg:max-w-[567px] aspect-[467/357]"
                >
                    <Image src={overviewPhoto} alt="Modern office workspace" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
