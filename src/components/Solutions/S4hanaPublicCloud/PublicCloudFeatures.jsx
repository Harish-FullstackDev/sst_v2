"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChartColumn, LuCpu, LuRocket, LuScaling, LuUsers } from "react-icons/lu";

// No photos. Laid out like SAP Migration's "How a Migration Runs": tabs on the
// left, and a navy panel (#0A2B3E to #003756, soft deep-blue rise) running to
// the right edge on desktop, with the active feature's title and description at
// the top left and its Lucide icon (same set as the rest of the site) in the
// bottom-right corner, faint and sketching itself stroke by stroke on every
// tab change. One
// faint band of light passes across on each change, and a 3px brand-blue
// timeline along the foot fills over the autoplay interval (hidden while a tab
// is hovered). Panel height follows the copy, with a floor.
const INTERVAL = 5000;
const DRAW_KEYFRAMES = "@keyframes pc-draw { to { stroke-dashoffset: 0; } }";

const TABS = [
    {
        title: "Quick Setup",
        desc: "Get started quickly with a rapid deployment model designed to bypass complex setup processes. Businesses implement the solution swiftly, minimizing downtime and reducing the need for extensive configuration, so they can quickly begin leveraging the system's capabilities to enhance productivity and streamline operations.",
        icon: LuRocket,
    },
    {
        title: "Flexible Scaling",
        desc: "Easily adapt to changing business needs with a flexible solution that supports seamless scalability and agility. Whether your organization is expanding or adjusting to shifts in demand, the system's modular design and configurable features let you respond swiftly and efficiently, maintaining optimal performance and meeting market requirements.",
        icon: LuScaling,
    },
    {
        title: "Cutting-Edge Features",
        desc: "Leverage advanced tools such as predictive analytics and IoT integration to drive innovation and gain a competitive edge. Predictive analytics helps you anticipate trends and make data-driven decisions, while IoT integration enables real-time data collection and monitoring, optimizing operations and creating new opportunities through smart, connected technologies.",
        icon: LuCpu,
    },
    {
        title: "Instant Insights",
        desc: "Access real-time data and analytics instantly, empowering confident decision-making. With SAP's in-memory computing, businesses retrieve and analyze data in real time, gaining insight into operational performance, customer behavior, and market trends, so they can make proactive adjustments and strategic decisions based on current, accurate information.",
        icon: LuChartColumn,
    },
    {
        title: "Improved Collaboration",
        desc: "Foster teamwork with intuitive interfaces and seamless integration across SAP solutions. User-friendly interfaces help teams work efficiently across departments, while integration with other SAP applications streamlines workflows and keeps data consistent, enabling a unified approach to business processes that improves productivity and alignment.",
        icon: LuUsers,
    },
];

export default function PublicCloudFeatures() {
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
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] lg:px-0 flex flex-col items-center gap-8 sm:gap-[45px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Features in S/4HANA Public Cloud
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The capabilities that set the public cloud edition apart.
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-[100px] w-full lg:pl-[64px]">
                {/* Tabs spread down the panel height at lg (420px floor), as in How a Migration Runs. */}
                <div className="flex flex-col w-full lg:w-96 lg:min-h-[420px] justify-between gap-2 lg:gap-0 shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.title}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center min-h-12 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-2xl font-semibold">{tab.title}</h2>
                        </button>
                    ))}
                </div>

                {/* Navy panel: copy top left, self-drawing icon bottom right */}
                <div className="w-full lg:flex-1 lg:min-w-0">
                    <div className="relative w-full min-h-[320px] lg:min-h-[420px] lg:h-full overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
                        <style>{DRAW_KEYFRAMES}</style>
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_65%)]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                                transition={{ duration: 0.4 }}
                                className="relative flex flex-col h-full min-h-[inherit] px-6 pt-8 pb-10 sm:pl-[55px] sm:pr-10 sm:pt-[46px] sm:pb-12"
                            >
                                {/* One light sweep per change */}
                                <motion.div
                                    aria-hidden="true"
                                    initial={{ x: "0%" }}
                                    animate={{ x: "300%" }}
                                    transition={{ duration: 1.6, ease: "easeOut" }}
                                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)]"
                                />
                                <div className="relative z-10 flex flex-col gap-3 max-w-[520px]">
                                    <h2 className="text-white text-xl sm:text-2xl font-semibold">{activeTab.title}</h2>
                                    <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed text-pretty">{activeTab.desc}</p>
                                </div>
                                <div aria-hidden="true" className="absolute bottom-[8%] right-[5%] h-[55%] aspect-square">
                                    <activeTab.icon
                                        aria-hidden="true"
                                        strokeWidth={0.6}
                                        className="size-full text-white/20 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[pc-draw_2.2s_cubic-bezier(0.65,0,0.35,1)_0.1s_forwards]"
                                    />
                                </div>
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
                </div>
            </div>
        </section>
    );
}
