"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import nlpPhoto from "@/assets/Services/AiMl/service-nlp.webp";
import visionPhoto from "@/assets/Services/AiMl/service-computer-vision.webp";
import predictivePhoto from "@/assets/Services/AiMl/service-predictive.webp";
import recommendationPhoto from "@/assets/Services/AiMl/service-recommendation.webp";
import rpaPhoto from "@/assets/Services/AiMl/service-rpa.webp";
import chatbotsPhoto from "@/assets/Services/AiMl/service-chatbots.webp";

const TABS = [
    {
        title: "Natural Language Processing (NLP)",
        desc: "Empower your business with advanced text analysis, sentiment detection, machine translation, and automated speech recognition to unlock deeper insights from customer communications, documents, and more.",
        img: nlpPhoto,
    },
    {
        title: "Computer Vision",
        desc: "Leverage cutting-edge image classification, object detection, facial recognition, and optical character recognition (OCR) to transform visual data into actionable insights across industries like retail, security, healthcare, and more.",
        img: visionPhoto,
    },
    {
        title: "Predictive Analytics",
        desc: "Utilize historical data to forecast future trends, customer behavior, sales performance, and risk management, enabling proactive decision-making and more effective business strategies.",
        img: predictivePhoto,
    },
    {
        title: "Recommendation Systems",
        desc: "Deliver personalized experiences through intelligent recommendation engines for content, products, or services, based on user preferences, behaviors, and browsing patterns, improving customer satisfaction and engagement.",
        img: recommendationPhoto,
    },
    {
        title: "Robotic Process Automation (RPA)",
        desc: "Automate repetitive tasks, from data entry to document processing and customer inquiries, using intelligent bots that increase operational efficiency and reduce human error.",
        img: rpaPhoto,
    },
    {
        title: "Chatbots & Virtual Assistants",
        desc: "Provide seamless, automated customer support and personal task management, delivering instant responses and streamlining workflows for enhanced user satisfaction and reduced operational costs.",
        img: chatbotsPhoto,
    },
];

export default function AiMlServices() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const activeTab = TABS[active];

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col items-center gap-8 sm:gap-[45px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Top AI &amp; ML-Driven Services Boosting Efficiency at SST
                </h2>

                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Six capability areas that turn text, images, data, and conversations into business outcomes.
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-[64px] w-full">
                {/* Tabs — six rows spaced by a gap rather than a fixed h-96 column, so the
                    list height follows the number of tabs. */}
                <div className="flex flex-col justify-between w-full lg:w-[380px] xl:w-[420px] gap-2 shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.title}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center min-h-12 py-2 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-xl xl:text-2xl font-semibold">
                                {tab.title}
                            </h2>
                        </button>
                    ))}
                </div>

                {/* Image panel; below lg the description sits under the image instead of
                    over it, because these descriptions are too long for a phone-sized overlay. */}
                <div className="flex flex-col gap-5 w-full lg:flex-1 lg:min-w-0">
                    <div className="relative w-full aspect-[798/446] overflow-hidden bg-[#565656]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image src={activeTab.img} alt={activeTab.title} fill className="object-cover" />

                                {/* Gradient */}
                                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                                {/* Text (desktop overlay) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="hidden lg:flex absolute left-[48px] right-[48px] bottom-[40px] max-w-[560px] text-white flex-col gap-3"
                                >
                                    <h2 className="text-xl font-semibold">{activeTab.title}</h2>
                                    <p className="text-white/90 text-lg font-light leading-relaxed">{activeTab.desc}</p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text (mobile / tablet) */}
                    <div className="lg:hidden flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-xl font-semibold">{activeTab.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{activeTab.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
