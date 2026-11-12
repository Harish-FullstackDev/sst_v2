"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuBanknote, LuChartColumn, LuGraduationCap, LuTarget, LuTrendingUp, LuUserPlus, LuUsers } from "react-icons/lu";

// No photos: same quiet navy panel as Key Benefits of ERP Migration to Microsoft
// (#0A2B3E to #003756, a soft deep-blue rise, a faint watermark icon per tab
// and a 3px autoplay timeline along the foot). The copy stays bottom left, so
// the watermark sits in the opposite, top-right corner.
const INTERVAL = 5000;


const TABS = [
    {
        label: "Recruiting",
        desc: "SAP SuccessFactors facilitates attracting, engaging, and hiring top talent through robust tools for job posting, applicant tracking, candidate management, and recruitment analytics. Organizations streamline hiring, analyze recruitment effectiveness, and make data-driven decisions to secure the best candidates efficiently.",
        icon: LuUserPlus,
    },
    {
        label: "Performance & Goals",
        desc: "Set and align employee goals, conduct comprehensive performance reviews, offer continuous feedback, and track key performance metrics seamlessly. This integrated approach enhances employee development, ensures alignment with organizational objectives, and supports ongoing performance improvement initiatives.",
        icon: LuTarget,
    },
    {
        label: "Learning",
        desc: "Deliver, track, and manage employee training and development programs across diverse learning formats. Enhance employee skills through personalized learning experiences, monitor progress effectively, and align training initiatives with strategic business goals for continuous workforce improvement.",
        icon: LuGraduationCap,
    },
    {
        label: "Employee Central",
        desc: "Centralize employee data and manage organizational structures, payroll information, and self-service functions on a unified HR platform, ensuring accurate data management, efficient payroll processing, and empowering employees to access pay stubs and update personal information themselves.",
        icon: LuUsers,
    },
    {
        label: "Compensation Management",
        desc: "Design, manage, and administer comprehensive compensation plans covering salary structures, bonuses, incentives, and rewards. Data-driven decisions keep compensation practices fair and competitive, and align rewards with employee performance and organizational goals.",
        icon: LuBanknote,
    },
    {
        label: "Succession & Development",
        desc: "Identify and develop high-potential employees for future leadership roles with talent assessment, succession planning, and career development features. Organizations nurture talent pipelines strategically, improve succession readiness, strengthen leadership development, and align talent strategies with long-term business objectives.",
        icon: LuTrendingUp,
    },
    {
        label: "Workforce Analytics",
        desc: "Gain valuable insights from workforce data, identify trends, and make informed, data-driven decisions to enhance HR strategies and processes. Analyzing key metrics such as employee engagement, turnover rates, and performance trends helps optimize workforce management and drive continuous improvement in HR practices.",
        icon: LuChartColumn,
    },
];

export default function SfModules() {
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
        <section className="w-full bg-[#f3f6f9] py-10 sm:py-16 px-8 sm:px-[64px] lg:px-0 flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What <span className="text-[#2D8EC5]">SAP SuccessFactors</span> Offers</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Seven modules that cover hiring, performance, learning, pay, and the data behind them.
                </p>
            </motion.div>

            {/* Layout follows SAP Migration's "How a Migration Runs": a 384px tab column
                spread down the panel height, a 100px gap, and the navy panel running
                to the right edge on desktop. The panel stretches to match the list. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-[100px] w-full lg:pl-[64px]">
                <div className="flex flex-col w-full lg:w-96 lg:min-h-[446px] justify-between gap-2 lg:gap-0 shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.label}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            aria-pressed={index === active}
                            className={`text-left border-l-[3px] flex items-center min-h-12 py-2 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-xl lg:text-2xl font-semibold">{tab.label}</h2>
                        </button>
                    ))}
                </div>

                <div className="flex flex-col w-full lg:flex-1 min-w-0">
                    <div className="relative w-full aspect-[798/446] lg:aspect-auto lg:flex-1 lg:min-h-[446px] overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756_60%,#00447A)]">
                        {/* Depth: a deep-blue rise from the foot, brand-blue light falling
                            from the top-right corner behind the icon. */}
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_60%)]" />
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(225deg,rgba(45,142,197,0.3),rgba(45,142,197,0)_45%)]" />

                        {/* One faint light sweep each time the tab changes. */}
                        <motion.div
                            key={`sweep-${active}`}
                            aria-hidden="true"
                            initial={{ x: "-120%" }}
                            animate={{ x: "320%" }}
                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)]"
                        />

                        {/* Watermark icon, top right (opposite the copy), cross-fading per tab. */}
                        <AnimatePresence>
                            <motion.div
                                key={active}
                                aria-hidden="true"
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-[10%] right-[6%] h-[50%] aspect-square text-white/[0.22]"
                            >
                                <activeTab.icon strokeWidth={0.8} className="size-full" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Overlay copy on wide screens only; the descriptions are too long
                            to sit over a short mobile panel, so they move below it there. */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                                className="hidden lg:flex absolute left-[55px] right-[55px] bottom-[46px] max-w-[560px] text-white flex-col gap-3"
                            >
                                <h2 className="text-2xl font-semibold">{activeTab.label}</h2>
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

                    <div className="lg:hidden flex flex-col gap-3 bg-white px-6 py-6">
                        <h2 className="text-[#2E3033] text-xl font-semibold">{activeTab.label}</h2>
                        <p className="text-[#55595E] text-base font-light leading-relaxed">{activeTab.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
