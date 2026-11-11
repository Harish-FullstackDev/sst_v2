"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pilotPhoto from "@/assets/Services/InternetOfThings/pilot.webp";

const BOXES = [
    {
        label: "Phase 01",
        title: "Start with a Focused Pilot",
        desc: "We begin with one high-value use case, such as predictive maintenance on critical equipment or real-time tracking of key assets, connecting the right devices and proving the value of the data quickly.",
    },
    {
        label: "Phase 02",
        title: "Scale Across the Business",
        desc: "Once the pilot proves its value, we extend the solution across sites and processes, adding automation and control and feeding device data into wider analytics.",
    },
];

export default function IotDelivery() {
    return (
        <section className="w-full py-16 px-8 sm:px-[64px] bg-[#f5f6f6]">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">From Pilot to Scale</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            How we take IoT from a first connected use case to an enterprise-wide capability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-8 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-12 lg:gap-16 px-6 py-8"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#2d8ec5] text-sm uppercase tracking-[0.18em]">{box.label}</p>
                                    <h2 className="text-[#2E3033] text-xl font-semibold">{box.title}</h2>
                                </div>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{box.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] aspect-auto lg:aspect-[475/563] overflow-hidden"
                >
                    <Image src={pilotPhoto} alt="Engineers inspecting connected equipment on a factory floor" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}

