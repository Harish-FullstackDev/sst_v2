"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import glanceImage1 from "@/assets/Services/Azure/at-a-glance-1.webp";
import glanceImage2 from "@/assets/Services/Azure/at-a-glance-2.webp";

export default function AzureAtAGlance() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Transform, Optimize, Thrive.</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Azure Specialist • Certified Cloud Architect • Agile Implementation
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[clamp(3rem,7vw,100px)]"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">
                            A Cloud Platform Beyond Traditional IT
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Microsoft Azure delivers a state-of-the-art cloud platform, surpassing traditional IT
                            frameworks with advanced security, seamless scalability, and integrated AI-driven
                            innovations, empowering businesses to achieve their goals effectively.
                        </p>
                    </div>
                    <div className="relative w-full lg:w-[45%] lg:max-w-[560px] aspect-[560/297] shrink-0 bg-[#565656] overflow-hidden">
                        <Image src={glanceImage1} alt="Professional reviewing documents at a desk in a glass office" fill className="object-cover" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    // Image first in the DOM so the lg row alternates against the row above;
                    // reversed when stacked so the text still leads on mobile.
                    className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-[clamp(3rem,7vw,100px)]"
                >
                    <div className="relative w-full lg:w-[45%] lg:max-w-[560px] aspect-[560/297] shrink-0 bg-[#565656] overflow-hidden">
                        <Image src={glanceImage2} alt="Smiling professional working on a laptop in a bright office" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">Why Azure?</h2>
                        <p className="text-[#2E3033] text-base sm:text-lg font-normal">
                            Reimagine your cloud infrastructure for a competitive edge.
                        </p>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Microsoft Azure provides dynamic cloud solutions, robust analytics, enterprise-grade
                            security, and seamless integrations with the Microsoft ecosystem. These tools drive
                            innovation, enhance operational efficiency, and optimize resources to achieve greater
                            business success.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
