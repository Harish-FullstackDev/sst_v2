"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuArrowRightLeft, LuGauge, LuServer, LuSettings } from "react-icons/lu";

const PHASES = [
    {
        title: "Landscape & Sizing",
        icon: LuServer,
        points: ["Database & server sizing", "Hardware & network plan", "High-availability setup"],
        desc: "We assess your current landscape, size the SAP HANA database and application servers, and plan the hardware, network, and high-availability setup your workloads need.",
    },
    {
        title: "Build & Configure",
        icon: LuSettings,
        points: ["Install & configure", "Roles & workflows", "System integrations"],
        desc: "We install and configure SAP S/4HANA, apply your custom configurations, and set up roles, workflows, and integrations with the systems around it.",
    },
    {
        title: "Data Migration & Cutover",
        icon: LuArrowRightLeft,
        points: ["Master & transactional data", "Cutover rehearsal", "Go-live planning"],
        desc: "We migrate and validate master and transactional data, rehearse the cutover, and plan go-live around your business calendar.",
    },
    {
        title: "Run & Optimize",
        icon: LuGauge,
        points: ["Patching & monitoring", "Performance tuning", "Release upgrades"],
        desc: "After go-live we keep the system patched, monitored, and tuned, and plan support package and release upgrades on your schedule.",
    },
];

// No photos. Each phase gets a quiet navy banner (#0A2B3E to #003756) built
// from the two motions the user responded to best: the phase's Lucide icon
// (same set as the rest of the site) drawn large in a fine line, set off-centre
// to the right and fully inside the banner, sketching itself stroke by stroke
// like a pen, the phase's key points easing in on the left, while one faint band of light passes across the banner and a soft
// deep-blue lift settles in from the foot. One focal point, slow easing. It all
// plays once, only when the banner is on screen (useInView).
const DRAW_KEYFRAMES = "@keyframes roadmap-draw { to { stroke-dashoffset: 0; } }";

function PhaseBanner({ item }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const Icon = item.icon;

    return (
        <div ref={ref} className="relative aspect-[512/200] w-full overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
            <div
                className={`absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.45),rgba(28,95,133,0)_70%)] transition-opacity duration-[1500ms] ease-out ${inView ? "opacity-100" : "opacity-0"}`}
            />
            <div
                className={`absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)] transition-transform duration-[1800ms] ease-out ${inView ? "translate-x-[300%]" : "translate-x-0"}`}
            />
            {/* Left: the phase's key points, drawn from its description, easing in
                one by one as the icon sketches itself on the right. */}
            <ul className="absolute left-[7%] top-1/2 -translate-y-1/2 flex w-[48%] flex-col gap-2 sm:gap-3">
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
                className={`absolute right-[10%] top-1/2 h-[68%] w-auto -translate-y-1/2 text-white/50 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] ${inView ? "[&_*]:animate-[roadmap-draw_2.4s_cubic-bezier(0.65,0,0.35,1)_0.2s_forwards]" : ""}`}
            />
        </div>
    );
}

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 sm:max-w-[512px] lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="text-center text-base font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
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

export default function DeliveryRoadmap() {
    return (
        <section className="w-full">
            <style>{DRAW_KEYFRAMES}</style>
            <div className="flex w-full flex-col items-center gap-10 px-8 py-10 sm:gap-16 sm:px-[64px] lg:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-xl font-semibold text-[#2E3033] sm:text-[28px]">
                        How We Deliver an On-Premises Deployment
                    </h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        A phased path from landscape sizing to stable, supported operations.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-10 sm:gap-8">
                    {PHASES.map((item, index) => {
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
