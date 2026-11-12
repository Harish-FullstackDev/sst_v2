"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuBlocks, LuCompass, LuPlug, LuShieldCheck, LuTrendingUp, LuUsers } from "react-icons/lu";

const FEATURES = [
    {
        icon: LuCompass,
        title: "Strategic Deployment Planning",
        desc: "Tailored rollout strategies designed to align with your business goals and operational requirements.",
    },
    {
        icon: LuPlug,
        title: "Seamless System Integration",
        desc: "Smooth integration of Microsoft solutions into existing IT ecosystems, ensuring uninterrupted workflows.",
    },
    {
        icon: LuUsers,
        title: "Change Management Support",
        desc: "Comprehensive training, support, and communication plans to guide teams through transitions effectively.",
    },
    {
        icon: LuShieldCheck,
        title: "Risk Assessment and Mitigation",
        desc: "Proactive identification and resolution of potential risks for a secure and reliable deployment process.",
    },
    {
        icon: LuTrendingUp,
        title: "Scalable Rollout Solutions",
        desc: "Flexible deployment options that adapt to organizational size and complexity, ensuring efficient implementation.",
    },
    {
        icon: LuBlocks,
        title: "Microsoft Ecosystem Integration",
        desc: "Leverage seamless connectivity with Microsoft 365, Azure, and Dynamics 365 for a unified digital environment.",
    },
];

// No photos: one quiet, editorial composition instead of a grid of tiles.
// The navy panel carries the open feature's Lucide icon (same set as the rest of
// the site), drawn very large in a fine line and set low and off-centre inside the panel, and it
// draws itself stroke by stroke each time the feature changes, like a pen
// sketch, with the feature title set lightly at the top. A soft deep-blue lift
// rises from the foot. One focal point, slow easing, nothing tiled or labelled.
const DRAW_KEYFRAMES = "@keyframes rollout-draw { to { stroke-dashoffset: 0; } }";

function FeaturePanel({ feature }) {
    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
            <style>{DRAW_KEYFRAMES}</style>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_65%)]" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                >
                    <p className="absolute top-10 left-10 right-10 xl:top-12 xl:left-12 text-white/85 text-2xl xl:text-[28px] font-light leading-snug max-w-[340px]">
                        {feature.title}
                    </p>
                    {/* Every stroke starts fully dashed-out and draws in; 100 covers the
                        longest Lucide path on its 24-unit grid. */}
                    <feature.icon
                        strokeWidth={0.6}
                        className="absolute bottom-[8%] right-[8%] w-[52%] h-auto text-white/55 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[rollout-draw_2.2s_cubic-bezier(0.65,0,0.35,1)_0.15s_forwards]"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function RolloutFeatures() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px] mb-8 sm:mb-12"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Plan, Deploy, Succeed.</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Key Features of <span className="text-[#2D8EC5]">Microsoft Rollout</span> Services</h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
                {/* Accordion: one feature open at a time; drives the drawn-icon panel on desktop */}
                <div className="w-full lg:flex-1 lg:min-w-0 flex flex-col border-t border-[#D5D9DE]">
                    {FEATURES.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.title} className="border-b border-[#D5D9DE]">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left"
                                >
                                    <span
                                        className={`flex-1 text-lg sm:text-2xl transition-colors duration-300 ${isOpen ? "text-[#2E3033] font-semibold" : "text-[#55595E] font-light"
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-[#2d8ec5] text-2xl font-light leading-none shrink-0"
                                        aria-hidden="true"
                                    >
                                        +
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-4 pb-6 pr-8 sm:pr-12">
                                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop drawn-icon panel (accordion text carries the content on smaller screens) */}
                <div className="hidden lg:block relative w-[40%] shrink-0 min-h-[520px] overflow-hidden">
                    <FeaturePanel feature={FEATURES[openIndex]} />
                </div>
            </div>
        </section>
    );
}
