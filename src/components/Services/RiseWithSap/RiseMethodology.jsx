"use client";

import { LuActivity, LuClipboardList, LuCompass, LuRocket, LuSearch, LuWrench } from "react-icons/lu";
import { motion } from "framer-motion";

const PHASES = [
    {
        icon: LuSearch,
        title: "Discover",
        desc: "We assess your current landscape and business priorities to frame the case for moving to SAP S/4HANA Cloud.",
    },
    {
        icon: LuClipboardList,
        title: "Prepare",
        desc: "We set up the project, the team, and the plan, and confirm the scope, timeline, and governance for the move.",
    },
    {
        icon: LuCompass,
        title: "Explore",
        desc: "We run fit-to-standard workshops against SAP best practices to decide where standard processes fit and where gaps remain.",
    },
    {
        icon: LuWrench,
        title: "Realize",
        desc: "We configure, extend, integrate, and test the solution in iterative cycles, with supervised configuration at each step.",
    },
    {
        icon: LuRocket,
        title: "Deploy",
        desc: "We prepare data, users, and cutover so the new system goes live with minimal disruption to daily operations.",
    },
    {
        icon: LuActivity,
        title: "Run",
        desc: "We stay with you after go-live to stabilise operations, adopt new SAP releases, and keep improving the solution.",
    },
];

export default function RiseMethodology() {
    return (
        <section className="w-full py-10 px-8 sm:p-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Rise with SAP <span className="text-[#2D8EC5]">Methodology</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A phased path aligned with SAP Activate, from the first assessment through to life after
                        go-live.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {PHASES.map((phase) => (
                        <div key={phase.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <phase.icon aria-hidden="true" strokeWidth={1.5} className="size-full text-[#1C5F85]" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{phase.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{phase.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#E2E5EA]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
