"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pilotPhoto from "@/assets/Services/InternetOfThings/pilot.webp";
import scalePhoto from "@/assets/Services/InternetOfThings/scale.webp";

const PHASES = [
    {
        label: "Phase 01",
        title: "Start with a Focused Pilot",
        desc: "We begin with one high-value use case, such as predictive maintenance on critical equipment or real-time tracking of key assets, connecting the right devices and proving the value of the data quickly.",
        points: ["Clear use case and success measures", "Devices and sensors connected", "Early insights from real-time data"],
        img: pilotPhoto,
    },
    {
        label: "Phase 02",
        title: "Scale Across the Business",
        desc: "Once the pilot proves its value, we extend the solution across sites and processes, adding automation and control and feeding device data into wider analytics.",
        points: ["Remote management of devices at scale", "Data-driven automation and control", "Lower costs and less downtime"],
        img: scalePhoto,
    },
];

export default function IotDelivery() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">From Pilot to Scale</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    How we take IoT from a first connected use case to an enterprise-wide capability.
                </p>
            </motion.div>

            <div className="flex flex-col gap-12 sm:gap-16">
                {PHASES.map((phase, index) => {
                    const reversed = index % 2 === 1;
                    return (
                        <div
                            key={phase.title}
                            className={`flex flex-col lg:items-center gap-8 lg:gap-16 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: reversed ? 24 : -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="group relative w-full lg:w-1/2 aspect-[16/10] overflow-hidden shrink-0"
                            >
                                <Image
                                    src={phase.img}
                                    alt={phase.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                className="flex flex-col gap-4 w-full lg:flex-1 lg:min-w-0"
                            >
                                <span className="text-[#2d8ec5] text-base sm:text-lg font-light">{phase.label}</span>
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{phase.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{phase.desc}</p>
                                <ul className="list-disc marker:text-[#2d8ec5] pl-5 space-y-2 text-[#55595E] text-base sm:text-lg font-light">
                                    {phase.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
