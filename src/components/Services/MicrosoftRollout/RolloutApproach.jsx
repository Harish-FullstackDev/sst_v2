"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        title: "Plan",
        desc: "Define scope, sites, and timelines, and align the rollout strategy with business goals.",
    },
    {
        title: "Prepare",
        desc: "Assess risks, readiness, and integration points across the existing IT environment.",
    },
    {
        title: "Pilot",
        desc: "Deploy to a first group, validate the setup, and refine before scaling further.",
    },
    {
        title: "Deploy",
        desc: "Roll out in planned waves sized to your organization, keeping downtime to a minimum.",
    },
    {
        title: "Adopt",
        desc: "Train and support users so teams take up new tools confidently and effectively.",
    },
];

export default function RolloutApproach() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-14"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Where strategy meets execution</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Rollout Approach</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    A systematic path from planning to deployment, built to minimize risk and disruption.
                </p>
            </motion.div>

            {/* Staircase cards: each step sits slightly lower than the last on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 lg:items-start">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        style={{ "--step": index }}
                        className="group relative flex flex-col gap-4 bg-white border border-[#E2E5EA] p-6 lg:mt-[calc(var(--step)*28px)] transition-colors duration-300 hover:bg-[#1C5F85] hover:border-[#1C5F85]"
                    >
                        <span className="text-[#2d8ec5] text-5xl font-light leading-none transition-colors duration-300 group-hover:text-white/60">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold transition-colors duration-300 group-hover:text-white">
                            {step.title}
                        </h3>
                        <p className="text-[#55595E] text-base font-light transition-colors duration-300 group-hover:text-white/85">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
