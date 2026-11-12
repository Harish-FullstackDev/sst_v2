"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyPhoto from "@/assets/Services/AiMl/why-ai-ml.webp";

const CREDENTIALS = ["AI & ML Specialist", "Certified Data Scientist", "Agile Development Expert"];

const BOXES = [
    {
        title: "Efficiency and Insight",
        desc: "AI & ML drive efficiency and uncover insights in your data that support every part of the business.",
    },
    {
        title: "Automation and Smarter Decisions",
        desc: "They automate tasks and enable smarter decision-making for competitive advantage and innovation.",
    },
];

export default function WhyAiMl() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] bg-[#f3f6f9]">
            {/* Two columns fill the full padded width via proportional flex-grow (≈654:475)
                instead of fixed px, so they scale together on any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                {/* Left column: title/description sits above the cards, level with the image's top */}
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why <span className="text-[#2D8EC5]">AI &amp; ML?</span></h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">Enhance and Evolve with AI &amp; ML.</p>

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
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-8 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 flex flex-col items-start gap-6 lg:gap-10 px-6 py-8"
                            >
                                <h2 className="text-[#2E3033] text-xl font-semibold">{box.title}</h2>
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
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:min-h-[420px] lg:flex-[475_1_0%] overflow-hidden"
                >
                    <Image src={whyPhoto} alt="Robotic hand and human hand reaching to touch fingertips" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
