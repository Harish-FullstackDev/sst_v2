"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuCpu, LuDatabase, LuImport, LuShieldCheck } from "react-icons/lu";

const ITEMS = [
    { title: "Ingest", desc: "Integrate diverse sources so data flows seamlessly into one platform for comprehensive analysis.", icon: LuImport },
    { title: "Process", desc: "Process data at speed with distributed engines built for efficient large-scale analytics.", icon: LuCpu },
    { title: "Store", desc: "Securely store and scale structured and unstructured data in the cloud.", icon: LuDatabase },
    { title: "Govern", desc: "Keep data governed, high quality, and compliant so every decision rests on reliable information.", icon: LuShieldCheck },
];

const ROTATE_INTERVAL = 4500;

// No photos. The left panel is navy (#0A2B3E to #003756) with a soft deep-blue
// rise. The active stage's Lucide icon (same set as the rest of the site) sits
// centred in a fine line and draws itself stroke by stroke on every change (the
// pen-sketch motion used on other pages), with the stage name set lightly below.
// Along the panel's right edge, beside the stage list, a 3px brand-blue line
// fills top to bottom over the rotate interval: the timeline from other pages,
// stood upright so it reads as data flowing down the pipeline.
const DRAW_KEYFRAMES = "@keyframes pipeline-draw { to { stroke-dashoffset: 0; } }";

export default function BigDataPipeline() {
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">The Big <span className="text-[#2D8EC5]">Data Pipeline</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">How data moves from raw sources to trusted, analysis-ready information.</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto lg:h-[500px] pt-16 md:pt-16">
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
                            className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                        >
                            {(() => {
                                const Icon = ITEMS[active].icon;
                                return (
                                    <Icon
                                        aria-hidden="true"
                                        strokeWidth={0.6}
                                        className="w-[42%] h-auto text-white/55 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[pipeline-draw_2s_cubic-bezier(0.65,0,0.35,1)_forwards]"
                                    />
                                );
                            })()}
                            <p className="text-white/80 text-lg font-light uppercase tracking-[0.25em]">{ITEMS[active].title}</p>
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
                            // Fragment, not a wrapper element: the buttons size themselves with
                            // sm:h-1/4 against this flex column, which a per-item wrapper would
                            // reparent and break at lg.
                            <Fragment key={item.title}>
                                <button
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`relative text-left flex flex-col justify-center gap-3 px-6 sm:px-8 sm:h-1/4 border-b border-[#cac9c9] last:border-b-0 overflow-hidden bg-[#F8FAFC] ${isActive ? "py-6 sm:py-6" : "py-6 sm:py-0"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="pipeline-active-highlight"
                                            className="absolute inset-0 bg-[#E8EBEF] border-l-[12px] border-l-[#1C5F85]"
                                            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                    )}
                                    <div className="relative flex flex-col gap-3 ">
                                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden text-[#55595E] text-base w-[80%] font-normal"
                                                >
                                                    {item.desc}
                                                </motion.p>
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
