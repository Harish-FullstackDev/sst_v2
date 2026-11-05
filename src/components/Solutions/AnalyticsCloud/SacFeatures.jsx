"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import biPhoto from "@/assets/Solutions/AnalyticsCloud/feature-bi.webp";
import planningPhoto from "@/assets/Solutions/AnalyticsCloud/feature-planning.webp";
import predictivePhoto from "@/assets/Solutions/AnalyticsCloud/feature-predictive.webp";
import connectivityPhoto from "@/assets/Solutions/AnalyticsCloud/feature-connectivity.webp";
import collaborationPhoto from "@/assets/Solutions/AnalyticsCloud/feature-collaboration.webp";

const TABS = [
    {
        label: "Business Intelligence",
        title: "Business Intelligence (BI) and Data Visualization",
        desc: "Analytics Cloud provides powerful capabilities for creating interactive dashboards, visualizations, and reports. Users can easily explore and analyze data from various sources to gain insights and make informed decisions.",
        img: biPhoto,
    },
    {
        label: "Planning & Forecasting",
        title: "Planning, Budgeting & Forecasting",
        desc: "Analytics Cloud supports collaborative enterprise planning processes, allowing teams to create and manage budgets, forecasts, and scenarios. It includes features for financial planning, workforce planning, and more.",
        img: planningPhoto,
    },
    {
        label: "Predictive Analytics",
        title: "Predictive Analytics & Smart Insights",
        desc: "Analytics Cloud incorporates machine learning and AI-driven capabilities to enable predictive analytics. Users can build predictive models, forecast trends, and identify patterns automatically. Smart Insights help uncover hidden insights and anomalies in data.",
        img: predictivePhoto,
    },
    {
        label: "Data Connectivity",
        title: "Data Connectivity & Integration",
        desc: "Analytics Cloud offers connectivity to a wide range of data sources, both SAP and non-SAP systems, cloud-based and on-premises databases. It supports live data connections for real-time analysis and reporting.",
        img: connectivityPhoto,
    },
    {
        label: "Collaboration",
        title: "Collaboration & Sharing",
        desc: "Analytics Cloud facilitates collaboration among teams with features for annotation, commenting, and sharing of dashboards and reports. Users can collaborate in real-time, share insights, and make collective decisions based on data-driven insights.",
        img: collaborationPhoto,
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
                    Five capabilities that take your data from source to decision.
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
                                    ? "bg-[#2d8ec5] border-[#2d8ec5] text-white"
                                    : "bg-white border-[#d3d5d8] text-[#55595E] hover:border-[#2d8ec5] hover:text-[#2d8ec5]"
                            }`}
                        >
                            <span className="mr-2 opacity-70">0{index + 1}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 w-full bg-[#f5f6f6]">
                <div className="relative w-full lg:w-[55%] aspect-[16/10] lg:aspect-auto lg:min-h-[420px] shrink-0 overflow-hidden bg-[#565656]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45 }}
                            className="absolute inset-0"
                        >
                            <Image src={activeTab.img} alt={activeTab.title} fill className="object-cover" />
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
                            <span className="text-[#2d8ec5] text-base sm:text-lg font-semibold">
                                0{active + 1} / 0{TABS.length}
                            </span>
                            <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{activeTab.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">{activeTab.desc}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
