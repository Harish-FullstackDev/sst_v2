"use client";

import { motion } from "framer-motion";
import bgImage from "@/assets/Services/InternetOfThings/industries-bg.webp";

// Industries drawn from where the old-site services are applied.
const INDUSTRIES = [
    {
        title: "Manufacturing",
        desc: "Predictive maintenance and automated control of industrial machinery.",
    },
    {
        title: "Logistics & Supply Chain",
        desc: "Real-time asset tracking with IoT sensors and GPS technology.",
    },
    {
        title: "Healthcare",
        desc: "Wearable devices that track vital signs for remote health management.",
    },
    {
        title: "Smart Buildings",
        desc: "Remote management of thermostats, lighting systems, and climate controls.",
    },
];

export default function IotIndustries() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0A2B3E]">
            <div
                className="absolute inset-0 bg-cover sm:bg-fixed bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/55" />
            </div>

            <div className="relative z-10 w-full px-8 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Where IoT Creates Value</h2>
                    <p className="text-white/90 text-base sm:text-lg font-light">
                        IoT improves quality, safety, and sustainability across industries.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                    {INDUSTRIES.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group flex flex-col gap-3 border border-white/25 bg-white/10 backdrop-blur-sm px-6 py-8 transition-colors duration-300 hover:bg-[#2d8ec5]/80 hover:border-[#2d8ec5]"
                        >
                            <h2 className="text-white text-xl font-semibold">{industry.title}</h2>
                            <p className="text-white/90 text-base sm:text-lg font-light">{industry.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
