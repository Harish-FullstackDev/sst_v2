"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/CyberSecurity/overview.webp";

const CREDENTIALS = [
    "Cybersecurity Specialist",
    "Certified Security Architect",
    "Defender of Digital Assets",
];

export default function CyberOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f5f6f6]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[143px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[700px] flex flex-col gap-2"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Connect, Innovate, Succeed.</p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        Proactive Defense Against Evolving Threats
                    </h2>

                    <p className="text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        Cybersecurity ensures robust protection against evolving threats, safeguarding your data,
                        systems, and reputation with cutting-edge technologies and proactive defenses.
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[467px] lg:max-w-[40%] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
