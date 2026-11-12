"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import teamPhoto from "@/assets/Services/SapSuccessFactors/intro.webp";

const BOXES = [
    {
        title: "Simplify, Automate, Succeed.",
        desc: "SAP SuccessFactors enhances your talent management by seamlessly integrating employee data, recruitment, performance, and development, ensuring a streamlined and effective approach to managing your workforce from hire to retire.",
    },
    {
        title: "Better Decisions, Stronger Engagement",
        desc: "SAP SuccessFactors helps you streamline your talent management functions, enhance decision-making, and foster stronger employee engagement. This results in reduced turnover, improved performance, and a sustainable competitive advantage.",
    },
];

export default function WhyChooseSuccessFactors() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] bg-[#f5f6f6]">
            {/* The image has no aspect lock at lg: it stretches to the text column's height
                so the boxes never sit in empty space below their copy.
                Two columns share the padded width through proportional flex-grow (≈654:475)
                instead of fixed px, so they scale together at any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                            Why Choose <span className="text-[#2D8EC5]">SAP SuccessFactors</span> for Your Business?
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Transform and optimize your operations.
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
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-8 lg:gap-12 px-6 py-8"
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
                    <Image src={teamPhoto} alt="Diverse HR team collaborating around a meeting table" fill className="object-cover object-center" />
                </motion.div>
            </div>
        </section>
    );
}
