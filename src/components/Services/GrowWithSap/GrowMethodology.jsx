"use client";

import { LuArrowRightLeft, LuListChecks, LuRocket, LuSearch, LuSettings } from "react-icons/lu";
import { motion } from "framer-motion";

const STEPS = [
    {
        icon: LuSearch,
        title: "Discover & Plan",
        desc: "We confirm business goals and scope, so the project starts from a working SAP S/4HANA Cloud baseline.",
    },
    {
        icon: LuListChecks,
        title: "Fit-to-Standard",
        desc: "We walk your teams through preconfigured best-practice processes and agree where standard fits and where small extensions are needed.",
    },
    {
        icon: LuSettings,
        title: "Configure & Extend",
        desc: "We configure the system under supervision and build side-by-side extensions on SAP BTP, keeping the core clean for upgrades.",
    },
    {
        icon: LuArrowRightLeft,
        title: "Migrate & Test",
        desc: "We load master and transactional data with SAP migration tools and test end-to-end business scenarios.",
    },
    {
        icon: LuRocket,
        title: "Go Live & Grow",
        desc: "We support cutover and the first weeks of operation, then help you adopt new capabilities with each SAP release.",
    },
];

// Sticky, percentage-width intro column next to a flexible icon + text list with
// its own trailing divider per row.
export default function GrowMethodology() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Grow with SAP Methodology</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A cloud-first delivery path built on SAP Activate, designed to get a standard system live
                        quickly and keep it improving.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <step.icon aria-hidden="true" strokeWidth={1.5} className="size-full text-[#1C5F85]" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
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
