"use client";

import { LuClipboardList, LuLifeBuoy, LuPencilRuler, LuRocket, LuSearch, LuSettings } from "react-icons/lu";
import { motion } from "framer-motion";

// Microsoft Sure Step's phases, each marked by a Lucide icon (same set and
// treatment as the other service pages' methodology rows).
const PHASES = [
    {
        icon: LuSearch,
        title: "Diagnostic",
        desc: "Review current processes, systems, and goals to confirm Business Central is the right fit and scope the project.",
    },
    {
        icon: LuClipboardList,
        title: "Analysis",
        desc: "Document requirements by business area and map them to standard Business Central functionality.",
    },
    {
        icon: LuPencilRuler,
        title: "Design",
        desc: "Define the chart of accounts, dimensions, posting setup, workflows, and any integrations or extensions needed.",
    },
    {
        icon: LuSettings,
        title: "Development",
        desc: "Configure the system, build approved extensions, and prepare data migration from your existing tools.",
    },
    {
        icon: LuRocket,
        title: "Deployment",
        desc: "Run user acceptance testing and training, migrate opening balances, and take the business live.",
    },
    {
        icon: LuLifeBuoy,
        title: "Operation",
        desc: "Stabilize after go-live, resolve early issues, and plan the next round of improvements.",
    },
];

export default function SureStepApproach() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        How We Implement: Microsoft Sure Step
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Every Business Central implementation follows Microsoft&apos;s Sure Step phases, with guided
                        setup assistance at each stage so your team knows what is being configured and why.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
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
                                    <h2 className="text-[#10161d] text-xl sm:text-2xl font-semibold">{phase.title}</h2>
                                    <p className="text-[#4a5568] text-base sm:text-lg font-light">{phase.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#d3dae2]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
