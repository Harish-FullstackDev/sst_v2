"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuArrowRightLeft, LuClipboardList, LuRocket, LuSettings } from "react-icons/lu";

const STEPS = [
    {
        title: "Discover & Blueprint",
        icon: LuClipboardList,
        points: ["HR, time & payroll mapping", "Org structures", "Country requirements"],
        desc: "Map current HR, time, and payroll processes, organizational structures, and country requirements into a design the business signs off before build begins.",
    },
    {
        title: "Configure & Integrate",
        icon: LuSettings,
        points: ["Personnel administration", "Time & payroll setup", "Finance integration"],
        desc: "Set up Personnel Administration, Organizational Management, time, and payroll, and connect HR to finance and the other SAP modules it feeds.",
    },
    {
        title: "Migrate & Validate",
        icon: LuArrowRightLeft,
        points: ["Employee master data", "History migration", "Parallel payroll runs"],
        desc: "Load employee master data and history, then run parallel payroll cycles until results reconcile with the legacy system.",
    },
    {
        title: "Go Live & Support",
        icon: LuRocket,
        points: ["Employee & manager self-service", "First live payrolls", "Regulatory updates"],
        desc: "Launch self-service for employees and managers, support the first live payroll runs, and keep pace with regulatory updates afterwards.",
    },
];

// No photos: the same banner as S/4HANA On-Premise's delivery roadmap. A navy
// banner (#0A2B3E to #003756) with the phase's key points (drawn from its own
// description) easing in on the left and its Lucide icon (same set as the rest
// of the site) sketching itself stroke by stroke on the right, while one faint
// light band passes across and a soft deep-blue lift settles in. Plays once,
// only when the banner is on screen (useInView).
const DRAW_KEYFRAMES = "@keyframes hcm-draw { to { stroke-dashoffset: 0; } }";

function PhaseBanner({ item }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const Icon = item.icon;

    return (
        <div ref={ref} className="relative aspect-[512/200] w-full overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
            <div
                aria-hidden="true"
                className={`absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.45),rgba(28,95,133,0)_70%)] transition-opacity duration-[1500ms] ease-out ${inView ? "opacity-100" : "opacity-0"}`}
            />
            <div
                aria-hidden="true"
                className={`absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)] transition-transform duration-[1800ms] ease-out ${inView ? "translate-x-[300%]" : "translate-x-0"}`}
            />
            <ul className="absolute left-[7%] top-1/2 -translate-y-1/2 flex w-[52%] flex-col gap-2 sm:gap-3">
                {item.points.map((point, i) => (
                    <li
                        key={point}
                        className={`flex items-center gap-3 text-white/80 text-sm sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl font-light transition-all duration-700 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                        style={{ transitionDelay: inView ? `${500 + i * 220}ms` : "0ms" }}
                    >
                        <span className="size-1.5 shrink-0 bg-[#2D8EC5]" />
                        {point}
                    </li>
                ))}
            </ul>
            <Icon
                aria-hidden="true"
                strokeWidth={0.6}
                className={`absolute right-[10%] top-1/2 h-[68%] w-auto -translate-y-1/2 text-white/50 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] ${inView ? "[&_*]:animate-[hcm-draw_2.4s_cubic-bezier(0.65,0,0.35,1)_0.2s_forwards]" : ""}`}
            />
        </div>
    );
}

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 sm:max-w-[512px] lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="text-center text-lg font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
            <PhaseBanner item={item} />
        </div>
    );
}

function CompanionBlock({ item }) {
    return (
        <div className="flex w-full max-w-[480px] items-center gap-4 px-2 sm:gap-5 sm:px-0 lg:max-w-none lg:flex-1 lg:basis-1/2">
            <div className="w-[4px] shrink-0 self-stretch bg-[#808a99] sm:w-[8px]" />
            <p className="w-full text-base font-light leading-[1.5] text-[#55595E] sm:text-2xl">{item.desc}</p>
        </div>
    );
}

export default function HcmDelivery() {
    return (
        <section className="w-full">
            <style>{DRAW_KEYFRAMES}</style>
            <div className="flex w-full flex-col items-center gap-10 px-8 py-10 sm:gap-16 sm:px-[64px] sm:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-xl font-semibold text-[#2E3033] sm:text-[28px]">
                        How We Implement SAP HCM
                    </h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        The phases that put accurate people data and a reconciled payroll in place before go-live.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-10 sm:gap-8">
                    {STEPS.map((item, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`flex flex-col items-center gap-8 lg:gap-16 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                            >
                                <CardBlock item={item} />
                                <CompanionBlock item={item} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
