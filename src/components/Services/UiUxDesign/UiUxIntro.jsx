"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introPhoto from "@/assets/Services/UiUxDesign/intro.jpg";

const CREDENTIALS = ["UI/UX Artisan", "Certified Experience Innovator", "Agile Interaction Designer"];

export default function UiUxIntro() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f5f6f6]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[120px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[700px] flex flex-col gap-2"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Design, Optimize, Delight.</p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Elevate Your Brand With Intuitive, <span className="text-[#2D8EC5]">User-Centric Design</span>
                    </h2>

                    <p className="pt-2 text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        UI/UX Design delivers intuitive experiences, surpassing traditional interfaces with seamless
                        interactions, enhanced usability, and visually engaging elements.
                    </p>

                    <ul className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                        {CREDENTIALS.map((label) => (
                            <li
                                key={label}
                                className="border border-[#d3dae2] bg-white px-3 sm:px-4 py-1.5 text-sm sm:text-base font-light text-[#2E3033]"
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
                    className="relative w-full lg:w-[467px] lg:max-w-[40%] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={introPhoto} alt="Designer workstation showing interface layouts" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
