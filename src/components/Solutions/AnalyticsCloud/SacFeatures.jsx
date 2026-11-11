"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuCalendarRange, LuChartColumn, LuPlug, LuTrendingUp, LuUsers } from "react-icons/lu";

// No photos: the left panel is navy (#0A2B3E to #003756, soft deep-blue rise)
// laid out like the S/4HANA On-Premise roadmap banners: the active feature's
// key points (drawn from its description) ease in on the left while its Lucide
// icon (same set as the rest of the site) sketches itself stroke by stroke on
// the right, and one faint band of light passes across on each change.
const DRAW_KEYFRAMES = "@keyframes sacf-draw { to { stroke-dashoffset: 0; } }";

const TABS = [
    {
        label: "Business Intelligence",
        title: "Business Intelligence (BI) and Data Visualization",
        desc: "Analytics Cloud provides powerful capabilities for creating interactive dashboards, visualizations, and reports. Users can easily explore and analyze data from various sources to gain insights and make informed decisions.",
        icon: LuChartColumn,
        points: ["Interactive dashboards", "Visualizations & reports", "Multi-source exploration"],
    },
    {
        label: "Planning & Forecasting",
        title: "Planning, Budgeting & Forecasting",
        desc: "Analytics Cloud supports collaborative enterprise planning processes, allowing teams to create and manage budgets, forecasts, and scenarios. It includes features for financial planning, workforce planning, and more.",
        icon: LuCalendarRange,
        points: ["Budgets & forecasts", "Scenario planning", "Financial & workforce plans"],
    },
    {
        label: "Predictive Analytics",
        title: "Predictive Analytics & Smart Insights",
        desc: "Analytics Cloud incorporates machine learning and AI-driven capabilities to enable predictive analytics. Users can build predictive models, forecast trends, and identify patterns automatically. Smart Insights help uncover hidden insights and anomalies in data.",
        icon: LuTrendingUp,
        points: ["Predictive models", "Trend forecasting", "Smart Insights on anomalies"],
    },
    {
        label: "Data Connectivity",
        title: "Data Connectivity & Integration",
        desc: "Analytics Cloud offers connectivity to a wide range of data sources, both SAP and non-SAP systems, cloud-based and on-premises databases. It supports live data connections for real-time analysis and reporting.",
        icon: LuPlug,
        points: ["SAP & non-SAP sources", "Cloud & on-premises", "Live data connections"],
    },
    {
        label: "Collaboration",
        title: "Collaboration & Sharing",
        desc: "Analytics Cloud facilitates collaboration among teams with features for annotation, commenting, and sharing of dashboards and reports. Users can collaborate in real-time, share insights, and make collective decisions based on data-driven insights.",
        icon: LuUsers,
        points: ["Annotation & comments", "Shared dashboards", "Real-time collaboration"],
    },
];

export default function SacFeatures() {
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
        <section
            className="w-full bg-white py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col gap-8 sm:gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of Analytics Cloud</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The capabilities that take your data from source to decision.
                </p>
            </motion.div>

            {/* Tab strip: wraps on wide screens, scrolls sideways on phones without
                widening the page. */}
            <div className="w-full overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex lg:flex-wrap lg:justify-center gap-2 sm:gap-3 w-max lg:w-full">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.label}
                            type="button"
                            onClick={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            aria-pressed={index === active}
                            className={`shrink-0 whitespace-nowrap border px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold transition-colors ${
                                index === active
                                    ? "bg-[linear-gradient(to_top_right,#0A2B3E,#003756)] border-[#003756] text-white"
                                    : "bg-white border-[#d3d5d8] text-[#55595E] hover:border-[#2d8ec5] hover:text-[#2d8ec5]"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 w-full bg-[#f5f6f6]">
                <div className="relative w-full lg:w-[55%] aspect-[16/10] lg:aspect-auto lg:min-h-[420px] shrink-0 overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
                    <style>{DRAW_KEYFRAMES}</style>
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_65%)]" />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.25 } }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex items-center justify-center gap-8 sm:gap-12 xl:gap-16 px-[8%]"
                        >
                            <motion.div
                                initial={{ x: "0%" }}
                                animate={{ x: "300%" }}
                                transition={{ duration: 1.6, ease: "easeOut" }}
                                className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)]"
                            />
                            {/* Points and icon sit together as one centred group with a fixed gap, so
                                the spacing between them stays the same at every panel width. */}
                            <ul className="relative flex min-w-0 flex-col gap-2 sm:gap-3">
                                {activeTab.points.map((point, i) => (
                                    <motion.li
                                        key={point}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + i * 0.2 }}
                                        className="flex items-center gap-3 text-white/80 text-base sm:text-lg font-light"
                                    >
                                        <span className="size-1.5 shrink-0 bg-[#2D8EC5]" />
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                            <activeTab.icon
                                strokeWidth={0.6}
                                className="relative shrink-0 h-[50%] w-auto text-white/50 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[sacf-draw_2.2s_cubic-bezier(0.65,0,0.35,1)_0.1s_forwards]"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col justify-center w-full lg:flex-1 min-w-0 px-6 py-8 sm:px-10 sm:py-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{activeTab.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">{activeTab.desc}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
