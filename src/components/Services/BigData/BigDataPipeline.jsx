"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ingestPhoto from "@/assets/Services/BigData/pipeline-ingest.webp";
import processPhoto from "@/assets/Services/BigData/pipeline-process.webp";
import storePhoto from "@/assets/Services/BigData/pipeline-store.webp";
import governPhoto from "@/assets/Services/BigData/pipeline-govern.webp";

const STAGES = [
    {
        title: "Ingest",
        desc: "Integrate diverse sources so data flows seamlessly into one platform for comprehensive analysis.",
        img: ingestPhoto,
    },
    {
        title: "Process",
        desc: "Process data at speed with distributed engines built for efficient large-scale analytics.",
        img: processPhoto,
    },
    {
        title: "Store",
        desc: "Securely store and scale structured and unstructured data in the cloud.",
        img: storePhoto,
    },
    {
        title: "Govern",
        desc: "Keep data governed, high quality, and compliant so every decision rests on reliable information.",
        img: governPhoto,
    },
];

export default function BigDataPipeline() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">The Big Data Pipeline</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    How data moves from raw sources to trusted, analysis-ready information.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                {STAGES.map((stage, index) => (
                    <motion.div
                        key={stage.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="group relative h-[300px] sm:h-[380px] lg:h-[460px] overflow-hidden"
                    >
                        <Image
                            src={stage.img}
                            alt={stage.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
                        <div className="absolute inset-0 bg-[#2d8ec5]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                        <span className="absolute top-5 left-6 sm:left-8 text-white/90 text-base sm:text-lg font-light">
                            0{index + 1}
                        </span>

                        {/* Description always visible below lg (no hover on touch), revealed on hover at lg */}
                        <div className="absolute inset-x-6 sm:inset-x-8 bottom-6 sm:bottom-8 flex flex-col gap-3">
                            <h2 className="text-white text-xl sm:text-[28px] font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                                {stage.title}
                            </h2>
                            <p className="text-white text-sm sm:text-base font-light overflow-hidden transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:-translate-y-2 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                                {stage.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
