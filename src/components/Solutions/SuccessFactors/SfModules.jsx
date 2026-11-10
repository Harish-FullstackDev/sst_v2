"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import recruitingPhoto from "@/assets/Solutions/SuccessFactors/Customer_Customer_Service_Solutions.webp";
import performancePhoto from "@/assets/Solutions/SuccessFactors/Business_Transformation_Roadmap.webp";
import learningPhoto from "@/assets/Solutions/SuccessFactors/Experience_UI_UX.webp";
import employeeCentralPhoto from "@/assets/Solutions/SuccessFactors/Customer_Our_Expertise.webp";
import compensationPhoto from "@/assets/Solutions/SuccessFactors/Customer_Loyalty.webp";
import successionPhoto from "@/assets/Solutions/SuccessFactors/Business_Enterprise_architecture.webp";
import analyticsPhoto from "@/assets/Solutions/SuccessFactors/Experience_Product_Design.webp";

const TABS = [
    {
        label: "Recruiting",
        desc: "SAP SuccessFactors facilitates attracting, engaging, and hiring top talent through robust tools for job posting, applicant tracking, candidate management, and recruitment analytics. Organizations streamline hiring, analyze recruitment effectiveness, and make data-driven decisions to secure the best candidates efficiently.",
        img: recruitingPhoto,
    },
    {
        label: "Performance & Goals",
        desc: "Set and align employee goals, conduct comprehensive performance reviews, offer continuous feedback, and track key performance metrics seamlessly. This integrated approach enhances employee development, ensures alignment with organizational objectives, and supports ongoing performance improvement initiatives.",
        img: performancePhoto,
    },
    {
        label: "Learning",
        desc: "Deliver, track, and manage employee training and development programs across diverse learning formats. Enhance employee skills through personalized learning experiences, monitor progress effectively, and align training initiatives with strategic business goals for continuous workforce improvement.",
        img: learningPhoto,
    },
    {
        label: "Employee Central",
        desc: "Centralize employee data and manage organizational structures, payroll information, and self-service functions on a unified HR platform, ensuring accurate data management, efficient payroll processing, and empowering employees to access pay stubs and update personal information themselves.",
        img: employeeCentralPhoto,
    },
    {
        label: "Compensation Management",
        desc: "Design, manage, and administer comprehensive compensation plans covering salary structures, bonuses, incentives, and rewards. Data-driven decisions keep compensation practices fair and competitive, and align rewards with employee performance and organizational goals.",
        img: compensationPhoto,
    },
    {
        label: "Succession & Development",
        desc: "Identify and develop high-potential employees for future leadership roles with talent assessment, succession planning, and career development features. Organizations nurture talent pipelines strategically, improve succession readiness, strengthen leadership development, and align talent strategies with long-term business objectives.",
        img: successionPhoto,
    },
    {
        label: "Workforce Analytics",
        desc: "Gain valuable insights from workforce data, identify trends, and make informed, data-driven decisions to enhance HR strategies and processes. Analyzing key metrics such as employee engagement, turnover rates, and performance trends helps optimize workforce management and drive continuous improvement in HR practices.",
        img: analyticsPhoto,
    },
];

export default function SfModules() {
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
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">What SAP SuccessFactors Offers</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Seven modules that cover hiring, performance, learning, pay, and the data behind them.
                </p>
            </motion.div>

            {/* The tab column sizes to its seven rows instead of a fixed height, and the
                image panel stretches to match it on desktop. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16 w-full">
                <div className="flex flex-col w-full lg:w-[34%] lg:max-w-96 gap-2 shrink-0">
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
                    <div className="relative w-full aspect-[798/446] lg:aspect-auto lg:flex-1 lg:min-h-[446px] overflow-hidden bg-[#565656]">
                        {/* Every image stays mounted and cross-fades on opacity, so switching tabs never blanks the box; only the copy swaps, after the image has started to change. */}
                        <div className="absolute inset-0">
                            {TABS.map((tab, index) => (
                                <Image
                                    key={index}
                                    src={tab.img}
                                    alt={index === active ? tab.label : ""}
                                    fill
                                    className={`object-cover transition-opacity duration-700 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
                                    priority={index === 0}
                                />
                            ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                                {/* Overlay copy on wide screens only; the descriptions are too long
                                    to sit over a short mobile image, so they move below it there. */}
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
