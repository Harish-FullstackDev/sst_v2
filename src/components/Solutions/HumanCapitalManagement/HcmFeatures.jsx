"use client";

import { useEffect, useRef, useState } from "react";
import { LuBanknote, LuChartColumn, LuClock, LuScale, LuStar, LuUserCog, LuUserPlus, LuUsers } from "react-icons/lu";
import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Core HR Management",
        desc: "Handle employee data and organizational structures effectively with the Personnel Administration (PA) and Organizational Management (OM) modules. PA manages employee records, personal information, and employment history, keeping data accurate and up to date. OM structures organizational hierarchies, roles, and reporting lines, enabling efficient management of organizational changes and workforce planning. Together, they provide a robust foundation for HR operations, enhancing data accuracy and organizational clarity.",
        icon: LuUsers,
    },
    {
        title: "Time & Attendance Management",
        desc: "Track employee time, attendance, and leave efficiently to ensure accurate working-hour calculations and compliance with labor regulations, through automated time tracking, leave request management, and monitoring of attendance patterns. Organizations maintain accurate payroll, improve workforce productivity, and adhere to legal requirements, minimizing compliance risks and administrative burdens.",
        icon: LuClock,
    },
    {
        title: "Payroll Processing",
        desc: "Process employee salaries, wages, and taxes seamlessly with comprehensive payroll functionality, including automated calculation of gross and net pay, deductions, and tax withholdings. The system ensures timely and accurate payroll processing, adheres to regulatory requirements, and provides detailed reports, enhancing financial accuracy and reducing administrative effort.",
        icon: LuBanknote,
    },
    {
        title: "Talent Management",
        desc: "Support employee development, performance appraisal, and succession planning with specialized modules for recruitment, training, and career development. These modules streamline hiring, facilitate continuous learning through targeted training programs, and enable effective performance evaluations. By fostering career growth and planning for future leadership, organizations cultivate a skilled and motivated workforce.",
        icon: LuStar,
    },
    {
        title: "Employee and Manager Self-Service",
        desc: "Empower employees and managers to handle HR tasks independently through self-service portals. Employees update personal information, request leave, and view pay slips, while managers approve requests, access team data, and generate reports. This autonomy enhances efficiency, reduces administrative workload, and improves user satisfaction and engagement.",
        icon: LuUserCog,
    },
    {
        title: "Recruitment and Onboarding",
        desc: "Manage the entire recruitment process seamlessly with SAP HCM, from job posting through to onboarding new hires, including applicant tracking, interview scheduling, and integration with external recruitment channels. The result is a streamlined hiring experience, better candidate engagement, smooth transitions into the organization, and higher overall recruitment efficiency.",
        icon: LuUserPlus,
    },
    {
        title: "Reporting and Analytics",
        desc: "Monitor HR metrics, analyze workforce trends, and gain insights into employee performance and engagement with comprehensive dashboards, customizable reports, and data visualization. Data-driven insights help organizations optimize HR strategies, improve decision-making, and enhance overall workforce effectiveness and satisfaction.",
        icon: LuChartColumn,
    },
    {
        title: "Compliance & Regulatory Support",
        desc: "Ensure compliance with labor laws, payroll taxation, and data privacy regulations through capabilities that incorporate country-specific requirements. The system automates regulatory updates, ensures accurate payroll processing, and manages data securely, minimizing compliance risks and maintaining trust with employees and regulatory authorities alike.",
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

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-[80px] max-w-[1637px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[300px] shrink-0 lg:pt-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Features of Human Capital Management</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Eight capabilities that cover the employee lifecycle, from the first job posting to the last
                        payslip.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 w-full min-w-0">
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
                                // Heights are a floor, not fixed: these descriptions are long, so the
                                // card grows with its copy and the stretch alignment keeps the row even.
                                className="snap-start shrink-0 w-[min(300px,80vw)] sm:w-[380px] min-h-[320px] bg-white border border-black/[0.35] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-start text-left px-6 sm:px-8 py-7 sm:py-8"
                            >
                                <div className="flex items-center justify-between w-full mb-5">
                                    <card.icon aria-hidden="true" strokeWidth={1.5} className="size-11 text-[#1C5F85]" />
                                    <span className="text-[#2d8ec5] text-base font-semibold">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                                <p className="text-[#55595E] text-base font-light mt-4">{card.desc}</p>
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
