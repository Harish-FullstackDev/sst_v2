"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuBot, LuMessagesSquare, LuScanEye, LuTextSearch, LuThumbsUp, LuTrendingUp } from "react-icons/lu";

// No photos. Navy panel (#0A2B3E to #003756) with a soft deep-blue rise, and two
// motions the user liked elsewhere, combined here:
// - the active service's Lucide icon (same set as the rest of the site) sits in
//   the panel's upper right in a fine line and redraws itself stroke by stroke
//   on every tab change (pen-sketch, as on Microsoft Rollout / GCP);
// - a 3px brand-blue timeline along the foot fills over the autoplay interval
//   (as on Microsoft Migration's benefits), hidden while a tab is hovered.
const INTERVAL = 5000;
const DRAW_KEYFRAMES = "@keyframes aiml-draw { to { stroke-dashoffset: 0; } }";

const TABS = [
    {
        title: "Natural Language Processing (NLP)",
        desc: "Empower your business with advanced text analysis, sentiment detection, machine translation, and automated speech recognition to unlock deeper insights from customer communications, documents, and more.",
        icon: LuTextSearch,
    },
    {
        title: "Computer Vision",
        desc: "Leverage cutting-edge image classification, object detection, facial recognition, and optical character recognition (OCR) to transform visual data into actionable insights across industries like retail, security, healthcare, and more.",
        icon: LuScanEye,
    },
    {
        title: "Predictive Analytics",
        desc: "Utilize historical data to forecast future trends, customer behavior, sales performance, and risk management, enabling proactive decision-making and more effective business strategies.",
        icon: LuTrendingUp,
    },
    {
        title: "Recommendation Systems",
        desc: "Deliver personalized experiences through intelligent recommendation engines for content, products, or services, based on user preferences, behaviors, and browsing patterns, improving customer satisfaction and engagement.",
        icon: LuThumbsUp,
    },
    {
        title: "Robotic Process Automation (RPA)",
        desc: "Automate repetitive tasks, from data entry to document processing and customer inquiries, using intelligent bots that increase operational efficiency and reduce human error.",
        icon: LuBot,
    },
    {
        title: "Chatbots & Virtual Assistants",
        desc: "Provide seamless, automated customer support and personal task management, delivering instant responses and streamlining workflows for enhanced user satisfaction and reduced operational costs.",
        icon: LuMessagesSquare,
    },
];

export default function AiMlServices() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, INTERVAL);

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
                    The capability areas that turn text, images, data, and conversations into business outcomes.
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

                {/* Navy panel; below xl the description sits under the panel instead of
                    over it, because these descriptions are too long for a phone-sized overlay. */}
                <div className="flex flex-col gap-5 w-full lg:flex-1 lg:min-w-0">
                    <div className="relative w-full aspect-[798/446] overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
                        <style>{DRAW_KEYFRAMES}</style>
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.35),rgba(28,95,133,0)_65%)]" />

                        {/* Self-drawing icon, upper right, clear of the copy column (keyed so it redraws per tab). */}
                        <activeTab.icon
                            key={active}
                            aria-hidden="true"
                            strokeWidth={0.6}
                            className="absolute top-[12%] right-[7%] h-[48%] w-auto text-white/45 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[aiml-draw_2s_cubic-bezier(0.65,0,0.35,1)_forwards]"
                        />

                        {/* Text (desktop overlay), kept to the left so it never meets the icon */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                                className="hidden xl:flex absolute left-[48px] bottom-[40px] w-[58%] max-w-[560px] text-white flex-col gap-3"
                            >
                                <h2 className="text-xl font-semibold">{activeTab.title}</h2>
                                <p className="text-white/90 text-lg font-light leading-relaxed">{activeTab.desc}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Autoplay timeline: restarts on each tab (keyed), hidden while paused. */}
                        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
                            {!isPaused && (
                                <motion.div
                                    key={active}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                                    className="h-full origin-left bg-[#2D8EC5]"
                                />
                            )}
                        </div>
                    </div>

                    {/* Text (mobile / tablet) */}
                    <div className="xl:hidden flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-xl font-semibold">{activeTab.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{activeTab.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
