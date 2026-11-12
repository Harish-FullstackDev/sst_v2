"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import transitionIcon from "@/assets/Services/SapAms/icons/transition.svg";
import stabilizeIcon from "@/assets/Services/SapAms/icons/stabilize.svg";
import runIcon from "@/assets/Services/SapAms/icons/run.svg";
import improveIcon from "@/assets/Services/SapAms/icons/improve.svg";

const STEPS = [
    {
        icon: transitionIcon,
        title: "Transition & Knowledge Transfer",
        desc: "We document your landscape, custom objects and open issues, and run structured KT sessions with your current team.",
    },
    {
        icon: stabilizeIcon,
        title: "Stabilize",
        desc: "We clear the ticket backlog, agree priorities and SLAs, and set up the known-issue repository for your system.",
    },
    {
        icon: runIcon,
        title: "Run & Report",
        desc: "Tickets are handled against agreed SLAs, with daily updates and regular reporting on volumes and resolution times.",
    },
    {
        icon: improveIcon,
        title: "Continuously Improve",
        desc: "Recurring incidents are traced to root cause and fixed, so the support effort shifts from firefighting to optimization.",
    },
];

// Sticky, percentage-width intro column next to a flexible icon + text list,
// each row closed by its own hairline divider.
export default function AmsEngagementFlow() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How an <span className="text-[#2D8EC5]">AMS Engagement</span> Runs</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Every engagement moves through the same four stages, so support quality does not depend on
                        who happens to pick up the ticket.
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
