"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import discoverIcon from "@/assets/Solutions/S4hanaPublicCloud/icon-assess.svg";
import exploreIcon from "@/assets/Solutions/S4hanaPublicCloud/icon-prioritize.svg";
import realizeIcon from "@/assets/Solutions/S4hanaPublicCloud/icon-execute.svg";
import deployIcon from "@/assets/Solutions/S4hanaPublicCloud/icon-govern.svg";

const STEPS = [
    {
        icon: discoverIcon,
        title: "Discover & Prepare",
        desc: "We confirm scope, the business processes and countries in play, and the integration landscape, then set up the project plan and starter system.",
    },
    {
        icon: exploreIcon,
        title: "Explore: Fit to Standard",
        desc: "Workshops walk your teams through SAP's preconfigured best-practice processes and record only the gaps that genuinely need configuration or extension.",
    },
    {
        icon: realizeIcon,
        title: "Realize",
        desc: "We configure the solution, migrate data with SAP's migration tools, build integrations and side-by-side extensions, and test end to end.",
    },
    {
        icon: deployIcon,
        title: "Deploy & Run",
        desc: "We train users, run cutover and go-live, then help you test and adopt each new SAP release as it arrives.",
    },
];

// Sticky, percentage-width intro column next to a flexible icon + text list with
// a trailing divider per row.
export default function AdoptionJourney() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Take You <span className="text-[#2D8EC5]">Live</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A public cloud rollout follows the phases of SAP Activate, so the standard processes are
                        understood before anything is configured or extended.
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
