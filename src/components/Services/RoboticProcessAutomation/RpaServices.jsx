"use client";

import { useEffect, useRef, useState } from "react";
import { LuBot, LuChartColumn, LuKeyboard, LuReceipt, LuUserPlus, LuWorkflow } from "react-icons/lu";
import { motion } from "framer-motion";
import useAutoScroll from "@/lib/useAutoScroll";

const CARDS = [
    {
        title: "Data Entry Automation",
        desc: "Automates the entry of data across systems, reducing errors and speeding up processing time.",
        icon: LuKeyboard,
    },
    {
        title: "Workflow Automation",
        desc: "Automates end-to-end processes such as document handling, approvals, and invoicing, improving consistency and efficiency.",
        icon: LuWorkflow,
    },
    {
        title: "Customer Onboarding",
        desc: "Streamlines the onboarding process by automating form filling, document verification, and account setup, reducing time and manual effort.",
        icon: LuUserPlus,
    },
    {
        title: "Invoice Processing",
        desc: "Automates the processing and validation of invoices, minimizing human errors and accelerating payment cycles.",
        icon: LuReceipt,
    },
    {
        title: "Automated Reporting",
        desc: "Automatically compiles and generates reports from multiple data sources, saving time and ensuring accuracy.",
        icon: LuChartColumn,
    },
    {
        title: "Chatbots & Virtual Assistants",
        desc: "Automates customer interactions, supporting 24/7 customer service and improving response time for inquiries and tasks.",
        icon: LuBot,
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

export default function RpaServices() {
    const trackRef = useRef(null);
    const pauseAutoScroll = useAutoScroll(trackRef);
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
        const amount = card ? card.offsetWidth + 20 : 335;
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-[80px] max-w-[1637px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[340px] shrink-0 lg:pt-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Transformative <span className="text-[#2D8EC5]">RPA Services</span> at SST</h2>
                    <p className="text-[#55595E] text-base sm:text-xl font-light">
                        Software robots that take on the repetitive, rules-based work across your core business
                        processes.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 w-full min-w-0">
                    {/* Cards sized a bit larger than Figma's literal 314x339 so the same
                        "~2 full + one card cut roughly halfway into view" viewport ratio
                        Figma shows holds on real desktop widths — Figma's frame was authored
                        at a narrower reference width, so copying its exact card px left more
                        of the row visible than intended. Tuned against the actual rendered
                        viewport rather than Figma's reference frame width. */}
                    {/* whileInView lives on the track, not per-card: each card's own bounding
                        box stays laid out at full width even while horizontally scrolled out
                        of view inside this overflow-x container, so a per-card viewport
                        trigger would fire (and visibly animate) every time a card scrolls
                        into view — this made cards appear to jump vertically mid-scroll.
                        Triggering once from the track and cascading via variants avoids that
                        while keeping the staggered reveal. */}
                    <motion.div
                        ref={trackRef}
                        onScroll={updateScrollState}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        // overflow-y-hidden is load-bearing, not decoration: setting only
                        // overflow-x makes the other axis compute to `auto` instead of
                        // `visible`, so the track was also a vertical scroll container and a
                        // touch drag could nudge the cards a few px up or down. Pinning y to
                        // hidden leaves the horizontal axis as the only one that moves, and
                        // overscroll-x-contain keeps a swipe past either end from chaining out
                        // to whatever scrolls behind it.
                        className="flex gap-8 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
                    >
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={`${card.title}-${index}`}
                                data-card
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                // Height is a floor at every width, not a fixed size: the longer
                                // descriptions ("Customer Onboarding") run past a hard 360px. The
                                // track is a flex row with the default stretch alignment, so every
                                // card still matches the tallest one and the row stays even.
                                className="snap-start shrink-0 w-[260px] sm:w-[335px] min-h-[280px] sm:min-h-[360px] bg-white border border-black/[0.35] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-center text-center px-6 sm:px-7 py-7 sm:py-8"
                            >
                                <card.icon aria-hidden="true" strokeWidth={1.5} className="size-[44px] mb-5 text-[#1C5F85]" />
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light mt-5">{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex items-center justify-center lg:justify-end gap-6">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => { pauseAutoScroll(); scrollByCard(-1); }}
                            disabled={!canScrollLeft}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollLeft ? "text-black hover:scale-110" : "text-[#c7c7c7]"
                                }`}
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => { pauseAutoScroll(); scrollByCard(1); }}
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




