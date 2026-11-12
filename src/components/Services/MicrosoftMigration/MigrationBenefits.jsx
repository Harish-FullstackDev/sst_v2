"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuBlocks, LuDatabase, LuLifeBuoy, LuTrendingUp, LuUsers } from "react-icons/lu";

// No photos. The panel is a quiet navy field (#0A2B3E to #003756) with two
// restrained touches, different from the hairline-frame cards above:
// - a watermark: the active benefit's Lucide icon (same set as the rest of the
//   site), drawn large in a thin faint line in the panel's bottom-right corner
//   while the copy sits top left (laid out like SAP Migration's "How a
//   Migration Runs", panel running to the right edge on desktop); it cross-fades and drifts in slightly when the tab changes;
// - a 3px brand-blue timeline along the foot that fills over the autoplay
//   interval, so the next switch never feels abrupt; it hides while paused.
const INTERVAL = 5000;

const TABS = [
    {
        title: "Comprehensive Data Migration",
        desc: "Secure and accurate migration of your business data to Microsoft ERP solutions without disruption. Master data, open transactions, and history are mapped, cleansed, and validated before cutover, so the new system starts with records your teams can trust.",
        icon: LuDatabase,
    },
    {
        title: "Change Management",
        desc: "Equip your team with the tools, training, and support to successfully adapt to the new system. Role-based training, clear communication, and hands-on support around go-live help people move to new ways of working with confidence.",
        icon: LuUsers,
    },
    {
        title: "Ongoing Support & Optimization",
        desc: "Post-migration support to ensure smooth operations, system optimization, and continuous improvement. We stay on after go-live to resolve issues quickly, tune performance, and refine processes as your business settles into the new platform.",
        icon: LuLifeBuoy,
    },
    {
        title: "Scalable Solutions",
        desc: "Ensure your ERP solution can grow with your business needs, providing flexibility and scalability. New entities, users, and modules can be added as you expand, without reworking the foundation that was put in place during migration.",
        icon: LuTrendingUp,
    },
    {
        title: "Microsoft Ecosystem Integration",
        desc: "Seamlessly connect your migrated ERP with Microsoft 365, Power BI, and Azure for a unified digital environment. Data flows between the tools your teams already use, giving one connected view of operations, reporting, and collaboration.",
        icon: LuBlocks,
    },
];

export default function MigrationBenefits() {
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
        <section className="w-full bg-white py-10 sm:py-16 px-8 sm:px-[64px] lg:px-0 flex flex-col items-center gap-8 sm:gap-[45px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Key Benefits of <span className="text-[#2D8EC5]">ERP Migration</span> to Microsoft
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    What a well-run migration delivers, from the first data load to long after go-live.
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-[100px] w-full lg:pl-[64px]">
                {/* Tabs spread down the panel height at lg, as in How a Migration Runs. */}
                <div className="flex flex-col w-full lg:w-96 lg:h-[420px] justify-between gap-2 lg:gap-0 shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.title}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center min-h-12 py-2 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-xl lg:text-2xl font-semibold">{tab.title}</h2>
                        </button>
                    ))}
                </div>

                {/* Navy panel */}
                <div className="w-full lg:flex-1 min-w-0">
                    <div className="relative w-full aspect-[798/446] overflow-hidden bg-[linear-gradient(to_bottom_right,#0A2B3E,#003756_60%,#00447A)]">
                        {/* Faint deep-blue rise behind the copy, for depth. */}
                        {/* Depth, as in What SAP SuccessFactors Offers: a deep-blue rise from the foot,
                            brand-blue light from the bottom-right corner behind the icon, and one
                            faint light sweep each time the tab changes. */}
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_60%)]" />
                        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(315deg,rgba(45,142,197,0.3),rgba(45,142,197,0)_45%)]" />
                        <motion.div
                            key={`sweep-${active}`}
                            aria-hidden="true"
                            initial={{ x: "-120%" }}
                            animate={{ x: "320%" }}
                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.07),transparent)]"
                        />

                        {/* Watermark icon, cross-fading per tab. */}
                        <AnimatePresence>
                            <motion.div
                                key={active}
                                aria-hidden="true"
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute bottom-[8%] right-[5%] h-[38%] lg:bottom-[10%] lg:right-[6%] lg:h-[50%] aspect-square text-white/[0.22]"
                            >
                                <activeTab.icon strokeWidth={0.8} className="size-full" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Copy from sm up; on phones the panel is too short, so it renders below instead. */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                                className="absolute hidden sm:flex left-10 right-10 top-10 lg:left-[55px] lg:right-auto lg:top-[46px] lg:max-w-[462px] text-white flex-col gap-3"
                            >
                                <h2 className="text-xl font-semibold">{activeTab.title}</h2>
                                <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                                    {activeTab.desc}
                                </p>
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
                    <p className="sm:hidden mt-4 text-[#55595E] text-base font-light">{activeTab.desc}</p>
                </div>
            </div>
        </section>
    );
}
