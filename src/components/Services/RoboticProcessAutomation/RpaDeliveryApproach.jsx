"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/Services/RoboticProcessAutomation/icons/assess.svg";
import designIcon from "@/assets/Services/RoboticProcessAutomation/icons/design.svg";
import buildIcon from "@/assets/Services/RoboticProcessAutomation/icons/build.svg";
import monitorIcon from "@/assets/Services/RoboticProcessAutomation/icons/monitor.svg";

const STEPS = [
    {
        icon: assessIcon,
        title: "Assess",
        desc: "We review candidate processes for volume, rule stability, and exception rates to find where bots will deliver the clearest return.",
    },
    {
        icon: designIcon,
        title: "Design",
        desc: "We document the target process, define exception handling, and agree on the controls and credentials each bot will use.",
    },
    {
        icon: buildIcon,
        title: "Build & Test",
        desc: "Bots are developed and tested against real process scenarios, including the edge cases, before they touch production data.",
    },
    {
        icon: monitorIcon,
        title: "Deploy & Monitor",
        desc: "We release bots with monitoring, run logs, and a support model, then refine them as processes and systems change.",
    },
];

// Sticky, percentage-width intro column next to a flexible icon+text list with
// its own trailing divider per row.
export default function RpaDeliveryApproach() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Deliver <span className="text-[#2D8EC5]">RPA</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A staged approach that proves value on the right processes before automation scales across
                        the business.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={step.icon} alt="" fill className="object-contain" />
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
