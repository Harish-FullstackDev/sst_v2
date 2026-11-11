"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuChartGantt, LuGlobe, LuRadar, LuTowerControl, LuTruck, LuWarehouse } from "react-icons/lu";

const ITEMS = [
    {
        title: "Advanced Planning and Optimization (APO)",
        desc: [
            "APO within SAP SCM serves as a crucial tool for managing demand, supply networks, and production processes. It enables businesses to navigate supply chain complexities seamlessly, leveraging real-time data for informed decision-making. APO ensures efficient planning across all stages of the supply chain, enhancing operational agility and responsiveness.",
        ],
        icon: LuChartGantt,
        points: ["Demand planning", "Supply network planning", "Production planning"],
    },
    {
        title: "Extended Warehouse Management (EWM)",
        desc: [
            "SAP EWM enhances warehouse operations by integrating advanced functionalities for inbound and outbound processes, inventory management, and yard operations. It ensures streamlined operations, boosting efficiency and accuracy in logistics. EWM within SAP SCM empowers businesses to optimize warehouse processes and meet customer demands effectively.",
        ],
        icon: LuWarehouse,
        points: ["Inbound & outbound", "Inventory management", "Yard operations"],
    },
    {
        title: "Transportation Management (TM)",
        desc: [
            "SAP TM tackles transportation challenges by optimizing route planning, shipment tracking, and execution. It serves as a reliable tool within SAP SCM to streamline logistics operations, reduce costs, and improve delivery reliability. TM empowers businesses to efficiently manage transportation processes and meet customer expectations with precision.",
        ],
        icon: LuTruck,
        points: ["Route planning", "Shipment tracking", "Lower freight cost"],
    },
    {
        title: "Event Management (EM)",
        desc: [
            "SAP EM acts as a real-time guardian in SAP SCM, enabling proactive monitoring and response to supply chain disruptions. It tracks critical events such as shipment delays or production issues, ensuring timely interventions to maintain operational continuity. EM enhances resilience by facilitating swift and informed decision-making in dynamic supply chain environments.",
        ],
        icon: LuRadar,
        points: ["Real-time event tracking", "Disruption alerts", "Timely interventions"],
    },
    {
        title: "Global Trade Services (GTS)",
        desc: [
            "SAP GTS simplifies international trade complexities within SAP SCM by managing import/export compliance and mitigating risks. It facilitates seamless cross-border operations while ensuring adherence to global trade regulations. GTS enhances efficiency and reliability in managing trade processes, supporting businesses in navigating diverse regulatory environments with ease.",
        ],
        icon: LuGlobe,
        points: ["Import & export compliance", "Trade risk mitigation", "Cross-border operations"],
    },
    {
        title: "Supply Chain Control Tower",
        desc: [
            "The SAP SCM Control Tower empowers supply chain management by centralizing operations, providing real-time visibility, and fostering seamless collaboration. It enables businesses to optimize performance by monitoring key metrics, identifying issues promptly, and making data-driven decisions across the entire supply chain network, ensuring efficiency and agility.",
        ],
        icon: LuTowerControl,
        points: ["End-to-end visibility", "Key metric monitoring", "Data-driven decisions"],
    },
];

const ROTATE_INTERVAL = 4500;

// No photos, same treatment as SSM Procurement's features panel. The left panel
// is navy (#0A2B3E to #003756) with a soft deep-blue rise; the active module's
// Lucide icon (same set as the rest of the site) draws itself stroke by stroke
// on every change, with the module's key points (from its description) easing
// in below it. Along the panel's right edge a 3px brand-blue line fills top to
// bottom over the rotate interval.
const DRAW_KEYFRAMES = "@keyframes scm-draw { to { stroke-dashoffset: 0; } }";

export default function ScmModules() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[0px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[780px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Modules of Supply Chain Management</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">Modules covering planning, warehousing, transportation, event monitoring, global trade, and end-to-end visibility.</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto lg:h-[680px] pt-16 md:pt-16">
                <div className="relative hidden lg:block w-full lg:h-full lg:w-[35%] shrink-0 overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
                    <style>{DRAW_KEYFRAMES}</style>
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.4),rgba(28,95,133,0)_65%)]" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={ITEMS[active].title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.25 } }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-10"
                        >
                            {(() => {
                                const Icon = ITEMS[active].icon;
                                return (
                                    <Icon
                                        aria-hidden="true"
                                        strokeWidth={0.6}
                                        className="w-[34%] h-auto text-white/55 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[scm-draw_2s_cubic-bezier(0.65,0,0.35,1)_forwards]"
                                    />
                                );
                            })()}
                            <ul className="flex flex-col gap-3">
                                {ITEMS[active].points.map((point, i) => (
                                    <motion.li
                                        key={point}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 + i * 0.2 }}
                                        className="flex items-center gap-3 text-white/80 text-base font-light"
                                    >
                                        <span className="size-1.5 shrink-0 bg-[#2D8EC5]" />
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                    {/* Upright timeline, restarts on every change (keyed). */}
                    <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[3px] bg-white/15">
                        <motion.div
                            key={active}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: ROTATE_INTERVAL / 1000, ease: "linear" }}
                            className="w-full h-full origin-top bg-[#2D8EC5]"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full lg:flex-1">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            // Fragment, not a wrapper element: the active button grows with
                            // lg:flex-1 against this flex column, which a wrapper would break.
                            <Fragment key={item.title}>
                                <button
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`relative text-left flex flex-col justify-center gap-3 px-6 sm:px-8 border-b border-[#cac9c9] last:border-b-0 overflow-hidden bg-[#F8FAFC] ${isActive ? "py-6 lg:flex-1" : "py-5"}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="scm-module-highlight"
                                            className="absolute inset-0 bg-[#E8EBEF] border-l-[12px] border-l-[#1C5F85]"
                                            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                    )}
                                    <div className="relative flex flex-col gap-3 ">
                                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden flex flex-col gap-3 text-[#55595E] text-base w-[92%] font-normal"
                                                >
                                                    {item.desc.map((paragraph) => (
                                                        <p key={paragraph}>{paragraph}</p>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
