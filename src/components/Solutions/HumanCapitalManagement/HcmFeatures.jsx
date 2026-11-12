"use client";

import { useEffect, useRef, useState } from "react";
import { LuBanknote, LuChartColumn, LuClock, LuScale, LuStar, LuUserCog, LuUserPlus, LuUsers } from "react-icons/lu";
import { motion, useInView } from "framer-motion";

const CARDS = [
    {
        title: "Core HR Management",
        desc: "Keep employee records, roles, and reporting lines accurate with Personnel Administration and Organizational Management.",
        icon: LuUsers,
    },
    {
        title: "Time & Attendance Management",
        desc: "Automate time tracking, leave requests, and attendance so working hours stay accurate and compliant.",
        icon: LuClock,
    },
    {
        title: "Payroll Processing",
        desc: "Calculate pay, deductions, and taxes automatically for timely, accurate payroll with detailed reporting.",
        icon: LuBanknote,
    },
    {
        title: "Talent Management",
        desc: "Support recruitment, training, performance reviews, and succession planning to grow a skilled workforce.",
        icon: LuStar,
    },
    {
        title: "Employee and Manager Self-Service",
        desc: "Let employees update details and request leave while managers approve requests and view team data.",
        icon: LuUserCog,
    },
    {
        title: "Recruitment and Onboarding",
        desc: "Manage hiring from job posting to onboarding, with applicant tracking and interview scheduling built in.",
        icon: LuUserPlus,
    },
    {
        title: "Reporting and Analytics",
        desc: "Track HR metrics and workforce trends with dashboards and custom reports for better decisions.",
        icon: LuChartColumn,
    },
    {
        title: "Compliance & Regulatory Support",
        desc: "Stay compliant with labor, tax, and data privacy rules through country-specific, automatically updated requirements.",
        icon: LuScale,
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

const AUTOPLAY_INTERVAL = 4000;

export default function HcmFeatures() {
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
        const amount = card ? card.offsetWidth + 32 : 400;
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    // Autoplay: advance one card every AUTOPLAY_INTERVAL, looping back to the start
    // after the last card. It runs only while the track is on screen, pauses while
    // the pointer is over the carousel or a finger is on it, and restarts its
    // countdown after a manual arrow click so it never jumps right after one.
    const isInView = useInView(trackRef, { amount: 0.3 });
    const [isPaused, setIsPaused] = useState(false);
    const [manualTick, setManualTick] = useState(0);

    useEffect(() => {
        if (!isInView || isPaused) return undefined;
        const id = setInterval(() => {
            const el = trackRef.current;
            if (!el) return;
            const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
            if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
            else scrollByCard(1);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [isInView, isPaused, manualTick]);

    const handleArrow = (dir) => {
        scrollByCard(dir);
        setManualTick((t) => t + 1);
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
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of <span className="text-[#2D8EC5]">Human Capital Management</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        The capabilities that cover the employee lifecycle, from the first job posting to the last
                        payslip.
                    </p>
                </motion.div>

                <div
                    className="flex flex-col gap-6 w-full min-w-0"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* whileInView lives on the track, not per card: horizontally scrolled
                        cards keep their layout box, so a per-card trigger would re-animate
                        them mid-scroll. One trigger with staggered variants avoids that. */}
                    <motion.div
                        ref={trackRef}
                        onScroll={updateScrollState}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        // overflow-y-hidden keeps the horizontal axis the only one that scrolls.
                        className="flex gap-8 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
                    >
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={card.title}
                                data-card
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                // Same card as Key Features of Power BI Implementation: centred
                                // icon, title and short description. Heights are a floor; the
                                // stretch alignment keeps the row even.
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
                            onClick={() => handleArrow(-1)}
                            disabled={!canScrollLeft}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollLeft ? "text-black hover:scale-110" : "text-[#c7c7c7]"
                                }`}
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => handleArrow(1)}
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
