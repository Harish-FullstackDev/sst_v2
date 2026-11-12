"use client";

import { useEffect, useRef, useState } from "react";
import { LuChartColumn, LuCloud, LuGlobe, LuHandshake, LuLightbulb, LuRefreshCw, LuShieldCheck, LuTrendingUp, LuZap } from "react-icons/lu";
import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Scalable Cloud Solutions",
        desc: "Enables seamless growth with flexible, scalable cloud infrastructure and applications.",
        icon: LuCloud,
    },
    {
        title: "Integrated Innovation",
        desc: "Access to cutting-edge tools, like AI and machine learning.",
        icon: LuLightbulb,
    },
    {
        title: "Data-Driven Decisions",
        desc: "Leverages advanced analytics for real-time, informed decision-making processes.",
        icon: LuChartColumn,
    },
    {
        title: "Agile Business Processes",
        desc: "Customizable and modular solutions streamline operations and enhance efficiency.",
        icon: LuRefreshCw,
    },
    {
        title: "Accelerated Transformation",
        desc: "Rapid implementation reduces time to value for businesses and investors.",
        icon: LuZap,
    },
    {
        title: "Global Reach",
        desc: "Serves clients worldwide with localized, adaptable industry solutions.",
        icon: LuGlobe,
    },
    {
        title: "Long-Term Growth",
        desc: "Future-proof solutions designed to adapt to evolving business needs.",
        icon: LuTrendingUp,
    },
    {
        title: "Comprehensive Security",
        desc: "Built-in security and compliance measures safeguard client data and operations.",
        icon: LuShieldCheck,
    },
    {
        title: "Collaborative Ecosystem",
        desc: "Strong partnerships with SAP and industry leaders drive shared success.",
        icon: LuHandshake,
    },
];

function ArrowIcon({ direction }) {
    return (
        <svg
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-full ${direction === "left" ? "-rotate-90" : "rotate-90"}`}
        >
            <path
                d="M22.7459 37.9097V7.58181M11.373 18.9548L22.7459 7.58181L34.1189 18.9548"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function RiseDifferentiators() {
    const trackRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        updateScrollState();
        const onResize = () => updateScrollState();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const scrollByCard = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const amount = card ? card.offsetWidth + 32 : 335;
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-[80px] max-w-[1637px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[340px] shrink-0 lg:pt-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Key <span className="text-[#2D8EC5]">Differentiators</span></h2>
                    <p className="text-[#55595E] text-xl font-light">
                        What Rise with SAP brings to the business, and what we focus on while delivering it.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 w-full min-w-0">
                    {/* whileInView lives on the track, not per-card: horizontally scrolled-out
                        cards are still laid out, so a per-card trigger would re-fire as each one
                        scrolls into view. One trigger on the track cascades via variants. */}
                    <motion.div
                        ref={trackRef}
                        onScroll={updateScrollState}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        // overflow-y-hidden keeps the track from also becoming a vertical scroll
                        // container; overscroll-x-contain stops swipes chaining to the page.
                        className="flex gap-8 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
                    >
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={`${card.title}-${index}`}
                                data-card
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                // Height is a floor, not a fixed size, so longer copy grows the card
                                // and the default stretch alignment keeps the row even.
                                className="snap-start shrink-0 w-[260px] sm:w-[335px] min-h-[280px] sm:min-h-[320px] bg-white border border-black/[0.35] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-center text-center px-6 sm:px-7 py-7 sm:py-8"
                            >
                                <card.icon aria-hidden="true" strokeWidth={1.5} className="mb-5 size-11 text-[#1C5F85]" />
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light mt-5">{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex items-center justify-center lg:justify-end gap-6">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scrollByCard(-1)}
                            disabled={!canScrollLeft}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollLeft ? "text-black hover:scale-110" : "text-[#c7c7c7]"
                                }`}
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scrollByCard(1)}
                            disabled={!canScrollRight}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollRight ? "text-black hover:scale-110" : "text-[#c7c7c7]"
                                }`}
                        >
                            <ArrowIcon direction="right" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
